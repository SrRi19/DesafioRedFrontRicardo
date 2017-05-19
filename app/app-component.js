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
                //funcao rolando para baixo
                AppComponent.prototype.CimaBaixo = function () {
                    ini = window.scrollY;
                    var pos = ini;
                    var id = setInterval(frame, 5);
                    function frame() {
                        if (pos == 700) {
                            clearInterval(id);
                        }
                        else {
                            pos++;
                            window.scrollTo(0, pos);
                        }
                    }
                };
                //funcao baixo para cima
                AppComponent.prototype.BaixoCima = function () {
                    teste = document.getElementById("bg-2");
                    topo = teste.offsetTop;
                    window.scrollTo(0, topo);
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