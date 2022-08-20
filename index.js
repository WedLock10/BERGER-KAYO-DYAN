const menuButton = document.querySelector('.menu-btn')
const navilinks = document.querySelector('.navi-links')

menuButton.addEventListener('click',()=>{
  navilinks.classList.toggle('small-screen-menu')
})


