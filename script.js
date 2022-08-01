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

typewriter.typeString('Freelance')
  .pauseFor(1500)
  .deleteChars(9)
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
  .typeString('<span style="color: #fff;">Symfony</span>')
  .pauseFor(1000)
  .start();
