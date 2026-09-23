// 1)Even or odd

const check = (num) => {
    if (num % 2 === 0) {
        return "Even";
    }
    return "Odd";

}

console.log(check(7));

// 2) result evaluator

const result = (mark) => {

    if (mark < 0 || mark > 100) {
        console.log("Invalid marks")
        return null;
    }
    else if (mark >= 50) {
        return "Pass"
    }
    return "Fail"
}
let finalResult = result(40)
console.log(finalResult);

// 3)Maximum finder

const findMax = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
        return num1
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2
    }
    return num3
}

let largestNumber = findMax(9, 10, 20)
console.log(largestNumber)

// 4) Accumulator

const sumToN = (n) => {

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumToN(10));

// 5) Multiplication table generator

const printTable = (num) => {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
};

printTable(3);

// 6) Digit Counter

const countDigits = (num) => {
    if(num === 0) {
        return 1;
    }
    let count = 0;

    while (num > 0) {
        count++;
        num = Math.floor(num / 10)
    }
    return count;
};
let result = countDigits(1234)
console.log(result);

// 7) Number reverser

const reverseNumber = (num) => {
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reverse;
};

let result = reverseNumber(123456)
console.log(result);

// 8) Factorial Engine

const factorial = (n) => {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;

};
console.log(factorial(5));

// 9) Prime validator

const isPrime = (num) => {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
        
    }
    return true;
};

console.log(isPrime(13));

// 10) Pattern Builder

const printPattern = (num) => {

    for (let i = 1; i <= num; i++) {
        let stars = "";

        for (let j = 1; j <= i; j++) {
            stars = stars + "*"
        }
        console.log(stars);
    }

};
printPattern(5)


