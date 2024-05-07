import React, { Component } from 'react'

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.timerID = setInterval(() => {
            this.tick()
            console.log("componentDidMount - Inside");
        }, 1000);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }))
    }
    render() {
        return (
            <div>
                Seconds: {this.state.seconds}
            </div>
        )
    }
}

export default Timer