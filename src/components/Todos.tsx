import { Todo as TodoType, TodoId, ListOfTodos } from '../types/todo'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  completedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  removeFromTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, completedTodo, removeFromTodo }) => {
  return (
    <ul className='todo-list'>
      {
        todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            completedTodo={completedTodo}
            removeFromTodo={removeFromTodo}
          />
        ))
      }
    </ul>
  )
}
