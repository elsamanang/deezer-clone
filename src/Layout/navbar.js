import React from "react";

export default function Navbar() {

    return(
        <nav className="navbar">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type={'text'} className="mx-2" placeholder="Search" />
                    </div>
                    <div className="col-md-2 nav-left">
                        <span><i className="fa-solid fa-bell"></i></span>
                        <span className="user"><i className="fa-solid fa-user"></i></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}