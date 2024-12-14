import { useContext } from 'react'
import { FiltersContext } from '../context/filtersContext'
import { FilterValue } from '../types/todo'

const filtersLink = {
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

export const Filters = (): JSX.Element => {
  const { filterSelected, setFilterSelected } = useContext(FiltersContext)

  return (
    <ul className='filters'>
      {
        Object.entries(filtersLink).map((
          [key, { text, href }]
        ) => (
          <li key={key}>
            <a
              onClick={(event) => {
                event.preventDefault()
                setFilterSelected(key as FilterValue)
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
