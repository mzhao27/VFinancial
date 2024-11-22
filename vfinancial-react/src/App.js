import "./App.css";
import React, { Component } from "react";
import CategoryBreakdown from "./components/CategoryBreakdown"
import Transaction from "./components/Transaction"

class App extends Component {
    constructor(props) {
        super(props);
        const data = JSON.parse(document.getElementById('data').textContent);
        this.state = {
            transactions: data.transactions,
            categoryBreakdown: data.category_breakdown,
            categoryHighlighted: null,
            total: data.total,
        }
    }

    onCategoryClick = (categoryId) => {
        this.setState({ categoryHighlighted: categoryId });
    };

    onCategoryUnclick = () => {
        this.setState({ categoryHighlighted: null });
    };

    render() {
        return (
            <div>
                <h1 className="app-title">VFinacial</h1>
                <CategoryBreakdown
                    categoryBreakdown={ this.state.categoryBreakdown }
                    total={ this.state.total }
                    onCategoryClick={ this.onCategoryClick }
                    onCategoryUnclick={ this.onCategoryUnclick }
                />
                <Transaction transactions={ this.state.transactions } categoryHighlighted={ this.state.categoryHighlighted } />
            </div>
        );
    }
}

export default App;
