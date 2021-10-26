function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (mark1, mark2, mark3, ...rest) {
  this.marks = [mark1, mark2, mark3, ...rest];
}

Student.prototype.getAverage = function () {
  let sum;
  sum = 0;

  for (let i = 0; i < this.marks.length; i += 1) {
    sum += this.marks[i];
  }
  return +(sum / this.marks.length);
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}

