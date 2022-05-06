import React from "react";

export default function RecentPlayItem () {
    return (
        <div id="RecentPlayItem">
            <div className="grid h-56 w-56 shadow-md recent rounded-md overflow-hidden hover:opacity-80">
                <img className="h-56 w-56" src="assets/img/cover/c2.jpg" alt="play"/>
                <div className="absolute flex self-end p-2">
                    <img className="rounded-full shadow-md play-btn m-1.5" src="assets/img/flow/play.png" alt=""/>
                    <img className="rounded-full shadow-md like-btn m-1.5" src="assets/img/flow/heart-o.png" alt=""/>
                    <img className="rounded-full shadow-md burgur-btn m-1.5" src="assets/img/flow/burger.png" alt=""/>
                </div>
            </div>
            <div className="my-1 px-1 w-56">
                <h6>Avec Adele</h6>
                <p className="text-justify">titres</p>
            </div>
        </div>
    )
}