import React from "react";
import {Link} from "react-router-dom"
export function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#4E4C97"}}>
      <Link to="/" className="navbar-brand text-white">CRUD</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/login" className="nav-link text-white">
             Login <span className="sr-only">(current)</span>
            </Link>
          </li>

        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
