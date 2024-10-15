import { useState } from "react";

const ExpenseForm = ({ setexpense }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    // console.log(e.target)
    // const data = getFormData(e.target);
    const data = {
      title,
      category,
      price
    };
    setexpense((prev) => [...prev, { ...data, id: crypto.randomUUID() }]);
    setPrice('');
    setCategory('');
    setTitle('');
  }
  //   const getFormData = (form) => {
  //     const formData = new FormData(form);
  //     const data = {};
  //     for (const [key, value] of formData.entries()) {
  //       data[key] = value;
  //     }
  //     return data;
  //   };

  return (
    <form className="expense-htmlForm" onSubmit={handlesubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="price"
          value={price}
          type="number"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
