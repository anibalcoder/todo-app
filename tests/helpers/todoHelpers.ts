import { expect, type Page } from '@playwright/test'
import { ListOfTodos, Todo } from '../../src/types/todo'

export const TODO_ITEMS = [
  'Primera tarea',
  'Segunda tarea',
  'Tercera tarea'
] as const

interface TodosInLocalStorage {
  page: Page
  numberOfTodos: number
}

export async function createDefaultTodos (page: Page): Promise<void> {
  const newTodo = page.getByPlaceholder('¿Qué quieres hacer?')

  for (const TODO_ITEM of TODO_ITEMS) {
    await newTodo.fill(TODO_ITEM)
    await newTodo.press('Enter')
  }
}

export async function checkTodosTitles (page: Page): Promise<void> {
  const todosTitle = page.getByTestId('todo-title')

  for (let i = 0; i < TODO_ITEMS.length; i++) {
    await expect(todosTitle.nth(i)).toHaveText(TODO_ITEMS[i])
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function checkNumberOfTodosInLocalStorage (
  { page, numberOfTodos = 0 }: TodosInLocalStorage
) {
  return await page.waitForFunction(
    (numberOfTodos) => {
      const todos: ListOfTodos = JSON.parse(localStorage.getItem('todos') ?? '[]')
      return todos.length === numberOfTodos
    },
    numberOfTodos
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function checkNumberOfCompletedInLocalStorage (
  { page, numberOfTodos }: TodosInLocalStorage
) {
  return await page.waitForFunction(
    (numberOfTodos) => {
      const todos: ListOfTodos = JSON.parse(localStorage.getItem('todos') ?? '[]')
      const completedTodos: ListOfTodos = todos.filter((todo: Todo) => todo.completed)
      return completedTodos.length === numberOfTodos
    },
    numberOfTodos
  )
}
