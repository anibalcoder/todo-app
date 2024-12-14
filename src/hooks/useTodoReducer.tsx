import { useReducer } from 'react'
import { TodoReducer } from '../reducers/todoReducer'
import { Todo as TodoType, TodoTitle, TodoId } from '../types/todo'
import { TodoActionType } from '../types/action'
import { TodoReducerInterface } from '../types/reducer'

const mockTodos = [
  {
    id: '1',
    title: 'Ver el Twitch de midu',
    completed: false
  },
  {
    id: '2',
    title: 'Aprender React con TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Sacar ticket de la miduFest',
    completed: false
  }
]

export function useTodoReducer (): TodoReducerInterface {
  const [state, dispatch] = useReducer(TodoReducer, mockTodos)

  const addTodo = (title: TodoTitle): void => dispatch({ type: TodoActionType.ADD, payload: title })

  const completedTodo = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => dispatch(
    { type: TodoActionType.COMPLETED, payload: { id, completed } }
  )

  const removeFromTodo = (id: TodoId): void => dispatch({ type: TodoActionType.REMOVE, payload: id })

  const removeAllCompletedTodos = (): void => dispatch({ type: TodoActionType.REMOVE_ALL_COMPLETED })

  return {
    todos: state,
    addTodo,
    completedTodo,
    removeFromTodo,
    removeAllCompletedTodos
  }
}
