import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {LineChart, CartesianGrid, Tooltip, YAxis, XAxis, Legend, Line} from 'recharts';


const CoinGraph = (props) => {
    const lowerName = props.name.toLowerCase();
    const [graphData, setGraphData] = useState([{}]);
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${lowerName}/market_chart?vs_currency=usd&days=30&interval=daily`).then((response) => {
                setGraphData(response.data.prices.map(i => {
                    return {
                        name: i,
                        price: i[1],
                        date: Math.int(i[0])
                    }
                }));
            })
            .catch((error) => {
                console.log(`The error was: ${error}`);
            });
    },[]);
    console.log(graphData) 
    
    

      
    return (
        <div>
            Price Graph
            {<LineChart key={Date.now()} width={730} height={250} data={graphData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                </LineChart>
            }
      </div>
    )
}

export default CoinGraph;