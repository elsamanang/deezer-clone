import React, {Component} from "react";
import News from "../components/news";
import CategoryItem from "../tools/category-item";

export default class Poadcast extends Component {

    render() {
        return(
            <div className='container'>
                <News titre={'Podcasts les plus écoutés'} />
                <div className="row m-2">
                    <div className="grid">
                        <h4 className="link_title">
                        Toutes les catégories
                            <span className="i mx-1"><i class="fa-solid fa-angle-right"></i></span>
                        </h4>
                    </div>
                    <div className="grid grid-cols-4 gap-8 my-2">
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <button type="button" className="justify-self-start bg-white border-1 border-zinc-300 rounded-full p-2">VOIR TOUT</button>
                    </div>
                </div>
                <News titre={'Coups de cœur de nos éditos'} />
                <div className="row m-2">
                    <div className="grid">
                        <h4>Podcasts par durée</h4>
                    </div>
                    <div className="grid grid-cols-4 gap-8 my-2">
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                    </div>
                    
                </div>
                <div className="row m-2">
                    <div className="grid">
                        <h4 className="link_title">
                        Podcasts par producteur
                            <span className="i mx-1"><i class="fa-solid fa-angle-right"></i></span>
                        </h4>
                    </div>
                    <div className="grid grid-cols-4 gap-8 my-2">
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <button type="button" className="justify-self-start bg-white border-1 border-zinc-300 rounded-full p-2">VOIR TOUT</button>
                    </div>
                </div>
            </div>
        )
    }
}