import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    // -----------------------------------------------------
    // ! state data is local and only accessible via this component
    // -----------------------------------------------------

    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = () => {
    console.log("Event Handler Called");
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
