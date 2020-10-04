//export const initialState = {
//  user: null,
//  isAuthenticated: false,
//};

//export const actionTypes = {
//  SET_USER: "SET_USER",
//};

//const reducer = (state, action) => {
//  switch (action.type) {
//    case actionTypes.SET_USER:
//      return {
//        ...state,
//        user: action.user,
//        isAuthenticated: true,
//      };
//
//    default:
//      return state;
//  }
//};
//
//export default reducer;

export default (state, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log(
        "this is the action payload getting dispatched : ",
        action.payload
      );
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        isAuthenticated: false,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
