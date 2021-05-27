function myFunction() {
    alert("I am an alert box!");
}
x = 1000;
function scroll() {
//     alert(x.toString());
    x = x/1.1;
    var div_1 = document.getElementById('my_div');
    div_1.style.top = x.toString() + 'px';
}
