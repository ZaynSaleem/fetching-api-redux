import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodo,
  deleteSelected,
  dltTodo,
  updateTodo,
} from "../../store/actions";
import { useSelector } from "react-redux";

const Index = () => {
  // let arr = [];

  const Data = useSelector((state) => state?.todo.data);
  // console.log(Data);
  // console.log(Data.lengt);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [uptId, setUptId] = useState("");
  const [bool, setBool] = useState(false);
  const [arr, setArr] = useState([]);

  const dispatch = useDispatch();
  const add = () => {
    if (name === "" || email === "" || num === "") {
      alert("You must Write something");
      return false;
    } else {
      let id = Math.ceil(Math.random() * 1000);
      dispatch(addTodo(id, name, email, num));
      setName("");
      setEmail("");
      setNum("");
    }
  };
  const del = (id) => {
    dispatch(dltTodo(id));
  };

  const edit = (id) => {
    console.log(id);
    setBool(true);
    let data = Data.filter((x) => x.id === id);
    if (data && data.length) {
      data.map((item) => {
        setUptId(item.id);
        setName(item.name);
        setEmail(item.email);
        setNum(item.num);
      });
    } else {
      alert("No Data !");
    }
  };

  const update = () => {
    if (name === "" || email === "" || num === "") {
      alert("You must Write something");
      return false;
    } else {
      console.log(arr);
      dispatch(updateTodo(uptId, name, email, num, arr));
      setName("");
      setEmail("");
      setNum("");
      setBool(false);
    }
  };

  const handleChange = (event) => {
    let valueCheck = event.target.value;
    let chcked = event.target.checked;
    let dup = [...arr];
    if (chcked) {
      dup.push(+valueCheck);
      setArr(dup);
    } else {
      let updated = dup.filter((item) => !valueCheck.includes(item));
      setArr(updated);
    }
  };

  const dltSelected = () => {
    dispatch(deleteSelected(arr));
  };
  return (
    <div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              Username
            </span>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              Email
            </span>
            <input
              type="Email"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
      </div>{" "}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              Number
            </span>
            <input
              type="number"
              className="form-control"
              value={num}
              onChange={(event) => setNum(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          {bool === false ? (
            <>
              <button className="btn btn-primary" onClick={add}>
                Add
              </button>
              <button
                className="btn btn-danger float-end"
                onClick={dltSelected}
              >
                Delete Selected
              </button>
            </>
          ) : (
            <div className="btn btn-primary" onClick={update}>
              Update
            </div>
          )}
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" className="form-check-input mt-2" />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.length ? (
            Data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input
                      className="form-check-input mt-2"
                      value={item.id}
                      onChange={handleChange}
                      type="checkbox"
                 
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.num}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => del(item.id)}
                    >
                      delete
                    </button>

                    <button
                      className="btn btn-primary ms-2"
                      onClick={() => edit(item.id)}
                    >
                      EDIT
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>No Data</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
