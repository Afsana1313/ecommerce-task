import { useParams } from 'react-router-dom'
import { getSingleData } from '../controller/controller'
import useDataContext from './useDataContext'
function SingleProduct() {
  const { productData } = useDataContext()
  let params = useParams()
  let singleData = getSingleData(productData, params.id)
  return (
    <h2>
      post: {singleData.id}
      {singleData.title}
      {singleData.description}
    </h2>
  )
}

export default SingleProduct
