import { CreateTodo } from './CreateTodo'
import { TodoTitle } from '../types/todo'

interface Props {
  addTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ addTodo }): JSX.Element => {
  return (
    <header className='header'>
      <h1>
        todo
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
          style={{ width: '60px', height: 'auto' }}
        />
      </h1>

      <CreateTodo addTodo={addTodo} />
    </header>
  )
}
