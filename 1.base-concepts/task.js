function solveEquation(a, b, c) {
  "use strict";
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d === 0) {
    arr.push(-b / (2 * a));
  }
  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let totalAmount;
  let interestRate = parseInt(percent) / 100;
  let initialPayment = parseInt(contribution);
  let totalCost = parseInt(amount);
  let date1 = new Date();
  let date2 = date;

  if (Number.isNaN(interestRate)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (Number.isNaN(initialPayment)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (Number.isNaN(totalCost)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let loanBody = totalCost - initialPayment;
  let loanTerm = (date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth());
  let p = interestRate / 12;
  let monthlyLoanPayment = loanBody * (p + p / (((1 + p) ** loanTerm) - 1))

  totalAmount = +(monthlyLoanPayment * loanTerm).toFixed(2);
  console.log(loanTerm)
  console.log(contribution)
  console.log(amount)
  console.log(monthlyLoanPayment)
  console.log(totalAmount)
  return totalAmount;
}
