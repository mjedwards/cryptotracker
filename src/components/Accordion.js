import React, { useState, useRef }  from "react";

import "./Accordion.css";
import Chevron from "../components/Chevron";
import CoinGraph from "./graphDisplay";

const Accordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");
    const content = useRef(null);
    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
          );
        setRotateState(
        setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
      }
 return (
   <div className="accordion__section">
     <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
     <img src={props.logo} alt='logo for cryptocurrency' className="cryptLogo"></img>
       <p className="accordion__title">{props.label}</p>
       <p className="accordion__title2">{props.symbol}</p>
       <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
     </button>
     <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
        <h3>Circulating Supply</h3>
       <div
         className="accordion__text"
         dangerouslySetInnerHTML={{ __html:  props.circulating}}
       />
       <h3>Max Supply</h3>
       <div
         className="accordion__text"
         dangerouslySetInnerHTML={{ __html:  props.max}}
       />
       <h3>Price</h3>
       <div
         className="accordion__text"
         dangerouslySetInnerHTML={{ __html:  props.price}}
       />
       <h3>Market Cap</h3>
       <div
         className="accordion__text"
         dangerouslySetInnerHTML={{ __html:  props.mkt_cap}}
       />
       <h3>Volume</h3>
       <div
         className="accordion__text"
         dangerouslySetInnerHTML={{ __html:  props.volume}}
       />
       <h3>Price History For The Last 30 Days</h3>
        <CoinGraph name={props.label}/>
     </div>
   </div>
 );
}

export default Accordion;