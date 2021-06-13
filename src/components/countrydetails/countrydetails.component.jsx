import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../spinner/spinner.component';
import './countrydetails.component.styles.css';
import Details from './details/details.component';


class CountryDetails extends React.Component  {
    constructor(props) {
        super();
        this.state = {
            requestedCountry: {}
        }
        this.props = props;
        this._mounted = false;
    }

    componentDidMount() {
        this._mounted = true;
        const {name} = this.props.match.params;
        try {
            fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => {
                if(!res.ok) {
                  throw new Error('failed to fetch');
                }
                return res.json()
            })
            .then(data => this._mounted && this.setState({requestedCountry: data[0]}));
        } catch(e) {
            console.log(e.message)
        }
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    render() {
        if(!this.state.requestedCountry.name) return <Spinner />;
        return (
            <div className={`details ${this.props.themeSwitched ? 'darkTxt' :'whiteTxt'}`}>
                <div className="btn--container">
                    <Link to=""><button className={`btn btn--back ${this.props.themeSwitched ? 'darkEl darkTxt' : 'whiteEl whiteTxt'}`}>Back</button></Link>
                </div>
                <Details country={this.state.requestedCountry} themeSwitched={this.props.themeSwitched}/>
            </div>
        )
    };
}
 
export default CountryDetails;