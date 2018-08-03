import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
       return false;
    }

    render() {
        console.log("HEADER")
        return (
            <div>
                <h1 className='f1'>RoboFriends</h1>
                <CounterButton color={'red'} /> {/*Rerender CounterButton only if state changes*/}
            </div>
        )
    }
}

export default Header;