export default (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: false,
        
      };
    case "LOAD_USER":
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
      };
      case "SIGN_OUT":
        return {
          ...state,
          isAuthenticated: false,
        };
    default:
      return state;
  }
};
