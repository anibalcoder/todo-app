import { test, expect } from '@playwright/test'
import {
  TODO_ITEMS,
  createDefaultTodos,
  checkTodosTitles,
  checkNumberOfTodosInLocalStorage,
  checkNumberOfCompletedInLocalStorage
} from './helpers/todoHelpers'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/')
})

test.describe('Todo app', () => {
  test('Add todo', async ({ page }) => {
    const newTodo = page.getByPlaceholder('¿Qué quieres hacer?')
    await newTodo.fill(TODO_ITEMS[0])
    await newTodo.press('Enter')

    await expect(page.getByTestId('todo-title')).toHaveText(TODO_ITEMS[0])
    await checkNumberOfTodosInLocalStorage({ page, numberOfTodos: 1 })
  })

  test('Mark and unmark as completed', async ({ page }) => {
    await test.step('Add todo list', async () => {
      await createDefaultTodos(page)
      await checkTodosTitles(page)
      await checkNumberOfTodosInLocalStorage({ page, numberOfTodos: TODO_ITEMS.length })
    })

    const firstTodo = page.getByTestId('todo-item').nth(1)

    await test.step('Mark todos as completed', async () => {
      await firstTodo.click()
      await expect(firstTodo).toHaveClass('completed')
      await checkNumberOfCompletedInLocalStorage({ page, numberOfTodos: 1 })
    })

    await test.step('Unmark todos as completed', async () => {
      await firstTodo.click()
      await expect(firstTodo).not.toHaveClass('completed')
      await checkNumberOfCompletedInLocalStorage({ page, numberOfTodos: 0 })
    })
  })

  test('Delete Todo Item From List', async ({ page }) => {
    await test.step('Add todo list', async () => {
      await createDefaultTodos(page)
      await checkTodosTitles(page)
      await checkNumberOfTodosInLocalStorage({ page, numberOfTodos: TODO_ITEMS.length })
    })

    await test.step('Delete todo', async () => {
      const firstTodo = page.getByTestId('todo-item').nth(1)
      await firstTodo.hover()
      await firstTodo.getByRole('button').click()

      await expect(firstTodo).not.toContainText(TODO_ITEMS[1])
      await checkNumberOfTodosInLocalStorage({ page, numberOfTodos: TODO_ITEMS.length - 1 })
    })
  })
})
