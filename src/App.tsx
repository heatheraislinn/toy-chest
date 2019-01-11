import React, { Component } from 'react';
import Lamp from './Lamp';

// Create class component
class App extends Component {
    // Set state
    state = {
        on: false
    }
    //constructor(props: any) {
        //super(props);
        //this.state = {
            //on: ""
        //}
    //}

    // Methods
    buttonOn = () => {
        this.setState({
            on: true
        });
    }
    buttonOff = () => {
        this.setState({
            on: false
        });
    }

    // JSX
    render() {
        return (
            <div>
                <Lamp on={this.state.on}></Lamp>
                <div className="buttonDiv">
                    <button className="on-button" onClick={this.buttonOn}>ON</button>
                    <button className="off-button" onClick={this.buttonOff}>OFF</button>
                </div>
            </div>
        );
    }
}

export default App;
