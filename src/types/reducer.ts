import { ListOfTodos, Todo as TodoType, TodoId, TodoTitle } from './todo'

interface TodoReducerInterface {
  todos: ListOfTodos
  addTodo: (title: TodoTitle) => void
  completedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  removeFromTodo: (id: TodoId) => void
  removeAllCompletedTodos: () => void
}

export { type TodoReducerInterface }
