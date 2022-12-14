import React, { useEffect } from "react";
import { Map } from "../components/Map/Map";
import s from './Home.module.scss'
import { useCustomDispatch } from "../../../hooks/store";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import { useCustomSelector } from "../../../hooks/store";


interface Props {
    
}



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