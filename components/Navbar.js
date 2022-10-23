function Navbar() {
    return (
        <>
<div className="navbar bg-base-100 shadow-stone-50 shadow ">
  <div className="navbar-start">
    {/* <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Create form</a></li>
        <li><a>Setting</a></li>
      </ul>
    </div> */}
    <a className="btn btn-ghost normal-case text-xl">Jorip Jontro</a>
  </div>

  <div className="navbar-center">

  {/* This should be dynamic */}
  <div className="text-xl">Dashboard</div> 
  </div>
  <div className="navbar-end">

    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item hidden"></span>
      </div>
    </button>
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" 
        d="M2.44044 10.2841L5.74755 4.28409C6.35499 3.18202 7.49767 2.5 8.73669 2.5H15.2633C16.5023 2.5 17.645 3.18202 18.2525 4.28409L21.5596 10.2841C22.1468 11.3495 22.1468 12.6505 21.5596 13.7159L18.2525 19.7159C17.645 20.818 16.5023 21.5 15.2633 21.5H8.73669C7.49767 21.5 6.35499 20.818 5.74755 19.7159L2.44044 13.7159C1.85319 12.6505 1.85319 11.3495 2.44044 10.2841ZM3.72151 11.0195L7.02861 5.01948C7.37572 4.38972 8.02868 4 8.73669 4H15.2633C15.9713 4 16.6243 4.38972 16.9714 5.01948L20.2785 11.0195C20.6141 11.6283 20.6141 12.3717 20.2785 12.9805L16.9714 18.9805C16.6243 19.6103 15.9713 20 15.2633 20H8.73669C8.02868 20 7.37572 19.6103 7.02861 18.9805L3.72151 12.9805C3.38593 12.3717 3.38593 11.6283 3.72151 11.0195Z" />
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" 
        d="M12 9.75C10.7824 9.75 9.79526 10.7574 9.79526 12C9.79526 13.2426 10.7824 14.25 12 14.25C13.2176 14.25 14.2047 13.2426 14.2047 12C14.2047 10.7574 13.2176 9.75 12 9.75ZM8.32544 12C8.32544 9.92893 9.9706 8.25 12 8.25C14.0294 8.25 15.6746 9.92893 15.6746 12C15.6746 14.0711 14.0294 15.75 12 15.75C9.9706 15.75 8.32544 14.0711 8.32544 12Z" />
        </svg>
    </button>

  </div>
</div>
        </>
    )
}

export default Navbar;