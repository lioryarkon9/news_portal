import {NEWS_TILE_ID, WEATHER_TILE_ID, SPORTS_TILE_ID, FINANCE_TILE_ID, SUBSCRIBE_TILE_ID} from '../consts';

export function getMockDataByTileId (tileId) {
    switch (tileId) {
        case NEWS_TILE_ID:
            return {data: 'Mock Breaking News Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'};
        case WEATHER_TILE_ID:
            return {data: [
                {tmp: '36', location: 'Beer Sheva'},
                {tmp: '37', location: 'Beer Sheva'},
                {tmp: '28', location: 'Beer Sheva'},
                {tmp: '17', location: 'Beer Sheva'},
                {tmp: '33', location: 'Beer Sheva'},
                {tmp: '11', location: 'Beer Sheva'},
                {tmp: '24', location: 'Beer Sheva'}
            ]};
        case FINANCE_TILE_ID:
            return {data: {PointsScored: [80, 25, 30, 70], Teams: ['Team1', 'Team2', 'Team3', 'Team4']}};
        case SPORTS_TILE_ID:
            return {data: {Team1: {id: 'barcelona', label: 'Barca', points: '2'}, Team2: {id: 'real_madrid', label: 'Madrid', points: '3'}}};
        case SUBSCRIBE_TILE_ID:
            return null;
        default:
            console.error('no handler for getMockDataByTileId');
    }
}

export function handleFetchErr (response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function isValidEmail (emailValue) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue);
}

export function getCurrentHour () {
    const TodayDate = new Date();
    const Hour = TodayDate.getHours().toString().length === 2 ? TodayDate.getHours() : '0' + TodayDate.getHours();
    const Minutes = TodayDate.getMinutes().toString().length === 2 ? TodayDate.getMinutes() : '0' + TodayDate.getMinutes();
    const Seconds = TodayDate.getSeconds().toString().length === 2 ? TodayDate.getSeconds() : '0' + TodayDate.getSeconds();

    return Hour + ':' + Minutes + ':' + Seconds;
}