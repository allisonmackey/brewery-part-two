import React from "react"; 
import PropTypes from "prop-types"


function KegDetail(props) {
  const {keg, deleteKeg} = props;
  console.log(keg)
  return(
    <React.Fragment>
      <h3>{keg.name} - {keg.brand}</h3>
      <p>Price: ${keg.price}.00  {keg.alcoholContent}% per pint</p> 
      <p>Pints Left: {keg.pintsLeft}</p>
      <button onClick={() => deleteKeg(keg.id)}>Delete Keg</button>
      <br/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  deleteKeg: PropTypes.func
}

export default KegDetail;  