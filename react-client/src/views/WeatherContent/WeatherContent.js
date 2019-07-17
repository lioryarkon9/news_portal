import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './WeatherContent.css';


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
    return (
        <Container id='weather-content'>
            <Row>
                <Col>
                    <div>{TEMPERATURE} C</div>
                    <div>{LOCATION}</div>
                </Col>
                <Col>todo: add icon by temperature</Col>
            </Row>
            <Row>
                Last Update: {GetUpdateHour()}
            </Row>
        </Container>
    );
}

export default WeatherContent;