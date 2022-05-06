import React from "react";

export default function CategoryItem () {
    return (
        <div id="CategoryItem">
            <div className="grid w-56 h-32 shadow-md recent rounded-md overflow-hidden hover:opacity-80">
                <img className="w-56 h-32" src="assets/img/category/cat1.jpg" alt="play"/>
                <div className="absolute place-self-center">
                    <h4 className="text-white">Running & sport</h4>
                </div>
            </div>
        </div>
    )
}