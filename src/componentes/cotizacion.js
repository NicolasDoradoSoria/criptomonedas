import styled from '@emotion/styled';
import React from 'react';


const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`

const Info = styled.p`
    font-size:18px;

    span{
        font-weight:bold;
    }
`

const Precio = styled.p`
    font-size:30px;
    span{
        font-weight:bold;
    }
`

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length ===0) return null

    console.log(resultado)
    return ( 
        <ResultadoDiv>
            <Precio>el precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>el precio mas alto del dia <span>{resultado.HIGHDAY}</span></Info>
            <Info>el precio mas bajo del dia: <span>{resultado.LOWDAY}</span></Info>
            <Info>variacion ultimas 24 hs: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>la ultima actializacion <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;