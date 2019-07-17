import React from 'react';


const WeatherContent = props => {
    console.info('weather props: ', props);
    const GetUpdateHour = () => {
        const TodayDate = new Date();
        const HOUR = TodayDate.getHours(), Minutes = TodayDate.getMinutes();
        return HOUR + ':' + Minutes;
    }
    return (
        <div id='weather-content'>
            <div>WeatherContent</div>
            <div>{GetUpdateHour()}</div>
        </div>
    );
}

export default WeatherContent;