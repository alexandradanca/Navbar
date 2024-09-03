const menuIcon = document.querySelector(".menu-img");
const navList = document.querySelector(".list");

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle("rotate");
    navList.classList.toggle("active");
})




