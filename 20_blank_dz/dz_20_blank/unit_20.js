
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {

    document.querySelector('.out-1').textContent = document.querySelector('.i-1').value;
    return event.key;
}
// ваше событие здесь!!!
document.querySelector('.i-1').addEventListener('keyup', t1);

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
    return event.charCode;

    // document.querySelector('.out-2').textContent = event.charCode;
}

// document.querySelector('.i-2').addEventListener('keypress', t2);

document.querySelector('.i-2').onkeypress = (event) => {
    console.log(event)
    document.querySelector('.out-2').textContent = t2(event);
};


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3() {
    if (event.charCode > 47 && event.charCode < 58) {
        document.querySelector('.out-3').textContent = 'false';
    }
    else if (event.charCode > 96 && event.charCode < 123) {
        document.querySelector('.out-3').textContent = 'true';
    }
}

// ваше событие здесь!!!
document.querySelector('.i-3').addEventListener('keypress', t3);

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {

    if (event.charCode <= 90 && event.charCode >= 65) {
        document.querySelector('.out-4').textContent += event.key.toLowerCase();
    }
    else {
        document.querySelector('.out-4').textContent += event.key;
    }
}

// ваше событие здесь!!!
document.querySelector('.i-4').addEventListener('keypress', t4);


// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
    if (event.charCode > 96 && event.charCode < 123) {
        document.querySelector('.out-5').textContent += event.key.toUpperCase();
    }
    else {
        document.querySelector('.out-5').textContent += event.key;
    }
}
// ваше событие здесь!!!
document.querySelector('.i-5').addEventListener('keypress', t5);

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6() {
    if (event.charCode > 96 && event.charCode < 123) {
        document.querySelector('.i-6').textContent += event.key;
        
    }
       
   
    
}

// ваше событие здесь!!!
document.querySelector('.i-6').addEventListener('keydown', t6);

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = [];

}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8() {

}

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

function t9() {

}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

function t10() {

}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11() {

}

// ваше событие здесь!!!
