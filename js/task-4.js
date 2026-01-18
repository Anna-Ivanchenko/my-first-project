const link = document.querySelector(".link");
console.log(link.classList);


// повертає true або false, 
// залежно від наявності класу className в елемента.
const hasActiveClass = link.classList.contains("is-active");
console.log(`hasActiveClass - ${hasActiveClass}`);


// додає клас className до списку класів елемента.
// Можна додавати більше одного класу, вказавши кілька аргументів через кому.
link.classList.add("special");
console.log(link.classList);

// видаляє клас className зі списку класів елемента.
link.classList.remove("is-active");
console.log(link.classList);

// якщо клас className відсутній, то додає його в кінець списку класів
// і навпаки, якщо клас className присутній — видаляє його
link.classList.toggle("is-active");
console.log(link.classList);

// (перший — стара назва класу, другий — нова назва класу) 
// та замінює існуючий клас oldClassName на вказаний newClassName
link.classList.replace("special", "regular");
console.log(link.classList);






const image = document.querySelector(".image");

// приймає один аргумент — рядок nameAttribute, 
// який містить ім’я атрибута для перевірки
// повертає результат перевірки 
// його наявності на елементі element — true чи false
console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}


// отримує один аргумент — рядок nameAttribute з іменем атрибута, 
// повертає значення цього атрибута для вказаного HTML-елемента element. 
// Якщо атрибут не знайдено, метод повертає null
console.log(image.hasAttribute("src")); // true


// приймає два аргументи: рядок nameAttribute з іменем атрибута, 
// який потрібно встановити або змінити, 
// та value зі значенням, яке цьому атрибуту треба присвоїти. 
// Метод встановлює або змінює значення зазначеного атрибута для 
// вказаного HTML-елемента element
console.log(image.getAttribute("alt")); // "Rocks and waterfall"


// приймає один аргумент — рядок nameAttribute з іменем атрибута, 
// який потрібно видалити зі вказаного HTML-елемента 
// element — та видаляє його.
image.setAttribute("alt", "Amazing nature");
console.log(image.getAttribute("alt")); // Amazing nature


