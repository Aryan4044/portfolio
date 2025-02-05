const header = document.querySelector('header');

window.addEventListener("scroll", function (){
    header.classList.toggle("sticky",this.window.scrollY > 120);
})

let menu =document.querySe1ector("#menu-icon");
let navlist =document.querySe1ector('.navlist');

    menu.onclick = ()=> {
        menu.classList.toggle(' bx-x');
        navlist.classLislt.toggle('active')
    }
    window.onscroll =()=> {
    menu.remove.toggle(' bx-x');
    navlist.remove.toggle('active')
    }