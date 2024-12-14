import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'
import { Filters } from './Filters'

export const Footer = (): JSX.Element => {
  const { todos, removeAllCompletedTodos } = useContext(TodoContext)

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  return (
    <footer className='footer'>
      <span className='todo-count'>{activeCount} tareas pendientes</span>

      <Filters />

      {
        completedCount > 0 && (
          <button
            className='clear-completed'
            onClick={removeAllCompletedTodos}
          >
            Borrar completados
          </button>
        )
      }
    </footer>
  )
}
