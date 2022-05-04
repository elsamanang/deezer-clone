import React from "react";

export default function RecentItem () {
    return (
        <div id="RecentItem">
            <div className="grid h-56 w-56 shadow-md recent rounded-md overflow-hidden hover:opacity-75" >
                <img className="rounded-full play-btn place-self-center" src="assets/img/flow/play.png" alt="play"/>
                <div className="grid grid-cols-2">
                    <div className="grid col-span-2 h-28 bg-gradient-to-r from-violet-600/75 to-pink-500/100 p-2">
                        <h3 className="text-white">Lundi découverte </h3>
                    </div>
                    <div className="grid h-28">
                        <img src="assets/img/cover/c1.jpg"/>
                    </div>
                    <div className="grid h-28 bg-sky-500/75">
                        <img src="assets/img/cover/c2.jpg"/>
                    </div>
                </div>
            </div>
            <p className="text-justify my-1">titre</p>
        </div>
    )
}