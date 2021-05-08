import React from 'react'
import {
  SelectInputContent,
  SelectInputWrapper,
  SelectInputContainer,
  SelectInputOptions,
  SelectInputOptionsItem
} from './style'
import { Label } from '../Typography'
import enhancer from './logic/index'

interface SelectInputInterface {
  label?: string
  isSelectActive: boolean
  selectValue: string
  options: Array<string>
  handleOptionAction: (option: string) => null
  handleOpenSelect: () => null
  isSelectOpened: boolean
  selectOptions: Array<string>
  setSelectOptions: (options: Array<string>) => null
}

const NOOP = () => null

const SelectInput: React.FC<SelectInputInterface> = ({
  label,
  isSelectActive = true,
  selectValue,
  options,
  handleOptionAction,
  handleOpenSelect,
  isSelectOpened,
  selectOptions,
  setSelectOptions
}) => {
  setSelectOptions(options)
  console.log(selectOptions)
  return (
    <SelectInputContent>
      <Label>
        {label}
        <span className="red">:</span>
      </Label>
      <SelectInputWrapper>
        <SelectInputContainer
          onClick={handleOpenSelect}
          active={isSelectActive}
        >
          {selectValue}
        </SelectInputContainer>
        <SelectInputOptions active={isSelectOpened}>
          {isSelectOpened ? (
            options.map(option => {
              return (
                <SelectInputOptionsItem onClick={handleOptionAction(option)}>
                  {option}
                </SelectInputOptionsItem>
              )
            })
          ) : (
            <NOOP />
          )}
        </SelectInputOptions>
      </SelectInputWrapper>
    </SelectInputContent>
  )
}

export default enhancer(SelectInput)
