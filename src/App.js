import React, { useState, useEffect } from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import axios from "axios";
import styled from "@emotion/styled";
import imagen from "./cryptomonedas.png";
import Cotizacion from "./componentes/cotizacion";
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "bebas neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700px;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [moneda, setmoneda] = useState("");
  const [criptomoneda, setcriptomoneda] = useState("");
  const [resultado, setresultado] = useState({})

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (moneda === "") return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda},EUR`;

      const resultado = await axios.get(url);

      setresultado(resultado.data.DISPLAY[criptomoneda][moneda])
    };

    cotizarCriptomoneda()
  }, [moneda, criptomoneda]);
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="imagen cripto" />
      </div>

      <div>
        <Heading>cotiza criptomonedas al instante</Heading>

        <Formulario setcriptomoneda={setcriptomoneda} setmoneda={setmoneda} />
        <Cotizacion resultado={resultado}/>
      </div>
    </Contenedor>
  );
  // async componentDidMount(){
  //   this.obtenerMonedas()
  // }

  // obtenerMonedas = async () => {
  //   const url = ``

  //   await axios.get(url)
  //     .then(respuesta => {

  //     })
  // }
  // render() {
  //   return ( <div className="App">
  //     <Header titulo="criptomonedas al instante"/>
  //     <div className="row justify-content-center">
  //       <div className="col-md-6 bg-light pb-4 contenido-principal">
  //         <Formulario />
  //       </div>
  //     </div>
  //   </div> );
  // }
}

export default App;
