import React from "react"; 
import PropTypes from "prop-types"

function KegDetail(props) {
  const {keg} = props;

  return(
    <React.Fragment>
      <h3>{keg.name} - {keg.brand}</h3>
      <p>Price: ${keg.price}.00 {keg.alcoholContent}% per pint</p> 
      <p>Pints Left: {keg.pintsLeft}</p>
      <br/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;  