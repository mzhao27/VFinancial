import React, { Component } from "react";
import Cell from "./Cell";

class Row extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <tr className="data-row">
        {this.props.headerKeys.map((key) => (
          <Cell
            value={this.props.rowData[key]}
            isHeader={false}
            isCategory={key == "category"}
            isHighlighted={this.props.rowData["category"] == this.props.categoryHighlighted}
          />
        ))}
      </tr>
    );
  };
}

export default Row;
