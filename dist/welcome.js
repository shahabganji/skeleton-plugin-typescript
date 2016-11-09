System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Welcome, UpperValueConverter;
    return {
        setters:[],
        execute: function() {
            Welcome = (function () {
                function Welcome() {
                    this.heading = 'Welcome to the Aurelia Navigation App!';
                    this.firstName = 'John';
                    this.lastName = 'Doe';
                    this.previousValue = this.fullName;
                }
                Object.defineProperty(Welcome.prototype, "fullName", {
                    get: function () {
                        return this.firstName + " " + this.lastName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Welcome.prototype.submit = function () {
                    this.previousValue = this.fullName;
                    alert("Welcome, " + this.fullName + "!");
                };
                Welcome.prototype.canDeactivate = function () {
                    if (this.fullName !== this.previousValue) {
                        return confirm('Are you sure you want to leave?');
                    }
                };
                return Welcome;
            }());
            exports_1("Welcome", Welcome);
            UpperValueConverter = (function () {
                function UpperValueConverter() {
                }
                UpperValueConverter.prototype.toView = function (value) {
                    return value && value.toUpperCase();
                };
                return UpperValueConverter;
            }());
            exports_1("UpperValueConverter", UpperValueConverter);
        }
    }
});

//# sourceMappingURL=welcome.js.map
