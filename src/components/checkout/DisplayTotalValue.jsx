import React from 'react'
import { Grid, Header, Table } from 'semantic-ui-react'
import { getTotalValue } from '../../controller/controller'
import useDataContext from '../useDataContext'
import ModalPlaceOrder from './ModalPlaceOrder'

function DisplayTotalValue({ checkError }) {
  const { cartData } = useDataContext()
  return (
    <Grid.Column>
      <Table basic="very" celled collapsing style={{ margin: '0 auto 10px' }}>
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
            <Table.Cell>&#36;{getTotalValue(cartData) + 50}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <ModalPlaceOrder checkError={checkError} />
    </Grid.Column>
  )
}

export default DisplayTotalValue
