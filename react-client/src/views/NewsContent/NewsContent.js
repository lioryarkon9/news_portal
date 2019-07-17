import React from 'react';
import './NewsContent.css';


const NewsContent = props => {
    console.info('news props: ', props);
    const GetUpdateHour = () => {
        const TodayDate = new Date();
        const HOUR = TodayDate.getHours(), Minutes = TodayDate.getMinutes();
        return HOUR + ':' + Minutes;
    }
    return (
        <div id='news-content'>
            <div style={{color: 'red'}}>
                Breaking News! {GetUpdateHour()}
            </div>
            <div id='news-from-server'>
                {props.data}
            </div>
        </div>
    );
}

export default NewsContent;