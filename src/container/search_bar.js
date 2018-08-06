import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../action/index';

 class SearchBar extends Component{
	 constructor(props){
		 super(props);
		 this.state={
			 term:''
		 };
	 }
	 
	 onInputOnchange(event){
		console.log(event.target.value); 
		this.setState({term:event.target.value})
	 }
	 
	 onFormSubmit(event){
		event.preventDefault();
 
        this.props.fetchWeather(this.state.term)
		this.setState({term:''});
	 }
	 
	 
	render(){
		return(
		  <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
		  
		    <input 
			  placeholder="get a forecast"
			  className="form-control"
			  value={this.state.term}
			  onChange={this.onInputOnchange.bind(this)}
			/>
			
			<span className="input-group-btn">
			   <button type="submit" className="btn btn-secondary">SUBMIT</button> 
			</span>
		  </form>
		);
	} 
 }
 
 function mapDispatchToProps(dispatch){
	 return bindActionCreators({fetchWeather},dispatch);
 }
 
 export default connect(null,mapDispatchToProps)(SearchBar);