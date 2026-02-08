// 🎨 CLASSLIST + STYLE — РІВЕНЬ 1

// 🧪 Вправа 1 — classList.add
// 👉 Знайди активний пункт меню (About) і:
// додай йому клас highlight
// ❗ Не міняй текст
// ❗ Тільки classList.add
// !----------------------------------------
// const liHasActive = document.querySelector('.header .nav .menu .active');
// liHasActive.classList.add('highlight');

// console.log(liHasActive);
// !----------------------------------------

// 🧪 Вправа 2 — classList.remove
// 👉 Знайди той самий елемент і:
// прибери з нього клас active
// ❗ Після цього має залишитись:
// <li class="menu-item highlight">About</li>
// !----------------------------------------
// const liActive = document.querySelector('.header .nav .menu .active');
// liActive.classList.remove('active');

// console.log(liActive);
// !----------------------------------------

// 🧪 Вправа 3 — style (inline)
// 👉 Знайди <h1> і:
// задай color: darkblue
// задай fontSize: 32px
// ❗ Через element.style
// ❗ Без класів
// !----------------------------------------
// const h1Style = document.querySelector('#main-title');
// h1Style.style.color = "darkblue";
// h1Style.style.fontSize = "32px";

// console.log(h1Style);
// !----------------------------------------

// 🧪 Вправа 4 — комбінована 🔥
// 👉 Знайди секцію Profile і:
// додай їй клас profile-section
// задай backgroundColor: #f3f3f3
// ❗ Без querySelectorAll
// ❗ Можна DOM-навігацію
// !----------------------------------------
// const sectionProfileChange = document.querySelector('.section[data-section="profile"]');
// sectionProfileChange.classList.add('profile-section');
// sectionProfileChange.style.backgroundColor = "#f3f3f3";

// console.log(sectionProfileChange);
// !----------------------------------------
// 👉 Знайди секцію Profile і:
// якщо клас profile-section є → прибери його
// якщо його немає → додай
// після цього:
// якщо клас є → backgroundColor = '#f3f3f3'
// якщо немає → backgroundColor = ''
// ❗ Без подій
// ❗ Просто логіка + DOM
// !----------------------------------------
// const sectProfile = document.querySelector('.section[data-section="profile"]');
// if (sectProfile.classList.contains('profile-section')) {
//   // якщо клас Є — прибираємо
//   sectProfile.classList.remove('profile-section');
//   sectProfile.style.backgroundColor = '';
// } else {
//   // якщо класу НЕМАЄ — додаємо
//   sectProfile.classList.add('profile-section');
//   sectProfile.style.backgroundColor = '#f3f3f3';
// }

// console.log(sectProfile);
// !----------------------------------------
// const button = document.querySelector("#save-btn");

// const handleClickf = event => {
//   console.log("event: ", event); //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
//   console.log("event type: ", event.type); //click
//   console.log("currentTarget: ", event.currentTarget); //<button id="save-btn">Save</button>
// };

// button.addEventListener("click", handleClick);
// !----------------------------------------



// 🖱️ ПОДІЇ — РІВЕНЬ 1
// 🧪 Вправа 1 — перший click
// 👉 Знайди кнопку Save і:
// при кліку виведи в консоль текст кнопки
//!------------------------------------------------------
// const btnSave = document.querySelector('#save-btn');

// const handleClick = event => {
//     console.log(event.target.textContent);
// };
// btnSave.addEventListener('click', handleClick);
// !--------------------------------------------------
// !--------------------------------------------------




// 🧪 Вправа 2 — click + classList
// 👉 При кліку на кнопку Save:
// додай / прибери клас clicked
// Хочеш — можеш використати event.target або this.
// !---------------------------------------------------
// const saveBtn = document.querySelector('#save-btn');
// const handleClick = event => {
//     event.currentTarget.classList.toggle("clicked");
//     console.log(saveBtn);
// };
// saveBtn.addEventListener('click', handleClick);
// !----------------------------------------------------
// !----------------------------------------------------



// 🧪 Вправа 3 — click + DOM-навігація 🔥
// 👉 При кліку на кнопку Save:
// знайди секцію Profile
// перемкни у неї клас profile-section
// ❗ Умови:
// ❌ без повторного querySelector всередині handler
// ❌ без глобальних змінних
// ✅ знайди все до addEventListener
// ✅ використовуй навігацію або збережені посилання
// !---------------------------------------------------
// const btnSave = document.querySelector('#save-btn');
// const profile = document.querySelector('.section[data-section="profile"]');
// const handleClick = event => {
//     profile.classList.toggle("profile-section");
//     console.log(profile);
// };


// btnSave.addEventListener('click', handleClick);
// !----------------------------------------------------
// !----------------------------------------------------




// 🖱️ ПОДІЇ — РІВЕНЬ 2

// 🧪 Вправа 1 — делегування (база)
// 👉 Повісь ОДИН click-обробник на меню (ul.menu) і:
// якщо клікнули по li.menu-item
// виведи в консоль текст цього пункту меню
// ❗ Умови:
// ❌ не вішати подію на кожен li
// ❌ без querySelectorAll
// ✅ використовувати event.target
// !---------------------------------------------------
// const ulMenu = document.querySelector('header .nav .menu'); //Спільний батько всіх пунктів — .menu
// //Повісити ОДИН обробник
// ulMenu.addEventListener('click', event => {
//     //логіка
//     if (event.target.classList.contains('menu-item')) {
//     console.log(event.target.textContent);
//   }
// });
// !---------------------------------------------------
// !---------------------------------------------------



// 🧪 Вправа 2 — перевірка елемента 🔥
// 👉 У тебе вже є click-обробник на ul.menu.
// Тепер потрібно захиститись від “зайвих” кліків.
// Завдання
// У тому самому handler:
// якщо клік НЕ по li.menu-item
// нічого не роби
// якщо клік по li.menu-item
// виведи в консоль його текст
// ❗ Умови:
// ❌ без querySelectorAll
// ❌ без додаткових addEventListener
// ✅ тільки event.target
// ✅ перевірка через classList.contains
// !----------------------------------------------------
// const ulMenu = document.querySelector('header .nav .menu'); //Спільний батько всіх пунктів — .menu
// //Повісити ОДИН обробник
// ulMenu.addEventListener('click', event => {
//     //логіка
//     if (!event.target.classList.contains('menu-item')) {
//         return;
//     } 
//     console.log(event.target.textContent);
// });
// !---------------------------------------------------
// !---------------------------------------------------




// 🧪 Вправа 3 — активний пункт меню 🔥🔥
// 👉 При кліку на пункт меню:
// прибери клас active з поточного активного пункту
// додай active до того, по якому клікнули
// ❗ Умови:
// ❌ без циклів
// ❌ без querySelectorAll у handler
// ✅ активний пункт знайти ОДИН раз (до addEventListener)
// ✅ використовуй делегування (event.target)
// !----------------------------------------------------
// const menu = document.querySelector('.menu');
// let activeItem = document.querySelector('.menu-item.active');

// menu.addEventListener('click', event => {
//     console.log('target:', event.target);
//     console.log('activeItem:', activeItem);
//   if (!event.target.classList.contains('menu-item')) {
//     return;
//   }

//  // 👉 якщо клікнули по тому самому — нічого не робимо
//   if (event.target === activeItem) {
//     return;
//   }

//   if (activeItem) {
//     activeItem.classList.remove('active');
//   }

//   event.target.classList.add('active');
//   activeItem = event.target;
// });
// !---------------------------------------------------
// !---------------------------------------------------




//🖱️ ПОДІЇ — ДЕЛЕГУВАННЯ (ТРЕНУВАННЯ)

// 🧪 Завдання 1 — базове делегування
// 👉 Повісь ОДИН click на .menu і:
// якщо клік по li.menu-item
// виведи в консоль:
// clicked: Home
// !----------------------------------------------------
// const menu = document.querySelector('.menu');
// menu.addEventListener('click', event => {
//     if (event.target.classList.contains('menu-item')) {
//         console.log("clicked: ", event.target.textContent);
//     }
// })
// !----------------------------------------------------
// !----------------------------------------------------




// ➡️ Завдання 2 — ігноруємо “зайві” кліки
// Тепер невелике ускладнення, але логіка та сама.
// 👉 Потрібно
// якщо клік НЕ по li.menu-item → нічого не робити
// якщо по li.menu-item → лог лишається
// !----------------------------------------------------
// const menu = document.querySelector('.menu');
// menu.addEventListener('click', event => {
//     if (!event.target.classList.contains('menu-item')) {
//          return;
//     }
//        console.log("clicked: ", event.target.textContent);
// }
    
// )
// !----------------------------------------------------



// 🧪 Завдання 3 — active (без оптимізації)
// 👉 Розшир цей самий код:
// При кліку на li.menu-item:
// прибери клас active з поточного активного пункту
// додай active до клікнутого пункту
// ❗ Умови
// ❌ без циклів
// ❌ без querySelectorAll у handler
// ✅ активний пункт знайти ОДИН раз (до addEventListener)
// ✅ використовуй event.target
// !----------------------------------------------------
// const menu = document.querySelector('.menu');
// let activeItem = document.querySelector('.menu-item.active');
// menu.addEventListener('click', event => {
//     console.log('target:', event.target);
//     console.log('activeItem:', activeItem);
//     if (event.target === activeItem) {
//         return;
//     }
//     if (activeItem) {
//         activeItem.classList.remove('active')
//     }
//     event.target.classList.add('active');
//     activeItem = event.target;
// })
// !----------------------------------------------------
// !----------------------------------------------------



// closest()
// Перепиши останній код з active, але:
// ❌ НЕ використовуй event.target.classList.contains
// ✅ використовуй closest('.menu-item')
// логіка має працювати навіть при кліку на вкладені елементи
// !----------------------------------------------------
const menu = document.querySelector('.menu');
let activeItem = document.querySelector('.menu-item.active');

menu.addEventListener('click', event => {
    const item = event.target.closest('.menu-item');
    console.log('target:', item);
    console.log('activeItem:', activeItem);
    if (!item) {
    return;
    }
    if (item === activeItem) {
        return;
    }
    if (activeItem) {
        activeItem.classList.remove('active');
    }
    item.classList.add('active');
    activeItem = item;    
});
// !----------------------------------------------------
// !----------------------------------------------------




// 📝 ФОРМИ
// 🧪 Вправа 1 — submit + preventDefault
// 👉 Знайди форму і:
// при сабміті заборони стандартну поведінку
// виведи в консоль повідомлення:
// Form submitted
// !----------------------------------------------------
// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//     event.preventDefault();
//     console.log(form);
// })
// !----------------------------------------------------
// !----------------------------------------------------


// Вправа 2 — читання input value
// 👉 У цій же формі:
// знайди текстовий input
// при сабміті виведи в консоль його значення
// !----------------------------------------------------
// const form = document.querySelector('form');
// const inputName = document.querySelector('form input[type="text"]');
// const inputMail = document.querySelector('form input[type="email"]');

// form.addEventListener('submit', event => {
//     event.preventDefault();
//     console.log(inputName.value);
//     console.log(inputMail.value);
// });
///////////////////////////////////////////////////
// ✅ form — для submit + preventDefault
// ✅ input[type="text"] — для input події
// ✅ input[type="email"] — для change
// ✅ checkbox — для checked
// ✅ button type="submit" — для сабміту
// 🧠 Дуже важливе закріплення
// Подія submit
// спрацьовує один раз
// коли форма готова до відправки
// .value
// завжди зчитується з DOM-елемента
// не з event, якщо це не подія input
// !----------------------------------------------------
// !----------------------------------------------------




// 🧪 Вправа 3 — input подія
// 👉 Повісь input-подію на поле Name і:
// при кожному введенні символу
// виводь у консоль поточне значення
// ❗ Без submit
// ❗ Працюємо тільки з input
// !----------------------------------------------------
// const form = document.querySelector('.profile-form');
// const inputName = document.querySelector('form input[type="text"]');

// inputName.addEventListener('input', event => {
//     console.log(event.target.value);
// })
//////////////////////////////////////////////
// 🧠 Маленьке порівняння (корисно)
// Подія	Коли спрацьовує

// input	кожна зміна (клавіша, вставка, видалення)
// change	коли поле втратило фокус
// !----------------------------------------------------
// !----------------------------------------------------



// 🧪 Вправа 4 — change + checkbox
// 👉 Знайди checkbox “Enable notifications” і:
// повісь change
// виводь у консоль true або false
// !----------------------------------------------------
// const form = document.querySelector('.profile-form');
// const inputCheckbox = document.querySelector('form input[name="notifications"]');

// inputCheckbox.addEventListener('change', event => {
//     console.log(Boolean(inputCheckbox.checked));
// })


// Можно написати ще коротше:
// inputCheckbox.addEventListener('change', ({ target }) => {
//   console.log(target.checked);
// });
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
// !-----------------------------------------------------
















