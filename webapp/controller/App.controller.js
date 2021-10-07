sap.ui.define([
  "com/sfc/routing/controller/BaseController",
  "sap/ui/core/mvc/Controller",
  "com/sfc/routing/model/formatter",
  "sap/ui/model/json/JSONModel",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
  function (BaseController, Controller, formatter, JSONModel) {
    "use strict";

    return BaseController.extend("com.sfc.routing.controller.App", {
      onInit: function () {
        this.setLog("app view call function onInit");
        this.getRouter().attachRouteMatched(this.onRouteMatched, this);
      },

      onRouteMatched: function (oEvent) {
        this.setLog("app view call function onRouteMatched");
        var sRouteName = oEvent.getParameter("name"),
          oArguments = oEvent.getParameter("arguments");

        this.setLog("oArguments");
        this.setLog("===============================");
        this.setLog(oArguments);
        this.setLog("===============================");
        this.setLog("sRouteName : " + sRouteName);

        // Save the current route name
        this.currentRouteName = sRouteName;
        this.currentObjectID = oArguments.objectid;
      },

      onStateChanged: function (oEvent) {
        this.setLog("app view call function onStateChanged");
        var bIsNavigationArrow = oEvent.getParameter("isNavigationArrow"),
          sLayout = oEvent.getParameter("layout");
        if (this.currentObjectID !== undefined) {

          this.setLog("currentObjectID :" + this.currentObjectID);
          this.setLog("layout :" + layout);

          this.oRouter.navTo(this.currentRouteName, { layout: sLayout, objectid: this.currentObjectID }, true);
        }

      },
      onExit: function () {
        this.setLog("app view call function onExit");
        this.oRouter.detachRouteMatched(this.onRouteMatched, this);
      }
    });
  });