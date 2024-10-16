import { useState } from "react";
const ExpenseForm = ({ setexpense }) => {
  const [error, setError] = useState({});
  const [tdata, setTdata] = useState({
    title: "",
    category: "",
    price: "",
  });

  function validate(form) {
    const err = {};
    if (!form.title) {
      err.title = "Please enter title.";
    }
    if (!form.category) {
      err.category = "Please select category.";
    }
    if (!form.price) {
      err.price = "Please enter price.";
    }
    setError(err)// state variable is for using it in below jsx
    return err;// normal variable is used for validating while submitting. because state variable cannot be used, as it is run at last
  }

  function handlesubmit(e) {
    e.preventDefault();
    const err=validate(tdata);
    if(Object.keys(err).length) return
    // const {title, category, price}=tdata;
    // const data = {
    //   title,
    //   category,
    //   price,
    // };
    setexpense((prev) => [...prev, { ...tdata, id: crypto.randomUUID() }]);
    setTdata({
      title: "",
      category: "",
      price: "",
    });
  }
  const handleupdate = (e) => {
    setError({})
    const { name, value } = e.target;
    setTdata((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));

  };
  return (
    <form className="expense-htmlForm" onSubmit={handlesubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={tdata.title}
          onChange={handleupdate}
        />
        <p className="error">{error.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={tdata.category}
          onChange={handleupdate}
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
        <p  className="error">{error.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="price"
          value={tdata.price}
          type="number"
          onChange={handleupdate}
        />
        <p className="error">{error.price}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};
export default ExpenseForm;
