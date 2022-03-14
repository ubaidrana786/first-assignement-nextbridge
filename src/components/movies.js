import React, { useContext } from "react";
import { Addmovie } from "../components/UI/Addmovie";

export function Movies() {
  return (
    <div className="container mt-5">
      {" "}
      <Addmovie />
    </div>
  );
}

export default Movies;
