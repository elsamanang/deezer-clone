import React, {Component} from "react";
import RecentItem from "../tools/recent-item";

export default class PourVous extends Component {

    render() {
        return (
            <div className="row m-2">
                <div className="grid">
                    <h4>Pour vous</h4>
                </div>
                <div className="grid grid-cols-4 gap-8 my-2">
                    <RecentItem />
                    <RecentItem />
                    <RecentItem />
                    <RecentItem />
                </div>
            </div>
        )
    }
}