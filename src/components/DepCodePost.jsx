import { useState } from 'react';
import "./DepCodePost.css";

export default function PostalCodeGame({ data }) {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * data.length));
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const departement = data[randomNumber];

  const handleChange = (e) => setInputValue(e.target.value);

  const handleSubmit = () => {
    if (inputValue === departement.codePostal) {
      setMessage('Bravo ! C’est le bon code postal.');
    } else {
      setMessage(`Dommage, c’est le code postal de ${departement.codePostal}.`);
    }
    setInputValue('');
  };

  const handleNewGame = () => {
    setRandomNumber(Math.floor(Math.random() * data.length));
    setMessage('');
  };

  return (
    <main>
      <div id="postalGame-container">
        <div className="game-dialogue">
          <div className="dialogue-bubble question">
            « Quel est le code postal du département <span className="highlight">{departement.name}</span> ? »
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Entrez votre réponse"
          />
          <button onClick={handleSubmit}>Vérifier</button>
          {message && <div className="dialogue-bubble answer">{message}</div>}
        </div>

        <button onClick={handleNewGame} id="new-game-button">Nouveau tirage</button>
      </div>
    </main>
  );
}