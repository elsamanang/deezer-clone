import React, {Component} from "react";
import FlowItem from "../tools/flow-item";

export default class Flow extends Component {

    render() {
        return (
            <div className="row">
                <div className="grid">
                    <h2>Flow, la bande-son de vos émotions</h2>
                    <p>Un mix infini et personnalisé avec vos favoris et de belles découvertes</p>
                </div>
                <div className="grid grid-cols-7 m-2">
                    <FlowItem />
                    <FlowItem />
                    <FlowItem />
                    <FlowItem />
                    <FlowItem />
                    <FlowItem />
                    <FlowItem />
                </div>
            </div>
        )
    }
}