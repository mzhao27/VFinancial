import "./css/Cell.css";
import React, { Component } from "react";
import * as C from "./../utils/Constants";

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  renderValue = (value) => {
    if (this.props.isCategory) {
      return C.CATEGORIES_TEXT_MAP[value];
    } else if (("" + value).includes("T00:00:00Z")) {
      return value.split("T")[0];
    }
    return value;
  };

  render = () => {
    const value = this.props.value;
    if (this.props.isHeader) {
      return <th className="cell  cell-header"> {value} </th>;
    }
    return (
      <td className={"cell" + (this.props.isHighlighted ? " cell--highlighted" : "")}>{this.renderValue(value)}</td>
    );
  };
}

export default Cell;
