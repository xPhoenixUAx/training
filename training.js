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