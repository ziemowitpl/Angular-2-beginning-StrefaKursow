System.register(['angular2/core', './product'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_1;
    var AppComponent, product;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.days = ['Poniedziałek', 'Wtorek', 'Środa'];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'articles',
                        template: "\n    <ul>\n        <li *ngFor = \"#day of days\">{{ day }}</li>\n    </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            // npm start
            product = new product_1.Product(123, 'Kurs ABC', 80);
            /*
            product.id = 1;
            product.title = 'Kurs';
            product.price = 80;
            */
            product.showProduct();
        }
    }
});
//# sourceMappingURL=app.component.js.map