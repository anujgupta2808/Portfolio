function sendEmail(e){
e.preventDefault();
const name=document.getElementById('userName').value;
const email=document.getElementById('userEmail').value;
const message=document.getElementById('userMessage').value;
const subject=encodeURIComponent('Portfolio Contact from '+name);
const body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\nMessage:\n'+message);
window.location.href='mailto:anujgupta26610812@gmail.com?subject='+subject+'&body='+body;
document.getElementById('msg').innerText='✓ Opening your email client...';
setTimeout(()=>{
document.getElementById('msg').innerText='';
},3000);
}

const skills=["Anuj Gupta","Website Developer"];
let skillIndex=0;
let charIndex=0;
let isDeleting=false;
const typingSpeed=100;
const deletingSpeed=50;
const delayBetweenWords=2000;

function typeWriter(){
const currentSkill=skills[skillIndex];
const displayText=document.getElementById("changingText");

if(isDeleting){
displayText.classList.add("deleting");
displayText.classList.remove("typing");
displayText.innerText=currentSkill.substring(0,charIndex-1);
charIndex--;
if(charIndex===0){
isDeleting=false;
skillIndex=(skillIndex+1)%skills.length;
setTimeout(typeWriter,500);
return;
}
}else{
displayText.classList.add("typing");
displayText.classList.remove("deleting");
displayText.innerText=currentSkill.substring(0,charIndex+1);
charIndex++;
if(charIndex===currentSkill.length){
isDeleting=true;
setTimeout(typeWriter,delayBetweenWords);
return;
}
}

setTimeout(typeWriter,isDeleting?deletingSpeed:typingSpeed);
}

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => {
  window.scrollTo(2,3);
});

setTimeout(typeWriter,1000);

function toggleMenu(){
document.getElementById('navMenu').classList.toggle('active');
}

document.querySelectorAll('#navMenu a').forEach(link=>{
link.addEventListener('click',()=>{
document.getElementById('navMenu').classList.remove('active');
});
});

window.addEventListener('scroll',()=>{
const aboutSection=document.getElementById('about');
const floatingButtons=document.querySelector('.floating-buttons');
const scrollTop=document.getElementById('scrollTop');
const aboutPosition=aboutSection.getBoundingClientRect().top;
if(aboutPosition<window.innerHeight){
floatingButtons.classList.add('show');
}else{
floatingButtons.classList.remove('show');
}
if(window.pageYOffset>300){
scrollTop.classList.add('show');
}else{
scrollTop.classList.remove('show');
}
});

function scrollToTop(){
window.scrollTo({top:0,behavior:'smooth'});
}

const counters=document.querySelectorAll('.counter');
let counted=false;
window.addEventListener('scroll',()=>{
const statsSection=document.querySelector('.stats-container');
if(!statsSection)return;
const statsPosition=statsSection.getBoundingClientRect().top;
if(statsPosition<window.innerHeight && !counted){
counted=true;
counters.forEach(counter=>{
const target=+counter.getAttribute('data-target');
const increment=target/100;
let current=0;
const updateCounter=()=>{
if(current<target){
current+=increment;
counter.textContent=Math.ceil(current);
setTimeout(updateCounter,20);
}else{
counter.textContent=target;
}
};
updateCounter();
});
}
});


function clear(){
document.getElementById('userName').value='';
document.getElementById('userEmail').value='';
document.getElementById('userMessage').value='';
}