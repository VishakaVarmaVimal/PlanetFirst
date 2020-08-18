import React from "react";

import Donatebutton from "../components/Donatebutton";

const DonationCard = props => {
  return (
    <div className="contact-card">
      <img src={props.imgUrl} alt="" />
      <div className="donationTitle">{props.title}</div>
      <Donatebutton title={props.title}/>
    </div>
  );
};

export default DonationCard;
