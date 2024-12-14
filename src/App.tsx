import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { FiltersContextProvider } from './context/filtersContext'

function App (): JSX.Element {
  return (
    <main className='todoapp'>
      <FiltersContextProvider>
        <Header />
        <Todos />
        <Footer />
      </FiltersContextProvider>
    </main>
  )
}

export default App
