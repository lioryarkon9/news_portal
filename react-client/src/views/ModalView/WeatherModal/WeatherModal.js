import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import WeatherContent from '../../../components/WeatherContent';


const WeatherModal = props => {
    return (
        <Container>
            <Row>
                {props.fullForecast.map((item, i) => (
                    <Col key={'_weather-' + i}>
                        <WeatherContent data={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

WeatherModal.defaultProps = {
    fullForecast: []
}

export default WeatherModal;