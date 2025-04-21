import React from "react";
import "./DepCard.css";
import { Link } from "react-router-dom";

export default function DepCard({ departement }) {

  const displayNumber =
    departement.name === "la Corse-du-Sud"
      ? "2A"
      : departement.name === "la Haute-Corse"
      ? "2B"
      : departement.number;

  return (
    <Link
      to={`/departement/${departement.number}`}
      className="departement-card"
    >
      <img
        className="departement-picture"
        src={`/${departement.number}${departement.alias}.jpg`}
        alt={departement.name}
      />
      <div className="departement-description">
        <h3>
          {displayNumber} · {departement.name}
        </h3>
        <p className="dep-description-line">
          Chef-lieu : <span className="highlight-capital">{departement.capital}</span>
        </p>
        <p className="dep-description-line">
          Région : <span className="highlight-region">{departement.adminRegion}</span>
        </p>
      </div>
    </Link>
  );
}