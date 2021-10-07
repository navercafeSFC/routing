sap.ui.define([], function () {
	"use strict";
	return {
		countryImg: function (country) {			
       
			switch (country) {
				case "US":
					return "/img/usa.png";
				case "DE":
					return "/img/de.png";				
				default:
					return "/img/kr.png";
			}
        },
        
	};
});