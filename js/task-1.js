// function getDiscountPrice(price, discount) {
//     const discountValue = Number.parseFloat(discount);
//     return price - (price * discountValue);
// }
// console.log(getDiscountPrice(1000, 0.2))

// function sayHello(name) {
//     return `Hello ${name}!`;
// }
// console.log(sayHello("Oksana"))

// function getRectangleArea(width, height) {
//     const widthValue = Number.parseFloat(width);
//     const heightValue = Number.parseFloat(height);
//     return widthValue * heightValue;
// }
// console.log(getRectangleArea(10, 6));
// console.log(getRectangleArea(15.6, 8.5));
// console.log(getRectangleArea(10.25, 5.15));

// function kmToMeters(km) {
//     const kmValue = Number.parseFloat(km);
//     return kmValue * 1000;
// }
// console.log(kmToMeters(20));
// console.log(kmToMeters(80.45));
// console.log(kmToMeters(100.256));

// function getPricePerKg(totalPrice, weight) {
//     const totalPriceValue = Number.parseFloat(totalPrice);
//     const weightValue = Number.parseFloat(weight);
//     return totalPriceValue / weightValue;
// }
// console.log(getPricePerKg(500, 0.2));
// console.log(getPricePerKg(180, 0.3));
// console.log(getPricePerKg(125, 0.5));

// function formatProduct(name, price) {
//     return `Product ${name} costs ${price} credits`;
// }
// console.log(formatProduct("Alex", 500));

// function isAdult(age) {       
//     return age >= 18;
// }
// console.log(isAdult(10));
// console.log(isAdult(15));
// console.log(isAdult(18));
// console.log(isAdult(28));

// function checkAge(age) {

//     if (age>=18) {
//         return `You are an adult`;
//     }
// }
// console.log(checkAge(20));
// console.log(checkAge(17));
// console.log(checkAge(10));
// console.log(checkAge(30));

// function checkStorage(available, ordered) {
//     if (available < ordered) {
//         return `Not enough goods in stock!`;
//     } else {
//         return `Order is processed, our manager will contact you`;
//     }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));

// function checkStoragen(available, ordered) {
//   if (ordered === 0) {
//     return `There are no products in the order!`;
//   } else if (available < ordered) {
//     return `Your order is too large, there are not enough items in stock!`;
//   } else if (available >= ordered) {
//     return `The order is accepted, our manager will contact you`;
//   }   
// }
// console.log(checkStoragen(100, 50));
// console.log(checkStoragen(100, 130));
// console.log(checkStoragen(70, 0));
// console.log(checkStoragen(200, 20));
// console.log(checkStoragen(200, 250));
// console.log(checkStoragen(150, 0));
// console.log(checkStoragen(80, 80));

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     return password === correctPassword ? `Access granted` : `Access denied, wrong password!`;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// function getSubscriptionPrice(type) {
//     switch (type) {
//         case "starter":
//             return 0
//             break;
//         case "professional":
//             return 20
//             break;
//         case "organization":
//             return 50
//             break;
    
//         default:
//             return `Invalid subscription type!`;
//     }
// }

// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("random"));
// console.log(getSubscriptionPrice("premium"));

// function checkMinSum(amount) {
//     if (amount > 100) {
//         return `OK`;
//     }
// }

// console.log(checkMinSum(75));
// console.log(checkMinSum(200));
// console.log(checkMinSum(100));
// console.log(checkMinSum(150));

// function isPositive(number) {
//     if (number > 0) {
//         return `Positive`;
//     }
// }

// console.log(isPositive(75));
// console.log(isPositive(-10));
// console.log(isPositive(1));
// console.log(isPositive(-5));

// function canWatch(age) {
//     if (age >= 12) {
//         return `Allowed`;
//     } else {
//         return `Denied`;
//     }
// }

// console.log(canWatch(75));
// console.log(canWatch(10));
// console.log(canWatch(18));
// console.log(canWatch(12));

// function checkPasswordl(password) {
    
//     if (password === "admin") {
//         return `Correct`;
//     } else {
//         return `Wrong password`;
//     }
// }

// console.log(checkPasswordl("Anna"));
// console.log(checkPasswordl("admin"));
// console.log(checkPasswordl("user"));
// console.log(checkPasswordl("admin1"));

// function classifyAge(age) {
//     if (age < 12) {
//         return `Child`;
//     } else if (age >= 12 && age < 18) {
//         return `Teenager`;
//     } else {
//         return `Adult`;
//     }     
// }

// console.log(classifyAge(11));
// console.log(classifyAge(12));
// console.log(classifyAge(17));
// console.log(classifyAge(18));
// console.log(classifyAge(22));

// function getGrade(score) {
//     if (score < 50) {
//         return "Low";
//     } else if (score >= 50 && score < 80) {
//         return "Medium";
//     } else {
//         return "High";
//     }
// }

// console.log(getGrade(12));
// console.log(getGrade(50));
// console.log(getGrade(79));
// console.log(getGrade(80));
// console.log(getGrade(200));

// function isEven(number) {
//     return number % 2 === 0 ? "Even" : "Odd";
// }
// console.log(isEven(12));
// console.log(isEven(23));
// console.log(isEven(79));
// console.log(isEven(80));
// console.log(isEven(18));


// function priceLevel(price) {
//     return price >= 1000 ? "Expensive" : "Cheap";
// }
// console.log(priceLevel(1000));
// console.log(priceLevel(1001));
// console.log(priceLevel(999));
// console.log(priceLevel(700));
// console.log(priceLevel(2000));

// function getDayName(dayNumber) {
//     switch (dayNumber) {
//         case 1:
//             return "Monday";
//             break;
//         case 2:
//             return "Tuesday";
//             break;
//         case 3:
//             return "Wednesday";
//             break;
    
//         default:
//             return "Unknown day";            
//     }
// }
// console.log(getDayName(1));
// console.log(getDayName(5));
// console.log(getDayName(6));
// console.log(getDayName(2));
// console.log(getDayName(3));

// function trafficLight(color) {
//     switch (color) {
//         case "red":
//             return "Stop";
//             break;
//         case "yellow":
//             return "Wait";
//             break;
//         case "green":
//             return "Go";
//             break;
    
//         default:
//             return "Unknown color";
//     }
// }
// console.log(trafficLight("red"));
// console.log(trafficLight("grey"));
// console.log(trafficLight("yellow"));
// console.log(trafficLight("blue"));
// console.log(trafficLight("green"));

// function isNumberInRange(start, end, number) {
//     return number >= start && number <= end;
// }
// console.log(isNumberInRange(10, 30, 5)); 
// console.log(isNumberInRange(20, 50, 24)); 
// console.log(isNumberInRange(20, 50, 76));
// console.log(isNumberInRange(10, 30, 17));

// function checkAccess(subType) {
//     return subType === "pro" || subType === "vip";
// }
// console.log(checkAccess("pro"));
// console.log(checkAccess("starter"));
// console.log(checkAccess("vip"));
// console.log(checkAccess("free"));

// function toggleModalVisibility(isVisible) {
//     return !isVisible;
// }

// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

// function normalizeInput(input, to) {
//     if (to === "upper") {
//         return input.toUpperCase();
//     }
//     return input.toLowerCase();
// }
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("Big SALE", "lower"));
// console.log(normalizeInput("Big SALE", "upper"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));
// console.log(normalizeInput("Stay Awhile and Listen", "upper"));

// function checkForName(fullName, firstName) {
//     return fullName.toLowerCase().includes(firstName.toLowerCase());
// }
// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Jacob"));
// console.log(checkForName("Caty Stars", "Caty"));
// console.log(checkForName("Caty Stars", "cAtY"));
// console.log(checkForName("Caty Stars", "Andromeda"));

// function checkFileExtension(fileName, ext) {
//     return fileName.endsWith(ext) ? `File extension matches` : `File extension does not match`;
// }
// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("styles.css", ".js"));
// console.log(checkFileExtension("app.js", ".js"));
// console.log(checkFileExtension("app.js", ".html"));
// console.log(checkFileExtension("index.html", ".html"));
// console.log(checkFileExtension("index.html", ".css"));
// console.log(checkFileExtension("index.html", ".js"));

// function getFileName(file) {
//     const fullFile = file.indexOf(".");
//     if (fullFile === -1) {
//         return file;
//     }
//     return file.slice(0, fullFile);
// }
// console.log(getFileName("styles.css"));
// console.log(getFileName("app.js"));
// console.log(getFileName("app"));
// console.log(getFileName("index.js"));
// console.log(getFileName("index.html"));
// console.log(getFileName("index.css"));
// console.log(getFileName("index"));

// function createFileName(name, ext) {
//     return `${name.trim()}.${ext}`;
// }
// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));
// console.log(createFileName(" presentation", "xml"));

// function calculateTotal(number) {
//     let total = 0;
//     let x = 1;
    
//     while (x <= number) {
//         total += x;
//         x += 1;
//     }
    
//     return total;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

// function calculaterTotal(number) {
//     let total = 0;
//     for (let i = 0; i <= number; i += 1) {
//         total += i;        
//     }
//     return total;
// }
// console.log(calculaterTotal(1));
// console.log(calculaterTotal(0));
// console.log(calculaterTotal(7));
// console.log(calculaterTotal(18));
// console.log(calculaterTotal(24));
// console.log(calculaterTotal());

// function calculateEvenTotal(number) {
//     let total = 0;
//     for (let i = 2; i <= number; i++) {
//        if (i % 2 === 0) {
//         total += i; 
//        }               
//     }
//     return total;
// }
// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));
// console.log(calculateEvenTotal());

// function getLength(array) {
//     return array.join("").length;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["M", "a", "n", "g", "o"]));
// console.log(getLength(["top", "picks", "for", "you"]));

// function calculateEngravingPrice(message, pricePerWord) {
//     const totalPrice2 = message.split(" ").length * pricePerWord;
//   return message.split(" ") && totalPrice2;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));

// function getSlice(array, value) {
//   const arraySlice = array.indexOf(value);
  
//     return arraySlice >= 0 ? array.slice(0, arraySlice + 1) : "[]";
  
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));

// function createArrayOfNumbers(min, max) {
//   const total = [];

//   for (let i = min; i <= max; i += 1) {
//       total.push(i);
//     }
//     return total;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());

// function calculateTotalPrice(order) {
//   let sumTotal = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     sumTotal += order[i];
//   }
//   return sumTotal;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function getEvenNumbers(start, end) {
//     let total = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             total.push(i);
//         }
//     }
//     return total;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// console.log(getEvenNumbers());

// function checkStorage1(storage, item) {
//   const normalizedItem = item.toLowerCase();
//   if (storage.includes(normalizedItem)) {
//     return `${normalizedItem} is available to order!`
//   } else {
//     return `Sorry! We are out of stock!`
//   }
  
// }
// console.log(checkStorage1(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage1(["apple", "plum", "pear"], "pLuM"));
// console.log(checkStorage1(["apple", "plum", "pear"], "pear"));
// console.log(checkStorage1(["apple", "plum", "pear"], "pEAr"));
// console.log(checkStorage1(["apple", "plum", "pear"], "orange"));
// console.log(checkStorage1(["apple", "plum", "pear"], "carrot"));

// function getCommonElements(array1, array2) {
//   const commonElements = [];
  
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//     commonElements.push(array1[i]);
//    }
//  } 
//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// // Функція createReversedArray() може приймати довільну кількість аргументів.
// // Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку.
// // Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1].
// // Використовуй цикл або метод масиву toReversed(), який застосовується до масиву
// // і результатом роботи повертає новий масив з елементами у зворотньому порядку.
// function createReversedArray(...args) {
//   return args.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(164, 48, 291));
// console.log(createReversedArray(412, 371, 94, 63, 176));
// console.log(createReversedArray());


// // !nnnnnnnnnnnnnnnnnnnnnnnnnn

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   }
// ];
// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }
// // !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// // !eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//  for (const product of products) {
//     if(product.name === productName) {
//     return product.price;
//   }
// }
// return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// // !WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);