import composer from '../../../../../utils/composer'

const useProductSection = () => {
  const browniesMock = [
    {
      title: 'Tradicional',
      description: '',
      price: 5
    },
    {
      title: 'Castanhas',
      description: 'Castanha do Pará, macadâmia, avelâ ou mix da sua escolha',
      price: 6
    },
    {
      title: 'Gotas pretas',
      description: 'Gotas de chocolate meio amargo ou amargo',
      price: 6
    },
    {
      title: 'Gotas brancas',
      description: 'Gotas de chocolate branco',
      price: 6
    },
    {
      title: 'Creme de avelã',
      description: '',
      price: 7
    },
    {
      title: 'Creme branco',
      description: 'creme de castanhas de caju com chocolate branco',
      price: 7
    }
  ]

  return {
    browniesMock
  }
}

export default composer(useProductSection)
