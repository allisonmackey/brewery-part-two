import React from "react";

function LandingPage(){
 
  return(
    <React.Fragment>
      <h1>Welcome To Our TapRoom</h1>
      <p>Thanks for stopping buy we hope you're thirsty! We've been serving local beers in Portland, OR for the past 10 years and look forward to the many more years to come!</p>
      <p>Ph: (503)555-1234 </p>
      <p>We're Open 6 Days a Week</p>
      <ul>
        <li>Sunday: CLOSED</li>
        <li>Monday: 11am - 9pm</li>
        <li>Tuesday: 11am - 9pm</li>
        <li>Wednesday: 11am - 9pm</li>
        <li>Thursday: 11am - 9pm</li>
        <li>Friday: 11am - 10pm</li>
        <li>Saturday: 11am - 10pm</li>
      </ul>
    </React.Fragment>
  );
}

export default LandingPage;