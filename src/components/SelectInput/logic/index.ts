import composer from '../../../utils/composer'
import { useState } from 'react'

const useSelectInput = ({ options }) => {
  const [selectOptions, setSelectOptions] = useState([...options])
  const [isSelectOpened, setIsSelectOpened] = useState(false)
  const [selectedValue, setSelectedValue] = useState('Selecione...')
  const [isSelectActive, setIsSelectActive] = useState(false)

  const handleOpenSelect = () => {
    setIsSelectActive(!isSelectActive)
    setIsSelectOpened(!isSelectOpened)
  }

  console.log({ options })
  const handleOptionAction = (option: string) => () => {
    setSelectedValue(option)
    const filteredList = selectOptions.filter(e => e !== option)
    setSelectOptions(filteredList)
    setIsSelectOpened(false)
    setIsSelectActive(true)
  }

  return {
    selectedValue,
    handleOptionAction,
    isSelectActive,
    handleOpenSelect,
    isSelectOpened,
    selectOptions,
  }
}

export default composer(useSelectInput)
