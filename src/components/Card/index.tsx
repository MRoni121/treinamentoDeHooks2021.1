import React, { useEffect, useState } from 'react';

import GreenCircle from '../../assets/GreenCircle.svg';
import RedCircle from '../../assets/RedCircle.svg';
import BlueCircle from '../../assets/BlueCircle.svg';
import YellowCircle from '../../assets/YellowCircle.svg';
import OrangeCircle from '../../assets/OrangeCircle.svg';
import currencyMask from '../../utils/currencyMask';

import './styles.css';
import useTheme from '../../hooks/useTheme';

interface CardProps {
  src: string,
  name: string,
  price: number,
  intensity: number
}

const getSrc = (color: string) => {
  switch (color) {
    case 'red': return RedCircle;
    case 'green': return GreenCircle;
    case 'blue': return BlueCircle;
    case 'yellow': return YellowCircle;
    case 'orange': return OrangeCircle;
  }
}

const Card: React.FC<CardProps> = ({ src, name, price, intensity, children }) => {
  const { theme,  setTheme} = useTheme();


  useEffect(() => {
    return () => {
      alert('morri')
    }
  }, []);

  return (
    <div className='containerDoCard' >
      <div className='boxAndValue'>
        {/* <div className='outerCircle'> */}
          <img src={src} className='innerCircle'/>
        {/* </div> */}
        <h3>{!!price ? `R$ ${currencyMask(price)}` : '-----'}</h3>
      </div>

      <div className='textDiv'>
        <p>{name}</p>
        <p>Intensidade: {intensity}</p>
      </div>
    </div>
  );
}

export default Card;