import React from "react";
import s from './Days.module.scss'
import { Card } from "./Card";


interface Props {

}


export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

export const Days = (props: Props) => {
    const days: Day[] = [
        {
          day: 'Today',
          day_info: '1 Dec',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Sunny',
        },
        {
          day: 'Yesterday',
          day_info: '30 Nov',
          icon_id: 'small_rain_sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'small rain and sun',
        },
        {
          day: 'Tue',
          day_info: '29 Nov',
          icon_id: 'small_rain',
          temp_day: '+18',
          temp_night: '+15',
          info: 'small rain',
        },
        {
          day: 'Mon',
          day_info: '28 Nov',
          icon_id: 'mainly_cloudy',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Cloudy',
        },
        {
          day: 'Sun',
          day_info: '27 Nov',
          icon_id: 'rain',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Rain',
        },
        {
          day: 'Sat',
          day_info: '26 Nov',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Sunny',
        },
        {
          day: 'Fri',
          day_info: '25 Nov',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Sunny',
        },
      ];

    return (
        <div className={s.days}>
            {days.map((day: Day) => (
                <Card day={day} key={day.day}/>
            ))}
        </div>

    ) 
};