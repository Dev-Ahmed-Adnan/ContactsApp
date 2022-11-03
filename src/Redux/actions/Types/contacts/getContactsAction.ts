import * as Contacts from "expo-contacts";
import * as actionTypes from "../../actionTypes";

export const getContactsAction = () => {
  return async (dispatch: DispatchType) => {
    dispatch({ type: actionTypes.GET_CONTACTS_ATTEMPT });

    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          // const contact = data[0];
          // console.log(contact);
          dispatch({
            type: actionTypes.GET_CONTACTS_SUCCESS,
            data,
          });
        }
      }
    } catch (err) {
      if (err) {
        console.log("Get Contacts Error", { err });
        dispatch({
          type: actionTypes.GET_CONTACTS_FAIL,
          data: err.response.data,
        });
      }
    }
  };
};
