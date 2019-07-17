import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import HOT_ICON from '../../assets/sun.png';
import SUN_OK from '../../assets/sun_ok.png';
import WINTER from '../../assets/winter.png';

const TEMP_OK_LOWER_LIMIT = 15;
const TEMP_OK_UPPER_LIMIT = 30;

const WeatherContent = props => {
    console.info('weather props: ', props);
    const GetUpdateHour = () => {
        const TodayDate = new Date();
        const HOUR = TodayDate.getHours().toString().length === 2 ? TodayDate.getHours() : '0' + TodayDate.getHours(); 
        const Minutes = TodayDate.getMinutes().toString().length === 2 ? TodayDate.getMinutes() : '0' + TodayDate.getMinutes();
        return HOUR + ':' + Minutes;
    }
    const TEMPERATURE = props.data ? props.data.tmp : null;
    const LOCATION = props.data ? props.data.location : null;
    const GetWeatherImgSrc = () => {
        if (parseInt(TEMPERATURE) < TEMP_OK_LOWER_LIMIT) return WINTER;
        else if (parseInt(TEMPERATURE) > TEMP_OK_UPPER_LIMIT) return HOT_ICON;
        else return SUN_OK;
    }
    return (
        <Container id='weather-content'>
            <Row>
                <Col>
                    <div>{TEMPERATURE} C</div>
                    <div>{LOCATION}</div>
                </Col>
                <Col>
                    <div id='img-frame' className='d-flex justify-content-center'>
                        <img src={GetWeatherImgSrc()} alt='img'/>
                    </div>
                </Col>
            </Row>
            <Row>
                Last Update: {GetUpdateHour()}
            </Row>
        </Container>
    );
}

export default WeatherContent;