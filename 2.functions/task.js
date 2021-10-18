// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };

}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = func(arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i += 1) {
    if (max < func(arrOfArr[i])) {
      max = func(arrOfArr[i]);
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let dif;
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i += 1) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  dif = max - min;

  return dif;
}
