import React from 'react';
import AllTiles from '../../TilesData';
import SingleTile from '../../components/SingleTile';
import {Container, Row, Col} from 'react-bootstrap';


const TilesView = props => {
    return (
        <Container>
            <Row>
                {AllTiles.map(item => (
                    <SingleTile
                        key={item.id}
                        id={item.id}
                        socketChannel={item.socketChannel}
                        title={item.title}
                        milSecondsForUpdate={item.milSecondsForUpdate}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default TilesView;