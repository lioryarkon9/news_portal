import React from 'react';
import {Col} from 'react-bootstrap';
import {NEWS_TILE_ID} from '../../consts';
import NewsContent from '../../views/NewsContent';
import SocketIoClient from 'socket.io-client';



class SingleTile extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: null
        }
        this.getContentById = this.getContentById.bind(this);
        this.getUpdateByMilSeconds = this.getUpdateByMilSeconds.bind(this);
    }
    componentDidMount () {
        this.getUpdateByMilSeconds(this.props.milSecondsForUpdate)
    }
    getUpdateByMilSeconds (milSecondsForUpdate) {
        //execute the call for websocket
        const END_POINT = this.props.socketChannel;
        const Socket = SocketIoClient(END_POINT);
        Socket.from('FromAPI', data => this.setState({data: data}));
    }
    getContentById (tileId) {
        switch (tileId) {
            case NEWS_TILE_ID:
                return (
                    <NewsContent data={this.state.data}/>
                );
            default:
                return null;
        }
    }
    render () {
        return (
            <Col onClick={this.props.showModalView} className='SingleTile'>
                <div>{this.props.title}</div>
                <div className='content'>{this.getContentById(this.props.id)}</div>
            </Col>
        );
    }
}

SingleTile.defaultProps = {
    id: '',
    socketChannel: '',
    title: '',
    milSecondsForUpdate: '',
    showModalView: e => console.info('default showModalView fired')
}

export default SingleTile;