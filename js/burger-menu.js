// $(document).ready(function() {
//     $('.menu-burger__header').click(function() {
//         $('.menu-burger__header').toggleClass('close-menu');
//     });
// });

// $(document).ready(function() {
//     $('.menu-burger__header').click(function(){
//         $('.menu-burger__header').toggleClass('open-menu');
//         $('.header__menu').toggleClass('open-menu');
//     });
// });

// header-burger-menu
let Burgerbtn = document.querySelector('.burger-btn ');
let burgerMenu = document.querySelector('.burgerMenu');
let openerBtn = document.querySelector('.opener');
Burgerbtn.addEventListener('click', function(){
    burgerMenu.classList.toggle('visibleClass');
});


let lists = document.querySelector('.lists');

let dropdownWrapper = document.querySelector('.sum ');






// dropdownWrapper.addEventListener('click', function(){
//         lists.setAttribute("open", "true");
      
//      });









// function sayHi() {
//     lists.removeAttribute("open");
//   }




// if( window.innerWidth >= 768 ){
//     window.addEventListener('click', function(){
//         lists.removeAttribute("open");
        
    
//     });
    

// }
// window.addEventListener('click', function(){
//     lists.removeAttribute("open");
    

// });
// } else {
//     console.log('Соси')
// }
// closer dropdown menu
// let closer = setTimeout(function() {
//     lists.removeAttribute("open");
//   }, 2000)

 