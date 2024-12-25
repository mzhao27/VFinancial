import "./css/DateSelector.css";
import React, { Component } from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as C from "../utils/Constants";

class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: this.props.year,
      month: this.props.month,
    };
  }

  handleYearChange = (event) => {
    this.setState({ year: event.target.value });
  };

  handleMonthChange = (event) => {
    this.setState({ month: C.MONTH.indexOf(event.target.value) + 1 });
  };

  handleSubmit = () => {
    window.location.href = "/transactions/details/" + this.state.year + "/" + this.state.month + "/";
  };

  buildYearArray = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 5; i >= 0; i--) {
      years.push(currentYear - i);
    }
    return years;
  };

  render = () => {
    const years = this.buildYearArray();
    return (
      <div className="date-selector-container">
        <FormControl sx={{ backgroundColor: "#fff", m: 1, minWidth: 120, maxHeight: 50 }}>
          <InputLabel id="year-label">Year</InputLabel>
          <Select labelId="year-label" id="year" value={this.state.year} label="Year" onChange={this.handleYearChange}>
            {years.map((year) => (
              <MenuItem value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ backgroundColor: "#fff", m: 1, minWidth: 120, maxHeight: 50 }}>
          <InputLabel id="month-label">Month</InputLabel>
          <Select
            labelId="month-label"
            id="month"
            value={this.state.month}
            label="Month"
            onChange={this.handleMonthChange}
          >
            {C.MONTH.map((month) => (
              <MenuItem value={month}>{month}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {!this.state.year || !this.state.month ? (
          <Button disabled sx={{ m: 1, width: 120, minHeight: 61.75 }} variant="contained" size="large">
            Show
          </Button>
        ) : (
          <Button
            sx={{ m: 1, width: 120, minHeight: 61.75 }}
            onClick={() => {
              this.handleSubmit();
            }}
            variant="contained"
            size="large"
          >
            Show
          </Button>
        )}
      </div>
    );
  };
}

export default DateSelector;
