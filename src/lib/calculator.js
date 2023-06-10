module.exports.sum = (value1, value2) => {
  let num1 = parseInt(value1, 10);
  let num2 = parseInt(value2, 10);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new Error('please check the value passed in input');
  }

  return num1 + num2;
};
