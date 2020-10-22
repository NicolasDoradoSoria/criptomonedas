import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import Axios from "axios";
import Error from './Error'
const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%100px;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
const Formulario = ({setmoneda, setcriptomoneda}) => {

  const [listacripto, setListacripto] = useState([])
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar Estadounidence" },
    { codigo: "MXN", nombre: "peso mexicano" },
    { codigo: "EUR", nombre: "euro" },
    { codigo: "GBP", nombre: "libra" },
    ,
  ];
  const [moneda, SelectMonedas] = useMoneda(
    "elige tu moneda",
    "",
    MONEDAS
  );

  const [criptomoneda, SelectCripto] = useCriptomoneda('elige tu criptomoneda', '', listacripto)
   const [error, setError] = useState(false)

  useEffect(()=> {
    const consultarAPI = async () =>{
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

      const resultado = await Axios.get(url)

      setListacripto(resultado.data.Data)
    }
    consultarAPI()
  }, [])

  const hundleSubmit = e => {
    e.preventDefault()

    if(moneda === '' || criptomoneda === ''){
      setError(true) 
      return
    }
    setError(false)
    setmoneda(moneda)
    setcriptomoneda(criptomoneda)
  }
  return (
    <form onSubmit={hundleSubmit}>

      {error? <Error mensaje= "todos los campos son obligatorios" /> : null}
      <SelectMonedas />
      <SelectCripto />

      <div>
        <Boton type="submit" className="btn btn-primary" value="cotizar" />
      </div>
    </form>
  );
};

export default Formulario;
