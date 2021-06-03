import React from 'react';
import { Link } from 'react-router-dom';

import useTheme from '../../hooks/useTheme';

const OtherPage: React.FC = () => {
  const { theme, handleChangeTheme } = useTheme();
  return (
    <>
      <h1>Essa é a outra página</h1>
      <h1>O tema da aplicação é: {theme}</h1>
      <button onClick={handleChangeTheme}>Mudar tema</button>
      <Link to={{pathname: '/'}}>
        <h4>Link para a primeira página pra você ver que o valor do tema muda lá também</h4>
      </Link>
    </>
  );
}

export default OtherPage;