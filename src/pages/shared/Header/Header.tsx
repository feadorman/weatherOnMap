import React, { useEffect, useState } from "react";
import { GlobalSvgSelector } from "../../../assets/icons/global/GlobalSvgSelector";
import s from './Header.module.scss'


interface Props {

}

export const Header = (props: Props) => {
   
    const [theme, setTheme] = useState('light')

    function changeTheme () {
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log(theme)
        
    }

    useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement;
        
        const components = [
            'body-background',
            'components-background',
            'card-background',
            'card-shadow',
            'text-color'
        ]

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`, 
                `var(--${component}-${theme})`
                )
        })
        
    }, [theme])
    


    return ( 
    <header className={s.header}>
        <div className={s.wrapper}>
        <div className={s.logo}>
            <GlobalSvgSelector id="header-logo"/></div>
        <div className={s.title}>React weather</div>
        </div>
        <div className={s.wrapper}>
          <div className={s.change__theme} 
          onClick={changeTheme}
          >
            <GlobalSvgSelector id="change-theme" /></div>
        </div>
    </header>)
};