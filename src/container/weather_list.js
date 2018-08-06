import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../component/chart';
import _ from 'lodash';
//import GoogleMap from '../component/google_map';

class WeatherList extends Component{
	
	renderWeather(cityData){
		
		const name=cityData.city.name;
		const temps=_.map(cityData.list.map(weather=>weather.main.temp),(temp)=>temp-273); //into array of numbers  &&from Kalvin to Celsium
		const pressures=cityData.list.map(weather=>weather.main.pressure);
		const humidities=cityData.list.map(weather=>weather.main.humidity);
		//const lon=cityData.city.coord.lon;
		//const lat=cityData.city.coord.lat;
		//const{lon,lat}=cityData.city.coord;
		
		
		//<td><GoogleMap lon={lon} lat={lat} /></td>
		
		
		//td:first-of-type, td:first-of-type>{
		//	height:200px;
		//  width:250px;
		//}
		
		
		return(
		  <tr key={name}>
		    <td>{name}</td>
			<td><Chart data={temps} color="blue" units="C" /></td>
			<td><Chart data={pressures} color="orange" units="hPa" /></td>
			<td><Chart data={humidities} color="lime" units="%" /></td>
			
		  </tr>
		);
	}
	
	
	render(){
		return(
		  <table className="table table-hover">
		    <thead>
			 <tr>
			  <th>City</th>
			  <th>Temperature (C)</th>
			  <th>Pressure (hPa)</th>
			  <th>Humidity (%)</th>
			 </tr>
			</thead>
			<tbody>
			  {this.props.weather.map(this.renderWeather)}
			</tbody>
		  </table>
		);
	}
}

//function mapStateToProps(state){
//	return {weather:state.weather};
//}

function mapStateToProps({weather}){
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);
