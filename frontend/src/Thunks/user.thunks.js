import { login1API, login2API, registerAPI } from "../API/user.api";
import { loginSuccess, loginFailure,registrationSuccess,registrationFailure } from "../features/user/userSlice";

export const login1Thunk = (email) => async(dispatch) => {
  if (!email) {
    dispatch(loginFailure('Please provide an email address.'));
  }else{
    try {
      const userData = await login1API(email);
      dispatch(loginSuccess(userData.data));
      // console.log(userData);
      return userData;
    } catch (error) {
      dispatch(loginFailure('User not found')); // Handle specific error message based on your needs
    }
  }
};

export const login2Thunk = (email,password) => async(dispatch) => {
    const userData = await login2API(email,password);
    dispatch(loginSuccess(userData.data));
    return userData;
};

export const registerThunk = (fullName,email,password,confPassword) => async(dispatch) => {
  try {
    if (!fullName || !email || !password || !confPassword) {
      throw new Error('Please provide all required information.');
    }
    if (password !== confPassword) {
        throw new Error('Passwords do not match.');
    }

    const response = await registerAPI(fullName,email,password);
    dispatch(registrationSuccess(response.data))
    return response;

  } catch (error) {
    dispatch(registrationFailure(error.message))
  }
}