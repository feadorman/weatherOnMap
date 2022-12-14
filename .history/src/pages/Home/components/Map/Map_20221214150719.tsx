import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";
import s from './Map.module.scss'


interface Props {
    weather: Weather
}




// const arraylist = [];

// fetch('https://turkiyeapi.cyclic.app/api/v1/provinces')
//     .then(resp => resp.json())
//     .then(json => json.data as [])
//     .then(a => {a.forEach(element => {
//         arraylist.push(element.name)
//         });
//     }
//     )



export const Map = (weather: Props) => {
    return (
        <div className={s.this__map}>
            <div className={s.top__block}>
                <div className={s.this__city1}>
                <a className={s.this__link} href="/week-statistics/">Istanbul, {Math.floor(weather.weather.main.temp)} °C</a>
                <div className={s.this__icon}>
                <GlobalSvgSelector id="small_rain_sun" />
                </div>
                </div>
                <div className={s.this__city2}>
                <GlobalSvgSelector id="sun" />   
                <a className={s.this__link} href="/week-statistics/">Ankara, {Math.floor(weather.weather.main.temp)} °C</a>
                </div>
                <div className={s.this__city3}> 
                <GlobalSvgSelector id="mainly_cloudy" />   
                <a className={s.this__link} href="/week-statistics/">Izmir, {Math.floor(weather.weather.main.temp)} °C</a>
                </div>    
                <div className={s.this__city4}>
                <GlobalSvgSelector id="rain" />
                <a className={s.this__link} href="/week-statistics/">Bursa, {Math.floor(weather.weather.main.temp)} °C</a>
                </div>
                <div className={s.this__city5}>
                <div className={s.this__icon}>
                <GlobalSvgSelector id="small_rain_sun" />
                </div>
                <a className={s.this__link} href="/week-statistics/">Adana, {Math.floor(weather.weather.main.temp)} °C</a>
                </div>
                <div className={s.this__city6}>
                <GlobalSvgSelector id="small_rain" />
                <a className={s.this__link} href="/week-statistics/">Gaziantep, {Math.floor(weather.weather.main.temp)} °C</a>
                </div> 
                <div className={s.this__city7}>
                <GlobalSvgSelector id="mainly_cloudy" />
                <a className={s.this__link} href="/week-statistics/">Konya, {Math.floor(weather.weather.main.temp)} °C</a>
                </div> 
                <div className={s.this__city8}>
                <GlobalSvgSelector id="rain" />
                <a className={s.this__link} href="/week-statistics/">Kayseri, {Math.floor(weather.weather.main.temp)} °C</a>   
                </div> 
                <div className={s.this__city9}>
                <GlobalSvgSelector id="sun" />
                <a className={s.this__link} href="/week-statistics/">Diyarbakir, {Math.floor(weather.weather.main.temp)} °C</a>   
                </div>
                <div className={s.this__city10}>
                <GlobalSvgSelector id="small_rain" />
                <a className={s.this__link} href="/week-statistics/">Erzurum, {Math.floor(weather.weather.main.temp)} °C</a>
                </div> 
                 <div className={s.this__city11}>
                <GlobalSvgSelector id="sun" />
                <a className={s.this__link} href="/week-statistics/">Antalya, {Math.floor(weather.weather.main.temp)} °C</a>
                </div> 
                <div className={s.this__city12}>
                <div className={s.this__icon}>
                <GlobalSvgSelector id="small_rain_sun" />
                </div>
                <a className={s.this__link} href="/week-statistics/">Samsun, {Math.floor(weather.weather.main.temp)} °C</a>
                </div>
                
            </div>

        </div>
        
    )
    
};