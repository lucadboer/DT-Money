import { MagnifyingGlass } from 'phosphor-react'
import { SearchContainer } from './styles'

export function Search() {
  return (
    <div>
      <SearchContainer>
        <input placeholder="Busque uma transação" type="text" />
        <button>
          <MagnifyingGlass size={20} />
          <span>Buscar</span>
        </button>
      </SearchContainer>
    </div>
  )
}
