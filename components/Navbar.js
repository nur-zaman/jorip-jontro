import Avatar, { genConfig } from 'react-nice-avatar'
import { useEffect, useState } from 'react'
import Link from 'next/link';

function Navbar() {
     
    const config = {
        "sex": "man",
        "faceColor": "#F9C9B6",
        "earSize": "small",
        "eyeStyle": "smile",
        "noseStyle": "long",
        "mouthStyle": "smile",
        "shirtStyle": "short",
        "glassesStyle": "none",
        "hairColor": "#000",
        "hairStyle": "thick",
        "hatStyle": "none",
        "hatColor": "#F48150",
        "eyeBrowStyle": "up",
        "shirtColor": "#9287FF",
        "bgColor": "#F4D150"
    }
   
    // useEffect(() => setConfig(genConfig()), [])
    return (
        <>
        <div class="navbar bg-base-100">
    <div class="flex-none">
      <label for="my-drawer" class="btn btn-ghost drawer-button"><i class="material-icons mr-2">menu</i></label>

    </div>
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Jorip Jontro</a>
    </div>
    <div class="flex-none gap-2">
      {/* <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered" />
      </div> */}
            <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
          <Avatar className="w-10 h-10" {...config} />
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li> <Link href="/">Logout</Link> </li>
        </ul>
      </div>
    </div>
  </div>
        </>
    )
}

export default Navbar;