/*==========================================
POT MONKEY
MAIN JAVASCRIPT
==========================================*/



/*==============================
MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (menuBtn.innerHTML.includes("bars")) {

        menuBtn.innerHTML = '<i class="fas fa-times"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    }

});



document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});



/*==============================
NAVBAR BACKGROUND
==============================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5,12,7,.98)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.45)";

    } else {

        navbar.style.background = "rgba(7,17,10,.92)";
        navbar.style.boxShadow = "none";

    }

});



/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

window.scrollTo({

top:target.offsetTop-80,

behavior:"smooth"

});

}

});

});



/*==============================
REVEAL ANIMATION
==============================*/

const revealElements=document.querySelectorAll("section,.feature-box,.product-card,.review-card");

function reveal(){

const windowHeight=window.innerHeight;

revealElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<windowHeight-120){

el.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();



/*==============================
COUNTER ANIMATION
==============================*/

const counters=document.querySelectorAll(".stat-box h2");

let counted=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats)return;

const top=stats.offsetTop-500;

if(window.scrollY>top&&!counted){

counted=true;

counters.forEach(counter=>{

let target=parseInt(counter.innerText);

if(isNaN(target)) return;

let count=0;

const speed=Math.max(10,Math.floor(target/100));

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target+"+";

}else{

counter.innerText=count;

requestAnimationFrame(update);

}

};

update();

});

}

});



/*==============================
ACTIVE NAVIGATION
==============================*/

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});



/*==============================
PARALLAX HERO
==============================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

hero.style.backgroundPositionY=window.scrollY*.45+"px";

});



/*==============================
GALLERY EFFECT
==============================*/

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.92)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="99999";
overlay.style.cursor="zoom-out";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="15px";
image.style.boxShadow="0 20px 60px rgba(0,0,0,.5)";

overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.onclick=()=>overlay.remove();

});

});



/*==============================
BACK TO TOP BUTTON
==============================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#56d364";
topBtn.style.color="#000";
topBtn.style.fontSize="18px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";
topBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.4)";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



/*==============================
WHATSAPP FLOAT BUTTON
==============================*/

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/27114310401";

whatsapp.target="_blank";

whatsapp.innerHTML='<i class="fab fa-whatsapp"></i>';

whatsapp.style.position="fixed";
whatsapp.style.left="25px";
whatsapp.style.bottom="25px";
whatsapp.style.width="65px";
whatsapp.style.height="65px";
whatsapp.style.borderRadius="50%";
whatsapp.style.background="#25D366";
whatsapp.style.display="flex";
whatsapp.style.alignItems="center";
whatsapp.style.justifyContent="center";
whatsapp.style.color="#fff";
whatsapp.style.fontSize="34px";
whatsapp.style.zIndex="9999";
whatsapp.style.boxShadow="0 15px 30px rgba(0,0,0,.35)";
whatsapp.style.transition=".3s";

whatsapp.onmouseenter=()=>{

whatsapp.style.transform="scale(1.1)";

};

whatsapp.onmouseleave=()=>{

whatsapp.style.transform="scale(1)";

};

document.body.appendChild(whatsapp);



/*==============================
LOADING SCREEN
==============================*/

window.addEventListener("load",()=>{

const loader=document.createElement("div");

loader.style.position="fixed";
loader.style.left="0";
loader.style.top="0";
loader.style.width="100%";
loader.style.height="100%";
loader.style.background="#08110a";
loader.style.display="flex";
loader.style.alignItems="center";
loader.style.justifyContent="center";
loader.style.color="#56d364";
loader.style.fontSize="2rem";
loader.style.fontWeight="700";
loader.style.zIndex="999999";

loader.innerHTML="🌿 POT MONKEY";

document.body.appendChild(loader);

setTimeout(()=>{

loader.style.transition=".8s";
loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},800);

},600);

});



/*==============================
CURRENT YEAR
==============================*/

const copy=document.querySelector(".copyright");

if(copy){

copy.innerHTML=`© ${new Date().getFullYear()} Pot Monkey. All Rights Reserved.`;

}



/*==========================================
END
==========================================*/