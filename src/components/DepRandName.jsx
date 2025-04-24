import { useState } from 'react';
import "./DepRandName.css";

export default function InvertedGame({ data }) {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * data.length));
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const departement = data[randomNumber];

  const handleInputChange = (e) => {
    setUserInput(e.target.value.toUpperCase());
  };

  const getCorrectCode = (number) => {
    if (number === 2.1) return '2A';
    if (number === 2.2) return '2B';
    return number.toString();
  };

  const handleCheck = () => {
    const cleanedInput = userInput.trim().toUpperCase();
    const correctCode = getCorrectCode(departement.number);

    const correct = cleanedInput === correctCode;
    setIsCorrect(correct);
    setShowAnswer(true);
  };

  const handleNext = () => {
    setRandomNumber(Math.floor(Math.random() * data.length));
    setUserInput('');
    setIsCorrect(null);
    setShowAnswer(false);
  };

  const displayedAnswer = getCorrectCode(departement.number);

  return (
    <main>
      <div id="invertedGame-container">
        <h1 className="h2-random">Devine le numéro du département</h1>

        <div className="quiz-card">
          <div className="quiz-question">
            « <span className="highlight">{departement.name}</span>, quel est son numéro ? »
          </div>

          <div className="input-zone-name">
            <input
              type="text"
              placeholder="_ _"
              value={userInput}
              onChange={handleInputChange}
              disabled={showAnswer}
            />

            {!showAnswer ? (
              <button onClick={handleCheck}>Valider</button>
            ) : (
              <button onClick={handleNext}>Nouveau tirage</button>
            )}
          </div>

          {showAnswer && (
            <div className={`quiz-answer ${isCorrect ? 'correct' : 'wrong'}`}>
              {isCorrect ? (
                <>✅ Bravo ! C’est bien le département <strong>{displayedAnswer}</strong>.</>
              ) : (
                <>❌ Eh non… c’était le <strong>{displayedAnswer}</strong>.</>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

// NOUVEAU TIRAGE PLACE DESSOUS
// export default function InvertedGame({ data }) {
//   const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * data.length));
//   const [userInput, setUserInput] = useState('');
//   const [isCorrect, setIsCorrect] = useState(null);
//   const [showAnswer, setShowAnswer] = useState(false);

//   const departement = data[randomNumber];

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleCheck = () => {
//     const cleanedInput = userInput.trim().replace(/^0+/, '');
//     const correct = cleanedInput === departement.number.toString();
//     setIsCorrect(correct);
//     setShowAnswer(true);
//   };

//   const handleNext = () => {
//     setRandomNumber(Math.floor(Math.random() * data.length));
//     setUserInput('');
//     setIsCorrect(null);
//     setShowAnswer(false);
//   };

//   return (
//     <main>
//       <div id="invertedGame-container">
//         <h1 className="h2-random">Devine le numéro du département</h1>

//         <div className="quiz-card">
//           <div className="quiz-question">
//             « <span className="highlight">{departement.name}</span>, quel est son numéro ? »
//           </div>

//           {!showAnswer && (
//             <div className="input-zone-name">
//               <input
//                 type="text"
//                 placeholder="_ _"
//                 value={userInput}
//                 onChange={handleInputChange}
//               />
//               <button onClick={handleCheck}>Valider</button>
//             </div>
//           )}

//           {showAnswer && (
//             <>
//               <div className={`quiz-answer ${isCorrect ? 'correct' : 'wrong'}`}>
//                 {isCorrect ? (
//                   <>✅ Bravo ! C’est bien le département <strong>{departement.number}</strong>.</>
//                 ) : (
//                   <>❌ Eh non… c’était le <strong>{departement.number}</strong>.</>
//                 )}
//               </div>

//               <div className="button-zone">
//                 <button onClick={handleNext}>Nouveau tirage</button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }