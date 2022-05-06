import React from "react";

export default function ArtistItem () {
    return (
        <div id="ArtistItem">
            <div className="grid h-56 w-56 shadow-md recent rounded-full overflow-hidden hover:opacity-80">
                <img className="h-56 w-56" src="assets/img/artist/a1.jpg" alt=""/>
                <div className="absolute place-self-end flex justify-self-center p-2">
                    <img className="rounded-full shadow-md play-btn m-1.5" src="assets/img/flow/play.png" alt=""/>
                    <img className="rounded-full shadow-md like-btn m-1.5" src="assets/img/flow/heart-o.png" alt=""/>
                </div>
            </div>
            <div className="my-1 px-1 w-56">
                <h6 className="text-center">Ozuna</h6>
                <p className="text-center">4 678 fans</p>
            </div>
        </div>
    )
}