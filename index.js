//return early pattern for functions  
function abTest (a,b){
    if (a<0 || b<0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
}
abTest(-2,2) 

//objects example
var myDog = {       //declaring object, name ,legs , tails are properities of object. we can acess the data in objects using properities
    "name" : "Bulldog",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["humans","animals"]
};

//accesing object properties with dot notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
   
  var hatValue = testObj.hat; 
  var shirtValue = testObj.shirt;
  //accesing object properties with [] notation
  var shoesValue = testObj["shoes"];
