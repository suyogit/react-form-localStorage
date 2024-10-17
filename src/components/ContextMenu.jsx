const ContextMenu = ({ menuposition , setmenuposition, setexpense, expenses, rowid}) => {
  if (!menuposition?.left) return;
  console.log(menuposition)
  return (
    <div className="context-menu" style={{...menuposition}}>
      <div
      onClick={(e)=>{
        console.log('editing')
        
      }}>Edit</div>
      <div
      onClick={(e)=>{
        console.log("deleting")
        setmenuposition({})
        setexpense(
          expenses.filter((el)=>el.id !=rowid)
        )
      }}>Delete</div>
    </div>
  );
};
export default ContextMenu;
