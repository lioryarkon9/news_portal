import React from 'react';
import {Container} from 'react-bootstrap';
import './ModalView.css';
import NewsModal from './NewsModal';
import WeatherModal from './WeatherModal';
import {NEWS_TILE_ID, WEATHER_TILE_ID} from '../../consts';
import CLOSE_ICON from '../../assets/close.png';


const ModalView = props => {
    const RenderContent = () => {
        switch (props.data.id) {
            case NEWS_TILE_ID:
                const FullArticle = props.data.data
                return (
                    <NewsModal fullArticle={FullArticle}/>
                );
            case WEATHER_TILE_ID:
                const FullForecast = props.data.data
                return (
                    <WeatherModal fullForecast={FullForecast}/>
                );
            default:
                return null;
        }
    }
    return (
        <Container id='ModalView'>
            <div className='text-right' onClick={props.hideModalView}>
                <img id='close-modal-img' src={CLOSE_ICON} alt='close' style={{cursor: 'pointer'}}/>
            </div>
            {RenderContent()}
        </Container>
    );
}

export default ModalView;