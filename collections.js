
const groundtwice=(position_graund, w_or_h, global)=>{

   if(w_or_h===P.W){
        if(
          ((window.innerWidth-global)*100/window.innerWidth)   <position_graund  )  {
        
          return ((window.innerWidth-global)*100/window.innerWidth)
        } }

        if (w_or_h === P.H) {
        
          if ( (window.innerHeight - global) *100 / window.innerHeight  < position_graund ) {
        
         return  (window.innerHeight - global) *100 / window.innerHeight
        
        }}
        return position_graund<0 ? 0 :position_graund
        }
        


const NewObj_ = ()=> {

//console.group('wi')
allimg.innerHTML = Obj_.map((item,index)=>{
  
  const class_name = item.isNewElem ? 'opac' : '';
 // console.log(item.width);
// (index===Obj_.length-1)
// ?item.title=true
// :item.title=false;

const title = item.title ? 'active' : '';
Obj_[index].title=false;
item.isNewElem && (item.isNewElem =false)
//console.log(title);


  return `<div title="${title}" id="${index}" style="width: ${item.width}px; height: ${item.height}px; background: ${item.color}; top: ${item.top}%; left: ${item.left}%;" class="mydiv ${class_name} ${title}"> 
   <div class="graund">
   <div class="allbutton">
       <button class="top"><p>></p></button>
       <button class="right"><p>></p></button>
       <button class="left"><p>></p></button>
       <button class="bottom"><p>></p></button>
     </div>  
   </div>
</div>`})
.join('')



all_function()
//console.groupEnd()
}

const greateNewObj = ()=>{ 
const newObj = {
    _id: id()+'Item',
        top: groundtwice(getRandom(), P.H, 110),
        left: groundtwice(getRandom(), P.W, 110),
        width : 110,
        height:110,
        color: 'rgb'+"("+getRandom(1,255)+","+getRandom(1,255)+","+getRandom(1,255)+")",
        isNewElem: true,
        title:true
}

Obj_.push(newObj)
NewObj_()

}


setTimeout( greateNewObj,4000)

mainbutton.addEventListener("click",function(){
  greateNewObj()
})



