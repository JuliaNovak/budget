import React from 'react'
import {
  Button,
  Modal,
  ModalActions,
  ModalContent,
  ModalHeader,
} from 'semantic-ui-react'
import EntryForm from './EntryForm'

function ModalEdit({
  isOpen,
  setIsOpen,
  description,
  value,
  isExpense,
  setValue,
  setDescription,
  setIsExpense,
}) {
  return (
    <Modal open={isOpen}>
      <ModalHeader>Edit entry</ModalHeader>
      <ModalContent>
        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setValue={setValue}
          setDescription={setDescription}
          setIsExpense={setIsExpense}
        />
      </ModalContent>
      <ModalActions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={() => setIsOpen(false)} primary>
          Ok
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default ModalEdit
