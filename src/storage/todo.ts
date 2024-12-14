import { ListOfTodos } from '../types/todo'

function saveTodosToStorage (todos: ListOfTodos): void {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function loadTodosFromStorage (): ListOfTodos {
  const todos = localStorage.getItem('todos')
  if (todos === null) return []
  return JSON.parse(todos)
}

export { saveTodosToStorage, loadTodosFromStorage }
