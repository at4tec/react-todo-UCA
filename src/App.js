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
        <span  className='items'>{i.name}</span>
        <span className='items'>{i.age}</span>
        <span className='items'
         onClick={()=>propdeleteitem(i.id)}
              >&times;</span>
          </div>    
    })
  ) : <p>there is no item to show </p>
  
  return <>
  <div>
   <span className='title'> Name</span>
   <span className='title' > Age</span>
   <span className='title'> Action</span>
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
    <div className='container'>
      <h1 className='tcenter'>Todo List</h1>
      < TodoItems items=

{this.state.items}
      propdeleteitem={this.deleteItem}
      />
      <AddItem />
    </div>
  );
}
}

