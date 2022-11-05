import * as actionTypes from "../../actions/actionTypes";

const INITIAL_STATE: State = {
  loading: false,
  success: [],
  failure: false,
};

export default (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      return {
        ...state,
        success: state.success.concat(action.data),
        failure: false,
        loading: false,
      };

    case actionTypes.REMOVE_CONTACT:
      return {
        ...state,
        success: state.success.filter(
          (contact) => contact.id !== action.data.id
        ),
        failure: false,
        loading: false,
      };

    case actionTypes.SELECT_CONTACT_FAIL:
      return {
        ...state,
        success: state.success,
        failure: true,
        loading: false,
      };
    default:
      return state;
  }
};
