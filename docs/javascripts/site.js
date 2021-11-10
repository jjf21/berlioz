window.onload = (event) => {
  const openButton = document.querySelector('#open-menu'); // Hamburger Icon
  const closeButton = document.querySelector('#close-menu'); // Hamburger Icon
  const menu = document.querySelector('#mobile-menu'); // Menu

  openButton.addEventListener('click', () => {
    menu.classList.remove('hidden');
  });
  
  closeButton.addEventListener('click', () => {
    menu.classList.add('hidden');
  });

};
