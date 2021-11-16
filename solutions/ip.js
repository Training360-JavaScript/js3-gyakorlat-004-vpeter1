const checkIP = (string = '') => {
  const pattern = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/;
  return string.match(pattern) ? true : false;
}
export default checkIP;