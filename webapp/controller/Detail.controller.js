sap.ui.define([
    "com/sfc/routing/controller/BaseController",
    "sap/ui/core/mvc/Controller",
    "com/sfc/routing/model/formatter",
    "sap/f/library"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController, Controller, formatter, fioriLibrary) {
        "use strict";
        /**Controller  => BaseController extend로 수정*/        
		return BaseController.extend("com.sfc.routing.controller.Detail", {
            formatter: formatter,
			onInit: function () {

                this.setLog("detail view call function onInit");

                /**
                 * 
                 * pattern과 매치가 되면 정의한 _onObjectMatched function을 실행
                 */
                /*주석처리*/
                /* this.getOwnerComponent().getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);*/
                /* BaseController getRouter */
                this.getRouter().getRoute("master").attachPatternMatched(this._onObjectMatched, this);
                this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);
            },


                    
            // BaseController getModel를 사용함으로 주석 처리합니다.  */
            // getModel : function (sName) {
            //     return this.getView().getModel(sName);
            // },    

            _onObjectMatched : function (oEvent) {
                this.setLog("detail view call function _onObjectMatched");
                /* pattern BusinessPartnerSet/{objectId} */
                var sObjectId =  oEvent.getParameter("arguments").objectId;                

                this.setLog("sObjectId : " + sObjectId);

                /* this.getModel()에 대한 metadataLoaded가 정상적으로 로드 되었다면. */

                if(sObjectId !== undefined){
                    this.getModel().metadataLoaded().then( function() {
                        //key를 생성한다. BusinessPartnerSet(key)
                        var sObjectPath = this.getModel().createKey("/BusinessPartnerSet", {
                            BusinessPartnerID :  sObjectId
                        });

                        this.setLog("sObjectPath : " + sObjectPath);
                        this.getView().bindElement(sObjectPath);
                                
                    }.bind(this));
                }
            },

            onExit: function () {
                this.setLog("detail view call functoin onExit");
                this.oRouter.getRoute("master").detachPatternMatched(this._onProductMatched, this);
                this.oRouter.getRoute("object").detachPatternMatched(this._onProductMatched, this);
            }            
            //,

            // BaseController onNavBack를 사용함으로 주석 처리합니다.  */
            // onNavBack : function () {   
            //     this.getOwnerComponent().getRouter().navTo("master", {}, true);                
            // }

		});
	});
