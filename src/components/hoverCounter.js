import React, { Component } from 'react';
import higherOrderComponent from './HighOrderComponent'

class HoverCounter extends Component {
    
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>{this.props.name} hovered {count} times</h2>
            </div>
        );
    }
}

export default higherOrderComponent(HoverCounter, 5);