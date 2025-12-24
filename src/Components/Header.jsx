import { Link } from "react-router-dom";
import { useGlobal } from "../StoreData";
import { useState } from "react";
import SearchBox from "./SearchBox";

export default function Header() {
  const [search, setSearch] = useState("");
  const { deals } = useGlobal();

  const uniqueCategories = deals.filter(
    (item, index, arr) =>
      arr.findIndex(obj => obj.storeID === item.storeID) === index
  );

  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container">

    <Link className="navbar-brand" to="/">
      <i className="fas fa-ghost me-2"></i>V Game Store
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
      aria-controls="mainNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="mainNavbar">

      <ul className="navbar-nav ms-auto align-items-lg-center">

        <li className="nav-item">
          <Link to="/" className="nav-link">STORE</Link>
        </li>

        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="/Library"
            role="button"
            data-bs-toggle="dropdown"
          >
            LIBRARY
          </Link>

          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <Link className="dropdown-item" to="/Library">
                All Store
              </Link>
            </li>

            {uniqueCategories.map(item => (
              <li key={item.storeID}>
                <Link
                  className="dropdown-item"
                  to={`/Library/${item.storeID}`}
                >
                  Store ID: {item.storeID}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <form className="d-flex ms-lg-3 mt-3 mt-lg-0 position-relative">
        <div className="input-group">
          <span className="input-group-text bg-dark border-secondary text-muted">
            <i className="fas fa-search"></i>
          </span>

          <input
            className="form-control form-control-dark"
            type="search"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <SearchBox search={search} />
      </form>

    </div>
  </div>
</nav>

  );
}
