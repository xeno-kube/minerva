// var sampleSVG = d3.select("#viz")
//         .append("svg")
//         .attr("width", 100)
//         .attr("height", 100);
//
//     sampleSVG.append("circle")
//         .style("stroke", "gray")
//         .style("fill", "white")
//         .attr("r", 40)
//         .attr("cx", 50)
//         .attr("cy", 50)
//         .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
//         .on("mouseout", function(){d3.select(this).style("fill", "white");});

function hexagon(x,y,r) {
	var x1 = x;
	var y1 = y-r;
	var x2 = x+(Math.cos(Math.PI/6)*r);
	var y2 = y-(Math.sin(Math.PI/6)*r);
	var x3 = x+(Math.cos(Math.PI/6)*r);
	var y3 = y+(Math.sin(Math.PI/6)*r);
	var x4 = x;
	var y4 = y+r;
	var x5 = x-(Math.cos(Math.PI/6)*r);
	var y5 = y+(Math.sin(Math.PI/6)*r);
	var x6 = x-(Math.cos(Math.PI/6)*r);
	var y6 = y-(Math.sin(Math.PI/6)*r);

	var path = "M"+x1+" "+y1+" L"+x2+" "+y2+" L"+x3+" "+y3+" L"+x4+" "+y4+" L"+x5+" "+y5+" L"+x6+" "+y6+"z";
	return path;
}


	var svg = d3.select("#viz")
  .append("svg")
  .attr("width", "100vh")
  .attr("height", "100vh");

  svg.append('path')
  .attr("id", "Minerva")
  .attr("d", hexagon(200,200,100))
  .attr("stroke", "Gray")
  .attr("stroke-width", 5)
  .attr("fill", "#b7b4ad");

	svg.append('path')
  .attr("id", "Hades")
  .attr("d", hexagon(400,200,100))
  .attr("stroke", "Gray")
  .attr("stroke-width", 5)
  .attr("fill", "DarkGray");

  svg.append('path')
  .attr("id", "Artemis")
  .attr("d", hexagon(600,200,100))
  .attr("stroke", "#6D7B8D")
  .attr("stroke-width", 5)
  .attr("fill", "#98AFC7");

	// svg.path(hexagon(212,100,60),{stroke: "black", "stroke-width":5, fill: "blue",});
	// svg.path(hexagon(156,197,60),{stroke: "black", "stroke-width":5, fill: "yellow",});
