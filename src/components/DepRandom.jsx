import { useState } from "react";
import "./DepRandom.css";
import { Link } from "react-router-dom";

// export default function HeaderApp({ data }) {
//     const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random()*data.length));
//     const [activNumber, setActivNumber] = useState(0);
//     const counter = () => setActivNumber((oldActivNumber) => {
//         console.log(oldActivNumber);
//             if (oldActivNumber == 3) {
//                 return 0;
//             } else {
//                 return oldActivNumber + 1;
//             }
//         });
    
//     return <main>
//         <div id="randomGame-container">
//             <h1 className="h1-random">C'est quel département le {data[randomNumber].number}{data[randomNumber].alias} papi ?</h1>
//             <div className="randomGame-div-center">
//                 <div>{activNumber >= 1 && (<h2 className="h2-random">C'est {data[randomNumber].name} !</h2>)}</div>
//                 <div>{activNumber >= 1 && (<h3 className="h3-random">Et c'est quoi son chef-lieu ?</h3>)}</div>
//                 <div>{activNumber >= 2 && (<h2 className="h2-random">{data[randomNumber].capital} bien sûr !</h2>)}</div>
//                 <div>{activNumber >= 2 && (<h3 className="h3-random">Et sa région ?</h3>)}</div>
//                 <div>{activNumber >= 3 && (<h2 className="h2-random">{data[randomNumber].adminRegion} !</h2>)}</div>
            
//             </div>
//             <div><button onClick={counter} id="my-button" style={{ cursor: 'pointer' }}>Solution</button></div>
//         </div>
//     </main>
// }


export default function HeaderApp({ data }) {
  const getRandomDepartment = () => data[Math.floor(Math.random() * data.length)];
  const [departement, setDepartement] = useState(getRandomDepartment());
  const [activNumber, setActivNumber] = useState(0);

  const handleClick = () => {
    if (activNumber === 3) {
      setDepartement(getRandomDepartment());
      setActivNumber(0);
    } else {
      setActivNumber((prev) => prev + 1);
    }
  };

  const displayNumber =
    departement.name === "la Corse-du-Sud"
      ? "2A"
      : departement.name === "la Haute-Corse"
      ? "2B"
      : departement.number;

  return (
    <main>
      <div id="randomGame-container">
        <div className="randomGame-dialogue">
          {activNumber >= 0 && (
            <div className="dialogue-bubble question first-question">
              « C’est quel département le{" "}
              {/* <Link
                to={`/departement/${departement.number}`}
                className="link-bubble"
              > */}
                <span className="highlight dep-number">
                  {displayNumber}
                  {/* {departement.alias} */}
                </span>{" "}
              {/* </Link> */}
              papi ? »
            </div>
          )}

          {activNumber >= 1 && (
            <>
              <div className="dialogue-bubble answer">
                « C’est <span className="highlight">{departement.name}</span> bien sûr ! »
              </div>
              <div className="dialogue-bubble question">« Et c’est quoi son chef-lieu ? »</div>
            </>
          )}

          {activNumber >= 2 && (
            <>
              <div className="dialogue-bubble answer">
                « <span className="highlight">{departement.capital}</span>, évidemment. »
              </div>
              <div className="dialogue-bubble question">« Et sa région ? »</div>
            </>
          )}

          {activNumber >= 3 && (
            <div className="dialogue-bubble answer">
              « <span className="highlight">{departement.adminRegion}</span>, pardi ! »
            </div>
          )}
        </div>

        <button onClick={handleClick} id="my-button">
          {activNumber === 3 ? "Nouveau tirage" : "Solution"}
        </button>
      </div>
    </main>
  );
}