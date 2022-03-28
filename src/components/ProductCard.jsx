import React, { useState, useEffect } from 'react'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'
import { Card, Image, Rating } from 'semantic-ui-react'
import useDataContext from './useDataContext'
import { calculateRating } from '../controller/controller'

function ProductCard(props) {
  const [isInCart, setIsInCart] = useState(false)
  const btnText = isInCart ? 'View Cart' : 'Add To Cart'
  const { id, title, price, product_img } = props.product
  const { cartData, setCarttData, setIsMiniCartOpen } = useDataContext()
  useEffect(() => {
    !!cartData?.find((i) => i.id === id)
      ? setIsInCart(true)
      : setIsInCart(false)
    // console.log(cart)
  }, [cartData, id])
  const addToCartBtn = {
    width: '100%',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    backgroundColor: '',
  }
  const handleAddToCart = () => {
    const newCartItem = {
      ...props.product,
      quantity: 1,
    }
    setIsInCart(!isInCart)
    setCarttData([...cartData, newCartItem])
    console.table([...cartData, newCartItem])
  }
  return (
    <Card className="card">
      <Link to={`${id}`}>
        <Image src={product_img} wrapped ui />
        <Card.Content className="single-product-container-text">
          <Card.Header>{title}</Card.Header>
          <Rating
            icon="star"
            defaultRating={Math.ceil(calculateRating(props.product))}
            maxRating={5}
          />
          <Card.Description>&#36;{price}</Card.Description>
        </Card.Content>
      </Link>
      <div
        onClick={() => (isInCart ? setIsMiniCartOpen(true) : handleAddToCart())}
      >
        <CustomButton style={addToCartBtn}>{btnText}</CustomButton>
      </div>
    </Card>
  )
}

export default ProductCard
/*
  < div key = { id } ref = { nodeRef } className = "single-product-container" >
      <Link to={`${id}`}>
        <ProductImage image={product_img} title={title} />
        <div className="single-product-container-text">
          <ProductTitle title={title} />
          <ProductPrice price={price} />
        </div>
      </Link>
      <CustomButton style={addToCartBtn}>Add To Cart</CustomButton>
    </div>*/
