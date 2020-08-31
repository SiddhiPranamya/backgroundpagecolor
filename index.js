/*function myFunction() {
var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var randomNumber1 = floor.(Math.random()*6)+1);
var randomColor1 = color[randomNumber1];
document.body.style.backgroundColor = color[randomColor1];
}*/
function functionName() {
  var color = ["#57DFC8", "#D77F04", "#16A226", "#9304B2", "#60C543", "#A33B43", "#DD0BB0", "#E8CB74", "#D171AA", "#235AEF", "#CFDED4", "#5D74D1", "#EC3A81", "#046A99"];
  document.body.style.backgroundColor = color[ Math.floor(Math.random()*15+1)];
}
