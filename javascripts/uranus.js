"use strict";

// function outputTo(domElement) {
//   domElement.append(...);
// }


function outputTo(domElement) {

	domElement.append(`
	 <li class="liStyling">Year Discovered: 1780 </li>
	 <li class="liStyling">Mass: 86 (10^24kg) </li>
	 <li class="liStyling">Size: 51118km</li>
	 <li class="liStyling">Distance from Sun: 1 AU </li>
	 <li class="liStyling">Atmosphere Composition: Hydrogen </li>
	 <li class="liStyling">Satellites: 27 </li>
	 <li class="liStyling">Probes/Orbiters/Explores that have visted: None</li>`);
}

module.exports = {outputTo}; 