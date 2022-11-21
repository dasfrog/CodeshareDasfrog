//console.log('its a hack');
/*console.error('its a hack');
console.warn('it might be a hack');*/

//var ,let, const

/*for(let printnumbers=0;printnumbers<5;printnumbers++){
    console.log(printnumbers);
}*/
//console.log(printnumbers);

// const fixedconstant = 100;
// //fixedconstant = 101;
// console.log(fixedconstant);

//String, Number, Boolean, null , undefined
// let carName = 'BMW';
// let carPrice = 50000;
// let isSUV = true;
// let isCustomised = false;
// let customerName = null;
// let customerAge = undefined;
// console.log('carName : '+carName);
// console.log(carPrice);
// console.log(isSUV);
// console.log(isCustomised);
// console.log(customerName);
// console.log(customerAge);

// console.log(typeof isCustomised);

//const javascriptgreetings = 'Hello World, this is a description added';

// console.log(javascriptgreetings.length);
// console.log(javascriptgreetings.toUpperCase());
// console.log(javascriptgreetings.toLowerCase());

// console.log(javascriptgreetings.split(' '));//array

// console.log(javascriptgreetings.substring(0,5).toUpperCase());
// console.log(javascriptgreetings.substring(6,11));
// const substring = javascriptgreetings.substring(6,11);
// console.log(substring.toUpperCase());

//console.log(javascriptgreetings.split(' ').length);

// const javascriptArrayString = ['name1','name2'];

// const javascriptArrayNumber = [1,2,3,4,5,6];
// console.log(javascriptArrayNumber);

// javascriptArrayNumber.push(7);
// console.log(javascriptArrayNumber);

// javascriptArrayNumber.pop();
// console.log(javascriptArrayNumber);

// javascriptArrayNumber.unshift(100);
// console.log(javascriptArrayNumber);

// console.log(javascriptArrayNumber.slice(0,4));

// console.log(javascriptArrayNumber);

// const sortVariableArray = [1,23,45,2,8,9,10,12,23,44,18,100,72];
// console.log(sortVariableArray);
// console.log(sortVariableArray.sort());

// console.log(sortVariableArray.sort((a,b) => a-b));

// const car = {
//   name: "BMW x1",
//   manufactureddate: "20-Oct-2020",
//   price: 5000,
//   isSedan: true,
//   ownerChanged: ["Ruby", "Blacksmith", "Odeon"],
//   addressManufactured: {
//     street: "xyz street",
//     city: "London"
//   }
// };
// console.log(car);
// delete car.price;
// console.log(car["isSedan"]);

// const carshowroom = [
//   car,
//   {
//     name: "BMW x2",
//     manufactureddate: "20-Oct-2022",
//     price: 7000,
//     isSedan: false,
//     ownerChanged: [],
//     addressManufactured: {
//       street: "xyz street",
//       city: "Liverpool"
//     }
//   }
// ];

// console.log(carshowroom);

// console.log("car name is : " + car.name);

// console.log(`car name is ${car.name}`);

// function greetCarOwner() {
//   console.log("Hi owner");
// }

// const greetUser = function () {
//   console.log("Hi owner");
// };

// const greetUser = () => {
//   console.log("Hi owner 1");
// };

// greetUser();

// const sumTwoNumbers = (a, b) => {
//   return a / b;
// };

// console.log(sumTwoNumbers(10, 2));

// const garage = [];

// const newCarMethod = (brand, color, model, addressManufactured) => {
//   const car = {
//     carbrand: brand,
//     carcolor: color,
//     carmodel: model,
//     carManufacturedaddress: {
//       city: addressManufactured.city,
//       postcode: addressManufactured.city
//     }
//   };
//   garage.push(car);
// };

// newCarMethod(
//   "BMW",
//   "Matt Black",
//   "X500",
//   (address = { city: "Liverpool", postcode: 510001 })
// );
// newCarMethod(
//   "Bugati veron",
//   "Blue line",
//   "Phantom manor",
//   (address = { city: "Las Vegas", postcode: 676776 })
// );

// console.log(`Cars in the garage are ${garage.length}`);
// console.log(JSON.stringify(garage));

//Operators
// const x = 9;
// console.log(x);

//addition
// const x = 10;
// const y = 21;
// let z = x + y;
// console.log(z);

//subtraction
// const x = 10;
// const y = 21;
// let z = x - y;
// console.log(z);

//Multiply
// const x = 10;
// const y = 21;
// let z = x * y;
// console.log(z);

//Division
// const x = 10;
// const y = 5;
// let z = x / y;
// console.log(z);

//Compound
// let x = 10;
// x /= 10;
// console.log(x);

let x = 8;
let y = "blah";
let z = x + y;
console.log(z);
