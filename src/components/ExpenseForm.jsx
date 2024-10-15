import { useState } from "react";
const ExpenseForm = ({ setexpense }) => {
  const [tdata, setTdata] = useState({
    title: "",
    category: "",
    price: "",
  });

  function handlesubmit(e) {
    e.preventDefault();
    const {title, category, price}=tdata;
    const data = {
      title,
      category,
      price,
    };
    setexpense((prev) => [...prev, { ...data, id: crypto.randomUUID() }]);
    setTdata({
      title: "",
      category: "",
      price: "",
    });
  }

  return (
    <form className="expense-htmlForm" onSubmit={handlesubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={tdata.title}
          onChange={(e) => {
            setTdata((prev) => ({
              ...prev,
              title: e.target.value,
            }));
          }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={tdata.category}
          onChange={(e) => {
            setTdata((prev) => ({
              ...prev,
              category: e.target.value,
            }));
          }}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="price"
          value={tdata.price}
          type="number"
          onChange={(e) => {
            setTdata((prev) => ({
              ...prev,
              price: e.target.value,
            }));
          }}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};
export default ExpenseForm;
