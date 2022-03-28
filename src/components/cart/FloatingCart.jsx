import React from 'react'
import { Icon } from 'semantic-ui-react'
import useDataContext from '../useDataContext'
import { getTotalValue } from '../../controller/controller'
import Odometer from 'react-odometerjs'

function FloatingCart() {
  const { cartData, setIsMiniCartOpen, isMiniCartOpen } = useDataContext()

  return (
    <div
      className="floating-cart-container"
      onClick={(e) => setIsMiniCartOpen(!isMiniCartOpen)}
    >
      <div className="floating-cart-icon">
        <Icon name="shopping cart" />
      </div>
      <div className="floating-cart-item-number">
        {!!cartData?.length && cartData?.length}
        {cartData === undefined || cartData?.length === 0
          ? 'No Item'
          : cartData?.length === 1
          ? ' item'
          : ' items'}
      </div>
      <div className="cart-text">
        $<Odometer value={getTotalValue(cartData)} format="(.ddd),dd" />
      </div>
    </div>
  )
}

export default FloatingCart
