import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


export default function SingleCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleCountry();
  }, [name]);

  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name]);

  return (
    <>
      <section className="section-population">
        {country.map((item) => (
          <div key={item.population} className="item-population">
            <table className="country-info">
              <th>
                <h1 className="country-name">{item.name.official}</h1>
                <p className="country-name">{item.capital}</p>
              </th>
              <tr><td>
                <img src={item.flags.svg} alt={item.name.common} className="big-img" />
              </td></tr>              
              <tr><td className="country-text">
                The country belongs to <span>{item.region}</span> and <span>{item.subregion}</span> sub-region.
                Located at the <span>{item.capitalInfo.latlng[0]}</span> &#176;N and <span>{item.capitalInfo.latlng[1]}</span> &#176;W, 
                this country has population of <span>{item.population.toLocaleString()}</span>. <br/><br/>
                Languages: {Object.keys(item.languages).map(lang =>
                <li key={lang}>{item.languages[lang]}</li>
                )}
              </td></tr>
              <br/>
              <br/>
              <Link
                to="/"
                className="link">
                &#8249; Back
              </Link>
            </table>
          </div>
        ))}
      </section>
    </>
  );
}
