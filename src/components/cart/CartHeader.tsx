import { CloseOutlined } from '@ant-design/icons'
import useAppContext from '../customehook/useAppContext'
function CartHeader() {
  const {setCartOpen} = useAppContext()
  return (
      <div className='cart-header'>
          <CloseOutlined
              className='cart-close-btn'
              onClick={(e)=> setCartOpen(false)}
          />
          <h4>Cart</h4>
    </div>
  )
}

export default CartHeader
