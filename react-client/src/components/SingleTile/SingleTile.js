import React from 'react';
import {Col} from 'react-bootstrap';
import {
    NEWS_TILE_ID, 
    FINANCE_TILE_ID, 
    WEATHER_TILE_ID, 
    SPORTS_TILE_ID, 
    SUBSCRIBE_TILE_ID
} from '../../consts';
import NewsContent from '../../views/NewsContent';
import WeatherContent from '../../components/WeatherContent';
import FinancialContent from '../../views/FinanceContent';
import SportsContent from '../../views/SportsContent';
import SubscribeContent from '../../views/SubscribeContent';
import SocketIoClient from 'socket.io-client';
import {getMockDataByTileId} from '../../utils';
import './SingleTile.css';



class SingleTile extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: null
        }
        this.getContentById = this.getContentById.bind(this);
        this.getUpdates = this.getUpdates.bind(this);
    }
    componentDidMount () {
        this.getUpdates();
    }
    getUpdates () {
        //execute the call for websocket connection
        if (this.props.id !== SUBSCRIBE_TILE_ID) {
            if (window.location.host === "localhost:3000") {
                //-- Use the following mock data for development
                console.error('using mock data for development');
                const MockData = getMockDataByTileId(this.props.id);
                this.setState({...MockData});
            } else {
                const END_POINT = window.location.href + this.props.socketChannel;
                const Socket = SocketIoClient(END_POINT);
                Socket.on('data', data => {
                    this.setState({...data});
                });
            }
        }
    }
    getContentById (tileId) {
        switch (tileId) {
            case NEWS_TILE_ID:
                return (
                    <NewsContent data={this.state.data}/>
                );
            case WEATHER_TILE_ID:
                const RelevantData = this.state.data ? this.state.data[0] : null
                return (
                    <WeatherContent data={RelevantData}/>
                );
            case FINANCE_TILE_ID:
                return (
                    <FinancialContent data={this.state.data}/>
                );
            case SPORTS_TILE_ID:
                return (
                    <SportsContent data={this.state.data}/>
                );
            case SUBSCRIBE_TILE_ID:
                return <SubscribeContent/>
            default:
                return null;
        }
    }
    render () {
        const CurrentTile = {...this.props, ...this.state};
        delete CurrentTile['showModalView'];
        return (
            <Col 
                onClick={e => this.props.showModalView(CurrentTile)} 
                className='SingleTile'
            >
                <div>{this.props.title}</div>
                <div className='content'>
                    {this.getContentById(this.props.id)}
                </div>
            </Col>
        );
    }
}

SingleTile.defaultProps = {
    id: '',
    socketChannel: '',
    title: '',
    showModalView: e => console.info('default showModalView fired')
}

export default SingleTile;