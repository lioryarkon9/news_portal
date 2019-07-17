import {NEWS_TILE_ID, WEATHER_TILE_ID, SPORTS_TILE_ID, FINANCE_TILE_ID, SUBSCRIBE_TILE_ID} from '../consts';

export function getMockDataByTileId (tileId) {
    switch (tileId) {
        case NEWS_TILE_ID:
            return {data: 'Mock Breaking News Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'};
        case WEATHER_TILE_ID:
            return {data: {tmp: '12', location: 'Tel Aviv'}};
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