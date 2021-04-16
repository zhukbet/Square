document.addEventListener("keydown", function (e) {


const div = document.querySelector('.mydiv.active')
//console.log(div);
    //
    const O = Obj_[div.id]

          switch (e.key) {
    
            case "ArrowDown":
    //console.log(Obj_); 
             // e.altKey
              //   ? div.style.height = rate(side(P.H) + 5, P.H) + "px"
              //   : div.style.top = ground(getElem_num(div.style.top) + 2, P.H) + '%'
    
              if(e.altKey){ 
    
                const Obj_height=rate(side(P.H, div) + 5, P.H) 
                div.style.height = Obj_height+ "px"
               O.height=Obj_height
              //  console.log(O);
              }else {
                div.style.top = ground(getElem_num(div.style.top) + 2, P.H, div) + '%'
              }
    
              break;
            case "ArrowUp":
              // e.altKey
              //   ? div.style.height = rate(side(P.H) - 5, P.H) + "px"
              //   : div.style.top = ground(getElem_num(div.style.top) - 2, P.H) + '%'
             if(e.altKey){
               const Obj_height=rate(side(P.H, div)-5,P.H)
               div.style.height=Obj_height+"px"
               O.height=Obj_height
             }else{
              div.style.top = ground(getElem_num(div.style.top) - 2, P.H, div) + '%'
             }
    
              break;
            case "ArrowRight":
              // e.altKey
              //   ? div.style.width = rate(side(P.W) + 5, P.W) + "px"
              //   : div.style.left = ground(getElem_num(div.style.left) + 2, P.W) + '%'
              if(e.altKey){
                const Obj_width=rate(side(P.W, div)+5,P.W);
                div.style.width=Obj_width+"px"
                O.width=Obj_width
              }else{
                div.style.left = ground(getElem_num(div.style.left) + 2, P.W, div) + '%'
              }
    
              break;
            case "ArrowLeft":
              // e.altKey
              //   ? div.style.width = rate(side(P.W) - 5, P.W) + "px"
              //   : div.style.left = ground(getElem_num(div.style.left) - 2, P.W) + '%'
              if(e.altKey){ 
                const Obj_width=rate(side(P.W, div)-5,P.W);
                div.style.width=Obj_width+"px"
                O.width=Obj_width
              }else{
                div.style.left = ground(getElem_num(div.style.left) -2, P.W, div) + '%'
              }
              break;
            case "Enter":
              randomPosition(div)
              break;
          }
        })