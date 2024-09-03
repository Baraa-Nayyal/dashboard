import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'src/store/actions/products/productActions'
import { RootState } from 'src/store/store'

const Users = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state: RootState) => state.updateProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product, i) => (
          <div key={product.id}>
            {i}. {product.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
