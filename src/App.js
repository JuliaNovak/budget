import { Container } from 'semantic-ui-react'
import './App.css'
import DisplayBalances from './components/DisplayBalances'
import DisplayBalance from './components/DisplayBalance'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import EntryLines from './components/EntryLines'
import { useState, useEffect } from 'react'
import ModalEdit from './components/ModalEdit'

function App() {
  const [entries, setEntries] = useState(initialEntries)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
      resetEntry()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    let totalIncomes = 0
    let totalExpenses = 0
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value))
      }
      return (totalIncomes += Number(entry.value))
    })
    setTotal(totalIncomes - totalExpenses)
    setExpenseTotal(totalExpenses)
    setIncomeTotal(totalIncomes)
  }, [entries])

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id)
    setEntries(result)
  }

  function editEntry(id) {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id)
      const entry = entries[index]
      setEntryId(id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
    }
  }

  function addEntry() {
    const result = [
      ...entries,
      {
        id: entries.length + 1,
        description,
        value,
        isExpense,
      },
    ]
    setEntries(result)
    resetEntry()
  }

  function resetEntry() {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }

  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance title='Your Balance:' value={total} size='small' />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
      <MainHeader title='History' type='h3' />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      ></ModalEdit>
    </Container>
  )
}

export default App

let initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1000.0,
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water bill',
    value: 20.0,
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: 300.0,
    isExpense: true,
  },
  {
    id: 4,
    description: 'Power bill',
    value: 50.0,
    isExpense: true,
  },
]
