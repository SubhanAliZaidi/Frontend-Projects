// Naziya = 'naziya'
let circle = document.getElementById('circle')
document.addEventListener('mousemove' , (e) => {
    const {pageX, pageY} = e;
    let swidth = window.innerWidth;
    if(pageX == 0 || pageY == swidth-1){
        circle.style.display = 'none';
    }else{
        circle.style.display = 'block';
        circle.style.left = `${pageX}px`;
        circle.style.top = `${pageY}px`;
    }
})

document.addEventListener('mouseout' , (e) => {
    circle.style.display = 'none';
})