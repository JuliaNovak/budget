import React from 'react'
import { Grid, GridColumn, GridRow, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
  return (
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <GridRow>
          <GridColumn>
            <DisplayBalance title='Income:' value='7658.67' color='green' />
          </GridColumn>
          <GridColumn>
            <DisplayBalance title='Expenses:' value='6000.35' color='red' />
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  )
}

export default DisplayBalances
