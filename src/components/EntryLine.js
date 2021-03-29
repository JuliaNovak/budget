import React, { Fragment } from 'react'
import { Grid, GridColumn, GridRow, Icon, Segment } from 'semantic-ui-react'

function EntryLine({
  id,
  description,
  value,
  isExpense = false,
  deleteEntry,
  editEntry,
}) {
  return (
    <Fragment>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textaAlign='right'>
          <GridRow>
            <GridColumn width={10} textAlign='left'>
              {description}
            </GridColumn>
            <GridColumn width={3} textAlign='right'>
              {value}
            </GridColumn>
            <GridColumn width={3}>
              <Icon name='edit' bordered onClick={() => editEntry(id)} />
              <Icon name='trash' bordered onClick={() => deleteEntry(id)} />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
    </Fragment>
  )
}

export default EntryLine
