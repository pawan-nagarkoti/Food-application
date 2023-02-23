const navList= document.querySelector('.navList');
const hamburger= document.querySelector('.hamburger');
const hamburgerCross= document.querySelectorAll('.hamburger span');
const open= document.querySelector('.open');

let isactive= false;
hamburger.addEventListener('click',()=>{
   navList.classList.toggle('open');
   if(!isactive){
      hamburgerCross[0].style.transform="rotate(46deg)";
      hamburgerCross[1].style.opacity="0";
      hamburgerCross[2].style.transform="rotate(-46deg)";
      isactive=true;
   }
   else{
      hamburgerCross[0].style.transform="rotate(0deg)";
      hamburgerCross[1].style.opacity="1";
      hamburgerCross[2].style.transform="rotate(0deg)";
      isactive=false;
   }
});

const containerNavbar= document.querySelector('.containerNavbar');
window.addEventListener('scroll',()=>{
   containerNavbar.classList.toggle('sticky',window.scrollY>0);
});

const banner= document.querySelector('#home').addEventListener('click',()=>{
   navList.classList.toggle('open');
   if(!isactive){
      hamburgerCross[0].style.transform="rotate(46deg)";
      hamburgerCross[1].style.opacity="0";
      hamburgerCross[2].style.transform="rotate(-46deg)";
      isactive=true;
   }
   else{
      hamburgerCross[0].style.transform="rotate(0deg)";
      hamburgerCross[1].style.opacity="1";
      hamburgerCross[2].style.transform="rotate(0deg)";
      isactive=false;
   }
});

const about= document.querySelector('#about1').addEventListener('click',()=>{
   navList.classList.toggle('open');
   if(!isactive){
      hamburgerCross[0].style.transform="rotate(46deg)";
      hamburgerCross[1].style.opacity="0";
      hamburgerCross[2].style.transform="rotate(-46deg)";
      isactive=true;
   }
   else{
      hamburgerCross[0].style.transform="rotate(0deg)";
      hamburgerCross[1].style.opacity="1";
      hamburgerCross[2].style.transform="rotate(0deg)";
      isactive=false;
   }
});

const menu= document.querySelector('#menu1').addEventListener('click',()=>{
   navList.classList.toggle('open');
   if(!isactive){
      hamburgerCross[0].style.transform="rotate(46deg)";
      hamburgerCross[1].style.opacity="0";
      hamburgerCross[2].style.transform="rotate(-46deg)";
      isactive=true;
   }
   else{
      hamburgerCross[0].style.transform="rotate(0deg)";
      hamburgerCross[1].style.opacity="1";
      hamburgerCross[2].style.transform="rotate(0deg)";
      isactive=false;
   }
});
const expert= document.querySelector('#expert1').addEventListener('click',()=>{
   navList.classList.toggle('open');
   if(!isactive){
      hamburgerCross[0].style.transform="rotate(46deg)";
      hamburgerCross[1].style.opacity="0";
      hamburgerCross[2].style.transform="rotate(-46deg)";
      isactive=true;
   }
   else{
      hamburgerCross[0].style.transform="rotate(0deg)";
      hamburgerCross[1].style.opacity="1";
      hamburgerCross[2].style.transform="rotate(0deg)";
      isactive=false;
   }
});
const testimonial1= document.querySelector('#testimonial1').addEventListener('click',()=>{
   navList.classList.toggle('open');
   if(!isactive){
      hamburgerCross[0].style.transform="rotate(46deg)";
      hamburgerCross[1].style.opacity="0";
      hamburgerCross[2].style.transform="rotate(-46deg)";
      isactive=true;
   }
   else{
      hamburgerCross[0].style.transform="rotate(0deg)";
      hamburgerCross[1].style.opacity="1";
      hamburgerCross[2].style.transform="rotate(0deg)";
      isactive=false;
   }
});
const contact= document.querySelector('#contact1').addEventListener('click',()=>{
   navList.classList.toggle('open');
   if(!isactive){
      hamburgerCross[0].style.transform="rotate(46deg)";
      hamburgerCross[1].style.opacity="0";
      hamburgerCross[2].style.transform="rotate(-46deg)";
      isactive=true;
   }
   else{
      hamburgerCross[0].style.transform="rotate(0deg)";
      hamburgerCross[1].style.opacity="1";
      hamburgerCross[2].style.transform="rotate(0deg)";
      isactive=false;
   }
});