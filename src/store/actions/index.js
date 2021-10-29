export const addTodo = (id, name, email, num, key) => {
  // console.log(name,email,num);
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: { id, name, email, num, key },
    });
  };
};

export const dltTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };
};

export const updateTodo = (id, name, email, num, arr1) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE",
      payload: { id, name, email, num, arr1 },
    });
  };
};

export const deleteSelected = (arr) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_SELECTED",
      payload: arr,
    });
  };
};
