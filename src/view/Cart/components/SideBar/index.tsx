import { SideBarContainer, SideBarInputWrapper } from './style'
import { HeadlineThree } from '@components/Typography'
import SelectInput from '@components/SelectInput'
import Input from '@components/Input'
import Button from '@components/Button'
import enhancer from './logic/index'

interface SidebarInterface {
  handleOrderNow: () => void
  currentOption: string
  setCurrentOption: (option: string) => void
}

const SideBar: React.FC<SidebarInterface> = ({
  handleOrderNow,
  currentOption = '',
  setCurrentOption
}) => {
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
          <Input label="Rua" />
          <Input label="Bairro" />
          <SideBarInputWrapper>
            <Input label="Numero" />
            <Input label="Bairro" />
          </SideBarInputWrapper>
        </>
      )}
      {isSubway && <Input label="Estação" />}
      <Input label="Observações" />
      <Button label="Pedir agora!" onClick={handleOrderNow} />
    </SideBarContainer>
  )
}

export default enhancer(SideBar)
