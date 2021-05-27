document.addEventListener("keydown", function (e) {


const div = document.querySelector('.mydiv.active')

    const O = Obj_[div.id]
console.log(O);
          switch (e.key) {
    
            case "ArrowDown":
    
              if(e.altKey){ 
    
                const Obj_height=rate(side(P.H, div) + 5, P.H) 
                div.style.height = Obj_height+ "px"
               O.height=Obj_height
              
              
              }else {
                const top= ground(getElem_num(div.style.top) + 2, P.H, div) 
                div.style.top=top+ '%'
                //сохраняем данные
                O.top=top                                           

              }
    
              break;
            case "ArrowUp":
             if(e.altKey){
               const Obj_height=rate(side(P.H, div)-5,P.H)
               div.style.height=Obj_height+"px"
               O.height=Obj_height
             }else{
              const top= ground(getElem_num(div.style.top) - 2, P.H, div) 
              div.style.top =top+ '%'
              O.top=top
             }
    
              break;
            case "ArrowRight":
              if(e.altKey){
                const Obj_width=rate(side(P.W, div)+5,P.W);
                div.style.width=Obj_width+"px"
                O.width=Obj_width

              }else{
                const wirina= ground(getElem_num(div.style.left) + 2, P.W, div) 
                div.style.left= wirina+ '%'
                O.left=wirina
              }
    
              break;
            case "ArrowLeft":
              if(e.altKey){ 
                const Obj_width=rate(side(P.W, div)-5,P.W);
                div.style.width=Obj_width+"px"
                O.width=Obj_width

              }else{
                const wirina = ground(getElem_num(div.style.left) -2, P.W, div) 
                 div.style.left=wirina+ '%'
                 O.left=wirina
              }
              break;
            case "Enter":

             randomPosition(div)
             
              break;

          }

        })