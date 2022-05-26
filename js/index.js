// dark mode
let dark_mode=document.getElementsByClassName("dark_mode")[0];
let toggle_text=document.getElementsByClassName("toggle_text")[0];

let about=document.getElementsByClassName("about")[0];
let body=document.body
dark_mode.addEventListener("click",()=>{
   body.classList.toggle("darkmode");
   about.classList.toggle("darkmode");


   if(body.classList.contains("darkmode")){
      toggle_text.innerText="Light";
      toggle_text.style.color="white"

      localStorage.setItem("color","white")
      localStorage.setItem("background-color","black");
   }
   else{
      toggle_text.innerText="Dark";
      localStorage.setItem("color","black");
      localStorage.setItem("background-color","white");
      toggle_text.style.color="white"
   }
})
window.addEventListener("load",()=>{
   let color=localStorage.getItem("color")

   // let background=localStorage.getItem("background-color")
   if(color=="white"){
      body.classList.add("darkmode");
      toggle_text.innerText="Light";
   }
  
})







// Highlight Nav Menu on scroll 
let sections=document.querySelectorAll("section")
let nav_li=document.querySelectorAll("nav ul li")
window.addEventListener("scroll",e=>{

let current='';
sections.forEach(section=>{

let sectionTop=section.offsetTop;
// console.log(sectionTop)
let height=section.clientHeight
if(window.scrollY>=(sectionTop-height/2)){
   current=section.getAttribute("id")
}
})
// console.log(current)
nav_li.forEach(li=>{
   li.classList.remove("active");
   if(li.classList.contains(current)){
      li.classList.add("active")
   }
})})
// 

// count up
let counters=document.querySelectorAll(".counter")
let counts_sec=document.querySelector(".counts")
counters.forEach(counter=>{
 
   function updatecount(){
      // counter.innerText=0
      let target=+counter.dataset.target;
      let count=+counter.innerText;
      let increment= target/400;
      if(count<target){
        
         counter.innerText=`${Math.ceil(count+increment)}`
         setInterval(updatecount, 60);
      }
      else{
         counter.innerText=target
      }
   }
   window.addEventListener("scroll",()=>{
      let pageyscroll=window.scrollY;
      let counterheight=counts_sec.clientHeight;
      // console.log(pageyscroll)
      // console.log(counterheight)
      if(pageyscroll>counterheight){
         updatecount()
      }
   })
})

//
// start portfolio filters
let filter_btns=document.querySelectorAll(".filter_btn")
let filtered_imgs=document.querySelectorAll(".filtered_img")
filter_btns.forEach(btn=>{
   // btn.classList.remove("btn-success")
   btn.addEventListener("click",(e)=>{
      e.preventDefault();
      
      filtered_imgs.forEach(img=>{
         if(e.target.dataset.filter=='all'){
            img.style.display='block';
            // e.target.classList.add("btn-success")
         }
         else{
            if(img.classList.contains(e.target.dataset.filter)){
               img.style.display='block'
               // e.target.classList.add("btn-success")
            }
            else{
             img.style.display='none'
            }
         }
      })
})

   
   })


// end portfolio filters