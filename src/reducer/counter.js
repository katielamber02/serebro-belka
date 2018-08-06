export default (count=0,action)=>{
	const {type}=action
	switch(type){
	  case 'DELETE_ARTICLE':
	   return count+1
	}
	return count
}
