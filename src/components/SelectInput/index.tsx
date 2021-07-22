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
  label: string
  isActive: boolean
  currentValue: string
  options: Array<string>
  handleOptionAction: (option: string) => null
  handleOpenSelect: () => null
  isOpened: boolean
  inputOption: Array<string>
}

const NOOP = () => null

const SelectInput: React.FC<SelectInputInterface> = ({
  label,
  isActive = true,
  currentValue,
  handleOptionAction,
  handleOpenSelect,
  isOpened,
  inputOption
}) => {
  return (
    <SelectInputContent>
      <Label>
        {label}
        <span className="red">:</span>
      </Label>
      <SelectInputWrapper>
        <SelectInputContainer onClick={handleOpenSelect} active={isActive}>
          {currentValue}
        </SelectInputContainer>
        <SelectInputOptions active={isOpened}>
          {isOpened ? (
            inputOption.map(item => {
              return (
                <SelectInputOptionsItem onClick={handleOptionAction(item)}>
                  {item}
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
