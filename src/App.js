import { Container } from 'semantic-ui-react'
import './App.css'
import DisplayBalances from './components/DisplayBalances'
import DisplayBalance from './components/DisplayBalance'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import EntryLine from './components/EntryLine'

function App() {
  return (
    <Container>
      <DisplayBalance title='Your Balance:' value='2,550.52' size='small' />
      <DisplayBalances />
      <MainHeader title='History' type='h3' />
      <EntryLine description='Expense' value='100.00$' isExpense />
      <EntryLine description='Income' value='20.00$' />
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm />
    </Container>
  )
}

export default App
