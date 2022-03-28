import React from 'react'
import { Button, Header, Image, Modal, Select } from 'semantic-ui-react'
import FloatingCart from './FloatingCart'
import useDataContext from '../useDataContext'
import { Link } from 'react-router-dom'
import {
  getTotalValue,
  changeQuantity,
  deleteWholeCart,
} from '../../controller/controller'
import { deleteItem } from '../../controller/controller'
import { numberOptions } from '../../static/data'

function MiniCartModal() {
  const {
    isMiniCartOpen,
    setIsMiniCartOpen,
    cartData,
    setCarttData,
  } = useDataContext()

  return (
    <Modal
      onClose={() => setIsMiniCartOpen(false)}
      onOpen={() => setIsMiniCartOpen(true)}
      open={isMiniCartOpen}
      trigger={<FloatingCart />}
    >
      <Modal.Header>
        <span>Cart</span>
        <Button
          color="red"
          onClick={() => setCarttData(deleteWholeCart(cartData))}
          className="position-right"
        >
          Clear Cart
        </Button>{' '}
      </Modal.Header>
      {cartData.length > 0 ? (
        <>
          {cartData?.map((i) => (
            <React.Fragment key={i.id}>
              <Modal.Content image>
                <Image size="medium" src={i.product_img} wrapped />
                <Modal.Description>
                  <Header>{i.title}</Header>
                  <p>{i.price}</p>
                  <Select
                    defaultValue={i.quantity}
                    onChange={(e, { value }) =>
                      setCarttData(changeQuantity(cartData, i.id, { value }))
                    }
                    options={numberOptions}
                  />
                  <Button
                    basic
                    color="red"
                    onClick={() => setCarttData(deleteItem(cartData, i.id))}
                    className="margin-left"
                  >
                    Delete
                  </Button>
                  <Header as="h3">Price: &#36; {i.price * i.quantity}</Header>
                </Modal.Description>
              </Modal.Content>
            </React.Fragment>
          ))}
          <Modal.Actions>
            <Button
              size="big"
              className="position-left"
              color="green"
              onClick={() => setIsMiniCartOpen(false)}
            >
              <Link to="checkout">Proceed</Link>
            </Button>
            <span>
              <Header as="h3">
                Cart Total: &#36; {getTotalValue(cartData)}
              </Header>
            </span>
          </Modal.Actions>
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <Header as="h3">Your Cart is empty</Header>
          <Link to="/" onClick={() => setIsMiniCartOpen(false)}>
            <Button color="violet">Let's shopping</Button>
          </Link>
        </div>
      )}
    </Modal>
  )
}

export default MiniCartModal
