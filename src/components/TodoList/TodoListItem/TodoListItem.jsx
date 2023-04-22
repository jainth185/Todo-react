import React, { useState } from 'react'
import "./TodoListItem.css"



const TodoListItem = (props) => {
    const {item,onDelete,onEdit}=props
    const {title,priority,id}=item


    const [isChecked,setChecked]=useState(false)
    
  
    return (
    <div className={`item-card ${priority}`}>
        {isChecked?(
            <span className="material-symbols-outlined pointer" onClick={()=>setChecked(false)}>check_box</span>
            
        ):(
            <span className="material-symbols-outlined pointer" onClick={()=>setChecked(true)}>check_box_outline_blank</span>
        )}
        
        <div className={`card-title ${isChecked && 'strike'}`}>{title}</div>
        <div className='badge'>{priority}</div>
        <span className="material-symbols-outlined pointer" onClick={()=>onEdit(item)}>edit</span>
        <span className="material-symbols-outlined pointer" onClick={()=>onDelete(id)}>delete</span>
        
        
    </div>
  )
}

export default TodoListItem