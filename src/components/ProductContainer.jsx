import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import useDataContext from './useDataContext'
import { Outlet } from 'react-router-dom'

function ProductContainer() {
  const { setResultData, resultData, productData } = useDataContext()
  useEffect(() => {
    setResultData(productData)
  }, [])
  //var data = resultData?.length == 0 ? productData : resultData

  return (
    <div className="product-container">
      {resultData?.length > 0 ? (
        <>
          {resultData?.map((i) => (
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
