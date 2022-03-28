import { useParams } from 'react-router-dom'
import {
  getSingleData,
  calculateRating,
  addNewItemToCart,
} from '../controller/controller'
import useDataContext from './useDataContext'
import React, { useState } from 'react'
import { Item, Image, Tab, Rating, Select, Button } from 'semantic-ui-react'
import { numberOptions } from '../static/data'
import Reviews from './review/Reviews'

const SingleProduct = () => {
  const [productQuantity, setProductQuantity] = useState({ value: 1 })
  const { productData, cartData, setCarttData } = useDataContext()
  let params = useParams()
  let singleData = getSingleData(productData, params.id)

  const handleAddToCart = () => {
    setCarttData(() => addNewItemToCart(singleData, cartData, productQuantity))
  }
  const panes = [
    {
      menuItem: 'Product Information',
      render: () => (
        <Tab.Pane>
          <Item.Group>
            <Item>
              <Item.Image size="medium" src={singleData.product_img} />

              <Item.Content>
                <Item.Header as="a">{singleData.title}</Item.Header>
                <Item.Meta>{singleData.price}</Item.Meta>
                <Item.Description>{singleData.description}</Item.Description>
                <Item.Extra>
                  {' '}
                  <Rating
                    icon="star"
                    defaultRating={Math.ceil(calculateRating(singleData))}
                    maxRating={5}
                    disabled
                  />
                </Item.Extra>
                <Select
                  defaultValue={1}
                  onChange={(e, { value }) => {
                    setProductQuantity({ value })
                    console.log({ value })
                  }}
                  options={numberOptions}
                />
                <Button
                  primary
                  content="Add To cart"
                  onClick={() => handleAddToCart()}
                />
              </Item.Content>
            </Item>
          </Item.Group>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Reviews',
      render: () => (
        <Tab.Pane>
          <Reviews reviews={singleData.reviews} />
        </Tab.Pane>
      ),
    },
  ]

  return <Tab panes={panes} />
}

export default SingleProduct
