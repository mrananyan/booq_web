import React from "react";
import './Guest.css';
import {Cell, Footer, Group, Search} from "@vkontakte/vkui";

const Guest = () => {
    const doSearch = (event) => {
      console.info(event)
    }

    return (
        <div className={`header`}>
            <div className="wrap">
                <h3>Foxly</h3>
                <div className="search_wrap">
                    <Search onChange={doSearch} after={null}/>
                </div>
            </div>
        </div>
    );
}

export default Guest;