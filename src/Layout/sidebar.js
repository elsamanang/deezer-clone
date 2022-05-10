import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

    return(
        <div className="container">
            <Link to={'/'}><img src="assets/img/deezer.png"/></Link>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link">
                        <i className="fa-solid fa-music"></i>
                        <span className="mx-3">Musique</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={'/poadcast'}>
                        <i className="fa-solid fa-microphone-lines"></i>
                        <span className="mx-3">Podcasts</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa-brands fa-microsoft"></i>
                        <span className="mx-3">Parcourir</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">
                        <i className="fa-regular fa-heart"></i>
                        <span className="mx-3">Favories</span>
                    </a>
                </li>
            </ul>
            <div id="nav-2">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Coups de coeur
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Playlists
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Albums
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Artistes
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Podcasts
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}