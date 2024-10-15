const ExpenseForm = ({ setexpense }) => {
  function handlesubmit(e) {
    e.preventDefault();
    // console.log(e.target)
    const data = getFormData(e.target);
    setexpense((prev) => [...prev, { ...data, id: crypto.randomUUID() }]);
    e.target.reset();
  }
  const getFormData = (form) => {
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    return data;
  };

  return (
    <form className="expense-htmlForm" onSubmit={handlesubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category">
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
        <input id="amount" name="price" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
