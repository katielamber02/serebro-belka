//https://www.youtube.com/watch?v=jHv_chkanjE&list=PLwncPRjVlamxUCzfjzheaiOEMEmxS0xQ1&index=11
//ReactJS для долбоебов 

import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';

const API_KEY='AIzaSyCny991vY87-N2PL6zpz9ZLf9gIMDVyuJM';

class Search extends Component {
	constructor(props){
		super();
		this.state={
			searchTerm:'',
			videos:[],
			selevtedVideo:null
		};
	}
	handleGetVideos(searchTerm){
	    YTSearch({key:API_KEY,term:searchTerm},(data)=>{
			console.log(data);
			this.setState({videos:data});
		});	
	}
	
	
	
	inputChange(key,event){
		this.setState({[key]:event.target.value});
	}
	
	handleSelectVideo(videoUrl){
		this.setState({selectedVideo:videoUrl})
	}
	
	
    render() {
		const {searchTerm,videos,selectedVideo}=this.state;
		console.log(this.state.videos);
        return ( 
		<div>
		   <p>{this.state.searchTerm}</p>
		   
		    <input 
			      placeholder="text"
				  value={this.state.searchTerm}
				  onChange={this.inputChange.bind(this,'searchTerm')}
			/>
			<button onClick={this.handleGetVideos.bind(this,searchTerm)}>SEARCH</button>
		   <div>
		   {selectedVideo?(<div>
		   <iframe 
		          width="250" 
				  height="150" 
				  src={selectedVideo}
				  
				  
				 >
		   </iframe>
		   </div>):null}
		   </div>
		
		
		{videos.map((video,index)=>{
			const videoUrl=`https://www.youtube.com/embed/${video.id.videoId}`;
			
			return(
			  <div onClick={this.handleSelectVideo.bind(this,videoUrl)} key={index}>
			   <h5>{video.snippet.title}</h5>
			   <img src={video.snippet.thumbnails.medium.url} width="250" height="150" alt="video"/>
			  </div>
			);
		})}
		 
		</div>
        );
    }
}

export default Search;