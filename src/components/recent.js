import React, {Component} from "react";
import RecentPlayItem from "../tools/recent-play";

export default class Recent extends Component {

    render() {
        return (
            <div className="row m-2">
                <div className="grid">
                    <h4>Écouté récemment</h4>
                </div>
                <div className="grid grid-cols-4 gap-8 my-2">
                    <RecentPlayItem />
                    <RecentPlayItem />
                    <RecentPlayItem />
                    <RecentPlayItem />
                </div>
            </div>
        )
    }
}