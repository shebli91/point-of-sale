export function checkToken() {
  const tokenData = JSON.parse(localStorage.getItem("token"));
  if (!tokenData) {
    return null;
  }

  const { token, expiryTime } = tokenData;

  if (new Date().getTime() > expiryTime) {
    localStorage.removeItem("token");
    return null;
  }

  return token;
}
