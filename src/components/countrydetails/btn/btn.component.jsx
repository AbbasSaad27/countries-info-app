import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../spinner/spinner.component';

class Btn extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
        }
        this.props = props
        this._mounted = false;
    }
    
    componentDidMount() {
        this._mounted = true;
        const code = this.props.code
        try {
            fetch(`https://restcountries.eu/rest/v2/alpha/${code.toLowerCase()}`)
            .then(res => {
                if(!res.ok) {
                    throw new Error('failed to fetch')
                }
                return res.json()
            })
            .then(data => this._mounted && this.setState({name: data.name}))
        }catch(e) {
            console.log(e.message)
        }
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    render() {
        if(!this.state.name) return <Spinner />
        return ( 
            <Link to={`/country/${this.state.name}`}><button className={`btn btn--NC ${this.props.themeSwitched ? 'darkEl darkTxt' :'whiteEl whiteTxt'}`}>{this.state.name}</button></Link>
        );
    }
}
 
export default Btn;