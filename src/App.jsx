import React, { useEffect } from 'react'
import "./App.css"
import TodoList from "./components/TodoList/TodoList"
import NewItem from './components/NewItem/NewItem'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { nanoid } from 'nanoid'
toast.configure()

const App = () => {

  const DEFAULT_LIST=[
    {
        title:'Study Javascript',
        priority:'high',
        id:nanoid()
    },
    {
        title:'Study CSS',
        priority:'low',
        id:nanoid()
    }
  ]
  const [list, setlist] = useState(DEFAULT_LIST)
  const [editState, setEditState]=useState({})
  console.log(list)
  
useEffect(()=>{
  fetch(`http://localhost:3000/api/v1/list`).then((res)=>{
    res.json().then((json)=>{
      setlist(json)
    })
  })
},[])


  const deleteItem=(id)=>{
    fetch(`/api/v1/list/delete/:id`)
    const filterList=list.filter((item)=>item.id!==id)
    setlist([...filterList])
  }
  const addItem=(item)=>{
    item.id=nanoid()
    fetch(`http://localhost:3000/api/v1/list/push`,{
      method: 'POST',
      headers:{
        'Accept':'application/json,text/plain,*/*',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)

    }).then((res)=>{
        setlist((prev)=>[item,...prev])
    })
  }
  const tiggerEdit=(item)=>{
    setEditState(item)
  }
 const editItem=(updatedItem)=>
 {
  const updatedList=list.map((item)=>(item.id===updatedItem.id)? updatedItem:item)
  setlist([...updatedList])
}
  return (
    <div className="app">
    <h1 className='title'>Todo List</h1>
    <NewItem addItem={addItem} editItem={editItem} editState={editState}/>
    <TodoList list={list} deleteItem={deleteItem} tiggerEdit={tiggerEdit}/>
    
    </div>
  )
}

export default App