import React from 'react';
import CardList from '../cardlist/cardlist.component';
import SearchnFilter from '../search&filter/search&filter.component';

class Home extends React.Component {
    constructor(props) {
        super();

        this.props = props;
    }

    componentWillUnmount() {
        this.props.onUnmount()
    }

    render() {
        return ( 
            <div>
                <SearchnFilter onChange={this.props.onChange} onRegionChange={this.props.onRegionChange} themeSwitched={this.props.themeSwitched} changePage={this.props.changePage}/>
                <CardList countries={this.props.countries} themeSwitched={this.props.themeSwitched} itemPP={this.props.itemPP}/>
            </div>
         );
    }
}
 
export default Home;