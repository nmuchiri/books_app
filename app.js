// console.log("fired")
let array=["A", "A", "B", "B","K", "K", "N", "N","G", "G", "O", "O"]


let printThis= ""
// loop over the array
for(let i =0; i<array.length;i++){
 console.log(array[i])
 console.log(array[0])

//  * both array[i] and array[0] give the same result. Why?!!
}

console.log(printThis)

cards=document.querySelectorAll(".column")
console.log(cards)
// /////////////////////////////////////////////////////////////
// BIG IDEA: PUSH ARRAY TO THE DIVS

// loop over the cards// divs
for(let i =0; i<cards.length;i++){
     console.log(cards[i])

   

     printThis += "<br>"+array[i]
     console.log(printThis)

     cards[i].innerHTML = printThis
}


// 


// // document.getElementById('ids').innerHTML = register()

//   //  var ids = ['name','lname','email','password','cpassword'];
//   //  var printThis = "";
//  //   for(var i = 0; i < ids.length; i++){
//         printThis += "<br>"+ids[i];
//   //
//         document.getElementById('ids').innerHTML = register()

// source: https://www.codecademy.com/forum_questions/506c945984ba060002005c27?locale=en

// let array1= ["A"]
// console.log(array1)






let firstCard= null

// push array to the front of the squares on the board
// loop through array and add to the divs

// NOTE TO SELF 
// I should add code that didn't work and commit!







// let cards= document.querySelectorAll(".column")
// const createBoard= ()=>{ 

//         document.getElementById("card 1").innerHTML="A"
//         document.getElementById("card 2").innerHTML= "A"
//         document.getElementById("card 3").innerHTML= "B"
//         document.getElementById("card 4").innerHTML= "B"
//         document.getElementById("card 5").innerHTML= "K"
//         document.getElementById("card 6").innerHTML= "K"
//         document.getElementById("card 7").innerHTML= "N"
//         document.getElementById("card 8").innerHTML= "N"
//         document.getElementById("card 9").innerHTML= "G"
//         document.getElementById("card 10").innerHTML= "G"
//         document.getElementById("card 11").innerHTML= "O"
//         document.getElementById("card 12").innerHTML= "O"
       


// select divs by id and added the inner HTML manually instead of using loops- they didn't work

// add event listener to each card by using for each
cards.forEach(cards => cards.addEventListener("click", ()=>{
    console.log(cards)
        }))

// }







// shuffle array- there's no method to shuffle arrays


document.addEventListener("DOMContentLoaded", ()=>{
   
    // createBoard()

})
