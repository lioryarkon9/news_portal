import React from 'react';
import TilesView from './views/TilesView';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isDisplayModal: false
        }
    }
    render () {
        return (
            <TilesView/>
        );
    }
}

export default App;