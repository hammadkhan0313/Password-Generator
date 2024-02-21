import React, { useRef, useState } from 'react'
import Card from './Card'
import "./App.css"

const App = () => {

  const [data, setdata] = useState([])
  const todoVal = useRef()

  function addtodo(event) {
    event.preventDefault();
    console.log(todoVal.current.value);
    data.push(todoVal.current.value)
    setdata([...data])
    todoVal.current.value = ""
  }
  function deleteTodo(index) {
    console.log('delete todo', index);
    data.splice(index, 1)
    setdata([...data])
  }
  function editTodo(index, value) {
    console.log('edited Todo', value);
    data.splice(index, 1, value)
    setdata([...data]);
  }

  return (
    <>
    <div id='abc' >
      <div id='mainDiv'>
        <div id='heading'><h1 id='heading' style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '15px', fontWeight: 'bolder', fontSize: '35px' }}>Todo-App</h1></div>
        <form onSubmit={addtodo} >
          <div className='flex'>


            <input id='input' ref={todoVal} type="text" placeholder="Enter Todo" className="input input-bordered w-full max-w-xs m-7 " />

            <button type='submit' className="btn btn-accent mt-7 " >Add Todo</button>
          </div>

        </form>

        {data.length > 0 ? data.map((item, index) => {
          return <Card key={index} title={item} deleteTodo={deleteTodo} editTodo={editTodo} index={index} />
        }) : <h1>No Todo....</h1>}
      </div>
      </div>
    </>
  )
}

export default App