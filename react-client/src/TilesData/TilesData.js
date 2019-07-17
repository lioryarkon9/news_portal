import {
    SPORTS_TILE_ID, 
    NEWS_TILE_ID, 
    SUBSCRIBE_TILE_ID,
    WEATHER_TILE_ID,
    FINANCE_TILE_ID
} from '../consts';

class SingleTile {
    constructor (id = '', socketChannel = '', title = '') {
        this.id = id;
        this.socketChannel = socketChannel;
        this.title = title;
    }
}

const NewsTile = new SingleTile(NEWS_TILE_ID, NEWS_TILE_ID, 'News Update');
const WeatherTile = new SingleTile(WEATHER_TILE_ID, WEATHER_TILE_ID, 'Weather');
const FinanceTile = new SingleTile(FINANCE_TILE_ID, FINANCE_TILE_ID, 'Finance');
const SportsTile = new SingleTile(SPORTS_TILE_ID, SPORTS_TILE_ID, 'Sports');
const SubscribeTile = new SingleTile(SUBSCRIBE_TILE_ID, SUBSCRIBE_TILE_ID, 'Subscribe for updates');

export default [
    NewsTile,
    WeatherTile,
    FinanceTile,
    SportsTile,
    SubscribeTile
]