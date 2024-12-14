import { useReducer } from 'react'
import { TodoReducer } from '../reducers/todoReducer'
import { loadTodosFromStorage } from '../storage/todo'
import { Todo as TodoType, TodoTitle, TodoId } from '../types/todo'
import { TodoActionType } from '../types/action'
import { TodoReducerInterface } from '../types/reducer'

export function useTodoReducer (): TodoReducerInterface {
  const [state, dispatch] = useReducer(TodoReducer, loadTodosFromStorage())

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
