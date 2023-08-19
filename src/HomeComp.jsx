import React, { Component } from "react";
import ClientComp from "./ClientComp"; // Import Cleint Component
import ExchangeComp from "./ExchangeComp"; // Import Exchange Component

export class HomeComp extends Component {
  render() {
    return (
      <>
        <h1> Home Component</h1>
        <ClientComp />
        <ExchangeComp />
      </>
    );
  }
}

// We can define class as default class
export default HomeComp;
