import React from 'react';
import Filter from './filter/filter.component';
import PageChanger from './pageChanger/pageChanger.component';
import './search&filter.component.styles.css';
import SearchBar from './searchBar/searchBar.component';


class SearchnFilter extends React.Component {
    constructor(props) {
        super()

        this.props = props;
    }

    render() {
        return ( 
            <div className={`searchnfilter ${this.props.themeSwitched ? 'darkTxt' : 'whiteTxt'}`}>
                <SearchBar onChange={this.props.onChange} themeSwitched={this.props.themeSwitched}/>
                <PageChanger themeSwitched={this.props.themeSwitched} changePage={this.props.changePage}/>         
                <Filter onRegionChange={this.props.onRegionChange} themeSwitched={this.props.themeSwitched}/>
            </div>
        );
    }
}
 
export default SearchnFilter;