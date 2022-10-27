const INITIAL_STATE = {
  loading: true,
  success: false,

  email: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //* REGISTER REDUCER
    case "SIGNUP_ATTEMPT":
      return {
        ...state,
        success: false,
        loading: true,
        email: null,
        password: null,
      };

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        success: true,
        loading: false,
        email: action.data,
      };

    case "SIGNUP_FAIL":
      return {
        ...state,
        success: false,
        loading: false,
        email: null,
        password: null,
      };

    //* SIGN IN REDUCER
    case "SIGNIN_ATTEMPT":
      return {
        ...state,
        success: false,
        loading: true,
        email: null,
      };

    case "SIGNIN_SUCCESS":
      return {
        ...state,
        success: true,
        loading: false,
        email: action.data,
      };

    case "SIGNIN_FAIL":
      return {
        ...state,
        success: false,
        loading: false,
        email: null,
      };

    //* CHCEK USER REDUCER
    case "CHECK_USER_ATTEMPT":
      return {
        ...state,
        success: false,
        loading: true,
        email: null,
      };

    case "CHECK_USER_SUCCESS":
      return {
        ...state,
        success: action.data ? true : false,
        loading: false,
        email: action.data,
      };

    case "CHECK_USER_FAIL":
      return {
        ...state,
        success: false,
        loading: false,
        email: null,
      };

    //* LOGOUT REDUCER
    case "LOGOUT_ATTEMPT":
      return {
        ...state,
        success: true,
        loading: true,
        email: null,
      };

    case "LOGOUT_SUCCESS":
      return {
        ...state,
        success: false,
        loading: false,
        email: null,
      };

    case "LOGOUT_FAIL":
      return {
        ...state,
        success: true,
        loading: false,
        email: null,
      };
    default:
      return state;
  }
};
