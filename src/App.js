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
  const ListItems=items.length ? (
     items.map(i=>{
       return<div>      
        <span>{i.name}</span>
        <span>{i.age}</span>
        <span 
         onClick={()=>propdeleteitem(i.id)}
              >&times;</span>
          </div>    
    })
  ) : <p>there is no item to show </p>
  
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

export default class App extends 

Component {
  state ={
    items:[
      {name:'Aly',age:21,id:1},
       {name:'Adel',age:24,id:2}   
        ]
  }
  /*
  deleteItem=id=>{
   let items=this.state.items
   let i=items.map(i=>i.id===id)
   items.splice(i,1)
   this.setState({items})
  }*/
  deleteItem=id=>{
    let items=this.state.items.filter(i=>
      {return i.id !==id}
      )
      this.setState({items})//update
  }


  render(){
  return (
    <div>
      <h1>Todo</h1>
      < TodoItems items=

{this.state.items}
      propdeleteitem={this.deleteItem}
      />
      <AddItem />
    </div>
  );
}
}

