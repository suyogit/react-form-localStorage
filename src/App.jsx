import { useState } from 'react'
import './App.css'
import ContextMenu from './components/ContextMenu'
import data from './components/data'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'


function App() {
  const [expense, setexpense] = useState(data)

  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setexpense={setexpense}/>
        <ExpenseTable expenses={expense} setexpense={setexpense}/>
      </div>
    </main>
     
    </>
  )
}

export default App
