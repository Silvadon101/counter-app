import React, { Component } from "react";

class Counter extends Component {
  state = {
    /* -----------------------------------------------------
    | State
    |
    | //?  This includes data for your components
    | //? e.g. images, files, etc
    | // ! state data is local and only accessible via this component
    | ------------------------------------------------------
    */

    /* ----------------------------------------
    | Props
    |
    |This read-only data storage stores data for components.
    | ----------------------------------------
    */

    value: this.props.counter.value, // *this count refers to the value attribute in "Counters"(counters.jsx)
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

  /*---------------------------------------------
    setState

    This is a method from the parent React class "Components"
    ----------------------------------------------
  */

  handleIncrement = (product) => {
    // console.log("Increment Clicked", this);
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    console.log("Decrement Clicked", this);
    this.setState({ value: this.state.value - 1 });
  };

  // doHandleIncrement = () =>{
  //   this.handleIncrement({ id: 1})
  // };

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
      // *--------"React Fragment" tag creates an empty tag -----------
      <React.Fragment>
        <div></div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ product: "bag" })}
          className={this.getBtnClass()}
        >
          Increment
        </button>
        <button onClick={this.handleDecrement} className={this.getBtnClass()}>
          Decrement
        </button>
        <button
          onClick={()=>this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.state.tags.length === 0 && "Please create new tags :D"}
        {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes +=
      this.state.value === 0 ? "warning text-dark" : "primary text-light";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? <b>Zero</b> : <b>{count}</b>;
  }

  getBtnClass() {
    let btnClass = "btn btn-secondary btn-sm m-1";
    return btnClass;
  }
}

export default Counter;
