

 const side = (h_or_w, elem = div) => {
  const sides = elem.getBoundingClientRect()

  if (h_or_w === P.H) return sides.height
  return sides.width

}

const rate = (sides, h_w) => {

  switch (h_w) {
    case P.H:
      if (sides >= window.innerHeight) return window.innerHeight

    case P.W:
      if (sides >= window.innerWidth) return window.innerWidth
  }

  return sides < 110 ? 110 : sides

}


const getElem_num = position => +position || +position === 0 ? +position : parseInt(position)


const ground = (position_graund, w_or_h,div) => {
  const global = div.getBoundingClientRect()

  const W_max = (window.innerWidth - global.width) * 100 / window.innerWidth

  const H_max = (window.innerHeight - global.height) * 100 / window.innerHeight

  switch (w_or_h) {
    case P.W:
      if (W_max < position_graund) return W_max
    case P.H:
      if (H_max < position_graund) return H_max
  }
  return position_graund < 0 ? 0 : position_graund
}

const randomPosition = div => {
  const position=ground(getRandom(), P.H, div) + "%"
  div.style.top = position

  div.style.left = ground(getRandom(), P.W, div) + "%"
}

const all_function = () => {
  const div_all = document.querySelectorAll(".mydiv")



  for (const div of div_all) {
const O =  Obj_[div.id]

    setTimeout(() => div.classList.remove("opac"), 400)



    




    div.addEventListener("dblclick", function (e) {


      if (e.target.className === "mydiv") {
   
        
        // console.log(div.id)
        
        const color='rgb' + "(" + getRandom(1, 255) + "," + getRandom(1, 255) + "," + getRandom(1, 255) + ")"
        e.target.style.background=color;
      O.color=color
      }
      if (e.target.className === "graund") {
        randomPosition(div)
      }


    })






   


    
//       document.addEventListener("keydown", function (e) {



// //
//       switch (e.key) {

//         case "ArrowDown":
// console.log(Obj_); 
//           // e.altKey
//           //   ? div.style.height = rate(side(P.H) + 5, P.H) + "px"
//           //   : div.style.top = ground(getElem_num(div.style.top) + 2, P.H) + '%'

//           if(e.altKey){ 

//             const Obj_height=rate(side(P.H) + 5, P.H) 
//             div.style.height = Obj_height+ "px"
//            O.height=Obj_height
//           //  console.log(O);
//           }else {
//             div.style.top = ground(getElem_num(div.style.top) + 2, P.H) + '%'
//           }

//           break;
//         case "ArrowUp":
//           // e.altKey
//           //   ? div.style.height = rate(side(P.H) - 5, P.H) + "px"
//           //   : div.style.top = ground(getElem_num(div.style.top) - 2, P.H) + '%'
//          if(e.altKey){
//            const Obj_height=rate(side(P.H)-5,P.H)
//            div.style.height=Obj_height+"px"
//            O.height=Obj_height
//          }else{
//           div.style.top = ground(getElem_num(div.style.top) - 2, P.H) + '%'
//          }

//           break;
//         case "ArrowRight":
//           // e.altKey
//           //   ? div.style.width = rate(side(P.W) + 5, P.W) + "px"
//           //   : div.style.left = ground(getElem_num(div.style.left) + 2, P.W) + '%'
//           if(e.altKey){
//             const Obj_width=rate(side(P.W)+5,P.W);
//             div.style.width=Obj_width+"px"
//             O.width=Obj_width
//           }else{
//             div.style.left = ground(getElem_num(div.style.left) + 2, P.W) + '%'
//           }

//           break;
//         case "ArrowLeft":
//           // e.altKey
//           //   ? div.style.width = rate(side(P.W) - 5, P.W) + "px"
//           //   : div.style.left = ground(getElem_num(div.style.left) - 2, P.W) + '%'
//           if(e.altKey){ 
//             const Obj_width=rate(side(P.W)-5,P.W);
//             div.style.width=Obj_width+"px"
//             O.width=Obj_width
//           }else{
//             div.style.left = ground(getElem_num(div.style.left) -2, P.W) + '%'
//           }
//           break;
//         case "Enter":
//           randomPosition()
//           break;
//       }
//     })


  
   

   

    div.addEventListener("click", function (e) {


      switch (e.target.closest('button')?.className) {
        case "top":

          div.style.height = rate(side(P.H, div) - 5, P.H) + "px"

          break;
        case "right":
          div.style.width = rate(side(P.W, div) + 5, P.W) + "px"
          break;
        case "bottom":
          div.style.height = rate(side(P.H, div) + 5, P.H) + "px"
          break;
        case "left":
          div.style.width= rate(side(P.W, div)-5, P.W) + "px"
          break;
      }
    })
  }
}


