const navbar = document.getElementById("navbarSite")
const scrollTopButton = document.getElementById("scroll-top-button")

window.onscroll=function(){
    if(window.pageYOffset>200){
        navbar.classList.remove("bg-transparent","navbar-dark");
        navbar.classList.add("bg-light", "navbar-light");
        scrollTopButton.classList.add("show");
    }
    else {
        navbar.classList.add("bg-transparent","navbar-dark");
        navbar.classList.remove("bg-light", "navbar-light");
        scrollTopButton.classList.remove("show");
        
    }
}

// Effet machine à écrire dans la page d'accueil 

const typeWriter = document.getElementById('type-writer');

let typewriter = new Typewriter(typeWriter, {
  loop: true
});

typewriter.typeString('<span style="color: #FF9958;">Symfony</span>')
  .pauseFor(1500)
  .deleteChars(7)
  .typeString('<span style="color: #FF5722;">HTML 5</span>')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('<span style="color: #2196F3;">CSS 3</span>')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<span style="color: #FFDF00;">JavaScript</span>')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<span style="color: #777BB3;">Php</span>')
  .pauseFor(1000)
  .deleteChars(3)
  .typeString('<span style="color: #40E0D0;">React</span>')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<span style="color: #A9A9A9;">WordPress</span>')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('<span style="color: #EE82EE;">Figma</span>')
  .pauseFor(1000)
  .deleteChars(5)
  .start();
