import React from "react";

export default function Sidebar() {

    return(
        <div className="container">
            <img src="assets/img/deezer.png"/>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa-solid fa-music"></i>
                        <span className="mx-3">Musique</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa-solid fa-microphone-lines"></i>
                        <span className="mx-3">Podcasts</span>
                    </a>
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