import React, {Component} from "react";
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
    state = {
        // -----------------------------------------------------
        // ! state data is local and only accessible via this component
        // -----------------------------------------------------

        counters: [
            {id: 1, value: 5, desc: "cool"},
            {id: 2, value: 0, desc: "cool"},
            {id: 3, value: 1, desc: "cool"},
            {id: 4, value: 0, desc: "cool"},
        ],
    };

    constructor() {
        super()
        console.log("App - constructor")
    }

    componentDidMount() {
        console.log('App - mounted')
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++
        this.setState({counters})
    }

    handleDecrement = (counter) => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value--
        this.setState({counters})
    }

    handleReset = () => {
        /**-----------------------------------------
         * @param c
         * the 'c' here represents 'counters'property.
         * It is being mapped using the 'map()'where
         * all its array keys are represented by the 'c'
         * in this case.
         * -----------------------------------------
         */

        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });

        this.setState({counters});
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({counters: counters});
        //* Or
        //? this.setState({ counters })
    };

    render() {
        console.log('App - rendered')
        return (
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        onReset={this.handleReset}
                        counters={this.state.counters}
                    />
                </main>
            </React.Fragment>
        )
    }
}

export default App;
