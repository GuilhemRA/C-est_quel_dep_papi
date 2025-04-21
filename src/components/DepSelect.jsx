import { useState } from "react";
import "./DepSelect.css";
import departementsData from "../Data";

const DepSelect = ({ setFilteredDepartements }) => {
  const regions = [
    "Toutes régions",
    ...new Set(departementsData.map((dep) => dep.adminRegion)),
  ];

  const departementNums = [...departementsData]
    .map((dep) => dep.number)
    .sort((a, b) => a - b)
    .map((num) => num.toString().padStart(2, "0"));

  const [selectedMinDep, setSelectedMinDep] = useState(departementNums[0]);
  const [selectedMaxDep, setSelectedMaxDep] = useState(
    departementNums[departementNums.length - 1]
  );

  const [selectedRegion, setSelectedRegion] = useState("Toutes régions");

  const handleMinChange = (e) => {
    const newMin = e.target.value;
    setSelectedMinDep(newMin);

    if (parseInt(newMin) > parseInt(selectedMaxDep)) {
      setSelectedMaxDep(newMin);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = e.target.value;
    setSelectedMaxDep(newMax);

    if (parseInt(newMax) < parseInt(selectedMinDep)) {
      setSelectedMinDep(newMax);
    }
  };

  const handleSearch = () => {
    const results = departementsData.filter((dep) => {
      const num = dep.number.toString().padStart(2, "0");
      const inRange = num >= selectedMinDep && num <= selectedMaxDep;
      const inRegion =
        selectedRegion === "Toutes régions" || dep.adminRegion === selectedRegion;

      return inRange && inRegion;
    });

    setFilteredDepartements(results);
  };

  return (
    <div id="dep-select-container">
      <div className="div-select">
        <label className="h3-select" htmlFor="region">
          Choisissez une région :{" "}
        </label>
        <select
          id="my-filterbutton"
          style={{ cursor: 'pointer' }}
          name="region"
          className="h2-select"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {regions.map((region) => (
            <option className="select" key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="div-select">
        <label className="h3-select" htmlFor="dep-min">
          Déterminez une intervalle de :{" "}
        </label>
        <select
          id="my-filterbutton"
          style={{ cursor: 'pointer' }}
          name="dep-min"
          className="h2-select"
          value={selectedMinDep}
          onChange={handleMinChange}
        >
          {departementNums.map((num, index) => (
            <option className="select" key={`min-${index}-${num}`} value={num}>
              {num}
            </option>
          ))}
        </select>

        <label className="h3-select" htmlFor="dep-max">
          {" "}
          à :{" "}
        </label>
        <select
          id="my-filterbutton"
          style={{ cursor: 'pointer' }}
          name="dep-max"
          className="h2-select"
          value={selectedMaxDep}
          onChange={handleMaxChange}
        >
          {departementNums.map((num, index) => (
            <option className="select" key={`max-${index}-${num}`} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className="div-select">
        <button id="my-selectbutton" className="btn-search" onClick={handleSearch} style={{ cursor: 'pointer' }}>
          Rechercher
        </button>
      </div>
    </div>
  );
};

export default DepSelect;
