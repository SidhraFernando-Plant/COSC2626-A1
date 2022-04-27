// Functions to get/update info about the current user stored in localStorage

const CURRENT_USER_KEY = 'currentUser';

function logIn(username) {
  localStorage.setItem(CURRENT_USER_KEY, username);
}

function getUser() {
  return localStorage.getItem(CURRENT_USER_KEY);
}

function logOut() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

function isLoggedIn() {
  return localStorage.getItem(CURRENT_USER_KEY) !== null;
}

export default {
  logIn,
  getUser,
  logOut,
  isLoggedIn,
};
