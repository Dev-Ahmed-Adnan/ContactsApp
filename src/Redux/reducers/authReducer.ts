import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE: State = {
  loading: true,
  success: [],
  loggedIn: false,
  failure: false,
  email: null,
};

export default (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    //* REGISTER REDUCER
    case actionTypes.SIGNUP_ATTEMPT:
      return {
        ...state,
        loggedIn: false,
        loading: true,
        failure: false,
        email: null,
      };

    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        failure: false,
        email: action.data,
      };

    case actionTypes.SIGNUP_FAIL:
      return {
        ...state,
        loggedIn: false,
        loading: false,
        email: null,
        failure: true,
      };

    //* SIGN IN REDUCER
    case actionTypes.SIGNIN_ATTEMPT:
      return {
        ...state,
        loggedIn: false,
        failure: false,
        loading: true,
        email: null,
      };

    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        failure: false,
        loading: false,
        email: action.data,
      };

    case actionTypes.SIGNIN_FAIL:
      return {
        ...state,
        loggedIn: false,
        failure: true,
        loading: false,
        email: null,
      };

    //* CHCEK USER REDUCER
    case actionTypes.CHECK_USER_ATTEMPT:
      return {
        ...state,
        loggedIn: false,
        failure: false,
        loading: true,
        email: null,
      };

    case actionTypes.CHECK_USER_SUCCESS:
      return {
        ...state,
        loggedIn: action.data ? true : false,
        failure: false,
        loading: false,
        email: action.data,
      };

    case actionTypes.CHECK_USER_FAIL:
      return {
        ...state,
        loggedIn: false,
        failure: true,
        loading: false,
        email: null,
      };

    //* LOGOUT REDUCER
    case actionTypes.LOGOUT_ATTEMPT:
      return {
        ...state,
        loggedIn: true,
        failure: false,
        loading: true,
        email: null,
      };

    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        failure: false,
        loading: false,
        email: null,
      };

    case actionTypes.LOGOUT_FAIL:
      return {
        ...state,
        loggedIn: true,
        failure: true,
        loading: false,
        email: null,
      };
    default:
      return state;
  }
};
