import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import DepSelect from "../components/DepSelect";
import DepCard from "../components/DepCard";
import departementsData from "../Data";

export default function Dep() {
  const [filteredDepartements, setFilteredDepartements] = useState(departementsData);

  useEffect(() => {
    setFilteredDepartements(departementsData);
  }, []);

  return (
    <main>
      <Header />
      <DepSelect setFilteredDepartements={setFilteredDepartements} />
      <div className="cards-container">
        {filteredDepartements.map((departement) => (
          <DepCard key={departement.number} departement={departement} />
        ))}
      </div>
      <Footer />
    </main>
  );
}