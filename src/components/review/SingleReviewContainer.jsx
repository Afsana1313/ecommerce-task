import React from 'react'
import ReviewUserImage from './ReviewUserImage'
import useDataContext from '../useDataContext'
import { getUserInformation } from '../../controller/controller'
import ReviewContent from './ReviewContent'

function SingleReviewContainer({ review }) {
  const { customerData } = useDataContext()
  const { id, rating, comment, created_at, u_id } = review
  const customer = getUserInformation(customerData, u_id)
  return (
    <div className="single-review-box">
      <ReviewUserImage image={customer.avatar} />
      <ReviewContent customer={customer} review={review} />
    </div>
  )
}

export default SingleReviewContainer
