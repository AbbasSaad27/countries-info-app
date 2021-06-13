import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CountryDetails from './components/countrydetails/countrydetails.component';
import Home from './components/home/home.component';
import Spinner from './components/spinner/spinner.component';
import Topbar from './components/topbar/topbar.component.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      search: '',
      load: true,
      themeSwitched: false,
      itemPP: 0
    }
    this.length = 0
    this._ismounted = false
  }

  fetchingData = () => {
    try {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => {
        if(!res.ok) {
          throw new Error('failed to fetch');
        }
        return res.json()
      })
      .then(data => this._ismounted && this.setState({countries: data, load: false}));
    } catch(e) {
      console.log(e.message)
    }
  }

  componentDidMount() {
    this._ismounted = true;
    this.fetchingData();
  }

  componentWillUnmount() {
    this._ismounted = false;
  }
  
  onUnmount = () => {
    this.setState({search: '', load: true})
    this.fetchingData();
  }

  onRegionChange = (e) => {
    const getRegionCountry = async () => {
      try {
        let fetchedData;
        if(e.target.value==='all') fetchedData = await fetch('https://restcountries.eu/rest/v2/all');
        else fetchedData = await fetch(`https://restcountries.eu/rest/v2/region/${e.target.value}`);
        if(!fetchedData.ok) {
          throw new Error('failed to fetch')
        }
        const countryData = await fetchedData.json();
        this.setState({countries: countryData, load: false, itemPP: 0});
      } catch(e) {
        console.log(e.message)
      }
    }
    getRegionCountry();
  }

  getLength = (arr) => {
    this.length = arr.length;
  }

  changePage = (e) => {
    if(e.target.classList.contains('angle--left') && this.state.itemPP > 0) {
      this.setState(prevState => {
        return { itemPP: prevState.itemPP-8 };
      });
    } else if (e.target.classList.contains('angle--right')) {
      if(this.state.itemPP <= this.state.countries.length-8 && this.length-8 >= this.state.itemPP) {
        this.setState(prevState => {
          return { itemPP: prevState.itemPP+8 };
        });
      }
    }
  }

  changeTheme = () => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('whiteBG');
    body.classList.toggle('darkBG')
    this.setState(prevState => {
      return {themeSwitched: !prevState.themeSwitched};
    });
  }

  onChange = (e) => {
    this.setState({search: e.target.value, itemPP: 0})
  }

  render() {
    if(this.state.load) return <Spinner />;
    const {countries, search} = this.state;
    const filteredCountries = countries.filter((country) => country.name.toLowerCase().startsWith(search.toLowerCase()));
    this.getLength(filteredCountries);
    return (
      <Router>
        <div className="App">
          <Topbar changeTheme={this.changeTheme} themeSwitched={this.state.themeSwitched}/>
            <main className="content">
              <Switch>
                <Route exact path="">
                  <Home onChange={this.onChange} onRegionChange={this.onRegionChange} onUnmount={this.onUnmount} countries={filteredCountries} themeSwitched={this.state.themeSwitched} itemPP={this.state.itemPP} changePage={this.changePage}/>
                </Route>
                <Route path="/country/:name" render={(props) => <CountryDetails {...props} key={props.match.params.name} themeSwitched={this.state.themeSwitched}/>}>
                </Route>
              </Switch>
            </main>
        </div>
      </Router>
    )
  }
}

export default App;
