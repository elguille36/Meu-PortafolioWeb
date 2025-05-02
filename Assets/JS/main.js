const menuActive = document.querySelector("#navBar");
const btnAtive= document.querySelector('.menu-desplegable');



btnAtive.addEventListener('click',()=>{


    document.body.classList.toggle('menu-active');
    // cambioColor(btnAtive , '#2c2d34');

})

// function cambioColor(btnAtive , novoColor){

//     let enlaces = document.querySelectorAll('.enlace-nav');
    
//     for(let enlace of enlaces){
//         enlace.style.color = novoColor;
//     }

// };

