import "./App.css";
// import ContextMenu from './components/ContextMenu'
import data from "./components/data";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { useLocalStorage } from "./components/hooks/useLocalStorage";

function App() {
  // const [expense, setexpense] = useState(data)
  const [editing, setediting] = useLocalStorage("editing", "");
  const [tdata, setTdata] = useLocalStorage("tdata", {
    title: "",
    category: "",
    price: "",
    // email: "",
  });

  const [expense, setexpense] = useLocalStorage("expense", data);
  // console.log(localData)

  return (
    <>
      <main>
        <h1 className="title">Track Your Expense</h1>

        <div className="expense-tracker">
          <ExpenseForm
            setexpense={setexpense}
            tdata={tdata}
            setTdata={setTdata}
            editing={editing}
            setediting={setediting}
          />
          <ExpenseTable
            expenses={expense}
            setexpense={setexpense}
            setTdata={setTdata}
            setediting={setediting}
          />
        </div>
      </main>
      <h5
        style={{ textAlign: "center", margin: 0, padding: 0, fontWeight: 100 }}
      >
        <i>(Right click to edit or delete row)</i>
      </h5>
    </>
  );
}

export default App;
