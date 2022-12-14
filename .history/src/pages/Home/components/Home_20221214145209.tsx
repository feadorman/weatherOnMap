import React, { useEffect } from "react";
import { Map } from "../components/Map/Map";
import s from './Home.module.scss'
import { useCustomDispatch } from "../../../hooks/store";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import { useCustomSelector } from "../../../hooks/store";


interface Props {
    
}

fetch('https://turkiyeapi.cyclic.app/api/v1/provinces')
    .then(resp => resp.json())
    .then(json => json.data as [])
    .then(a => a.forEach(element => {
        console.log(element.name)
    })
    )

export const Home = (props: Props) => {

    const dispath  = useCustomDispatch()

    const { weather } = useCustomSelector (
        state => state.currentWeatherSliceReducer
    )
    
    
    
    useEffect(() => {
        dispath(fetchCurrentWeather('bursa'))
    }, [dispath])
    
    
    return (
    <div className={s.home}>
        <Map weather = {weather} />
        
    </div>
    )
    
};