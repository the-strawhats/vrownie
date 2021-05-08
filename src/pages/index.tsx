import Head from 'next/head'
import React from 'react'
import { Container } from '../styles/pages/Home'
import { HeadlineOne } from '../components/Typography'
import Button from '../components/Button'
import Input from '../components/Input'
import SelectInput from '../components/SelectInput'
import Icon from '../components/Icon'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Vrownie</title>
      </Head>

      <HeadlineOne>
        {' '}
        Brownies <span className="green">veganos</span> de respeito
        <span className="red">.</span>{' '}
      </HeadlineOne>
      <Button label="Pedir agora!" />
      <Input label="Complemento" />
      <SelectInput
        options={['Endereço', 'Metrô', 'Retirada']}
        label="Opção de entrega"
      />
      <Icon id="hamburguer" />
    </Container>
  )
}

export default Home
