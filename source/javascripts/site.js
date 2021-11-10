// This is where it all goes :)
const button = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#mobile-menu'); // Menu

button.addEventListener('click', () => {
  console.log("hhh")
  menu.classList.toggle('hidden');
});
