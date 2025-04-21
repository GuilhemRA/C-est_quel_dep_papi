import React, { useEffect, useState } from "react";

const DataHook = () => {
  const [departements, setDepartements] = useState([]);

  const getData = () => {
    fetch('/data/departements.json', {
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setDepartements(data);
      console.log(data);
    })
    .catch(error => console.error("Erreur de chargement :", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Données des départements</h1>
      <ul>
        {departements.map((dept, index) => (
          <li key={index}>{dept.name} ({dept.number})</li>
        ))}
      </ul>
    </div>
  );
};

export default DataHook;
