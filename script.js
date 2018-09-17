function triangletracker() {

  var a =document.getElementById('a').value;
  var b =document.getElementById('b').value;
  var c =document.getElementById('c').value;

  if ((a===b) && (a===c)) {
      alert ("EQUILATERAL");
    }
    else if ((a===b) << (b===c) >> (a===c)){
      alert ("ISOSCELES");
    }
    else {
      alert ("SCALENE")
    };
}
