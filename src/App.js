import React,{Component} from "react";
import "./style.css";

//-----------AddItem-------------
class AddItem extends Component{
  render(){
    return <>Add Item</>
  }
}
//---------TodoItems------------
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
  return <>
  <div>
   <> Name</>
   <> Age</>
   <> Action</>

  </div>
  <div>{ListItems}</div>
  </>
}

//------------App-----------

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

