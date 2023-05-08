import * as actionTypes from "../../actions/actionTypes";

const INITIAL_STATE: State = {
  loading: false,
  success: [],
  failure: false,
};

export default (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_CONTACTS_ATTEMPT:
      return {
        ...state,
        success: [],
        failure: false,
        loading: true,
      };

    case actionTypes.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        success: action.data,
        failure: false,
        loading: false,
      };

    case actionTypes.GET_CONTACTS_FAIL:
      return {
        ...state,
        success: [],
        failure: true,
        loading: false,
      };
    default:
      return state;
  }
};
