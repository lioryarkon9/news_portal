import {
    SPORTS_TILE_ID, 
    NEWS_TILE_ID, 
    SUBSCRIBE_TILE_ID,
    WEATHER_TILE_ID,
    FINANCE_TILE_ID,
    NEWS_MILISECONDS_UPDATE,
    SPORTS_MILISECONDS_UPDATE,
    WEATHER_MILISECONDS_UPDATE,
    FINANCE_MILISECONDS_UPDATE
} from '../consts';

class SingleTile {
    constructor (id = '', socketChannel = '', title = '', milSecondsForUpdate = null) {
        this.id = id;
        this.socketChannel = socketChannel;
        this.title = title;
        this.milSecondsForUpdate = milSecondsForUpdate;
    }
}

const NewsTile = new SingleTile(NEWS_TILE_ID, NEWS_TILE_ID, 'News Update', NEWS_MILISECONDS_UPDATE);
const WeatherTile = new SingleTile(WEATHER_TILE_ID, WEATHER_TILE_ID, 'Weather', WEATHER_MILISECONDS_UPDATE);
const FinanceTile = new SingleTile(FINANCE_TILE_ID, FINANCE_TILE_ID, 'Finance', FINANCE_MILISECONDS_UPDATE);
const SportsTile = new SingleTile(SPORTS_TILE_ID, SPORTS_TILE_ID, 'Sports', SPORTS_MILISECONDS_UPDATE);
const SubscribeTile = new SingleTile(SUBSCRIBE_TILE_ID, SUBSCRIBE_TILE_ID, 'Subscribe for updates', null);

export default [
    NewsTile,
    WeatherTile,
    FinanceTile,
    SportsTile,
    SubscribeTile
]