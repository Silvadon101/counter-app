import React, { Component } from "react";

class Counter extends Component {
  state = {
    //?  This includes data for your components
    //? e.g. images, files, etc

    count: 24,
    // imageUrl: 'https://picsum.photos/200'

  };

  // styles = {
  //   fontSize: 50,
  //   fontWeight: "bold"
  // };

  render() {
    return (
      <React.Fragment>
          {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning text-dark" : "primary text-light";
    return classes;
  }

  formatCount(){
      const {count} = this.state;
      return count === 0 ? <b>Zero</b> : <b>{count}</b>;
  }
}

export default Counter;
