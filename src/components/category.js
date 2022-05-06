import React, {Component} from "react";
import CategoryItem from "../tools/category-item";

export default class Category extends Component {

    render() {
        return (
            <div className="row m-2">
                <div className="grid">
                    <h4 className="link_title">
                        Category
                        <span className="i mx-1"><i class="fa-solid fa-angle-right"></i></span>
                    </h4>
                </div>
                <div className="grid grid-cols-4 gap-8 my-2">
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                </div>
            </div>
        )
    }
}