/*Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
* маси тіла людини. Для цього необхідно розділити вагу на
* квадрат висоти.
*
* Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
* бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
* частини може бути кома.
*
* Індекс маси тіла необхідно округлити до однієї цифри після коми.


// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8


function calcBMI(weight, height) {
const weightNum = parseFloat(weight.replace(",", "."));
const heightNum = parseFloat(height.replace(",", "."));
const bmi = weightNum / (heightNum * heightNum);
return bmi.toFixed(1);
}
const bmi = calcBMI("88,3", "1.75");
console.log(bmi)
*/

// Напиши функцію calculateAge(birthYear), яка приймає рік народження і повертає поточний вік користувача.
// Використовуй для цього поточний рік, який можеш отримати за допомогою new Date().getFullYear().
// Перевір роботу функції, вивівши результат у консоль для різних років народження.


// function calculateAge(birthYear){
//     const yearPlayer = new Date().getFullYear();
//     return yearPlayer - birthYear;
// }

// console.log(calculateAge(2000));

/*Завдання 2: Привітання користувача

Напиши функцію greetUser(name), яка приймає ім'я користувача як аргумент і виводить у консоль повідомлення "Привіт, [ім'я]!".
Якщо ім'я не передано або передано пусте значення, виводь повідомлення "Привіт, гість!".*/
/*function greetUser(name){
    if (name && name.trim() !==""){
        console.log(`Привіт, ${name}!`);
    }
    else{
        console.log("Привіт, гість!");
    }
}
greetUser("Valera");
*/

/*Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику: • quantity— перший параметр, число, що містить кількість замовлених дроїдів • pricePerDroid — другий параметр, число, що містить вартість одного дроїда
Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де: • <quantity> — це кількість замовлених дроїдів • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.


function makeTransaction(quantity, pricePerDroid){
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
*/


/*Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • country — перший параметр, рядок, що містить країну доставки • price — другий параметр, число, що містить загальну вартість товару • deliveryFee — третій параметр, число, що містить вартість доставки товару.
Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача: "Shipping to <country> will cost <totalPrice> credits", де: • <country> — це країни доставки • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

function getShippingMessage(country, price, deliveryFee){
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
*/

/*Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • content— перший параметр, ширина контенту • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін • border — третій параметр, значення товщини бордера для кожної зі сторін Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.
Доповни код функції так, щоб вона повертала число —загальну ширину елемента. При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.


function getElementWidth(content, padding, border){
    return parseFloat(content) + 2* parseFloat(padding) + 2 * parseFloat(border);
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
*/
/*
Напиши функцію celsiusToFahrenheit(celsius), яка приймає температуру в градусах Цельсія і повертає температуру в градусах Фаренгейта. Формула для перетворення: 
F=C×1.8+32

function celsiusToFahrenheit(celsius){
    const fahrenheit = celsius*1.8+32;
    return fahrenheit;
}
console.log(celsiusToFahrenheit(25))

Напиши функцію fahrenheitToCelsius(fahrenheit), яка приймає температуру в градусах Фаренгейта і повертає температуру в градусах Цельсія. Формула для перетворення: 
C=(F−32)/1.8


function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}
console.log(fahrenheitToCelsius(77));
*/

/*Напиши функцію checkType(value), яка приймає значення будь-якого типу і виводить у консоль його тип (string, number, boolean, тощо).
Використовуй оператор typeof для перевірки типу даних.

function checkType(value) {
    console.log(typeof value);
}
checkType("20")
*/
/*
function calculateRectangleArea(length, width){
    if (typeof length !=='number' || typeof width !=='number'){
        return 'Помилка: Довжина та ширина повинні бути числами.';
    }
    return length * width;
    
}
console.log(calculateRectangleArea(5, 10));
console.log(calculateRectangleArea("5", 10));
*/


/*Створіть функцію calculateTotalPrice(price, taxRate), яка приймає два аргументи:

price - вартість товару без податку (число).
taxRate - ставка податку в процентах (число).
Функція повинна обчислити та повернути загальну вартість товару з урахуванням податку.
Додаткові умови:

Якщо будь-який з аргументів не є числом, функція повинна повернути повідомлення: "Помилка: Вартість товару та ставка податку повинні бути числами."
Перевірте роботу функції для різних значень вартості товару та ставки податку.


function calculateTotalPrice(price, taxRate){
    if (typeof price !== 'number' || typeof taxRate !== 'number'){
        return 'Помилка: Вартість товару та ставка податку повинні бути числами.';
    }
    return price + taxRate;
}
console.log(calculateTotalPrice(100, 20));
console.log(calculateTotalPrice(150, '10%'));
*/
/*Опис завдання: Створіть функцію checkAccess(age), яка приймає один аргумент:

age - вік користувача (число).
Функція повинна перевірити, чи дорослий користувач (18 років і більше). Якщо користувач дорослий, функція повинна повертати рядок "Доступ дозволено". Якщо користувач неповнолітній, функція повинна повертати рядок "Доступ заборонено".

Додаткові умови:

Якщо аргумент age не є числом, функція повинна повернути повідомлення: "Помилка: Вік повинен бути числом."
Перевірте роботу функції для різних значень віку.


function checkAccess(age){
    if (typeof age !== 'number'){
        return 'Помилка: Вік повинен бути числом.';
    }
    else if (age < 18){
        return 'Вік недостатній для доступу';
    }
    else {
        return 'Доступ дозволено';
    }
}
console.log(checkAccess("8"));
console.log(checkAccess(8));
console.log(checkAccess(22));

Напиши функцію convertCurrency(amount, rate), яка приймає два аргументи:

amount - сума грошей у вихідній валюті.
rate - курс обміну на цільову валюту.
Функція повинна повертати суму грошей у цільовій валюті, округлену до двох знаків після коми.

Умови:
Перевір, чи обидва аргументи є числами. Якщо хоча б один з них не є числом, поверни повідомлення: "Помилка: Сума грошей і курс повинні бути числами."
Якщо обидва аргументи правильні, обчисли значення в цільовій валюті та поверни результат.

function convertCurrency(amount, rate, currencySymbol = ""){
    if (typeof amount !== 'number' || typeof rate !== 'number'){
        return 'Помилка: Сума грошей і курс повинні бути числами.';
    }
    const convertedAmount = (amount * rate).toFixed(2);
    return `${currencySymbol}${convertedAmount}`;
}
console.log(convertCurrency(100, 1.2, "$"));
console.log(convertCurrency(250.5, 0.85, "€"));
console.log(convertCurrency("100", 1.2));
console.log(convertCurrency(100, "1.2"));


Опис: Напиши функцію calculateFinalGrade(assignmentGrade, examGrade), яка приймає оцінку за завдання та оцінку за екзамен і обчислює підсумкову оцінку студента. Підсумкова оцінка розраховується як середнє арифметичне цих двох значень.

Якщо будь-яка з оцінок не є числом, функція повинна повернути повідомлення: "Помилка: Оцінки повинні бути числами."
Якщо оцінки менші за 0 або більші за 100, функція повинна повернути повідомлення: "Помилка: Оцінки повинні бути в діапазоні від 0 до 100."
Якщо всі дані правильні, функція повинна повернути підсумкову оцінку, округлену до найближчого цілого числа.

function calculateFinalGrade(assignmentGrade, examGrade){
    if (typeof assignmentGrade !== 'number' || typeof examGrade !== 'number'){
        return 'Помилка: Оцінки повинні бути числами.';
    }
    else if (assignmentGrade < 0 || assignmentGrade > 100 || examGrade < 0 || examGrade > 100){
        return 'Помилка: Оцінки повинні бути в діапазоні від 0 до 100.';
    }
    const finalGrade = Math.round ((assignmentGrade+examGrade)/2);
    return finalGrade;
}

console.log(calculateFinalGrade(85, 90)); // 88
console.log(calculateFinalGrade(70, 80)); // 75
console.log(calculateFinalGrade("85", 90)); // "Помилка: Оцінки повинні бути числами."
console.log(calculateFinalGrade(110, 95)); // "Помилка: Оцінки повинні бути в діапазоні від 0 до 100."


Напиши функцію calculateAverageSpeed(distance, time), яка приймає два аргументи: дистанцію (у кілометрах) і час (у годинах). Функція повинна повернути середню швидкість, округлену до одного знака після коми.

Якщо будь-який з аргументів не є числом, функція повинна повернути повідомлення: "Помилка: Дистанція і час повинні бути числами."
Якщо дистанція або час менше або дорівнюють нулю, функція повинна повернути повідомлення: "Помилка: Дистанція і час повинні бути більше нуля."
Якщо всі дані правильні, функція повинна повернути середню швидкість, округлену до одного знака після коми.


function calculateAverageSpeed(distance, time){
    if(typeof distance !== 'number' || typeof time !== 'number'){
        return 'Помилка: Дистанція і час повинні бути числами.';
    }
    else if(distance <=0 || time <=0){
        return 'Помилка: Дистанція і час повинні бути більше нуля.';
    }
    const totalAverageSpeed = (distance/time).toFixed(1);
    return parseFloat(totalAverageSpeed);
}

console.log(calculateAverageSpeed(120, 2)); // 60.0
console.log(calculateAverageSpeed(300, 3.5)); // 85.7
console.log(calculateAverageSpeed("120", 2)); // "Помилка: Дистанція і час повинні бути числами."
console.log(calculateAverageSpeed(100, 0)); // "Помилка: Дистанція і час повинні бути більше нуля."

Напиши функцію calculateBMI(weight, height), яка приймає два аргументи: вагу (в кілограмах) і зріст (в метрах). Функція повинна повернути індекс маси тіла (BMI), округлений до одного знака після коми.

Якщо будь-який з аргументів не є числом, функція повинна повернути повідомлення: "Помилка: Вага і зріст повинні бути числами."
Якщо вага або зріст менше або дорівнюють нулю, функція повинна повернути повідомлення: "Помилка: Вага і зріст повинні бути більше нуля."
Якщо всі дані правильні, функція повинна повернути індекс маси тіла, округлений до одного знака після коми.

function calculateBMI(weight, height){
    if(typeof weight !== 'number' || typeof height !== 'number'){
        return 'Помилка: Вага і зріст повинні бути числами.';
    }
    else if(weight<=0 || height<=0){
        return 'Помилка: Вага і зріст повинні бути більше нуля.';
    }
    const calcBMI = weight / (height*height);
    return calcBMI.toFixed(1)
}

console.log(calculateBMI(70, 1.75)); // 22.9
console.log(calculateBMI(85, 1.8)); // 26.2
console.log(calculateBMI("70", 1.75)); // "Помилка: Вага і зріст повинні бути числами."
console.log(calculateBMI(70, 0)); // "Помилка: Вага і зріст повинні бути більше нуля."


function makeTransaction(quantity, pricePerDroid, customerCredits){
    let totalOrderPrice = quantity*pricePerDroid;
    if(totalOrderPrice > customerCredits){
        return 'Insufficient funds!';
    }
    else {
        return `You ordered ${quantity} droids worth ${totalOrderPrice} credits!`;
    }
}
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"


function formatMessage(message, maxLength){
    if(message.length <= maxLength){
        return message;
    }
    else {
        return message.slice(0, maxLength)+ '...';
    }
}
console.log(formatMessage("Hello, world!", 5)); // "Hello..."
console.log(formatMessage("This is a test message.", 20)); // "This is a test message."
console.log(formatMessage("Short message", 20)); // "Short message"


Напишіть функцію truncateString(text, maxLength) яка приймає два параметри: рядок text і число maxLength.

Якщо довжина рядка text менша або дорівнює maxLength, функція повинна повернути рядок без змін.
Якщо довжина рядка перевищує maxLength, функція повинна повернути рядок, обрізаний до maxLength символів, і додати трикрапку "..." 
в кінець. Однак, додайте трикрапку тільки, якщо maxLength більше 3.


function truncateString(text, maxLength){
    if(text.length <= maxLength){
        return text;
    }
    else{
        return text.slice(0, maxLength)+ '...';
    }
}
console.log(truncateString("Hello, world!", 8)); // "Hello, w..."
console.log(truncateString("Hello, world!", 15)); // "Hello, world!"
console.log(truncateString("This is a long text", 10)); // "This is a..."
console.log(truncateString("Short", 10)); // "Short"


Створіть функцію formatPhoneNumber(number) яка приймає рядок number, що містить 10 цифр без пробілів або роздільників.

Функція повинна форматувати номер телефону у вигляді (XXX) XXX-XXXX.
Якщо рядок number не містить 10 цифр, поверніть повідомлення "Invalid phone number".


function formatPhoneNumber(number){
    const regex = /^\d{10}$/;
    if (!regex.test(number)){
        return 'Invalid phone number';
    }
    return `(${number.slice(0,3)}) ${number.slice(3,6)}-${number.slice(6)}`;
}
console.log(formatPhoneNumber("1234567890")); // (123) 456-7890
console.log(formatPhoneNumber("9876543210")); // (987) 654-3210
console.log(formatPhoneNumber("12345"));      // Invalid phone number
console.log(formatPhoneNumber("abcdefghij")); // Invalid phone number
console.log(formatPhoneNumber("12345678901")); // Invalid phone number
*/