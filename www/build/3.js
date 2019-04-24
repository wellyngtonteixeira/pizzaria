webpackJsonp([3],{

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */])]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pedidos_pedidos_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(41);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, pedidosService) {
        this.navCtrl = navCtrl;
        this.pedidosService = pedidosService;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.confereData();
        this.formataData();
        //console.log(this.str_dt_valida);
        this.pedidos_db$ = this.pedidosService.getPedidosPorHorario()
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            var st1 = changes.filter(function (f) { return f.payload.val().status === "fila"; });
            var st2 = st1.filter(function (f2) { return f2.payload.val().dt === _this.str_dt_valida; });
            return st2.map(function (rt) { return __assign({ key: rt.payload.key }, rt.payload.val()); });
        }));
    };
    HomePage.prototype.confereData = function () {
        var dt_primeiro = new Date("2019-05-04");
        var dt_segundo = new Date("2019-05-05");
        if (new Date().toLocaleDateString() == dt_primeiro.toLocaleDateString()) {
            this.dt_parametro = dt_primeiro;
        }
        else if (new Date().toLocaleDateString() == dt_segundo.toLocaleDateString()) {
            this.dt_parametro = dt_segundo;
        }
        else {
            this.dt_parametro = dt_primeiro;
        }
    };
    HomePage.prototype.formataData = function () {
        var ano = this.dt_parametro.getFullYear();
        var mes = this.dt_parametro.getMonth() + 1;
        var mes_s = mes.toString();
        if (mes < 10) {
            mes_s = "0" + mes_s;
        }
        var dia = this.dt_parametro.getDate();
        var dia_s = dia.toString();
        if (dia < 10) {
            dia_s = "0" + dia_s;
        }
        this.str_dt_valida = ano + "-" + mes_s + "-" + dia_s;
    };
    HomePage.prototype.toArray = function (answers) {
        return Object.keys(answers).map(function (key) { return answers[key]; });
    };
    HomePage.prototype.entregaPedido = function (pedido) {
        var _this = this;
        pedido.status = "entregue";
        this.pedidosService.editPedido(pedido).then(function (rf) {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    HomePage.prototype.cancelaPedido = function (pedido) {
        var _this = this;
        pedido.status = "cancelado";
        this.pedidosService.editPedido(pedido).then(function (rf) {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/wellyngton/PhpstormProjects/pizzaria/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Início</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!--LISTA DE PEDIDOS-->\n  <ion-list>\n    <ion-list-header>\n      FILA DE ATENDIMENTO\n    </ion-list-header>\n    <!--<ion-item *ngFor="let p of pedidos_db$ | async">\n      {{p.cliente}}\n    </ion-item>-->\n    <!--primeiros a entrarem na fila são os pedidos vendidos antecipadamente\n    e que são DELIVERY\n    DEPOIS entram os pedidos que chegam para buscar na paróquia-->\n    <ion-card *ngFor="let pedido of pedidos_db$ | async " >\n      <ion-card-header>\n        {{pedido.cliente}} - {{pedido.horario}}\n        <ion-buttons end>\n          <button (click)="entregaPedido(pedido)">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n          <button (click)="cancelaPedido(pedido)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              Quantidade\n            </ion-col>\n            <ion-col>\n              Sabor\n            </ion-col>\n            <ion-col>\n              Assada\n            </ion-col>\n            <ion-col *ngIf="pedido.delivery">\n              Delivery\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor="let pizza of pedido.pizzas">\n            <ion-col>\n              {{pizza.quantidade}}\n            </ion-col>\n            <ion-col>\n              {{pizza.sabor}}\n            </ion-col>\n            <ion-col>\n              <ng-template [ngIf]="pizza.assada" [ngIfElse]="pizzaCrua">\n                Sim\n              </ng-template>\n              <ng-template #pizzaCrua>\n                Não\n              </ng-template>\n            </ion-col>\n            <ion-col *ngIf="pedido.delivery">\n                {{pedido.endereco}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n  <!--BOTÃO PARA ADICIONAR PEDIDO-->\n  <ion-fab bottom right>\n    <button ion-fab color="primary" navPush="AddPedidoPage" [navParams]="{dt_valida: str_dt_valida}">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/wellyngton/PhpstormProjects/pizzaria/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_pedidos_pedidos_service__["a" /* PedidosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pedidos_pedidos_service__["a" /* PedidosService */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=3.js.map