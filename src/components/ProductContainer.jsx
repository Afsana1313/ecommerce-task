import React from 'react'
import ProductCard from './ProductCard'
import useDataContext from './useDataContext'
import { Outlet } from 'react-router-dom'

function ProductContainer() {
  const { productData } = useDataContext()
  return (
    <div className="product-container">
      {productData?.map((i) => (
        <ProductCard key={i.id} product={i} />
      ))}
      <Outlet />
    </div>
  )
}

export default ProductContainer
