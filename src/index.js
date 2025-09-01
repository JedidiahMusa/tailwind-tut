const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const sideBar = document.getElementById("sideBar");
const nav = document.getElementById("nav")


let isOpen = false


menuBtn.addEventListener("click", () => {
    isOpen = !isOpen

    if(isOpen){
        menuIcon.src = "./assets/close-large-fill.png"
        sideBar.classList.remove("hidden")
        nav.classList.add("bg-[#000000aa]")
    } else{
        menuIcon.src = "./assets/menu-line.png"
        sideBar.classList.add("hidden")
        nav.classList.remove("bg-[#000000aa]")
    }
})

















// const menuBtn = document.getElementById("menu-btn");
// const menuIcon = document.getElementById("menu-icon");
// const sidebar = document.getElementById("sidebar");

// let isOpen = false;

// menuBtn.addEventListener("click", () => {
//   isOpen = !isOpen;

//   if (isOpen) {
//     // Change to X icon
//     menuIcon.src = "./assets/close-line.png"; // make sure you have an x icon (close-line.png)
//     // Show sidebar
//     sidebar.classList.remove("translate-x-full");
//     sidebar.classList.add("translate-x-0");
//   } else {
//     // Change back to hamburger
//     menuIcon.src = "./assets/menu-line.png";
//     // Hide sidebar
//     sidebar.classList.add("translate-x-full");
//     sidebar.classList.remove("translate-x-0");
//   }
// });

