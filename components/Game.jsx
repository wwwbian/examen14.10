import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Game = () => {
  const { state } = useLocation();
  const jugador = state?.nombre; 
  const [adivina, setAdivina] = useState('');
  const [numero, setNumero] = useState(null);
  const [intentos, setIntentos] = useState(0);
  const [mensaje, setMensaje] = useState('Adivina un número entre 1 y 100'); 

  useEffect(() => {
    setNumero(Math.floor(Math.random() * 100) + 1);
  }, []);

  const probar = () => {
    if (!adivina) {
      setMensaje('Por favor, ingresa un número.'); 
      return;
    }

    setIntentos(intentos + 1);
    const num = parseInt(adivina, 10);

    if (num > numero) { 
      setMensaje('Muy alto');
    } else if (num < numero) {
      setMensaje('Muy bajo'); 
    } else {
      setMensaje(`Correcto! Era el ${numero}`);
    }
  };

  return (
    <div className="game">
      <h1>Jugador: {jugador}</h1>
      <div className="number">{mensaje === `Correcto! Era el ${numero}` ? numero : '?'}</div>
      <input className="guessInput" value={adivina} onChange={(e) => setAdivina(e.target.value)} type="number" />
      <button className="probar" onClick={probar}>Probar</button>
      <p>Intentos: {intentos}</p>
      <p>{mensaje}</p>
    </div>
  );
};

export default Game;
