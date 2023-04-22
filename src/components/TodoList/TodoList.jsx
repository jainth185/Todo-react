import React, { useState } from 'react'
import TodoListItem from './TodoListItem/TodoListItem'

const TodoList = (props) => {
  const {list,deleteItem,tiggerEdit}=props
  
  if(list.length<=0){
    return(
      <center>NO ITEMS TO DISPLAY</center>
    )
  }
  
  return (
    <>

      {list.map((item,index)=>(

      <TodoListItem 
        
        key={index} 
        item={item} 
        index={index}
        onDelete={deleteItem}
        onEdit={tiggerEdit}
    
      />
      
      ))}
    </>
  )
}

export default TodoList