import React from "react";
import { Label, Input } from "reactstrap";

class Checkbox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Label check>
          <Input
            type="checkbox"
            defaultChecked={this.props.isChecked}
            onChange={this.props.onChange}
          />{" "}
          Active/Deactive
        </Label>
      </React.Fragment>
    );
  }
}

export default Checkbox;
