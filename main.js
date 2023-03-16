window.addEventListener("load", init);
const kepLista = ["kepek/DSC7025.jpg","kepek/DSC73711.jpg", "kepek/DSC7444.jpg",];
let jobbSzamlalo = 0;
let balSzamlalo = 2;
function init(){
    const articleElem = document.querySelectorAll("#kepek");

    articleElem[0].innerHTML = "<div><img src='kepek/DSC7025.jpg' alt='kep'></div>";
    for (let index = 1; index < kepLista.length; index++){
        articleElem[0].innerHTML += `<div><img src='${kepLista[index]}' alt='kep'></div>`;
    }
    const kepElemLista = document.querySelectorAll("article img");
    console.log(kepElemLista);
    const nagyKep = document.querySelectorAll(".nagykep img");
    for (let index = 0; index < kepElemLista.length; index++) {
        kepElemLista[index].addEventListener("click", function () {
            nagyKep[0].src = event.target.src;    
        });
    }
    const balGomb = document.querySelectorAll("section .bal");
    const jobbGomb = document.querySelectorAll("section .jobb");

        jobbGomb[0].addEventListener("click", function () {
            if(jobbSzamlalo >= kepLista.length-1){
                jobbSzamlalo = 0;
            }else{
            jobbSzamlalo++;
            }
            nagyKep[0].src = kepElemLista[jobbSzamlalo].src;   
            
        });
        balGomb[0].addEventListener("click", function () {
            if(balSzamlalo <= 0){
                balSzamlalo = 2;
            }else{
            balSzamlalo--;
            }
            nagyKep[0].src = kepElemLista[balSzamlalo].src;   
            
        });

}