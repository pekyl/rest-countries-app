import { useState, useEffect } from "react";
import * as React from 'react';
import Tablehead from "./Tablehead"
import Article from "./Article";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";


export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [countriesPerPage, setCountriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const updateCountryPerPage = (resultsPerPage) => {
      setCountriesPerPage(resultsPerPage);
      setCurrentPage(1);
  }

  useEffect(() => {
    document.title = `Country`;
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }

return (
    <>
      {!countries ? (
        <h1 className="header">
          Loading...
        </h1>
      ) : (
        <section className="container">
          <table class="form" width="100%">
            <td width="100px">              
              <Link
                to="/">
                <h2>&#9776;&nbsp;&nbsp;&nbsp;Country</h2>
              </Link>              
            </td>
            <td className="search-bar">
              <form className="form-handlesearchcountry" onSubmit={handleSearchCountry} autoComplete="off">
                <input className="search-input"
                  type="text"
                  name="search"
                  id="search"
                  placeholder="&#128269;&nbsp;&nbsp;&nbsp;Search by country name"
                  required
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)} />
              </form>
            </td>
          </table>

          <div className="table">
            <Tablehead></Tablehead>
            {countries.slice(((currentPage-1) * countriesPerPage),(currentPage * countriesPerPage)).map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
          </div>
          
          <Pagination totalCountries= {countries.length} countriesPerPage= {countriesPerPage} updateCountryPerPage= {updateCountryPerPage} setCurrentPage= {setCurrentPage} />

        </section>
      )}
  </>
)}
