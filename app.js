document.querySelector('.hamburger-menu').addEventListener('click', ()=> {
  document.querySelector('.nav-wrapper').classList.toggle('change') 
  document.querySelector('.banner').classList.toggle('hide') 
  document.querySelector('.bottom-nav').classList.toggle('show') 
  document.querySelector('.top-nav').classList.toggle('show') 
})