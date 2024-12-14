import { createContext } from 'react'
import { useTodoReducer } from '../hooks/useTodoReducer'
import { TodoReducerInterface } from '../types/reducer'

const initialTodoContext: TodoReducerInterface = {
  todos: [],
  addTodo: () => {},
  completedTodo: () => {},
  removeFromTodo: () => {},
  removeAllCompletedTodos: () => {}
}

const TodoContext = createContext<TodoReducerInterface>(initialTodoContext)

interface Props {
  children: React.ReactNode
}

const TodoContextProvider: React.FC<Props> = ({ children }) => {
  const { todos, addTodo, completedTodo, removeFromTodo, removeAllCompletedTodos } = useTodoReducer()

  return (
    <TodoContext.Provider value={{
      todos, addTodo, completedTodo, removeFromTodo, removeAllCompletedTodos
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoContextProvider }
