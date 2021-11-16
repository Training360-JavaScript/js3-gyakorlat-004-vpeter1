const checkVisa = (string = '') => {
  const pattern = /^([4]\d{3})(\d{4}){2}\d{4}$/;
  return string.match(pattern) ? true : false;
}
export default checkVisa;