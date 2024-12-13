import { Filters } from './Filters'
import { FilterValue } from '../types/todo'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  filterChange: (filter: FilterValue) => void
  removeCompletedTodos: () => void
}

export const Footer: React.FC<Props> = (
  { activeCount, completedCount, filterSelected, filterChange, removeCompletedTodos }
) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tareas pendientes
      </span>

      <Filters filterSelected={filterSelected} filterChange={filterChange} />

      {
        completedCount > 0 && (
          <button
            className='clear-completed'
            onClick={removeCompletedTodos}
          >
            Borrar completados
          </button>
        )
      }
    </footer>
  )
}
