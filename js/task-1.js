function getDiscountPrice(price, discount) {
    const discountValue = Number.parseFloat(discount);
    return price - (price * discountValue);
}
console.log(getDiscountPrice(1000, 0.2))

function sayHello(name) {
    return `Hello ${name}!`;
}
console.log(sayHello("Oksana"))

function getRectangleArea(width, height) {
    const widthValue = Number.parseFloat(width);
    const heightValue = Number.parseFloat(height);
    return widthValue * heightValue;
}
console.log(getRectangleArea(10, 6));
console.log(getRectangleArea(15.6, 8.5));
console.log(getRectangleArea(10.25, 5.15));

function kmToMeters(km) {
    const kmValue = Number.parseFloat(km);
    return kmValue * 1000;
}
console.log(kmToMeters(20));
console.log(kmToMeters(80.45));
console.log(kmToMeters(100.256));

function getPricePerKg(totalPrice, weight) {
    const totalPriceValue = Number.parseFloat(totalPrice);
    const weightValue = Number.parseFloat(weight);
    return totalPriceValue / weightValue;
}
console.log(getPricePerKg(500, 0.2));
console.log(getPricePerKg(180, 0.3));
console.log(getPricePerKg(125, 0.5));

function formatProduct(name, price) {
    return `Product ${name} costs ${price} credits`;
}
console.log(formatProduct("Alex", 500));

function isAdult(age) {       
    return age >= 18;
}
console.log(isAdult(10));
console.log(isAdult(15));
console.log(isAdult(18));
console.log(isAdult(28));

function checkAge(age) {

    if (age>=18) {
        return `You are an adult`;
    }
}
console.log(checkAge(20));
console.log(checkAge(17));
console.log(checkAge(10));
console.log(checkAge(30));

function checkStorage(available, ordered) {
    if (available < ordered) {
        return `Not enough goods in stock!`;
    } else {
        return `Order is processed, our manager will contact you`;
    }
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));

function checkStoragen(available, ordered) {
  if (ordered === 0) {
    return `There are no products in the order!`;
  } else if (available < ordered) {
    return `Your order is too large, there are not enough items in stock!`;
  } else if (available >= ordered) {
    return `The order is accepted, our manager will contact you`;
  }   
}
console.log(checkStoragen(100, 50));
console.log(checkStoragen(100, 130));
console.log(checkStoragen(70, 0));
console.log(checkStoragen(200, 20));
console.log(checkStoragen(200, 250));
console.log(checkStoragen(150, 0));
console.log(checkStoragen(80, 80));

function checkPassword(password) {
    const correctPassword = "jqueryismyjam";
    return password === correctPassword ? `Access granted` : `Access denied, wrong password!`;
}
console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));

function getSubscriptionPrice(type) {
    switch (type) {
        case "starter":
            return 0
            break;
        case "professional":
            return 20
            break;
        case "organization":
            return 50
            break;
    
        default:
            return `Invalid subscription type!`;
    }
}

console.log(getSubscriptionPrice("professional"));
console.log(getSubscriptionPrice("organization"));
console.log(getSubscriptionPrice("starter"));
console.log(getSubscriptionPrice("random"));
console.log(getSubscriptionPrice("premium"));

function checkMinSum(amount) {
    if (amount > 100) {
        return `OK`;
    }
}

console.log(checkMinSum(75));
console.log(checkMinSum(200));
console.log(checkMinSum(100));
console.log(checkMinSum(150));

function isPositive(number) {
    if (number > 0) {
        return `Positive`;
    }
}

console.log(isPositive(75));
console.log(isPositive(-10));
console.log(isPositive(1));
console.log(isPositive(-5));

function canWatch(age) {
    if (age >= 12) {
        return `Allowed`;
    } else {
        return `Denied`;
    }
}

console.log(canWatch(75));
console.log(canWatch(10));
console.log(canWatch(18));
console.log(canWatch(12));

function checkPasswordl(password) {
    
    if (password === "admin") {
        return `Correct`;
    } else {
        return `Wrong password`;
    }
}

console.log(checkPasswordl("Anna"));
console.log(checkPasswordl("admin"));
console.log(checkPasswordl("user"));
console.log(checkPasswordl("admin1"));

function classifyAge(age) {
    if (age < 12) {
        return `Child`;
    } else if (age >= 12 && age < 18) {
        return `Teenager`;
    } else {
        return `Adult`;
    }     
}

console.log(classifyAge(11));
console.log(classifyAge(12));
console.log(classifyAge(17));
console.log(classifyAge(18));
console.log(classifyAge(22));

function getGrade(score) {
    if (score < 50) {
        return "Low";
    } else if (score >= 50 && score < 80) {
        return "Medium";
    } else {
        return "High";
    }
}

console.log(getGrade(12));
console.log(getGrade(50));
console.log(getGrade(79));
console.log(getGrade(80));
console.log(getGrade(200));

function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
console.log(isEven(12));
console.log(isEven(23));
console.log(isEven(79));
console.log(isEven(80));
console.log(isEven(18));


function priceLevel(price) {
    return price >= 1000 ? "Expensive" : "Cheap";
}
console.log(priceLevel(1000));
console.log(priceLevel(1001));
console.log(priceLevel(999));
console.log(priceLevel(700));
console.log(priceLevel(2000));

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
    
        default:
            return "Unknown day";            
    }
}
console.log(getDayName(1));
console.log(getDayName(5));
console.log(getDayName(6));
console.log(getDayName(2));
console.log(getDayName(3));

function trafficLight(color) {
    switch (color) {
        case "red":
            return "Stop";
            break;
        case "yellow":
            return "Wait";
            break;
        case "green":
            return "Go";
            break;
    
        default:
            return "Unknown color";
    }
}
console.log(trafficLight("red"));
console.log(trafficLight("grey"));
console.log(trafficLight("yellow"));
console.log(trafficLight("blue"));
console.log(trafficLight("green"));

function isNumberInRange(start, end, number) {
    return number >= start && number <= end;
}
console.log(isNumberInRange(10, 30, 5)); 
console.log(isNumberInRange(20, 50, 24)); 
console.log(isNumberInRange(20, 50, 76));
console.log(isNumberInRange(10, 30, 17));

function checkAccess(subType) {
    return subType === "pro" || subType === "vip";
}
console.log(checkAccess("pro"));
console.log(checkAccess("starter"));
console.log(checkAccess("vip"));
console.log(checkAccess("free"));

function toggleModalVisibility(isVisible) {
    return !isVisible;
}

console.log(toggleModalVisibility(true));
console.log(toggleModalVisibility(false));

function normalizeInput(input, to) {
    if (to === "upper") {
        return input.toUpperCase();
    }
    return input.toLowerCase();
}
console.log(normalizeInput("This ISN'T SpaM", "lower"));
console.log(normalizeInput("This ISN'T SpaM", "upper"));
console.log(normalizeInput("Big SALE", "lower"));
console.log(normalizeInput("Big SALE", "upper"));
console.log(normalizeInput("Stay Awhile and Listen", "lower"));
console.log(normalizeInput("Stay Awhile and Listen", "upper"));

function checkForName(fullName, firstName) {
    return fullName.toLowerCase().includes(firstName.toLowerCase());
}
console.log(checkForName("Jason Neis", "Jason"));
console.log(checkForName("Jason Neis", "jAsOn"));
console.log(checkForName("Jason Neis", "Jacob"));
console.log(checkForName("Caty Stars", "Caty"));
console.log(checkForName("Caty Stars", "cAtY"));
console.log(checkForName("Caty Stars", "Andromeda"));

function checkFileExtension(fileName, ext) {
    return fileName.endsWith(ext) ? `File extension matches` : `File extension does not match`;
}
console.log(checkFileExtension("styles.css", ".css"));
console.log(checkFileExtension("styles.css", ".js"));
console.log(checkFileExtension("app.js", ".js"));
console.log(checkFileExtension("app.js", ".html"));
console.log(checkFileExtension("index.html", ".html"));
console.log(checkFileExtension("index.html", ".css"));
console.log(checkFileExtension("index.html", ".js"));

function getFileName(file) {
    const fullFile = file.indexOf(".");
    if (fullFile === -1) {
        return file;
    }
    return file.slice(0, fullFile);
}
console.log(getFileName("styles.css"));
console.log(getFileName("app.js"));
console.log(getFileName("app"));
console.log(getFileName("index.js"));
console.log(getFileName("index.html"));
console.log(getFileName("index.css"));
console.log(getFileName("index"));

function createFileName(name, ext) {
    return `${name.trim()}.${ext}`;
}
console.log(createFileName(" order ", "txt"));
console.log(createFileName("report ", "csv"));
console.log(createFileName(" presentation", "xml"));

function calculateTotal(number) {
    let total = 0;
    let x = 1;
    
    while (x <= number) {
        total += x;
        x += 1;
    }
    
    return total;
}
console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(0));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal());

function calculaterTotal(number) {
    let total = 0;
    for (let i = 0; i <= number; i += 1) {
        total += i;        
    }
    return total;
}
console.log(calculaterTotal(1));
console.log(calculaterTotal(0));
console.log(calculaterTotal(7));
console.log(calculaterTotal(18));
console.log(calculaterTotal(24));
console.log(calculaterTotal());

function calculateEvenTotal(number) {
    let total = 0;
    for (let i = 2; i <= number; i++) {
       if (i % 2 === 0) {
        total += i; 
       }               
    }
    return total;
}
console.log(calculateEvenTotal(1));
console.log(calculateEvenTotal(3));
console.log(calculateEvenTotal(7));
console.log(calculateEvenTotal(18));
console.log(calculateEvenTotal(27));
console.log(calculateEvenTotal());


















