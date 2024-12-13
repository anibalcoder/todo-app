import { FilterValue } from '../types/todo'

interface Props {
  filterSelected: FilterValue
  filterChange: (filter: FilterValue) => void
}

const filter = {
  [FilterValue.ALL]: {
    text: 'Todos',
    href: `/?filter=${FilterValue.ALL}`
  },
  [FilterValue.ACTIVE]: {
    text: 'Activos',
    href: `/?filter=${FilterValue.ACTIVE}`
  },
  [FilterValue.COMPLETED]: {
    text: 'Completados',
    href: `/?filter=${FilterValue.COMPLETED}`
  }
}

export const Filters: React.FC<Props> = ({ filterSelected, filterChange }) => {
  return (
    <ul className='filters'>
      {
        Object.entries(filter).map((
          [key, { text, href }]
        ) => (
          <li key={key}>
            <a
              onClick={(event) => {
                event.preventDefault()
                filterChange(key as FilterValue)
              }}
              className={filterSelected === key ? 'selected' : ''}
              href={href}
            >
              {text}
            </a>
          </li>
        ))
      }
    </ul>
  )
}
