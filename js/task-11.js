// 🧩 Міні-проєкт: Profile Settings Panel
// 🎯 Мета
// Зробити інтерактивну форму профілю, де:
// дані читаються з форми
// стан зберігається в DOM
// інтерфейс реагує на дії користувача

// 🧪 ЗАВДАННЯ (поетапно)
// 🔹 Крок 1 — Submit логіка
// 👉 При сабміті форми:
// ❌ не перезавантажувати сторінку
// зчитати:
// name
// email
// notifications
// вивести в консоль обʼєкт:
// {
//   name: "John",
//   email: "john@mail.com",
//   notifications: true
// }
// !-----------------------------------------------------
// const form = document.querySelector('.profile-form');
// const inputName = document.querySelector('form input[type="text"]');
// const inputEmail = document.querySelector('form input[type="email"]');
// const inputCheckbox = document.querySelector('form input[name="notifications"]');

// form.addEventListener('submit', event => {
//     event.preventDefault();
//     console.log("name: ", inputName.value);
//     console.log("email: ", inputEmail.value);
//     console.log("notifications: ", inputCheckbox.checked)
// })


// 🔹 Крок 2 — Валідація (мінімальна)
// 👉 Якщо:
// name або email порожні
// ➡️ не сабмітити, а вивести в консоль:
// Please fill all fields
// ❗ Без alert, тільки console.log
// !---------------------------------------------------------
// const form = document.querySelector('.profile-form');
// const inputName = document.querySelector('form input[type="text"]');
// const inputEmail = document.querySelector('form input[type="email"]');
// const inputCheckbox = document.querySelector('form input[name="notifications"]');

// form.addEventListener('submit', event => {
//     event.preventDefault();
//     if (inputName.value === "" || inputEmail.value === "") {
//         console.log(`Please fill all fields`);
//         return;
//     }    
    
//     console.log("name: ", inputName.value);    
//     console.log("email: ", inputEmail.value);
//     console.log("notifications: ", inputCheckbox.checked)
// })

// !-------------------------------------------------------------
// 🔹 Крок 3 — UI-реакція 🔥
// 👉 Якщо форма успішно “збережена”:
// додай формі клас saved
// прибери цей клас, якщо користувач починає знову вводити дані (input)
// 📌 Підказка:
// classList.add
// classList.remove
// подія input
// !---------------------------------------------------------------
// const form = document.querySelector('.profile-form');
// const inputName = document.querySelector('form input[type="text"]');
// const inputEmail = document.querySelector('form input[type="email"]');
// const inputCheckbox = document.querySelector('form input[name="notifications"]');

// form.addEventListener('submit', event => {
//     event.preventDefault();
//     if (inputName.value === "" || inputEmail.value === "") {
//         console.log(`Please fill all fields`);
//         return;
//     }    
//     form.classList.add('saved');  
//     console.log(event.currentTarget);
//     console.log("name: ", inputName.value);    
//     console.log("email: ", inputEmail.value);
//     console.log("notifications: ", inputCheckbox.checked);
// })
// form.addEventListener('input', event => {    
//     form.classList.remove('saved');
// })
// !---------------------------------------------------------------

// 🔹 Крок 4 — Звʼязок з меню 🔥🔥
// 👉 Після успішного сабміту:
// активуй пункт меню Profile
// (через делегування / classList)
// ❗ Без кліку миші — тільки через JS
// !---------------------------------------------------------------
const form = document.querySelector('.profile-form');
const inputName = document.querySelector('form input[type="text"]');
const inputEmail = document.querySelector('form input[type="email"]');
const inputCheckbox = document.querySelector('form input[name="notifications"]');

form.addEventListener('submit', event => {
    event.preventDefault();
    if (inputName.value === "" || inputEmail.value === "") {
        console.log(`Please fill all fields`);
        return;
    }    
    form.classList.add('saved');  
    console.log(event.currentTarget);
    console.log("name: ", inputName.value);    
    console.log("email: ", inputEmail.value);
    console.log("notifications: ", inputCheckbox.checked);

    const currentActive = document.querySelector('.menu-item.active');
    const servicesItem = [...document.querySelectorAll('.menu-item')]
    .find(item => item.textContent === 'Services');       
        if (currentActive) {
            currentActive.classList.remove('active')
            console.log(currentActive);
        };
        if (servicesItem) {
            servicesItem.classList.add('active');
            console.log(servicesItem);
        }
            
})
form.addEventListener('input', event => {    
    form.classList.remove('saved');
})

