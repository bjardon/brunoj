let squareArea = function (l:number) {
  return l * l;
}

let rectangleArea = function (b:number, h:number) {
  return b * h;
}

let triangleArea = function (b:number, h:number) {
  return (b * h) / 2;
}

let circleArea = function (r:number) {
  return Math.PI * r * r;
}

let trapezoidArea = function(minorB:number, mayorB:number, h:number) {
  return ((minorB + mayorB) / 2) * h;
}

let diamondArea = function(minorD:number, mayorD:number) {
  return (minorD * mayorD) / 2;
}

let polygonArea = function(s:number, a:number, l:number) {
  return (s * a * l) / 2;
}

let error = function (message:string, result:HTMLElement) {
  message = `Se ha producido un error: ${ message }`;
  result.value = 'ERR';
  console.error(message);
  alert(message);
}

function calculateSquare() {
  let side = document.getElementById('txtSquareSide');
  let result = document.getElementById('txtSquareArea');

  if(isNaN(parseInt(side.value))) {
    error('El lado del cuadrado no es un número', result);
  } else if(parseInt(side.value) <= 0) {
    error('El lado del cuadrado está en un rango inválido', result);
  } else {
    result.value = squareArea(parseInt(side.value)).toString();
  }
}

function calculateRect() {
  let base = document.getElementById('txtRectBase');
  let height = document.getElementById('txtRectHeight');
  let result = document.getElementById('txtRectArea');

  if(isNaN(parseInt(base.value)) || isNaN(parseInt(height.value))) {
    error('La base o la altura del rectángulo no son números', result);
  } else if(parseInt(base.value) <= 0 || parseInt(height.value) <= 0) {
    error('La base o la altura del rectángulo están en un rango inválido', result);
  } else {
    result.value = rectangleArea(parseInt(base.value), parseInt(height.value)).toString();
  }
}

function calculateTriangle() {
  let base = document.getElementById('txtTriangleBase');
  let height = document.getElementById('txtTriangleHeight');
  let result = document.getElementById('txtTriangleArea');

  if(isNaN(parseInt(base.value)) || isNaN(parseInt(height.value))) {
    error('La base o la altura del triángulo no son números', result);
  } else if(parseInt(base.value) <= 0 || parseInt(height.value) <= 0) {
    error('La base o la altura del triángulo están en un rango inválido', result);
  } else {
    result.value = triangleArea(parseInt(base.value), parseInt(height.value)).toString();
  }
}

function calculateCircle() {
  let radius = document.getElementById('txtCircleRadius');
  let result = document.getElementById('txtCircleArea');

  if(isNaN(parseInt(radius.value))) {
    error('El radio del círculo no es un número', result);
  } else if(parseInt(radius.value) <= 0) {
    error('El radio del círculo está en un rango inválido', result);
  } else {
    result.value = circleArea(parseInt(radius.value)).toString();
  }
}

function calculateTrapezoid() {
  let minorBase = document.getElementById('txtTrapezoidMinorBase');
  let mayorBase = document.getElementById('txtTrapezoidMayorBase');
  let height = document.getElementById('txtTrapezoidHeight');
  let result = document.getElementById('txtTrapezoidArea');

  if(isNaN(parseInt(minorBase.value)) || isNaN(parseInt(mayorBase.value)) || isNaN(parseInt(height.value))) {
    error('Las bases o el altura del trapecio no son números', result);
  } else if(parseInt(minorBase.value) <= 0 || parseInt(mayorBase.value) <= 0 || parseInt(height.value) <= 0) {
    error('Las bases o el altura del trapecio están en un rango inválido', result);
  } else {
    result.value = trapezoidArea(parseInt(minorBase.value), parseInt(mayorBase.value), parseInt(height.value));
  }
}

function calculateDiamond() {
  let minorDiagonal = document.getElementById('txtDiamondMinorDiagonal');
  let mayorDiagonal = document.getElementById('txtDiamondMayorDiagonal');
  let result = document.getElementById('txtDiamondArea');

  if(isNaN(parseInt(minorDiagonal.value)) || isNaN(parseInt(mayorDiagonal.value))) {
    error('Las diagonales del rombo no son números', result);
  } else if(parseInt(minorDiagonal.value) <= 0 || parseInt(mayorDiagonal.value) <= 0) {
    error('Las diagonales del rombo están en un rango inválido', result);
  } else {
    result.value = diamondArea(parseInt(minorDiagonal.value), parseInt(mayorDiagonal.value));
  }
}

function calculatePolygon() {
  let sideCount = document.getElementById('txtPolygonSideCount');
  let side = document.getElementById('txtPolygonSide');
  let apothem = document.getElementById('txtPolygonApothem');
  let result = document.getElementById('txtPolygonArea');

  if(isNaN(parseInt(sideCount.value)) || isNaN(parseInt(side.value)) || isNaN(parseInt(apothem.value))) {
    error('La cantidad de lados, el lado o el apotema del polígono no son números', result);
  } else if(parseInt(sideCount.value) <= 2 || parseInt(side.value) <= 0 || parseInt(apothem.value) <= 0) {
    error('La cantidad de lados, el lado o el apotema del polígono están en un rango inválido', result);
  } else {
    result.value = polygonArea(parseInt(sideCount.value), parseInt(side.value), parseInt(apothem.value));
  }
}
