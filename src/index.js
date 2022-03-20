import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import firebase from './firebase';

import React from 'react';
import react, { useState } from 'react';


const daysOfWeek = [
  {name: "niedziela"},
  {name:"poniedzialek"},
  {name:"wtorek"},
  {name:"sroda"},
  {name:"czwartek"},
  {name:"piatek"},
  {name:"sobota"}
];
const months =[
  {id:1,name:"styczen",startFrom:6,dayAmount:31},
  {id:2,name:"luty",startFrom:2,dayAmount:28},
  {id:3,name:"marzec",startFrom:2,dayAmount:31},

  {id:4,name:"kwiecien",startFrom:5,dayAmount:30},
  {id:5,name:"maj",startFrom:0,dayAmount:31},
  {id:6,name:"czerwiec",startFrom:3,dayAmount:30},

  {id:7,name:"lipiec",startFrom:5,dayAmount:31},
  {id:8,name:"sierpien",startFrom:1,dayAmount:31},
  {id:9,name:"wrzesien",startFrom:4,dayAmount:30},

  {id:10,name:"pazdziernik",startFrom:6,dayAmount:31},
  {id:11,name:"listopad",startFrom:2,dayAmount:30},
  {id:12,name:"grudzien",startFrom:4,dayAmount:31}
]
const week= daysOfWeek.map((day, i)=>{
  return(
  <th key={day+i} className='daysOfWeek'>{day.name}</th>
  )
})
class EventList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        events: []
    };
  }
  render(){
    let test =[];
    localStorage.removeItem("randid");
    for(let i = 0;i<localStorage.length;i++){
      
      let item = JSON.parse(localStorage.getItem(localStorage.key(i)))
      // this.setState({events:[...this.state.events,item]})
      test.push(item);
      
      }
      // this.setState({events:[...this.state.events,test]})
      console.log(test)
      
      let displayEvents = test.map((event,i)=>{
        //localStorage.setItem(this.props.month+"-"+this.props.day+'hourEvent'+this.props.value,JSON.stringify(event))
        console.log(event.month+"-"+event.day+"hourEvent"+event.hour);
        return(
        <li key={i}>
          <button className='event' onClick={()=>localStorage.removeItem(event.month+"-"+event.day+"hourEvent"+event.hour)}>
          {event.day+" "+event.month+" godzina: "+event.hour+" - "+event.name}
          </button>
        </li>
        )
      })
    return(
      <ul>{displayEvents}</ul>
    )
  } 
}
  
class HourButton extends react.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.getEvent = this.getEvent.bind(this)

    this.state={
      // event:"",
      // color:"",
    }
  }
  
  handleClick(){
      // localStorage.setItem('HourEvent',this.props.value)
      // this.props.color = "#"+prompt("podaj kolor(HEX): ");
      // console.log(this.props.color);
      // let eventName = prompt("wydarzenie:")
      // this.setState({event:eventName})
      // if(eventName!='')
      // {
      //   this.setState({color:"greenyellow"})
      // }
      // else{
      //   this.setState({color:"white"})
      // }   
      let eventName = prompt("wydarzenie:")
    let event ={name:eventName,day:this.props.day,month:this.props.month,hour:this.props.value}
    console.log(event)
    console.table(event)
    localStorage.setItem(this.props.month+"-"+this.props.day+'hourEvent'+this.props.value,JSON.stringify(event))
    // this.getEvent();
  }
  getEvent(){
    localStorage.removeItem("randid");
    for(let i = 0;i<localStorage.length;i++){
      
      let item = JSON.parse(localStorage.getItem(localStorage.key(i)))
      console.log(item)
      
       if(item.day==this.props.day && item.month==this.props.day && item.hour==this.props.hour){
        this.setState({event:item.name,color:"2px solid red"})
      }
      
    }
  }
  componentDidMount(){
// this.getEvent()
  }
  render(){
    
    return(
      <td className='day' onClick={()=>this.handleClick()} ><button style={{border:this.state.color}}>{this.props.value}<br/>{this.state.event}</button></td>
    )}
      
}

class DayTable extends react.Component{
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this)
    this.state={
      
    }
  }
  render(){
  let hourArr =[];
  for(let i =1;i<=24;i++){
    hourArr.push(i+1);
  }
  let displayHour = hourArr.map((element, i)=>{
    if(i%6==0){
    return(
      <tr key={i}>
      <HourButton key={element+i}  className='day' value={i} month={this.props.month} day={this.props.day}/>
      <HourButton key={element+i+1}  className='day' value={i+1}   month={this.props.month} day={this.props.day}/>
      <HourButton key={element+i+2}  className='day' value={i+2}   month={this.props.month} day={this.props.day}/>
      <HourButton key={element+i+3}  className='day' value={i+3}   month={this.props.month} day={this.props.day}/>
      <HourButton key={element+i+4}  className='day' value={i+4}   month={this.props.month} day={this.props.day}/>
      <HourButton key={element+i+5}  className='day' value={i+5}   month={this.props.month} day={this.props.day} />
      </tr>
    )
    }
  })
    if(this.props.day!=''&&this.props.month!=''){
    return(
      <table>
      <tr>
          <th colSpan={6}>{this.props.day+' '+this.props.month}</th>
        </tr>
        
      {displayHour}
      </table>
    )}
    else{
      return(
        <table></table>
      )
    }
  }
      
}
class DayButton extends react.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.AddEvent = this.AddEvent.bind(this)
    this.state={
      // color:'',
      // event:''
    }
  }
  handleClick(name){
    this.props.getDayName(name)    
  }
  AddEvent(){
    
    // let eventName = prompt("wydarzenie:")
    // let event ={name:eventName,day:this.props.day,month:this.props.month}
    // console.log(event)
    // console.table(event)
    // localStorage.setItem(this.props.month+"-"+this.props.day+'DayEvent',JSON.stringify(event))
  }
  render(){
    if(this.props.value!=''){
    return(
      <td style={{backgroundColor:this.state.color}} className='day' onClick={()=>this.handleClick(this.props.value)}>
        <button style={{backgroundColor:this.state.color}}>{this.props.value}<br/>{this.state.event}</button>
        <button className='addEvent' onClick={this.AddEvent}>+</button>
        </td>
    )
    }
    else{
      return(
        
      <td style={{backgroundColor:this.state.color}} className='day' onClick={()=>this.handleClick(this.props.value)}>
      <button style={{backgroundColor:this.state.color}}>{this.props.value}<br/>{this.state.event}</button>
      </td>
      )
    }
  }
}
class MonthTable extends react.Component{
  constructor(props) {
    super(props);
    this.getDay = this.getDay.bind(this)
    this.state={
      dayName: ''
    }
  }
  getDay(name){
    
    this.setState({dayName: name})
    this.props.getDayOnceAgain(name)
  }
    render(){
      let days = [];
      // days.splice(0, days.length)

       months.map((day, i)=>{
        if(day.name==this.props.name)
        {
       for(let x=0; x<day.startFrom;x++){
        days.push('')
       }
       for(let j=1; j<=day.dayAmount;j++){
        days.push(j)
       }
       for(let y=0; y<=35-day.dayAmount;y++){
        days.push('')
      }

   }   
   })
    let displayDays =''
    displayDays = days.map((day, i)=>{
     if(i%7==0){
       return <tr key={i}>
         
      <DayButton key={i+1} value={days[i]}    getDayName={this.getDay}/>
      <DayButton key={i+2} value={days[i+1]}  getDayName={this.getDay}/>
      <DayButton key={i+3} value={days[i+2]}  getDayName={this.getDay}/>
      <DayButton key={i+4} value={days[i+3]}  getDayName={this.getDay}/>
      <DayButton key={5+i} value={days[i+4]}  getDayName={this.getDay}/>
      <DayButton key={6+i} value={days[i+5]}  getDayName={this.getDay}/>
      <DayButton key={7+i} value={days[i+6]}  getDayName={this.getDay}/>
       </tr>;
     }
  })
  if(this.props.name!=''){
    
    
      return (
         <table>
           <tr>
             <th colSpan={7}>{this.props.name}</th>
           </tr>
           <tr>
             {week}
           </tr>
            
              {displayDays}
           
         </table>
      )
  }else{
    return(
    <table></table>
    )
  }
    }
  }  
class MonthButton extends react.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state={
      name: ''
      
    }
  }  
  handleClick(name){
    this.props.getMonth(name)    
  }
  render(){
    return(
      <td><button onClick={()=>this.handleClick(this.props.name)}>{this.props.name}</button></td>
    )
  }
}
class Calendar extends React.Component{
  constructor(props) {
    super(props);
    this.getDay = this.getDay.bind(this)
    this.getName = this.getName.bind(this)
    this.state = {name: '',day: ''};
  }
  getName(monthName){
    this.setState({name: monthName})
  }
  getDay(name){
    this.setState({day: name})
  }
    
  render(){
    
const year = months.map((row,i)=>{
  if(i%4==0){
    return(
      <tr key={i}>
        <MonthButton   dayAmount={months[i].dayAmount}
        name={months[i].name} startFrom={months[i].startFrom} monthID={months[i].id} getMonth={this.getName}/>      
                <MonthButton  dayAmount={months[i+1].dayAmount}
        name={months[i+1].name} startFrom={months[i+1].startFrom} monthID={months[i+1].id} getMonth={this.getName}/>      
                <MonthButton  dayAmount={months[i+2].dayAmount}
        name={months[i+2].name} startFrom={months[i+2].startFrom} monthID={months[i+2].id} getMonth={this.getName}/>      
                <MonthButton  dayAmount={months[i+3].dayAmount}
        name={months[i+3].name} startFrom={months[i+3].startFrom} monthID={months[i+3].id} getMonth={this.getName}/>       
      </tr>
    )
  }
})
return(
  <div>
  <table>
    <tr>
      <th colSpan={4}>2022</th>
    </tr>
    {year}
  </table>
  <MonthTable name={this.state.name} getDayOnceAgain={this.getDay}/>
  <DayTable day={this.state.day} month={this.state.name}/>
  <EventList/>
  </div>
)
}
}
ReactDOM.render(
<Calendar/>,
document.getElementById('root')
);

reportWebVitals();
