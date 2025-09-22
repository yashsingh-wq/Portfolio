// Contact Forms
document.getElementById("contactForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  alert("✅ Thank you! Your message has been sent successfully.");
  this.reset();
});
document.getElementById("contactFormPage")?.addEventListener("submit", function(e){
  e.preventDefault();
  alert("✅ Thank you! Your message has been sent successfully.");
  this.reset();
});

// 3D Tilt Effect
document.querySelectorAll(".tilt").forEach((element)=>{
  element.addEventListener("mousemove",(e)=>{
    const { offsetWidth: width, offsetHeight: height }=element;
    let { offsetX: x, offsetY: y }=e;
    const rotateX=((y/height)-0.5)*20;
    const rotateY=((x/width)-0.5)*20;
    element.style.transform=`rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });
  element.addEventListener("mouseleave",()=>{ element.style.transform="rotateX(0deg) rotateY(0deg)"; });
});

// Back-to-top Button
const backToTop=document.getElementById("backToTop");
window.addEventListener("scroll",()=>{
  if(window.scrollY>300){ backToTop.style.display="block"; }
  else{ backToTop.style.display="none"; }
});
backToTop.addEventListener("click",()=>{ window.scrollTo({ top:0, behavior:'smooth' }); });

// Animate Skill Bars
const skills=document.querySelectorAll(".progress");
window.addEventListener("scroll",()=>{
  skills.forEach(skill=>{
    const skillTop=skill.getBoundingClientRect().top;
    const windowHeight=window.innerHeight;
    if(skillTop<windowHeight-50){ skill.style.width=skill.getAttribute("data-progress"); }
  });
});

// Dynamic 3D Tilt for Project Cards
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const { width, height } = card.getBoundingClientRect();
    const x = e.offsetX;
    const y = e.offsetY;
    const rotateY = ((x / width) - 0.5) * 20; // max 20deg
    const rotateX = ((y / height) - 0.5) * -20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

