// const div=document.querySelector(".mydiv")

// div.addEventListener("dblclick",e=>e.target.classList.toggle('active'))


// const getElem_num = position => +position || +position === 0? +position :parseInt(position)

// const ground=(position_graund, w_or_h)=>{
// const global = div.getBoundingClientRect()

// const W_max = (window.innerWidth-global.width)*100/window.innerWidth

// const H_max = (window.innerHeight - global.height ) *100 / window.innerHeight 

// switch(w_or_h) {
//   case P.W :
//    if(W_max < position_graund ) return W_max
//   case P.H : 
//   if(H_max < position_graund) return H_max
// }
// return position_graund < 0 ? 0 : position_graund
// }


// document.addEventListener("keydown",function(e){
//  switch(e.key){
//     case "ArrowDown": 
//     div.style.top=  ground(getElem_num(div.style.top)+2 ,P.H) + '%'
//     break;
//     case "ArrowUp":
//         div.style.top= ground(getElem_num(div.style.top)-2, P.H)+ '%'
//     break;
//     case "ArrowRight":
//       div.style.left = ground(getElem_num(div.style.left)+2, P.W)+ '%'

//     break;
//     case "ArrowLeft":
// div.style.left= ground(getElem_num(div.style.left)-2 , P.W)  + '%'
//     break;
//  }
// })

// const side=(h_or_w, elem = div)=> h_or_w===P.H ? elem.getBoundingClientRect().height : elem.getBoundingClientRect().width

// const rate=(sides,h_w)=>{
// switch(h_w){
//   case P.H:
//     if(sides>=window.innerHeight) return window.innerHeight

//   case P.W:
//   if(sides>=window.innerWidth) return window.innerWidth
// }

// return sides<85? 85:sides
// }


// div.addEventListener("click",(e)=>{
//   switch(e.target.closest('button')?.className){
//      case "top":
//      div.style.height=rate(side(P.H)-5,P.H)+"px"
//      break;
//      case "right":
//         div.style.width=rate(side(P.W)+5,P.W)+"px"
//         break;
//         case "bottom":
//         div.style.height=rate(side(P.H)+5,P.H)+"px"
//         break;
//         case "left":
//         div.style.width=rate(side(P.W)+5,P.W)+"px"
//         break;
//   }
//   })





const all_function=()=>{
  const div_all=document.querySelectorAll(".mydiv")

 

for(const div of div_all){


  setTimeout(()=>div.classList.remove("opac"),400)



const randomPosition=()=>{
 div.style.top=ground(getRandom(),P.H)+"%"
   div.style.left=ground(getRandom(),P.W)+"%"
}




div.addEventListener("dblclick",function(e){

   if(e.target.className==="mydiv"){

      e.target.style.backgroundColor='rgb'+"("+getRandom(1,255)+","+getRandom(1,255)+","+getRandom(1,255)+")"
     
      
   }
   if(e.target.className==="graund"){
    randomPosition()
   }  

  
})






const getElem_num = position => +position || +position === 0? +position :parseInt(position)

const ground=(position_graund, w_or_h)=>{
const global = div.getBoundingClientRect()

const W_max = (window.innerWidth-global.width)*100/window.innerWidth

const H_max = (window.innerHeight - global.height ) *100 / window.innerHeight 

switch(w_or_h) {
  case P.W :
   if(W_max < position_graund ) return W_max
  case P.H : 
  if(H_max < position_graund) return H_max
}
return position_graund < 0 ? 0 : position_graund
}


div.title &&  document.addEventListener("keydown",function(e){

 switch(e.key){
   
    case "ArrowDown": 
   
    e.altKey
    ? div.style.height=  rate(side(P.H)+5,P.H)+"px"
    :div.style.top=  ground(getElem_num(div.style.top)+2 ,P.H) + '%'
  
    break;
    case "ArrowUp":
      e.altKey
      ? div.style.height=  rate(side(P.H)-5,P.H)+"px"
      :div.style.top= ground(getElem_num(div.style.top)-2, P.H)+ '%'
    break;
    case "ArrowRight":
      e.altKey
      ?div.style.width=rate(side(P.W)+5,P.W)+"px"
      :div.style.left = ground(getElem_num(div.style.left)+2, P.W)+ '%'
    break;
    case "ArrowLeft":
      e.altKey
      ?div.style.width=rate(side(P.W)-5,P.W)+"px"
      :div.style.left= ground(getElem_num(div.style.left)-2 , P.W)  + '%'
      break;
    case "Enter":
      randomPosition()
      break;
 }
})

const side=(h_or_w, elem = div)=>{
const sides=elem.getBoundingClientRect()

 if(h_or_w===P.H) return sides.height
  return sides.width

}

const rate=(sides,h_w)=>{

switch(h_w){
  case P.H:
    if(sides>=window.innerHeight) return window.innerHeight

  case P.W:
  if(sides>=window.innerWidth) return window.innerWidth
}

return sides<110? 110:sides

}

div.addEventListener("click",function(e){


switch(e.target.closest('button')?.className){
   case "top":

   div.style.height=rate(side(P.H)-5,P.H)+"px"

   break;
   case "right":
      div.style.width=rate(side(P.W)+5,P.W)+"px"
      break;
      case "bottom":
      div.style.height=rate(side(P.H)+5,P.H)+"px"
      break;
      case "left":
  
      break;
}
})
}
}





//  при клике на элемент у него + класс ектив если кликаю на другоой у старого убирается у нового+....
//  редактирую функцию add ad listener 