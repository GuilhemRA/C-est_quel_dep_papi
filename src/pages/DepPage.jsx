import { useParams } from "react-router-dom";
import departementsData from "../Data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DepCard from "../components/DepCard";
import "../components/DepPage.css";

export default function DepPage() {
  const { number } = useParams();

  const departement = departementsData.find((dep) => dep.number.toString() === number);

  const currentIndex = departementsData.findIndex((dep) => dep.number.toString() === number);
  const previousDepartement = departementsData[currentIndex - 1] || null;
  const nextDepartement = departementsData[currentIndex + 1] || null;

  if (!departement) {
    return <h2>Erreur : département non trouvé</h2>;
  }

  const displayNumber =
    departement.name === "la Corse-du-Sud"
      ? "2A"
      : departement.name === "la Haute-Corse"
      ? "2B"
      : departement.number;

  const renderDepCard = (dep) => {
    return dep ? <DepCard key={dep.number} departement={dep} /> : null;
  };

  return (
    <main>
      <Header />
      <div className="departement-page-container">
        {renderDepCard(previousDepartement)}
        <div className="departement-page">
          <h1>
            {displayNumber} · {departement.name}
          </h1>
          <img
            className="departement-page-picture"
            src={`/${departement.number}${departement.alias}.jpg`}
            alt={departement.name}
          />
          <div className="departement-page-description">
            <p className="dep-page-description-line">Chef-lieu : <span className="highlight-capital">{departement.capital}</span></p>
            <p className="dep-page-description-line">Région : <span className="highlight-region">{departement.adminRegion}</span></p>
          </div>
        </div>
        {renderDepCard(nextDepartement)}
      </div>
      {/* <Footer /> */}
    </main>
  );
}