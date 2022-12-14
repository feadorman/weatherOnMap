import React from "react";
import s from './WeekStatistics.module.scss'
import { Days } from "./Days/Days";
import { Tabs } from "./Days/Tabs";


interface Props {}

export const WeekStatistics = (props: Props) => {





    return(
        <div className={s.home}>
            <div className={s.wrapper}> 
            <Tabs />
            <Days />
            </div>
        </div>
    )
     
};