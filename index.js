// d3.selectAll("h1").style("color", "white");
// d3.select("body").style("background-color", "black");
//
// var jsonCircles = [
//   { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
//   { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
//   { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}];
var standardHexCoordinates = [
  {x:300,y:150},
  {x:225,y:280},
  {x:75,y:280},
  {x:0,y:150},
  {x:75,y:20},
  {x:225,y:20},
];
var standardHexPoints = "300,150 225,280 75,280 0,150 75,20 225,20";
// var standardHexPoints = "305,150 230,280 80,280 5,150 80,20 230,20";
var getHexPoints = function(xAdjust, yAdjust){
  var adjustedCoordinates = standardHexCoordinates.map(function(point){
    return {
      x: point.x + xAdjust,
      y: point.y + yAdjust
    };
  });
  var adjustedPoints = adjustedCoordinates.map(function(point){
    return point.x.toString() + "," + point.y.toString();
  });
  return adjustedPoints.join(" ");
};
var hexWidth = 300;
var hexHeight = 260;
var hexCards = [
  {type: "city", xAdjust:0, yAdjust: 0,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "A", populationPercent: 25},
  {type: "city", xAdjust:225, yAdjust: 130,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "B", populationPercent: 20},
  {type: "city", xAdjust:450, yAdjust: 0,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "C", populationPercent: 15},
  {type: "city", xAdjust:675, yAdjust: 130,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "D", populationPercent: 10},
  {type: "city", xAdjust:0, yAdjust: 260,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "E", populationPercent: 8},
  {type: "city", xAdjust:225, yAdjust: 390,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "F", populationPercent: 7},
  {type: "city", xAdjust:450, yAdjust: 260,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "G", populationPercent: 6},
  {type: "city", xAdjust:675, yAdjust: 390,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "H", populationPercent: 5},
  {type: "city", xAdjust:0, yAdjust: 520,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "I", populationPercent: 3},
  {type: "city", xAdjust:225, yAdjust: 650,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "J", populationPercent: 1},
  {type: "neighborhood", xAdjust:450, yAdjust: 520,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "A", populationPercent: 9},
  {type: "neighborhood", xAdjust:675, yAdjust: 650,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "B", populationPercent: 8},
  {type: "neighborhood", xAdjust:0, yAdjust: 780,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "E", populationPercent: 8},
  {type: "neighborhood", xAdjust:225, yAdjust: 910,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "F", populationPercent: 7},
  {type: "neighborhood", xAdjust:450, yAdjust: 780,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "G", populationPercent: 7},
  {type: "neighborhood", xAdjust:675, yAdjust: 910,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "H", populationPercent: 6},
  {type: "neighborhood", xAdjust:0, yAdjust: 1040,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "I", populationPercent: 6},
  {type: "neighborhood", xAdjust:225, yAdjust: 1170,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "J", populationPercent: 6},
  {type: "neighborhood", xAdjust:450, yAdjust: 1040,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "A", populationPercent: 5},
  {type: "neighborhood", xAdjust:675, yAdjust: 1170,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "B", populationPercent: 5},
  {type: "neighborhood", xAdjust:0, yAdjust: 1300,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "E", populationPercent: 5},
  {type: "neighborhood", xAdjust:225, yAdjust: 1430,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "F", populationPercent: 5},
  {type: "neighborhood", xAdjust:450, yAdjust: 1300,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "G", populationPercent: 4},
  {type: "neighborhood", xAdjust:675, yAdjust: 1430,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "H", populationPercent: 4},
  {type: "neighborhood", xAdjust:0, yAdjust: 1560,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "I", populationPercent: 4},
  {type: "neighborhood", xAdjust:225, yAdjust: 1690,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "J", populationPercent: 3},
  {type: "neighborhood", xAdjust:450, yAdjust: 1560,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "A", populationPercent: 3},
  {type: "neighborhood", xAdjust:675, yAdjust: 1690,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "B", populationPercent: 2},
  {type: "neighborhood", xAdjust:0, yAdjust: 1820,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "E", populationPercent: 2},
  {type: "neighborhood", xAdjust:225, yAdjust: 1950,"fillColor": "white", "stroke": "black", "strokeWidth": 3, label: "F", populationPercent: 1},
];
var svgContainer = d3.select("body").append("svg")
  .attr("width", 1000)
  .attr("height", 2975);

var hexCardSvgs = svgContainer.selectAll("svg")
  .data(hexCards)
  .enter()
  .append("svg")
    .attr("class", function (d) { return d.type; })
    .attr("width", 310)
    .attr("height", 290)
    .attr("x", function (d) { return d.xAdjust; })
    .attr("y", function (d) { return d.yAdjust; });

var polygons = hexCardSvgs.selectAll("polygon")
  .data(["hexagon"])
  .enter()
  .append("polygon");





var lines = hexCardSvgs
  .filter(".neighborhood")
  .selectAll("line")
  .data([
    {
      id: "left vertical",
      x1: 75,
      y1: 20,
      x2: 75,
      y2: 280,
    },
    {
      id: "middle vertical",
      x1: 150,
      y1: 150,
      x2: 150,
      y2: 280,
      points: "150,150 150,280"
    },
    {
      id: "right vertical",
      x1: 225,
      y1: 20,
      x2: 225,
      y2: 280,
      points: "225,20, 225,280"
    },
    {
      id: "horizontal",
      x1: 0,
      y1: 150,
      x2: 300,
      y2: 150,
      points: "0,150 300,150"
    },
    {
      id: "upper left to lower right",
      x1: 75,
      y1: 20,
      x2: 225,
      y2: 280,
      points: "75,20 225,280"
    },
    {
      id: "lower left to upper right",
      x1: 75,
      y1: 280,
      x2: 225,
      y2: 20,
      points: "75,280 225,20"
    },
  ])
  .enter()
  .append("line");

hexCardSvgs
  .filter(".city")
  .selectAll("circle")
  .data(["population circle"])
  .enter()
  .append("circle");

hexCardSvgs
  .filter(".neighborhood")
  .selectAll("circle")
  .data(["population circle", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"])
  .enter()
  .append("circle");

hexCardSvgs
  .filter(".city")
  .selectAll("text")
  .data(["caption", "population"])
  .enter()
  .append("text");

hexCardSvgs
  .filter(".neighborhood")
  .selectAll("text")
  .data(["caption", "population", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"])
  .enter()
  .append("text");

hexCardSvgs
  .each(function(parentDatum) {
    d3.select(this).selectAll('polygon')
    .attr("points", function (d) { return standardHexPoints; })
    .style("stroke", function(d) { return parentDatum.stroke; })
    .style("stroke-width", function(d) { return parentDatum.strokeWidth; })
    .style("fill", function(d) { return parentDatum.fillColor; });

    // if (parentDatum.type === "neighborhood") {
      d3.select(this).selectAll('line')
      .attr("x1", function (d) { return d.x1; })
      .attr("y1", function (d) { return d.y1; })
      .attr("x2", function (d) { return d.x2; })
      .attr("y2", function (d) { return d.y2; })
      .style("stroke", function(d) { return parentDatum.stroke; })
      .style("stroke-width", function(d) { return 1; });
    // }

    d3.select(this).selectAll('circle')
    .attr("cx", function (d) {
      switch (parentDatum.type) {
        case "city":
          return 150;
        case "neighborhood":
          switch (d) {
            case "population circle":
              return 150;
            case "A":
              return 50;
            case "B":
              return 100;
            case "C":
              return 200;
            case "D":
              return 250;
            case "E":
              return 50;
            case "F":
              return 100;
            case "G":
              return 125;
            case "H":
              return 175;
            case "I":
              return 200;
            case "J":
              return 250;
          }
      }
    })
    .attr("cy", function (d) {
      switch (parentDatum.type) {
        case "city":
          return 140;
        case "neighborhood":
          switch (d) {
            case "population circle":
              return 70;
            case "A":
              return 125;
            case "B":
              return 125;
            case "C":
              return 125;
            case "D":
              return 125;
            case "E":
              return 175;
            case "F":
              return 175;
            case "G":
              return 255;
            case "H":
              return 255;
            case "I":
              return 175;
            case "J":
              return 175;
          }
      }
    })
    .attr("r", function (d) {
      switch (d) {
        case "population circle":
          return 30;
        default:
          return 20;
      }
    })
    .style("stroke", function(d) { return parentDatum.stroke; })
    .style("stroke-width", function(d) { return parentDatum.strokeWidth; })
    .style("fill", function(d) { return "white"; });

    var textWidth = 50;
    var textHeight = 30;
    d3.select(this).selectAll('text')
    .attr("x", function (d) {
      if (parentDatum.type === "city") {
        return (hexWidth / 2);
      }
      switch (d) {
        case "caption":
          return 100;
        case "population":
          return 150;
        case "A":
          return 50;
        case "B":
          return 100;
        case "C":
          return 200;
        case "D":
          return 250;
        case "E":
          return 50;
        case "F":
          return 100;
        case "G":
          return 125;
        case "H":
          return 175;
        case "I":
          return 200;
        case "J":
          return 250;
      }
    })
    //var standardHexPoints = "300,150 225,280 75,280 0,150 75,20 225,20";
    .attr("y", function (d) {
      if (parentDatum.type === "city") {
        return d === "caption" ? 50 : 150;
      }
      switch (d) {
        case "caption":
          return 100;
        case "population":
          return 70;
        case "A":
          return 100;
        case "B":
          return 100;
        case "C":
          return 100;
        case "D":
          return 100;
        case "E":
          return 215;
        case "F":
          return 215;
        case "G":
          return 230;
        case "H":
          return 230;
        case "I":
          return 215;
        case "J":
          return 215;
      }
    })
    .style("fill", function(d) { return "black"; })
    .style("text-anchor", function(d) { return "middle"})//d === "caption" ? "middle" : "start"; })
    .style("font-size", function(d) { return "24px"; })
    .text(function (d) {
      switch (parentDatum.type) {
        case "city":
          return d === "caption" ? parentDatum.label : parentDatum.populationPercent;
        case "neighborhood":
          switch (d) {
            case "caption":
              return "";
            case "population":
              return parentDatum.populationPercent;
            default:
              return d;
          }
      }
    });
  });


//
// var polygonAttributes = hexCardSvgs
// .each(function(parentDatum) {
//   d3.select(this).selectAll('polygon')
//   .attr("points", function (d) { return standardHexPoints; })
//   .style("stroke", function(d) { return parentDatum.stroke; })
//   .style("stroke-width", function(d) { return parentDatum.strokeWidth; })
//   .style("fill", function(d) { return parentDatum.fillColor; });
//
//   d3.select(this).selectAll('circle')
//   .attr("cx", function (d) { return 150; })
//   .attr("cy", function (d) { return 140; })
//   .attr("r", function(d) { return 30; })
//   .style("stroke", function(d) { return parentDatum.stroke; })
//   .style("stroke-width", function(d) { return parentDatum.strokeWidth; })
//   .style("fill", function(d) { return "white"; });
//
//   var textWidth = 50;
//   var textHeight = 30;
//   d3.select(this).selectAll('text')
//   .attr("width", textWidth)
//
//   .attr("x", function (d) { return (hexWidth / 2); })
//   .attr("y", function (d) { return d === "caption" ? 50 : 150; })
//   .style("fill", function(d) { return "black"; })
//   .style("text-anchor", function(d) { return "middle"; })
//   .style("font-size", function(d) { return "24px"; })
//   .text(function(d) { return d === "caption" ? parentDatum.label : parentDatum.populationPercent; });
// });
//
//
// // var neighborhoodHexCardSvgs = svgContainer.selectAll("svg")
// //   .data(neighborhoodHexCards)
// //   .enter()
// //   .append("svg")
// //   .attr("width", 300)
// //   .attr("height", 280)
// //   .attr("x", function (d) { return d.xAdjust; })
// //   .attr("y", function (d) { return d.yAdjust; });
// //
// // var polygons = neighborhoodHexCardSvgs.selectAll("polygon")
// //   .data(["hexagon"])
// //   .enter()
// //   .append("polygon");
