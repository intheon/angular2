System.register(['angular2/angular2'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var angular2_1;
    var MyFirstComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            MyFirstComponent = (function () {
                function MyFirstComponent() {
                    this.name = "ben";
                }
                MyFirstComponent = __decorate([
                    angular2_1.Component({
                        selector: "testapp"
                    }),
                    angular2_1.View({
                        template: "<h1>help me</h1>"
                    })
                ], MyFirstComponent);
                return MyFirstComponent;
            })();
            angular2_1.bootstrap(MyFirstComponent);
        }
    }
});
