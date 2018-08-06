import React from 'react';
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

function CommentList ({comments=[],isOpen,toggleOpen}){
		
	const text=isOpen ? 'hide comments' :'show comments'
		   	
	return(
		
		 <div>
		     <button onClick={toggleOpen}>{text}</button>
			  {getBody({comments,isOpen})}
		 </div>
		)
		
	
}

function getBody({comments,isOpen}){
		if(!isOpen) return null
		if(!comments.length) return <p> no comments </p>
		return(
	
		 <ul>
		 {comments.map(id=>
		  		   <li key={id}>
				     <Comment id={id}/>
				   </li>
		  )}
		 </ul>
		)
	}
	
export default toggleOpen(CommentList)


/*
lesson 2
class CommentList extends Component{
	static defaultProps={
		comments:[]
	}
	static propTypes={
		
	}
	state={
		isOpen:false
	}
	getBody(){
		if(!this.state.isOpen) return null
		const {comments}=this.props
		//if(!comments || !comments.length) return <p> no comments </p>
		if(!comments.length) return <p> no comments </p>
		return(
		 <ul>
		 {comments.map(c=>
		  		   <li key={c.id}>
				     <Comment comment={c}/>
				   </li>
		  )}
		 </ul>
		)
	}
	toggleOpen=()=>{
		this.setState({
			isOpen:!this.state.isOpen
		})
	}
	
	render(){
		const text=this.state.isOpen ? 'hide comments' :'show comments'
	    return(
		 <div>
		  <button onClick={this.toggleOpen}>{text}</button>
			  {this.getBody()}
		 </div>
		)
		
	}
}
export default CommentList
*/


/*
lesson 2
before stateless component:


class CommentList extends Component{
	static defaultProps={
		comments:[]
	}
	
	getBody(){
		if(!this.props.isOpen) return null
		const {comments}=this.props
		//if(!comments || !comments.length) return <p> no comments </p>
		if(!comments.length) return <p> no comments </p>
		return(
		 <ul>
		 {comments.map(c=>
		  		   <li key={c.id}>
				     <Comment comment={c}/>
				   </li>
		  )}
		 </ul>
		)
	}
		
	render(){
		const text=this.props.isOpen ? 'hide comments' :'show comments'
		const {toggleOpen}=this.props
	    return(
		 <div>
		  <button onClick={toggleOpen}>{text}</button>
			  {this.getBody()}
		 </div>
		)
		
	}
}
export default toggleOpen(CommentList)
*/