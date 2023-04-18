// Naziya = 'naziya' 

let child1 = document.getElementById('child1');
let child2 = document.getElementById('child2');
let child3 = document.getElementById('child3');
let child4 = document.getElementById('child4');
let child5 = document.getElementById('child5');
let child6 = document.getElementById('child6');

child1.addEventListener('mouseenter', function () {
    child2.style.width = '50px';
    child3.style.width = '50px';
    child4.style.width = '50px';
    child5.style.width = '50px';
    child6.style.width = '50px';
    child1.style.width = '300px';
});

child2.addEventListener('mouseenter', function () {
    child1.style.width = '50px';
    child3.style.width = '50px';
    child4.style.width = '50px';
    child5.style.width = '50px';
    child6.style.width = '50px';
    child2.style.width = '300px';
});

child3.addEventListener('mouseenter', function () {
    child1.style.width = '50px';
    child2.style.width = '50px';
    child4.style.width = '50px';
    child5.style.width = '50px';
    child6.style.width = '50px';
    child3.style.width = '300px';
});

child4.addEventListener('mouseenter', function () {
    child1.style.width = '50px';
    child2.style.width = '50px';
    child3.style.width = '50px';
    child5.style.width = '50px';
    child6.style.width = '50px';
    child4.style.width = '300px';
});

child5.addEventListener('mouseenter', function () {
    child1.style.width = '50px';
    child2.style.width = '50px';
    child3.style.width = '50px';
    child4.style.width = '50px';
    child6.style.width = '50px';
    child5.style.width = '300px';
});

child6.addEventListener('mouseenter', function () {
    child1.style.width = '50px';
    child2.style.width = '50px';
    child3.style.width = '50px';
    child4.style.width = '50px';
    child5.style.width = '50px';
    child6.style.width = '300px';
});