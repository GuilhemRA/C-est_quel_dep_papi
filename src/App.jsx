"Auvergne-Rhône-Alpes"
"Bourgogne-Franche-Comté"
"Bretagne"
"Centre Val de Loire"
"Corse"
"Grand Est"
"Hauts-de-France"
"Île-de-France"
"Normandie"
"Nouvelle-Aquitaine"
"Occitanie"
"Pays de la Loire"
"Provence-Alpes-Côte-d'Azur"

import "./App.css";
import DepRandom from "./components/DepRandom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DepCard from "./components/DepCard";
import data from "./Data";

export default function App() {

return <main>
  <Header/>
  <DepRandom data={data}/>
  <div className="cards-container">
    {data.map((departement) => (
      <DepCard key={departement.number} departement={departement} />
    ))}
  </div>
  <Footer />

</main>
}