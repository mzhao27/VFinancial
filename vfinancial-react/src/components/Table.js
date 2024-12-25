import "./css/Table.css";
import React, { Component } from "react";
import Row from "./Row";
import Cell from "./Cell";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: this.props.headers,
      data: this.props.data,
    };
  }

  render = () => {
    const headers = this.state.headers;
    const headerKeys = [];
    headers.map((header) => headerKeys.push(header.key));
    const data = this.state.data;
    return (
      <table className="table-container">
        <thead>
          <tr className="header-row">
            {headers.map((header) => (
              <Cell value={header.title} isHeader={true} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData) => (
            <Row rowData={rowData} headerKeys={headerKeys} categoryHighlighted={this.props.categoryHighlighted} />
          ))}
        </tbody>
      </table>
    );
  };
}

export default Table;
