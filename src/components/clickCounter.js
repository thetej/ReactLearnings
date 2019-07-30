import React, { Component } from 'react';
import higherOrderComponent from './HighOrderComponent'

class ClickCounter extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
            </div>
        );
    }
}

export default higherOrderComponent(ClickCounter, 10);