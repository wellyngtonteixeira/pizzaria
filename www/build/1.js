webpackJsonp([1],{

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscaPedidoPageModule", function() { return BuscaPedidoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__busca_pedido__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BuscaPedidoPageModule = /** @class */ (function () {
    function BuscaPedidoPageModule() {
    }
    BuscaPedidoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__busca_pedido__["a" /* BuscaPedidoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__busca_pedido__["a" /* BuscaPedidoPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__["a" /* IonicSelectableModule */],
            ],
        })
    ], BuscaPedidoPageModule);
    return BuscaPedidoPageModule;
}());

//# sourceMappingURL=busca-pedido.module.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pedido; });
var Pedido = /** @class */ (function () {
    function Pedido() {
        this.delivery = false;
        this.cliente = "";
        this.endereco = "";
        this.telefone = "";
        this.dt = "";
        this.horario = "";
        this.vendedor = "";
        this.pizzas = [];
        this.status = "fila";
        this.pago = true;
    }
    return Pedido;
}());

//# sourceMappingURL=pedido.model.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaPedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_pedido_model__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pedidos_pedidos_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(41);
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





/**
 * Generated class for the BuscaPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuscaPedidoPage = /** @class */ (function () {
    function BuscaPedidoPage(navCtrl, navParams, viewCtrl, pedidosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.pedidosService = pedidosService;
        this.pedido = new __WEBPACK_IMPORTED_MODULE_2__models_pedido_model__["a" /* Pedido */]();
    }
    BuscaPedidoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.pedidosParoquia_db$ = this.pedidosService.getPedidosNaParoquia()
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (changes) {
            var st = changes.filter(function (f) { return f.payload.val().status === "comprado"; });
            var st2 = st.filter(function (f2) { return f2.payload.val().dt === _this.dt_pedido_b; });
            return st2.map(function (rt) { return __assign({ key: rt.payload.key }, rt.payload.val()); });
        }));
        this.pedidosParoquia_db$.forEach(function (obb) { return _this.pedidosParoquia$ = obb; });
    };
    BuscaPedidoPage.prototype.ionViewWillLoad = function () {
        this.dt_pedido_b = this.navParams.get("dt_valida_b");
        console.log(this.dt_pedido_b);
    };
    BuscaPedidoPage.prototype.fecharModal = function () {
        this.viewCtrl.dismiss();
    };
    BuscaPedidoPage.prototype.pedidoChange = function (event) {
        var val = event.target.value;
        if (val && val.trim() != '') {
            this.pedidosParoquia$ = this.pedidosParoquia$.filter(function (item) {
                return (item.cliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.ngOnInit();
        }
    };
    BuscaPedidoPage.prototype.selecionaCliente = function (cliente) {
        this.viewCtrl.dismiss(cliente);
    };
    BuscaPedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-busca-pedido',template:/*ion-inline-start:"/home/wellyngton/PhpstormProjects/pizzaria/src/pages/busca-pedido/busca-pedido.html"*/'<!--\n  Generated template for the BuscaPedidoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Busca Pedido</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label>Cliente</ion-label>\n  <ion-searchbar (ionInput)="pedidoChange($event)" [ngModel]="searchQuery" placeholder="Pesquise por Cliente...">\n\n  </ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let pd of pedidosParoquia$" (click)="selecionaCliente(pd)">\n      {{pd.cliente}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/wellyngton/PhpstormProjects/pizzaria/src/pages/busca-pedido/busca-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_pedidos_pedidos_service__["a" /* PedidosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_pedidos_pedidos_service__["a" /* PedidosService */]) === "function" && _d || Object])
    ], BuscaPedidoPage);
    return BuscaPedidoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=busca-pedido.js.map

/***/ })

});
//# sourceMappingURL=1.js.map