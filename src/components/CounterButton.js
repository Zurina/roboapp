import React, { Component } from 'react';

class CounterButton extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log(nextProps, nextState)
        //Will only update if next state is different from current state
        if (this.state.count !== nextState.count) {
            return true
        }
        return false;
    }

    updateCount = () => {
        this.setState( state => {
            return { count : state.count + 1}
        })
    }

    //how to update state from current state. put a function outside the class, and having that return a function that 
    //receives nextState and nextProps (given from setState). this makes it impossible for the outer function to use this.state
    //and helps getting the setState the "newest" current state. 
    //https://medium.com/@wereHamster/beware-react-setstate-is-asynchronous-ce87ef1a9cf3

    render() {
        console.log("CounterButton")
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                count : {this.state.count}
            </button>
        )
    }
}

export default CounterButton;