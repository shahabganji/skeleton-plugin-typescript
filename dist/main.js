System.register(['bootstrap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin("aurelia-skeleton-plugin-typescript");
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports_1("configure", configure);
    return {
        setters:[
            function (_1) {}],
        execute: function() {
        }
    }
});

//# sourceMappingURL=main.js.map
