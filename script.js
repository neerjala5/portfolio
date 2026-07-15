// =======================
// Typing Effect
// =======================

const roles = [
  "BSc. CSIT Student",
  "Frontend Developer",
  "Problem Solver",
  "Tech Enthusiast",
  "Future Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    const current = roles[roleIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(type,1200);

            return;
        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex = 0;

            }

        }

    }

    setTimeout(type,deleting?45:90);

}

type();


// =======================
// Scroll Reveal Animation
// =======================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section,.project,.about-card")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// =======================
// Animated Counter
// =======================

const numbers = document.querySelectorAll(".stats h2");

numbers.forEach(counter=>{

    const target = parseInt(counter.innerText);

    let value = 0;

    const speed = target/70;

    function update(){

        value += speed;

        if(value < target){

            counter.innerText = Math.floor(value)+"+";

            requestAnimationFrame(update);

        }else{

            if(counter.innerText.includes("%")){

                counter.innerText="100%";

            }else{

                counter.innerText=target+"+";

            }

        }

    }

    update();

});


// =======================
// Active Navbar
// =======================

const sections = document.querySelectorAll("section,header");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-200;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// =======================
// Navbar Shadow
// =======================

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

nav.style.boxShadow="0 5px 20px rgba(0,0,0,.35)";

}else{

nav.style.boxShadow="none";

}

});