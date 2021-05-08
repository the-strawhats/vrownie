import composer from '../../../utils/composer'
import { useState } from 'react'

const useSelectInput = () => {
  const [selectOptions, setSelectOptions] = useState([])
  const [isSelectOpened, setIsSelectOpened] = useState(false)
  const [selectValue, setSelectValue] = useState('Selecione...')
  const [isSelectActive, setIsSelectActive] = useState(false)

  const handleOpenSelect = () => {
    setIsSelectActive(!isSelectActive)
    setIsSelectOpened(!isSelectOpened)
  }

  const handleOptionAction = (option: string) => () => {
    setSelectValue(option)
    setIsSelectOpened(false)
    setIsSelectActive(true)
  }

  return {
    selectValue,
    handleOptionAction,
    isSelectActive,
    handleOpenSelect,
    isSelectOpened,
    selectOptions,
    setSelectOptions
  }
}

export default composer(useSelectInput)
