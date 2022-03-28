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
} from 'semantic-ui-react'
import { getTotalValue } from '../../controller/controller'
import { districtOptions, genderOptions } from '../../static/data'
import useDataContext from '../useDataContext'
import DisplayTotalValue from './DisplayTotalValue'

function Checkout() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [district, setDistrict] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const [deliveryOption, setDeliveryOption] = useState('cod')
  const { cartData } = useDataContext()
  React.useEffect(() => {
    const { firstName, lastName, gender, address, email, district } = checkError
    if (
      firstName === '' ||
      lastName === '' ||
      gender === '' ||
      address === '' ||
      email === '' ||
      district === ''
    )
      setError(true)
    else setError(false)
  })
  const handleDeliveryOptions = (e, { value }) => {
    e.preventDefault()
    setDeliveryOption(value)
  }
  const checkError = {
    firstName,
    lastName,
    district,
    gender,
    email,
    address,
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
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Last name"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
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
              onChange={(e, val) => setGender(val.value)}
              value={gender}
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
              onChange={(e, m) => setDistrict(m.value)}
              value={district}
            />
            <Form.Field
              id="form-input-control-address"
              control={Input}
              label="Address"
              placeholder="Address"
              type="address"
              required
              onChange={(e) => setAddress(e.target.value)}
              value={address}
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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

                <DisplayTotalValue checkError={error} />
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
