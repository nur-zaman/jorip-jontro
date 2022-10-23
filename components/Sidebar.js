function Sidebar() {
    return (
        <>
{/* <div className="drawer w"> */}
  {/* <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">

    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div>  */}
  <div className="drawer w-40">
  <div className="drawer-side border-opacity-50 border-r-2 border-slate-50  ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-2 overflow-y-auto w-auto bg-base-100 text-base-content ">
      {/* <!-- Sidebar content here --> */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
        </>
    )
}

export default Sidebar;