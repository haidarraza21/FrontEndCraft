/**Give discount based on age, gender for metro ticket
   FEmales get 50% off
   Kids under 5 year are free
   kids upto 8 year have half ticket 
   people over 65 years of age only pay 30% of the ticket 
   In case of multiple discount max will be apply.
*/

let discount ;
let gender = female ;
let age = 18;
if(age < 5 ){
   discount = 100;
} else if(gender == female || age <= 8){
   discount = 50;
} else if (age > 65 ){
   discount = 30;
} else{
   discount = 0;
}
console.log(`Your discoun is ${discount}%`)

   