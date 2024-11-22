import "./css/Cell.css";
import React, { Component } from "react";

class Cell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const value = this.props.value;
        if (this.props.isHeader) {
            return (<th className="cell  cell-header" > {value} </th>);
        }
        return (<td className={"cell" + (this.props.isHighlighted ? " cell--highlighted" : "")} >
            {("" + value).includes("T00:00:00Z") ? value.split("T")[0] : value}
        </td>);
    }
}

export default Cell;
