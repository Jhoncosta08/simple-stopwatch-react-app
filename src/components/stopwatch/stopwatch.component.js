/* eslint-disable */
import React, { Component } from 'react';
import './stopwatch.component.css'

class StopwatchComponent  extends Component{
    render() {
        return(
            <div className="container">
                <h1 className="main-title">STOPWATCH</h1>
                <img className="img" src={require('../../assets/cronometro.png')} alt="Stopwatch-image"/>
                <a className="timer">0.0</a>
                <div className="btn-container">
                    <a className="btn">START</a>
                    <a className="btn">CLEAN</a>
                </div>
            </div>
        );
    }
}
export default StopwatchComponent;
