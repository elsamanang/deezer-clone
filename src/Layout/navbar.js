import React from "react";

export default function Navbar() {

    return(
        <nav className="navbar">
            <div className="container">
                <div className="row">
                    <div className="col-10 search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type={'text'} className="mx-2" placeholder="Search" />
                    </div>
                    <div className="col-2 justify-content-right">
                        <span className="mx-1"><i className="fa-solid fa-bell"></i></span>
                        <span className="mx-1 user"><i className="fa-solid fa-user"></i></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}