import React from 'react'

const Container = ({children,myValue}) => {
  return (
    <div>
        <h2>este e o titulo do  Container</h2>
        {children}
        <p>O VALOR E : {myValue}</p>
    </div>
   
  )
}

export default Container