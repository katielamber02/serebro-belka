import React, { Component } from 'react';
import CommentList from './CommentList'
import PropTypes from 'prop-types'
//import toggleOpen from '../decorators/toggleOpen'
//import {findDOMNode} from 'react-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'
import {connect} from 'react-redux'
import {deleteArticle} from '../action'


class Article extends Component {
	
	//здесь ничего не менялось потому что изменения в декораторе этот компонент не затронули
	
 
  getBody=()=>{
	  const {article,isOpen}=this.props
	   if(!isOpen) return null
	 
	  return(
	    <section>
		  {article.text}
	      <CommentList 
		              comments={article.comments}
                      ref={this.setCommentsRef}
					  />
		</section>
	  )
  }
  
  setCommentsRef=ref=>{
	  console.log('ref from setCommentsRef:',ref)
  }
  handleDelete=()=>{
	  console.log('delete')
	  const {deleteArticle,article}=this.props
	  deleteArticle(article.id)
  }
  
  componentWillReceiveProps(nextProps){
	  console.log('---','updating',this.props.isOpen,nextProps.isOpen)
  }
  componentWillMount(){
	    console.log('---','mounting')
  }
  render(){
	 
	  const {article,isOpen,toggleOpen}=this.props
	
	  return(
	   <div ref={this.setRef}>
	   <h1>{article.title}</h1>
	   <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
	   <button onClick={this.handleDelete}>delete</button>
	   <CSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.getBody()}
        </CSSTransitionGroup>
	      
	    
	   </div>
	  )
  }
  setRef=ref=>{
	  this.container=ref
	  console.log('ref is:',ref)
  }
  componentDidMount(){
	  console.log('---','mounted')
  }
  static propTypes={
		article:PropTypes.shape({
			title:PropTypes.string.isRequired,
			id:PropTypes.string.isRequired,
			text:PropTypes.string.isRequired
		}).isRequired,
		isOpen:PropTypes.bool,
		toggleOpen:PropTypes.func
	}
}


export default connect(null,{deleteArticle})(Article);



/*
lesson 2
class Article extends Component {
	static propTypes={
		article:PropTypes.shape({
			title:PropTypes.string.isRequired,
			id:PropTypes.string.isRequired,
			text:PropTypes.string.isRequired
		}).isRequired
	}
	state={
		isOpen:false
	}
  handleClick=()=>{
	  this.setState({
		  isOpen:!this.state.isOpen
	  })
  }
  
  getBody=()=>{
	   if(!this.state.isOpen) return null
	  const {article}=this.props
	  return(
	    <section>
		  {article.text}
	      <CommentList comments={article.comments} />
		</section>
	  )
  }
  render(){
	 
	  const {article}=this.props
	  const {isOpen}=this.state
	  return(
	   <div>
	   <h1>{article.title}</h1>
	   <button onClick={this.handleClick}>{isOpen ? 'close' : 'open'}</button>
	   {this.getBody()}
	   </div>
	  )
  }
}

export default Article;
*/