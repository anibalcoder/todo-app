interface Todo {
  id: string
  title: string
  completed: boolean
}

enum FilterValue {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED'
}

type TodoId = Pick<Todo, 'id'>
type TodoTitle = Pick<Todo, 'title'>
type TodoCompleted = Pick<Todo, 'completed'>
type ListOfTodos = Todo[]

export type { Todo, TodoId, TodoTitle, TodoCompleted, ListOfTodos }
export { FilterValue }
