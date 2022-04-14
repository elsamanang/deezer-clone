import React from "react";

export default function Footer() {
    return (
        <div className="row footer">
            <div className="col-2 play-block">
                <i className="fa-solid fa-backward-step icon"></i>
                <i className="fa-solid fa-play icon"></i>
                <i className="fa-solid fa-forward-step icon"></i>
            </div>
            <div className="col-6">
                <div className="row">

                </div>
                <div className="row">
                    <audio
                        controls autoplay muted
                        src="assets/audio/test.mp3">
                    </audio>
                </div>
            </div>
            <div className="col-4">
            One of three columns
            </div>
        </div>
    )
}