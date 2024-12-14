import { TodoAction, TodoActionType } from '../types/action'
import { ListOfTodos } from '../types/todo'

export function TodoReducer (state: ListOfTodos, action: TodoAction): ListOfTodos {
  switch (action.type) {
    case TodoActionType.ADD: {
      const { title } = action.payload
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        }
      ]
    }

    case TodoActionType.COMPLETED: {
      const { id, completed } = action.payload
      return state.map(todo => todo.id === id ? { ...todo, completed } : todo)
    }

    case TodoActionType.REMOVE: {
      const { id } = action.payload
      return state.filter(todo => todo.id !== id)
    }

    case TodoActionType.REMOVE_ALL_COMPLETED: return state.filter(todo => !todo.completed)

    default: return state
  }
}
