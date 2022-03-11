import React, { useState } from "react";
import { useFormik } from "formik";
import "./Addmovie.css";
import * as yup from "yup";

export function Addmovie() {
  const [moviesarray, setMoviesarray] = useState([]);
  const [selectedIndex, setselectedIndex] = useState(null);
  const [formToggle, setformToggle] = useState(false);

  let schema = yup.object().shape({
    title: yup.string().required(),
    discription: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      discription: "",
    },
    validationSchema: schema,
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
      <div className="row" style={{ justifyContent: "center" }}>
        {formToggle == true ? (
          <div className="col-md-8 card p-3" style={{ maxHeight: "400px" }}>
            <form onSubmit={formik.handleSubmit} className="setform">
              <div className="mb-3">
                <input
                  placeholder="  Movie Title"
                  type="text"
                  className="form-control"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
                {formik.errors.title && (
                  <p className="showerror">Title is required</p>
                )}
              </div>
              <div className="mb-3">
                <textarea
                  rows="1"
                  type="text"
                  placeholder="Discription"
                  name="discription"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.discription}
                />
                {formik.errors.discription && (
                  <p className="showerror">discription is required</p>
                )}
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
                      <td>{element.discription}</td>
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
