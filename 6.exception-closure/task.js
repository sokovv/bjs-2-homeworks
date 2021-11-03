function parseCount(value) {
    if (isNaN(Number.parseInt(value)) === true) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(value);
}

function validateCount(value) {
    try {
        parseCount(value);
    } catch (e) {
        return e;
    }
    return Number.parseInt(value);

}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((this.a + this.b) < this.c || (this.b + this.c) < this.a || (this.c + this.a) < this.b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }
    getArea() {
        let p = (this.a + this.b + this.c) * 0.5; //Вычисление полупериметра
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