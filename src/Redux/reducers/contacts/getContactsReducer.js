const INITIAL_STATE = {
  loading: true,
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
        loading: false,
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
        loading: true,
        next: null,
      };
    default:
      return state;
  }
};
