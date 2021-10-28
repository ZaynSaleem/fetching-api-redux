let initialState111 = {
  data: [],
};

const reducer = (state = initialState111, action) => {
  switch (action.type) {
    case "add":
      // console.log(action.payload);
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "DELETE":
      let dupData = [...state.data];
      let newArr = dupData.filter((x) => x.id !== action.payload);
      console.log(newArr);
      console.log(action.payload);
      return {
        ...state,
        data: newArr,
      };
    case "UPDATE":
      //   console.log(action.payload);
      let dup = [...state.data];
      let updateMultiArr = action.payload.arr1;
      console.log(updateMultiArr);
      if (updateMultiArr && updateMultiArr.length) {
        console.log(updateMultiArr);
        for (let i = 0; i < updateMultiArr.length; i++) {
          let u = dup.findIndex((x) => x.id === updateMultiArr[i]);
          // console.log(dup[u].email);
          dup[u].name = action.payload.name;
          dup[u].email = action.payload.email;
          dup[u].num = action.payload.num;
        }
      } else {
        let updated = dup.findIndex((x) => x.id === action.payload.id);
        dup[updated].name = action.payload.name;
        dup[updated].email = action.payload.email;
        dup[updated].num = action.payload.num;
        console.log("sdsa");
      }
      // let dup = [...state.data];

      console.log(dup);
      return {
        ...state,
        data: dup,
      };
    case "DELETE_SELECTED":
      let duplicate = [...state.data];
      let arr = action.payload;
      console.log(arr);

      let updatedArr = duplicate.filter((x) => !arr.includes(x.id));
      console.log(updatedArr);

      return {
        ...state,
        data: updatedArr,
      };
    default:
      return state;
  }
};

export default reducer;
