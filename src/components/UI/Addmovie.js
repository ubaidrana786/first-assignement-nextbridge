import React, { useState,useEffect } from "react";
import { useFormik } from "formik";
import "./Addmovie.css";
import * as yup from "yup";
import axios from "axios";

export function Addmovie() {
  const [moviesarray, setMoviesarray] = useState([]);
  const [selectedIndex, setselectedIndex] = useState(null);
  const [selectedMovie, setselectedMovie] = useState(null);
  const [formToggle, setformToggle] = useState(false);

  let schema = yup.object().shape({
    title: yup.string().required(),
    discription: yup.string().required(),
  });

  const formik = useFormik({
    initialValues:
      selectedMovie !== null
        ? selectedMovie
        : {
            title: "",
            discription: "",
          },

    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: (values) => {
      addDatafun(values);
    },
  });

  const HandleToggle = () => {
    setformToggle(!formToggle);
  };

  const OnEditfun = (index) => {
    setselectedIndex(index);
    setselectedMovie(moviesarray[index]);
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

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
setMoviesarray(res.data)
    })
  })
  return (
    <div>
      <div className="row" style={{ justifyContent: "center" }}>
        {formToggle == true ? (
          <div className="col-md-8 card p-3" style={{ maxHeight: "300px" }}>
            <form onSubmit={formik.handleSubmit} className="setform">
              <div className="mb-3">
                <input
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  placeholder="  Movie Title"
                  type="text"
                  className="form-control"
                  name="title"
                />
               {formik.errors.title && <p className="showerror">{formik.errors.title}</p>}
              </div>
              <div className="mb-3">
                <textarea
                  value={formik.values.discription}
                  onChange={formik.handleChange}
                  rows="1"
                  type="text"
                  placeholder="Discription"
                  name="discription"
                  className="form-control"
                />
               {formik.errors.description && <p className="showerror">{formik.errors.description}</p>}
              </div>

              <button type="submit" className="btn btn-md">
                {selectedIndex !== null ? "Update" : "Add"}
              </button>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <div className="row" style={{ justifyContent: "center" }}>
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

            <table className="table">
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
                      <td>{element.body}</td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => OnEditfun(index)}
                        >
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
