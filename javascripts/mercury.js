"use strict";

// function outputTo(domElement) {
//   domElement.append(...);
// }

function outputTo(domElement) {

	domElement.append(`
	 <li class="liStyling">Year Discovered: 1000 BC </li>
	 <li class="liStyling">Mass: .33KG (10^24kg) </li>
	 <li class="liStyling">Size: 4879km </li>
	 <li class="liStyling">Distance from Sun: .39 AU </li>
	 <li class="liStyling">Atmosphere Composition: Oxygen </li>
	 <li class="liStyling">Satellites: 0 </li>
	 <li class="liStyling">Probes/Orbiters/Explores that have visted: None </li>`);
	 
	 // $("#"+outputLocation).html(finalOutputHTML);
	 // console.log ("after", $("#"+outputLocation).html(finalOutputHTML));
}

module.exports = {outputTo}; 