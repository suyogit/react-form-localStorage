import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
const ExpenseForm = ({ setexpense, tdata, setTdata, editing, setediting }) => {
  const [error, setError] = useState({});
  const errors = {
    title: [
      { required: true, message: "Title is required." },
      {
        minlength: 2,
        message: "Please enter title greater than 2 letter.",
      },
    ],
    category: [{ required: true, message: "Please select category" }],
    price: [
      { required: true, message: "Please enter price" },
      {
        pattern: /^[1-9]\d*(\.\d+)?$/,
        message: "Please enter a valid number",
      },
    ],
    // email: [
    //   { required: true, message: "Please enter an email" },
    //   {
    //     pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    //     message: "Please enter a valid email",
    //   },
    // ],
  };
  1840;
  function validate(form) {
    const err = {};
    Object.entries(form).forEach(([key, value]) => {
      errors[key].some((rule) => {
        if (rule.required && !value) {
          err[key] = rule.message;
          return true;
        }
        if (rule.minlength && value.length < rule.minlength) {
          err[key] = rule.message;
          return true;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          err[key] = rule.message;
          return true;
        }
      });
    });
    setError(err); // state variable is for using it in below jsx
    return err; // normal variable is used for validating while submitting. because state variable cannot be used, as it is run at last
  }

  function handlesubmit(e) {
    e.preventDefault();
    const err = validate(tdata);
    if (Object.keys(err).length) return;

    if (editing) {
      setexpense((prev) =>
        prev.map((row) => {
          if (row.id === editing) {
            return { ...tdata, id: editing };
          }
          return row;
        })
      );

      setTdata({
        title: "",
        category: "",
        price: "",
      });
      setediting("");
      return;
    }

    setexpense((prev) => [...prev, { ...tdata, id: crypto.randomUUID() }]);
    setTdata({
      title: "",
      category: "",
      price: "",
      // email: "",
    });
  }
  const handleupdate = (e) => {
    setError({});
    const { name, value } = e.target;
    setTdata((prev) => ({
      ...prev,
      [name]: name === "price" ? value : value,
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
        // type="number"
        name="price"
        value={tdata.price}
        onChange={handleupdate}
        error={error.price}
      />
      {/* <Input
        label="Email"
        id="email"
        name="email"
        value={tdata.email}
        onChange={handleupdate}
        error={error.email}
      /> */}
      <button className="add-btn">{editing ? "Save" : "Add"}</button>
    </form>
  );
};
export default ExpenseForm;
