import axios from "axios";

export const fetchCrimes = () => {
  return (dispatch) => {
    axios
      .get("https://data.police.uk/api/crime-categories")
      .then((response) => {
        // console.log(response.data , "action");
        dispatch({
          type: "SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
      });
  };
};

export const fetchForce = () => {
  return (dispatch) => {
    axios
      .get("https://data.police.uk/api/forces")
      .then((response) => {
        // console.log(response.data , "action");
        dispatch({
          type: "FORCE",
          payload: response.data,
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
      });
  };
};

export const fetchAllCrime = (crime,force) => {
  return (dispatch) => {
    axios
      .get(`https://data.police.uk/api/crimes-no-location?category=${crime}&force=${force}`)
      .then((response) => {
        // console.log(response.data , "action");
        dispatch({
          type: "FETCH_CRIME",
          payload: response.data,
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
      });
  };
};


// export const crimeSuccess = (crimesCat) => {
//   return (dispatch) => {
//     dispatch({
//       type: "DELETE",
//       payload: id,
//     });
//   };
// };

// export const updateTodo = (id, name, email, num, arr1) => {
//   return (dispatch) => {
//     dispatch({
//       type: "UPDATE",
//       payload: { id, name, email, num, arr1 },
//     });
//   };
// };

// export const deleteSelected = (arr) => {
//   return (dispatch) => {
//     dispatch({
//       type: "DELETE_SELECTED",
//       payload: arr,
//     });
//   };
// };
