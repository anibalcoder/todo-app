import { useState } from 'react'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { Todo as TodoType, TodoTitle, TodoId, FilterValue } from './types/todo'

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

function App (): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(FilterValue.ALL)

  function addTodo ({ title }: TodoTitle): void {
    const newTodos = [
      ...todos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false
      }
    ]

    setTodos(newTodos)
  }

  function completedTodo ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void {
    const newTodos = todos.map(todo => todo.id === id ? { ...todo, completed } : todo)
    setTodos(newTodos)
  }

  function removeFromTodo ({ id }: TodoId): void {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  function removeCompletedTodos (): void {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  function handleFilterChange (filter: FilterValue): void {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === FilterValue.ACTIVE) return !todo.completed
    if (filterSelected === FilterValue.COMPLETED) return todo.completed
    return todos
  })

  return (
    <main className='todoapp'>
      <Header addTodo={addTodo} />
      <Todos
        todos={filteredTodos}
        completedTodo={completedTodo}
        removeFromTodo={removeFromTodo}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        filterChange={handleFilterChange}
        removeCompletedTodos={removeCompletedTodos}
      />
    </main>
  )
}

export default App
