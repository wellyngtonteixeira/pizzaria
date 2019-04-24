webpackJsonp([0],{

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPizzaPageModule", function() { return AddPizzaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_pizza__ = __webpack_require__(609);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPizzaPageModule = /** @class */ (function () {
    function AddPizzaPageModule() {
    }
    AddPizzaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_pizza__["a" /* AddPizzaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_pizza__["a" /* AddPizzaPage */]),
            ]
        })
    ], AddPizzaPageModule);
    return AddPizzaPageModule;
}());

//# sourceMappingURL=add-pizza.module.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPizzaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_pizza_model__ = __webpack_require__(610);
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
 * Generated class for the AddPizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPizzaPage = /** @class */ (function () {
    function AddPizzaPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.pizza = new __WEBPACK_IMPORTED_MODULE_2__models_pizza_model__["a" /* Pizza */](this.navParams.get('idPizza'));
    }
    AddPizzaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPizzaPage');
    };
    AddPizzaPage.prototype.fecharModal = function () {
        this.viewCtrl.dismiss();
    };
    AddPizzaPage.prototype.addPizza = function (pizza) {
        this.viewCtrl.dismiss(pizza);
    };
    AddPizzaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-pizza',template:/*ion-inline-start:"/home/wellyngton/PhpstormProjects/pizzaria/src/pages/add-pizza/add-pizza.html"*/'<!--\n  Generated template for the AddPizzaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Adicionar Pizza</ion-title>\n    <ion-buttons end>\n      <button (click)="fecharModal()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Assada</ion-label>\n    <ion-toggle [(ngModel)]="pizza.assada" ></ion-toggle>\n  </ion-item>\n  <ion-list radio-group [(ngModel)]="pizza.sabor">\n    <ion-list-header>\n      <ion-label>Sabor</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>Mista</ion-label>\n      <ion-radio value="Mista"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Calabresa</ion-label>\n      <ion-radio value="Calabresa"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Frango</ion-label>\n      <ion-radio value="Frango"></ion-radio>\n    </ion-item>\n  </ion-list>\n  <ion-item>\n    <ion-label>Quantidade</ion-label>\n    <ion-input [(ngModel)]="pizza.quantidade" type="number"></ion-input>\n  </ion-item>\n  <button ion-button block clear (click)="addPizza(pizza)">Adicionar</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/wellyngton/PhpstormProjects/pizzaria/src/pages/add-pizza/add-pizza.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], AddPizzaPage);
    return AddPizzaPage;
}());

//# sourceMappingURL=add-pizza.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pizza; });
var Pizza = /** @class */ (function () {
    function Pizza(id) {
        this.assada = true;
        this.sabor = 'Mista';
        this.quantidade = 1;
        this.id = id;
    }
    return Pizza;
}());

//# sourceMappingURL=pizza.model.js.map

/***/ })

});
//# sourceMappingURL=0.js.map