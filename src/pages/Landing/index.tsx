import React, { useCallback, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import Card from '../../components/Card';

import useTheme from '../../hooks/useTheme';

import { Capsule } from '../../interfaces';
import { Link } from 'react-router-dom';


const Landing: React.FC = () => {
  //handleChangeTheme é função nova que criei no contexto, porque agora as duas páginas vão usar
  const { theme, handleChangeTheme} = useTheme();

  const [showCapsule, setShowCapsule] = useState(true);
  const [capsuleIndex, setCapsuleIndex] = useState(0);
  const [capsule, setCapsule] = useState<Capsule>({} as Capsule);
  
  const [loading, setLoading] = useState(true);
  
  //será chamada na primeira vez que for renderizada e sempre que o capsuleIndex mudar
  useEffect(() => {
    const loadData = async () => {
      const response: AxiosResponse<Capsule> = await 
        axios.get(`https://entregavel.polijrinternal.com/produtos/${capsuleIndex}`);
      setCapsule(response.data);
      setLoading(false);
    }

    capsuleIndex >= 0 && capsuleIndex < 6 && loadData();

  }, [capsuleIndex]);

  const handleChangeIndex = useCallback(() => {
    setCapsuleIndex(capsuleIndex === 5 ? 0 : capsuleIndex + 1);
    console.log(capsuleIndex); //vai estar atrasado em relação ao valor real
  }, [capsuleIndex, setCapsuleIndex]);
  

  return(
    <>
      { loading ? (
        <h1>Tela de loading enquanto faço o primeiro request</h1>
      ) : (
        <>
          <h1>O tema da aplicação é: {theme}</h1>
          <button onClick={handleChangeTheme}>Mudar tema</button>

          <h2>
            {
              showCapsule ? `Aqui está a cápsula de id ${capsuleIndex}` : 'O card está morto :('
            }
          </h2>
          { //o componente card tem uma função de retorno no useEffect que é chamada na morte dele
            showCapsule &&
              <>
                <Card 
                intensity={Number(capsule.intensidade)}
                name={capsule.nome}
                price={Number(capsule.preco)}
                src={capsule.foto}
                />

                <button onClick={handleChangeIndex}>
                  Mudar cápsula
                </button>
              </>
          }

          {/* funçãozinha no setState recebendo o valor atual como argumento */}
          <button onClick={() => setShowCapsule(c => !c)}>
            Mostrar/"Matar" a cápsula
          </button>

        </>
      )}
      <Link to={{pathname: '/outra'}}>
        <h4>Link para a outra página onde também conseguimos acessar o contexto</h4>
      </Link>
    </>
  )
}

export default Landing;