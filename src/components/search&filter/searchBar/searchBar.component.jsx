import React from 'react';
import './searchBar.component.styles.css';

const SearchBar = (props) => {
    return ( 
        <input
            className={`searchBar ${props.themeSwitched ? 'darkEl darkTxt' : 'whiteEl whiteTxt'}`}
            type="search"
            placeholder="Search for a country"
            onChange={props.onChange}
        />
    );
}
 
export default SearchBar;