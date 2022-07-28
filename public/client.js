// alert('test');

let div = document.querySelector('div');
// let button = document.querySelector('button');

// button.addEventListener('click', function () {
//     fetch('/ajax.html').then(response => response.text()).then(text => { div.innerHTML = text })
// })

// Даны три кнопки и див. На сервере даны три страницы. Сделайте так, чтобы каждая из кнопок подгружала в див соответствующую страницу.

function practiceFirstTast() {
    let buttonOne = document.querySelector('.prac1');
    let buttonTwo = document.querySelector('.prac2')
    let buttonThree = document.querySelector('.prac3');

    buttonOne.addEventListener('click', function () {
        fetch('/prac1.html').then(response => response.text()).then(text => div.innerHTML = text)
    });

    buttonTwo.addEventListener('click', function () {
        fetch('/prac2.html').then(response => response.text()).then(text => div.innerHTML = text)
    })

    buttonThree.addEventListener('click', function () {
        fetch('/prac3.html').then(response => response.text()).then(text => div.innerHTML = text)
    })
}

function practiceSecondTast() {
    let button1 = document.querySelector('.load1');
    let button2 = document.querySelector('.load2');
    let button3 = document.querySelector('.load3');
    let button4 = document.querySelector('.load4');
    let button5 = document.querySelector('.load5');
    let div1 = document.querySelector('.first');
    let div2 = document.querySelector('.second');
    let div3 = document.querySelector('.third');
    let div4 = document.querySelector('.four');
    let div5 = document.querySelector('.five');

    button1.addEventListener('click', function () {
        fetch('/page1.html').then(response => response.text()).then(text => div1.innerHTML = text)
    })
    button2.addEventListener('click', function () {
        fetch('/page2.html').then(response => response.text()).then(text => div2.innerHTML = text)
    })
    button3.addEventListener('click', function () {
        fetch('/page3.html').then(response => response.text()).then(text => div3.innerHTML = text)
    })
    button4.addEventListener('click', function () {
        fetch('/page4.html').then(response => response.text()).then(text => div4.innerHTML = text)
    })
    button5.addEventListener('click', function () {
        fetch('/page5.html').then(response => response.text()).then(text => div5.innerHTML = text)
    })
}



let button = document.querySelector('button');

// button.addEventListener('click', function () {
//     fetch('/handler/?num=3').then(response => response.text()).then(text => div.innerHTML = text)
// })


// button.addEventListener('click', function() {
// 	fetch('/handler/?num=3').then(
// 		response => {
// 			return response.text();
// 		}
// 	).then(
// 		text => {
// 			div.innerHTML = text; // запишем ответ сервера
// 		}
// 	);
// });


// На клиенте дан див и кнопка. По нажатию на кнопку отправьте на сервер два числа.
// Пусть сервер найдет сумму переданных чисел. Результат запишите в див.
// button.addEventListener('click', function () {
//     fetch('/handler/?num=10&num2=5').then(
//         response => {
//             return response.text();
//         }
//     ).then(
//         text => {
//             div.innerHTML = text; // запишем ответ сервера
//         }
//     );
// });

// Пусть на сервере дан массив. Пусть сервер ожидает, что параметром будет передано число, и
// возвращает элемент массива, соответствующий этому числу.
// По нажатию на кнопку передайте на сервер некоторое число, а ответ сервера выведите в абзац.

button.addEventListener('click', function () {
    fetch('/handler/?num=2').then(
        response => {
            return response.text();
        }
    ).then(
        text => {
            div.innerHTML = text; // запишем ответ сервера
        }
    );
});