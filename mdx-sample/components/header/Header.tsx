import React from 'react';
import style from './Header.module.css';

interface Props {
  heading: string,
  color?: 'red' | 'blue'
}

export const HeaderComponent: React.FC<Props> = ({heading, color}) => {
  if (!color) {
    return <h1 className={style.header}>{heading}</h1>;
  }
  switch(color) {
    case 'red':
      return <h1 className={`${style.header} ${style['header--red']}`}>{heading}</h1>;
    case 'blue':
      return <h1 className={`${style.header} ${style['header--blue']}`}>{heading}</h1>;
  }
}