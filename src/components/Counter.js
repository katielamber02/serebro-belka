import React, { Component } from 'react';
import {connect} from 'react-redux'
import {increment} from '../action'


class Counter extends Component {
	handleClick=()=>{
		console.log('clicked')
		this.props.increment()
	}
  render() {
    return (
        <div>
		<h1>{this.props.counter}</h1>
		<button onClick={this.handleClick}>+</button>
		</div>
    );
  }
}
const mapStateToProps=state=>{
	return {
		counter:state.count
	}
}
const mapDispatchToProps={increment}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);