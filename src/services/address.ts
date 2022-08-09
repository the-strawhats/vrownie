import axios from 'axios'

export class Address {
  async getByZipCode({ cep }: { cep: string }): Promise<Address.Result> {
    const url = 'https://viacep.com.br/ws/:cep/json/'
    const enhancedUrl = url.replace(':cep', cep)
    const response = await axios.get(enhancedUrl)

    return response.data
  }
}

export namespace Address {
  export type Result = {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
  }
}
