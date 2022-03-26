import useAppContext from "../customehook/useAppContext"
function CartFooter() {
    const {totalValue} = useAppContext()
  return (
      <div className='cart-footer'>
          <div className='cart-footer-text'>
              Cart Total: <br />
              <span>{`$ `+totalValue}</span>
          </div>
          <div className='cart-footer-btn'>
              <button>Proceed</button>
          </div>
    </div>
  )
}

export default CartFooter
