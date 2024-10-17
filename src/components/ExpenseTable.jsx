import { useState } from "react";
import { useFilter } from "./hooks/useFilter";
import ContextMenu from "./ContextMenu";
const ExpenseTable = ({ expenses, setexpense, setTdata, setediting }) => {
  const [rowid, setrowid] = useState("");
  const [menuposition, setmenuposition] = useState({});
  const [filteredData, setQuery] = useFilter(expenses, (data) => data.category); //now we can filter on the basis of field that we desire
  const [sorted, setsorted] = useState(() => () => {});

  function handleChange(e) {
    setQuery(e.target.value.toLowerCase());
  }
  const totalAmount = filteredData.reduce(
    (acc, { price }) => acc + parseFloat(price),
    0
  );
  return (
    <>
      <ContextMenu
        menuposition={menuposition}
        setmenuposition={setmenuposition}
        setexpense={setexpense}
        expenses={expenses}
        rowid={rowid}
        setTdata={setTdata}
        setediting={setediting}
      />
      <table
        className="expense-table"
        onClick={() => {
          if (menuposition.left) setmenuposition({});
        }}
      >
        <thead>
          <tr>
            <th className="amount-column">
              <div>
                <span>Title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() => {
                    setsorted(() => (a, b) => a.title.localeCompare(b.title));
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() => {
                    setsorted(() => (a, b) => b.title.localeCompare(a.title));
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
            <th>
              <select onChange={handleChange}>
                <option value="">All</option>
                <option value="Grocery">Grocery</option>
                <option value="Clothes">Clothes</option>
                <option value="Bills">Bills</option>
                <option value="Education">Education</option>
                <option value="Medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() => {
                    // setexpense((prev) => [
                    //   ...prev.sort((a, b) => a.price - b.price),
                    // ]);
                    setsorted(() => (a, b) => a.price - b.price);
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() => {
                    // setexpense((prev) => [
                    //   ...prev.sort((a, b) => b.price - a.price),
                    // ]);
                    setsorted(() => (a, b) => b.price - a.price);
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.sort(sorted).map(({ id, title, category, price }) => (
            <tr
              key={id}
              onContextMenu={(e) => {
                e.preventDefault();
                setmenuposition({ left: e.clientX + 4, top: e.clientY + 1 });
                setrowid(id);
              }}
            >
              <td>{title}</td>
              <td>{category}</td>
              <td>₹{price}</td>
            </tr>
          ))}

          <tr>
            <th>Total</th>
            <th
              className="sort"
              onClick={() => {
                setsorted(() => () => {});
              }}
            >
              Reset sort
            </th>
            <th>{totalAmount}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
