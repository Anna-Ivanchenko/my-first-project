
// 🔹 Завдання 1
// Знайди <h1> за id і:
// виведи сам елемент
// виведи його текст
const h1 = document.querySelector("#main-title");
console.log(h1);
console.log(h1.textContent);
// 🔹 Завдання 2
// Знайди всі елементи меню (li.menu-item) і:
// виведи кількість елементів
// виведи їх у консоль одним логом
const liMenuItem = document.querySelectorAll(".menu-item");
console.log(liMenuItem);
console.log(liMenuItem.length);

// 🔹 Завдання 3
// Знайди активний пункт меню і:
// виведи його текст
// (підказка: селектор з двома класами)
const activeMenuItem = document.querySelector('.menu-item.active');
console.log(activeMenuItem);
console.log(activeMenuItem.textContent);

// 🔹 Завдання 4
// Знайди обидві секції (.section) і:
// виведи їх кількість
// виведи значення атрибута data-section для кожної
// ❗ Поки без dataset, просто перевір що елемент знайдений.
const section = document.querySelectorAll(".section");
console.log(section);
console.log(section.length);
console.log(section[0].getAttribute('data-section'));
console.log(section[1].getAttribute('data-section'));



// 🔹 Завдання 5 (трохи складніше 🔥)
// Знайди checkbox “Dark mode”:
// не використовуючи input[type="checkbox"]
// не використовуючи текст "Dark mode"
// тільки через структуру та селектори
// (підказка: подумай про label + input)
// ! ВИРІШЕННЯ
// 🧩 Ключове спостереження (ОСЬ ВОНО 🔥)
// 👉 Checkbox “Dark mode” — це:
// другий label
// всередині .section[data-section="settings"]
// всередині .card
// Ми НЕ шукаємо текст.
// Ми шукаємо ПОЗИЦІЮ.
//.section[data-section="settings"]
//   ↓
// .card
//   ↓
// label (другий)
//   ↓
// input
// 🧠 Що тут нового (але не страшного)
// :nth-of-type(2)
// Це CSS-селектор, не JS-метод.
// “візьми другий label такого типу”
// !
const darkModeCheckbox = document.querySelector(
  '.section[data-section="settings"] .card label:nth-of-type(2) input'
);

console.log(darkModeCheckbox);

//Вправа 1 — nth-of-type
//👉 Знайди перший пункт меню (Home).
const firstLiMenu = document.querySelector(
    '.menu .menu-item:nth-of-type(1)');

console.log(firstLiMenu);
    
// 🔹 Вправа 2 — nth-of-type
// 👉 Знайди останній пункт меню (Contact).
const lastLiMenu = document.querySelector('.menu li:last-of-type');
console.log(lastLiMenu);

// 🔹 Вправа 3 — вкладені селектори
// 👉 Знайди всі label всередині секції Settings.
// (підказка: data-section="settings")
const allLabelSettings = document.querySelectorAll('.section[data-section="settings"] .card label')
console.log(allLabelSettings.length);

// 🔹 Вправа 4 — комбінація селекторів 🔥
// 👉 Знайди checkbox “Enable notifications”:
// ❌ без тексту
// ❌ без type
// ✅ тільки селектори
//❗ тільки querySelector
// Підказка:
// це перший label у секції Settings
// всередині нього є input
const serchCheckbox = document.querySelector('.section[data-section="settings"] .card label:first-of-type input');

console.log(serchCheckbox);

// 🔹 Вправа 5 — точковий селектор 🔥🔥
// 👉 Знайди другий <p> у секції Profile.
// (підказка: там є .text)
const secondP = document.querySelector('.content .section[data-section="profile"] .card .text:last-of-type');
console.log(secondP);



// 🔹 Завдання 1

// Знайди параграф Age: 30 у секції Profile, не використовуючи:
// nth-of-type
// first-of-type
// last-of-type
// ❗ Підказка:
// можна працювати з класами
// можна працювати з атрибутами
// можна комбінувати селектори

// напочатку додаємо семантичну ознаку в HTML додаємо data-field
// <p class="text" data-field="name">Name: John</p>
//<p class="text" data-field="age">Age: 30</p>


const ageP = document.querySelector(
  '.section[data-section="profile"] [data-field="age"]'
);

console.log(ageP);

// Вправа 1 — parentElement
// 👉 Знайди <p class="text">Age: 30</p>, починаючи з:
// секції Profile
// рухаючись вниз по DOM
// ❗ Заборони:
// ❌ nth-of-type
// ❌ last-of-type
// ❌ текст "Age"
// Підказка:
// section[data-section="profile"]
// потім .card
// потім children

const profileSection  = document.querySelector('.section[data-section="profile"]');
const card = profileSection.querySelector('.card');
const ageParagraph = card.children[1];

console.log(ageParagraph);

// 🧪 Вправа 2 — children
// 👉 Візьми .card у секції Profile і:
// виведи кількість дочірніх елементів
// виведи другу дитину
const sectionProfile = document.querySelector('.section[data-section="profile"]');
const cardA = sectionProfile.querySelector('.card');
const textAll = cardA.querySelectorAll('.text');
  
console.log(textAll.length);
console.log(cardA.children[1]);

// 🧪 Вправа 3 — sibling 🔥
// 👉 Починаючи з <p>Name: John</p>:
// знайди наступний sibling
// виведи його в консоль
// ❗ Умови:
// ❌ без тексту
// ❌ без селекторів для другого < p >
// ✅ рухаєшся тільки через DOM
const divCard = document.querySelector('.card');
const searchSibling = divCard.children[0];
const nextSibling = searchSibling.nextElementSibling;

console.log(nextSibling);

// ➡️ Фінальна вправа цього рівня
// 🧪 Вправа 4 — комбінована навігація 🔥🔥
// 👉 Знайди кнопку Save і:
// піднімися до <footer>
// перейди до попереднього sibling
// виведи <main>
// ❗ Умови:
// ❌ без querySelector('main')
// ❌ без closest
// ✅ тільки DOM-навігація

const footer = document.querySelector('.footer');
const footerBtn = footer.querySelector('#save-btn');
const footerSibling = footer.previousElementSibling;



console.log(footer);
console.log(footerBtn);
console.log(footerSibling);
