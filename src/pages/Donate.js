import React from "react";
import DonatePageWrapper from "../components/DonatePageWrapper"

const Donate = (props) => {
  return (
    <div>
    <DonatePageWrapper title={props.location.state.title}/>
    </div>
  );
};

export default Donate;