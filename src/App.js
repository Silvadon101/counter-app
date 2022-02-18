import React, {Component} from "react";
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters';

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <main className="container">
                <Counters/>
            </main>
        </React.Fragment>
    )
}

export default App;
