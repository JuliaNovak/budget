import React, { Fragment } from 'react'
import { Checkbox, FormGroup, FormInput, Segment } from 'semantic-ui-react'

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <Fragment>
      <FormGroup>
        <FormInput
          icon='tags'
          width={12}
          label='Description'
          placeholder='New shiny thing'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <FormInput
          width={4}
          label='Value'
          placeholder='100.00'
          icon='dollar'
          iconPosition='left'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></FormInput>
      </FormGroup>
      <Segment compact>
        <Checkbox
          toggle
          label='is expense'
          checked={isExpense}
          onChange={() => setIsExpense((oldState) => !oldState)}
        />
      </Segment>
    </Fragment>
  )
}

export default EntryForm
