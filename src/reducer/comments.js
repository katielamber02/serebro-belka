import {normalizedComments as defaultComments} from '../fixtures'

const commentsMap=defaultComments.reduce((acc,comment)=>{
	acc[comment.id]=comment
	console.log('comment from selector',comment)
	/*
	{id: "qwerqwer", 
	user: "Gilliam Underwood", 
	text: "Velit anim deserunt elit velit est fugiat duis eiu…iusmod est. Irure laboris amet culpa sit aliquip."}
    */
	return acc
},{})
//console.log('defaultComments',defaultComments)
export default(commentsState=commentsMap,action)=>{
	const {type,payload,randomId}=action
	switch(type){
		case 'ADD_COMMENT':
		return{
			...commentsState, [randomId]:payload.comment
		}
	}
	return commentsState
}

/*
lesson 5 before (1:14)
export default(commentsState=defaultComments,action)=>{
	const {type,payload}=action
	switch(type){
		
	}
	return commentsState
}
*/