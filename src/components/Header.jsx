import "./Header.css";
import { Link } from "react-router-dom";

export default function HeaderApp() {
    return (
      <div id="header-container">
        <a className="h1-header" href="/">C'est quel département papi ?</a>
  
        <div className="header-buttons">
          <button className="my-linkbutton">
            <Link className="link" to="/Dep">Les départements</Link>
          </button>
          <button className="my-linkbutton">
            <Link className="link" to="/Game">C'est quel département ?</Link>
          </button>
        </div>
      </div>
    );
  }