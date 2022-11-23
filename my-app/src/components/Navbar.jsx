import React from 'react'
// import { Link } from 'react-router';
import { AiFillFire } from "react-icons/ai";
import { IconContext } from "react-icons";

function Navbar() {
    return (
        <div className="navbar sticky top-0 z-50 bg-base-200 pl-[5%] pr-[5%] mb-5">
            {/* <Link to="/react"> */}
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Yoi broooo
                    <IconContext.Provider value={{ color: "orange", className: "global-class-name" }}>
                        <AiFillFire /><AiFillFire /><AiFillFire />
                    </IconContext.Provider>
                </a>

            </div>
            {/* </Link> */}
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Favorites</a></li>
                    <li><a>Profile </a></li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar