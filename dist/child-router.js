System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ChildRouter;
    return {
        setters:[],
        execute: function() {
            ChildRouter = (function () {
                function ChildRouter() {
                    this.heading = 'Child Router';
                }
                ChildRouter.prototype.configureRouter = function (config, router) {
                    config.map([
                        { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                        { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
                        { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
                    ]);
                    this.router = router;
                };
                return ChildRouter;
            }());
            exports_1("ChildRouter", ChildRouter);
        }
    }
});

//# sourceMappingURL=child-router.js.map
