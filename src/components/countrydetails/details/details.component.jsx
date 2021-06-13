import React from 'react';
import Btn from '../btn/btn.component';
import './details.component.styles.css';

const Details = (props) => {
    return ( 
        <div className="country--details">
            <div className="country--flag-2">
                <img src={props.country.flag} alt={props.country.name} />
            </div>
            <div className="country--info">
                <h3 className="country--name">{ props.country.name }</h3>
                <div className="country--info__all">
                    <div className="country--info__area">
                        <p className="info--name">Native Name: <span className="info">{props.country.nativeName}</span></p>
                        <p className="info--name">Population: <span className="info">{new Intl.NumberFormat(navigator.language).format(props.country.population)}</span></p>
                        <p className="info--name">Region: <span className="info">{props.country.region}</span></p>
                        <p className="info--name">Sub Region: <span className="info">{props.country.subregion}</span></p>
                        <p className="info--name">Capital: <span className="info">{props.country.capital ? props.country.capital : "No Capital"}</span></p>
                    </div>
                    <div className="country--info__net">
                        <p className="info--name">Top Level Domain: <span className="info">{props.country.topLevelDomain}</span></p>
                        <p className="info--name">Currencies: {props.country.currencies.map((currency, i, arr) => (<span key={currency.code} className="info">{currency.name}{arr[i+1] ? ', ' : ""}</span>))}</p>
                        <p className="info--name">Languages: {props.country.languages.map((language, i, arr) => (<span key={language.iso639_1} className="info">{language.name}{arr[i+1] ? ', ' : ""}</span>))}</p>
                    </div>
                </div>
                <div className="border--countries">
                    <p className="info--name inline">Border Countries: </p>{props.country.borders[0] ? props.country.borders.map((borderCountry => <Btn key={borderCountry} code={borderCountry} themeSwitched={props.themeSwitched} />)) : <span className='font--14'>None</span>}
                </div>
            </div>
        </div>
    );
}
 
export default Details;