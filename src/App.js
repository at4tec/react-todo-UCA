import React,{Component} from "react";
import "./style.css";


class AddItem extends Component{
  render(){
    return <>Add Item</>
  }
}

const TodoItems =(props)=>{
  const {items}=props
  const ListItems=items.map(i=>{
    return (
      <div>
      <span>{i.name}</span>
      <span>{i.age}</span>
      <span>&times;</span>

      </div>
    )
  })
  return <div>{ListItems}</div>
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
      < TodoItems items={this.state.items}/>
      <AddItem />
    </div>
  );
}
}

