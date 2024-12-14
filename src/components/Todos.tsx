import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'
import { FiltersContext } from '../context/filtersContext'
import { Todo } from './Todo'
import { FilterValue } from '../types/todo'

export const Todos = (): JSX.Element => {
  const { todos } = useContext(TodoContext)
  const { filterSelected } = useContext(FiltersContext)

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === FilterValue.ACTIVE) return !todo.completed
    if (filterSelected === FilterValue.COMPLETED) return todo.completed
    return todos
  })

  return (
    <ul className='todo-list'>
      {
        filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        ))
      }
    </ul>
  )
}
