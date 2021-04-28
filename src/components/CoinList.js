import React, { useEffect, useState }  from 'react';
import axios from 'axios'
import CoinInfo from './coinInformatio';

const Coinlist = () => {
    const [coinData, setCoinData] = useState();
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((response) => {
            setCoinData(response.data);
        }).catch(errors => {
            console.log(`The error was: ${errors}`);
          })
      },[coinData]);
   
   
    
    
    return (
        <div className='coinContainer'>
            {coinData === undefined ? <CoinInfo coin={[]}/> : <CoinInfo coin={coinData}/>}
        </div>
    )
}

export default Coinlist;