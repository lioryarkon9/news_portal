import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import HOT_ICON from '../../assets/sun.png';
import SUN_OK from '../../assets/sun_ok.png';
import WINTER from '../../assets/winter.png';
import './WeatherContent.css';
import {getCurrentHour} from '../../utils';

const TEMP_OK_LOWER_LIMIT = 15;
const TEMP_OK_UPPER_LIMIT = 30;

const WeatherContent = props => {
    console.info('weather props: ', props);
    const TEMPERATURE = props.data ? props.data.tmp : null;
    const LOCATION = props.data ? props.data.location : null;
    const GetWeatherImgSrc = () => {
        if (parseInt(TEMPERATURE) < TEMP_OK_LOWER_LIMIT) return WINTER;
        else if (parseInt(TEMPERATURE) > TEMP_OK_UPPER_LIMIT) return HOT_ICON;
        else return SUN_OK;
    }
    return (
        <Container className='weather-content'>
            <Row>
                <Col>
                    <div>{TEMPERATURE} C</div>
                    <div>{LOCATION}</div>
                </Col>
                <Col>
                    <div className='d-flex justify-content-center img-frame'>
                        <img src={GetWeatherImgSrc()} alt='img'/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    Last Update: {getCurrentHour()}
                </Col>
            </Row>
        </Container>
    );
}

export default WeatherContent;