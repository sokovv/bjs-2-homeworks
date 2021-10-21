function compareArrays(arr1, arr2) {

  return arr1.length === arr2.length && arr1.every((elem, i) => elem === arr2[i])

}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((number) => number > 0 && number % 3 === 0)

    .map((number) => number * 10);

  return resultArr; // array
}
