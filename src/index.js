import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { useState } from 'react';
import react from 'react';

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
  {id:1,name:"styczen",startFrom:4,dayAmount:30},
  {id:2,name:"luty",startFrom:4,dayAmount:30},
  {id:3,name:"marzec",startFrom:4,dayAmount:30},

  {id:4,name:"kwiecien",startFrom:4,dayAmount:30},
  {id:5,name:"maj",startFrom:4,dayAmount:30},
  {id:6,name:"czerwiec",startFrom:4,dayAmount:30},

  {id:7,name:"lipiec",startFrom:4,dayAmount:30},
  {id:8,name:"sierpien",startFrom:4,dayAmount:30},
  {id:9,name:"wrzesien",startFrom:4,dayAmount:30},

  {id:10,name:"pazdziernik",startFrom:4,dayAmount:30},
  {id:11,name:"listopad",startFrom:4,dayAmount:30},
  {id:12,name:"grudzien",startFrom:4,dayAmount:30}
]
  
const week= daysOfWeek.map((day, i)=>{
  return(
  <th key={day+i}>{day.name}</th>
  )
})

class MonthTable extends react.Component{
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this)
    this.state={
      
    }
  }
    render(){
      return (
         <table>
           <tr>
             <th colSpan={7}>miesiac</th>
           </tr>
           <tr>
             {week}
           </tr>
           {/* <DaysOfMonth/> */}
         </table>
      )
    }
  }  
class MonthButton extends react.Component{
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this)
    this.state={
      name: ''
      
    }
  }  
  handleClick(name){
    this.props.name = name;
  }

    
  
  render(){
    const monthName = this.props.name
    return(
      <td><button onClick={()=>this.handleClick(this.props.name)}>{this.props.name}</button></td>
    )
  }
}
const year = months.map((row,i)=>{
  if(i%4==0){
    return(
      <tr key={i}>
        <MonthButton   dayAmount={months[i].dayAmount}
        name={months[i].name} startFrom={months[i].startFrom} monthID={months[i].id} test={this.getName}/>      
                <MonthButton  dayAmount={months[i+1].dayAmount}
        name={months[i+1].name} startFrom={months[i+1].startFrom} monthID={months[i+1].id} test={this.getName}/>      
                <MonthButton  dayAmount={months[i+2].dayAmount}
        name={months[i+2].name} startFrom={months[i+2].startFrom} monthID={months[i+2].id} test={this.getName}/>      
                <MonthButton  dayAmount={months[i+3].dayAmount}
        name={months[i+3].name} startFrom={months[i+3].startFrom} monthID={months[i+3].id} test={this.getName}/>       
      </tr>
    )
  }
})

class Calendar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }
  getName(monthName){
    this.setState({name: monthName})
  }
  render(){
    return(
      <div>
      <table>
        <tr>
          <th colSpan={4}>2022</th>
        </tr>
        {year}
      </table>
      <MonthTable/>
      </div>
    )
  }
}
ReactDOM.render(
  <Calendar/>,
  document.getElementById('root')
);

reportWebVitals();
