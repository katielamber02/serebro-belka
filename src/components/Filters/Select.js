import React, { Component } from 'react';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {connect} from 'react-redux'
import {changeSelection} from '../../action'

class FilterSelect extends Component {
	
	
	handleChange=selected=>	this.props.changeSelection(selected.map(option=>option.value))
	
  render() {
	  const {articles,selected}=this.props
	  console.log('articles from FilterSelect',articles)
	  const options=articles.map(article=>({
		  label:article.title,
		  value:article.id
	  }))
	  return(
	  <Select 
		        options={options}
				value={selected} 
				onChange={this.handleChange}
				multi={true}
				/>)
  }
}
export default connect(state=>({
	selected:state.filters.selected,
	articles:state.articles
}),{changeSelection})(FilterSelect)