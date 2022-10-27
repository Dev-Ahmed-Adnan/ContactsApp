import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { app } from "../../../configs/firebaseConfig";
const auth = getAuth(app);

//* Sign Up Action
export const signUpAction = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: "SIGNUP_ATTEMPT" });
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("SIGN up resopnse ");
        // Signed in
        const user = userCredential.user;
        console.log("SIGN up resopnse ===> ", JSON.stringify(user));
        AsyncStorage.setItem("userData", JSON.stringify(user));
        dispatch({ type: "SIGNUP_SUCCESS", data: user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("SIGN up error ===> ", errorCode, errorMessage);
        dispatch({ type: "SIGNUP_FAIL", data: errorMessage });
      });
  };
};

//* Sign In Action
export const signInAction = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: "SIGNIN_ATTEMPT" });
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("SIGN in resopnse ===> ", JSON.stringify(user));
        await AsyncStorage.setItem("userData", JSON.stringify(user));
        dispatch({ type: "SIGNIN_SUCCESS", data: user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("SIGN in error ===> ", errorCode, errorMessage);
        dispatch({ type: "SIGNIN_FAIL", data: errorMessage });
      });
  };
};

//* Check User from Async Storage
export const checkUserAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "CHECK_USER_ATTEMPT" });
      const user = await AsyncStorage.getItem("userData");
      console.log("check user success ===> ", user);
      dispatch({
        type: "CHECK_USER_SUCCESS",
        data: user ? JSON.parse(user) : false,
      });
    } catch (error) {
      console.log("check user error ===> ", error);
      dispatch({ type: "CHECK_USER_FAILURE", data: error });
    }
  };
};

//* Logout Action
export const logoutAction = () => {
  return async (dispatch) => {
    dispatch({ type: "LOGOUT_ATTEMPT" });
    await signOut(auth)
      .then(() => {
        console.log("Logout success");
        AsyncStorage.removeItem("userData");
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Logout error ===> ", errorCode, errorMessage);
        dispatch({ type: "LOGOUT_FAIL", data: errorMessage });
      });
  };
};
