

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
  const O=Obj_[div.id]
  const raTop=ground(getRandom(), P.H, div)
  div.style.top =  raTop+ "%"
  O.top= raTop
  const raLeft=ground(getRandom(), P.W, div)
  div.style.left = raLeft + "%"
  O.left=raLeft
  
}

const all_function = () => {
  const div_all = document.querySelectorAll(".mydiv")



  for (const div of div_all) {
const O =  Obj_[div.id]


    setTimeout(() => div.classList.remove("opac"), 400)



    




    div.addEventListener("dblclick", function (e) {

      console.log(e.target.className);
      if (e.target.className === "mydiv" || e.target.className === "mydiv active") {
        
        const color='rgb' + "(" + getRandom(1, 255) + "," + getRandom(1, 255) + "," + getRandom(1, 255) + ")"
        e.target.style.background=color;
      O.color=color
      }
      if (e.target.className === "graund") {
        randomPosition(div)
      }
      

    })






   
   

   

div.oncontextmenu = ()=> false

 div.addEventListener("contextmenu",e=>{

Obj_ = Obj_.filter(filt=>{
  if(filt._id!==O._id){
    return true
  }
  console.log(filt)
  div.remove()

  })
  })




    div.addEventListener("click", function (e) {
      if(e.target.className==="mydiv"){
        O.title = true
        NewObj_()
        
      }


      switch (e.target.closest('button')?.className) {
        case "top":
          const stTop=rate(side(P.H, div) - 5, P.H)
          div.style.height =  stTop+ "px"
        O.height=stTop
          break;
        case "right":
          const stRight=rate(side(P.W, div) + 5, P.W) 
          div.style.width = stRight +"px"
        O.width=stRight
          break;
        case "bottom":
          const stBot=rate(side(P.H, div) + 5, P.H)
          div.style.height = stBot + "px"
        O.height=stBot
          break;
        case "left":
          const stLeft=rate(side(P.W, div)-5, P.W)
          div.style.width=  stLeft+ "px"
          O.width=stLeft
          break;
      }
    })
  }
}

const obj_2  = [
  {
    id: 121,
  title : 'title',
  name: 'Assf'
  },
  {
    id: 122,
  title : 'title_2',
  name: 'Assf_3'
  },
  {
    id: 123,
  title : 'title_2',
  name: 'Assf_3'
  },
]

const C = obj_2[1]
C.id = 88;

const tor = {
  id: 121,
  title : 'title',
  name: 'Assf'
}
const cop_tpr = tor

cop_tpr.name = 'copAss'

