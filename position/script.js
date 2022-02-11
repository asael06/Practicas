const arr = [1, 2, 3, 4, 5, 6];

const showArry = () => {
  let tempArray = arr.forEach((number, index) => number);
  let tempArray2 = arr.filter((number, index) => number % 2 === 0);

  console.log(tempArray2);
};

/*
  forEach
  map
  filter
  some
  every
*/

showArry();
