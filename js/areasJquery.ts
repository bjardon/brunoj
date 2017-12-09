import $ = require("jquery");

(function (jQuery) {

  let area = {
    squareArea: function (l:number) {
      return l * l;
    },
    rectangleArea: function (b:number, h:number) {
      return b * h;
    },
    triangleArea: function (b:number, h:number) {
      return (b * h) / 2;
    },
    circleArea: function (r:number) {
      return Math.PI * r * r;
    },
    trapezoidArea: function(minorB:number, mayorB:number, h:number) {
      return ((minorB + mayorB) / 2) * h;
    },
    diamondArea: function(minorD:number, mayorD:number) {
      return (minorD * mayorD) / 2;
    },
    polygonArea: function(s:number, a:number, l:number) {
      return (s * a * l) / 2;
    },
    error: function (message:string, result:JQuery) {
      message = `Se ha producido un error: ${ message }`;
      result.val('ERR');
      console.error(message);
      alert(message);
    }
  };

  $("#btnSquare").click(function () {
    let side = $('#txtSquareSide');
    let result = $('#txtSquareArea');

    if(isNaN(parseInt(side.val()))) {
      area.error('El lado del cuadrado no es un número', result);
    } else if(parseInt(side.val()) <= 0) {
      area.error('El lado del cuadrado está en un rango inválido', result);
    } else {
      result.val(area.squareArea(parseInt(side.val())).toString())
    }
  });

  $("#btnRect").click(function () {
    let base = $('#txtRectBase');
    let height = $('#txtRectHeight');
    let result = $('#txtRectArea');

    if(isNaN(parseInt(base.val()) || isNaN(parseInt(height.val()))) {
      area.error('La base o la altura del rectángulo no son números', result);
    } else if(parseInt(base.val()) <= 0 || parseInt(height.val()) <= 0) {
      area.error('La base o la altura del rectángulo están en un rango inválido', result);
    } else {
      result.val(area.rectangleArea(parseInt(base.val()), parseInt(height.val())).toString());
    }
  });

  $("#btnTriangle").click(function () {
    let base = $('#txtTriangleBase');
    let height = $('#txtTriangleHeight');
    let result = $('#txtTriangleArea');

    if(isNaN(parseInt(base.val())) || isNaN(parseInt(height.val()))) {
      area.error('La base o la altura del triángulo no son números', result);
    } else if(parseInt(base.val()) <= 0 || parseInt(height.val()) <= 0) {
      area.error('La base o la altura del triángulo están en un rango inválido', result);
    } else {
      result.val(area.triangleArea(parseInt(base.val()), parseInt(height.val())).toString());
    }
  });

  $("#btnCircle").click(function () {
    let radius = $('#txtCircleRadius');
    let result = $('#txtCircleArea');

    if(isNaN(parseInt(radius.val()))) {
      area.error('El radio del círculo no es un número', result);
    } else if(parseInt(radius.val()) <= 0) {
      area.error('El radio del círculo está en un rango inválido', result);
    } else {
      result.val(area.circleArea(parseInt(radius.val())).toString());
    }
  });

  $("#btnTrapezoid").click(function () {
    let minorBase = $('#txtTrapezoidMinorBase');
    let mayorBase = $('#txtTrapezoidMayorBase');
    let height = $('#txtTrapezoidHeight');
    let result = $('#txtTrapezoidArea');

    if(isNaN(parseInt(minorBase.val())) || isNaN(parseInt(mayorBase.val())) || isNaN(parseInt(height.val()))) {
      area.error('Las bases o el altura del trapecio no son números', result);
    } else if(parseInt(minorBase.val()) <= 0 || parseInt(mayorBase.val()) <= 0 || parseInt(height.val()) <= 0) {
      area.error('Las bases o el altura del trapecio están en un rango inválido', result);
    } else {
      result.val(area.trapezoidArea(parseInt(minorBase.val()), parseInt(mayorBase.val()), parseInt(height.val())));
    }
  });

  $("#btnDiamond").click(function () {
    let minorDiagonal = $('#txtDiamondMinorDiagonal');
    let mayorDiagonal = $('#txtDiamondMayorDiagonal');
    let result = $('#txtDiamondArea');

    if(isNaN(parseInt(minorDiagonal.val())) || isNaN(parseInt(mayorDiagonal.val()))) {
      area.error('Las diagonales del rombo no son números', result);
    } else if(parseInt(minorDiagonal.val()) <= 0 || parseInt(mayorDiagonal.val()) <= 0) {
      area.error('Las diagonales del rombo están en un rango inválido', result);
    } else {
      result.val(area.diamondArea(parseInt(minorDiagonal.val()), parseInt(mayorDiagonal.val())));
    }
  });

  $("#btnPolygon").click(function () {
    let sideCount = $('#txtPolygonSideCount');
    let side = $('#txtPolygonSide');
    let apothem = $('#txtPolygonApothem');
    let result = $('#txtPolygonArea');

    if(isNaN(parseInt(sideCount.val())) || isNaN(parseInt(side.val())) || isNaN(parseInt(apothem.val()))) {
      area.error('La cantidad de lados, el lado o el apotema del polígono no son números', result);
    } else if(parseInt(sideCount.val()) <= 2 || parseInt(side.val()) <= 0 || parseInt(apothem.val()) <= 0) {
      area.error('La cantidad de lados, el lado o el apotema del polígono están en un rango inválido', result);
    } else {
      result.val(area.polygonArea(parseInt(sideCount.val()), parseInt(side.val()), parseInt(apothem.val())));
    }
  });

})();
