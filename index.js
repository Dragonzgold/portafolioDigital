let menuVisible = false;
//Funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript")
        habilidades[1].classList.add("htmlcss")
        habilidades[2].classList.add("word")
        habilidades[3].classList.add("excel")
        habilidades[4].classList.add("BDD")
        habilidades[5].classList.add("redes")
        habilidades[6].classList.add("comunicacion")
        habilidades[7].classList.add("trabajoequipo")
        habilidades[8].classList.add("creatividad")
        habilidades[9].classList.add("dedicacion")
        habilidades[10].classList.add("proyecto")
        habilidades[11].classList.add("compromiso")
    }
}

window.onscroll = function(){
    efectoHabilidades();
}