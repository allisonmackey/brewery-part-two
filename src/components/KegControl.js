import React from "react";
import LandingPage from "./LandingPage";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail"


class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: 'landing-page',
      selectedKeg: null,
      kegList: [
        { name: "Mo-haze-ic IPA",
          brand: "Migration Brewery",
          price: 170,
          alcoholContent: 6.1,
          pintsLeft: 124,
          id: 1
        },
        { name: "Starburst IPA",
          brand: "Ecliptic Brewing",
          price: 180,
          alcoholContent: 7.8,
          pintsLeft: 124,
          id: 2
        },
        { name: "IPA",
          brand: "Bouy Beer Co.",
          price: 150,
          alcoholContent: 7.5,
          pintsLeft: 124,
          id: 3
        },
        { name: "Ranier",
          brand: "Pabst Brewing",
          price: 100,
          alcoholContent: 4.73,
          pintsLeft: 124,
          id: 4
        }
      ]
    };
  }
  //  eventual code for buying a pint? might need to go in kegList instead. 
  handleBuyingPint = (index) => {
    const currentPints = [...this.state.kegList];
    if (currentPints[index].pintsLeft <= 1 || isNaN(currentPints[index].pintsLeft)) {
      currentPints[index].pintsLeft = "Out of Stock";
      this.setState({
        kegList: currentPints
      });
    } else {
      currentPints[index].pintsLeft -= 1;
      this.setState({
        kegList: currentPints
      });
    }
  }

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

  // handleClick = () => {
  //   if (this.state.selectedKeg != null) {
  //     this.setState({
  //       formVisibleOnPage: "keg-list",
  //       selectedKeg: null
  //     })
  //     console.log(this.state.selectedKeg)
  //   } 
  //   else {
  //     this.setState(prevState => ({
  //       formVisibleOnPage: !prevState.formVisibleOnPage
  //     }));
  //   }
  // }

  landingPageButtonClick = () => {
    this.setState({
      formVisibleOnPage: "landing-page"
    });
  }

  kegListButtonClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: "keg-list",
        selectedKeg: null
      })
    } else {
      this.setState({
        formVisibleOnPage: "keg-list"
      });
    }
  }

  addKegButtonClick = () => {
    this.setState({
      formVisibleOnPage: "add-keg"
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

export default KegControl;