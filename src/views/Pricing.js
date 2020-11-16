import React from "react";
import Container from "reactstrap/lib/Container";
import PDF from "../assets/pdf/crystalclear_prices.pdf";

function Pricing() {

  return (
    <Container >

    
  <embed
    src={PDF}
    type="application/pdf"
    height={900}
    width={"100%"}
  />
  </Container>
  );
  }

export default Pricing;