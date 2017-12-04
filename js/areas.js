var squareArea = function (l) {
  return l * l;
}

var rectangleArea = function (b, h) {
  return b * h;
}

var triangleArea = function (b, h) {
  return (b * h) / 2;
}

var circleArea = function (r) {
  return Math.PI * r * r;
}

var error = function (message) {
  msg = 'Se ha producido un error: ' + message;
  alert(msg);
  console.error(msg);
}

function calculateSquare() {
  var side = document.getElementById('txtSquareSide');
  var result = document.getElementById('txtSquareArea');

  if(isNaN(parseInt(side.value))) {
    error('El lado del cuadrado no es un número');
  }
  else if(parseInt(side.value) <= 0) {
    error('El lado del cuadrado está en un rango inválido');
  } else {
    result.value = squareArea(parseInt(side.value));
  }
}

function calculateRect() {
  var base = document.getElementById('txtRectBase');
  var height = document.getElementById('txtRectHeight');
  var result = document.getElementById('txtRectArea');

  if(isNaN(parseInt(base.value)) || isNaN(parseInt(height.value))) {
    error('La base o la altura del rectángulo no son números');
  }
  else if(parseInt(base.value) <= 0 || isNaN(parseInt(height.value) <= 0)) {
    error('La base o la altura del rectángulo están en un rango inválido');
  } else {
    result.value = rectangleArea(parseInt(base.value), parseInt(height.value));
  }
}

function calculateTriangle() {
  var base = document.getElementById('txtTriangleBase');
  var height = document.getElementById('txtTriangleHeight');
  var result = document.getElementById('txtTriangleArea');

  if(isNaN(parseInt(base.value)) || isNaN(parseInt(height.value))) {
    error('La base o la altura del triángulo no son números');
  }
  else if(parseInt(base.value) <= 0 || isNaN(parseInt(height.value) <= 0)) {
    error('La base o la altura del triángulo están en un rango inválido');
  } else {
    result.value = triangleArea(parseInt(base.value), parseInt(height.value));
  }
}

function calculateCircle() {
  var radius = document.getElementById('txtCircleRadius');
  var result = document.getElementById('txtCircleArea');

  if(isNaN(parseInt(radius.value))) {
    error('El radio del círculo no es un número');
  }
  else if(parseInt(radius.value) <= 0) {
    error('El radio del círculo está en un rango inválido');
  } else {
    result.value = squareArea(parseInt(radius.value));
  }
}
