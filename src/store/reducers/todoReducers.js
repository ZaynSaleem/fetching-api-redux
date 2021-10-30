let initialState111 = {
  crimeCat: [],
  force: [],
  crimeAll: [],
};

const reducer = (state = initialState111, action) => {
  switch (action.type) {
    case "SUCCESS":
      // console.log(action.payload , "reducer");
      return {
        ...state,
        crimeCat: action.payload,
      };

    case "FORCE":
      // console.log(action.payload , "reducer force");
      return {
        ...state,
        force: action.payload,
      };
    case "FETCH_CRIME":
      console.log(action.payload, "action");
      return {
        ...state,
        crimeAll: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
