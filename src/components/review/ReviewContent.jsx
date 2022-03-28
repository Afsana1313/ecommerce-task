import React from 'react'
import ReviewHeader from './ReviewHeader'
import ReviewDescription from './ReviewDescription'
function ReviewContent({ customer, review }) {
  return (
    <div className="review-content">
      <ReviewHeader
        name={customer.name}
        date={review.created_at}
        rating={review.rating}
      />
      <ReviewDescription description={review.comment} />
    </div>
  )
}

export default ReviewContent
