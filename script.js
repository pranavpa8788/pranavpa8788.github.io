// alert("This is an alert");
function myFunction() {
    alert("I am an alert box!");
    var div_1 = document.getElementById('my_div');
    div_1.style.transform = 'rotate(20deg)';
}
x = 1000;
var deg = 2;
function scroll() {
//     alert(x.toString());
    x = x/1.1;
    var div_1 = document.getElementById('my_div');
//     div_1.style.top = x.toString() + 'px';
    div_1.style.transform = 'rotate(' + deg.toString() + 'deg)';
    deg = deg + 2;
}
