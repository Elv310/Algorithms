// function whatIsInAName(collection, source) {
    
    
//     var arr = [];
   
//     for (let i = 0; i < collection.length; i++) {
//         const testObj = collection[i];
        
//         console.log(testObj);
        
//         let passedTest = true
        
//         for (const key in source) {
//             if (testObj[key] != source[key]) {
                
                
//             }
//         }
        
        
//         if (passedTest == true)
//         arr.push(testObj)
    
    
//     }


//     return arr;
  


// } 
  
//    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//   whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })
//   whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
//   whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
//   whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
//   whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})



// function getVoteCount(votes) {
//   function getVoteCount(votes) {
//     return votes['upvotes'] - votes['downvotes']
//   }	
// }


// Test.assertEquals(getVoteCount({ upvotes: 13, downvotes: 0 }), 13)
// Test.assertEquals(getVoteCount({ upvotes: 2, downvotes: 33 }), -31)
// Test.assertEquals(getVoteCount({ upvotes: 132, downvotes: 132 }), 0)
// Test.assertEquals(getVoteCount({ upvotes: 0, downvotes: 0 }), 0)
// Test.assertEquals(getVoteCount({ downvotes: 4, upvotes: 1 }), -3)








function fiftyThirtyTwenty(ati) {
	
    return { "Needs": ati * 0.5, "Wants": ati * 0.3, "Savings": ati * 0.2 }
  
}

Test.assertSimilar(fiftyThirtyTwenty(10000), {"Needs": 5000, "Wants": 3000, "Savings": 2000})
Test.assertSimilar(fiftyThirtyTwenty(50000), {"Needs": 25000, "Wants": 15000, "Savings": 10000})
Test.assertSimilar(fiftyThirtyTwenty(13450), {"Needs": 6725, "Wants": 4035, "Savings": 2690})
Test.assertSimilar(fiftyThirtyTwenty(27800), {"Needs": 13900, "Wants": 8340, "Savings": 5560})
Test.assertSimilar(fiftyThirtyTwenty(19000), {"Needs": 9500, "Wants": 5700, "Savings": 3800})
Test.assertSimilar(fiftyThirtyTwenty(17610), {"Needs": 8805, "Wants": 5283, "Savings": 3522})
Test.assertSimilar(fiftyThirtyTwenty(25000), {"Needs": 12500, "Wants": 7500, "Savings": 5000})
Test.assertSimilar(fiftyThirtyTwenty(100000), {"Needs": 50000, "Wants": 30000, "Savings": 20000})
Test.assertSimilar(fiftyThirtyTwenty(347100), {"Needs": 173550, "Wants": 104130, "Savings": 69420})












function getBudgets(arr) {
	
}

Test.assertEquals(getBudgets([{name: "John",  age: 21, budget: 23000}, {name: "Steve",  age: 32, budget: 40000}, {name: "Martin",  age: 16, budget: 2700}]), 65700)
Test.assertEquals(getBudgets([{name: "John",  age: 21, budget: 29000}, {name: "Steve",  age: 32, budget: 32000}, {name: "Martin",  age: 16, budget: 1600}]), 62600)
Test.assertEquals(getBudgets([{name: "John",  age: 21, budget: 19401}, {name: "Steve",  age: 32, budget: 12321}, {name: "Martin",  age: 16, budget: 1204}]), 32926)
Test.assertEquals(getBudgets([{name: "John",  age: 21, budget: 10234}, {name: "Steve",  age: 32, budget: 21754}, {name: "Martin",  age: 16, budget: 4935}]), 36923)






// class Rectangle {
//     constructor(sideA, sideB) {
//       this.sideA = sideA
//       this.sideB = sideB
//     }
//     getArea(){return this.sideA*this.sideB}
//     getPerimeter(){return (this.sideA + this.sideB) *2}
//   }
  
  
//   class Circle {
//       // put your code here
//   }
  
  
//   // unquote and use run to test these cases:
  
  /*let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());
  */


  // Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
for (let i = 0; i < contacts.length; i++){
if ( contacts[i].firstName === name){
  return contacts[i][prop] || "No such property"
}



}
 return "No such contact"
}

lookUpProfile("Akira", "likes");