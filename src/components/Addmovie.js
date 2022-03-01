import React, { useState } from "react";
import { MovieList } from "./MovieList";

export function Addmovie() {
  const [title, setTitle] = useState();
  const [discription, setDiscription] = useState();
  const [moviesarray, setMoviesarray] = useState([]);
  const [selectedIndex, setselectedIndex] = useState(null);

  const OnEditfun = (index) => {
    setselectedIndex(index);
    setTitle(moviesarray[index].title);
    setDiscription(moviesarray[index].discription);
  };

  const OnDletefun = (index) => {
    moviesarray.splice(index, 1);
  console.log(moviesarray)
  };

  const addDatafun = (e) => {
    e.preventDefault();
    let dummy = [...moviesarray];
    if (selectedIndex !== null) {
      dummy[selectedIndex].title = title;
      dummy[selectedIndex].discription = discription;
    } else {
      dummy.push({
        title: title,
        discription: discription,
      });
    }

    setMoviesarray(dummy);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-6 card p-5" style={{ maxHeight: "400px" }}>
          <form onSubmit={addDatafun}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Movie Title
              </label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Discription
              </label>
              <textarea
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
              />
            </div>

            <button type="submit" className="btn ">
              {selectedIndex !== null ? "Update" : "Add"}
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h4 className="text-center">Movies List</h4>
          <MovieList
            DummyData={moviesarray}
            Editfun={OnEditfun}
            Dletefun={OnDletefun}
          />
        </div>
      </div>
    </div>
  );
}
