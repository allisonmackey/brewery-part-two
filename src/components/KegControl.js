import React from "react";
import LandingPage from "./LandingPage";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail"
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null
    };
  }
  
  landingPageButtonClick = () => {
    const {dispatch} = this.props;
    const action = a.seeLandingPage()
    dispatch(action);
  }

  addKegButtonClick = () => {
    const {dispatch} = this.props;
    const action = {
      type: c.SEE_FORM
    }
    dispatch(action);
  }

  kegListButtonClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null
      })
      const {dispatch} = this.props;
      const action = {
        type: c.KEG_LIST
      }
      dispatch(action);

    } else {
      const {dispatch} = this.props;
      const action = {
        type: c.KEG_LIST
      }
      dispatch(action);
    }
  }

  // need to move to reducer/keg-list-reducer
  // handleBuyingPint = (index) => {
  //   const currentPints = [...this.state.kegList];
  //   if (currentPints[index].pintsLeft <= 1 || isNaN(currentPints[index].pintsLeft)) {
  //     currentPints[index].pintsLeft = "Out of Stock";
  //     this.setState({
  //       kegList: currentPints
  //     });
  //   } else {
  //     currentPints[index].pintsLeft -= 1;
  //     this.setState({
  //       kegList: currentPints
  //     });
  //   }
  // }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.kegList.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg
    });
  }

  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({
      kegList: newKegList,
      formVisibleOnPage: "keg-list"
    });
  }



  render () {
    let currentVisibleState = null;
    let button1 = null;
    let button1Text = null;
    let button2 = null;
    let header = null;
    // let button2Text = null;

    if (this.state.selectedKeg != null) {
      currentVisibleState = <KegDetail 
      keg = {this.state.selectedKeg}/>
      button1 = this.kegListButtonClick;
      button1Text = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage === "add-keg") {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      button1 = this.kegListButtonClick;
      button1Text = "Return to Keg List"
    } 
    else if (this.state.formVisibleOnPage === 'landing-page') {
      currentVisibleState = <LandingPage/>;
      button1 = this.kegListButtonClick;
      button1Text = "View Our Keg List"
    } 
    else if (this.state.formVisibleOnPage === 'keg-list') {
      currentVisibleState = <KegList 
        kegList = {this.state.kegList} 
        onKegSelection={this.handleChangingSelectedKeg}
        buyingPint = {this.handleBuyingPint}
      />
      header = "MENU"
      button1 = this.landingPageButtonClick; 
      button1Text = "View Home Page";
      button2 = <button onClick={this.addKegButtonClick}>Add Keg</button>
    } 
      
    return(
      <React.Fragment>
        <h4>{header}</h4>
        {currentVisibleState}
        <div className="button-wrapper">
          <button onClick={button1}>{button1Text}</button>
          {button2}
        </div>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList, 
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl)

export default KegControl;