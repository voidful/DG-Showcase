import React from 'react';
import './App.css';
import MAIN from "./component/main";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected_id: this.random()
        }
        this.random = this.random.bind(this)
    }

    random() {
        return Math.floor(Math.random() * 5792) + 1 //5792 is total num of data
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div id="wrapper">
                        <header id="header">
                            <h1>
                                <a href="index.html">Distractor Generator Showcase</a>
                            </h1>
                        </header>
                        <MAIN selected_id={this.state.selected_id}/>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
