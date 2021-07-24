import { SideBarContainer, SideBarInputWrapper } from './style'
import { HeadlineThree } from '../../../../components/Typography'
import SelectInput from '../../../../components/SelectInput'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

const SideBar = () => {
  return (
    <SideBarContainer>
      <HeadlineThree>
        Entrega<span className="red">.</span>
      </HeadlineThree>
      <SelectInput
        options={['Endereço', 'Metrô', 'retirar']}
        label="Opção de entraga"
      />
      <Input label="Rua" />
      <Input label="Bairro" />
      <SideBarInputWrapper>
      <Input label="Numero" />
      <Input label="Bairro" />
      </SideBarInputWrapper>
      <Input label="Observações" />
      <Button label="Pedir agora!" />
    </SideBarContainer>
  )
}

export default SideBar
