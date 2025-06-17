import React from 'react'

const CarDetails 
= ({brand,km,color,newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Brand:{brand}</li>
            <li>KM:{km}</li>
            <li>Cor:{color}</li>
        </ul>
        {newCar && <p>este carro e novo</p>}
    </div>
  )
}

export default CarDetails