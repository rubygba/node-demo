var g = 1;
(function() {
  if (g === undefined) {
    console.log('1 undefined')
  } else {
    var g = 2
    console.log(g)
  }
})()

console.log(g);

//this.g = 'x' //window
function a() {
  var x = this.g
  var n = function() {
    var y = this.g
    var m = function() {
      console.log(x);
      console.log(y);
    }
    return m
  }
  return n
}
a()()()

function aa() {
  var x = this.g
  function nn() {
    var y = this.g
    function mm() {
      console.log(x);
      console.log(y);
    }
    return mm
  }
  return nn
}
aa()()()

var b = 3 // syntax error
(function() {
  if (b === undefined) {
    console.log('3 undefined')
  } else {
    var b = 4
    console.log(b)
  }
})()
