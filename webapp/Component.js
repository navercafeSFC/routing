sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "com/sfc/routing/model/models",
  "sap/ui/model/json/JSONModel",
  "sap/f/library"
], function (UIComponent, Device, models, JSONModel, fioriLibrary) {
  "use strict";

  return UIComponent.extend("com.sfc.routing.Component", {

    metadata: {
      manifest: "json"
    },

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
    init: function () {
      console.log("compoment call function init");
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      //empty JSONModel 
      var oModel = new JSONModel();
      this.setModel(oModel, "layout");

      // enable routing
      var oRouter = this.getRouter();
      oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
      oRouter.initialize();

      // set the device model
      this.setModel(models.createDeviceModel(), "device");
    },

    _onBeforeRouteMatched: function (oEvent) {
      console.log("compoment call function _onBeforeRouteMatched");
      var oModel = this.getModel("layout"),
        sLayout = oEvent.getParameters().arguments.layout;

      if (!sLayout) {
        sLayout = fioriLibrary.LayoutType.TwoColumnsMidExpanded;
      }
      oModel.setProperty("/layout", sLayout);
    },
		getContentDensityClass : function() {
			if (this._sContentDensityClass === undefined) {
				// check whether FLP has already set the content density class; do nothing in this case
				// eslint-disable-next-line sap-no-proprietary-browser-api
				if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
					this._sContentDensityClass = "";
				} else if (!Device.support.touch) { // apply "compact" mode if touch is not supported
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					// "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}    
  });
});
