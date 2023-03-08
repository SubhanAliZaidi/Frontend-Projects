// Naziya = 'naziya'
const containernaz = document.querySelector(':root');
document.querySelector('.slidernaz').addEventListener('input', (e) => {
  containernaz.style.setProperty('--positionnaz', `${e.target.value}%`);
})