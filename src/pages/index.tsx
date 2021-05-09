import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Container } from '../styles/pages/Home'
import { HeadlineOne } from '../components/Typography'
import Button from '../components/Button'
import Input from '../components/Input'
import SelectInput from '../components/SelectInput'
import Icon from '../components/Icon'
import Counter from '../components/Counter'
import Card from '../components/Card'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Vrownie</title>
      </Head>
      <Card
        title="Castanhas"
        description="Castanha do Pará, nozes, macadâmia, avelã ou mix da sua escolha."
        price={12}
      />

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
      <Counter />
    </Container>
  )
}

export default Home
