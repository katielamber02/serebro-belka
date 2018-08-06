import React, { Component } from 'react';

import FilterSelect from './Filters/Select'
import ArticleList from './ArticleList'

import DateRange from './Filters/DateRange'

class Root extends Component {
	
	
  render() {
    
	
	
    return (
      <div >
	    <DateRange />
        <FilterSelect    />
				
		< ArticleList   />
	      
      </div>
    );
  }
  
}

export default Root;


/*
import React, { Component } from 'react';

import Select from 'react-select'
import ArticleList from './ArticleList'
import {articles} from './fixtures'
import 'react-select/dist/react-select.css'

class Root extends Component {
	state={
		selection:null
	}
	
	changeSelection=selection=>({
		selection
	})
  render() {

	  console.log(articles)
	  const options=articles.map(article=>({
		  label:article.title,
		  value:article.id
	  }))
    return (
      <div >
          <Select 
		        options={options}
				value={this.state.selection} 
				onChange={this.changeSelection}
				multi={true}
				/>
		
	     <ArticleList articles={articles} />
      </div>
    );
  }
  
}
*/