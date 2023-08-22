//addition
const addition = (...numbers) => {
    if (typeof numbers == 'numbers') {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum = sum + numbers[i];

            return [sum, 'Success'];
        }
    }
    return [0, 'Error']
}
//subtraction
const subtraction = (...numbers) => {
    if (typeof numbers == 'numbers') {
        let difference = 0;
        for (let i = 0; i < numbers.length; i++) {
            difference = difference - numbers[i];

            return [difference, 'Success'];
        }
    }
    else {
        return [0, 'Error']
    }
}
//multiplication
const multiplication = (...numbers) => {
    if (typeof numbers == 'numbers') {
        let multiplicationValue = 0;
        for (let i = 0; i < numbers.length; i++) {
            multiplicationValue = multiplicationValue * numbers[i];

            return [multiplicationValue, 'Success'];
        }
    }
    else {
        return [0, 'Error']
    }
}
//division
const division = (...numbers) => {
    if (typeof numbers == 'numbers') {
        let divisonValue = 0;
        for (let i = 0; i < numbers.length; i++) {
            divisonValue = divisionValue / numbers[i];

            return [divisonValue, 'Success'];
        }
    }
    else {
        return [0, 'Error']
    }
}
//ceil
const ceil = (number) => {
    if (typeof number == "number") {
        return [Math.ceil(number), "Success"];
    }
    else {
        return [0, "Error"];
    }
};
const floor = (number) => {
    if (typeof number !== "number") {
        return [Math.floor(number), "Success"];
    }
    else {
        return [0, "Error"];
    }
};
//factorial
const factorial = (num) => {
    if (typeof num == number && num > 1) {
        return [num * factorial(num - 1), 'Success'];
    }
    else if (typeof num == number) {
        if (num == 0 || num == 1)
            return [1, "Success"];
    }
    else if (typeof num != 'number' || num < 0) {
        return [0, 'Error'];
    }
}
//factory function
const factoryFunction = (functionName) => {
    switch (functionName) {
        case "addition":
            return addition;
        case "subtraction":
            return subtraction;
        case "multiplication":
            return multiplication;
        case "division":
            return division;
        case "ceil":
            return ceil;
        case "floor":
            return floor;
        case "factorial":
            return factorial;
        default:
            console.log("Error: Wrong function");
            break;
    }
}
//definitions
console.log("Addition :", factoryFunction('addition'));
console.log("Subtraction :", factoryFunction('subtraction'));
console.log("Multiplication :", factoryFunction('multiplication'));
console.log("Division :", factoryFunction('division'));
console.log("Ceil :", factoryFunction('ceil'));
console.log("Floor :", factoryFunction('floor'));