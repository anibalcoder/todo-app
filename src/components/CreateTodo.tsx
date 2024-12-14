import { useState, useContext } from 'react'
import { TodoContext } from '../context/todoContext'

export const CreateTodo = (): JSX.Element => {
  const [title, setTitle] = useState('')
  const { addTodo } = useContext(TodoContext)

  function handleSubmitTodo (event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    addTodo({ title })
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmitTodo}>
      <input
        onChange={(event) => setTitle(event.target.value)}
        className='new-todo'
        placeholder='¿Qué quieres hacer?'
        autoFocus
        value={title}
      />
    </form>
  )
}
