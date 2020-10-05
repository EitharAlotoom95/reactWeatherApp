import axios from 'axios';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'e2b6f8a6e97f68774cf718412802255e';

export const fetchWeatherApi = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}