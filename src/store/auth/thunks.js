import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlide";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, errorMessage } = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, displayName, email }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });

    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};


export const startLogout = () => {
  return async(dispatch) =>{
     await logoutFirebase()

     dispatch( logout())
  }
}