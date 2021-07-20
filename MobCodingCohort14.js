// function titleCase(str) {
   
//    newStr = str.toLowerCase().split("") 

//     for( let i = 0; i < newStr.length; i++){
//         newStr = str[i].toUpperCase().splice(" ")
//         console.log(newStr[i])
//     }
    
    
//     return str;
//   }
  
//   titleCase("I'm a little tea pot");

  /*Section 1: Split
  split takes a string data-type and splits it up into an array by the argument given.
  split is a non-destructive method. (This means it does not alter the str variable)
  */

  
  
  /** Section 2: Join 
  Join takes the array created by split and brings it together. (Any sub-string created will be brought together into one string)
  
  */

  function splitStr(value , arg){
    let str = []

    for (let i = 0; i < value.length; i++) {
      if(value.slice(i , i + arg.length) == arg){
            str.push(value.slice(0 , i))
            value = value.slice(i + arg.length)
             console.log(i , value);
                i = 0
            }  
        
    }
    str.push(value)
    console.log(str , value);

}

  splitStr("I'm a little tea pot" , " ")