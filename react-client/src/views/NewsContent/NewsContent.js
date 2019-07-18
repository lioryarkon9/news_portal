import React from 'react';
import './NewsContent.css';
import {getCurrentHour} from '../../utils';


const NewsContent = props => {
    console.info('news props: ', props);
    return (
        <div id='news-content'>
            <div style={{color: 'red'}}>
                Breaking News! {getCurrentHour()}
            </div>
            <div id='news-from-server'>
                {props.data}
            </div>
        </div>
    );
}

export default NewsContent;