// dark mode
let dark_mode = document.getElementsByClassName("dark_mode")[0];
let toggle_text = document.getElementsByClassName("toggle_text")[0];
let body = document.body
let filter_btns = document.querySelectorAll(".filter_btn")

dark_mode.addEventListener("click", () => {
   body.classList.toggle("darkmode");
   if (body.classList.contains("darkmode")) {
      toggle_text.innerText = "Light";
      toggle_text.style.color = "white"
      localStorage.setItem("color", "white")
      localStorage.setItem("background-color", "black");
      filter_btns.forEach(btn => {
         btn.style.color = "white";
      })
   } else {
      toggle_text.innerText = "Dark";
      localStorage.setItem("color", "black");
      localStorage.setItem("background-color", "white");
      toggle_text.style.color = "white"
      filter_btns.forEach(btn => {
         btn.style.color = "black";
      })
   }
})
window.addEventListener("load", () => {
   let color = localStorage.getItem("color")
   if (color == "white") {
      body.classList.add("darkmode");
      toggle_text.innerText = "Light";
   }
})
// Highlight Nav Menu on scroll 
let sections = document.querySelectorAll("section")
let nav_li = document.querySelectorAll("nav ul li")
window.addEventListener("scroll", () => {
   let current = '';
   sections.forEach(section => {
      let sectionTop = section.offsetTop;
      let height = section.clientHeight
      if (window.scrollY >= (sectionTop - height / 2)) {
         current = section.getAttribute("id")
      }
   })
   nav_li.forEach(li => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
         li.classList.add("active")
      }
   })
})

// count up
let counters = document.querySelectorAll(".counter")
let counts_sec = document.querySelector(".counts")
counters.forEach(counter => {
   function updatecount() {
      let target = +counter.dataset.target;
      let count = +counter.innerText;
      let increment = target / 400;
      if (count < target) {

         counter.innerText = `${Math.ceil(count+increment)}`
         setInterval(updatecount, 60);
      } else {
         counter.innerText = target
      }
   }
   window.addEventListener("scroll", () => {
      let pageyscroll = window.scrollY;
      let counterheight = counts_sec.clientHeight;
      if (pageyscroll > counterheight) {
         updatecount()
      }
   })
})
// start portfolio filters
let filtered_imgs = document.querySelectorAll(".filtered_img")
filter_btns.forEach(btn => {
   btn.addEventListener("click", (e) => {
      e.preventDefault();
      filtered_imgs.forEach(img => {
         if (e.target.dataset.filter == 'all') {
            img.style.display = 'block';
         } else {
            if (img.classList.contains(e.target.dataset.filter)) {
               img.style.display = 'block'
            } else {
               img.style.display = 'none'
            }
         }
      })
   })
})
// end portfolio filter