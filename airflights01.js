// level 1 challenge                    //for                           
// a. write a program that           counts            and              outputs          numbers from 10 to 27
// b. write a program that counts and outputs EVEN numbers from 10 to 28 
// for (i =9; i < 27; i++){   //Hey can you repeat something 

//     console.log(     i +1  )  //Hey can you print whats inside the paranthesis 
// }

    //hey start at this number
    //initalizer
// for (i = 10; i < 29; i++){

     // i is divided by 2 and remainer == 0 
        // number % 

        //if the number is even I want you to print it out
    // if(i % 2 ==0){
    //     console.log(i)
    // }


  
    
    
// }




// level 2 challenge car rental mileage charge
// daily rental cost, number of days rented, miles driven       //array of variables  //for loop
// if miles driven PER DAY (milesDriven/rentalDays) is greater than 10 add $50 to the bill     //if statement
    

// output the total rental car cost         //console.log
                //0    1   2
// var rentalCost = [55, 75, 90]
// var rentalDays = [5, 7, 4]
// var milesDriven = [44, 35, 60]

//we are using a for loop because they are really good for looking information inside of an array 
// for(i = 0; i < milesDriven.length; i = i  + 1 ){
    //conditional -  what do you want to ask ? is miles greater than 10

    // var bill = rentalCost[i] * rentalDays[i]


    // if(      (milesDriven[i]/rentalDays[i] )   >     10     ) {
    //     //miles per day 
    //   bill = bill + 50
    
    // }

//     console.log("Total ",bill, "cost")
// }



// level 3 challenge - air flights 
// Array with 3 flightCity names (BOS/Boston , PVD/Providence , JFK/NewYork  )
// Array with each possible leg (BOS-PVD, BOS-JFK, PVD-JFK )
// Array with each leg distance (41, 190, 155)
// Use a loop to calculate the total number of  possible connecting flights

//for loop

var flightCityNames = ["BOS/Boston" , "PVD/Providence" , "JFK/NewYork"]
var connectionFlight = ["BOS-PVD", "BOS-JFK", "PVD-JFK"]
var connectionDistance = [41,190,155]

for (i = 0; i < connectionFlight.length; i++){
    console.log(connectionFlight[i])
}



