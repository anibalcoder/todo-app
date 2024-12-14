import { Todo as TodoType, TodoId, TodoTitle } from './todo'

enum TodoActionType {
  ADD = 'ADD_TODO',
  COMPLETED = 'COMPLETED_TODO',
  REMOVE = 'REMOVE_TODO',
  REMOVE_ALL_COMPLETED = 'REMOVE_ALL_COMPLETED',
}

interface AddTodoAction {
  type: TodoActionType.ADD
  payload: TodoTitle
}
interface completedTodoAction {
  type: TodoActionType.COMPLETED
  payload: Pick<TodoType, 'id' | 'completed'>
}
interface RemoveTodoAction {
  type: TodoActionType.REMOVE
  payload: TodoId
}
interface RemoveAllCompletedTodosAction {
  type: TodoActionType.REMOVE_ALL_COMPLETED
}

type TodoAction = AddTodoAction | completedTodoAction | RemoveTodoAction | RemoveAllCompletedTodosAction

export { type TodoAction, TodoActionType }
