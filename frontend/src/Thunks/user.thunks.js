import { login1API, login2API, logoutAPI,registerAPI } from "../API/user.api";
import { login1Success, login1Failure,login2Success,logoutSuccess,logoutFailure,registrationSuccess,registrationFailure } from "../features/user/userSlice";

export const login1Thunk = (email) => async(dispatch) => {
  if (!email) {
    dispatch(login1Failure('Please provide an email address.'));
  }else{
    try {
      const userData = await login1API(email);
      dispatch(login1Success(userData.data));
      // console.log(userData);
      return userData;
    } catch (error) {
      dispatch(login1Failure('User not found')); // Handle specific error message based on your needs
    }
  }
};

export const login2Thunk = (email,password) => async(dispatch) => {
    const userData = await login2API(email,password);
    dispatch(login2Success(userData.data));
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

export const logoutThunk = () => async(dispatch) => {
  try {
    const response = await logoutAPI();
    dispatch(logoutSuccess(response.data));
    return response;
  } catch (error) {
    dispatch(logoutFailure(error.message));
  }
}