const P = {
    W: 'W',
    H: 'H'
}


const getRandom=(min=0, max=100)=>Math.floor(min +  Math.random() * (max - min+1) )



let counter=0 
const id=()=> ++counter



const allimg=document.querySelector(".all_img")
const mainbutton=document.querySelector(".main")
let Obj_ = [
   
]