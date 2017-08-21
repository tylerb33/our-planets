"use strict";

// function outputTo(domElement) {
//   domElement.append(...);
// }


function outputTo(domElement) {

	domElement.append(`
	 <li class="liStyling">Year Discovered: 700 BC </li>
	 <li class="liStyling">Mass: 1898 (10^24kg) </li>
	 <li class="liStyling">Size: 142984km </li>
	 <li class="liStyling">Distance from Sun: 1 AU </li>
	 <li class="liStyling">Atmosphere Composition: Hydrogen </li>
	 <li class="liStyling">Satellites: 67 </li>
	 <li class="liStyling">Probes/Orbiters/Explores that have visted: Galilleo</li>`);

}

module.exports = {outputTo}; 