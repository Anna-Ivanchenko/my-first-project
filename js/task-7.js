// 🟢 Задача 1. Повідомлення про температуру
// Напиши функцію, яка приймає температуру повітря.
// Якщо температура менша за 0 — поверни рядок "Freezing".
// Якщо температура від 0 включно до 15 — поверни рядок "Cold".
// Якщо температура від 16 включно до 25 — поверни рядок "Warm".
// Якщо температура більше 25 — поверни рядок "Hot".
// Використовуй if...else.
function indicatorAir(temperature) {
    const tempAir = Number(temperature);

    if (tempAir < 0) {
        return `Freezing`;
    } else if (tempAir === 0 && tempAir <= 15) {
        return `Cold`;
    } else if (tempAir >= 16 && tempAir <= 25) {
        return `Warm`;
    } else {
        return `Hot`;
    }
}
console.log(indicatorAir('-2'));
console.log(indicatorAir('5'));
console.log(indicatorAir('0'));
console.log(indicatorAir('16'));
console.log(indicatorAir('30'));

// 🟢 Задача 2. Оцінка студента
// Напиши функцію, яка приймає кількість балів студента.
// Якщо балів менше 60 — поверни "Fail".
// Якщо балів від 60 включно до 74 — поверни "Satisfactory".
// Якщо балів від 75 включно до 89 — поверни "Good".
// Якщо балів від 90 включно — поверни "Excellent".
// Забезпеч коректну роботу з рядковими числами.
function studAssessment(points) {
    const studPoints = Number(points);

    if (studPoints < 60) {
        return `Fail`;
    } else if (studPoints >= 60 && studPoints <= 74) {
        return `Satisfactory`;
    } else if (studPoints > 74 && studPoints <= 89) {
        return `Good`;
    } else {
        return `Excellent`;
    }
}
console.log(studAssessment('60'));
console.log(studAssessment('48'));
console.log(studAssessment('85'));
console.log(studAssessment('74'));
console.log(studAssessment('90'));


//🟢 Задача 3. Статус замовлення
// Напиши функцію, яка приймає статус замовлення.
// Можливі статуси: "pending", "processing", "shipped", "delivered".
// Для кожного статусу поверни відповідне повідомлення.
// Якщо статус невідомий — поверни "Unknown status".
function orderStatus(status) {
    if (status === 'pending') {
        return `Your order status ${status}`
    } else if (status === 'processing') {
        return `Your order status ${status}`
    } else if (status === 'shipped') {
        return `Your order status ${status}`
    } else if (status === 'delivered') {
        return `Your order status ${status}`
    } else {
        return `Unknown status`
    }
}
console.log(orderStatus('pending'));
console.log(orderStatus('processing'));
console.log(orderStatus('shipped'));
console.log(orderStatus('delivered'));
console.log(orderStatus('status'));


//🔹 БЛОК 2. ВИБІР ОПЦІЇ (switch)
//🟢 Задача 4. Спосіб оплати
// Напиши скрипт вибору способу оплати.
// Опція зберігається в змінній paymentOption:
// 1 — готівка
// 2 — банківська картка
// 3 — електронний гаманець
// У змінну message запиши повідомлення залежно від обраної опції.
// Якщо опція не визначена — поверни "Спосіб оплати не вибрано".
// function paymentMethod() {
//     const paymentOption = Number(prompt('Choose the option'));
//     let message = '';

//     switch (paymentOption) {
//         case 1:
//             message = `Ви вибрали спосіб оплати готівкою`;
//             break;
//         case 2:
//             message = `Ви вибрали спосіб оплати банківською карткою`;
//             break;
//         case 3:
//             message = `Ви вибрали спосіб оплати електронним гаманецем`;
//             break;
       
//         default:
//             message = `Спосіб оплати не вибрано`;
//             break;
//     }
//     return message;
// }
// const result = paymentMethod();
// console.log(result);

//🟢 Задача 5. Тип підписки
// Напиши скрипт вибору типу підписки.
// Можливі значення: "basic", "standard", "premium".
// Для кожного типу поверни повідомлення про доступні можливості.
// Якщо тип не підтримується — поверни "Unknown subscription type".
// function subscriptionType() {
//     const options = Number(prompt(`Choose the option`));
//     let message = '';

//     switch (options) {
//         case 1:
//             message = `Your subscription type is basic`;
//             break;
//         case 2:
//             message = `Your subscription type is standart`;
//             break;
//         case 3:
//             message = `Your subscription type is premium`;
//             break;
    
//         default:
//             message = `Unknown subscription type`;
//             break;
//     }
//     return message;
// }
// const resultA = subscriptionType();
// console.log(resultA);

//🟢 Задача 6. День тижня
// Напиши скрипт, який за номером дня тижня (1–7)
// повертає його назву англійською мовою.
// Якщо номер не входить у діапазон — поверни "Invalid day number".
// function daysOfWeek() {
//     const options = Number(prompt(`Choose the option`));
//     let message = '';

//     switch (options) {
//         case 1:
//             message = 'Monday';
//             break;
//         case 2:
//             message = 'Thursday';
//             break;
//         case 3:
//             message = 'Wendsday';
//             break;
//         case 4:
//             message = 'Tuersday';
//             break;
//         case 5:
//             message = 'Friday';
//             break;
//         case 6:
//             message = 'Sunday';
//             break;
//         case 7:
//             message = 'Saturday';
//             break;
    
//         default:
//             message = 'Invalid day number';
//             break;
//     }
//     return message;
// }
// const result = daysOfWeek();
// console.log(result);


//🔹 БЛОК 3. ПЕРЕВІРКИ (логічні оператори)
//🟢 Задача 7. Доступ до відео
// Напиши функцію перевірки доступу до відео.
// Доступ дозволено, якщо користувач:
// - авторизований  authorized
// - має активну підписку has an active subscription
// - не має вікового обмеження has no age limit
// Функція повинна повертати "Access granted" або "Access denied".
function accessChecks(authorized, isActive, ageLimit) {
    
    if (authorized && isActive && !ageLimit) {
        return 'Access granted';
    } else {
        return 'Access denied';
    }
}
console.log(accessChecks(true, true, false)); // ✅ 
console.log(accessChecks(true, true, true));  // ❌ 
console.log(accessChecks(false, true, false)); // ❌

//🟢 Задача 8. Можливість оформлення замовлення
// Напиши функцію, яка перевіряє можливість оформлення замовлення.
// Замовлення можна оформити, якщо:
// - товар є в наявності  isAvailable
// - користувач залогінений  isLogged
// - кошик не порожній  basketIsEmpty
// Поверни відповідне повідомлення.  your order has been processed  Your basket is empty
// !!!!!!!!!!!!!!!!!!!!!!!!!!! варіант 1
// function placingAnOrder(isAvailable, isLogged, basketIsEmpty) {
//   if (!isLogged) {
//     return 'Please log in to continue';
//   }

//   if (!isAvailable) {
//     return 'Product is out of stock';
//   }

//   if (basketIsEmpty) {
//     return 'Your basket is empty';
//   }

//   return 'Your order has been processed';
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!! Варіант 2

function placingAnOrder(isAvailable, isLogged, basketIsEmpty) {
    
    if (isAvailable && isLogged && !basketIsEmpty) {
        return `Your order has been processed!`
    } else {
        return 'Your basket is empty!'
    }
}
console.log(placingAnOrder(true, true, false)); // ✅ 
console.log(placingAnOrder(true, true, true));  // ❌ 
console.log(placingAnOrder(false, true, false)); // ❌

//🟢 Задача 9. Вхід до адмін-панелі
// Напиши функцію перевірки доступу до адмін-панелі. access to the admin panel.
// Доступ надається, якщо:
// - користувач має роль "admin"
// - він онлайн
// - режим "read-only" вимкнений
function adminAccess(isAdmin, isOnline, readOnly) {
   if (!isAdmin) {
       return `You do not have ADMIN status!`;
    }
    if (!isOnline) {
        return `You are not ONLINE!`;
    }
    if (readOnly) {
        return `Read-only mode is enabled`;
    }
    return `Hello! Your Access to the admin panel is ACTIVE!`
}
console.log(adminAccess(true, true, false)); // ✅ 
console.log(adminAccess(true, true, true));  // ❌ 
console.log(adminAccess(false, true, false)); // ❌


//🔹 БЛОК 4. ДОСТУП / УМОВНІ ОПЕРАТОРИ (тернарний оператор)
//🟢 Задача 10. Чат підтримки
// Напиши скрипт перевірки можливості відкриття чату підтримки.
// Чат доступний, якщо:
// - оператор онлайн
// - користувач авторизований
// - немає технічних робіт
// Реалізуй перевірку через тернарний оператор.
function supportChat(isOperatorOnline, isAuthorized, isMaintenance) {
    return isOperatorOnline && isAuthorized && !isMaintenance
        ? 'Chat is available'
        : 'Chat is unavailable';
}
console.log(supportChat(true, true, false));  // Chat is available
console.log(supportChat(false, true, false)); // Chat is unavailable
console.log(supportChat(true, false, false)); // Chat is unavailable
console.log(supportChat(true, true, true));   // Chat is unavailable

//🟢 Задача 11. Перегляд контенту
// Напиши скрипт перевірки доступу до преміум-контенту.
// Доступ дозволений, якщо:
// - користувач має підписку
// - не перебуває в бані
// Використовуй тернарний оператор.
function viewingContent(isSubscription, userIsBanned) {
    return isSubscription && !userIsBanned
        ? 'Access is allowed'
        : 'Access is denied'
}
console.log(viewingContent(true, true)); //Access is denied
console.log(viewingContent(true, false)); // Access is allowed
console.log(viewingContent(false, true)); //Access is denied


//🟢 Задача 12. Кнопка дії
// Напиши скрипт, який визначає,
// чи активна кнопка дії.
// Кнопка активна, якщо:
// - форма валідна
// - немає помилок
// Поверни "Button enabled" або "Button disabled".
function buttonActive(formIsValid, hasErrors) {
    return formIsValid && !hasErrors
        ? `Button enabled`
        : `Button disabled`
}
console.log(buttonActive(true, true)); //Button disabled
console.log(buttonActive(true, false)); //Button enable
console.log(buttonActive(false, false)); //Button disabled
