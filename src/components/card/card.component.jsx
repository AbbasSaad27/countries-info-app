import React from 'react';
import { Link } from 'react-router-dom';
import './card.component.styles.css';

const Card = (props) => {
    return ( 
        <div className={`card ${props.themeSwitched ? 'darkEl' :'whiteEl'}`}>
            <Link to={`/country/${props.country.name}`}>
                <div className="country--flag">
                    <img
                    alt={props.country.name} 
                    src={props.country.flag} />
                </div>
                <div className={`country--ovv ${props.themeSwitched ? 'darkTxt' :'whiteTxt'}`}>
                    <h3 className="country--ovv__name ">{props.country.name}</h3>
                    <p className="country--ovv__population "><span className="bold--600">Population: </span>{new Intl.NumberFormat(navigator.language).format(props.country.population)}</p>
                    <p className="country--ovv__region "><span className="bold--600">Region: </span>{props.country.region}</p>
                    <p className="country--ovv__capital "><span className="bold--600">Capital: </span>{props.country.capital ? props.country.capital : <span className='font--14'>No Capital</span>}</p>
                </div>
            </Link>
        </div>
    );
}
 
export default Card;