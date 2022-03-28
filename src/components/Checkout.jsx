import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Grid,
  Header,
  Radio,
  Segment,
  Table,
} from 'semantic-ui-react'
import { getTotalValue } from '../controller/controller'
import { districtOptions, genderOptions } from '../static/data'
import ModalPlaceOrder from './ModalPlaceOrder'
import useDataContext from './useDataContext'

function Checkout() {
  const [deliveryOption, setDeliveryOption] = useState('cod')
  const { cartData } = useDataContext()
  const handleDeliveryOptions = (e, { value }) => {
    e.preventDefault()
    setDeliveryOption(value)
  }
  return (
    <div className="checkout-container">
      {getTotalValue(cartData) ? (
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="First name"
              placeholder="First name"
              required
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Last name"
              placeholder="Last name"
              required
            />
            <Form.Field
              required
              control={Select}
              options={genderOptions}
              label={{
                children: 'Gender',
                htmlFor: 'form-select-control-gender',
              }}
              placeholder="Gender"
              search
              searchInput={{ id: 'form-select-control-gender' }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              required
              control={Select}
              options={districtOptions}
              label={{
                children: 'District',
                htmlFor: 'form-select-control-district',
              }}
              placeholder="District"
              search
              searchInput={{ id: 'form-select-control-district' }}
            />
            <Form.Field
              id="form-input-control-address"
              control={Input}
              label="Address"
              placeholder="Address"
              type="address"
              required
            />
          </Form.Group>
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Other Notes (Optional)"
            placeholder="Notes about your order e.g. Special Notes for your delivery"
          />
          <Form.Field
            required
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            placeholder="joe@schmoe.com"
          />
          <Segment placeholder>
            <Grid columns={2} stackable textAlign="center">
              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <Form.Field>
                    <Header as="h4">Choose Payment Method</Header>
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Cash On Delivery"
                      name="radioGroup"
                      value="cod"
                      checked={deliveryOption === 'cod'}
                      onChange={handleDeliveryOptions}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Pay with Card /Mobile Wallet"
                      name="radioGroup"
                      value="card"
                      checked={deliveryOption === 'card'}
                      onChange={handleDeliveryOptions}
                    />
                  </Form.Field>
                </Grid.Column>

                <Grid.Column>
                  <Table
                    basic="very"
                    celled
                    collapsing
                    style={{ margin: '0 auto 10px' }}
                  >
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4">
                            <Header.Content>Total Cart Value:</Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>&#36;{getTotalValue(cartData)}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4">
                            <Header.Content>Delivery Charge:</Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>&#36; 50</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4">
                            <Header.Content>Grand Value:</Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>
                          &#36;{getTotalValue(cartData) + 50}
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                  <ModalPlaceOrder />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Form>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <Header as="h3">Your Cart is empty</Header>
          <Link to="/">
            <Button color="violet">Let's shopping</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Checkout
