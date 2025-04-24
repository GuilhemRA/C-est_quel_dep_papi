import { useState } from "react";
import "./DepSelect.css";
import departementsData from "../Data";

const DepSelect = ({ setFilteredDepartements }) => {
  const regions = [
    "Toutes régions",
    ...new Set(departementsData.map((dep) => dep.adminRegion)),
  ];

  const departementNums = [...departementsData]
    .map((dep) => {
      if (dep.number === 2.1) return "2A";
      if (dep.number === 2.2) return "2B";
      return dep.number.toString().padStart(2, "0");
    })
    .sort((a, b) => {
      const order = (val) => {
        if (val === "2A") return 20.1;
        if (val === "2B") return 20.2;
        return parseFloat(val);
      };
      return order(a) - order(b);
    });

  const [selectedMinDep, setSelectedMinDep] = useState(departementNums[0]);
  const [selectedMaxDep, setSelectedMaxDep] = useState(departementNums[departementNums.length - 1]);
  const [selectedRegion, setSelectedRegion] = useState("Toutes régions");

  const handleMinChange = (e) => {
    const newMin = e.target.value;
    setSelectedMinDep(newMin);

    if (parseFloat(normalizeDepNumber(newMin)) > parseFloat(normalizeDepNumber(selectedMaxDep))) {
      setSelectedMaxDep(newMin);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = e.target.value;
    setSelectedMaxDep(newMax);

    if (parseFloat(normalizeDepNumber(newMax)) < parseFloat(normalizeDepNumber(selectedMinDep))) {
      setSelectedMinDep(newMax);
    }
  };

  const normalizeDepNumber = (num) => {
    if (num === "2A") return "2.1";
    if (num === "2B") return "2.2";
    return num;
  };

  const handleSearch = () => {
    const min = normalizeDepNumber(selectedMinDep);
    const max = normalizeDepNumber(selectedMaxDep);

    const results = departementsData.filter((dep) => {
      const num = dep.number.toString();
      const inRange = num >= min && num <= max;
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
          Choisissez une région :{' '}
        </label>
        <select
          id="my-filterbutton"
          style={{ cursor: "pointer" }}
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
          Déterminez une intervalle de :{' '}
        </label>
        <select
          id="dep-min"
          style={{ cursor: "pointer" }}
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
          {' '}à :{' '}
        </label>
        <select
          id="dep-max"
          style={{ cursor: "pointer" }}
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
        <button
          id="my-selectbutton"
          className="btn-search"
          onClick={handleSearch}
          style={{ cursor: "pointer" }}
        >
          Rechercher
        </button>
      </div>
    </div>
  );
};

export default DepSelect;
