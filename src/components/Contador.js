import React, { useState, useCallback } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  //const sumar = () => { setContador(contador + 1)};

  const sumar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  //const restar = () => { setContador(contador - 1)};

  const restar = useCallback(() => {
    setContador(contador - 1)
  }, [contador]);


  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <button type='submit' onClick={sumar}>Sumar</button>
      <button type='submit' onClick={restar}>Restar</button>
      <p>{contador}</p>
      <input type='text' onChange={handleInput} value={input}/>
      <ContadorHijo contador={contador} sumar={sumar} restar={restar}/>
    </div>
  );
};
export default Contador