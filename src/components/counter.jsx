import React, { Component } from "react";

class Counter extends Component {
  state = {
    //?  This includes data for your components
    //? e.g. images, files, etc

    count: 10,
    imageUrl: 'https://picsum.photos/200'

  };

  render() {
    return (
      <React.Fragment>
          <img src={this.state.imageUrl} alt="" />
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount(){
      const {count} = this.state;
      return count === 0 ? <b>Zero</b> : <b>{count}</b>;
  }
}

export default Counter;
