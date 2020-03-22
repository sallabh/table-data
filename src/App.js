import React from "react";
import TableRow from "./TableRow";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: []
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/mln1c")
      .then(res => res.json())
      .then(res => this.setState({ rows: res.rows }));
  }

  render() {
    return (
      <div style={{ margin: "40px  40px" }}>
        <TableRow rows={this.state.rows} />
      </div>
    );
  }
}

export default App;
