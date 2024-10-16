import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
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
    setError(err); // state variable is for using it in below jsx
    return err; // normal variable is used for validating while submitting. because state variable cannot be used, as it is run at last
  }

  function handlesubmit(e) {
    e.preventDefault();
    const err = validate(tdata);
    if (Object.keys(err).length) return;
    setexpense((prev) => [...prev, { ...tdata, id: crypto.randomUUID() }]);
    setTdata({
      title: "",
      category: "",
      price: "",
    });
  }
  const handleupdate = (e) => {
    setError({});
    const { name, value } = e.target;
    setTdata((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };
  return (
    <form className="expense-htmlForm" onSubmit={handlesubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={tdata.title}
        onChange={handleupdate}
        error={error.title}
      />
      <Select
        label="Category"
        id="category"
        name="category"
        value={tdata.category}
        onChange={handleupdate}
        defaults="Select Category"
        option={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        error={error.category}
      />
      <Input
        label="Amount"
        id="amount"
        type="number"
        name="price"
        value={tdata.price}
        onChange={handleupdate}
        error={error.price}
      />
      <button className="add-btn">Add</button>
    </form>
  );
};
export default ExpenseForm;
