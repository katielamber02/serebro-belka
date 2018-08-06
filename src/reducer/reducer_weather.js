import {FETCH_WEATHER} from '../action/index';

export default function(state=[],action){
	//console.log('Action recieved',action);
	switch(action.type){
		case FETCH_WEATHER:
		//return state.concat([action.payload.data]);
		return [action.payload.data,...state]
		default:
		return state;
	}
	
}