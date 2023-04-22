import React, { useEffect, useState } from 'react'
import "./NewItem.css"
import { toast } from 'react-toastify'

const NewItem = (props) => {
  const {addItem,editItem,editState}=props
  const [title,setTitle]=useState('')
  const [priority,setpriority]=useState('low')
  const isEdit=Boolean(editState.id)
  
  useEffect(()=>{

    if(editState.id){
      setTitle(editState.title)
      setpriority(editState.priority)
    }
    },[editState])
  const handleInputChange=(e)=>{
    setTitle(e.target.value)
  }
  const handleSave=()=>{
    if(!title){return}
     const obj={
        title,
        priority
        
     }
     if(isEdit){

        obj.id=editState.id
        editItem(obj)
     }
     else{


      addItem(obj)
      toast.success("Added successfully")
     }
     setTitle('')
     setpriority('low')

  }
//   console.log(priority)
  const handleClear=()=>{
    setTitle('')
    setpriority('')
  }
  const PRIORITY=['low','medium','high']
  
   return (
    <div className='new-item-card'>
        <div className="checkbox">
        <span className="material-symbols-outlined pointer new">check_box_outline_blank</span>
        </div>
        
        <div className="form-container">
            <input placeholder='Type Here'  onChange={handleInputChange} value={title}/>
            {title && (
            <div>
              <div className="btn-priority">
                  {PRIORITY.map((p)=><div 
                      key={p}
                      
                      className={`p-badge ${p} ${p==priority && 'selected'}`} 
                      onClick={()=>setpriority(p)}>
                      {p}
                      
                  </div>)}
                  
              </div> 
              <div className="buttons">
              <button className='primary' onClick={handleSave}>Save</button>
              <button onClick={handleClear}>Clear</button>
              </div>
          </div>)}
        </div>
        
        
    </div>
  )
}

export default NewItem