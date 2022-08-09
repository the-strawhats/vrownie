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
  contentForm
  isSubway: boolean
  totalValue: string
  isAddress: boolean
  isButtonDisabled: boolean
  handleOrderNow: () => void
  isAddressFormDisabled: boolean
  handleSelectChange: (option: string) => void
  handleOnChange: (
    modal: string
  ) => (event: React.FormEvent<HTMLInputElement>) => void
  handleZipCodeChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const SideBar: React.FC<SidebarInterface> = ({
  isSubway,
  isAddress,
  totalValue,
  contentForm,
  handleOrderNow,
  handleOnChange,
  isButtonDisabled,
  handleSelectChange,
  handleZipCodeChange,
  isAddressFormDisabled
}) => {
  const formattedTotalValue = formatCurrency(Number(totalValue))

  const { street, neighborhood } = contentForm

  return (
    <Fragment>
      <SideBarContainer>
        <HeadlineThree>
          Entrega<span className="red">.</span>
        </HeadlineThree>
        <SelectInput
          options={['Endereço', 'Metrô', 'Retirar']}
          label="Opção de entrega"
          handleCustomAction={handleSelectChange}
        />
        {isAddress && (
          <>
            <Input label="Cep" onChange={handleZipCodeChange} />
            <Input
              value={street}
              label="Rua"
              onChange={handleOnChange('street')}
              isDisabled={isAddressFormDisabled}
            />
            <Input
              value={neighborhood}
              label="Bairro"
              onChange={handleOnChange('neighborhood')}
              isDisabled={isAddressFormDisabled}
            />
            <SideBarInputWrapper>
              <Input label="Numero" onChange={handleOnChange('number')} />
              <Input
                label="Complemento"
                onChange={handleOnChange('complement')}
              />
            </SideBarInputWrapper>
          </>
        )}
        {isSubway && (
          <Input label="Estação" onChange={handleOnChange('station')} />
        )}
        <Input label="Observações" onChange={handleOnChange('observation')} />
        <Button
          label="Pedir agora!"
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
