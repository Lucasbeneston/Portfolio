let burgerMenu = document.getElementById('burger-menu');
let navBar = document.getElementById('nav-bar');
let sectionProjet = document.querySelectorAll('.projet');
let illustration = document.querySelectorAll('.projet-illustration-right');

burgerMenu.addEventListener('click', apparition);
let active = true;
function apparition(){
    if(active == true){
        navBar.style.marginLeft = "0vw";
        for (i = 0; i < sectionProjet.length; i++){
            sectionProjet[i].style.marginLeft = "20vw";
        }
        for (i = 0; i < illustration.length; i++){
            illustration[i].style.right = "-10vw";
        }
        active = false;
    } else {
        navBar.style.marginLeft = "-20vw ";
        for (i = 0; i < sectionProjet.length; i++){
            sectionProjet[i].style.marginLeft = "0vw";
        }
        for (i = 0; i < illustration.length; i++){
            illustration[i].style.right = "10vw";
        }
        active = true;
    }
}

