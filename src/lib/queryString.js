module.exports.queryString = (obj) => {
  const response = Object.entries(obj).map((item) => {
    return `${item[0]}=${item[1]}`;
  });

  return response.join("&");
};
