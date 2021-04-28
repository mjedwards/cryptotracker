import React, {useEffect, useState} from 'react';
import axios from 'axios'
import CoinGraph from './graphDisplay'

const buttonStyle = {
    margin: '10px 0'
  };

let headers = {
    'Content-Type': 'application/json'
    }
const CoinButton = ({ props, label, symbol}) => {
    const [priceData, setPriceData] = useState();
    const [coinPrice, setCoinPrice] = useState();
    return (
    <button
      className="btn btn-default"
      style={buttonStyle}
      onClick={ useEffect(() => {
        axios.get(``,  headers).then((response) => {
            // console.log(response)
            setPriceData(response.data);
            setCoinPrice(response.data);
        }).catch(errors => {
            console.log(`The error was: ${errors}`);
          })
      },[])}
    >
      {label}
      <br/>
      {symbol}
    </button>)
};
  

export default CoinButton;