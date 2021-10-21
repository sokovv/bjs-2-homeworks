function compareArrays(arr1, arr2) {
  let result;

  if (arr1.length === arr2.length && arr1.every((elem, i) => elem === arr2[i])) {
    result = true;
  } else {
    result = false;
  }

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((number) => number > 0 && number % 3 === 0)

    .map((number) => number * 10);

  return resultArr; // array
}
