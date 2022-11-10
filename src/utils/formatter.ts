export function formattedMoney(value: number) {
  const formato = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  }

  return value.toLocaleString('pt-BR', formato)
}

export const formattedDate = new Intl.DateTimeFormat('pt-BR')
