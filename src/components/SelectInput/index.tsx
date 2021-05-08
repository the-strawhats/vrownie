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
  selectedValue: string
  options: Array<string>
  handleOptionAction: (option: string) => null
  handleOpenSelect: () => null
  isSelectOpened: boolean
  selectOptions: Array<string>
}

const NOOP = () => null

const SelectInput: React.FC<SelectInputInterface> = ({
  label,
  isSelectActive = true,
  selectedValue,
  handleOptionAction,
  handleOpenSelect,
  isSelectOpened,
  selectOptions
}) => {
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
          {selectedValue}
        </SelectInputContainer>
        <SelectInputOptions active={isSelectOpened}>
          {isSelectOpened ? (
            selectOptions.map(option => {
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
