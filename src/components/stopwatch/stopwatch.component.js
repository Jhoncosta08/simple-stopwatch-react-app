/* eslint-disable */
import React, { Component } from 'react';
import './stopwatch.component.css'

class StopwatchComponent  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            btn: 'START'
        }
        this.timer = null;
        this.start = this.start.bind(this);
        this.clean = this.clean.bind(this);
    }


    start() {
        let state = this.state;
        if(this.timer != null) {
            clearInterval(this.timer);
            this.timer = null;
            state.btn = 'START';
        }else {
            this.timer = setInterval(() =>{
                state.number += 0.1;
                this.setState(state);
            }, 100);
            state.btn = 'PAUSE';
        }
        this.setState(state);
    }


    clean() {
        let state = this.state;
        if(this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }
        state.number = 0;
        state.btn = 'START'
        this.setState(state);
    }


    render() {
        return(
            <div className="container">
                <h1 className="main-title">STOPWATCH</h1>
                <img className="img" src={require('../../assets/cronometro.png')} alt="Stopwatch-image"/>
                <a className="timer">{this.state.number.toFixed(1)}</a>
                <div className="btn-container">
                    <a className="btn" onClick={this.start}>{this.state.btn}</a>
                    <a className="btn" onClick={this.clean}>CLEAN</a>
                </div>
            </div>
        );
    }


}
export default StopwatchComponent;
