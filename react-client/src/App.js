import React from 'react';
import TilesView from './views/TilesView';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NEWS_TILE_ID, WEATHER_TILE_ID} from './consts';
import ModalView from './views/ModalView';
import AppWrapper from './views/AppWrapper';


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            CurrentTile: null
        }
        this.showModalView = this.showModalView.bind(this);
        this.hideModalView = this.hideModalView.bind(this);
    }
    showModalView (tileObj) {
        if (tileObj.id === NEWS_TILE_ID || tileObj.id === WEATHER_TILE_ID) {
            this.setState({CurrentTile: tileObj});
        }
    }
    hideModalView () {
        this.setState({CurrentTile: null});
    }
    render () {
        return (
            <AppWrapper>
                {this.state.CurrentTile ?
                    <ModalView
                        data={this.state.CurrentTile}
                        hideModalView={this.hideModalView}
                    />
                : null}
                <TilesView
                    showModalView={this.showModalView}
                />
            </AppWrapper>
        );
    }
}

export default App;