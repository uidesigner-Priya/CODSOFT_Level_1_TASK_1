/*-------nav bar function--------*/
function myMenuFunction(){
    var menuBtn=document.getElementById("myNavMenu");

    if(menuBtn.className==="nav-menu"){
        menuBtn.className+=" responsive";
    }
    else{
        menuBtn.className="nav-menu";
    }
}

/*-------nav bar shadow when scrolling--------*/
window.onscroll=function() {headerShadow()};
function headerShadow() {
    const navHeader=document.getElementById("header");

    if(document.body.scrollTop>50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow="0 1px 6px rgba(0,0,0,0.1";
        navHeader,style.height="70px";
        navHeader.style.lineHeight="70px";
    }
    else{
        navHeader.style.boxShadow="none";
        navHeader,style.height="90px";
        navHeader.style.lineHeight="90px";
    }
}


/*-------typing effect--------*/
var typingEffect = new Typed(".typedText",{
    strings : ["UI/UX Designer","App Designer","Front-end Dev"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })

/*-------## scroll reveal animation ##--------*/
const sr=ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
})

/*-------home--------*/
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-text-info',{delay:200})
sr.reveal('.featured-text-btn',{delay:200})
sr.reveal('.social-icons',{delay:200})
sr.reveal('.featured-image',{delay:300})

/*-------project box--------*/
sr.reveal('.project-box',{interval: 200})

/*-------headings--------*/
sr.reveal('.top-header',{})

/*-------## scroll reveal left-right animation ##--------*/

 /* -- ABOUT INFO & CONTACT INFO -- */
 const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.contact-info',{delay: 100})
  srLeft.reveal('.coll',{delay: 100})  

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.about-info',{delay: 100})
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  srRight.reveal('.column',{delay: 100})
  

