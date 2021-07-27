import React, { Component } from "react";
import "./App.css";
import Checkbox from "./components/checkbox";
import Timer from "./components/timer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
      seconds: 0,
    };
    this.toggleChange = this.toggleChange.bind(this);
  }
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };
  tick = () => {
    if (this.state.isChecked) {
      this.setState((state) => ({
        seconds: state.seconds + 1,
      }));
    } else {
      this.setState((state) => ({
        seconds: state.seconds + 0,
      }));
    }
  };
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <React.Fragment>
        <Checkbox
          isChecked={this.state.isChecked}
          onChange={this.toggleChange}
        />
        <Timer seconds={this.state.seconds} />
      </React.Fragment>
    );
  }
}

export default App;
