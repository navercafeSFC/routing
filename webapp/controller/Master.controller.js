sap.ui.define([
  "com/sfc/routing/controller/BaseController",
  "sap/ui/core/mvc/Controller",
  "com/sfc/routing/model/formatter",
  "sap/f/library" /* library 정의 */
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
  function (BaseController, Controller, formatter, fioriLibrary) { /* library 정의 추가*/
    "use strict";

    /**Controller  => BaseController extend로 수정*/
    return BaseController.extend("com.sfc.routing.controller.Master", {
      formatter: formatter,
      onInit: function () {
        this.setLog("master view call funcion onInit");
        /**master view가 route로 인한 이동이 있었다면 실행 */
        this.getRouter().getRoute("master").attachPatternMatched(this._onMasterMatched, this);

      },

      onSelectionChange: function (oEvent) {
        this.setLog("master view call function onSelectionChange ");
        var oItem = oEvent.getSource();


        /*주석처리*/
        //this.getOwnerComponent().getRouter().navTo("object", {  /* navTo(routes에서 선언한 object, 전달할 pattern) */
        /* BaseController getRouter  navTo(routes에서 선언한 object, 전달할 pattern) */



        /*주석처리*/
        // this.getRouter().navTo("object", { 
        //     objectId : oItem.getBindingContext().getProperty("BusinessPartnerID")
        // }, false);  

        this.getRouter().navTo("object", {
          layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded,
          objectId: oItem.getBindingContext().getProperty("BusinessPartnerID")
        });

      },

      _onMasterMatched: function () {
        this.setLog("master view call function _onMasterMatched");
        this.getModel("layout").setProperty("/layout", "TwoColumnsMidExpanded");
      },
    });
  });
