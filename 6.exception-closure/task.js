function parseCount(value) {
    if (isNaN(Number.parseInt(value))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(value);
}

function validateCount(value) {
    try {
        parseCount(value);
        return Number.parseInt(value);
    } catch (e) {
        return e;
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (b + c) < a || (c + a) < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }
    getArea() {
        let p = this.getPerimeter() / 2; //Вычисление полупериметра
        return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3); //Вычисление площади
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getPerimeter() {
                return "Ошибка! Треугольник не существует"
            },
            getArea() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}