import React from 'react';
import './filter.component.styles.css';

const Filter = (props) => {
    return ( 
        <select
            defaultValue="fbr" 
            className={`filter ${props.themeSwitched ? 'darkEl darkTxt' :'whiteEl whiteTxt'}`}
            onChange={props.onRegionChange}
            >
                <option
                value="fbr" 
                disabled="" 
                hidden
                className="opt"
                >
                    Filter by Region
                </option>
                <option 
                className="opt" value="all">All</option>
                <option
                className="opt" value="Africa">Africa</option>
                <option
                className="opt" value="Americas">Americas</option>
                <option
                className="opt" value="Asia">Asia</option>
                <option
                className="opt" value="Europe">Europe</option>
                <option
                className="opt" value="Oceania">Oceania</option>
            </select>
    );
}
 
export default Filter;