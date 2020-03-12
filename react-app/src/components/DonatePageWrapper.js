import React from "react";
import SupportPlanetFirst from "../components/SupportPlanetFirst";
import DonateForm from "../components/DonateForm";

const DonatePageWrapper = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 col-xs-12 DonatePageWrapper_left">
          <SupportPlanetFirst />
        </div>
        <div className="col-lg-4 col-xs-12 DonatePageWrapper_right">
          <h3>
            <strong>DONATE TODAY</strong>
          </h3>
          <p>
            Supporting Planet First means supporting solutions when it matters
            most.
          </p>
          <DonateForm  title = {props.title}/>
        </div>
      </div>
    </div>
  );
};

export default DonatePageWrapper;
