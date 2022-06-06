import React, { memo, useMemo } from 'react'

const ContadorHijo = ({contador, sumar, restar}) => {
  console.log('Hijo de contador se renderiza')

  const numero = useMemo(() => {
    let superNumero = 0;

    for(let i = 0; i < 1000000000; i++){
      superNumero++;

    return superNumero
  }
  }, []);

  return (
    <div style={{border: "thin solid #000", margin: "1rem", padding: "1rem"}}>
      <h2>Hijo del Contador</h2>
      <button type='submit' onClick={sumar}>Sumar</button>
      <button type='submit' onClick={restar}>Restar</button>
      <h3>{contador}</h3>
      <h3>{numero}</h3>
    </div>
  )
}

export default memo(ContadorHijo);