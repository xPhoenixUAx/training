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