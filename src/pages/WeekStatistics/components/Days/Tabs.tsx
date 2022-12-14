import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import s from './Days.module.scss';


interface Props {}

export const Tabs = (props: Props) => {
  const tabs = [
    {
      value: 'Week',
    },
    {
      value: 'Month',
    }
  ];
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map(tab => (
          <div className={s.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <nav className={s.cancel}>  
      <NavLink
      to="/"
      style={({ isActive }) => 
        isActive
          ? {
            textDecoration: 'none',
            
          }
          :{
            textDecoration: 'none',
            backgroundColor: 'var(--components-background-default)',
            color: 'var(--text-color-default)'
          }
        }
      >
       Cancel
      </NavLink>
          </nav>  
    </div>
  );
};