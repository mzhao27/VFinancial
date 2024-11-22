import "./css/CategoryBreakdown.css";
import React, { Component } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import axios from "axios";

class CategoryBreakdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryClicked: null,
    };
  }

  onItemClick = (d, categoryBreakdown) => {
    let i = d.dataIndex;
    if (i == 3) {
      return; // ignore OTHER
    }
    let categoryClicked = categoryBreakdown[i][0];
    if (this.state.categoryClicked != null && this.state.categoryClicked == categoryClicked) {
      this.props.onCategoryUnclick();
      this.setState({ categoryClicked: null });
    } else {
      this.props.onCategoryClick(categoryClicked);
      this.setState({ categoryClicked: categoryClicked });
    }
  };

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

  renderCategoryBreakdown = () => {
    const categoryBreakdown = this.props.categoryBreakdown;
    const restValue = this.props.total - categoryBreakdown[0][1] - categoryBreakdown[1][1] - categoryBreakdown[2][1];
    return (
      <div>
        <div className="category-breakdown-total">Total spent: {this.props.total}</div>
        <div className="category-breakdown-pie-chart">
          <PieChart
            series={[
              {
                data: [
                  { id: categoryBreakdown[0][0], value: categoryBreakdown[0][1], label: categoryBreakdown[0][0] },
                  { id: categoryBreakdown[1][0], value: categoryBreakdown[1][1], label: categoryBreakdown[1][0] },
                  { id: categoryBreakdown[2][0], value: categoryBreakdown[2][1], label: categoryBreakdown[2][0] },
                  { id: "OTHER", value: restValue, label: "OTHER" },
                ],
              },
            ]}
            width={800}
            height={200}
            onItemClick={(_event, d) => {
              this.onItemClick(d, categoryBreakdown);
            }}
          />
        </div>
      </div>
    );
  };

  render() {
    return <div className="category-breakdown-container">{this.renderCategoryBreakdown()}</div>;
  }
}

export default CategoryBreakdown;
