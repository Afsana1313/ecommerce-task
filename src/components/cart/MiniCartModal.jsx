import React from 'react'
import { Button, Header, Image, Modal, Select, Menu } from 'semantic-ui-react'
import FloatingCart from './FloatingCart'
import useDataContext from '../useDataContext'
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
          onClick={() => setCarttData(deleteWholeCart(cartData))}
        >
          Proceed
        </Button>
        <span>
          <Header as="h3">Cart Total: &#36; {getTotalValue(cartData)}</Header>
        </span>
      </Modal.Actions>
    </Modal>
  )
}

export default MiniCartModal
/**
  <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          wrapped
        />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setIsMiniCartOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setIsMiniCartOpen(false)}
          positive
        />
      </Modal.Actions>
 */
