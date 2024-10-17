const ContextMenu = ({
  menuposition,
  setmenuposition,
  setexpense,
  expenses,
  rowid,
  setTdata,
  setediting
}) => {
  if (!menuposition?.left) return;
  // console.log(menuposition);
  const temp=expenses.filter((el) => el.id === rowid)
  // console.log(temp)
  return (
    <div className="context-menu" style={{ ...menuposition }}>
      <div
        onClick={(e) => {
          // console.log("editing");
          setTdata({
            title: temp[0].title,
            category:temp[0].category ,
            price: temp[0].price,
            // email: temp.email,
          });
          setediting(rowid)
          setmenuposition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={(e) => {
          setmenuposition({});
          setexpense(expenses.filter((el) => el.id != rowid));
        }}
      >
        Delete
      </div>
    </div>
  );
};
export default ContextMenu;
