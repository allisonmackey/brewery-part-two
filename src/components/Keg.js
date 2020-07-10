import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  function buyPint(){
    props.buy(props.index)
  };
  return(
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} || {props.brand}</h3>
        <p>Keg Price: ${props.price}.00 </p>  
        <p>{props.alcoholContent}% per pint</p>
        <p>Pints Left: {props.pintsLeft}</p>
        <br/>
      </div>
      <button onClick={buyPint}>Buy Pint</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  pintsLeft: PropTypes.number,
  alcoholContent: PropTypes.number,
  whenKegClicked: PropTypes.func,
  buy: PropTypes.func
}
export default Keg;
