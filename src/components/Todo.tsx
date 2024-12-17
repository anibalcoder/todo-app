import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'
import { Todo as TodoType } from '../types/todo'

interface Props {
  todo: TodoType
}

export const Todo: React.FC<Props> = ({ todo }) => {
  const { completedTodo, removeFromTodo } = useContext(TodoContext)
  const { id, title, completed } = todo

  return (
    <li
      data-testid='todo-item'
      className={completed ? 'completed' : ''}
    >
      <div className='view'>
        <input
          onChange={(event) => completedTodo({ id, completed: event.target.checked })}
          className='toggle'
          id={id}
          type='checkbox'
          checked={completed}
        />

        <label data-testid='todo-title' htmlFor={id}>{title}</label>

        <button
          onClick={() => removeFromTodo({ id })}
          className='destroy'
        />
      </div>
    </li>
  )
}
