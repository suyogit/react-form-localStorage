import { useState } from 'react'
import './App.css'
// import ContextMenu from './components/ContextMenu'
import data from './components/data'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'


function App() {
  const [expense, setexpense] = useState(data)
  const [editing, setediting]=useState('')
  const [tdata, setTdata] = useState({
    title: "",
    category: "",
    price: "",
    // email: "",
  });


  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setexpense={setexpense} tdata={tdata} setTdata={setTdata}  editing={editing} setediting={setediting}/>
        <ExpenseTable expenses={expense} setexpense={setexpense} setTdata={setTdata} setediting={setediting}/>
      </div>
    </main>
     
    </>
  )
}

export default App
