import React from 'react';
import {Container} from 'react-bootstrap';
import './ModalView.css';
import NewsModal from './NewsModal';
import {NEWS_TILE_ID} from '../../consts';


const ModalView = props => {
    const RenderContent = () => {
        switch (props.data.id) {
            case NEWS_TILE_ID:
                const FullArticle = props.data.data
                return (
                    <NewsModal fullArticle={FullArticle}/>
                );
            default:
                return null;
        }
    }
    return (
        <Container id='ModalView'>
            <div style={{cursor: 'pointer'}} className='text-right' onClick={props.hideModalView}>
                <span>Close</span>
            </div>
            {RenderContent()}
        </Container>
    );
}

export default ModalView;