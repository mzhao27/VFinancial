import "./css/Transaction.css";
import React, { Component } from "react";
import axios from "axios";
import Table from "./Table";

class Transaction extends Component {
  constructor(props) {
    super(props);
  }

  refreshList = (year, month) => {
    axios
      .get("/transactions/details/" + year + "/" + month, {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        this.setState({
          transactions: data.transactions,
          categoryBreakdown: data.category_breakdown,
          total: data.total,
        });
      })
      .catch((err) => console.log(err));
  };

  renderTransactions = () => {
    const data = this.props.transactions;
    if (data.length === 0) {
      return <div className="table-container"></div>;
    }

    const headers = [
      { title: "Transaction Date", key: "date" },
      { title: "Description", key: "description" },
      { title: "Category", key: "category" },
      { title: "Amount", key: "amount" },
    ];

    return <Table headers={headers} data={data} categoryHighlighted={this.props.categoryHighlighted} />;
  };

  render = () => {
    // this.refreshList(2024, 10);
    return <div className="transactions-container">{this.renderTransactions()}</div>;
  };
}

export default Transaction;
