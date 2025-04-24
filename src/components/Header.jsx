import "./Header.css";
import { Link } from "react-router-dom";

// export default function HeaderApp() {
//   return (
//     <div id="header-container">
//       <a className="h1-header" href="/">C'est quel département papi ?</a>

//       <div className="header-buttons">
//         <Link className="my-linkbutton full-link" to="/Dep">Les départements</Link>
//         <Link className="my-linkbutton full-link" to="/Game">C'est quel département ?</Link>
//       </div>
//     </div>
//   );
// }

export default function HeaderApp() {
  return (
    <div id="header-container">
      {/* Conteneur logo */}
      <div className="logo-container">
        <img src="../public/france4.png" alt="Logo" className="logo-image" />
      </div>

      <a className="h1-header" href="/">C'est quel département Papi ?</a>

      <div className="header-buttons">
        <Link className="my-linkbutton full-link" to="/Dep">Les départements</Link>
        <Link className="my-linkbutton full-link" to="/Game">C'est quel département ?</Link>
      </div>
    </div>
  );
}