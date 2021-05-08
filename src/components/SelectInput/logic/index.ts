import composer from '../../../utils/composer'
import { useState } from 'react'

const useSelectInput = ({ options }) => {
  const [inputOption, setInputOption] = useState([...options])
  const [isOpened, setIsOpened] = useState(false)
  const [currentValue, setCurrentValue] = useState('Selecione...')
  const [isActive, setIsActive] = useState(false)

  const handleOpenSelect = () => {
    setIsActive(!isActive)
    setIsOpened(!isOpened)
  }

  const handleOptionAction = (option: string) => () => {
    setCurrentValue(option)
    const filteredList = options.filter((e: String) => e !== option)
    setInputOption(filteredList)
    setIsOpened(false)
    setIsActive(true)
  }

  return {
    currentValue,
    handleOptionAction,
    isActive,
    handleOpenSelect,
    isOpened,
    inputOption
  }
}

export default composer(useSelectInput)
