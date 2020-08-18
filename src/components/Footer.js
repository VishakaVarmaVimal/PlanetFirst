import React from "react";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="gray" className="page-footer font-small fixed-bottom footer__color">
      <MDBContainer fluid className="text-center text-md-left">
        
        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          
          <div className="text-left py-3 footer">
            <a href="/about">About Us</a>
         </div>
         <div className="text-center py-3 footer">© 2019 Copyright:
            <a href="/"> PlanetFirst.com</a>
         </div>
         <div className="text-right py-3 footer">
            <a href="/contact">Contact</a>
         </div>
         
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;