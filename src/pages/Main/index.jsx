import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCrimes, fetchForce, fetchAllCrime } from "../../store/actions";
import { useSelector } from "react-redux";

const Index = () => {
  const [crimeUrl, setCrimeUrl] = useState("");
  const [forceUrl, setForceUrl] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrimes());
    dispatch(fetchForce());
  }, []);

  const crimeCat = useSelector((state) => state?.todo.crimeCat);
  const force = useSelector((state) => state?.todo.force);

  const search = () => {
    dispatch(fetchAllCrime(crimeUrl, forceUrl));
  };
  const crimeAll = useSelector((state) => state?.todo.crimeAll);

  let count = 0;
  return (
    <div>
      <div className="row mt-4 justify-content-md-center">
        <div className="col-md-6">
          <select
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            onChange={(event) => setCrimeUrl(event.target.value)}
          >
            <option selected>Select Crime Cat</option>
            {crimeCat && crimeCat.length ? (
              crimeCat.map((item, index) => {
                return (
                  <>
                    <option value={item.url}>{item.name}</option>
                  </>
                );
              })
            ) : (
              <>
                <option value="1">LOADING</option>
              </>
            )}
          </select>
        </div>
      </div>
      <div className="row mt-4 justify-content-md-center">
        <div className="col-md-6">
          <select
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            onChange={(event) => setForceUrl(event.target.value)}
          >
            <option selected>Select Force</option>
            {force && force.length ? (
              force.map((item, index) => {
                return (
                  <>
                    <option value={item.id}>{item.name}</option>
                  </>
                );
              })
            ) : (
              <>
                <option>LOADING</option>
              </>
            )}
          </select>
        </div>
      </div>{" "}
      <div className="row mt-4 justify-content-md-end">
        <div className="col-md-4">
          <button className="btn btn-success" onClick={search}>
            SEARCH
          </button>
        </div>
      </div>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>S.NO</th>
            <th scope="col">ID</th>
            <th scope="col">CATEGORY</th>
            <th scope="col">OUTCOME-STATUS-CATEGORY</th>
            <th scope="col">DATE</th>
          </tr>
        </thead>
        <tbody>
          {!crimeAll.length ? (
            <tr>
              <td>NO DATA</td>
            </tr>
          ) : (
            crimeAll.map((item, index) => {
              return (
                <tr>
                  <td>{++count}</td>
                  <td>{item.id}</td>
                  <td>{item.category}</td>
                  <td>
                    {!item.outcome_status ? "" : item.outcome_status.category}
                  </td>
                  <td>
                    {!item.outcome_status ? "" : item.outcome_status.date}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
