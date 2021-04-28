import React from 'react';
import Accordion from './Accordion';
import CoinButton from './coinButton'


const CoinInfo = (props) => {
    if (!props) return <h2>Loading</h2> ;
    return (
        <div>
            {props.coin.map(i => {
                return <Accordion key={i.id} label={i.name} symbol={i.symbol} circulating={i.circulating_supply} logo={i.image} max={i.max_supply} mkt_cap={i.market_cap} price={i.current_price} volume={i.total_volume}></Accordion>
            })}
        </div>
    )
}

export default CoinInfo;