import React, { useState } from "react";
import { MovieList } from "./MovieList";
import { useFormik } from "formik";

export function Addmovie() {
  const [moviesarray, setMoviesarray] = useState([]);
  const [selectedIndex, setselectedIndex] = useState(null);
  const [formToggle, setformToggle] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      discription: "",
    },
    onSubmit: (values) => {
      addDatafun(values);
    },
  });

  const HandleToggle = () => {
    setformToggle(!formToggle);
  };

  const OnEditfun = (index) => {
    setselectedIndex(index);
    //   setTitle(moviesarray[index].title);
    //   setDiscription(moviesarray[index].discription);
  };

  const addDatafun = (values) => {
    let dummy = [...moviesarray];
    if (selectedIndex !== null) {
      dummy[selectedIndex].title = values.title;
      dummy[selectedIndex].discription = values.discription;
    } else {
      dummy.push({
        title: values.title,
        discription: values.discription,
      });
    }
    formik.resetForm();
    setMoviesarray(dummy);
  };
  const OnDletefun = (index) => {
    let dummy = [...moviesarray];
    dummy.splice(index, 1);
    setMoviesarray(dummy);
  };
  return (
    <div>
      <div className="row" style={{justifyContent:"center"}}>
        
          {formToggle == true ? (
            <div className="col-md-6 card p-5" style={{ maxHeight: "400px" }}>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Movie Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Discription
                </label>
                <textarea
                  type="text"
                  name="discription"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.discription}
                />
              </div>

              <button type="submit" className="btn ">
                {selectedIndex !== null ? "Update" : "Add"}
              </button>
            </form>
            </div>
          ) : (
            ""
          )}

       

      </div>
    <div>
      <div className="row" style={{justifyContent:"center"}}>
      <div className="col-md-8">
      <div className="row mb-5 mt-5">
        <div className="col-md-6">
        <h4 className="">Movies List</h4>
          </div>
        <div className="col-md-6">
        <button className="btn btn-md" onClick={HandleToggle}>
            +Add Movies
          </button>
          </div>
        </div>
         
          
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Movie Name</th>
                <th scope="col">Movie Discription</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            {moviesarray.map((element, index) => {
              return (
                <tbody>
                  <tr>
                    <td key={index}>{index}</td>
                    <td>{element.title}</td>
                    <td>{element.discription}</td>
                    <td>
                      <button className="btn" onClick={() => OnEditfun(index)}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => OnDletefun(index)}
                      >
                        Dlete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>

        </div>
        
        </div>
   
    </div>
    </div>
  );
}
