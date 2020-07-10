import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return(
    <React.Fragment>
      <div className ="detail" onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} || {props.brand}</h3>
        <p>Keg Price: ${props.price}.00 </p>  
        <p> Alcohol Content: {props.alcoholContent}% per pint</p>
        <p>Pints Left: {props.pintsLeft}</p>
      </div>
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
}
export default Keg;
