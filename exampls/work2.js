function exit() {
    document.getElementById("goodbye").innerHTML = "See You later";
    document.getElementById("goodbye").style.display = "block";

}
function hidden(){
    document.getElementById("goodbye").style.display="none";
}
function h3() {
    document.getElementById("h11").style.display = "none";

}
function cont() {
    document.getElementById("balance").style.display = "block";
}
var x = document.getElementById("balance1").value;

function check() {
    var x = document.getElementById("balance1").value;
    if (x > 0) {
        document.getElementById("show").innerHTML ="Your Balance Is "+ x+ "$";
    } else {
        document.getElementById("show").innerHTML = "Your Balance Is Not Enough";
    }
}
