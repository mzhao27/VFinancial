import "./css/TransactionsHome.css";
import React, { Component } from "react";
import DateSelector from "./components/DateSelector";

class TransactionsDetails extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div className="home-app-container">
        <h1 className="home-app-title">VFinacial</h1>
        <DateSelector />
      </div>
    );
  };
}

export default TransactionsDetails;
