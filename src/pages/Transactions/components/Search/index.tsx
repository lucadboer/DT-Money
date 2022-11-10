import { MagnifyingGlass } from 'phosphor-react'
import { SearchContainer } from './styles'

export function Search() {
  return (
    <div>
      <SearchContainer>
        <input required placeholder="Busque por transações" type="text" />
        <button>
          <MagnifyingGlass size={20} />
          <span>Buscar</span>
        </button>
      </SearchContainer>
    </div>
  )
}
