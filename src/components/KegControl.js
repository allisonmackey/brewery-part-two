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
    let button2 = null;
    let button3 = null;
    let header = null;
   
    if (this.props.selectedKeg != null) {
      currentVisibleState = <KegDetail 
        keg = {this.props.masterKegList[`${this.props.selectedKeg}`]}
        deleteKeg = {this.handleDeletingKeg}
        buyPint = {this.handleBuyingPint}
      />
      button1 = <button onClick={this.kegListButtonClick}> Return to Keg List</button>
    
    }
    else if (this.props.formVisibleOnPage === "see-form") {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      button1 = <button onClick={this.kegListButtonClick}> Return to Keg List</button>
      
    } 
    else if (this.props.formVisibleOnPage === 'landing-page') {
      currentVisibleState = <LandingPage/>;
      button1 = <button onClick={this.kegListButtonClick}>View Our Keg List</button>
    } 
    else if (this.props.formVisibleOnPage === 'keg-list') {
      currentVisibleState = <KegList 
        kegList = {this.props.masterKegList} 
        onKegSelection={this.handleChangingSelectedKeg}
      />
      header = "MENU" 
      button2 = <button className ='top-button' onClick= {this.landingPageButtonClick}>HOME</button>
      button3 = <button className ='top-button' onClick= {this.addKegButtonClick}>ADD KEG   ||</button>
    } 
      
    return(
      <React.Fragment>
        <h4>{header}</h4>
        <div className="button-wrapper">
          {button3}
          {button2}
        </div>
       
        {currentVisibleState}
        <div className="button-wrapper">
          {button1}
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