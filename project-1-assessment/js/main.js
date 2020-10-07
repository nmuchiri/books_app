console.log("Moto")


let count=0;
addition= document.querySelector(".button-two")
let subtraction=document.getElementById("subtraction")

counter= document.querySelector(".counter")
counter.innerHTML= 0
input=document.querySelector(".input-button")
console.log(input)
console.log(input.value)



function subtract (){
    // console.log(subtraction)
    let x=this.value
    console.log(x)     
    subtraction.innerHTML="-"
    newNumber= parseInt(subtraction.value)
    subtraction.value=newNumber
    
    console.log(newNumber)

    


    subtraction.addEventListener("click", subtract)

}
    


function add (){
    addition.innerHTML= "+"
    newNumber=parseInt(addition.value)
    addition.value=newNumber
    console.log(newNumber)
    
    // console.log(addition)
    
    addition.addEventListener("click", add)
}


document.addEventListener("DOMContentLoaded", ()=>{
    
    subtract()
    add()
   
})

