import React from "react";
import DonationCard from "../components/DonationCard";
import TestImages from "../components/DonationImages";

const DonationWrapper = () => {
  return (
    <div className = "DonationWrapper">
    <div className="container-fluid">
      <div className="row">
      <h1 className="whyDonateTitle">Why Donate?</h1>
      <br></br>
      <p className="WhyDonateText">People like you enable the countries and peoples of the world that own the remaining rainforests build a sustainable balance between humans and the environment.  Together, we help create the policies and tools for sustainable livelihoods that will protect our forests, biodiversity, animals,
      water supplies and our climate – the life support systems of our planet.</p>
      <br></br>
        {TestImages.map(({ id, src, title }) => (
          <div className="col-lg-3 col-md-3 col-sm-2 col-xs-2">
            <div class="thumbnail">
              <DonationCard key={id} imgUrl={src} title={title} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DonationWrapper;
