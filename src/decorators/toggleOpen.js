//HOC or decorator

import React, { Component } from 'react';

export default (OriginalComponent) => class WrappedComponent extends Component{
	state={
		isOpen:false
	}
	
	
	toggleOpen=(ev)=>{
		ev && ev.preventDeafult && ev.preventDeafult()
	  this.setState({
		  isOpen:!this.state.isOpen
	  })
    }
	
	
	render(){
		return <OriginalComponent 
		            {...this.props}
            		isOpen={this.state.isOpen}
					toggleOpen={this.toggleOpen}
					/>
	}
}