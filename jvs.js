let hamburgermenu=document.querySelector('.navbar-menu-toggle');
let sidebar=document.querySelector('.side-navbar');
let closebutton=document.querySelector('.closebutton');

hamburgermenu.addEventListener('click',function(){
    sidebar.classList.add('side-navbar-click-open');
    sidebar.classList.remove('side-navbar-click-close');
})

closebutton.addEventListener('click', function() {
    sidebar.classList.add('side-navbar-click-close');
    sidebar.classList.remove('side-navbar-click-open');
});