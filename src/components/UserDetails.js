import React from "react";

const UserDetails = ({ name, age, profession }) => {
  return (
    <div>
      <h2>Exibição das Informação </h2>
      <p>{name}</p>
      <p>idade:{age}</p>
      <p>profissao:{profession}</p>
      {age >= 18 ? (
        <p>Pode Tira carteira de habilidatção</p>
      ) : (
        <p>Menor de idade </p>
      )}
    </div>
  );
};

export default UserDetails;
