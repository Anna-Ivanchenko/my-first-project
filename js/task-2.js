// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     };
//   });
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// // !WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//    orderedItems.forEach((item) => {
//      totalPrice += item
//    });
  
//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// // !WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

// const calculateTotalPrice1 = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice1(5, 100));
// console.log(calculateTotalPrice1(8, 60));
// console.log(calculateTotalPrice1(3, 400));

// // !WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWw

// const calculateTotalPrice2 = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice2(5, 100));
// console.log(calculateTotalPrice2(8, 60));
// console.log(calculateTotalPrice2(3, 400));