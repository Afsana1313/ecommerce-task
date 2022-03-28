import React from 'react'
import { Header, Rating } from 'semantic-ui-react'
import { dateFormatter } from '../../controller/controller'

function ReviewHeader({ name, date, rating }) {
  return (
    <div className="review-header">
      <div className="review-left">
        <Header as="h4">{name}</Header>
        <span>{dateFormatter(date)}</span>
      </div>
      <div className="review-right">
        <Rating icon="star" defaultRating={rating} maxRating={5} />
      </div>
    </div>
  )
}

export default ReviewHeader
