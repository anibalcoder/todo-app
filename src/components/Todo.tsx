import { Todo as TodoType, TodoId } from '../types/todo'

interface Props {
  todo: TodoType
  completedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  removeFromTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ todo, completedTodo, removeFromTodo }) => {
  const { id, title, completed } = todo

  return (
    <li className={completed ? 'completed' : ''}>
      <div className='view'>
        <input
          onChange={(event) => completedTodo({ id, completed: event.target.checked })}
          className='toggle'
          id={id}
          type='checkbox'
          checked={completed}
        />

        <label htmlFor={id}>{title}</label>

        <button
          onClick={() => removeFromTodo({ id })}
          className='destroy'
        />
      </div>
    </li>
  )
}
