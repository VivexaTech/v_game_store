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
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">

        <Link className="navbar-brand" to="/">
          <i className="fas fa-ghost me-2"></i>V Game Store
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link to="/" className="nav-link pe-3">STORE</Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle pe-3"
                to="/Library"
                data-bs-toggle="dropdown"
              >
                LIBRARY
              </Link>

              <ul className="dropdown-menu">
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

          <div className="position-relative ms-3" style={{ width: "300px" }}>
            <form className="d-flex search-form">
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
                /><SearchBox search={search} />
              </div>
            </form>
          </div>

        </div>
      </div>
    </nav>
  );
}
