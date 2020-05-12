// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7;
let b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

let c = 7;
let d = 9;
document.querySelector('.out-2').textContent = c / d;

// document.querySelector('.out-2').textContent = 

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3;
let f = 5;
document.querySelector('.out-3').textContent = e + f;

// document.querySelector('.out-3').textContent = 

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = '3';
let f1 = 5;
document.querySelector('.out-4').textContent = e1 + f1;
// в переменной e1 - строка

// document.querySelector('.out-4').textContent = 

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3;
let f2 = 0;
document.querySelector('.out-5').textContent = e2 / f2;

// document.querySelector('.out-5').textContent = 

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-6').textContent = e3 + f3;
// переменная f3 - строка

// document.querySelector('.out-6').textContent = 

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out-7').textContent = e4 * f4;

// document.querySelector('.out-7').textContent = 

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

let i8 = document.querySelector('.i-8');

function t8() {
    console.log(i8.value);
}

document.querySelector('.b-8').onclick = t8;


// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

let i9 = document.querySelector('.i-9'); //input
let out9 = document.querySelector('.out-9');

function t9() {
    let b = i9.value;
    out9.innerHTML = b;
    i9.value = '';
}

document.querySelector('.b-9').onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

let i10 = document.querySelector('.i-10');
let out10 = document.querySelector('.out-10');

function t10() {
    let b = i10.value;
    out10.innerHTML = b * 10;
    i10.value = '';
}

document.querySelector('.b-10').onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

let i11 = document.querySelector('.i-11');
let out11 = document.querySelector('.out-11');

function t11() {
    let b = +i11.value;
    out11.innerHTML = b + 10;
    i11.value = '';
}

document.querySelector('.b-11').onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

let i121 = document.querySelector('.i-12_1');
let i122 = document.querySelector('.i-12_2');
let out12 = document.querySelector('.out-12');

function t12() {
    let b = i121.value;
    let c = i122.value;
    out12.innerHTML = 'Hello ' + b + " " + c;
}

document.querySelector('.b-12').onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

let i131 = document.querySelector('.i-13_1');
let i132 = document.querySelector('.i-13_2');
let out13 = document.querySelector('.out-13');

function t13() {
    let b = +i131.value;
    let c = +i132.value;
    out13.innerHTML = b + c;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

document.querySelector('.i-14').value = 'Hello';

// document.querySelector('.i-14').value = 

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let i15 = document.querySelector('.i-15');

let y = i15;
y.style.border = '2px solid red' //граница строки вывода стала красной


// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

let i161 = document.querySelector('.i-16_1');
let i162 = document.querySelector('.i-16_2');
let out16 = document.querySelector('.out-16');

function t16() {
    let b = +i161.value;
    let c = +i162.value;
    out16.innerHTML = b + c;
}

document.querySelector('.b-16').onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let i17 = document.querySelector('.i-17');
let out17 = document.querySelector('.out-17');

function t17() {
    let t = i17.value;
    t = parseInt(t); // функция parseInt возвращает целое число
    out17.innerHTML = t;
}

document.querySelector('.b-17').onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let i18 = document.querySelector('.i-18');
let out18 = document.querySelector('.out-18');

function t18() {
    let t = i18.value;
    t = parseFloat(t); //функция parseFloat возвращает десятичное число
    console.log(t);
}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

let i191 = document.querySelector('.i-19_1');
let i192 = document.querySelector('.i-19_2');
let out19 = document.querySelector('.out-19');

function t19() {
    let b = +i191.value;
    let c = +i192.value;
    out19.innerHTML = b + c;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

let i201 = document.querySelector('.i-20_1');
let i202 = document.querySelector('.i-20_2');
let i203 = document.querySelector('.i-20_3');
let i204 = document.querySelector('.i-20_4');
let out20 = document.querySelector('.out-20');

function t20() {
    let a = i201.value;
    let b = i202.value;
    let c = i203.value;
    let d = i204.value;
    
    // out20.innerHTML = 'Уважаемый ' + a + " " + b + ", ваш возраст " + c + " года," + " по профессии вы " + d;

    out20.innerHTML = `Уважаемый ${a} ${b}, ваш возраст ${c} года, по профессии вы ${d}.`;
}

document.querySelector('.b-20').onclick = t20;