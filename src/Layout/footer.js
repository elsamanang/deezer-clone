import React from "react";

export default function Footer() {
    return (
        <div className="row footer">
            <div className="col-2">
            </div>
            <div className="col-6">
                <audio
                    controls autoplay muted
                    src="assets/audio/test.mp35">
                </audio>
            </div>
            <div className="col-4">
            One of three columns
            </div>
        </div>
    )
}