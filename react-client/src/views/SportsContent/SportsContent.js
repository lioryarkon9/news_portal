import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {getCurrentHour} from '../../utils';


const SportsContent = props => {
    const TEAM_A_NAME = props.data ? props.data.Team1.label : null;
    const TEAM_A_SCORE = props.data ? props.data.Team1.points : null;
    const TEAM_B_NAME = props.data ? props.data.Team2.label : null;
    const TEAM_B_SCORE = props.data ? props.data.Team2.points : null;
    return (
        <Container id='sports-content'>
            <Row>
                <Col xs={10} sm={4}>
                    {TEAM_A_NAME}: 
                </Col>
                <Col xs={2} sm={2}>
                    {TEAM_A_SCORE}
                </Col>
                <Col xs={10} sm={4}>
                    {TEAM_B_NAME}:
                </Col>
                <Col xs={2} sm={2}>
                    {TEAM_B_SCORE}
                </Col>
            </Row>
            <Row>
                Last Update: {getCurrentHour()}
            </Row>
        </Container>
    );
}

export default SportsContent;