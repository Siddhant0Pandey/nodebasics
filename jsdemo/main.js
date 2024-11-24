let arr = [1, 2, 3, 4, 5];

const result = arr.forEach((val) => {
  console.log(val + "Hello");
});

const filterResult = arr.filter((val) => val < 4);
console.log("filter result: ", filterResult);

const mapResult = arr.map((val) => val * 2);
console.log("map result: ", mapResult);

console.log(mapResult.indexOf(11));
