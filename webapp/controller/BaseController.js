sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/base/Log"
], function (Controller, History, Log) {
	"use strict";

	return Controller.extend("com.sfc.routing.controller.BaseController", {
        /**
         * Application 모든 컨트롤러에서 라우터에 액세스하는 편리한 방법입니다.
         * @public
         * @returns {sap.ui.core.routing.Router} compoment에서 구성한 router가 반환 됩니다. 
         */
        getRouter : function () {
            return this.getOwnerComponent().getRouter();
        },

        /**
         * Application View에서 setModel(모델, 이름)로 구현된 모델을 이름으로 가져옵니다. 
         * @public
         * @param {string} 모델 이름
         * @returns {sap.ui.model.Model} 모델 인스턴스
         */
        getModel : function (sName) {
            return this.getView().getModel(sName);
        },

        /**
         * Application View에서 setModel(모델, 이름) View에 모델을 인스턴스화 합니다. 
         * @public
         * @param {sap.ui.model.Model} 모델 인스턴스
         * @param {string} 모델명
         * @returns {sap.ui.mvc.View} View 인스턴스
         */
        setModel : function (oModel, sName) {
            return this.getView().setModel(oModel, sName);
        },

        /**
         * resource bundle을 가져옵니다. i18n, css, img등 resource로 등록된 내용 가져옵니다. 
         * @public
         * @param {string} 리소스명 (i18n...)
         * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
         */
        getResourceBundle : function (sName) {
            return this.getOwnerComponent().getModel(sName).getResourceBundle();
        },

        /**
         * 뒤로가기 이벤트 를 실행합니다. 
         * History 항목이 있을경우 한단계 뒤로 돌아갑니다. 그렇지 않을경우  다음 설정경로로("routes": [{"pattern": ""}]) 이동 합니다. 
         * @public
         */
        onNavBack : function() {
            var sPreviousHash = History.getInstance().getPreviousHash();

            if (sPreviousHash !== undefined) {
                // eslint-disable-next-line sap-no-history-manipulation
                history.go(-1);
            } else {
                this.getRouter().navTo("master", {}, true);
            }
        },


        setLog : function(msg, type) {
        
            type = (typeof b !== 'undefined') ?  type : "info";
            
            if(msg==null) return;
            console.log(msg);
            return;
            switch(type){                     
                case "debug": Log.debug(msg); break;        
                case "warning": Log.warning(msg); break;        
                case "error": Log.error(msg); break;        
                case "fatal": Log.fatal(msg); break;  
                case "info": Log.info(msg); break;  
            }
        }
	});       
            
});