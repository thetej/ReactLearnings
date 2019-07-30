import React, { Component } from 'react';
//UpdatedComponent=higherOrderComponent , OriginalComponent=WrappedComponent , NewComponent=HigherOrderComponent
const higherOrderComponent = (WrappedComponent, IncrementNumber) => {
    class HigherOrderComponent extends Component {
        constructor(props){
            super(props)
            this.state = {
                count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + IncrementNumber}
            })
        }
        render(){
            console.log(this.props.name);
            return <WrappedComponent
                    name="Tejinder" 
                    count={this.state.count} 
                    incrementCount={this.incrementCount}
                    {...this.props}
                    />
        }
    }
    return HigherOrderComponent
}

export default higherOrderComponent;