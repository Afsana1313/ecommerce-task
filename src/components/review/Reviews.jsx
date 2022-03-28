import React from 'react'
import SingleReviewContainer from './SingleReviewContainer'

function Reviews({ reviews }) {
  return (
    <div>
      {reviews?.map((i) => (
        <SingleReviewContainer key={i.id} review={i} />
      ))}
    </div>
  )
}

export default Reviews
