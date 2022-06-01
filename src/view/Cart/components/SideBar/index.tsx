import { SideBarContainer, SideBarInputWrapper } from './style'
import { HeadlineThree } from '@components/Typography'
import SelectInput from '@components/SelectInput'
import Input from '@components/Input'
import Button from '@components/Button'
import enhancer from './logic/index'
import {useOrder} from 'src/view/Cart/components/Order/logic'

interface SidebarInterface {
  handleOrderNow: () => void
  currentOption: string
  setCurrentOption: (option: string) => void
  handleOnChange: (
    modal: string
  ) => (event: React.FormEvent<HTMLInputElement>) => void
}

const SideBar: React.FC<SidebarInterface> = ({
  handleOrderNow,
  currentOption = '',
  setCurrentOption,
  handleOnChange,
  
}) => {
  const {cartList} = useOrder()
  const isAddress = currentOption == 'Endereço'
  const isSubway = currentOption == 'Metrô'
  return (
    <SideBarContainer>
      <HeadlineThree>
        Entrega<span className="red">.</span>
      </HeadlineThree>
      <SelectInput
        options={['Endereço', 'Metrô', 'Retirar']}
        label="Opção de entrega"
        handleCustomAction={setCurrentOption}
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
      {isSubway && (
        <Input label="Estação" onChange={handleOnChange('station')} />
      )}
      <Input label="Observações" onChange={handleOnChange('observation')} />
      <Button label="Pedir agora!" onClick={handleOrderNow} isDisabled={(cartList ?? []).length === 0} />
    </SideBarContainer>
  )
}

export default enhancer(SideBar)
