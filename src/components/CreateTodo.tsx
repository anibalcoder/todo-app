import { useState } from 'react'
import { TodoTitle } from '../types/todo'

interface Props {
  addTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState('')

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
