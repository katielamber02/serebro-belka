import React, { Component } from 'react';
import DayPicker,{DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import {connect} from 'react-redux'
import {changeDateRange} from '../../action'


class DateRange extends Component{
	
	handleDayClick=day=>{
		const {changeDateRange,range}=this.props
		changeDateRange(DateUtils.addDayToRange(day,range))
	}
	render(){
		const {from,to}=this.props.range
		const selectedRange=from && to && `${from.toDateString()}-${to.toDateString()}`
		return (
		<div className="date-range">
		 <DayPicker 
		    ref="daypicker"
			selectedDays={day=>DateUtils.isDayInRange(day,{from,to})}
			onDayClick={this.handleDayClick}
		 />
		 {selectedRange}
		 </div>
		)
	}
}

export default connect(state=>({
	range:state.filters.dateRange
})

,{changeDateRange})(DateRange)











/*
class DateRange extends Component{
	state={
		from:null,
		to:null
	}
	handleDayClick=day=>{
		this.setState(
			DateUtils.addDayToRange(day,this.state)
		)
	}
	render(){
		const {from,to}=this.props
		const selectedRange=from && to && `${from.toDateString()}-${to.toDateString()}`
		return (
		<div className="date-range">
		 <DayPicker 
		    ref="daypicker"
			selectedDays={day=>DateUtils.isDayInRange(day,{from,to})}
			onDayClick={this.handleDayClick}
		 />
		 {selectedRange}
		 </div>
		)
	}
}

export default (DateRange
*/