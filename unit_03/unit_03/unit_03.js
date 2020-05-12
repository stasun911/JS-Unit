// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

let i1 = document.querySelector('.i-1');
let out1 = document.querySelector('.out-1');

function f1() {
    let a = i1.value;

    if (a == 4) {
        out1.innerHTML = 'true';
    }

    else {
        out1.innerHTML = 'false';
    }

}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;
let out2 = document.querySelector('.out-2');

function f2() {

    if (a21 > a22) {

        out2.innerHTML = a21;
    }

    else if (a22 > a21) {

        out2.innerHTML = a22;
    }

}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

let i31 = document.querySelector('.i-31');
let i32 = document.querySelector('.i-32');
let out3 = document.querySelector('.out-3');

function f3() {
    let a = +i31.value;
    let b = +i32.value;

    if (a > b) {
        out3.innerHTML = a;
    }

    else if (b > a) {
        out3.innerHTML = b;
    }

}

document.querySelector('.b-3').onclick = f3;


// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

let i4 = document.querySelector('.i-4');
let out4 = document.querySelector('.out-4');
let year = 2020;

function f4() {
    let a = year - i4.value;
   
    if (a >= 18) {
        out4.innerHTML = '1';
    }

    else if (a < 18 && a >= 0) {
        out4.innerHTML = '0';
    }

}

document.querySelector('.b-4').onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

let i5 = document.querySelector('.i-5');
let out5 = document.querySelector('.out-5');

function f5() {
    let a = i5.value;

    if (a < 0) {
        out5.innerHTML = 'm';
    }

    else if (a == 0) {
        out5.innerHTML = '0';
    }

    else if (a > 0) {
        out5.innerHTML = '1';
    }

}

document.querySelector('.b-5').onclick = f5;


// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

let i6 = document.querySelector('.i-6');
let out6 = document.querySelector('.out-6');


function f6() {
    let a = i6.value;

    if (a % 2 == 0) {
        out6.innerHTML = 'even';
    }

    else {
        out6.innerHTML = 'odd'
    }

}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.

let i71 = document.querySelector('.i-71');
let i72 = document.querySelector('.i-72');
let out7 = document.querySelector('.out-7');

function f7() {
    let a = i71.value;
    let b = i72.value;
    out7.innerHTML = a ** b;

}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

let s8 = document.querySelector('.s-8');
let out8 = document.querySelector('.out-8');

function f8() {
    let a = s8.value;

    switch (a) {
        case '1':
            out8.innerHTML = 'one';
            break;
        case '2':
            out8.innerHTML = 'two';
            break;
        case '3':
            out8.innerHTML = 'three';
            break;
    }
}

document.querySelector('.b-8').onclick = f8;

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

let i9 = document.querySelector('.i-9');
let out9 = document.querySelector('.out-9');

function f9() {
    let a = i9.value;

    if (a >= 1 && a <= 32) {
        out9.innerHTML = '1';
    }

    else if (a >= 33 && a <= 43) {
        out9.innerHTML = '2';
    }

    else if (a >= 44 && a <= 64) {
        out9.innerHTML = '3';
    }

    else {
        out9.innerHTML = '0';
    }

}

document.querySelector('.b-9').onclick = f9;

// Task 10
//     Дан input i-101 и input-102, type=number.  Дан select s-103, который содержит четыре операции - +, -, *, / . Дана кнопка b-10, при нажатии на которую срабатывает функция f10. Функция выводит в out-10 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат 1+13 т.е. 14.

let i101 = document.querySelector('.i-101');
let i102 = document.querySelector('.i-102');
let s103 = document.querySelector('.s-103');
let out10 = document.querySelector('.out-10');

function f10() {
    let a = +i101.value;
    let b = +i102.value;
    let c = s103.value;

    switch (c) {
        case '+':
            out10.innerHTML = a + b;
            break;
        case '-':
            out10.innerHTML = a - b;
            break;
        case '*':
            out10.innerHTML = a * b;
            break;
        case '/':
            out10.innerHTML = a / b;
            break;
    }

}

document.querySelector('.b-10').onclick = f10;


// Task     11
//     Дан select s-111 и s-112, каждый из которых содержит 1 и 0.  Дан select s-113, который содержит две операции - && и || . Дана кнопка b-11, при нажатии на которую срабатывает функция f11. Функция выводит в out-11 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&,  нужно вывести результат операции 1&&1 т.е. 1 или 0.

let s111 = document.querySelector('.s-111');
let s112 = document.querySelector('.s-112');
let s113 = document.querySelector('.s-113');
let out11 = document.querySelector('.out-11');

function f11() {
    let a = s111.value;
    let b = s112.value;
    let c = s113.value;

    switch (c) {
        case "&&":
            if (a == '1' && b == '0') {
                out11.innerHTML = b;
            }

            else if (a == '1' && b == '1') {
                out11.innerHTML = b;
            }

            else if (a == '0' && b == '1') {
                out11.innerHTML = a;
            }

            else if (a == '0' && b == '0') {
                out11.innerHTML = a;
            }
            break;

        case "||":
            if (a == '1' && b == '0') {
                out11.innerHTML = a;
            }

            else if (a == '1' && b == '1') {
                out11.innerHTML = b;
            }

            else if (a == '0' && b == '1') {
                out11.innerHTML = b;
            }

            else if (a == '0' && b == '0') {
                out11.innerHTML = a;
            }
            break;

    }
}

document.querySelector('.b-11').onclick = f11;



