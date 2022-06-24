import axios from 'axios'

export class GraphCMS {
  url: string

  constructor() {
    this.url =
      'https://api-ca-central-1.graphcms.com/v2/cko27gfl2ly5t01z1cncr58iw/master'
  }

  async load(): Promise<GraphCMS.Result[]> {
    const query = `{
      products {
        name
        price
        description
        image {
          url
        }
      }
    }`

    const response = await axios.post(this.url, {
      query
    })

    return response.data.data.products
  }
}

export namespace GraphCMS {
  export type Result = {
    name: string
    price: string
    image: string
    description: string
  }
}
