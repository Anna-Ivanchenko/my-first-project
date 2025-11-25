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
