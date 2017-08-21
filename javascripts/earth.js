"use strict";

// function outputTo(domElement) {
//   domElement.append(...);
// }


function outputTo(domElement) {
	domElement.append(`
	 <li class="liStyling">Year Discovered: Unknown </li>
	 <li class="liStyling">Mass: 5.97 (10^24kg) </li>
	 <li class="liStyling">Size: 12756km </li>
	 <li class="liStyling">Distance from Sun: 1 AU </li>
	 <li class="liStyling">Atmosphere Composition: Nitrogen </li>
	 <li class="liStyling">Satellites: 1 </li>
	 <li class="liStyling">Probes/Orbiters/Explores that have visted: Everything</li>`);
}

module.exports = {outputTo}; 