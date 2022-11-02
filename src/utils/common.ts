export function isTokenExpired(expiresAt?: number | null) {
  if (!expiresAt) {
    return true;
  }
  const currentTime = new Date().getTime();
  const tokenExpires = new Date(expiresAt).getTime();
  return currentTime > tokenExpires;
}
