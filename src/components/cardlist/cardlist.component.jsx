import React from 'react';
import Card from '../card/card.component';
import './cardlist.component.styles.css';


const CardList = (props) => {
    return (
        <div className="cardList">
            {props.countries.slice(props.itemPP, props.itemPP+8).map((country, i, arr) => {
                if(!arr[i]) return '';
                return (
                    <Card  key={country.alpha3Code} country={country} themeSwitched={props.themeSwitched}/>
                )
            })}
        </div>
    );
}
 
export default CardList;