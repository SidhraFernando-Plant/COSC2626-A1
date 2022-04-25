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

export default {
  logIn,
  getUser,
  logOut,
};
