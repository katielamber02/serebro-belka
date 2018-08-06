import React, { Component } from 'react';
import Article from './Article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {filtrateArtcilesSelector} from '../selectors'


class ArticleList extends Component{
	
   render(){
	   console.log('___','update article list')
	const {articles,openItemId,toggleOpenItem}=this.props  //сюда articles опрокидывается из аккордеона а сверху из пропс из рут и артиклЛист
	console.log('articles from ArticleList:',articles)
	const el=articles.map(art=>
	   <li key={art.id}> 
	       <Article 
		          article={art} 
				  isOpen={art.id===openItemId}
				  toggleOpen={toggleOpenItem(art.id)}
				  /> 
	   </li>
	)
	return(
	 <ul>
	 {el}
	 </ul>
	)
   }
   
   	static propTypes={
		articles:PropTypes.array.isRequired,
		//from accordion:
		openItemId:PropTypes.string,
		toggleOpenItem:PropTypes.func.isRequired
	}
}


export default connect((state)=>{
	
	return {
		articles:filtrateArtcilesSelector(state)
	}
	
})(accordion(ArticleList))












/*
lesson 2
export default class ArticleList extends Component{

	
	state={
		openArticleId:null
	}
	
	toggleArticle(openArticleId){
		this.setState({
			openArticleId
		})
	}
	
	
   render(){
	const el=this.props.articles.map(art=>
	   <li key={art.id}> 
	       <Article 
		          article={art} 
				  isOpen={art.id===this.state.openArticleId}
				  toggleOpen={this.toggleArticle.bind(this,art.id)}
				  /> 
	   </li>
	)
	return(
	 <ul>
	 {el}
	 </ul>
	)
   }
}
*/


/*
lesson 2
export default function ArticleList(props){
	const {articles}=props
	console.log(articles)
	const el=articles.map(art=>
	   <li key={art.id}> 
	       <Article article={art} /> 
	   </li>
	)
	return(
	 <ul>
	 {el}
	 </ul>
	)
}
*/















/*
lesson1
export default function ArticleList({articles}){
	const el=articles.map((art) => 
	           <li key={art.id}><Article article={art} /></li>)
	return(
	   <ul>
	      {el}
	   </ul>
	)
}
*/