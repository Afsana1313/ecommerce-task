import React, { useState } from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
function ModalPlaceOrder() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button type="submit" color="violet" style={{ width: '100%' }}>
            Place Order
          </Button>
        }
      >
        <Modal.Content>
          <Modal.Description style={{ textAlign: 'center' }}>
            <Header>Your Order Has been Placed</Header>
            <Link to="/">
              <Button color="black">Go Back To Home Page</Button>
            </Link>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default ModalPlaceOrder
