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

var screen_middle = 400
var sigil_diameter = 70
var sigil_border_colour = "#666677"
var sigil_border_width = 4

	var svg = d3.select("#viz")
  .append("svg")
  .attr("width", "100vh")
  .attr("height", "100vh");

  svg.append('path')
  .attr("id", "Minerva")
  .attr("d", hexagon(screen_middle,200,sigil_diameter))
  .attr("stroke", sigil_border_colour)
  .attr("stroke-width", sigil_border_width)
  .attr("fill", "#c7b4ad");

  svg.append('path')
  .attr("id", "Hephaestus")
  .attr("d", hexagon(screen_middle,350,sigil_diameter))
  .attr("stroke", sigil_border_colour)
  .attr("stroke-width", sigil_border_width)
  .attr("fill", "DarkGray");

	svg.append('path')
  .attr("id", "Hades")
  .attr("d", hexagon(screen_middle,500,sigil_diameter))
  .attr("stroke", sigil_border_colour)
  .attr("stroke-width", sigil_border_width)
  .attr("fill", "DarkGray");

  svg.append('path')
  .attr("id", "Artemis")
  .attr("d", hexagon(screen_middle,650,sigil_diameter))
  .attr("stroke", sigil_border_colour)
  .attr("stroke-width", sigil_border_width)
  .attr("fill", "#98AFC7");

  svg.append('path')
  .attr("id", "Poseidon")
  .attr("d", hexagon(screen_middle,800,sigil_diameter))
  .attr("stroke", sigil_border_colour)
  .attr("stroke-width", sigil_border_width)
  .attr("fill", "#98AFC7");

	// svg.path(hexagon(212,100,60),{stroke: "black", "stroke-width":5, fill: "blue",});
	// svg.path(hexagon(156,197,60),{stroke: "black", "stroke-width":5, fill: "yellow",});
