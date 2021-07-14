  /* Access the string
  -Split the words of the string into an array
  -Put all the words into lower case
  -Capitilize the first letter of each word
  -Store the new string into variable 
  -Return the new string
  
  
  
  
  */



function titleCase(str) {
    newStr = str.split(" ")
    str = str.toLowerCase().split("") 

    for( let i = 0; i < newStr; i++){
        newStr = str[i].toLowerCase().split(" ")
        console.log(newStr[i])
    }
    
    
    return str;
  }
  
  titleCase("I'm a little tea pot");


