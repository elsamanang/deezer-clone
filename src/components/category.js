import React, {Component} from "react";

export default class Category extends Component {

    render() {
        return (
            <div className="row m-2">
                <div className="grid">
                    <h4 className="flex">
                        <span>Category</span>
                        <span className="place-self-end">
                            <img src="assets/img/flow/right.png" className="w-4"/>
                        </span>
                    </h4>
                </div>
                <div className="grid grid-cols-4 gap-8 my-2">
                </div>
            </div>
        )
    }
}