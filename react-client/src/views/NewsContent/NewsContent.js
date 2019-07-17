import React from 'react';
import './NewsContent.css';


const NewsContent = props => {
    console.info('news props: ', props);
    return (
        <div id='news-content'>
            {props.data}
        </div>
    );
}

export default NewsContent;