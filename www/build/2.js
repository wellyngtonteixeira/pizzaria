webpackJsonp([2],{

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPedidoPageModule", function() { return AddPedidoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_pedido__ = __webpack_require__(608);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPedidoPageModule = /** @class */ (function () {
    function AddPedidoPageModule() {
    }
    AddPedidoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_pedido__["a" /* AddPedidoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_pedido__["a" /* AddPedidoPage */]),
            ],
        })
    ], AddPedidoPageModule);
    return AddPedidoPageModule;
}());

//# sourceMappingURL=add-pedido.module.js.map

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

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_pedido_model__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pedidos_pedidos_service__ = __webpack_require__(334);
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
 * Generated class for the AddPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPedidoPage = /** @class */ (function () {
    function AddPedidoPage(navCtrl, navParams, modalCtrl, pedidosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.pedidosService = pedidosService;
        this.idPizza = 1;
        this.pedido = new __WEBPACK_IMPORTED_MODULE_2__models_pedido_model__["a" /* Pedido */]();
    }
    AddPedidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPedidoPage');
        this.dt_pedido = this.navParams.get('dt_valida');
        this.pedido.dt = this.dt_pedido;
        this.pedido.telefone = "1111111111";
        this.pedido.horario = new Date().toLocaleTimeString();
        this.pedido.vendedor = "Caixa";
    };
    AddPedidoPage.prototype.transformeDataString = function (cp) {
        var ano = cp.substring(0, 4);
        var mes = cp.substring(5, 7);
        var dia = cp.substring(8, 10);
        var str = dia + "/" + mes + "/" + ano;
        return str;
    };
    AddPedidoPage.prototype.buscaPedidoModal = function () {
        var _this = this;
        var modal1 = this.modalCtrl.create('BuscaPedidoPage', { dt_valida_b: this.dt_pedido });
        modal1.present();
        modal1.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
                _this.pedido = data;
            }
        });
    };
    AddPedidoPage.prototype.addPizzaModal = function () {
        var _this = this;
        var idPizza = this.idPizza;
        var modal2 = this.modalCtrl.create('AddPizzaPage', { idPizza: idPizza });
        modal2.present();
        modal2.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
                _this.pedido.pizzas.push(data);
                _this.idPizza++;
            }
        });
    };
    AddPedidoPage.prototype.rmPizza = function (pizza) {
        var index = this.pedido.pizzas.indexOf(pizza);
        if (index > -1) {
            this.pedido.pizzas.splice(index, 1);
        }
    };
    AddPedidoPage.prototype.enviarPedido = function (pedido) {
        var _this = this;
        if (pedido.status === "comprado") {
            pedido.status = "fila";
            this.pedidosService.editPedido(pedido).then(function (rf) {
                _this.navCtrl.setRoot('HomePage');
            });
        }
        else {
            //pednew Date().toTimeString()
            this.pedidosService.addPedido(pedido).then(function (ref) {
                _this.navCtrl.setRoot('HomePage', { key: ref.key });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], AddPedidoPage.prototype, "value", void 0);
    AddPedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-pedido',template:/*ion-inline-start:"/home/wellyngton/PhpstormProjects/pizzaria/src/pages/add-pedido/add-pedido.html"*/'<!--\n  Generated template for the AddPedidoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Fazer pedido</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Dados Cliente</ion-card-title>\n      <ion-buttons end>\n        <button (click)="buscaPedidoModal()" >\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-card-header>\n    <ion-card-content>\n  <ion-item>\n    <ion-label>Cliente</ion-label>\n    <ion-input [(ngModel)]="pedido.cliente"></ion-input>\n  </ion-item>\n      <ion-item>\n        <ion-label>Delivery</ion-label>\n        <ion-toggle [(ngModel)]="pedido.delivery" ></ion-toggle>\n      </ion-item>\n  <ion-item *ngIf="pedido.delivery">\n    <ion-label>Endereço</ion-label>\n    <ion-input [(ngModel)]="pedido.endereco"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Telefone</ion-label>\n    <ion-input [(ngModel)]="pedido.telefone" type="tel" maxlength="9" [disabled]="true"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Data</ion-label>\n    <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="pedido.dt" min="2019-05-03" max="2019-05-04"\n    [disabled]="true"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>Horário</ion-label>\n    <ion-datetime displayFormat="HH:mm" [(ngModel)]="pedido.horario" min="19:30" max="23:00"\n                  [disabled]="true"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>Vendedor</ion-label>\n    <ion-input [(ngModel)]="pedido.vendedor" [disabled]="true"></ion-input>\n  </ion-item>\n      <ion-item>\n        <ion-label>Pagou</ion-label>\n        <ion-toggle [(ngModel)]="pedido.pago" ></ion-toggle>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <!--SUBAREA DA PIZZA-->\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Pedido</ion-card-title>\n      <ion-buttons end>\n        <button (click)="addPizzaModal()">\n          ADD\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            Quantidade\n          </ion-col>\n          <ion-col>\n            Sabor\n          </ion-col>\n          <ion-col>\n            Assada\n          </ion-col>\n          <ion-col>\n\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor="let pizza of pedido.pizzas">\n          <ion-col>\n            {{pizza.quantidade}}\n          </ion-col>\n          <ion-col>\n            {{pizza.sabor}}\n          </ion-col>\n          <ion-col>\n            <ng-template [ngIf]="pizza.assada" [ngIfElse]="pizzaCrua">\n              Sim\n            </ng-template>\n            <ng-template #pizzaCrua>\n              Não\n            </ng-template>\n          </ion-col>\n          <ion-col>\n            <button ion-button small clear (click)="rmPizza(pizza)"><ion-icon name="trash"></ion-icon></button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <button ion-button block (click)="enviarPedido(pedido)">Enviar pedido</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/wellyngton/PhpstormProjects/pizzaria/src/pages/add-pedido/add-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_pedidos_pedidos_service__["a" /* PedidosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_pedidos_pedidos_service__["a" /* PedidosService */]) === "function" && _d || Object])
    ], AddPedidoPage);
    return AddPedidoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=add-pedido.js.map

/***/ })

});
//# sourceMappingURL=2.js.map