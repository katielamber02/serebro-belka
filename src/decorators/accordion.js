import React from 'react'


export default Component => class Accordion extends React.Component{
	
	state={
		openItemId:null
	}
	toggleOpenItem=openItemId => ev =>{
		this.setState({
			openItemId:openItemId===this.state.openItemId ? null : openItemId
			//если на вход приходит тот же аргумент что есть сейчас, то стейт null
			//а если нет то запишем новый id 
			//это будет открывать и закрывать статьи
		})
	}
	
	render(){
		//console.log(this.props)//{articles: Array(7)}
		return <Component 
		        {...this.props }
				
				toggleOpenItem={this.toggleOpenItem}
				openItemId={this.state.openItemId}
		/>
	}
}