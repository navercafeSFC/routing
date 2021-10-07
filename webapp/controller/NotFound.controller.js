sap.ui.define([
    "com/sfc/routing/controller/BaseController",       
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController, Controller) {
		"use strict";
        /**Controller  => BaseController extend로 수정*/
		return BaseController.extend("com.sfc.routing.controller.NotFound", {
            
			onInit: function () {

            }
            //,
 
            // BaseController onNavBack를 사용함으로 주석 처리합니다.  */
            // onNavBack : function () {   
            //     this.getOwnerComponent().getRouter().navTo("master", {}, true);                
            // }
		});
	});
