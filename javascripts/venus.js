"use strict";

// function outputTo(domElement) {
//   domElement.append(...);
// }

function outputTo(domElement) {

	domElement.append(`
	 <li class="liStyling">Year Discovered: 1600 BC</li>
	 <li class="liStyling">Mass: 4.87 (10^24kg) </li>
	 <li class="liStyling">Size: 12104km </li>
	 <li class="liStyling">Distance from Sun: .39 AU </li>
	 <li class="liStyling">Atmosphere Composition: Carbon Dioxide </li>
	 <li class="liStyling">Satellites: 0 </li>
	 <li class="liStyling">Probes/Orbiters/Explores that have visted: Pioneer Series</li>`);
}

module.exports = {outputTo}; 