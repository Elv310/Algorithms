// function convertToF(celsius) {
//   let fahrenheit = celsius * (9 / 5) + 32;
//   return fahrenheit;
// }

// convertToF(30)
  

// function reverseString(str) {
//   return str
//   .split("")
//   .reverse()
//   .join("");
// }
// reverseString("hello");



// function largestOfFour(arr) {
//   let newArr = []
//   for ( let i = 0; i < arr.length; i++){
//     let largestNumber = arr[i][0]
//     for ( let j = 0; j < arr[i].length; j++){
//       if ( arr[i][j] > largestNumber){
//         largestNumber = arr[i][j]
//       }
//     }
//     newArr[i] = largestNumber
//   }
//   return newArr;

// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);





// function titleCase(str) {
//   newStr = str.split(" ")
//   str = str.toLowerCase().split("") 

//   for( let i = 0; i < newStr; i++){
//       newStr = str[i].toLowerCase().split(" ")
//       console.log(newStr[i])
//   }
  
  
//   return str;
// }

// titleCase("I'm a little tea pot");

//^^COME BACK TO THIS ONE




// function repeatStringNumTimes(str, num) {
//   if (num < 1) {
//     return "";
//   } else {
//     return str + repeatStringNumTimes(str, num --);
//   }
// }







// function truncateString(str, num) {

//   if (str.length > num) {
//     return str.slice(0, num);
//   } else {
  //   }
  //     return str;
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);





// function bouncer(arr) {
//   let Arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) Arr2.push(arr[i]);
//   }
//   return Arr2;
// }

// bouncer([7, "ate", "", false, 9]);




// function findElement(arr, func) {
//   let num = 0;

//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }

//   return undefined;
// }
// findElement([1, 2, 3, 4], num => num % 2 === 0);



// function booWho(bool) {
  
  
//   return typeof bool === "boolean";


// }


// booWho(null);
// booWho(null);




