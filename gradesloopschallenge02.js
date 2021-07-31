


//challenge 1

// var ourQuizGrades = [
//     [ 'Bob', 72 ],  	[ 'Jill', 89 ],
//     [ 'Billy', 95 ],	[ 'Grace', 90 ],
//     [ 'Jen', 77 ],  	[ 'Tom', 80 ],  
//     [ 'Jack', 49 ], 	[ 'Alex', 56 ],
//     [ 'Michelle', 71 ], [ 'Bill', 12 ],
//     [ 'Neil', 72 ], 	[ 'Sam', 88 ],  
//     [ 'Henry', 43 ], [ 'Dave', 69 ]  
//   ]

//   let passedGrades = 0
//   let failedGrades = 0
//   for (let i = 0; i < ourQuizGrades.length; i++) {
//       if ( ourQuizGrades[i][1] < 70){
//        let grade = failedGrades++
// } else{
//     let grade = passedGrades++
// }

// }

// console.log(`${passedGrades} students passed the quiz, and ${failedGrades} students failed...
// `)


// challenge 2

// let passedGrades = 0
// let failedGrades = 0

// for (let i = 0; i < ourQuizGrades.length; i++){
//     let grade = ourQuizGrades[i][1]
//     if ( grade >= 70){
//         passedGrades++
        
//         console.log(`${ourQuizGrades[i][0]} passed with a ${ourQuizGrades[i][1]}`)
//     } 
    
//     if ( grade < 70){
//         failedGrades++
//         console.log(`${ourQuizGrades[i][0]} failed with a ${ourQuizGrades[i][1]}`)

//     }
//     }
    
//     console.log(`${passedGrades} students passed the quiz, and ${failedGrades} students failed...
// `)



// challenge 3

var ourQuizGrades = [
    [ 'Bob', 72 ],  	[ 'Jill', 89 ],
    [ 'Billy', 95 ],	[ 'Grace', 90 ],
    [ 'Jen', 77 ],  	[ 'Tom', 80 ],  
    [ 'Jack', 49 ], 	[ 'Alex', 56 ],
    [ 'Michelle', 71 ], [ 'Bill', 12 ],
    [ 'Neil', 72 ], 	[ 'Sam', 88 ],  
    [ 'Henry', 43 ], [ 'Dave', 69 ]  
  ]


  

  for ( let i = 0; i < ourQuizGrades.length; i++){
      let grade = ourQuizGrades[i][1]
    if ( grade > 71 && grade < 96 ){
      console.log(`${ourQuizGrades[i][0]} passed with a ${ourQuizGrades[i][1]}`)
    }
    
  }