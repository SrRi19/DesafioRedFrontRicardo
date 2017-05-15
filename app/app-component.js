System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.segundo = function () {
                    var primeiro = document.getElementById('bg-1');
                    primeiro.setAttribute("class", "hide");
                    var segundo = document.getElementById('bg-2');
                    segundo.classList.remove("hide");
                    segundo.setAttribute("class", "col-sm-12 noPadding");
                };
                AppComponent.prototype.primeiro = function () {
                    var primeiro = document.getElementById('bg-1');
                    primeiro.classList.remove("hide");
                    primeiro.setAttribute("class", "col-sm-12 noPadding");
                    var segundo = document.getElementById('bg-2');
                    segundo.setAttribute("class", "col-sm-12 noPadding hide");
                };
                AppComponent.prototype.VoltaSegundo = function () {
                    var segundo = document.getElementById('bg-2');
                    segundo.classList.remove("hide");
                    segundo.setAttribute("class", "col-sm-12 noPadding");
                    var terceiro = document.getElementById('bg-3');
                    terceiro.setAttribute("class", "col-sm-12 noPadding hide");
                };
                AppComponent.prototype.terceiro = function () {
                    var terceiro = document.getElementById('bg-3');
                    terceiro.classList.remove("hide");
                    terceiro.setAttribute("class", "col-sm-12 noPadding");
                    var segundo = document.getElementById('bg-2');
                    segundo.setAttribute("class", "col-sm-12 noPadding hide");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'meu-app',
                        templateUrl: 'app/view/home.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-component.js.map