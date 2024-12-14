import { createContext, useState } from 'react'
import { FilterValue } from '../types/todo'

interface FiltersContextType {
  filterSelected: FilterValue
  setFilterSelected: React.Dispatch<React.SetStateAction<FilterValue>>
}

interface Props {
  children: React.ReactNode
}

const FiltersContext = createContext<FiltersContextType>({
  filterSelected: FilterValue.ALL,
  setFilterSelected: () => {}
})

const FiltersContextProvider: React.FC<Props> = ({ children }) => {
  const [filterSelected, setFilterSelected] = useState<FilterValue>(FilterValue.ALL)

  return (
    <FiltersContext.Provider value={{
      filterSelected, setFilterSelected
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export { FiltersContext, FiltersContextProvider }
