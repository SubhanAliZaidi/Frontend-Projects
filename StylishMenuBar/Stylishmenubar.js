// Naziya = 'naziya'
var naziya5= document.getElementById("naziya5");

naziya5.onclick= function() {
    document.body.classList.toggle("white-themeparveen");
    if(document.body.classList.contains("white-themeparveen")) {
        naziya5.src = "sun.png";  
    }
    else{
        naziya5.src = "moon(1).png";
    }
}

