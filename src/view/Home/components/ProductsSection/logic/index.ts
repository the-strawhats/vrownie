import composer from '@utils/composer'
import { useEffect, useState } from 'react'
import { GraphCMS } from 'src/services/products'

const useProductSection = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const result = async () => {
      const api = new GraphCMS()
      const res = await api.load()

      setProducts(res)
    }

    result()
  }, [])
  return {
    products
  }
}

export default composer(useProductSection)
