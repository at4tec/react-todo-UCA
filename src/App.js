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
  const {propdeleteitem}=props
  const ListItems=items.map(i=>{
    return (
       
      <div>
        
      <span>{i.name}</span>
      <span>{i.age}</span>
      <span onClick={()=>propdeleteitem(i.id)}>&times;</span>

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
      {name:'Aly',age:21,id:1},
       {name:'Adel',age:24,id:2}
        ]

  }
  deleteItem=e=>{
  
  }
  render(){
  return (
    <div>
      <h1>Todo</h1>
      < TodoItems items={this.state.items}
      propdeleteitem={this.deleteItem}
      />
      <AddItem />
    </div>
  );
}
}

