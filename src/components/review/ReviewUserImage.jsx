import React from 'react'
import { Image } from 'semantic-ui-react'

function ReviewUserImage({ image }) {
  return (
    <div>
      <Image src={image} size="small" />
    </div>
  )
}

export default ReviewUserImage
