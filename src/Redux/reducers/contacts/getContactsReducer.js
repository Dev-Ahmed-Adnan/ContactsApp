const INITIAL_STATE = {
  loading: false,
  success: [],
  failure: {},
  next: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS_ATTEMPT":
      return {
        ...state,
        success: {},
        failure: false,
        loading: true,
        next: null,
      };

    case "GET_CONTACTS_SUCCESS":
      return {
        ...state,
        success: action.data,
        failure: {},
        loading: false,
        next: action.next,
      };

    case "GET_CONTACTS_FAIL":
      return {
        ...state,
        success: {},
        failure: true,
        loading: false,
        next: null,
      };
    default:
      return state;
  }
};
