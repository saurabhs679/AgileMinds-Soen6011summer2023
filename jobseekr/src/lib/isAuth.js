const isAuth = () => {
  return localStorage.getItem("loggedUser");
};

export const userType = () => {
  return localStorage.getItem("type");
};

export default isAuth;
