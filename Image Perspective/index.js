let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
let div5 = document.getElementById('div5');
let div6 = document.getElementById('div6');
let minusindexing0 = document.getElementById('minusindexing0');
let minusindexing = document.getElementById('minusindexing');
let minusindexing1 = document.getElementById('minusindexing1');

div2.addEventListener('mouseenter', function () {
    div2.style.transform = 'rotateY(0deg)';
    div3.style.transform = 'rotateY(-40deg)';
    div4.style.transform = 'rotateY(-40deg)';
    minusindexing0.style.zIndex = -5;
    minusindexing.style.zIndex = -6;
    minusindexing1.style.zIndex = -7;
});

div2.addEventListener('mouseleave', function () {
    div2.style.transform = 'rotateY(40deg)';
    div3.style.transform = 'rotateY(40deg)';
    div4.style.transform = 'rotateY(0deg)';
    minusindexing0.style.zIndex = 0;
});

div3.addEventListener('mouseenter', function () {
    div3.style.transform = 'rotateY(0deg)';
    div4.style.transform = 'rotateY(-40deg)';
});

div3.addEventListener('mouseleave', function () {
    div3.style.transform = 'rotateY(40deg)';
    div4.style.transform = 'rotateY(0deg)';
});

div5.addEventListener('mouseenter', function () {
    div5.style.transform = 'rotateY(0deg)';
    div4.style.transform = 'rotateY(40deg)';
});

div5.addEventListener('mouseleave', function () {
    div4.style.transform = 'rotateY(0deg)';
    div5.style.transform = 'rotateY(-40deg)';
    minusindexing.style.zIndex = -1
});

div6.addEventListener('mouseenter', function () {
    div4.style.transform = 'rotateY(40deg)';
    div5.style.transform = 'rotateY(40deg)';
    div6.style.transform = 'rotateY(0deg)';
    minusindexing.style.zIndex = 1; 
    minusindexing0.style.zIndex = 0; 
});

div6.addEventListener('mouseleave', function () {
    div4.style.transform = 'rotateY(0deg)';
    div5.style.transform = 'rotateY(-40deg)';
    div6.style.transform = 'rotateY(-40deg)';
    minusindexing0.style.zIndex = 2; 
    minusindexing1.style.zIndex = -2; 
});