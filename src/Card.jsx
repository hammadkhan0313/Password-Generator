import React, { useRef, useState } from 'react'

const Card = ({ title, deleteTodo, editTodo, index }) => {
  const [showTodo, setShowTodo] = useState(true);
  const EditedTodo = useRef();

  function saveEditedTodo() {
    setShowTodo(true)
    editTodo(index, EditedTodo.current.value);
  };

  return (
    <div style={{ margin: '25px' }}>
      {showTodo ? <div>
        <h1>{title}</h1>
        <button onClick={() => setShowTodo(false)} className="btn btn-accent" style={{ margin: '5px' }}>Edit</button>
        <button onClick={() => deleteTodo(index)} className="btn btn-accent" style={{ margin: '5px', width: '65px' }}>Delete</button>
      </div> : <div>
        <input type="text" placeholder="Edited Value" className="input input-bordered w-full max-w-xs  " ref={EditedTodo} />
        <button onClick={saveEditedTodo} className="btn btn-accent mt-3" >Save</button>

      </div>}
    </div>
  )
}

export default Card;