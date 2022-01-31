import React,{Component} from "react";
import "./style.css";


class AddItem extends Component{
  render(){
    return <>Add Item</>
  }
}


const TodoItems =()=>{
  return <div>List Items</div>
}


export default class App extends Component {
  state ={
    items:[
      {name:'Aly',age:21},
          {name:'Adel',age:24}
        ]

  }
  render(){
  return (
    <div>
      <h1>Todo</h1>
      < TodoItems/>
      <AddItem />
    </div>
  );
}
}