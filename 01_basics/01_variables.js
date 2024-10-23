const accountId=145333
let accountEmail="gp12e345@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState; //outpur -> undefined
  
// accountId=2 //not allowed 
accountEmail="efgh@gmail.com"
console.log(accountId);
console.log(accountEmail);

/* prefered not to use var
becuase of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
