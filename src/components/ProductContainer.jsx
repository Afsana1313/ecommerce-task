import React from 'react'
import ProductCard from './ProductCard'
import useDataContext from './useDataContext'
import { Outlet } from 'react-router-dom'

function ProductContainer() {
  const { resultData, productData } = useDataContext()
  //var data = resultData?.length == 0 ? productData : resultData
  var data = resultData
  return (
    <div className="product-container">
      {data?.length > 0 ? (
        <>
          {data?.map((i) => (
            <ProductCard key={i.id} product={i} />
          ))}
        </>
      ) : (
        <h2
          style={{
            textAlign: 'center',
            margin: '100px 0',
          }}
        >
          No Match
        </h2>
      )}
      <Outlet />
    </div>
  )
}

export default ProductContainer
