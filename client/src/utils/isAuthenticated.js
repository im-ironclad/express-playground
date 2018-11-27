export default function isAuthenticated() {
  return window.localStorage.getItem('jwtToken') ? true : false;
}