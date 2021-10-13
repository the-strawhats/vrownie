import composer from '@utils/composer'
import { useEffect, useState } from 'react'

const defaultCustomAction = (item: string) => item

const useSelectInput = ({
  options,
  handleCustomAction = defaultCustomAction
}) => {
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

  useEffect(() => {
    handleCustomAction(currentValue)
  }, [currentValue])

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
