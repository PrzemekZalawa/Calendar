import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { useState } from 'react';

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
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
let displayMonth;



class MonthButton extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }  

  handleClick(monthID){
  }
  render(){
    return(
      <td><button onClick={()=>this.handleClick(this.props.monthID)}>{this.props.name}</button></td>
    )
  }
}
const year = months.map((row,i)=>{
  if(i%4==0){
    return(
      <tr key={i}>
        <MonthButton   dayAmount={months[i].dayAmount}
        name={months[i].name} startFrom={months[i].startFrom} monthID={months[i].id}/>      
                <MonthButton  dayAmount={months[i+1].dayAmount}
        name={months[i+1].name} startFrom={months[i+1].startFrom} monthID={months[i+1].id}/>      
                <MonthButton  dayAmount={months[i+2].dayAmount}
        name={months[i+2].name} startFrom={months[i+2].startFrom} monthID={months[i+2].id}/>      
                <MonthButton  dayAmount={months[i+3].dayAmount}
        name={months[i+3].name} startFrom={months[i+3].startFrom} monthID={months[i+3].id} />       
      </tr>
    )
  }
})

class Calendar extends React.Component{
  render(){
    return(
      <body>
      <table>
        <tr>
          <th colSpan={4}>2022</th>
        </tr>
        {year}
      </table>
      {/* <div className='days'>{displayMonth}</div> */}
      </body>
    )
  }
}
ReactDOM.render(
  <Calendar/>,
  document.getElementById('root')
);

reportWebVitals();
