import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './ModalView.css';


const ModalView = props => {
    return (
        <Container id='ModalView'>
            <div className='text-right' onClick={props.hideModalView}>
                <span>Close</span>
            </div>
            <Row>
                <Col>
                    ModalView
                </Col>
            </Row>
        </Container>
    );
}

export default ModalView;