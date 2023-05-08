import * as actionTypes from "../../actionTypes";

export const selectedContactsAction = (item: Contact, actionType: string) => {
  return async (dispatch: DispatchType) => {
    try {
      if (actionType == "add") {
        dispatch({ type: actionTypes.ADD_CONTACT, data: item });
      } else {
        dispatch({ type: actionTypes.REMOVE_CONTACT, data: item });
      }
    } catch (err) {
      if (err) {
        console.log("Select Contact Error", { err });
        dispatch({
          type: actionTypes.SELECT_CONTACT_FAIL,
          data: err.response.data,
        });
      }
    }
  };
};
