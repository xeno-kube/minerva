var screen_middle = 400
var sigil_diameter = 70
var sigil_border_colour = "#666677"
var sigil_border_width = 4
var selected_sigil_border_width = 20

var svg = d3.select("#viz")
  .append("svg")
  .attr("width", "100vh")
  .attr("height", "100vh");

var t = d3.transition()
  .duration(250)
  .ease(d3.easeLinear);

var modules = [ minerva(), hephaestus(), hades(), artemis(), poseidon() ]

function drawSigils() {
	var initial_y = 100
	var inc = 175

	var y = initial_y

	modules.forEach(function(module){
		console.log(module.name)

		svg.append("text")
		.attr("x", 100)
		.attr("y", y)
		.text(module.name)

		svg.append('path')
	  .attr("id", module.name)
	  .attr("d", hexagon(screen_middle,y,sigil_diameter))
	  .attr("stroke", sigil_border_colour)
	  .attr("stroke-width", sigil_border_width)
	  .attr("fill", module.sigil_colour)
		.attr("original_sigil_colour", module.sigil_colour)
		.on("mouseover",handleMouseOver)
		.on("mouseout",handleMouseOut);

		y += inc
	})
}

drawSigils()

function handleMouseOver(d, i) {  // Add interactivity
	// console.log("OVER!!!")
  d3.select(this)
	.transition(t)
	.attr("fill", "DarkGray")
	.attr("stroke-width", selected_sigil_border_width);
}

function handleMouseOut(d, i) {
	// console.log("OUT!!!")
  // Use D3 to select element, change color back to normal
  d3.select(this)
	.transition(t)
	.attr("fill", this.getAttribute("original_sigil_colour"))
	.attr("stroke-width", sigil_border_width);
}

  // svg.append('path')
  // .attr("id", "Hephaestus")
  // .attr("d", hexagon(screen_middle,350,sigil_diameter))
  // .attr("stroke", sigil_border_colour)
  // .attr("stroke-width", sigil_border_width)
  // .attr("fill", "DarkGray");

	// svg.append('path')
  // .attr("id", "Hades")
  // .attr("d", hexagon(screen_middle,500,sigil_diameter))
  // .attr("stroke", sigil_border_colour)
  // .attr("stroke-width", sigil_border_width)
  // .attr("fill", "DarkGray");

  // svg.append('path')
  // .attr("id", "Artemis")
  // .attr("d", hexagon(screen_middle,650,sigil_diameter))
  // .attr("stroke", sigil_border_colour)
  // .attr("stroke-width", sigil_border_width)
  // .attr("fill", "#98AFC7");
  //
  // svg.append('path')
  // .attr("id", "Poseidon")
  // .attr("d", hexagon(screen_middle,800,sigil_diameter))
  // .attr("stroke", sigil_border_colour)
  // .attr("stroke-width", sigil_border_width)
  // .attr("fill", "#98AFC7");

	// svg.path(hexagon(212,100,60),{stroke: "black", "stroke-width":5, fill: "blue",});
	// svg.path(hexagon(156,197,60),{stroke: "black", "stroke-width":5, fill: "yellow",});
