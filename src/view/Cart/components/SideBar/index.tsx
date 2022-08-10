import { SideBarContainer, SideBarInputWrapper } from './style'
import { HeadlineThree } from '@components/Typography'
import SelectInput from '@components/SelectInput'
import Input from '@components/Input'
import Button from '@components/Button'
import enhancer from './logic/index'
import FloatingAction from '@components/FloattingAction'
import { Fragment } from 'react'
import enhanceCart from '@view/Cart/components/Order/logic'
import { formatCurrency } from '@utils/format'

interface SidebarInterface {
  totalValue: string
  handleOrderNow: () => void
  isButtonDisabled: boolean
  isAddress: boolean
  handleSelectChange: (option: string) => void
  handleOnChange: (
    modal: string
  ) => (event: React.FormEvent<HTMLInputElement>) => void
}

const SideBar: React.FC<SidebarInterface> = ({
  handleSelectChange,
  isButtonDisabled,
  handleOrderNow,
  handleOnChange,
  isAddress,
  totalValue
}) => {
  const formattedTotalValue = formatCurrency(Number(totalValue))

  return (
    <Fragment>
      <SideBarContainer>
        <HeadlineThree>
          Entrega<span className="red">.</span>
        </HeadlineThree>
        <SelectInput
          options={['Endereço', 'Retirar']}
          label="Opção de entrega"
          handleCustomAction={handleSelectChange}
        />
        {isAddress && (
          <>
            <Input label="Rua" onChange={handleOnChange('street')} />
            <Input label="Bairro" onChange={handleOnChange('neighborhood')} />
            <SideBarInputWrapper>
              <Input label="Numero" onChange={handleOnChange('number')} />
              <Input
                label="Complemento"
                onChange={handleOnChange('complement')}
              />
            </SideBarInputWrapper>
          </>
        )}
        <Input label="Observações" onChange={handleOnChange('observation')} />
        <Button
          label="Quero encomendar!"
          onClick={handleOrderNow}
          isDisabled={isButtonDisabled}
        />
      </SideBarContainer>
      <FloatingAction
        onClick={handleOrderNow}
        isDisabled={isButtonDisabled}
        totalValue={formattedTotalValue}
      />
    </Fragment>
  )
}

export default enhanceCart(enhancer(SideBar))
