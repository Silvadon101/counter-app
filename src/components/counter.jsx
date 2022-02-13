import React, { Component } from "react";

class Counter extends Component {
  state = {
    //?  This includes data for your components
    //? e.g. images, files, etc

    count: 0,
    // tags: [],
    // imageUrl: 'https://picsum.photos/200'
  };

  // styles = {
  //   fontSize: 50,
  //   fontWeight: "bold"
  // };

  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    console.log("Increment Clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () =>{
    console.log("Decrement Clicked", this)
    this.setState({ count: this.state.count - 1 })
  };
  
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}{" "}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-2">
          Decrement
        </button>
        {/* {this.state.tags.length === 0 && "Please create new tags :D"}
        {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes +=
      this.state.count === 0 ? "warning text-dark" : "primary text-light";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <b>Zero</b> : <b>{count}</b>;
  }
}

export default Counter;
