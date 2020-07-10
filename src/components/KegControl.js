import React from "react";
import LandingPage from "./LandingPage";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail"
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class KegControl extends React.Component {
  
  landingPageButtonClick = () => {
    const {dispatch} = this.props;
    const action = a.seeLandingPage()
    dispatch(action);
  }

  addKegButtonClick = () => {
    const {dispatch} = this.props;
    const action = a.seeForm()
    dispatch(action);
  }

  kegListButtonClick = () => {
    if (this.props.selectedKeg != null) {
      const {dispatch} = this.props;
      const action = a.unselectKeg();
      dispatch(action)
      const action2 = a.seeKegList();
      dispatch(action2);

    } else {
      const {dispatch} = this.props;
      const action = a.seeKegList();
      dispatch(action);
    }
  }

  handleChangingSelectedKeg = (id) => {
    const {dispatch} = this.props;
    const action = a.selectKeg(id);
    dispatch(action);
  }

  handleAddingNewKegToList = (newKeg) => {
    const {dispatch} = this.props;
    const action = a.addKeg(newKeg)
    dispatch(action)
    const action2 = a.seeKegList()
    dispatch(action2)
  }

  handleDeletingKeg = (id) => {
    const {dispatch} = this.props;
    const action = a.deleteKeg(id);
    dispatch(action)
    const action2 = a.seeKegList()
    dispatch(action2)
    const action3 = a.unselectKeg()
    dispatch(action3)
  }

  handleBuyingPint = (keg) => {
    const {dispatch} = this.props;
    const action = a.buyPint(keg) 
    dispatch(action)
  }

  render () {
    let currentVisibleState = null;
    let button1 = null;
    let button1Text = null;
    let button2 = null;
    let header = null;
   
    if (this.props.selectedKeg != null) {
      currentVisibleState = <KegDetail 
        keg = {this.props.masterKegList[`${this.props.selectedKeg}`]}
        deleteKeg = {this.handleDeletingKeg}
      />
      
      button1 = this.kegListButtonClick;
      button1Text = "Return to Keg List";
    }
    else if (this.props.formVisibleOnPage === "see-form") {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      button1 = this.kegListButtonClick;
      button1Text = "Return to Keg List"
    } 
    else if (this.props.formVisibleOnPage === 'landing-page') {
      currentVisibleState = <LandingPage/>;
      button1 = this.kegListButtonClick;
      button1Text = "View Our Keg List"
    } 
    else if (this.props.formVisibleOnPage === 'keg-list') {
      currentVisibleState = <KegList 
        kegList = {this.props.masterKegList} 
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
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl)

export default KegControl;