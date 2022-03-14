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

let monthName;
/*let siemaEniu;
 let displayMonth;
function DaysOfMonth(){
let [displayMonth,setDisplayMonth] = useState();
let papadżi = (months.map((day, i)=>{
  if(day.id==siemaEniu)
  {
 for(let x=0; x<day.startFrom;x++){
   return(
     <div className='day'> 

     </div>
   )
 }
 for(let j=day.startFrom; j<day.dayAmount;j++){
   return(
     <div className='day'>
         {j}
     </div>
   )
 }
 for(let y=day.dayAmount; y<35-day.dayAmount;y++){
   return(
     <div className='day'>

     </div>
   )
 }
}   
}))
let len;
console.log(papadżi.length)
console.log(papadżi)
len = papadżi.length;

for(let i = 0; i < len; i++ ){
  papadżi[i] && papadżi.push(papadżi[i]);  
}
papadżi.splice(0 , len);  
setDisplayMonth(papadżi);
console.table(displayMonth)
return(
  <tr>
  <td>
    {displayMonth}
  </td>
</tr>
)
}
*/
const week= daysOfWeek.map((day, i)=>{
  return(
  <th key={day+i}>{day.name}</th>
  )
})
function GetMonthName(){
  let [selectedMonth,selectMonth]=useState();
  selectMonth(monthName)
  return(
    
    <th colSpan={7}>{selectedMonth}</th>
  )
  
}
class MonthTable extends react.Component{
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this)
    this.state={
      // test: displayMonth
      
    }
  }
    render(){
      return (
         <table>
           <tr>
             <GetMonthName/>
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
    this.handleClick = this.handleClick.bind(this)
    this.state={
      // test :[[]]
      
    }
  }  


   handleClick(monthID){
    monthName = months[monthID].name;
    
    //  siemaEniu= monthID
    //    displayMonth= months.map((day, i)=>{
    //      if(day.id==monthID)
    //      {
    //     for(let x=0; x<day.startFrom;x++){
    //       return(
    //         <div className='day'> 
  
    //         </div>
    //       )
    //     }
    //     for(let j=day.startFrom; j<day.dayAmount;j++){
    //       return(
    //         <div className='day'>
    //             {j}
    //         </div>
    //       )
    //     }
    //     for(let y=day.dayAmount; y<35-day.dayAmount;y++){
    //       return(
    //         <div className='day'>
  
    //         </div>
    //       )
    //     }
      
       
    // }   
       
    // })
    // let len;
    //   len = displayMonth.length;
  
    //   for(let i = 0; i < len; i++ ){
    //     displayMonth[i] && displayMonth.push(displayMonth[i]);  
    //   }
    //   displayMonth.splice(0 , len);  
  
    //   console.table(displayMonth)
    //   console.log(displayMonth)

    //   this.setState({
    //     test: displayMonth
    //   })
       
    //   console.table(this.state.displayMonth)
    //   console.log(this.state.displayMonth)
  
    
  }
  render(){
    // let [displayMonth,setDisplayMonth] = useState();
    
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
