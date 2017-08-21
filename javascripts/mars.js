"use strict";

// function outputTo(domElement) {
//   domElement.append(...);
// }


function outputTo(domElement) {

	domElement.append(`
	 <li class="liStyling">Year Discovered: 300 BC </li>
	 <li class="liStyling">Mass: .642 (10^24kg) </li>
	 <li class="liStyling">Size: 6792km</li>
	 <li class="liStyling">Distance from Sun: 1 AU </li>
	 <li class="liStyling">Atmosphere Composition: Carbon Dioxide </li>
	 <li class="liStyling">Satellites: 2 </li>
	 <li class="liStyling">Probes/Orbiters/Explores that have visted: Spirit, Opportunity, Sojourner, Beagle</li>`);
}

module.exports = {outputTo}; 