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
    
    fetch('https://turkiyeapi.cyclic.app/api/v1/provinces')
    .then(resp => resp.json())
    .then(data => console.log(data))
    
    useEffect(() => {
        dispath(fetchCurrentWeather('bursa'))
    }, [dispath])
    useEffect(() => {
        dispath(fetchCurrentWeather('istanbul'))
    }, [dispath])
    useEffect(() => {
        dispath(fetchCurrentWeather('ankara'))
    }, [dispath])
    useEffect(() => {
        dispath(fetchCurrentWeather('konya'))
    }, [dispath])
    useEffect(() => {
        dispath(fetchCurrentWeather('izmir'))
    }, [dispath])
    useEffect(() => {
        dispath(fetchCurrentWeather('samsun'))
    }, [dispath])
    
    
    return (
    <div className={s.home}>
        <Map weather = {weather} />
        
    </div>
    )
    
};