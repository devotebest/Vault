webpackJsonp([0],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorCategory; });
/* unused harmony export handleErrorIgnore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleErrorLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ErrorHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ErrorCategory;
(function (ErrorCategory) {
    ErrorCategory["CORDOVA_PLUGIN"] = "cordova_plugin";
    ErrorCategory["IONIC_MODAL"] = "ionic_modal";
    ErrorCategory["IONIC_ALERT"] = "ionic_alert";
    ErrorCategory["IONIC_LOADER"] = "ionic_loader";
    ErrorCategory["IONIC_NAVIGATION"] = "navigation";
    ErrorCategory["WALLET_PROVIDER"] = "wallet_provider";
    ErrorCategory["SCHEME_ROUTING"] = "scheme_routing";
    ErrorCategory["SECURE_STORAGE"] = "secure_storage";
    ErrorCategory["INIT_CHECK"] = "init_check";
    ErrorCategory["ENTROPY_COLLECTION"] = "entropy_collection";
    ErrorCategory["INTERACTION_PROVIDER"] = "interaction_provider";
    ErrorCategory["DEEPLINK_PROVIDER"] = "deeplink_provider";
    ErrorCategory["OTHER"] = "other";
})(ErrorCategory || (ErrorCategory = {}));
var handleErrorLocal = function (category) {
    return function (error) {
        console.log('saving error locally, category', category);
        console.error(error.originalError || error);
    };
};
var handleErrorIgnore = function (error) {
    console.log('ignoring error');
    console.error(error.originalError || error);
};

var ErrorHandlerProvider = (function (_super) {
    __extends(ErrorHandlerProvider, _super);
    function ErrorHandlerProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorHandlerProvider.prototype.handleError = function (error) {
        _super.prototype.handleError.call(this, error);
        handleErrorLocal(error);
    };
    return ErrorHandlerProvider;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicErrorHandler */]));

//# sourceMappingURL=error-handler.js.map

/***/ }),

/***/ 1062:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1086:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionSelectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interaction_selection_settings_interaction_selection_settings__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_interaction_interaction__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var InteractionSelectionPage = (function () {
    function InteractionSelectionPage(navCtrl, navParams, secretsProvider, interactionProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.secretsProvider = secretsProvider;
        this.interactionProvider = interactionProvider;
        this.interactionOptions = this.navParams.get('interactionOptions');
    }
    InteractionSelectionPage.prototype.selectOfflineDevice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.interactionOptions.communicationType = __WEBPACK_IMPORTED_MODULE_5__providers_interaction_interaction__["a" /* InteractionCommunicationType */].QR;
                this.goToNextPage();
                return [2 /*return*/];
            });
        });
    };
    InteractionSelectionPage.prototype.selectSameDevice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.interactionOptions.communicationType = __WEBPACK_IMPORTED_MODULE_5__providers_interaction_interaction__["a" /* InteractionCommunicationType */].DEEPLINK;
                this.goToNextPage();
                return [2 /*return*/];
            });
        });
    };
    InteractionSelectionPage.prototype.goToNextPage = function () {
        var secret = this.secretsProvider.getActiveSecret();
        if (secret.interactionSetting === __WEBPACK_IMPORTED_MODULE_5__providers_interaction_interaction__["d" /* InteractionSetting */].UNDETERMINED) {
            this.goToInteractionSelectionSettingsPage(this.interactionOptions);
        }
        else {
            this.interactionProvider.startInteraction(this.navCtrl, this.interactionOptions, secret);
        }
    };
    InteractionSelectionPage.prototype.goToInteractionSelectionSettingsPage = function (interactionOptions) {
        this.navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__interaction_selection_settings_interaction_selection_settings__["a" /* InteractionSelectionSettingsPage */], {
            interactionOptions: interactionOptions
        })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    InteractionSelectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-interaction-selection',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/interaction-selection/interaction-selection.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'interaction-selection.title\' | translate }}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="colored-background">\n  <h3 padding-bottom [innerHTML]="\'interaction-selection.heading\' | translate"></h3>\n\n  <ion-row justify-content-center><img src="./assets/img/send-one-device.svg" /></ion-row>\n\n  <ion-row>\n    <button block default ion-button color="primary" (click)="selectSameDevice()" round item-right icon-left>\n      {{ \'interaction-selection.same-device_label\' | translate }}\n    </button>\n    <p>{{ \'interaction-selection.same-device_info\' | translate }}</p>\n  </ion-row>\n\n  <ion-row justify-content-center padding-top><img src="./assets/img/send-two-device.svg" /></ion-row>\n\n  <ion-row>\n    <button block default ion-button color="primary" (click)="selectOfflineDevice()" round item-right icon-left>\n      {{ \'interaction-selection.offline-device_label\' | translate }}\n    </button>\n    <p>{{ \'interaction-selection.offline-device_info\' | translate }}</p>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/interaction-selection/interaction-selection.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_secrets_secrets_provider__["a" /* SecretsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_interaction_interaction__["c" /* InteractionProvider */]])
    ], InteractionSelectionPage);
    return InteractionSelectionPage;
}());

//# sourceMappingURL=interaction-selection.js.map

/***/ }),

/***/ 1087:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ENTROPY_SIZE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHOW_SECRET_MIN_TIME_IN_SECONDS; });
var ENTROPY_SIZE = 4096;
var SHOW_SECRET_MIN_TIME_IN_SECONDS = 1;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClipboardProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_handler_error_handler__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ClipboardProvider = (function () {
    function ClipboardProvider(platform, clipboard, toastController) {
        this.platform = platform;
        this.clipboard = clipboard;
        this.toastController = toastController;
    }
    ClipboardProvider.prototype.copy = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.platform.is('cordova')) {
                    return [2 /*return*/, this.clipboard.copy(text)];
                }
                else {
                    return [2 /*return*/, navigator.clipboard.writeText(text)];
                }
                return [2 /*return*/];
            });
        });
    };
    ClipboardProvider.prototype.copyAndShowToast = function (text, toastMessage) {
        if (toastMessage === void 0) { toastMessage = 'Successfully copied to your clipboard!'; }
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.copy(text)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.showToast(toastMessage)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error('Failed to copy: ', err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ClipboardProvider.prototype.paste = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    if (this.platform.is('cordova')) {
                        return [2 /*return*/, this.clipboard.paste()];
                    }
                    else {
                        return [2 /*return*/, navigator.clipboard.readText()];
                    }
                }
                catch (err) {
                    console.error('Failed to copy: ', err);
                }
                return [2 /*return*/];
            });
        });
    };
    ClipboardProvider.prototype.showToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                toast = this.toastController.create({
                    message: message,
                    duration: 1000,
                    position: 'top',
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                });
                toast.present().catch(Object(__WEBPACK_IMPORTED_MODULE_2__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_2__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
                return [2 /*return*/];
            });
        });
    };
    ClipboardProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], ClipboardProvider);
    return ClipboardProvider;
}());

//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// self.importScripts('sha3.min.js') replaced to work in blob
var entropyCalculatorWorkerJS = "!function(){\"use strict\";function t(t,e,r){this.blocks=[],this.s=[],this.padding=e,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n)this.s[n]=0}function e(e,r,n){t.call(this,e,r,n)}var r=\"input is invalid type\",n=\"object\"==typeof window,i=n?window:{};i.JS_SHA3_NO_WINDOW&&(n=!1);var o=!n&&\"object\"==typeof self;!i.JS_SHA3_NO_NODE_JS&&\"object\"==typeof process&&process.versions&&process.versions.node?i=global:o&&(i=self);var s=!i.JS_SHA3_NO_COMMON_JS&&\"object\"==typeof module&&module.exports,a=\"function\"==typeof define&&define.amd,u=!i.JS_SHA3_NO_ARRAY_BUFFER&&\"undefined\"!=typeof ArrayBuffer,f=\"0123456789abcdef\".split(\"\"),c=[4,1024,262144,67108864],h=[0,8,16,24],p=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],d=[224,256,384,512],l=[128,256],y=[\"hex\",\"buffer\",\"arrayBuffer\",\"array\",\"digest\"],b={128:168,256:136};!i.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return\"[object Array]\"===Object.prototype.toString.call(t)}),!u||!i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return\"object\"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});for(var A=function(e,r,n){return function(i){return new t(e,r,e).update(i)[n]()}},v=function(e,r,n){return function(i,o){return new t(e,r,o).update(i)[n]()}},B=function(t,e,r){return function(e,n,i,o){return S[\"cshake\"+t].update(e,n,i,o)[r]()}},g=function(t,e,r){return function(e,n,i,o){return S[\"kmac\"+t].update(e,n,i,o)[r]()}},w=function(t,e,r,n){for(var i=0;i<y.length;++i){var o=y[i];t[o]=e(r,n,o)}return t},_=function(e,r){var n=A(e,r,\"hex\");return n.create=function(){return new t(e,r,e)},n.update=function(t){return n.create().update(t)},w(n,A,e,r)},k=[{name:\"keccak\",padding:[1,256,65536,16777216],bits:d,createMethod:_},{name:\"sha3\",padding:[6,1536,393216,100663296],bits:d,createMethod:_},{name:\"shake\",padding:[31,7936,2031616,520093696],bits:l,createMethod:function(e,r){var n=v(e,r,\"hex\");return n.create=function(n){return new t(e,r,n)},n.update=function(t,e){return n.create(e).update(t)},w(n,v,e,r)}},{name:\"cshake\",padding:c,bits:l,createMethod:function(e,r){var n=b[e],i=B(e,0,\"hex\");return i.create=function(i,o,s){return o||s?new t(e,r,i).bytepad([o,s],n):S[\"shake\"+e].create(i)},i.update=function(t,e,r,n){return i.create(e,r,n).update(t)},w(i,B,e,r)}},{name:\"kmac\",padding:c,bits:l,createMethod:function(t,r){var n=b[t],i=g(t,0,\"hex\");return i.create=function(i,o,s){return new e(t,r,o).bytepad([\"KMAC\",s],n).bytepad([i],n)},i.update=function(t,e,r,n){return i.create(t,r,n).update(e)},w(i,g,t,r)}}],S={},C=[],x=0;x<k.length;++x)for(var m=k[x],O=m.bits,z=0;z<O.length;++z){var N=m.name+\"_\"+O[z];if(C.push(N),S[N]=m.createMethod(O[z],m.padding),\"sha3\"!==m.name){var j=m.name+O[z];C.push(j),S[j]=S[N]}}t.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if(\"string\"!==n){if(\"object\"!==n)throw r;if(null===t)throw r;if(u&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||u&&ArrayBuffer.isView(t)))throw r;e=!0}for(var i,o,s=this.blocks,a=this.byteCount,f=t.length,c=this.blockCount,p=0,d=this.s;p<f;){if(this.reset)for(this.reset=!1,s[0]=this.block,i=1;i<c+1;++i)s[i]=0;if(e)for(i=this.start;p<f&&i<a;++p)s[i>>2]|=t[p]<<h[3&i++];else for(i=this.start;p<f&&i<a;++p)(o=t.charCodeAt(p))<128?s[i>>2]|=o<<h[3&i++]:o<2048?(s[i>>2]|=(192|o>>6)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):o<55296||o>=57344?(s[i>>2]|=(224|o>>12)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++p)),s[i>>2]|=(240|o>>18)<<h[3&i++],s[i>>2]|=(128|o>>12&63)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]);if(this.lastByteIndex=i,i>=a){for(this.start=i-a,this.block=s[c],i=0;i<c;++i)d[i]^=s[i];J(d),this.reset=!0}else this.start=i}return this}},t.prototype.encode=function(t,e){var r=255&t,n=1,i=[r];for(r=255&(t>>=8);r>0;)i.unshift(r),r=255&(t>>=8),++n;return e?i.push(n):i.unshift(n),this.update(i),i.length},t.prototype.encodeString=function(t){var e,n=typeof t;if(\"string\"!==n){if(\"object\"!==n)throw r;if(null===t)throw r;if(u&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||u&&ArrayBuffer.isView(t)))throw r;e=!0}var i=0,o=t.length;if(e)i=o;else for(var s=0;s<t.length;++s){var a=t.charCodeAt(s);a<128?i+=1:a<2048?i+=2:a<55296||a>=57344?i+=3:(a=65536+((1023&a)<<10|1023&t.charCodeAt(++s)),i+=4)}return i+=this.encode(8*i),this.update(t),i},t.prototype.bytepad=function(t,e){for(var r=this.encode(e),n=0;n<t.length;++n)r+=this.encodeString(t[n]);var i=e-r%e,o=[];return o.length=i,this.update(o),this},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex,r=this.blockCount,n=this.s;if(t[e>>2]|=this.padding[3&e],this.lastByteIndex===this.byteCount)for(t[0]=t[r],e=1;e<r+1;++e)t[e]=0;for(t[r-1]|=2147483648,e=0;e<r;++e)n[e]^=t[e];J(n)}},t.prototype.toString=t.prototype.hex=function(){this.finalize();for(var t,e=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a=\"\";s<n;){for(o=0;o<e&&s<n;++o,++s)t=r[o],a+=f[t>>4&15]+f[15&t]+f[t>>12&15]+f[t>>8&15]+f[t>>20&15]+f[t>>16&15]+f[t>>28&15]+f[t>>24&15];s%e==0&&(J(r),o=0)}return i&&(t=r[o],a+=f[t>>4&15]+f[15&t],i>1&&(a+=f[t>>12&15]+f[t>>8&15]),i>2&&(a+=f[t>>20&15]+f[t>>16&15])),a},t.prototype.arrayBuffer=function(){this.finalize();var t,e=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a=this.outputBits>>3;t=i?new ArrayBuffer(n+1<<2):new ArrayBuffer(a);for(var u=new Uint32Array(t);s<n;){for(o=0;o<e&&s<n;++o,++s)u[s]=r[o];s%e==0&&J(r)}return i&&(u[o]=r[o],t=t.slice(0,a)),t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.digest=t.prototype.array=function(){this.finalize();for(var t,e,r=this.blockCount,n=this.s,i=this.outputBlocks,o=this.extraBytes,s=0,a=0,u=[];a<i;){for(s=0;s<r&&a<i;++s,++a)t=a<<2,e=n[s],u[t]=255&e,u[t+1]=e>>8&255,u[t+2]=e>>16&255,u[t+3]=e>>24&255;a%r==0&&J(n)}return o&&(t=a<<2,e=n[s],u[t]=255&e,o>1&&(u[t+1]=e>>8&255),o>2&&(u[t+2]=e>>16&255)),u},(e.prototype=new t).finalize=function(){return this.encode(this.outputBits,!0),t.prototype.finalize.call(this)};var J=function(t){var e,r,n,i,o,s,a,u,f,c,h,d,l,y,b,A,v,B,g,w,_,k,S,C,x,m,O,z,N,j,J,M,H,I,R,E,U,V,F,D,W,Y,K,q,G,L,P,Q,T,X,Z,$,tt,et,rt,nt,it,ot,st,at,ut,ft,ct;for(n=0;n<48;n+=2)i=t[0]^t[10]^t[20]^t[30]^t[40],o=t[1]^t[11]^t[21]^t[31]^t[41],s=t[2]^t[12]^t[22]^t[32]^t[42],a=t[3]^t[13]^t[23]^t[33]^t[43],u=t[4]^t[14]^t[24]^t[34]^t[44],f=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],h=t[7]^t[17]^t[27]^t[37]^t[47],e=(d=t[8]^t[18]^t[28]^t[38]^t[48])^(s<<1|a>>>31),r=(l=t[9]^t[19]^t[29]^t[39]^t[49])^(a<<1|s>>>31),t[0]^=e,t[1]^=r,t[10]^=e,t[11]^=r,t[20]^=e,t[21]^=r,t[30]^=e,t[31]^=r,t[40]^=e,t[41]^=r,e=i^(u<<1|f>>>31),r=o^(f<<1|u>>>31),t[2]^=e,t[3]^=r,t[12]^=e,t[13]^=r,t[22]^=e,t[23]^=r,t[32]^=e,t[33]^=r,t[42]^=e,t[43]^=r,e=s^(c<<1|h>>>31),r=a^(h<<1|c>>>31),t[4]^=e,t[5]^=r,t[14]^=e,t[15]^=r,t[24]^=e,t[25]^=r,t[34]^=e,t[35]^=r,t[44]^=e,t[45]^=r,e=u^(d<<1|l>>>31),r=f^(l<<1|d>>>31),t[6]^=e,t[7]^=r,t[16]^=e,t[17]^=r,t[26]^=e,t[27]^=r,t[36]^=e,t[37]^=r,t[46]^=e,t[47]^=r,e=c^(i<<1|o>>>31),r=h^(o<<1|i>>>31),t[8]^=e,t[9]^=r,t[18]^=e,t[19]^=r,t[28]^=e,t[29]^=r,t[38]^=e,t[39]^=r,t[48]^=e,t[49]^=r,y=t[0],b=t[1],L=t[11]<<4|t[10]>>>28,P=t[10]<<4|t[11]>>>28,z=t[20]<<3|t[21]>>>29,N=t[21]<<3|t[20]>>>29,at=t[31]<<9|t[30]>>>23,ut=t[30]<<9|t[31]>>>23,Y=t[40]<<18|t[41]>>>14,K=t[41]<<18|t[40]>>>14,I=t[2]<<1|t[3]>>>31,R=t[3]<<1|t[2]>>>31,A=t[13]<<12|t[12]>>>20,v=t[12]<<12|t[13]>>>20,Q=t[22]<<10|t[23]>>>22,T=t[23]<<10|t[22]>>>22,j=t[33]<<13|t[32]>>>19,J=t[32]<<13|t[33]>>>19,ft=t[42]<<2|t[43]>>>30,ct=t[43]<<2|t[42]>>>30,et=t[5]<<30|t[4]>>>2,rt=t[4]<<30|t[5]>>>2,E=t[14]<<6|t[15]>>>26,U=t[15]<<6|t[14]>>>26,B=t[25]<<11|t[24]>>>21,g=t[24]<<11|t[25]>>>21,X=t[34]<<15|t[35]>>>17,Z=t[35]<<15|t[34]>>>17,M=t[45]<<29|t[44]>>>3,H=t[44]<<29|t[45]>>>3,C=t[6]<<28|t[7]>>>4,x=t[7]<<28|t[6]>>>4,nt=t[17]<<23|t[16]>>>9,it=t[16]<<23|t[17]>>>9,V=t[26]<<25|t[27]>>>7,F=t[27]<<25|t[26]>>>7,w=t[36]<<21|t[37]>>>11,_=t[37]<<21|t[36]>>>11,$=t[47]<<24|t[46]>>>8,tt=t[46]<<24|t[47]>>>8,q=t[8]<<27|t[9]>>>5,G=t[9]<<27|t[8]>>>5,m=t[18]<<20|t[19]>>>12,O=t[19]<<20|t[18]>>>12,ot=t[29]<<7|t[28]>>>25,st=t[28]<<7|t[29]>>>25,D=t[38]<<8|t[39]>>>24,W=t[39]<<8|t[38]>>>24,k=t[48]<<14|t[49]>>>18,S=t[49]<<14|t[48]>>>18,t[0]=y^~A&B,t[1]=b^~v&g,t[10]=C^~m&z,t[11]=x^~O&N,t[20]=I^~E&V,t[21]=R^~U&F,t[30]=q^~L&Q,t[31]=G^~P&T,t[40]=et^~nt&ot,t[41]=rt^~it&st,t[2]=A^~B&w,t[3]=v^~g&_,t[12]=m^~z&j,t[13]=O^~N&J,t[22]=E^~V&D,t[23]=U^~F&W,t[32]=L^~Q&X,t[33]=P^~T&Z,t[42]=nt^~ot&at,t[43]=it^~st&ut,t[4]=B^~w&k,t[5]=g^~_&S,t[14]=z^~j&M,t[15]=N^~J&H,t[24]=V^~D&Y,t[25]=F^~W&K,t[34]=Q^~X&$,t[35]=T^~Z&tt,t[44]=ot^~at&ft,t[45]=st^~ut&ct,t[6]=w^~k&y,t[7]=_^~S&b,t[16]=j^~M&C,t[17]=J^~H&x,t[26]=D^~Y&I,t[27]=W^~K&R,t[36]=X^~$&q,t[37]=Z^~tt&G,t[46]=at^~ft&et,t[47]=ut^~ct&rt,t[8]=k^~y&A,t[9]=S^~b&v,t[18]=M^~C&m,t[19]=H^~x&O,t[28]=Y^~I&E,t[29]=K^~R&U,t[38]=$^~q&L,t[39]=tt^~G&P,t[48]=ft^~et&nt,t[49]=ct^~rt&it,t[0]^=p[n],t[1]^=p[n+1]};if(s)module.exports=S;else{for(x=0;x<C.length;++x)i[C[x]]=S[C[x]];a&&define(function(){return S})}}();\n\nlet previousEntropyArray = []\n\nself.onmessage = function (event) {\n  const entropyArray = new Uint8Array(event.data.entropyBuffer)\n  self.calcEntropy(previousEntropyArray, entropyArray)\n  previousEntropyArray = entropyArray\n}\n\nself.calcEntropy = function (byteArrayA, byteArrayB) {\n  let sum = 0\n  if (byteArrayB.length >0 && byteArrayA.length > 0) {\n\n    for (let i = 0; i < Math.min(byteArrayA.length, byteArrayB.length); i++) {\n      sum += Math.abs(byteArrayA[i] - byteArrayB[i])\n    }\n\n    const entropyMeasure = sum / byteArrayA.length\n    const hash = sha3_256.create()\n    hash.update(byteArrayB)\n    self.postMessage({entropyMeasure: entropyMeasure, entropyHex: hash.hex()})\n  }\n}";
/* harmony default export */ __webpack_exports__["a"] = (entropyCalculatorWorkerJS);
//# sourceMappingURL=entropyCalculatorWorker.js.map

/***/ }),

/***/ 1350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// self.importScripts('sha3.min.js') replaced to work in blob
var hashWorkerJS = "!function(){\"use strict\";function t(t,e,r){this.blocks=[],this.s=[],this.padding=e,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n)this.s[n]=0}function e(e,r,n){t.call(this,e,r,n)}var r=\"input is invalid type\",n=\"object\"==typeof window,i=n?window:{};i.JS_SHA3_NO_WINDOW&&(n=!1);var o=!n&&\"object\"==typeof self;!i.JS_SHA3_NO_NODE_JS&&\"object\"==typeof process&&process.versions&&process.versions.node?i=global:o&&(i=self);var s=!i.JS_SHA3_NO_COMMON_JS&&\"object\"==typeof module&&module.exports,a=\"function\"==typeof define&&define.amd,u=!i.JS_SHA3_NO_ARRAY_BUFFER&&\"undefined\"!=typeof ArrayBuffer,f=\"0123456789abcdef\".split(\"\"),c=[4,1024,262144,67108864],h=[0,8,16,24],p=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],d=[224,256,384,512],l=[128,256],y=[\"hex\",\"buffer\",\"arrayBuffer\",\"array\",\"digest\"],b={128:168,256:136};!i.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return\"[object Array]\"===Object.prototype.toString.call(t)}),!u||!i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return\"object\"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});for(var A=function(e,r,n){return function(i){return new t(e,r,e).update(i)[n]()}},v=function(e,r,n){return function(i,o){return new t(e,r,o).update(i)[n]()}},B=function(t,e,r){return function(e,n,i,o){return S[\"cshake\"+t].update(e,n,i,o)[r]()}},g=function(t,e,r){return function(e,n,i,o){return S[\"kmac\"+t].update(e,n,i,o)[r]()}},w=function(t,e,r,n){for(var i=0;i<y.length;++i){var o=y[i];t[o]=e(r,n,o)}return t},_=function(e,r){var n=A(e,r,\"hex\");return n.create=function(){return new t(e,r,e)},n.update=function(t){return n.create().update(t)},w(n,A,e,r)},k=[{name:\"keccak\",padding:[1,256,65536,16777216],bits:d,createMethod:_},{name:\"sha3\",padding:[6,1536,393216,100663296],bits:d,createMethod:_},{name:\"shake\",padding:[31,7936,2031616,520093696],bits:l,createMethod:function(e,r){var n=v(e,r,\"hex\");return n.create=function(n){return new t(e,r,n)},n.update=function(t,e){return n.create(e).update(t)},w(n,v,e,r)}},{name:\"cshake\",padding:c,bits:l,createMethod:function(e,r){var n=b[e],i=B(e,0,\"hex\");return i.create=function(i,o,s){return o||s?new t(e,r,i).bytepad([o,s],n):S[\"shake\"+e].create(i)},i.update=function(t,e,r,n){return i.create(e,r,n).update(t)},w(i,B,e,r)}},{name:\"kmac\",padding:c,bits:l,createMethod:function(t,r){var n=b[t],i=g(t,0,\"hex\");return i.create=function(i,o,s){return new e(t,r,o).bytepad([\"KMAC\",s],n).bytepad([i],n)},i.update=function(t,e,r,n){return i.create(t,r,n).update(e)},w(i,g,t,r)}}],S={},C=[],x=0;x<k.length;++x)for(var m=k[x],O=m.bits,z=0;z<O.length;++z){var N=m.name+\"_\"+O[z];if(C.push(N),S[N]=m.createMethod(O[z],m.padding),\"sha3\"!==m.name){var j=m.name+O[z];C.push(j),S[j]=S[N]}}t.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if(\"string\"!==n){if(\"object\"!==n)throw r;if(null===t)throw r;if(u&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||u&&ArrayBuffer.isView(t)))throw r;e=!0}for(var i,o,s=this.blocks,a=this.byteCount,f=t.length,c=this.blockCount,p=0,d=this.s;p<f;){if(this.reset)for(this.reset=!1,s[0]=this.block,i=1;i<c+1;++i)s[i]=0;if(e)for(i=this.start;p<f&&i<a;++p)s[i>>2]|=t[p]<<h[3&i++];else for(i=this.start;p<f&&i<a;++p)(o=t.charCodeAt(p))<128?s[i>>2]|=o<<h[3&i++]:o<2048?(s[i>>2]|=(192|o>>6)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):o<55296||o>=57344?(s[i>>2]|=(224|o>>12)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++p)),s[i>>2]|=(240|o>>18)<<h[3&i++],s[i>>2]|=(128|o>>12&63)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]);if(this.lastByteIndex=i,i>=a){for(this.start=i-a,this.block=s[c],i=0;i<c;++i)d[i]^=s[i];J(d),this.reset=!0}else this.start=i}return this}},t.prototype.encode=function(t,e){var r=255&t,n=1,i=[r];for(r=255&(t>>=8);r>0;)i.unshift(r),r=255&(t>>=8),++n;return e?i.push(n):i.unshift(n),this.update(i),i.length},t.prototype.encodeString=function(t){var e,n=typeof t;if(\"string\"!==n){if(\"object\"!==n)throw r;if(null===t)throw r;if(u&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||u&&ArrayBuffer.isView(t)))throw r;e=!0}var i=0,o=t.length;if(e)i=o;else for(var s=0;s<t.length;++s){var a=t.charCodeAt(s);a<128?i+=1:a<2048?i+=2:a<55296||a>=57344?i+=3:(a=65536+((1023&a)<<10|1023&t.charCodeAt(++s)),i+=4)}return i+=this.encode(8*i),this.update(t),i},t.prototype.bytepad=function(t,e){for(var r=this.encode(e),n=0;n<t.length;++n)r+=this.encodeString(t[n]);var i=e-r%e,o=[];return o.length=i,this.update(o),this},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex,r=this.blockCount,n=this.s;if(t[e>>2]|=this.padding[3&e],this.lastByteIndex===this.byteCount)for(t[0]=t[r],e=1;e<r+1;++e)t[e]=0;for(t[r-1]|=2147483648,e=0;e<r;++e)n[e]^=t[e];J(n)}},t.prototype.toString=t.prototype.hex=function(){this.finalize();for(var t,e=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a=\"\";s<n;){for(o=0;o<e&&s<n;++o,++s)t=r[o],a+=f[t>>4&15]+f[15&t]+f[t>>12&15]+f[t>>8&15]+f[t>>20&15]+f[t>>16&15]+f[t>>28&15]+f[t>>24&15];s%e==0&&(J(r),o=0)}return i&&(t=r[o],a+=f[t>>4&15]+f[15&t],i>1&&(a+=f[t>>12&15]+f[t>>8&15]),i>2&&(a+=f[t>>20&15]+f[t>>16&15])),a},t.prototype.arrayBuffer=function(){this.finalize();var t,e=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a=this.outputBits>>3;t=i?new ArrayBuffer(n+1<<2):new ArrayBuffer(a);for(var u=new Uint32Array(t);s<n;){for(o=0;o<e&&s<n;++o,++s)u[s]=r[o];s%e==0&&J(r)}return i&&(u[o]=r[o],t=t.slice(0,a)),t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.digest=t.prototype.array=function(){this.finalize();for(var t,e,r=this.blockCount,n=this.s,i=this.outputBlocks,o=this.extraBytes,s=0,a=0,u=[];a<i;){for(s=0;s<r&&a<i;++s,++a)t=a<<2,e=n[s],u[t]=255&e,u[t+1]=e>>8&255,u[t+2]=e>>16&255,u[t+3]=e>>24&255;a%r==0&&J(n)}return o&&(t=a<<2,e=n[s],u[t]=255&e,o>1&&(u[t+1]=e>>8&255),o>2&&(u[t+2]=e>>16&255)),u},(e.prototype=new t).finalize=function(){return this.encode(this.outputBits,!0),t.prototype.finalize.call(this)};var J=function(t){var e,r,n,i,o,s,a,u,f,c,h,d,l,y,b,A,v,B,g,w,_,k,S,C,x,m,O,z,N,j,J,M,H,I,R,E,U,V,F,D,W,Y,K,q,G,L,P,Q,T,X,Z,$,tt,et,rt,nt,it,ot,st,at,ut,ft,ct;for(n=0;n<48;n+=2)i=t[0]^t[10]^t[20]^t[30]^t[40],o=t[1]^t[11]^t[21]^t[31]^t[41],s=t[2]^t[12]^t[22]^t[32]^t[42],a=t[3]^t[13]^t[23]^t[33]^t[43],u=t[4]^t[14]^t[24]^t[34]^t[44],f=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],h=t[7]^t[17]^t[27]^t[37]^t[47],e=(d=t[8]^t[18]^t[28]^t[38]^t[48])^(s<<1|a>>>31),r=(l=t[9]^t[19]^t[29]^t[39]^t[49])^(a<<1|s>>>31),t[0]^=e,t[1]^=r,t[10]^=e,t[11]^=r,t[20]^=e,t[21]^=r,t[30]^=e,t[31]^=r,t[40]^=e,t[41]^=r,e=i^(u<<1|f>>>31),r=o^(f<<1|u>>>31),t[2]^=e,t[3]^=r,t[12]^=e,t[13]^=r,t[22]^=e,t[23]^=r,t[32]^=e,t[33]^=r,t[42]^=e,t[43]^=r,e=s^(c<<1|h>>>31),r=a^(h<<1|c>>>31),t[4]^=e,t[5]^=r,t[14]^=e,t[15]^=r,t[24]^=e,t[25]^=r,t[34]^=e,t[35]^=r,t[44]^=e,t[45]^=r,e=u^(d<<1|l>>>31),r=f^(l<<1|d>>>31),t[6]^=e,t[7]^=r,t[16]^=e,t[17]^=r,t[26]^=e,t[27]^=r,t[36]^=e,t[37]^=r,t[46]^=e,t[47]^=r,e=c^(i<<1|o>>>31),r=h^(o<<1|i>>>31),t[8]^=e,t[9]^=r,t[18]^=e,t[19]^=r,t[28]^=e,t[29]^=r,t[38]^=e,t[39]^=r,t[48]^=e,t[49]^=r,y=t[0],b=t[1],L=t[11]<<4|t[10]>>>28,P=t[10]<<4|t[11]>>>28,z=t[20]<<3|t[21]>>>29,N=t[21]<<3|t[20]>>>29,at=t[31]<<9|t[30]>>>23,ut=t[30]<<9|t[31]>>>23,Y=t[40]<<18|t[41]>>>14,K=t[41]<<18|t[40]>>>14,I=t[2]<<1|t[3]>>>31,R=t[3]<<1|t[2]>>>31,A=t[13]<<12|t[12]>>>20,v=t[12]<<12|t[13]>>>20,Q=t[22]<<10|t[23]>>>22,T=t[23]<<10|t[22]>>>22,j=t[33]<<13|t[32]>>>19,J=t[32]<<13|t[33]>>>19,ft=t[42]<<2|t[43]>>>30,ct=t[43]<<2|t[42]>>>30,et=t[5]<<30|t[4]>>>2,rt=t[4]<<30|t[5]>>>2,E=t[14]<<6|t[15]>>>26,U=t[15]<<6|t[14]>>>26,B=t[25]<<11|t[24]>>>21,g=t[24]<<11|t[25]>>>21,X=t[34]<<15|t[35]>>>17,Z=t[35]<<15|t[34]>>>17,M=t[45]<<29|t[44]>>>3,H=t[44]<<29|t[45]>>>3,C=t[6]<<28|t[7]>>>4,x=t[7]<<28|t[6]>>>4,nt=t[17]<<23|t[16]>>>9,it=t[16]<<23|t[17]>>>9,V=t[26]<<25|t[27]>>>7,F=t[27]<<25|t[26]>>>7,w=t[36]<<21|t[37]>>>11,_=t[37]<<21|t[36]>>>11,$=t[47]<<24|t[46]>>>8,tt=t[46]<<24|t[47]>>>8,q=t[8]<<27|t[9]>>>5,G=t[9]<<27|t[8]>>>5,m=t[18]<<20|t[19]>>>12,O=t[19]<<20|t[18]>>>12,ot=t[29]<<7|t[28]>>>25,st=t[28]<<7|t[29]>>>25,D=t[38]<<8|t[39]>>>24,W=t[39]<<8|t[38]>>>24,k=t[48]<<14|t[49]>>>18,S=t[49]<<14|t[48]>>>18,t[0]=y^~A&B,t[1]=b^~v&g,t[10]=C^~m&z,t[11]=x^~O&N,t[20]=I^~E&V,t[21]=R^~U&F,t[30]=q^~L&Q,t[31]=G^~P&T,t[40]=et^~nt&ot,t[41]=rt^~it&st,t[2]=A^~B&w,t[3]=v^~g&_,t[12]=m^~z&j,t[13]=O^~N&J,t[22]=E^~V&D,t[23]=U^~F&W,t[32]=L^~Q&X,t[33]=P^~T&Z,t[42]=nt^~ot&at,t[43]=it^~st&ut,t[4]=B^~w&k,t[5]=g^~_&S,t[14]=z^~j&M,t[15]=N^~J&H,t[24]=V^~D&Y,t[25]=F^~W&K,t[34]=Q^~X&$,t[35]=T^~Z&tt,t[44]=ot^~at&ft,t[45]=st^~ut&ct,t[6]=w^~k&y,t[7]=_^~S&b,t[16]=j^~M&C,t[17]=J^~H&x,t[26]=D^~Y&I,t[27]=W^~K&R,t[36]=X^~$&q,t[37]=Z^~tt&G,t[46]=at^~ft&et,t[47]=ut^~ct&rt,t[8]=k^~y&A,t[9]=S^~b&v,t[18]=M^~C&m,t[19]=H^~x&O,t[28]=Y^~I&E,t[29]=K^~R&U,t[38]=$^~q&L,t[39]=tt^~G&P,t[48]=ft^~et&nt,t[49]=ct^~rt&it,t[0]^=p[n],t[1]^=p[n+1]};if(s)module.exports=S;else{for(x=0;x<C.length;++x)i[C[x]]=S[C[x]];a&&define(function(){return S})}}();\nlet hashHex = ''\n\nself.onmessage = function (event) {\n  let hash = sha3_256.create()\n  hash.update(hashHex)\n\n  if (event.data.call === 'init') {\n    console.log('init hash...', event.data.secureRandom.length)\n    hash.update(event.data.secureRandom)\n  }\n\n  if (event.data.call === 'update') {\n    hash.update(event.data.entropyHex)\n  }\n\n  if (event.data.call === 'digest') {\n    console.log('digesting hash...')\n    self.postMessage({hash: hash.hex()})\n  }\n\n  hashHex = hash.hex()\n}\n";
/* harmony default export */ __webpack_exports__["a"] = (hashWorkerJS);
//# sourceMappingURL=hashWorker.js.map

/***/ }),

/***/ 1352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AboutPopoverComponent = (function () {
    function AboutPopoverComponent(appVersion) {
        this.appVersion = appVersion;
    }
    AboutPopoverComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.appVersion.getVersionNumber()];
                    case 1:
                        _a.versionNumber = _d.sent();
                        _b = this;
                        _c = "";
                        return [4 /*yield*/, this.appVersion.getVersionCode()];
                    case 2:
                        _b.versionCode = _c + (_d.sent());
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list no-lines no-detail>\n      <ion-list-header>{{ 'about-popover.label' | translate }}</ion-list-header>\n      <ion-item>{{ 'about-popover.version' | translate }} {{ versionNumber }}</ion-item>\n      <ion-item>{{ 'about-popover.code' | translate }} {{ versionCode }}</ion-item>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__["a" /* AppVersion */]])
    ], AboutPopoverComponent);
    return AboutPopoverComponent;
}());

//# sourceMappingURL=about-popover.component.js.map

/***/ }),

/***/ 1353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntropyProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EntropyProgressComponent = (function () {
    function EntropyProgressComponent() {
        this.maxValue = 1;
        this.value = 0;
        this.progressInPercent = 0;
    }
    EntropyProgressComponent.prototype.ngOnChanges = function () {
        if (this.value > this.maxValue) {
            this.progressInPercent = 100;
        }
        else {
            this.progressInPercent = Math.floor((this.value / this.maxValue) * 100);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], EntropyProgressComponent.prototype, "maxValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], EntropyProgressComponent.prototype, "value", void 0);
    EntropyProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'entropy-progress',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/entropy-progress/entropy-progress.html"*/'<div>{{ progressInPercent }}%</div>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/entropy-progress/entropy-progress.html"*/
        })
    ], EntropyProgressComponent);
    return EntropyProgressComponent;
}());

//# sourceMappingURL=entropy-progress.js.map

/***/ }),

/***/ 1354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HexagonIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HexagonIconComponent = (function () {
    function HexagonIconComponent() {
        this.textColor = 'white';
        this.icon = 'add';
        this.opacity = 1;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HexagonIconComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HexagonIconComponent.prototype, "textColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HexagonIconComponent.prototype, "letter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HexagonIconComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HexagonIconComponent.prototype, "opacity", void 0);
    HexagonIconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'hexagon-icon',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/hexagon-icon/hexagon-icon.html"*/'<div class="hexagon--background" [style.background-color]="backgroundColor" [style.opacity]="opacity">\n  <ion-icon *ngIf="!letter && icon" [color]="textColor" md-name [md-name]="icon"></ion-icon>\n  <h3 *ngIf="letter" [style.color]="textColor" ion-text no-margin>{{letter?.substr(0, 1).toUpperCase()}}</h3>\n</div>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/hexagon-icon/hexagon-icon.html"*/
        })
    ], HexagonIconComponent);
    return HexagonIconComponent;
}());

//# sourceMappingURL=hexagon-icon.js.map

/***/ }),

/***/ 1355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdenticonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_myetherwallet_blockies__ = __webpack_require__(1356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_myetherwallet_blockies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_myetherwallet_blockies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__download_blockies__ = __webpack_require__(1357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bignumber_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bignumber_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IdenticonComponent = (function () {
    function IdenticonComponent() {
    }
    Object.defineProperty(IdenticonComponent.prototype, "address", {
        set: function (value) {
            if (!value) {
                return;
            }
            if (value.startsWith('ak_')) {
                this.identicon = Object(__WEBPACK_IMPORTED_MODULE_2__download_blockies__["a" /* createIcon */])({ seed: value }).toDataURL();
            }
            else if (value.startsWith('tz') || value.startsWith('kt')) {
                this.identicon = Object(__WEBPACK_IMPORTED_MODULE_2__download_blockies__["a" /* createIcon */])({ seed: "0" + this.b582int(value), spotcolor: '#000' }).toDataURL();
            }
            else {
                this.identicon = Object(__WEBPACK_IMPORTED_MODULE_1_myetherwallet_blockies__["toDataUrl"])(value.toLowerCase());
            }
        },
        enumerable: true,
        configurable: true
    });
    IdenticonComponent.prototype.b582int = function (v) {
        var rv = new __WEBPACK_IMPORTED_MODULE_3_bignumber_js__["BigNumber"](0);
        var alpha = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
        for (var i = 0; i < v.length; i++) {
            rv = rv.plus(new __WEBPACK_IMPORTED_MODULE_3_bignumber_js__["BigNumber"](alpha.indexOf(v[v.length - 1 - i])).multipliedBy(new __WEBPACK_IMPORTED_MODULE_3_bignumber_js__["BigNumber"](alpha.length).exponentiatedBy(i)));
        }
        return rv.toString(16);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], IdenticonComponent.prototype, "address", null);
    IdenticonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'identicon',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/identicon/identicon.html"*/'<img [src]="identicon" />\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/identicon/identicon.html"*/
        })
    ], IdenticonComponent);
    return IdenticonComponent;
}());

//# sourceMappingURL=identicon.js.map

/***/ }),

/***/ 1358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressRowComponent = (function () {
    function AddressRowComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AddressRowComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AddressRowComponent.prototype, "address", void 0);
    AddressRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'address-row',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/address-row/address-row.html"*/'<ion-row no-lines no-padding align-items-center>\n  <ion-col col-3>\n    <ion-row justify-content-center>\n      <ion-avatar><identicon [address]="address"></identicon></ion-avatar>\n    </ion-row>\n  </ion-col>\n  <ion-col col-9>\n    <ion-label stacked *ngIf="label">{{label}}</ion-label>\n    <div item-content class="typography--mono">{{address}}</div>\n  </ion-col>\n</ion-row>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/address-row/address-row.html"*/
        })
    ], AddressRowComponent);
    return AddressRowComponent;
}());

//# sourceMappingURL=address-row.js.map

/***/ }),

/***/ 1359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromToComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_transaction_model__ = __webpack_require__(1360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FromToComponent = (function () {
    function FromToComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_transaction_model__["a" /* Transaction */])
    ], FromToComponent.prototype, "transaction", void 0);
    FromToComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'from-to',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/from-to/from-to.html"*/'<ng-container *ngIf="transaction">\n  <address-row *ngFor="let address of transaction.from" [address]="address" label="{{ \'from-to.from_label\' | translate }}"></address-row>\n\n  <ion-row align-items-center>\n    <ion-col col-3 no-padding>\n      <ion-row justify-content-center><div class="line"></div></ion-row>\n    </ion-col>\n    <ion-col col-9 padding-bottom>\n      <ion-label stacked class="typography--uppercase">{{ \'from-to.amount_label\' | translate }}</ion-label>\n      <div class="typography--mono" item-content>\n        <span class="typography--mono">\n          {{ transaction.amount | amountConverter: { protocolIdentifier: transaction.protocolIdentifier } }}\n        </span>\n      </div>\n\n      <ng-container *ngIf="transaction.fee">\n        <ion-label stacked class="typography--uppercase">{{ \'from-to.fee_label\' | translate }}</ion-label>\n        <div class="typography--mono" item-content>\n          <span class="typography--mono">{{ transaction.fee | feeConverter: { protocolIdentifier: transaction.protocolIdentifier } }}</span>\n        </div>\n      </ng-container>\n    </ion-col>\n  </ion-row>\n\n  <address-row *ngFor="let address of transaction.to" [address]="address" label="{{ \'from-to.to_label\' | translate }}"></address-row>\n</ng-container>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/from-to/from-to.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FromToComponent);
    return FromToComponent;
}());

//# sourceMappingURL=from-to.js.map

/***/ }),

/***/ 1360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transaction; });
var Transaction = (function () {
    function Transaction() {
        this.information = [];
    }
    return Transaction;
}());

//# sourceMappingURL=transaction.model.js.map

/***/ }),

/***/ 1361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentSecretComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_secret__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrentSecretComponent = (function () {
    function CurrentSecretComponent(secretsProvider) {
        this.secretsProvider = secretsProvider;
        this.secrets = [];
        this.currentSecret = 0;
        this.secretChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.secrets = this.secretsProvider.currentSecretsList.getValue();
        this.currentSecret = this.secrets.indexOf(this.secretsProvider.getActiveSecret());
    }
    Object.defineProperty(CurrentSecretComponent.prototype, "chosenSecret", {
        set: function (secret) {
            this.currentSecret = this.secrets.indexOf(secret);
        },
        enumerable: true,
        configurable: true
    });
    CurrentSecretComponent.prototype.onChange = function (newSecret) {
        this.secretsProvider.setActiveSecret(this.secrets[newSecret]);
        this.secretChanged.emit(this.secrets[newSecret]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])('secretChanged'),
        __metadata("design:type", Object)
    ], CurrentSecretComponent.prototype, "secretChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_secret__["a" /* Secret */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__models_secret__["a" /* Secret */]])
    ], CurrentSecretComponent.prototype, "chosenSecret", null);
    CurrentSecretComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'current-secret',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/current-secret/current-secret.html"*/'<ion-row>\n  <ion-label>{{ \'current-secret.label\' | translate }}</ion-label>\n  <ion-select [ngModel]="currentSecret" (ngModelChange)="onChange($event)" class="text-white" interface="popover">\n    <ion-option *ngFor="let secret of secrets; let i = index" [value]="i">{{ secret.label }}</ion-option>\n  </ion-select>\n</ion-row>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/current-secret/current-secret.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_secrets_secrets_provider__["a" /* SecretsProvider */]])
    ], CurrentSecretComponent);
    return CurrentSecretComponent;
}());

//# sourceMappingURL=current-secret.js.map

/***/ }),

/***/ 1362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonTextAvatar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IonTextAvatar = (function (_super) {
    __extends(IonTextAvatar, _super);
    function IonTextAvatar(config, elementRef, renderer) {
        return _super.call(this, config, elementRef, renderer, 'ion-text-avatar') || this;
    }
    IonTextAvatar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'ion-text-avatar'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], IonTextAvatar);
    return IonTextAvatar;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Ion */]));

//# sourceMappingURL=ion-text-avatar.js.map

/***/ }),

/***/ 1363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TraceInputDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TraceInputDirective = (function () {
    function TraceInputDirective(elementRef, ngZone, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.mousePos = { x: 0, y: 0 };
        this.lastPos = this.mousePos;
        this.canvas = elementRef.nativeElement;
        this.context = this.canvas.getContext('2d');
    }
    TraceInputDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.listen(this.canvas, 'mousedown', function (e) {
            _this.lastPos = _this.getMousePosition(_this.canvas, e);
            _this.isDrawing = true;
            _this.startDrawing();
        });
        this.renderer.listen(this.canvas, 'touchstart', function (e) {
            _this.lastPos = _this.getTouchPosition(_this.canvas, e);
            _this.isDrawing = true;
            _this.startDrawing();
        });
        this.renderer.listen(this.canvas, 'mouseup', function (e) {
            _this.lastPos = _this.getMousePosition(_this.canvas, e);
            _this.isDrawing = false;
        });
        this.renderer.listen(this.canvas, 'touchend', function (e) {
            _this.lastPos = _this.getTouchPosition(_this.canvas, e);
            _this.isDrawing = false;
        });
        this.renderer.listen(this.canvas, 'mousemove', function (e) {
            _this.mousePos = _this.getMousePosition(_this.canvas, e);
        });
        this.renderer.listen(this.canvas, 'touchmove', function (e) {
            _this.mousePos = _this.getTouchPosition(_this.canvas, e);
        });
    };
    TraceInputDirective.prototype.startDrawing = function () {
        var _this = this;
        if (!this.isDrawing) {
            return;
        }
        this.ngZone.runOutsideAngular(function () {
            requestAnimationFrame(function () {
                _this.renderEntropyDrawing();
            });
        });
    };
    TraceInputDirective.prototype.getMousePosition = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };
    TraceInputDirective.prototype.getTouchPosition = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        if (!evt.touches[0]) {
            return this.lastPos;
        }
        return {
            x: evt.touches[0].clientX - rect.left,
            y: evt.touches[0].clientY - rect.top
        };
    };
    TraceInputDirective.prototype.renderEntropyDrawing = function () {
        this.context.strokeStyle = 'rgb(255, 255, 255)';
        this.context.moveTo(this.lastPos.x, this.lastPos.y);
        this.context.lineTo(this.mousePos.x, this.mousePos.y);
        this.context.stroke();
        this.lastPos = this.mousePos;
        this.startDrawing();
    };
    TraceInputDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[trace-input]',
            inputs: ['running: traceEnabled']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], TraceInputDirective);
    return TraceInputDirective;
}());

//# sourceMappingURL=trace-input.directive.js.map

/***/ }),

/***/ 1364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgressFooterComponent = (function () {
    function ProgressFooterComponent(navController) {
        var _this = this;
        this.navController = navController;
        this.progress = 0;
        this.maxProgress = 1;
        this.rightEnabled = true;
        this.rightLabel = 'Next';
        // make sure to bind the context / method.bind(this)
        this.leftAction = function () {
            _this.navController.pop().catch(Object(__WEBPACK_IMPORTED_MODULE_2__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_2__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
        };
        this.leftEnabled = true;
        this.leftLabel = 'Back';
        this.progressArray = [];
    }
    ProgressFooterComponent.prototype.ngOnInit = function () {
        this.progressArray = new Array(this.maxProgress).fill(0).map(function (_x, i) { return i; });
        if (!this.rightAction) {
            throw new Error('ProgressFooterComponent: No "rightAction" method passed');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgressFooterComponent.prototype, "progress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgressFooterComponent.prototype, "maxProgress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], ProgressFooterComponent.prototype, "rightAction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgressFooterComponent.prototype, "rightEnabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgressFooterComponent.prototype, "rightLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgressFooterComponent.prototype, "leftAction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgressFooterComponent.prototype, "leftEnabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgressFooterComponent.prototype, "leftLabel", void 0);
    ProgressFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-footer',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/progress-footer/progress-footer.html"*/'<ion-toolbar color="primary" no-padding>\n  <ion-row>\n    <ion-col col-3 no-padding>\n      <button [disabled]="!leftEnabled" ion-button icon-left clear color="white" (click)="leftAction()">\n        <ion-icon md-name="chevron_left"></ion-icon>\n        {{ leftLabel }}\n      </button>\n    </ion-col>\n    <ion-col col-6 no-padding>\n      <ion-row justify-content-center align-items-center class="full--height">\n        <ion-icon\n          *ngFor="let n of progressArray"\n          md-name="fiber_manual_record"\n          [color]="progress === n ? \'secondary-light\' : \'white\'"\n        ></ion-icon>\n      </ion-row>\n    </ion-col>\n    <ion-col col-3 no-padding>\n      <button [disabled]="!rightEnabled" ion-button icon-right clear color="white" (click)="rightAction()">\n        {{ rightLabel }}\n        <ion-icon md-name="chevron_right"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-toolbar>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/progress-footer/progress-footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ProgressFooterComponent);
    return ProgressFooterComponent;
}());

//# sourceMappingURL=progress-footer.js.map

/***/ }),

/***/ 1365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalletItemComponent = (function () {
    function WalletItemComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__["AirGapWallet"])
    ], WalletItemComponent.prototype, "wallet", void 0);
    WalletItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'wallet-item',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/wallet-item/wallet-item.html"*/'<ion-item no-lines detail-push no-padding>\n  <ion-avatar item-start>\n    <identicon [address]="wallet.receivingPublicAddress"></identicon>\n    <currency-symbol class="symbol--icon" [symbol]="wallet.coinProtocol.symbol"></currency-symbol>\n  </ion-avatar>\n  <ion-label>\n    <h2>{{ wallet.coinProtocol.name }} {{ wallet.coinProtocol.symbol }}</h2>\n    <p class="typography--mono">{{ wallet.receivingPublicAddress }}</p>\n  </ion-label>\n</ion-item>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/wallet-item/wallet-item.html"*/
        })
    ], WalletItemComponent);
    return WalletItemComponent;
}());

//# sourceMappingURL=wallet-item.js.map

/***/ }),

/***/ 1366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeeConverterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeeConverterPipe = (function () {
    function FeeConverterPipe() {
    }
    FeeConverterPipe.prototype.transform = function (value, args) {
        if (!args.protocolIdentifier || (!value && value !== 0) || isNaN(Number(value))) {
            // console.warn(`FeeConverterPipe: necessary properties missing!\n` + `Protocol: ${args.protocolIdentifier}\n` + `Value: ${value}`)
            return '';
        }
        var protocol;
        try {
            protocol = Object(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["getProtocolByIdentifier"])(args.protocolIdentifier);
        }
        catch (e) {
            return '';
        }
        var amount = new __WEBPACK_IMPORTED_MODULE_1_bignumber_js__["BigNumber"](value);
        var fee = amount.shiftedBy(-1 * protocol.feeDecimals);
        return fee.toFixed() + ' ' + protocol.feeSymbol.toUpperCase();
    };
    FeeConverterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'feeConverter'
        })
    ], FeeConverterPipe);
    return FeeConverterPipe;
}());

//# sourceMappingURL=fee-converter.pipe.js.map

/***/ }),

/***/ 1367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmountConverterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AmountConverterPipe = (function () {
    function AmountConverterPipe() {
    }
    AmountConverterPipe.prototype.transform = function (value, args) {
        if (!args.protocolIdentifier || (!value && value !== 0) || isNaN(Number(value)) || (args.maxDigits && isNaN(Number(args.maxDigits)))) {
            /* console.warn(
              `AmountConverterPipe: necessary properties missing!\n` +
                `Protocol: ${args.protocolIdentifier}\n` +
                `Value: ${value}\n` +
                `maxDigits: ${args.maxDigits}`
            ) */
            return '';
        }
        var protocol;
        try {
            protocol = Object(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["getProtocolByIdentifier"])(args.protocolIdentifier);
        }
        catch (e) {
            return '';
        }
        var BN = __WEBPACK_IMPORTED_MODULE_1_bignumber_js__["BigNumber"].clone({
            FORMAT: {
                decimalSeparator: ".",
                groupSeparator: "'",
                groupSize: 3
            }
        });
        var amount = new BN(value).shiftedBy(-1 * protocol.decimals);
        return this.formatBigNumber(amount, args.maxDigits) + " " + protocol.symbol.toUpperCase();
    };
    AmountConverterPipe.prototype.formatBigNumber = function (value, maxDigits) {
        if (!maxDigits) {
            return value.toFormat();
        }
        if (value.toFixed().length <= maxDigits) {
            return value.toFormat();
        }
        var integerValueLength = value.integerValue().toString().length;
        if (integerValueLength >= maxDigits) {
            // We can omit floating point
            return this.makeFullNumberSmaller(value, maxDigits);
        }
        // Need regex to remove all unneccesary trailing zeros
        return value.toFormat(maxDigits - integerValueLength).replace(/\.?0+$/, '');
    };
    AmountConverterPipe.prototype.makeFullNumberSmaller = function (value, maxDigits) {
        if (value.toFixed().length <= maxDigits) {
            return value.toFormat();
        }
        var result = value.integerValue();
        if (result.toString().length <= maxDigits) {
            return result.toFormat();
        }
        if (result.toString().length <= 3) {
            return result.toFormat();
        }
        // number is too long, take 3 digits away and try again
        result = result.dividedToIntegerBy(1000);
        if (result.toFixed().length <= maxDigits) {
            return result.toFormat() + 'K';
        }
        if (result.toFixed().length <= 3) {
            return result.toFormat() + 'K';
        }
        // number is too long, take 3 digits away and try again
        result = result.dividedToIntegerBy(1000);
        return result.toFormat() + 'M';
    };
    AmountConverterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'amountConverter'
        })
    ], AmountConverterPipe);
    return AmountConverterPipe;
}());

//# sourceMappingURL=amount-converter.pipe.js.map

/***/ }),

/***/ 1368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_secret__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_interaction_interaction__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SecretItemComponent = (function () {
    function SecretItemComponent() {
        this.interactionSetting = __WEBPACK_IMPORTED_MODULE_2__providers_interaction_interaction__["d" /* InteractionSetting */];
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_secret__["a" /* Secret */])
    ], SecretItemComponent.prototype, "secret", void 0);
    SecretItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'secret-item',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/secret-item/secret-item.html"*/'<ion-item no-lines detail-push no-padding>\n  <div detail-push no-padding>\n    <div no-padding>\n      <h2 ion-text class="secret--label" color="black" no-margin>{{ secret.label }}</h2>\n    </div>\n\n    <ion-row>\n      <ion-row>\n        <button\n          [color]="secret.isParanoia ? \'primary\' : \'secondary-light\'"\n          class="button--rounded"\n          ion-button\n          icon-only\n          round\n          color="primary"\n        >\n          <ion-icon md-name="fiber_pin"></ion-icon>\n        </button>\n\n        <button\n          [color]="secret.interactionSetting !== interactionSetting.UNDETERMINED ? \'primary\' : \'secondary-light\'"\n          class="button--rounded"\n          ion-button\n          icon-only\n          round\n          color="primary"\n          margin-horizontal\n        >\n          <ion-icon name="swap"></ion-icon>\n        </button>\n\n        <button\n          [color]="secret.hasSocialRecovery ? \'primary\' : \'secondary-light\'"\n          class="button--rounded"\n          ion-button\n          icon-only\n          round\n          color="secondary-light"\n        >\n          <ion-icon md-name="group_work"></ion-icon>\n        </button>\n      </ion-row>\n    </ion-row>\n  </div>\n</ion-item>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/secret-item/secret-item.html"*/
        })
    ], SecretItemComponent);
    return SecretItemComponent;
}());

//# sourceMappingURL=secret-item.js.map

/***/ }),

/***/ 1369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignedTransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var SignedTransactionComponent = (function () {
    function SignedTransactionComponent() {
        this.fallbackActivated = false;
        //
    }
    SignedTransactionComponent.prototype.ngOnChanges = function () {
        return __awaiter(this, void 0, void 0, function () {
            var syncUtils, parts, _a, err_1, protocol, _b, e_1, protocol, _c, e_2;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.syncProtocolString) return [3 /*break*/, 4];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        syncUtils = new __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__["SyncProtocolUtils"]();
                        parts = this.syncProtocolString.split('?d=') // TODO: Use sync scheme handler to unpack
                        ;
                        _a = this;
                        return [4 /*yield*/, syncUtils.deserialize(parts[parts.length - 1])];
                    case 2:
                        _a.signedTx = _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _d.sent();
                        this.fallbackActivated = true;
                        this.rawTxData = this.syncProtocolString;
                        return [3 /*break*/, 4];
                    case 4:
                        if (!this.signedTx) return [3 /*break*/, 8];
                        protocol = Object(__WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__["getProtocolByIdentifier"])(this.signedTx.protocol);
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        _b = this;
                        return [4 /*yield*/, protocol.getTransactionDetailsFromSigned(this.signedTx.payload)];
                    case 6:
                        _b.airGapTx = _d.sent();
                        this.fallbackActivated = false;
                        return [3 /*break*/, 8];
                    case 7:
                        e_1 = _d.sent();
                        this.fallbackActivated = true;
                        this.rawTxData = this.signedTx.payload.transaction;
                        return [3 /*break*/, 8];
                    case 8:
                        if (!this.unsignedTx) return [3 /*break*/, 12];
                        protocol = Object(__WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__["getProtocolByIdentifier"])(this.unsignedTx.protocol);
                        _d.label = 9;
                    case 9:
                        _d.trys.push([9, 11, , 12]);
                        _c = this;
                        return [4 /*yield*/, protocol.getTransactionDetails(this.unsignedTx.payload)];
                    case 10:
                        _c.airGapTx = _d.sent();
                        this.fallbackActivated = false;
                        return [3 /*break*/, 12];
                    case 11:
                        e_2 = _d.sent();
                        this.fallbackActivated = true;
                        this.rawTxData = JSON.stringify(this.unsignedTx.payload.transaction);
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SignedTransactionComponent.prototype, "signedTx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SignedTransactionComponent.prototype, "unsignedTx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SignedTransactionComponent.prototype, "syncProtocolString", void 0);
    SignedTransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'signed-transaction',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/signed-transaction/signed-transaction.html"*/'<from-to *ngIf="airGapTx" [transaction]="airGapTx"></from-to>\n<ng-container *ngIf="fallbackActivated">\n  <ion-row>\n    <ion-col col-2 margin-top><ion-icon class="warning-icon" color="white" md-name="warning"></ion-icon></ion-col>\n    <ion-col col-10>{{ \'signed-transaction.transaction-unreadable\' | translate }}</ion-col>\n  </ion-row>\n  <ion-row>\n    <p class="text--selectable typography--mono word-break__all" ion-text color="blackLight">{{ rawTxData }}</p>\n  </ion-row>\n</ng-container>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/signed-transaction/signed-transaction.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SignedTransactionComponent);
    return SignedTransactionComponent;
}());

//# sourceMappingURL=signed-transaction.js.map

/***/ }),

/***/ 1370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrClipboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_clipboard_clipboard__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var QrClipboardComponent = (function () {
    function QrClipboardComponent(clipboardProvider) {
        this.clipboardProvider = clipboardProvider;
        this.level = 'L';
        this.qrdata = '';
        this.size = 300;
    }
    QrClipboardComponent.prototype.copyToClipboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clipboardProvider.copyAndShowToast(this.qrdata)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], QrClipboardComponent.prototype, "level", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QrClipboardComponent.prototype, "qrdata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], QrClipboardComponent.prototype, "size", void 0);
    QrClipboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'qr-clipboard',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/qr-clipboard/qr-clipboard.html"*/'<qrcode [level]="level" [qrdata]="qrdata" [size]="size" (click)="copyToClipboard()"></qrcode>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/qr-clipboard/qr-clipboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_clipboard_clipboard__["a" /* ClipboardProvider */]])
    ], QrClipboardComponent);
    return QrClipboardComponent;
}());

//# sourceMappingURL=qr-clipboard.js.map

/***/ }),

/***/ 1375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencySymbolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencySymbolComponent = (function () {
    function CurrencySymbolComponent() {
        this.symbolURL = 'assets/symbols/generic-coin.svg';
        /* */
    }
    CurrencySymbolComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var imageUrl = 'assets/symbols/' + this.symbol.toLowerCase() + '.svg';
        var img = new Image();
        img.onload = function () {
            _this.symbolURL = imageUrl;
        };
        img.src = imageUrl;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CurrencySymbolComponent.prototype, "symbol", void 0);
    CurrencySymbolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'currency-symbol',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/currency-symbol/currency-symbol.html"*/'<img [src]="symbolURL" />\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/currency-symbol/currency-symbol.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CurrencySymbolComponent);
    return CurrencySymbolComponent;
}());

//# sourceMappingURL=currency-symbol.js.map

/***/ }),

/***/ 1412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterWalletsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterWalletsPipe = (function () {
    function FilterWalletsPipe() {
    }
    FilterWalletsPipe.prototype.transform = function (items, args) {
        if (!items) {
            return [];
        }
        if (!args.symbol) {
            return items;
        }
        else {
            return items.filter(function (wallet) {
                return wallet.coinProtocol.symbol.toLowerCase().includes(args.symbol) || wallet.coinProtocol.name.toLowerCase().includes(args.symbol);
            });
        }
    };
    FilterWalletsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filterWallets'
        })
    ], FilterWalletsPipe);
    return FilterWalletsPipe;
}());

//# sourceMappingURL=fillter-wallets.filter.js.map

/***/ }),

/***/ 1413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureStorageServiceMock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecureStorageServiceMock = (function () {
    function SecureStorageServiceMock() {
        this.isSecure = 1;
        console.log('SecureStorageServiceMock');
    }
    SecureStorageServiceMock.prototype.isDeviceSecure = function () {
        var _this = this;
        return new Promise(function (resolve) {
            console.warn('SecureStorageServiceMock - This Device is NOT secured');
            resolve(_this.isSecure);
        });
    };
    SecureStorageServiceMock.prototype.secureDevice = function () {
        return new Promise(function (resolve) {
            console.warn('SecureStorageServiceMock - This Device is NOT secured');
            resolve();
        });
    };
    SecureStorageServiceMock.prototype.get = function (alias, _isParanoia) {
        var secureStorage = {
            init: function () {
                console.warn('SecureStorageServiceMock');
                return new Promise(function (resolve) {
                    resolve();
                });
            },
            setItem: function (key, value) {
                console.warn('SecureStorageServiceMock');
                localStorage.setItem(alias + '-' + key, value);
                return new Promise(function (resolve) {
                    resolve();
                });
            },
            getItem: function (key) {
                console.warn('SecureStorageServiceMock');
                var result = localStorage.getItem(alias + '-' + key);
                return new Promise(function (resolve) {
                    resolve(result);
                });
            },
            removeItem: function (key) {
                console.warn('SecureStorageServiceMock');
                localStorage.removeItem(alias + '-' + key);
                return new Promise(function (resolve) {
                    resolve();
                });
            }
        };
        return new Promise(function (resolve) {
            secureStorage
                .init()
                .then(function () {
                resolve(secureStorage);
            })
                .catch(Object(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
        });
    };
    SecureStorageServiceMock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SecureStorageServiceMock);
    return SecureStorageServiceMock;
}());

//# sourceMappingURL=secure-storage.mock.js.map

/***/ }),

/***/ 1431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_startup_checks_startup_checks_provider__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_scheme_routing_scheme_routing__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_protocols_protocols__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_error_handler_error_handler__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_wallet_select_coins_wallet_select_coins__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var DEEPLINK_VAULT_PREFIX = "airgap-vault://";
var DEEPLINK_VAULT_ADD_ACCOUNT = DEEPLINK_VAULT_PREFIX + "add-account/";
function exposedPromise() {
    var resolve, reject;
    // tslint:disable-next-line:promise-must-complete
    var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
    });
    return { promise: promise, resolve: resolve, reject: reject };
}
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, deepLinks, startupChecks, schemeRoutingProvider, translate, protocolsProvider, secretsProvider, ngZone) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.deepLinks = deepLinks;
        this.startupChecks = startupChecks;
        this.schemeRoutingProvider = schemeRoutingProvider;
        this.translate = translate;
        this.protocolsProvider = protocolsProvider;
        this.secretsProvider = secretsProvider;
        this.ngZone = ngZone;
        this.rootPage = null;
        // Sometimes the deeplink was registered before the root page was set
        // This resulted in the root page "overwriting" the deep-linked page
        this.isInitialized = exposedPromise();
        window['airGapHasStarted'] = true;
        this.initializeApp().catch(Object(__WEBPACK_IMPORTED_MODULE_11__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_11__providers_error_handler_error_handler__["a" /* ErrorCategory */].OTHER));
    }
    MyApp.prototype.initializeApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var supportedLanguages, _i, supportedLanguages_1, lang;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        supportedLanguages = ['en', 'de', 'zh-cn'];
                        for (_i = 0, supportedLanguages_1 = supportedLanguages; _i < supportedLanguages_1.length; _i++) {
                            lang = supportedLanguages_1[_i];
                            // We bundle languages so we don't have to load it over http
                            // and we don't have to add a CSP / whitelist rule for it.
                            this.translate.setTranslation(lang, __webpack_require__(1450)("./" + lang + ".json"));
                            // TODO: Once we add more languages, we probably should not all languages by default
                            // (we have to check if we can optimize that)
                        }
                        this.loadLanguages(supportedLanguages);
                        this.protocolsProvider.addProtocols();
                        return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        if (this.platform.is('cordova')) {
                            this.statusBar.styleLightContent();
                            this.statusBar.backgroundColorByHexString('#311B58');
                            this.splashScreen.hide();
                        }
                        this.initChecks();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.loadLanguages = function (supportedLanguages) {
        var _this = this;
        this.translate.setDefaultLang('en');
        var language = this.translate.getBrowserLang();
        if (language) {
            var lowerCaseLanguage_1 = language.toLowerCase();
            supportedLanguages.forEach(function (supportedLanguage) {
                if (supportedLanguage.startsWith(lowerCaseLanguage_1)) {
                    _this.translate.use(supportedLanguage);
                }
            });
        }
    };
    MyApp.prototype.initChecks = function () {
        var _this = this;
        this.startupChecks
            .initChecks()
            .then(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */])];
                    case 1:
                        _a.sent();
                        this.isInitialized.resolve();
                        return [2 /*return*/];
                }
            });
        }); })
            .catch(function (check) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                check.consequence(this.initChecks.bind(this));
                this.isInitialized.reject("startup check failed " + check.name); // If we are here, we cannot sign a transaction (no secret, rooted, etc)
                return [2 /*return*/];
            });
        }); });
    };
    MyApp.prototype.ngAfterViewInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        if (this.platform.is('cordova')) {
                            this.deepLinks
                                .route({
                                '/': undefined
                            })
                                .subscribe(function (match) {
                                // match.$route - the route we matched, which is the matched entry from the arguments to route()
                                // match.$args - the args passed in the link
                                // match.$link - the full link data
                                if (match && match.$link && match.$link.url) {
                                    _this.isInitialized.promise
                                        .then(function () { return __awaiter(_this, void 0, void 0, function () {
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            console.log('Successfully matched route', match.$link.url);
                                            if (match.$link.url === DEEPLINK_VAULT_PREFIX || match.$link.url.startsWith(DEEPLINK_VAULT_ADD_ACCOUNT)) {
                                                if (this.secretsProvider.currentSecretsList.getValue().length > 0) {
                                                    this.ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                                                        var protocol;
                                                        return __generator(this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0: return [4 /*yield*/, this.nav.popToRoot()];
                                                                case 1:
                                                                    _a.sent();
                                                                    protocol = match.$link.url.substr(DEEPLINK_VAULT_ADD_ACCOUNT.length);
                                                                    if (protocol.length > 0) {
                                                                        this.nav
                                                                            .push(__WEBPACK_IMPORTED_MODULE_12__pages_wallet_select_coins_wallet_select_coins__["a" /* WalletSelectCoinsPage */], {
                                                                            protocol: protocol
                                                                        })
                                                                            .catch(Object(__WEBPACK_IMPORTED_MODULE_11__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_11__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
                                                                    }
                                                                    else {
                                                                        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_wallet_select_coins_wallet_select_coins__["a" /* WalletSelectCoinsPage */]).catch(Object(__WEBPACK_IMPORTED_MODULE_11__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_11__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
                                                                    }
                                                                    return [2 /*return*/];
                                                            }
                                                        });
                                                    }); });
                                                }
                                            }
                                            else {
                                                this.schemeRoutingProvider.handleNewSyncRequest(this.nav, match.$link.url).catch(console.error);
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); })
                                        .catch(console.error);
                                }
                            }, function (nomatch) {
                                // nomatch.$link - the full link data
                                if (nomatch && nomatch.$link && nomatch.$link.url) {
                                    console.error("Got a deeplink that didn't match", nomatch.$link.url);
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_6__providers_startup_checks_startup_checks_provider__["a" /* StartupChecksProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_scheme_routing_scheme_routing__["a" /* SchemeRoutingProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_protocols_protocols__["a" /* ProtocolsProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_secrets_secrets_provider__["a" /* SecretsProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tokens; });
var tokens = [
    {
        symbol: '$FFC',
        name: '$Fluzcoin',
        marketSymbol: '$ffc',
        identifier: 'eth-erc20-$ffc',
        contractAddress: '0x4E84E9e5fb0A972628Cf4568c403167EF1D40431',
        decimals: 18
    },
    {
        symbol: '$FXY',
        name: '$FIXY NETWORK',
        marketSymbol: '$fxy',
        identifier: 'eth-erc20-$fxy',
        contractAddress: '0xA024E8057EEC474a9b2356833707Dd0579E26eF3',
        decimals: 18
    },
    {
        symbol: '$HUR',
        name: '$Hurify Token',
        marketSymbol: '$hur',
        identifier: 'eth-erc20-$hur',
        contractAddress: '0xCDB7eCFd3403Eef3882c65B761ef9B5054890a47',
        decimals: 18
    },
    {
        symbol: '$TEAK',
        name: '$TEAK',
        marketSymbol: '$teak',
        identifier: 'eth-erc20-$teak',
        contractAddress: '0x7DD7F56D697Cc0f2b52bD55C057f378F1fE6Ab4b',
        decimals: 18
    },
    {
        symbol: '0xBTC',
        name: '0xBitcoin',
        marketSymbol: '0xbtc',
        identifier: 'eth-erc20-0xbtc',
        contractAddress: '0xB6eD7644C69416d67B522e20bC294A9a9B405B31',
        decimals: 8
    },
    {
        symbol: '1SG',
        name: '1SG',
        marketSymbol: '1sg',
        identifier: 'eth-erc20-1sg',
        contractAddress: '0x0F72714B35a366285Df85886A2eE174601292A17',
        decimals: 18
    },
    {
        symbol: '1ST',
        name: 'FirstBlood',
        marketSymbol: '1st',
        identifier: 'eth-erc20-1st',
        contractAddress: '0xAf30D2a7E90d7DC361c8C4585e9BB7D2F6f15bc7',
        decimals: 18
    },
    {
        symbol: '1WO',
        name: '1World',
        marketSymbol: '1wo',
        identifier: 'eth-erc20-1wo',
        contractAddress: '0xfDBc1aDc26F0F8f8606a5d63b7D3a3CD21c22B23',
        decimals: 8
    },
    {
        symbol: '22x',
        name: '22x Fund',
        marketSymbol: '22x',
        identifier: 'eth-erc20-22x',
        contractAddress: '0x0073e5E52E2B4fE218D75d994eE2B3c82f9C87EA',
        decimals: 8
    },
    {
        symbol: '2DC',
        name: 'DualChain',
        marketSymbol: '2dc',
        identifier: 'eth-erc20-2dc',
        contractAddress: '0x9fC0583220eB44fAeE9e2dc1E63F39204DDD9090',
        decimals: 18
    },
    {
        symbol: '300',
        name: '300 Token Sparta',
        marketSymbol: '300',
        identifier: 'eth-erc20-300',
        contractAddress: '0xaEc98A708810414878c3BCDF46Aad31dEd4a4557',
        decimals: 18
    },
    {
        symbol: '3LT',
        name: 'TrillionToken',
        marketSymbol: '3lt',
        identifier: 'eth-erc20-3lt',
        contractAddress: '0x430241368c1D293fdA21DBa8Bb7aF32007c59109',
        decimals: 8
    },
    {
        symbol: 'A18',
        name: 'Apollo18',
        marketSymbol: 'a18',
        identifier: 'eth-erc20-a18',
        contractAddress: '0xBa7DCBa2Ade319Bc772DB4df75A76BA00dFb31b0',
        decimals: 0
    },
    {
        symbol: 'A18',
        name: 'Apollo18',
        marketSymbol: 'a18',
        identifier: 'eth-erc20-a18',
        contractAddress: '0xBDe8f7820b5544a49D34F9dDeaCAbEDC7C0B5adc',
        decimals: 0
    },
    {
        symbol: 'ABCH',
        name: 'ABBC Cash',
        marketSymbol: 'abch',
        identifier: 'eth-erc20-abch',
        contractAddress: '0xcc7d26D8eA6281BB363C8448515F2C61F7BC19F0',
        decimals: 18
    },
    {
        symbol: 'ABT',
        name: 'ArcBlock Token',
        marketSymbol: 'abt',
        identifier: 'eth-erc20-abt',
        contractAddress: '0xB98d4C97425d9908E66E53A6fDf673ACcA0BE986',
        decimals: 18
    },
    {
        symbol: 'ABYSS',
        name: 'The Abyss',
        marketSymbol: 'abyss',
        identifier: 'eth-erc20-abyss',
        contractAddress: '0x0E8d6b471e332F140e7d9dbB99E5E3822F728DA6',
        decimals: 18
    },
    {
        symbol: 'ACC',
        name: 'Accelerator Network',
        marketSymbol: 'acc',
        identifier: 'eth-erc20-acc',
        contractAddress: '0x13F1b7FDFbE1fc66676D56483e21B1ecb40b58E2',
        decimals: 18
    },
    {
        symbol: 'ACE',
        name: 'ACE (TokenStars)',
        marketSymbol: 'ace',
        identifier: 'eth-erc20-ace',
        contractAddress: '0x06147110022B768BA8F99A8f385df11a151A9cc8',
        decimals: 0
    },
    {
        symbol: 'ADB',
        name: 'adbank',
        marketSymbol: 'adb',
        identifier: 'eth-erc20-adb',
        contractAddress: '0x2baac9330Cf9aC479D819195794d79AD0c7616e3',
        decimals: 18
    },
    {
        symbol: 'ADH',
        name: 'AdHive Token',
        marketSymbol: 'adh',
        identifier: 'eth-erc20-adh',
        contractAddress: '0xE69a353b3152Dd7b706ff7dD40fe1d18b7802d31',
        decimals: 18
    },
    {
        symbol: 'ADI',
        name: 'Aditus',
        marketSymbol: 'adi',
        identifier: 'eth-erc20-adi',
        contractAddress: '0x8810C63470d38639954c6B41AaC545848C46484a',
        decimals: 18
    },
    {
        symbol: 'ADL',
        name: 'Adelphoi',
        marketSymbol: 'adl',
        identifier: 'eth-erc20-adl',
        contractAddress: '0x660e71483785f66133548B10f6926dC332b06e61',
        decimals: 18
    },
    {
        symbol: 'ADST',
        name: 'AdShares',
        marketSymbol: 'adst',
        identifier: 'eth-erc20-adst',
        contractAddress: '0x422866a8F0b032c5cf1DfBDEf31A20F4509562b0',
        decimals: 0
    },
    {
        symbol: 'ADT',
        name: 'AdToken',
        marketSymbol: 'adt',
        identifier: 'eth-erc20-adt',
        contractAddress: '0xD0D6D6C5Fe4a677D343cC433536BB717bAe167dD',
        decimals: 9
    },
    {
        symbol: 'ADX',
        name: 'AdEx Network',
        marketSymbol: 'adx',
        identifier: 'eth-erc20-adx',
        contractAddress: '0x4470BB87d77b963A013DB939BE332f927f2b992e',
        decimals: 4
    },
    {
        symbol: 'AFA',
        name: 'Africahead Ipparts',
        marketSymbol: 'afa',
        identifier: 'eth-erc20-afa',
        contractAddress: '0xfB48E0DEa837f9438309a7e9F0cFe7EE3353A84e',
        decimals: 2
    },
    {
        symbol: 'AGI',
        name: 'SingularityNET',
        marketSymbol: 'agi',
        identifier: 'eth-erc20-agi',
        contractAddress: '0x8eB24319393716668D768dCEC29356ae9CfFe285',
        decimals: 8
    },
    {
        symbol: 'AI',
        name: 'POLY AI',
        marketSymbol: 'ai',
        identifier: 'eth-erc20-ai',
        contractAddress: '0x5121E348e897dAEf1Eef23959Ab290e5557CF274',
        decimals: 18
    },
    {
        symbol: 'AID',
        name: 'AidCoin',
        marketSymbol: 'aid',
        identifier: 'eth-erc20-aid',
        contractAddress: '0x37E8789bB9996CaC9156cD5F5Fd32599E6b91289',
        decimals: 18
    },
    {
        symbol: 'AION',
        name: 'Aion',
        marketSymbol: 'aion',
        identifier: 'eth-erc20-aion',
        contractAddress: '0x4CEdA7906a5Ed2179785Cd3A40A69ee8bc99C466',
        decimals: 8
    },
    {
        symbol: 'AIR',
        name: 'AirToken',
        marketSymbol: 'air',
        identifier: 'eth-erc20-air',
        contractAddress: '0x27Dce1eC4d3f72C3E457Cc50354f1F975dDEf488',
        decimals: 8
    },
    {
        symbol: 'AIX',
        name: 'Aigang',
        marketSymbol: 'aix',
        identifier: 'eth-erc20-aix',
        contractAddress: '0x1063ce524265d5a3A624f4914acd573dD89ce988',
        decimals: 18
    },
    {
        symbol: 'AKC',
        name: 'ARTWOOK COIN',
        marketSymbol: 'akc',
        identifier: 'eth-erc20-akc',
        contractAddress: '0x1Ca43a170BaD619322e6f54d46b57e504dB663aA',
        decimals: 18
    },
    {
        symbol: 'ALCO',
        name: 'ALCO',
        marketSymbol: 'alco',
        identifier: 'eth-erc20-alco',
        contractAddress: '0x181a63746d3Adcf356CBc73aCE22832FFBB1EE5A',
        decimals: 8
    },
    {
        symbol: 'ALI',
        name: 'AiLink Token',
        marketSymbol: 'ali',
        identifier: 'eth-erc20-ali',
        contractAddress: '0x4289c043A12392F1027307fB58272D8EBd853912',
        decimals: 18
    },
    {
        symbol: 'ALIS',
        name: 'ALIS Token',
        marketSymbol: 'alis',
        identifier: 'eth-erc20-alis',
        contractAddress: '0xEA610B1153477720748DC13ED378003941d84fAB',
        decimals: 18
    },
    {
        symbol: 'ALTS',
        name: 'ALTS Token',
        marketSymbol: 'alts',
        identifier: 'eth-erc20-alts',
        contractAddress: '0x638AC149eA8EF9a1286C41B977017AA7359E6Cfa',
        decimals: 18
    },
    {
        symbol: 'ALX',
        name: 'ALAX',
        marketSymbol: 'alx',
        identifier: 'eth-erc20-alx',
        contractAddress: '0x49b127Bc33ce7E1586EC28CEC6a65b112596C822',
        decimals: 18
    },
    {
        symbol: 'AMB',
        name: 'Amber Token',
        marketSymbol: 'amb',
        identifier: 'eth-erc20-amb',
        contractAddress: '0x4DC3643DbC642b72C158E7F3d2ff232df61cb6CE',
        decimals: 18
    },
    {
        symbol: 'AMIS',
        name: 'AMIS',
        marketSymbol: 'amis',
        identifier: 'eth-erc20-amis',
        contractAddress: '0x949bEd886c739f1A3273629b3320db0C5024c719',
        decimals: 9
    },
    {
        symbol: 'AMLT',
        name: 'AMLT',
        marketSymbol: 'amlt',
        identifier: 'eth-erc20-amlt',
        contractAddress: '0xCA0e7269600d353F70b14Ad118A49575455C0f2f',
        decimals: 18
    },
    {
        symbol: 'AMN',
        name: 'Amon',
        marketSymbol: 'amn',
        identifier: 'eth-erc20-amn',
        contractAddress: '0x737F98AC8cA59f2C68aD658E3C3d8C8963E40a4c',
        decimals: 18
    },
    {
        symbol: 'AMO',
        name: 'AMO Coin',
        marketSymbol: 'amo',
        identifier: 'eth-erc20-amo',
        contractAddress: '0x38c87AA89B2B8cD9B95b736e1Fa7b612EA972169',
        decimals: 18
    },
    {
        symbol: 'AMTC',
        name: 'AmberTime Coin',
        marketSymbol: 'amtc',
        identifier: 'eth-erc20-amtc',
        contractAddress: '0x84936cF7630AA3e27Dd9AfF968b140d5AEE49F5a',
        decimals: 8
    },
    {
        symbol: 'ANT',
        name: 'Aragon',
        marketSymbol: 'ant',
        identifier: 'eth-erc20-ant',
        contractAddress: '0x960b236A07cf122663c4303350609A66A7B288C0',
        decimals: 18
    },
    {
        symbol: 'AOA',
        name: 'Aurora',
        marketSymbol: 'aoa',
        identifier: 'eth-erc20-aoa',
        contractAddress: '0x9ab165D795019b6d8B3e971DdA91071421305e5a',
        decimals: 18
    },
    {
        symbol: 'APIS',
        name: 'APIS',
        marketSymbol: 'apis',
        identifier: 'eth-erc20-apis',
        contractAddress: '0x4C0fBE1BB46612915E7967d2C3213cd4d87257AD',
        decimals: 18
    },
    {
        symbol: 'APPC',
        name: 'AppCoins',
        marketSymbol: 'appc',
        identifier: 'eth-erc20-appc',
        contractAddress: '0x1a7a8BD9106F2B8D977E08582DC7d24c723ab0DB',
        decimals: 18
    },
    {
        symbol: 'APT',
        name: 'AIGang',
        marketSymbol: 'apt',
        identifier: 'eth-erc20-apt',
        contractAddress: '0x23aE3C5B39B12f0693e05435EeaA1e51d8c61530',
        decimals: 18
    },
    {
        symbol: 'ARB',
        name: 'ARBITRAGE',
        marketSymbol: 'arb',
        identifier: 'eth-erc20-arb',
        contractAddress: '0xaFBeC4D65BC7b116d85107FD05d912491029Bf46',
        decimals: 18
    },
    {
        symbol: 'ARC',
        name: 'Arcade Token',
        marketSymbol: 'arc',
        identifier: 'eth-erc20-arc',
        contractAddress: '0xAc709FcB44a43c35F0DA4e3163b117A17F3770f5',
        decimals: 18
    },
    {
        symbol: 'ARCT',
        name: 'ArbitrageCT',
        marketSymbol: 'arct',
        identifier: 'eth-erc20-arct',
        contractAddress: '0x1245ef80F4d9e02ED9425375e8F649B9221b31D8',
        decimals: 8
    },
    {
        symbol: 'ARD',
        name: 'Accord',
        marketSymbol: 'ard',
        identifier: 'eth-erc20-ard',
        contractAddress: '0x75Aa7B0d02532f3833b66c7f0Ad35376d373ddF8',
        decimals: 18
    },
    {
        symbol: 'ARN',
        name: 'Aeron',
        marketSymbol: 'arn',
        identifier: 'eth-erc20-arn',
        contractAddress: '0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6',
        decimals: 8
    },
    {
        symbol: 'ART',
        name: 'Maecenas',
        marketSymbol: 'art',
        identifier: 'eth-erc20-art',
        contractAddress: '0xfec0cF7fE078a500abf15F1284958F22049c2C7e',
        decimals: 18
    },
    {
        symbol: 'ARX',
        name: 'ARX',
        marketSymbol: 'arx',
        identifier: 'eth-erc20-arx',
        contractAddress: '0x7705FaA34B16EB6d77Dfc7812be2367ba6B0248e',
        decimals: 8
    },
    {
        symbol: 'ARXT',
        name: 'Assistive Reality ARX',
        marketSymbol: 'arxt',
        identifier: 'eth-erc20-arxt',
        contractAddress: '0xb0D926c1BC3d78064F3e1075D5bD9A24F35Ae6C5',
        decimals: 18
    },
    {
        symbol: 'ARY',
        name: 'Block Array',
        marketSymbol: 'ary',
        identifier: 'eth-erc20-ary',
        contractAddress: '0xa5F8fC0921880Cb7342368BD128eb8050442B1a1',
        decimals: 18
    },
    {
        symbol: 'AST',
        name: 'Airswap',
        marketSymbol: 'ast',
        identifier: 'eth-erc20-ast',
        contractAddress: '0x27054b13b1B798B345b591a4d22e6562d47eA75a',
        decimals: 4
    },
    {
        symbol: 'ASTRO',
        name: 'AstroTokens',
        marketSymbol: 'astro',
        identifier: 'eth-erc20-astro',
        contractAddress: '0x7B22938ca841aA392C93dBB7f4c42178E3d65E88',
        decimals: 4
    },
    {
        symbol: 'ATH',
        name: 'Athenian Warrior Token',
        marketSymbol: 'ath',
        identifier: 'eth-erc20-ath',
        contractAddress: '0x17052d51E954592C1046320c2371AbaB6C73Ef10',
        decimals: 18
    },
    {
        symbol: 'ATH (AIgatha Token)',
        name: 'AIgatha Token',
        marketSymbol: 'ath (aigatha token)',
        identifier: 'eth-erc20-ath (aigatha token)',
        contractAddress: '0x1543d0F83489e82A1344DF6827B23d541F235A50',
        decimals: 18
    },
    {
        symbol: 'ATL',
        name: 'ATLANT',
        marketSymbol: 'atl',
        identifier: 'eth-erc20-atl',
        contractAddress: '0x78B7FADA55A64dD895D8c8c35779DD8b67fA8a05',
        decimals: 18
    },
    {
        symbol: 'ATM',
        name: 'ATMChain',
        marketSymbol: 'atm',
        identifier: 'eth-erc20-atm',
        contractAddress: '0x9B11EFcAAA1890f6eE52C6bB7CF8153aC5d74139',
        decimals: 8
    },
    {
        symbol: 'ATMI',
        name: 'Atonomi',
        marketSymbol: 'atmi',
        identifier: 'eth-erc20-atmi',
        contractAddress: '0x97AEB5066E1A590e868b511457BEb6FE99d329F5',
        decimals: 18
    },
    {
        symbol: 'ATS',
        name: 'Authorship',
        marketSymbol: 'ats',
        identifier: 'eth-erc20-ats',
        contractAddress: '0x2dAEE1AA61D60A252DC80564499A69802853583A',
        decimals: 4
    },
    {
        symbol: 'ATT',
        name: 'Atmatrix Token',
        marketSymbol: 'att',
        identifier: 'eth-erc20-att',
        contractAddress: '0x887834D3b8D450B6bAB109c252Df3DA286d73CE4',
        decimals: 18
    },
    {
        symbol: 'ATTN',
        name: 'Attention Token',
        marketSymbol: 'attn',
        identifier: 'eth-erc20-attn',
        contractAddress: '0x6339784d9478dA43106A429196772A029C2f177d',
        decimals: 18
    },
    {
        symbol: 'ATX',
        name: 'Aston',
        marketSymbol: 'atx',
        identifier: 'eth-erc20-atx',
        contractAddress: '0x1A0F2aB46EC630F9FD638029027b552aFA64b94c',
        decimals: 18
    },
    {
        symbol: 'AUC',
        name: 'Auctus',
        marketSymbol: 'auc',
        identifier: 'eth-erc20-auc',
        contractAddress: '0xc12d099be31567add4e4e4d0D45691C3F58f5663',
        decimals: 18
    },
    {
        symbol: 'AURA',
        name: 'Aurora DAO',
        marketSymbol: 'aura',
        identifier: 'eth-erc20-aura',
        contractAddress: '0xCdCFc0f66c522Fd086A1b725ea3c0Eeb9F9e8814',
        decimals: 18
    },
    {
        symbol: 'AUTO',
        name: 'Cube',
        marketSymbol: 'auto',
        identifier: 'eth-erc20-auto',
        contractAddress: '0x622dFfCc4e83C64ba959530A5a5580687a57581b',
        decimals: 18
    },
    {
        symbol: 'AVA',
        name: 'AVA',
        marketSymbol: 'ava',
        identifier: 'eth-erc20-ava',
        contractAddress: '0xeD247980396B10169BB1d36f6e278eD16700a60f',
        decimals: 4
    },
    {
        symbol: 'AVT',
        name: 'Aventus',
        marketSymbol: 'avt',
        identifier: 'eth-erc20-avt',
        contractAddress: '0x0d88eD6E74bbFD96B831231638b66C05571e824F',
        decimals: 18
    },
    {
        symbol: 'AX1',
        name: 'AX1 Mining Token',
        marketSymbol: 'ax1',
        identifier: 'eth-erc20-ax1',
        contractAddress: '0xCd4b4b0F3284a33AC49C67961EC6e111708318Cf',
        decimals: 5
    },
    {
        symbol: 'AXP',
        name: 'AXP',
        marketSymbol: 'axp',
        identifier: 'eth-erc20-axp',
        contractAddress: '0x9af2c6B1A28D3d6BC084bd267F70e90d49741D5B',
        decimals: 8
    },
    {
        symbol: 'AXPR',
        name: 'aXpire',
        marketSymbol: 'axpr',
        identifier: 'eth-erc20-axpr',
        contractAddress: '0xC39E626A04C5971D770e319760D7926502975e47',
        decimals: 18
    },
    {
        symbol: 'B2BX',
        name: 'B2BX',
        marketSymbol: 'b2bx',
        identifier: 'eth-erc20-b2bx',
        contractAddress: '0x5d51FCceD3114A8bb5E90cDD0f9d682bCbCC5393',
        decimals: 18
    },
    {
        symbol: 'BANCA',
        name: 'Banca',
        marketSymbol: 'banca',
        identifier: 'eth-erc20-banca',
        contractAddress: '0x998b3B82bC9dBA173990Be7afb772788B5aCB8Bd',
        decimals: 18
    },
    {
        symbol: 'BANX',
        name: 'BANX',
        marketSymbol: 'banx',
        identifier: 'eth-erc20-banx',
        contractAddress: '0xF87F0D9153fea549c728Ad61cb801595a68b73de',
        decimals: 18
    },
    {
        symbol: 'BAS',
        name: 'BitAsean',
        marketSymbol: 'bas',
        identifier: 'eth-erc20-bas',
        contractAddress: '0x2A05d22DB079BC40C2f77a1d1fF703a56E631cc1',
        decimals: 8
    },
    {
        symbol: 'BAT',
        name: 'Basic Attention Token',
        marketSymbol: 'bat',
        identifier: 'eth-erc20-bat',
        contractAddress: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
        decimals: 18
    },
    {
        symbol: 'BAX',
        name: 'BABB',
        marketSymbol: 'bax',
        identifier: 'eth-erc20-bax',
        contractAddress: '0x9a0242b7a33DAcbe40eDb927834F96eB39f8fBCB',
        decimals: 18
    },
    {
        symbol: 'BBC',
        name: 'TraDove B2BCoin',
        marketSymbol: 'bbc',
        identifier: 'eth-erc20-bbc',
        contractAddress: '0xe7D3e4413E29ae35B0893140F4500965c74365e5',
        decimals: 18
    },
    {
        symbol: 'BBI',
        name: 'Beluga Banking Infrastructure Token',
        marketSymbol: 'bbi',
        identifier: 'eth-erc20-bbi',
        contractAddress: '0x37D40510a2F5Bc98AA7a0f7BF4b3453Bcfb90Ac1',
        decimals: 18
    },
    {
        symbol: 'BBK',
        name: 'BRICKBLOCK TOKEN',
        marketSymbol: 'bbk',
        identifier: 'eth-erc20-bbk',
        contractAddress: '0x4a6058666cf1057eaC3CD3A5a614620547559fc9',
        decimals: 18
    },
    {
        symbol: 'BBN',
        name: 'Banyan Network',
        marketSymbol: 'bbn',
        identifier: 'eth-erc20-bbn',
        contractAddress: '0x35a69642857083BA2F30bfaB735dacC7F0bac969',
        decimals: 18
    },
    {
        symbol: 'BBO',
        name: 'Bigbom',
        marketSymbol: 'bbo',
        identifier: 'eth-erc20-bbo',
        contractAddress: '0x84F7c44B6Fed1080f647E354D552595be2Cc602F',
        decimals: 18
    },
    {
        symbol: 'BC',
        name: 'Block-Chain.com',
        marketSymbol: 'bc',
        identifier: 'eth-erc20-bc',
        contractAddress: '0x2ecB13A8c458c379c4d9a7259e202De03c8F3D19',
        decimals: 18
    },
    {
        symbol: 'BCAP',
        name: 'BCAP',
        marketSymbol: 'bcap',
        identifier: 'eth-erc20-bcap',
        contractAddress: '0xFf3519eeeEA3e76F1F699CCcE5E23ee0bdDa41aC',
        decimals: 0
    },
    {
        symbol: 'BCAP',
        name: 'BCAP',
        marketSymbol: 'bcap',
        identifier: 'eth-erc20-bcap',
        contractAddress: '0x1f41E42D0a9e3c0Dd3BA15B527342783B43200A9',
        decimals: 0
    },
    {
        symbol: 'BCBC',
        name: 'Beercoin',
        marketSymbol: 'bcbc',
        identifier: 'eth-erc20-bcbc',
        contractAddress: '0x7367A68039d4704f30BfBF6d948020C3B07DFC59',
        decimals: 18
    },
    {
        symbol: 'BCDN',
        name: 'BlockCDN',
        marketSymbol: 'bcdn',
        identifier: 'eth-erc20-bcdn',
        contractAddress: '0x1e797Ce986C3CFF4472F7D38d5C4aba55DfEFE40',
        decimals: 15
    },
    {
        symbol: 'BCDT',
        name: 'Blockchain Certified Data Token',
        marketSymbol: 'bcdt',
        identifier: 'eth-erc20-bcdt',
        contractAddress: '0xAcfa209Fb73bF3Dd5bBfb1101B9Bc999C49062a5',
        decimals: 18
    },
    {
        symbol: 'BCL',
        name: 'BCL',
        marketSymbol: 'bcl',
        identifier: 'eth-erc20-bcl',
        contractAddress: '0xbc1234552EBea32B5121190356bBa6D3Bb225bb5',
        decimals: 18
    },
    {
        symbol: 'BCPT',
        name: 'BlockMason Credit Protocol Token',
        marketSymbol: 'bcpt',
        identifier: 'eth-erc20-bcpt',
        contractAddress: '0x1c4481750daa5Ff521A2a7490d9981eD46465Dbd',
        decimals: 18
    },
    {
        symbol: 'BCV',
        name: 'BitCapitalVendor Token',
        marketSymbol: 'bcv',
        identifier: 'eth-erc20-bcv',
        contractAddress: '0x1014613E2B3CBc4d575054D4982E580d9b99d7B1',
        decimals: 8
    },
    {
        symbol: 'BDG',
        name: 'BitDegree Token',
        marketSymbol: 'bdg',
        identifier: 'eth-erc20-bdg',
        contractAddress: '0x1961B3331969eD52770751fC718ef530838b6dEE',
        decimals: 18
    },
    {
        symbol: 'BEE',
        name: 'Bee Token',
        marketSymbol: 'bee',
        identifier: 'eth-erc20-bee',
        contractAddress: '0x4D8fc1453a0F359e99c9675954e656D80d996FbF',
        decimals: 18
    },
    {
        symbol: 'BeerCoin',
        name: 'BeerCoin',
        marketSymbol: 'beercoin',
        identifier: 'eth-erc20-beercoin',
        contractAddress: '0x74C1E4b8caE59269ec1D85D3D4F324396048F4ac',
        decimals: 0
    },
    {
        symbol: 'BERRY',
        name: 'Berry',
        marketSymbol: 'berry',
        identifier: 'eth-erc20-berry',
        contractAddress: '0x6aEB95F06CDA84cA345c2dE0F3B7f96923a44f4c',
        decimals: 14
    },
    {
        symbol: 'BET',
        name: 'DAO.Casino',
        marketSymbol: 'bet',
        identifier: 'eth-erc20-bet',
        contractAddress: '0x8aA33A7899FCC8eA5fBe6A608A109c3893A1B8b2',
        decimals: 18
    },
    {
        symbol: 'BETHER',
        name: 'Bethereum',
        marketSymbol: 'bether',
        identifier: 'eth-erc20-bether',
        contractAddress: '0x14C926F2290044B647e1Bf2072e67B495eff1905',
        decimals: 18
    },
    {
        symbol: 'BETR',
        name: 'BetterBetting',
        marketSymbol: 'betr',
        identifier: 'eth-erc20-betr',
        contractAddress: '0x763186eB8d4856D536eD4478302971214FEbc6A9',
        decimals: 18
    },
    {
        symbol: 'BEZ',
        name: 'Bezop',
        marketSymbol: 'bez',
        identifier: 'eth-erc20-bez',
        contractAddress: '0x3839d8ba312751Aa0248fEd6a8bACB84308E20Ed',
        decimals: 18
    },
    {
        symbol: 'BHPC',
        name: 'BHPCash',
        marketSymbol: 'bhpc',
        identifier: 'eth-erc20-bhpc',
        contractAddress: '0xEE74110fB5A1007b06282e0DE5d73A61bf41d9Cd',
        decimals: 18
    },
    {
        symbol: 'BHR',
        name: 'BETHER',
        marketSymbol: 'bhr',
        identifier: 'eth-erc20-bhr',
        contractAddress: '0xfe5D908c9Ad85f651185dAa6a4770726E2b27d09',
        decimals: 18
    },
    {
        symbol: 'BIT',
        name: 'BlockEstate Investment Token',
        marketSymbol: 'bit',
        identifier: 'eth-erc20-bit',
        contractAddress: '0x089B85FA15f72c1088CBbef23a49DB80B91DD521',
        decimals: 8
    },
    {
        symbol: 'BITCAR',
        name: 'BitCar Token',
        marketSymbol: 'bitcar',
        identifier: 'eth-erc20-bitcar',
        contractAddress: '0x08b4c866aE9D1bE56a06e0C302054B4FFe067b43',
        decimals: 8
    },
    {
        symbol: 'BITPARK',
        name: 'BITPARK',
        marketSymbol: 'bitpark',
        identifier: 'eth-erc20-bitpark',
        contractAddress: '0xF3d29Fb98D2DC5E78c87198DEEF99377345fD6F1',
        decimals: 8
    },
    {
        symbol: 'BIX',
        name: 'Bibox Token',
        marketSymbol: 'bix',
        identifier: 'eth-erc20-bix',
        contractAddress: '0xb3104b4B9Da82025E8b9F8Fb28b3553ce2f67069',
        decimals: 18
    },
    {
        symbol: 'BKB',
        name: 'BetKing Bankroll Token',
        marketSymbol: 'bkb',
        identifier: 'eth-erc20-bkb',
        contractAddress: '0xB2Bfeb70B903F1BAaC7f2ba2c62934C7e5B974C4',
        decimals: 8
    },
    {
        symbol: 'BKRx',
        name: 'BlockRx',
        marketSymbol: 'bkrx',
        identifier: 'eth-erc20-bkrx',
        contractAddress: '0x3cf9E0c385a5ABEC9FD2a71790AA344C4e8E3570',
        decimals: 18
    },
    {
        symbol: 'BKX',
        name: 'BANKEX',
        marketSymbol: 'bkx',
        identifier: 'eth-erc20-bkx',
        contractAddress: '0x45245bc59219eeaAF6cD3f382e078A461FF9De7B',
        decimals: 18
    },
    {
        symbol: 'BLN',
        name: 'Bolenum',
        marketSymbol: 'bln',
        identifier: 'eth-erc20-bln',
        contractAddress: '0xCA29db4221c111888a7e80b12eAc8a266Da3Ee0d',
        decimals: 18
    },
    {
        symbol: 'BLT',
        name: 'Bloom',
        marketSymbol: 'blt',
        identifier: 'eth-erc20-blt',
        contractAddress: '0x107c4504cd79C5d2696Ea0030a8dD4e92601B82e',
        decimals: 18
    },
    {
        symbol: 'BLUE',
        name: 'Ethereum Blue',
        marketSymbol: 'blue',
        identifier: 'eth-erc20-blue',
        contractAddress: '0x539EfE69bCDd21a83eFD9122571a64CC25e0282b',
        decimals: 8
    },
    {
        symbol: 'BLX (Bullion)',
        name: 'Bullion Crypto',
        marketSymbol: 'blx (bullion)',
        identifier: 'eth-erc20-blx (bullion)',
        contractAddress: '0xcE59d29b09aAE565fEEEf8E52f47c3CD5368C663',
        decimals: 18
    },
    {
        symbol: 'BLX (Iconomi)',
        name: 'Iconomi',
        marketSymbol: 'blx (iconomi)',
        identifier: 'eth-erc20-blx (iconomi)',
        contractAddress: '0xE5a7c12972f3bbFe70ed29521C8949b8Af6a0970',
        decimals: 18
    },
    {
        symbol: 'BLZ',
        name: 'Bluzelle',
        marketSymbol: 'blz',
        identifier: 'eth-erc20-blz',
        contractAddress: '0x5732046A883704404F284Ce41FfADd5b007FD668',
        decimals: 18
    },
    {
        symbol: 'BMC',
        name: 'Blackmoon Crypto BMC Token',
        marketSymbol: 'bmc',
        identifier: 'eth-erc20-bmc',
        contractAddress: '0xDf6Ef343350780BF8C3410BF062e0C015B1DD671',
        decimals: 8
    },
    {
        symbol: 'BMT',
        name: 'BMT',
        marketSymbol: 'bmt',
        identifier: 'eth-erc20-bmt',
        contractAddress: '0xf028ADEe51533b1B47BEaa890fEb54a457f51E89',
        decimals: 18
    },
    {
        symbol: 'BMX',
        name: 'BitMart Token',
        marketSymbol: 'bmx',
        identifier: 'eth-erc20-bmx',
        contractAddress: '0x986EE2B944c42D017F52Af21c4c69B84DBeA35d8',
        decimals: 18
    },
    {
        symbol: 'BNB',
        name: 'Binance Coin',
        marketSymbol: 'bnb',
        identifier: 'eth-erc20-bnb',
        contractAddress: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
        decimals: 18
    },
    {
        symbol: 'BNC',
        name: 'Bionic',
        marketSymbol: 'bnc',
        identifier: 'eth-erc20-bnc',
        contractAddress: '0xEf51c9377FeB29856E61625cAf9390bD0B67eA18',
        decimals: 8
    },
    {
        symbol: 'BNC',
        name: 'BNC',
        marketSymbol: 'bnc',
        identifier: 'eth-erc20-bnc',
        contractAddress: '0xdD6Bf56CA2ada24c683FAC50E37783e55B57AF9F',
        decimals: 12
    },
    {
        symbol: 'BNFT',
        name: 'Benefits Coin',
        marketSymbol: 'bnft',
        identifier: 'eth-erc20-bnft',
        contractAddress: '0xdA2C424Fc98c741c2d4ef2f42897CEfed897CA75',
        decimals: 9
    },
    {
        symbol: 'BNN',
        name: 'BrokerNekoNetwork',
        marketSymbol: 'bnn',
        identifier: 'eth-erc20-bnn',
        contractAddress: '0xDA80B20038BDF968C7307BB5907A469482CF6251',
        decimals: 8
    },
    {
        symbol: 'BNT',
        name: 'Bancor',
        marketSymbol: 'bnt',
        identifier: 'eth-erc20-bnt',
        contractAddress: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
        decimals: 18
    },
    {
        symbol: 'BNTY',
        name: 'Bounty0x Token',
        marketSymbol: 'bnty',
        identifier: 'eth-erc20-bnty',
        contractAddress: '0xd2d6158683aeE4Cc838067727209a0aAF4359de3',
        decimals: 18
    },
    {
        symbol: 'BOB',
        name: "Bob's repair",
        marketSymbol: 'bob',
        identifier: 'eth-erc20-bob',
        contractAddress: '0xDF347911910b6c9A4286bA8E2EE5ea4a39eB2134',
        decimals: 18
    },
    {
        symbol: 'BON',
        name: 'Bonpay',
        marketSymbol: 'bon',
        identifier: 'eth-erc20-bon',
        contractAddress: '0xCc34366E3842cA1BD36c1f324d15257960fCC801',
        decimals: 18
    },
    {
        symbol: 'BOP',
        name: 'BlockOptiopns Token',
        marketSymbol: 'bop',
        identifier: 'eth-erc20-bop',
        contractAddress: '0x7F1E2C7d6A69bf34824D72C53B4550E895C0D8C2',
        decimals: 8
    },
    {
        symbol: 'BOU',
        name: 'Boule Coin',
        marketSymbol: 'bou',
        identifier: 'eth-erc20-bou',
        contractAddress: '0xC2C63F23ec5E97efbD7565dF9Ec764FDc7d4e91d',
        decimals: 18
    },
    {
        symbol: 'BOUTS',
        name: 'BoutsPro',
        marketSymbol: 'bouts',
        identifier: 'eth-erc20-bouts',
        contractAddress: '0x139d9397274bb9E2C29A9aa8Aa0b5874d30D62E3',
        decimals: 18
    },
    {
        symbol: 'BOX',
        name: 'ContentBox',
        marketSymbol: 'box',
        identifier: 'eth-erc20-box',
        contractAddress: '0x63f584FA56E60e4D0fE8802b27C7e6E3b33E007f',
        decimals: 18
    },
    {
        symbol: 'BOX',
        name: 'BOX Token',
        marketSymbol: 'box',
        identifier: 'eth-erc20-box',
        contractAddress: '0xe1A178B681BD05964d3e3Ed33AE731577d9d96dD',
        decimals: 18
    },
    {
        symbol: 'BOXX',
        name: 'BOXX Token [Blockparty]',
        marketSymbol: 'boxx',
        identifier: 'eth-erc20-boxx',
        contractAddress: '0x780116D91E5592E58a3b3c76A351571b39abCEc6',
        decimals: 15
    },
    {
        symbol: 'BPT',
        name: 'Blockport Token',
        marketSymbol: 'bpt',
        identifier: 'eth-erc20-bpt',
        contractAddress: '0x327682779bAB2BF4d1337e8974ab9dE8275A7Ca8',
        decimals: 18
    },
    {
        symbol: 'BQX',
        name: 'Bitquence',
        marketSymbol: 'bqx',
        identifier: 'eth-erc20-bqx',
        contractAddress: '0x5Af2Be193a6ABCa9c8817001F45744777Db30756',
        decimals: 8
    },
    {
        symbol: 'BRAT',
        name: 'BROTHER',
        marketSymbol: 'brat',
        identifier: 'eth-erc20-brat',
        contractAddress: '0x9E77D5a1251b6F7D456722A6eaC6D2d5980bd891',
        decimals: 8
    },
    {
        symbol: 'BRD',
        name: 'Bread',
        marketSymbol: 'brd',
        identifier: 'eth-erc20-brd',
        contractAddress: '0x558EC3152e2eb2174905cd19AeA4e34A23DE9aD6',
        decimals: 18
    },
    {
        symbol: 'BRLN',
        name: 'Berlin Coin',
        marketSymbol: 'brln',
        identifier: 'eth-erc20-brln',
        contractAddress: '0x80046305aaab08F6033b56a360c184391165dc2d',
        decimals: 18
    },
    {
        symbol: 'BRP',
        name: 'Rental Processor Token',
        marketSymbol: 'brp',
        identifier: 'eth-erc20-brp',
        contractAddress: '0xB22c2786a549B008517B67625f5296E8fAf9589e',
        decimals: 18
    },
    {
        symbol: 'BSDC',
        name: 'BSDC',
        marketSymbol: 'bsdc',
        identifier: 'eth-erc20-bsdc',
        contractAddress: '0xF26ef5E0545384b7Dcc0f297F2674189586830DF',
        decimals: 18
    },
    {
        symbol: 'BST',
        name: 'BlocksquareToken',
        marketSymbol: 'bst',
        identifier: 'eth-erc20-bst',
        contractAddress: '0x509A38b7a1cC0dcd83Aa9d06214663D9eC7c7F4a',
        decimals: 18
    },
    {
        symbol: 'BTCA',
        name: 'BitAir',
        marketSymbol: 'btca',
        identifier: 'eth-erc20-btca',
        contractAddress: '0x02725836ebF3eCDb1cDf1c7b02FcbBfaa2736AF8',
        decimals: 8
    },
    {
        symbol: 'BTCE',
        name: 'EthereumBitcoin',
        marketSymbol: 'btce',
        identifier: 'eth-erc20-btce',
        contractAddress: '0x0886949c1b8C412860c4264Ceb8083d1365e86CF',
        decimals: 8
    },
    {
        symbol: 'BTCL',
        name: 'BTC Lite',
        marketSymbol: 'btcl',
        identifier: 'eth-erc20-btcl',
        contractAddress: '0x5acD19b9c91e596b1f062f18e3D02da7eD8D1e50',
        decimals: 8
    },
    {
        symbol: 'BTCONE',
        name: 'BitCoin One',
        marketSymbol: 'btcone',
        identifier: 'eth-erc20-btcone',
        contractAddress: '0x87f5E8c3425218837f3CB67dB941aF0C01323E56',
        decimals: 18
    },
    {
        symbol: 'BTCR',
        name: 'BitCoin Red',
        marketSymbol: 'btcr',
        identifier: 'eth-erc20-btcr',
        contractAddress: '0x6Aac8CB9861E42bf8259F5AbDC6aE3Ae89909E11',
        decimals: 8
    },
    {
        symbol: 'BTE',
        name: 'BTE',
        marketSymbol: 'bte',
        identifier: 'eth-erc20-bte',
        contractAddress: '0x73dD069c299A5d691E9836243BcaeC9c8C1D8734',
        decimals: 8
    },
    {
        symbol: 'BTH',
        name: 'Bytether',
        marketSymbol: 'bth',
        identifier: 'eth-erc20-bth',
        contractAddress: '0xFAd572db566E5234AC9Fc3d570c4EdC0050eAA92',
        decimals: 18
    },
    {
        symbol: 'BTHR',
        name: 'Bethereum',
        marketSymbol: 'bthr',
        identifier: 'eth-erc20-bthr',
        contractAddress: '0xa02e3bB9cEbc03952601B3724B4940e0845BeBcf',
        decimals: 18
    },
    {
        symbol: 'BTK',
        name: 'Bitcoin Token',
        marketSymbol: 'btk',
        identifier: 'eth-erc20-btk',
        contractAddress: '0xdb8646F5b487B5Dd979FAC618350e85018F557d4',
        decimals: 18
    },
    {
        symbol: 'BTL (Battle)',
        name: 'BTL (Battle)',
        marketSymbol: 'btl (battle)',
        identifier: 'eth-erc20-btl (battle)',
        contractAddress: '0x2accaB9cb7a48c3E82286F0b2f8798D201F4eC3f',
        decimals: 18
    },
    {
        symbol: 'BTL (Bitlle)',
        name: 'Bitlle Token',
        marketSymbol: 'btl (bitlle)',
        identifier: 'eth-erc20-btl (bitlle)',
        contractAddress: '0x92685E93956537c25Bb75D5d47fca4266dd628B8',
        decimals: 4
    },
    {
        symbol: 'BTM',
        name: 'Bytom',
        marketSymbol: 'btm',
        identifier: 'eth-erc20-btm',
        contractAddress: '0xcB97e65F07DA24D46BcDD078EBebd7C6E6E3d750',
        decimals: 8
    },
    {
        symbol: 'BTO',
        name: 'Bottos',
        marketSymbol: 'bto',
        identifier: 'eth-erc20-bto',
        contractAddress: '0x36905Fc93280f52362A1CBAB151F25DC46742Fb5',
        decimals: 18
    },
    {
        symbol: 'BTQ',
        name: 'Bitcoin Boutique',
        marketSymbol: 'btq',
        identifier: 'eth-erc20-btq',
        contractAddress: '0x16B0E62aC13a2fAeD36D18bce2356d25Ab3CfAD3',
        decimals: 18
    },
    {
        symbol: 'BTR',
        name: 'Bitether',
        marketSymbol: 'btr',
        identifier: 'eth-erc20-btr',
        contractAddress: '0x499A6B77bc25C26bCf8265E2102B1B3dd1617024',
        decimals: 18
    },
    {
        symbol: 'BTR',
        name: 'Bither Platform Token',
        marketSymbol: 'btr',
        identifier: 'eth-erc20-btr',
        contractAddress: '0xcbf15FB8246F679F9Df0135881CB29a3746f734b',
        decimals: 18
    },
    {
        symbol: 'BTRN',
        name: 'Biotron',
        marketSymbol: 'btrn',
        identifier: 'eth-erc20-btrn',
        contractAddress: '0x03C780cD554598592B97b7256dDAad759945b125',
        decimals: 18
    },
    {
        symbol: 'BTT',
        name: 'Bitether',
        marketSymbol: 'btt',
        identifier: 'eth-erc20-btt',
        contractAddress: '0x080aa07E2C7185150d7e4DA98838A8d2feac3dfC',
        decimals: 0
    },
    {
        symbol: 'BTTX',
        name: 'Blocktrade.com',
        marketSymbol: 'bttx',
        identifier: 'eth-erc20-bttx',
        contractAddress: '0xFA456Cf55250A839088b27EE32A424d7DAcB54Ff',
        decimals: 18
    },
    {
        symbol: 'BTU',
        name: 'BTU Protocol',
        marketSymbol: 'btu',
        identifier: 'eth-erc20-btu',
        contractAddress: '0xb683D83a532e2Cb7DFa5275eED3698436371cc9f',
        decimals: 18
    },
    {
        symbol: 'BTZ',
        name: 'BTZ by Bunz',
        marketSymbol: 'btz',
        identifier: 'eth-erc20-btz',
        contractAddress: '0xE5f867dE1EA81346df5181b8b48DD6B0BB3357B0',
        decimals: 18
    },
    {
        symbol: 'BUC',
        name: 'BeeUnity Chain',
        marketSymbol: 'buc',
        identifier: 'eth-erc20-buc',
        contractAddress: '0xCa3c18a65b802eC267f8f4802545e7F53D24C75e',
        decimals: 18
    },
    {
        symbol: 'BWX',
        name: 'Blue Whale Token',
        marketSymbol: 'bwx',
        identifier: 'eth-erc20-bwx',
        contractAddress: '0xbD168CbF9d3a375B38dC51A202B5E8a4E52069Ed',
        decimals: 18
    },
    {
        symbol: 'BZ',
        name: 'Bit-Z Token',
        marketSymbol: 'bz',
        identifier: 'eth-erc20-bz',
        contractAddress: '0x4375E7aD8A01B8eC3Ed041399f62D9Cd120e0063',
        decimals: 18
    },
    {
        symbol: 'BZNT',
        name: 'Bezant',
        marketSymbol: 'bznt',
        identifier: 'eth-erc20-bznt',
        contractAddress: '0xE1Aee98495365fc179699C1bB3E761FA716beE62',
        decimals: 18
    },
    {
        symbol: 'C20',
        name: "Crypto20's Token",
        marketSymbol: 'c20',
        identifier: 'eth-erc20-c20',
        contractAddress: '0x26E75307Fc0C021472fEb8F727839531F112f317',
        decimals: 18
    },
    {
        symbol: 'C8',
        name: 'Carboneum',
        marketSymbol: 'c8',
        identifier: 'eth-erc20-c8',
        contractAddress: '0xd42debE4eDc92Bd5a3FBb4243e1ecCf6d63A4A5d',
        decimals: 18
    },
    {
        symbol: 'CAG',
        name: 'Change Bank',
        marketSymbol: 'cag',
        identifier: 'eth-erc20-cag',
        contractAddress: '0x7d4b8Cce0591C9044a22ee543533b72E976E36C3',
        decimals: 18
    },
    {
        symbol: 'CAN',
        name: 'CanYaCoin',
        marketSymbol: 'can',
        identifier: 'eth-erc20-can',
        contractAddress: '0x1d462414fe14cf489c7A21CaC78509f4bF8CD7c0',
        decimals: 6
    },
    {
        symbol: 'CAPP',
        name: 'Cappasity',
        marketSymbol: 'capp',
        identifier: 'eth-erc20-capp',
        contractAddress: '0x04F2E7221fdb1B52A68169B25793E51478fF0329',
        decimals: 2
    },
    {
        symbol: 'CAR',
        name: 'Car Sharing Community',
        marketSymbol: 'car',
        identifier: 'eth-erc20-car',
        contractAddress: '0x423e4322CDDa29156b49a17dfbd2aCC4b280600D',
        decimals: 9
    },
    {
        symbol: 'CAR (CarBlock)',
        name: 'CarBlock',
        marketSymbol: 'car (carblock)',
        identifier: 'eth-erc20-car (carblock)',
        contractAddress: '0x4D9e23a3842fE7Eb7682B9725cF6c507C424A41B',
        decimals: 18
    },
    {
        symbol: 'CARB',
        name: 'CarbCoin',
        marketSymbol: 'carb',
        identifier: 'eth-erc20-carb',
        contractAddress: '0xA517a46Baad6B054A76bD19c46844f717fe69fea',
        decimals: 8
    },
    {
        symbol: 'CARCO',
        name: 'CARCO',
        marketSymbol: 'carco',
        identifier: 'eth-erc20-carco',
        contractAddress: '0x2108E62D335Bbdc89eC3E9d8582F18DCFB0cDFf4',
        decimals: 8
    },
    {
        symbol: 'CARD',
        name: 'Cardstack Token',
        marketSymbol: 'card',
        identifier: 'eth-erc20-card',
        contractAddress: '0x954b890704693af242613edEf1B603825afcD708',
        decimals: 18
    },
    {
        symbol: 'CARD',
        name: 'Cardstack Token',
        marketSymbol: 'card',
        identifier: 'eth-erc20-card',
        contractAddress: '0xB07ec2c28834B889b1CE527Ca0F19364cD38935c',
        decimals: 0
    },
    {
        symbol: 'CARD',
        name: 'Cardstack Token',
        marketSymbol: 'card',
        identifier: 'eth-erc20-card',
        contractAddress: '0x1ed2B1eaEd8e968bc36EB90a914660A71827A5E9',
        decimals: 0
    },
    {
        symbol: 'CARE',
        name: 'Token CARE',
        marketSymbol: 'care',
        identifier: 'eth-erc20-care',
        contractAddress: '0xbF18F246B9301F231e9561B35A3879769BB46375',
        decimals: 18
    },
    {
        symbol: 'CAS',
        name: 'Cashaa',
        marketSymbol: 'cas',
        identifier: 'eth-erc20-cas',
        contractAddress: '0xe8780B48bdb05F928697A5e8155f672ED91462F7',
        decimals: 18
    },
    {
        symbol: 'CAS',
        name: 'CAS Coin',
        marketSymbol: 'cas',
        identifier: 'eth-erc20-cas',
        contractAddress: '0x779492d3644dDF4495Aa2d80C468E1B7be6AF1d2',
        decimals: 2
    },
    {
        symbol: 'CAT (BitClave)',
        name: 'BitClave',
        marketSymbol: 'cat (bitclave)',
        identifier: 'eth-erc20-cat (bitclave)',
        contractAddress: '0x1234567461d3f8Db7496581774Bd869C83D51c93',
        decimals: 18
    },
    {
        symbol: 'CAT (BlockCAT)',
        name: 'BlockCAT',
        marketSymbol: 'cat (blockcat)',
        identifier: 'eth-erc20-cat (blockcat)',
        contractAddress: '0x56ba2Ee7890461f463F7be02aAC3099f6d5811A8',
        decimals: 18
    },
    {
        symbol: 'CATs (BitClave)_Old',
        name: 'CATs (BitClave)_Old',
        marketSymbol: 'cats (bitclave)_old',
        identifier: 'eth-erc20-cats (bitclave)_old',
        contractAddress: '0x68e14bb5A45B9681327E16E528084B9d962C1a39',
        decimals: 18
    },
    {
        symbol: 'CBC',
        name: 'CashBet Coin',
        marketSymbol: 'cbc',
        identifier: 'eth-erc20-cbc',
        contractAddress: '0x26DB5439F651CAF491A87d48799dA81F191bDB6b',
        decimals: 8
    },
    {
        symbol: 'CBIX',
        name: 'Cubrix',
        marketSymbol: 'cbix',
        identifier: 'eth-erc20-cbix',
        contractAddress: '0x05C3617cBf1304b9260AA61ec960F115D67beCEA',
        decimals: 18
    },
    {
        symbol: 'CBM',
        name: 'CryptoBonusMiles',
        marketSymbol: 'cbm',
        identifier: 'eth-erc20-cbm',
        contractAddress: '0x95eFD1Fe6099F65a7ED524DEF487483221094947',
        decimals: 18
    },
    {
        symbol: 'CBT',
        name: 'CommerceBlock',
        marketSymbol: 'cbt',
        identifier: 'eth-erc20-cbt',
        contractAddress: '0x076C97e1c869072eE22f8c91978C99B4bcB02591',
        decimals: 18
    },
    {
        symbol: 'CC3',
        name: 'Coal Coin',
        marketSymbol: 'cc3',
        identifier: 'eth-erc20-cc3',
        contractAddress: '0xc166038705FFBAb3794185b3a9D925632A1DF37D',
        decimals: 18
    },
    {
        symbol: 'CCC (CryptoCrashCourse)',
        name: 'CryptoCrashCourse',
        marketSymbol: 'ccc (cryptocrashcourse)',
        identifier: 'eth-erc20-ccc (cryptocrashcourse)',
        contractAddress: '0x28577A6d31559bd265Ce3ADB62d0458550F7b8a7',
        decimals: 18
    },
    {
        symbol: 'CCC (ICONOMI)',
        name: 'CCC (ICONOMI)',
        marketSymbol: 'ccc (iconomi)',
        identifier: 'eth-erc20-ccc (iconomi)',
        contractAddress: '0xBE11eEb186e624b8f26A5045575a1340E4054552',
        decimals: 18
    },
    {
        symbol: 'CCCX',
        name: 'Clipper Coin',
        marketSymbol: 'cccx',
        identifier: 'eth-erc20-cccx',
        contractAddress: '0x378903a03FB2C3AC76BB52773e3CE11340377A32',
        decimals: 18
    },
    {
        symbol: 'CCLC',
        name: 'Christ Coin',
        marketSymbol: 'cclc',
        identifier: 'eth-erc20-cclc',
        contractAddress: '0xd348e07A2806505B856123045d27aeeD90924b50',
        decimals: 8
    },
    {
        symbol: 'CCO',
        name: 'Ccore',
        marketSymbol: 'cco',
        identifier: 'eth-erc20-cco',
        contractAddress: '0x679BADc551626e01B23CeecEFBc9B877EA18fc46',
        decimals: 18
    },
    {
        symbol: 'CCS',
        name: 'CacaoShares',
        marketSymbol: 'ccs',
        identifier: 'eth-erc20-ccs',
        contractAddress: '0x315cE59FAFd3A8d562b7Ec1C8542382d2710b06c',
        decimals: 18
    },
    {
        symbol: 'CCT',
        name: 'Crystal Clear Token',
        marketSymbol: 'cct',
        identifier: 'eth-erc20-cct',
        contractAddress: '0x336F646F87D9f6bC6Ed42Dd46E8b3fD9DbD15C22',
        decimals: 18
    },
    {
        symbol: 'CDL',
        name: 'Confideal',
        marketSymbol: 'cdl',
        identifier: 'eth-erc20-cdl',
        contractAddress: '0x8a95ca448A52C0ADf0054bB3402dC5e09CD6B232',
        decimals: 18
    },
    {
        symbol: 'CDT',
        name: 'CoinDash',
        marketSymbol: 'cdt',
        identifier: 'eth-erc20-cdt',
        contractAddress: '0x177d39AC676ED1C67A2b268AD7F1E58826E5B0af',
        decimals: 18
    },
    {
        symbol: 'CDX',
        name: 'Carbon Dollar X',
        marketSymbol: 'cdx',
        identifier: 'eth-erc20-cdx',
        contractAddress: '0x2cb101d7dA0ebaA57D3F2fEf46D7FFB7BB64592B',
        decimals: 0
    },
    {
        symbol: 'CDX',
        name: 'Commodity Ad Network',
        marketSymbol: 'cdx',
        identifier: 'eth-erc20-cdx',
        contractAddress: '0x6fFF3806Bbac52A20e0d79BC538d527f6a22c96b',
        decimals: 18
    },
    {
        symbol: 'CEEK',
        name: 'CEEK VR Token',
        marketSymbol: 'ceek',
        identifier: 'eth-erc20-ceek',
        contractAddress: '0xb056c38f6b7Dc4064367403E26424CD2c60655e1',
        decimals: 18
    },
    {
        symbol: 'CENNZ',
        name: 'Centrality',
        marketSymbol: 'cennz',
        identifier: 'eth-erc20-cennz',
        contractAddress: '0x1122B6a0E00DCe0563082b6e2953f3A943855c1F',
        decimals: 18
    },
    {
        symbol: 'CET',
        name: 'DICE Money Dicet',
        marketSymbol: 'cet',
        identifier: 'eth-erc20-cet',
        contractAddress: '0xF660cA1e228e7BE1fA8B4f5583145E31147FB577',
        decimals: 18
    },
    {
        symbol: 'CFC',
        name: 'CryptFillCoin',
        marketSymbol: 'cfc',
        identifier: 'eth-erc20-cfc',
        contractAddress: '0x5Dff89a2caa4D76bc286F74D67Bd718eb834da61',
        decimals: 18
    },
    {
        symbol: 'CFI',
        name: 'Cofound.it',
        marketSymbol: 'cfi',
        identifier: 'eth-erc20-cfi',
        contractAddress: '0x12FEF5e57bF45873Cd9B62E9DBd7BFb99e32D73e',
        decimals: 18
    },
    {
        symbol: 'CFTY',
        name: 'Crafty Token',
        marketSymbol: 'cfty',
        identifier: 'eth-erc20-cfty',
        contractAddress: '0x6956983F8B3Ce173B4AB84361AA0ad52f38D936f',
        decimals: 8
    },
    {
        symbol: 'CHP',
        name: 'CoinPoker',
        marketSymbol: 'chp',
        identifier: 'eth-erc20-chp',
        contractAddress: '0xf3db7560E820834658B590C96234c333Cd3D5E5e',
        decimals: 18
    },
    {
        symbol: 'CHSB',
        name: 'SwissBorg',
        marketSymbol: 'chsb',
        identifier: 'eth-erc20-chsb',
        contractAddress: '0xba9d4199faB4f26eFE3551D490E3821486f135Ba',
        decimals: 8
    },
    {
        symbol: 'CHX',
        name: 'Own',
        marketSymbol: 'chx',
        identifier: 'eth-erc20-chx',
        contractAddress: '0x1460a58096d80a50a2F1f956DDA497611Fa4f165',
        decimals: 18
    },
    {
        symbol: 'CIYA',
        name: 'CRYPTORIYA',
        marketSymbol: 'ciya',
        identifier: 'eth-erc20-ciya',
        contractAddress: '0xf75fBfa2f681860B9A6D19FC3FF3D34CB322E2D6',
        decimals: 18
    },
    {
        symbol: 'CJT',
        name: 'ConnectJob',
        marketSymbol: 'cjt',
        identifier: 'eth-erc20-cjt',
        contractAddress: '0x3abdfF32F76b42E7635bdb7e425f0231A5F3aB17',
        decimals: 18
    },
    {
        symbol: 'CK',
        name: 'CK',
        marketSymbol: 'ck',
        identifier: 'eth-erc20-ck',
        contractAddress: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
        decimals: 0
    },
    {
        symbol: 'CL',
        name: 'Coinlancer',
        marketSymbol: 'cl',
        identifier: 'eth-erc20-cl',
        contractAddress: '0xe81D72D14B1516e68ac3190a46C93302Cc8eD60f',
        decimals: 18
    },
    {
        symbol: 'CLB',
        name: 'Cloudbric',
        marketSymbol: 'clb',
        identifier: 'eth-erc20-clb',
        contractAddress: '0xb1c1Cb8C7c1992dba24e628bF7d38E71daD46aeB',
        decimals: 18
    },
    {
        symbol: 'CLL',
        name: 'CryptoLiveLeak',
        marketSymbol: 'cll',
        identifier: 'eth-erc20-cll',
        contractAddress: '0x3dC9a42fa7Afe57BE03c58fD7F4411b1E466C508',
        decimals: 18
    },
    {
        symbol: 'CLN',
        name: 'ColuLocalNetwork',
        marketSymbol: 'cln',
        identifier: 'eth-erc20-cln',
        contractAddress: '0x4162178B78D6985480A308B2190EE5517460406D',
        decimals: 18
    },
    {
        symbol: 'CLP',
        name: 'CryptoLending',
        marketSymbol: 'clp',
        identifier: 'eth-erc20-clp',
        contractAddress: '0x7FCE2856899a6806eeEf70807985fc7554C66340',
        decimals: 9
    },
    {
        symbol: 'CMBT',
        name: 'CMBToken',
        marketSymbol: 'cmbt',
        identifier: 'eth-erc20-cmbt',
        contractAddress: '0x3EDD235C3E840C1F29286B2e39370a255C7B6fdb',
        decimals: 8
    },
    {
        symbol: 'CMC',
        name: 'CryptoMart',
        marketSymbol: 'cmc',
        identifier: 'eth-erc20-cmc',
        contractAddress: '0x7e667525521cF61352e2E01b50FaaaE7Df39749a',
        decimals: 18
    },
    {
        symbol: 'CMCT',
        name: 'Crowd Machine Compute Token',
        marketSymbol: 'cmct',
        identifier: 'eth-erc20-cmct',
        contractAddress: '0x47bc01597798DCD7506DCCA36ac4302fc93a8cFb',
        decimals: 8
    },
    {
        symbol: 'CMT',
        name: 'CyberMiles Token',
        marketSymbol: 'cmt',
        identifier: 'eth-erc20-cmt',
        contractAddress: '0xf85fEea2FdD81d51177F6b8F35F0e6734Ce45F5F',
        decimals: 18
    },
    {
        symbol: 'CNB',
        name: 'Canabio',
        marketSymbol: 'cnb',
        identifier: 'eth-erc20-cnb',
        contractAddress: '0xEBf2F9E8De960f64ec0fDCDa6Cb282423133347B',
        decimals: 8
    },
    {
        symbol: 'CND',
        name: 'Cindicator',
        marketSymbol: 'cnd',
        identifier: 'eth-erc20-cnd',
        contractAddress: '0xd4c435F5B09F855C3317c8524Cb1F586E42795fa',
        decimals: 18
    },
    {
        symbol: 'CNN',
        name: 'Content Neutrality Network',
        marketSymbol: 'cnn',
        identifier: 'eth-erc20-cnn',
        contractAddress: '0x8713d26637CF49e1b6B4a7Ce57106AaBc9325343',
        decimals: 18
    },
    {
        symbol: 'CO2',
        name: 'Climatecoin',
        marketSymbol: 'co2',
        identifier: 'eth-erc20-co2',
        contractAddress: '0xB4b1D2C217EC0776584CE08D3DD98F90EDedA44b',
        decimals: 18
    },
    {
        symbol: 'CO2Bit',
        name: 'CO2Bit',
        marketSymbol: 'co2bit',
        identifier: 'eth-erc20-co2bit',
        contractAddress: '0x574B36BceD443338875d171CC377E691f7d4F887',
        decimals: 18
    },
    {
        symbol: 'COB',
        name: 'Cobinhood Token',
        marketSymbol: 'cob',
        identifier: 'eth-erc20-cob',
        contractAddress: '0xb2F7EB1f2c37645bE61d73953035360e768D81E6',
        decimals: 18
    },
    {
        symbol: 'COFI',
        name: 'CoinFi Token',
        marketSymbol: 'cofi',
        identifier: 'eth-erc20-cofi',
        contractAddress: '0x3136eF851592aCf49CA4C825131E364170FA32b3',
        decimals: 18
    },
    {
        symbol: 'COIL',
        name: 'CoinOil',
        marketSymbol: 'coil',
        identifier: 'eth-erc20-coil',
        contractAddress: '0x0C91B015AbA6f7B4738dcD36E7410138b29ADC29',
        decimals: 8
    },
    {
        symbol: 'COIN',
        name: 'Coinvest V3 Token',
        marketSymbol: 'coin',
        identifier: 'eth-erc20-coin',
        contractAddress: '0xeb547ed1D8A3Ff1461aBAa7F0022FED4836E00A4',
        decimals: 18
    },
    {
        symbol: 'COIN',
        name: 'Coinvest V2 Token',
        marketSymbol: 'coin',
        identifier: 'eth-erc20-coin',
        contractAddress: '0x5e8F855966D638135a968861E80DdA722291B06d',
        decimals: 18
    },
    {
        symbol: 'CORI',
        name: 'Corrently Invest Token',
        marketSymbol: 'cori',
        identifier: 'eth-erc20-cori',
        contractAddress: '0x725B190Bc077FFde17Cf549AA8ba25e298550B18',
        decimals: 2
    },
    {
        symbol: 'COSM',
        name: 'Cosmo Coin',
        marketSymbol: 'cosm',
        identifier: 'eth-erc20-cosm',
        contractAddress: '0xC4Bcd64CB216D49fD3C643A32762F34626b45a1a',
        decimals: 18
    },
    {
        symbol: 'COSS',
        name: 'Coss Token',
        marketSymbol: 'coss',
        identifier: 'eth-erc20-coss',
        contractAddress: '0x9e96604445Ec19fFed9a5e8dd7B50a29C899A10C',
        decimals: 18
    },
    {
        symbol: 'COSS',
        name: 'Coss Token',
        marketSymbol: 'coss',
        identifier: 'eth-erc20-coss',
        contractAddress: '0x65292EeadF1426Cd2dF1C4793a3d7519f253913b',
        decimals: 18
    },
    {
        symbol: 'COV',
        name: 'Covesting',
        marketSymbol: 'cov',
        identifier: 'eth-erc20-cov',
        contractAddress: '0xE2FB6529EF566a080e6d23dE0bd351311087D567',
        decimals: 18
    },
    {
        symbol: 'CPAY',
        name: 'Cryptopay',
        marketSymbol: 'cpay',
        identifier: 'eth-erc20-cpay',
        contractAddress: '0x0Ebb614204E47c09B6C3FeB9AAeCad8EE060E23E',
        decimals: 0
    },
    {
        symbol: 'CPC',
        name: 'CPChain',
        marketSymbol: 'cpc',
        identifier: 'eth-erc20-cpc',
        contractAddress: '0xfAE4Ee59CDd86e3Be9e8b90b53AA866327D7c090',
        decimals: 18
    },
    {
        symbol: 'CPEX',
        name: 'CoinPulseToken',
        marketSymbol: 'cpex',
        identifier: 'eth-erc20-cpex',
        contractAddress: '0xb787d4eAc8899730bb8C57fc3c998c49c5244ec0',
        decimals: 8
    },
    {
        symbol: 'CPLO',
        name: 'CPOLLO',
        marketSymbol: 'cplo',
        identifier: 'eth-erc20-cplo',
        contractAddress: '0x7064aAb39A0Fcf7221c3396719D0917a65E35515',
        decimals: 18
    },
    {
        symbol: 'CPT',
        name: 'Cryptaur',
        marketSymbol: 'cpt',
        identifier: 'eth-erc20-cpt',
        contractAddress: '0x88d50B466BE55222019D71F9E8fAe17f5f45FCA1',
        decimals: 8
    },
    {
        symbol: 'CPT',
        name: 'Contents Protocol Token',
        marketSymbol: 'cpt',
        identifier: 'eth-erc20-cpt',
        contractAddress: '0x9B62513c8a27290CF6A7A9e29386e600245EA819',
        decimals: 18
    },
    {
        symbol: 'CPY',
        name: 'COPYTRACK',
        marketSymbol: 'cpy',
        identifier: 'eth-erc20-cpy',
        contractAddress: '0xf44745fBd41F6A1ba151df190db0564c5fCc4410',
        decimals: 18
    },
    {
        symbol: 'CR7',
        name: 'CR7Coin',
        marketSymbol: 'cr7',
        identifier: 'eth-erc20-cr7',
        contractAddress: '0x7F585B9130c64e9e9F470b618A7badD03D79cA7E',
        decimals: 18
    },
    {
        symbol: 'CRB',
        name: 'Creditbit',
        marketSymbol: 'crb',
        identifier: 'eth-erc20-crb',
        contractAddress: '0xAef38fBFBF932D1AeF3B808Bc8fBd8Cd8E1f8BC5',
        decimals: 8
    },
    {
        symbol: 'CRBT',
        name: 'Cruisebit',
        marketSymbol: 'crbt',
        identifier: 'eth-erc20-crbt',
        contractAddress: '0x2cF618c19041D9Db330d8222B860A624021F30fb',
        decimals: 18
    },
    {
        symbol: 'CRC',
        name: 'CryCash',
        marketSymbol: 'crc',
        identifier: 'eth-erc20-crc',
        contractAddress: '0xF41e5Fbc2F6Aac200Dd8619E121CE1f05D150077',
        decimals: 18
    },
    {
        symbol: 'CRED',
        name: 'Verify',
        marketSymbol: 'cred',
        identifier: 'eth-erc20-cred',
        contractAddress: '0x672a1AD4f667FB18A333Af13667aa0Af1F5b5bDD',
        decimals: 18
    },
    {
        symbol: 'CREDO',
        name: 'Credo / Bitbounce',
        marketSymbol: 'credo',
        identifier: 'eth-erc20-credo',
        contractAddress: '0x4E0603e2A27A30480E5e3a4Fe548e29EF12F64bE',
        decimals: 18
    },
    {
        symbol: 'CRGO',
        name: 'CargoCoin',
        marketSymbol: 'crgo',
        identifier: 'eth-erc20-crgo',
        contractAddress: '0xf49CDD50aD408d387d611F88A647179C3de3492b',
        decimals: 18
    },
    {
        symbol: 'CRMT',
        name: 'Cremit',
        marketSymbol: 'crmt',
        identifier: 'eth-erc20-crmt',
        contractAddress: '0x9238bfB781A55eACC3Cf05F7DF94038c198CD9B9',
        decimals: 8
    },
    {
        symbol: 'CRPT',
        name: 'CrypteriumToken',
        marketSymbol: 'crpt',
        identifier: 'eth-erc20-crpt',
        contractAddress: '0x80A7E048F37A50500351C204Cb407766fA3baE7f',
        decimals: 18
    },
    {
        symbol: 'CRT',
        name: 'CreamtoeCoin',
        marketSymbol: 'crt',
        identifier: 'eth-erc20-crt',
        contractAddress: '0xF0da1186a4977226b9135d0613ee72e229EC3F4d',
        decimals: 18
    },
    {
        symbol: 'CryptoCarbon',
        name: 'CryptoCarbon',
        marketSymbol: 'cryptocarbon',
        identifier: 'eth-erc20-cryptocarbon',
        contractAddress: '0xE4c94d45f7Aef7018a5D66f44aF780ec6023378e',
        decimals: 6
    },
    {
        symbol: 'CS',
        name: 'Credits',
        marketSymbol: 'cs',
        identifier: 'eth-erc20-cs',
        contractAddress: '0x46b9Ad944d1059450Da1163511069C718F699D31',
        decimals: 6
    },
    {
        symbol: 'CSNO',
        name: 'BitDice',
        marketSymbol: 'csno',
        identifier: 'eth-erc20-csno',
        contractAddress: '0x29D75277aC7F0335b2165D0895E8725cbF658d73',
        decimals: 8
    },
    {
        symbol: 'CST',
        name: 'Cryptosolartech',
        marketSymbol: 'cst',
        identifier: 'eth-erc20-cst',
        contractAddress: '0xBB49A51Ee5a66ca3a8CbE529379bA44Ba67E6771',
        decimals: 18
    },
    {
        symbol: 'CTF',
        name: 'CryptoTask',
        marketSymbol: 'ctf',
        identifier: 'eth-erc20-ctf',
        contractAddress: '0x4545750F39aF6Be4F237B6869D4EccA928Fd5A85',
        decimals: 18
    },
    {
        symbol: 'CTG',
        name: 'CT Global Token',
        marketSymbol: 'ctg',
        identifier: 'eth-erc20-ctg',
        contractAddress: '0xC87c5dD86A3d567fF28701886fB0745aaa898da4',
        decimals: 18
    },
    {
        symbol: 'CTGC',
        name: 'Convenient To Go',
        marketSymbol: 'ctgc',
        identifier: 'eth-erc20-ctgc',
        contractAddress: '0x9E7D29bd499B6c7da2a5B2EaFCF4A39d3BD845D1',
        decimals: 18
    },
    {
        symbol: 'CTL',
        name: 'CTL',
        marketSymbol: 'ctl',
        identifier: 'eth-erc20-ctl',
        contractAddress: '0xBf4cFD7d1eDeeEA5f6600827411B41A21eB08abd',
        decimals: 2
    },
    {
        symbol: 'CTR',
        name: 'Centra',
        marketSymbol: 'ctr',
        identifier: 'eth-erc20-ctr',
        contractAddress: '0x96A65609a7B84E8842732DEB08f56C3E21aC6f8a',
        decimals: 18
    },
    {
        symbol: 'CTT',
        name: 'ChainTrade Token',
        marketSymbol: 'ctt',
        identifier: 'eth-erc20-ctt',
        contractAddress: '0xE3Fa177AcecfB86721Cf6f9f4206bd3Bd672D7d5',
        decimals: 18
    },
    {
        symbol: 'CTX',
        name: 'CarTaxi',
        marketSymbol: 'ctx',
        identifier: 'eth-erc20-ctx',
        contractAddress: '0x662aBcAd0b7f345AB7FfB1b1fbb9Df7894f18e66',
        decimals: 18
    },
    {
        symbol: 'CTXC',
        name: 'Cortex',
        marketSymbol: 'ctxc',
        identifier: 'eth-erc20-ctxc',
        contractAddress: '0xEa11755Ae41D889CeEc39A63E6FF75a02Bc1C00d',
        decimals: 18
    },
    {
        symbol: 'cV',
        name: 'carVertical',
        marketSymbol: 'cv',
        identifier: 'eth-erc20-cv',
        contractAddress: '0xdA6cb58A0D0C01610a29c5A65c303e13e885887C',
        decimals: 18
    },
    {
        symbol: 'CVC',
        name: 'Civic',
        marketSymbol: 'cvc',
        identifier: 'eth-erc20-cvc',
        contractAddress: '0x41e5560054824eA6B0732E656E3Ad64E20e94E45',
        decimals: 8
    },
    {
        symbol: 'CVT',
        name: 'CyberVein',
        marketSymbol: 'cvt',
        identifier: 'eth-erc20-cvt',
        contractAddress: '0xBe428c3867F05deA2A89Fc76a102b544eaC7f772',
        decimals: 18
    },
    {
        symbol: 'CXC',
        name: 'CoxxxCoin',
        marketSymbol: 'cxc',
        identifier: 'eth-erc20-cxc',
        contractAddress: '0x2134057C0b461F898D375Cead652Acae62b59541',
        decimals: 18
    },
    {
        symbol: 'CXO',
        name: 'CargoX',
        marketSymbol: 'cxo',
        identifier: 'eth-erc20-cxo',
        contractAddress: '0xb6EE9668771a79be7967ee29a63D4184F8097143',
        decimals: 18
    },
    {
        symbol: 'CYFM',
        name: 'CyberFM',
        marketSymbol: 'cyfm',
        identifier: 'eth-erc20-cyfm',
        contractAddress: '0x3f06B5D78406cD97bdf10f5C420B241D32759c80',
        decimals: 18
    },
    {
        symbol: 'CYMT',
        name: 'CyberMusic',
        marketSymbol: 'cymt',
        identifier: 'eth-erc20-cymt',
        contractAddress: '0x78c292D1445E6b9558bf42e8BC369271DeD062eA',
        decimals: 8
    },
    {
        symbol: 'CZR',
        name: 'CanonChain',
        marketSymbol: 'czr',
        identifier: 'eth-erc20-czr',
        contractAddress: '0x0223fc70574214F65813fE336D870Ac47E147fAe',
        decimals: 18
    },
    {
        symbol: 'DAB',
        name: 'DAB',
        marketSymbol: 'dab',
        identifier: 'eth-erc20-dab',
        contractAddress: '0xdab0C31BF34C897Fb0Fe90D12EC9401caf5c36Ec',
        decimals: 0
    },
    {
        symbol: 'DACS',
        name: 'DACSEE',
        marketSymbol: 'dacs',
        identifier: 'eth-erc20-dacs',
        contractAddress: '0xA31108E5BAB5494560Db34c95492658AF239357C',
        decimals: 18
    },
    {
        symbol: 'DADI',
        name: 'DADI',
        marketSymbol: 'dadi',
        identifier: 'eth-erc20-dadi',
        contractAddress: '0xFb2f26F266Fb2805a387230f2aa0a331b4d96Fba',
        decimals: 18
    },
    {
        symbol: 'DAI',
        name: 'Dai Stablecoin v1.0',
        marketSymbol: 'dai',
        identifier: 'eth-erc20-dai',
        contractAddress: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
        decimals: 18
    },
    {
        symbol: 'DALC',
        name: 'DaleCoin',
        marketSymbol: 'dalc',
        identifier: 'eth-erc20-dalc',
        contractAddress: '0x07D9e49Ea402194bf48A8276dAfB16E4eD633317',
        decimals: 8
    },
    {
        symbol: 'DAN',
        name: 'DaneelToken',
        marketSymbol: 'dan',
        identifier: 'eth-erc20-dan',
        contractAddress: '0x9B70740e708a083C6fF38Df52297020f5DfAa5EE',
        decimals: 10
    },
    {
        symbol: 'DAO',
        name: 'DAO',
        marketSymbol: 'dao',
        identifier: 'eth-erc20-dao',
        contractAddress: '0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413',
        decimals: 16
    },
    {
        symbol: 'DAT',
        name: 'Datum Token',
        marketSymbol: 'dat',
        identifier: 'eth-erc20-dat',
        contractAddress: '0x81c9151de0C8bafCd325a57E3dB5a5dF1CEBf79c',
        decimals: 18
    },
    {
        symbol: 'DATA',
        name: 'Streamr DATAcoin',
        marketSymbol: 'data',
        identifier: 'eth-erc20-data',
        contractAddress: '0x0Cf0Ee63788A0849fE5297F3407f701E122cC023',
        decimals: 18
    },
    {
        symbol: 'DATABroker',
        name: 'DataBrokerDAO Token',
        marketSymbol: 'databroker',
        identifier: 'eth-erc20-databroker',
        contractAddress: '0x1B5f21ee98eed48d292e8e2d3Ed82b40a9728A22',
        decimals: 18
    },
    {
        symbol: 'DATX',
        name: 'DATx',
        marketSymbol: 'datx',
        identifier: 'eth-erc20-datx',
        contractAddress: '0xaBbBB6447B68ffD6141DA77C18c7B5876eD6c5ab',
        decimals: 18
    },
    {
        symbol: 'DAV',
        name: 'DAV Token',
        marketSymbol: 'dav',
        identifier: 'eth-erc20-dav',
        contractAddress: '0xd82Df0ABD3f51425Eb15ef7580fDA55727875f14',
        decimals: 18
    },
    {
        symbol: 'DAX',
        name: 'DAEX',
        marketSymbol: 'dax',
        identifier: 'eth-erc20-dax',
        contractAddress: '0x0B4BdC478791897274652DC15eF5C135cae61E60',
        decimals: 18
    },
    {
        symbol: 'DAXT',
        name: 'Digital Asset Exchange Token',
        marketSymbol: 'daxt',
        identifier: 'eth-erc20-daxt',
        contractAddress: '0x61725f3db4004AFE014745B21DAb1E1677CC328b',
        decimals: 18
    },
    {
        symbol: 'DAY',
        name: 'ChronoLogic DAY',
        marketSymbol: 'day',
        identifier: 'eth-erc20-day',
        contractAddress: '0xE814aeE960a85208C3dB542C53E7D4a6C8D5f60F',
        decimals: 18
    },
    {
        symbol: 'DBET',
        name: 'DecentBet',
        marketSymbol: 'dbet',
        identifier: 'eth-erc20-dbet',
        contractAddress: '0x9b68bFaE21DF5A510931A262CECf63f41338F264',
        decimals: 18
    },
    {
        symbol: 'DCA',
        name: 'DoBetAcceptBet',
        marketSymbol: 'dca',
        identifier: 'eth-erc20-dca',
        contractAddress: '0x386Faa4703a34a7Fdb19Bec2e14Fd427C9638416',
        decimals: 18
    },
    {
        symbol: 'DCC',
        name: 'Distributed Credit Chain',
        marketSymbol: 'dcc',
        identifier: 'eth-erc20-dcc',
        contractAddress: '0xFFa93Aacf49297D51E211817452839052FDFB961',
        decimals: 18
    },
    {
        symbol: 'DCL',
        name: 'DCL',
        marketSymbol: 'dcl',
        identifier: 'eth-erc20-dcl',
        contractAddress: '0x399A0e6FbEb3d74c85357439f4c8AeD9678a5cbF',
        decimals: 3
    },
    {
        symbol: 'DCN',
        name: 'Dentacoin',
        marketSymbol: 'dcn',
        identifier: 'eth-erc20-dcn',
        contractAddress: '0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6',
        decimals: 0
    },
    {
        symbol: 'DDF',
        name: 'DDF',
        marketSymbol: 'ddf',
        identifier: 'eth-erc20-ddf',
        contractAddress: '0xcC4eF9EEAF656aC1a2Ab886743E98e97E090ed38',
        decimals: 18
    },
    {
        symbol: 'DEB',
        name: 'DEBITUM',
        marketSymbol: 'deb',
        identifier: 'eth-erc20-deb',
        contractAddress: '0x151202C9c18e495656f372281F493EB7698961D5',
        decimals: 18
    },
    {
        symbol: 'DEEZ',
        name: 'DeezNuts',
        marketSymbol: 'deez',
        identifier: 'eth-erc20-deez',
        contractAddress: '0x075c60EE2cD308ff47873b38Bd9A0Fa5853382c4',
        decimals: 18
    },
    {
        symbol: 'DELTA',
        name: 'DeltaChain',
        marketSymbol: 'delta',
        identifier: 'eth-erc20-delta',
        contractAddress: '0xDE1E0AE6101b46520cF66fDC0B1059c5cC3d106c',
        decimals: 8
    },
    {
        symbol: 'DENT',
        name: 'DENT',
        marketSymbol: 'dent',
        identifier: 'eth-erc20-dent',
        contractAddress: '0x3597bfD533a99c9aa083587B074434E61Eb0A258',
        decimals: 8
    },
    {
        symbol: 'DEPO',
        name: 'CRYPTODEPOZIT',
        marketSymbol: 'depo',
        identifier: 'eth-erc20-depo',
        contractAddress: '0x7cF271966F36343Bf0150F25E5364f7961c58201',
        decimals: 0
    },
    {
        symbol: 'DEPO (Depository Network)',
        name: 'DEPO (Depository Network)',
        marketSymbol: 'depo (depository network)',
        identifier: 'eth-erc20-depo (depository network)',
        contractAddress: '0x89cbeAC5E8A13F0Ebb4C74fAdFC69bE81A501106',
        decimals: 18
    },
    {
        symbol: 'Devcon2 Token',
        name: 'Devcon2 Token',
        marketSymbol: 'devcon2 token',
        identifier: 'eth-erc20-devcon2 token',
        contractAddress: '0xdd94De9cFE063577051A5eb7465D08317d8808B6',
        decimals: 0
    },
    {
        symbol: 'DEW',
        name: 'DEW',
        marketSymbol: 'dew',
        identifier: 'eth-erc20-dew',
        contractAddress: '0x20E94867794dBA030Ee287F1406E100d03C84Cd3',
        decimals: 18
    },
    {
        symbol: 'DEX',
        name: 'DEX',
        marketSymbol: 'dex',
        identifier: 'eth-erc20-dex',
        contractAddress: '0x497bAEF294c11a5f0f5Bea3f2AdB3073DB448B56',
        decimals: 18
    },
    {
        symbol: 'DGD',
        name: 'Digix DAO',
        marketSymbol: 'dgd',
        identifier: 'eth-erc20-dgd',
        contractAddress: '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A',
        decimals: 9
    },
    {
        symbol: 'DGPT',
        name: 'DigiPulse',
        marketSymbol: 'dgpt',
        identifier: 'eth-erc20-dgpt',
        contractAddress: '0xf6cFe53d6FEbaEEA051f400ff5fc14F0cBBDacA1',
        decimals: 18
    },
    {
        symbol: 'DGS',
        name: 'Dragonglass',
        marketSymbol: 'dgs',
        identifier: 'eth-erc20-dgs',
        contractAddress: '0x6aEDbF8dFF31437220dF351950Ba2a3362168d1b',
        decimals: 8
    },
    {
        symbol: 'DGTX',
        name: 'DigitexFutures',
        marketSymbol: 'dgtx',
        identifier: 'eth-erc20-dgtx',
        contractAddress: '0x1C83501478f1320977047008496DACBD60Bb15ef',
        decimals: 18
    },
    {
        symbol: 'DGX',
        name: 'Digix Gold Token',
        marketSymbol: 'dgx',
        identifier: 'eth-erc20-dgx',
        contractAddress: '0x4f3AfEC4E5a3F2A6a1A411DEF7D7dFe50eE057bF',
        decimals: 9
    },
    {
        symbol: 'DGX1',
        name: 'Digix Gold Token 1.0',
        marketSymbol: 'dgx1',
        identifier: 'eth-erc20-dgx1',
        contractAddress: '0x55b9a11c2e8351b4Ffc7b11561148bfaC9977855',
        decimals: 9
    },
    {
        symbol: 'DICE',
        name: 'Etheroll',
        marketSymbol: 'dice',
        identifier: 'eth-erc20-dice',
        contractAddress: '0x2e071D2966Aa7D8dECB1005885bA1977D6038A65',
        decimals: 16
    },
    {
        symbol: 'DIP',
        name: 'Decentralized Insurance Protocol',
        marketSymbol: 'dip',
        identifier: 'eth-erc20-dip',
        contractAddress: '0xc719d010B63E5bbF2C0551872CD5316ED26AcD83',
        decimals: 18
    },
    {
        symbol: 'DIT',
        name: 'Digital Insurance Token',
        marketSymbol: 'dit',
        identifier: 'eth-erc20-dit',
        contractAddress: '0xf14922001A2FB8541a433905437ae954419C2439',
        decimals: 8
    },
    {
        symbol: 'DIVX',
        name: 'DIVX',
        marketSymbol: 'divx',
        identifier: 'eth-erc20-divx',
        contractAddress: '0x13f11C9905A08ca76e3e853bE63D4f0944326C72',
        decimals: 18
    },
    {
        symbol: 'DKP',
        name: 'Draggin Karma Points',
        marketSymbol: 'dkp',
        identifier: 'eth-erc20-dkp',
        contractAddress: '0xBA187B09fFA8DDdc80d2571eD3cbC4Be0Af69E0c',
        decimals: 18
    },
    {
        symbol: 'DLT',
        name: 'Agrello',
        marketSymbol: 'dlt',
        identifier: 'eth-erc20-dlt',
        contractAddress: '0x07e3c70653548B04f0A75970C1F81B4CBbFB606f',
        decimals: 18
    },
    {
        symbol: 'DMT',
        name: 'DMarket Token',
        marketSymbol: 'dmt',
        identifier: 'eth-erc20-dmt',
        contractAddress: '0x2ccbFF3A042c68716Ed2a2Cb0c544A9f1d1935E1',
        decimals: 8
    },
    {
        symbol: 'DNA',
        name: 'EncrypGen',
        marketSymbol: 'dna',
        identifier: 'eth-erc20-dna',
        contractAddress: '0x82b0E50478eeaFde392D45D1259Ed1071B6fDa81',
        decimals: 18
    },
    {
        symbol: 'DNT',
        name: 'District0x Network Token',
        marketSymbol: 'dnt',
        identifier: 'eth-erc20-dnt',
        contractAddress: '0x0AbdAce70D3790235af448C88547603b945604ea',
        decimals: 18
    },
    {
        symbol: 'DNX',
        name: 'DenCity',
        marketSymbol: 'dnx',
        identifier: 'eth-erc20-dnx',
        contractAddress: '0xE43E2041dc3786e166961eD9484a5539033d10fB',
        decimals: 18
    },
    {
        symbol: 'DOCK',
        name: 'Dock',
        marketSymbol: 'dock',
        identifier: 'eth-erc20-dock',
        contractAddress: '0xE5Dada80Aa6477e85d09747f2842f7993D0Df71C',
        decimals: 18
    },
    {
        symbol: 'DOR',
        name: 'Dorado',
        marketSymbol: 'dor',
        identifier: 'eth-erc20-dor',
        contractAddress: '0x906b3f8b7845840188Eab53c3f5AD348A787752f',
        decimals: 15
    },
    {
        symbol: 'DOV',
        name: 'Dovu',
        marketSymbol: 'dov',
        identifier: 'eth-erc20-dov',
        contractAddress: '0xac3211a5025414Af2866FF09c23FC18bc97e79b1',
        decimals: 18
    },
    {
        symbol: 'DOW',
        name: 'DOW',
        marketSymbol: 'dow',
        identifier: 'eth-erc20-dow',
        contractAddress: '0xEEF6E90034eEa89E31Eb4B8eaCd323F28A92eaE4',
        decimals: 18
    },
    {
        symbol: 'DOW',
        name: 'DOW',
        marketSymbol: 'dow',
        identifier: 'eth-erc20-dow',
        contractAddress: '0x76974C7B79dC8a6a109Fd71fd7cEb9E40eff5382',
        decimals: 18
    },
    {
        symbol: 'DPP',
        name: 'Digital Assets Power Play',
        marketSymbol: 'dpp',
        identifier: 'eth-erc20-dpp',
        contractAddress: '0x01b3Ec4aAe1B8729529BEB4965F27d008788B0EB',
        decimals: 18
    },
    {
        symbol: 'DREAM',
        name: 'DREAM',
        marketSymbol: 'dream',
        identifier: 'eth-erc20-dream',
        contractAddress: '0x82f4dED9Cec9B5750FBFf5C2185AEe35AfC16587',
        decimals: 6
    },
    {
        symbol: 'DRGN',
        name: 'Dragon',
        marketSymbol: 'drgn',
        identifier: 'eth-erc20-drgn',
        contractAddress: '0x419c4dB4B9e25d6Db2AD9691ccb832C8D9fDA05E',
        decimals: 18
    },
    {
        symbol: 'DROP',
        name: 'Droplex',
        marketSymbol: 'drop',
        identifier: 'eth-erc20-drop',
        contractAddress: '0x3c75226555FC496168d48B88DF83B95F16771F37',
        decimals: 0
    },
    {
        symbol: 'DROP (dropil)',
        name: 'Dropil',
        marketSymbol: 'drop (dropil)',
        identifier: 'eth-erc20-drop (dropil)',
        contractAddress: '0x4672bAD527107471cB5067a887f4656D585a8A31',
        decimals: 18
    },
    {
        symbol: 'DRP',
        name: 'DCorp',
        marketSymbol: 'drp',
        identifier: 'eth-erc20-drp',
        contractAddress: '0x621d78f2EF2fd937BFca696CabaF9A779F59B3Ed',
        decimals: 2
    },
    {
        symbol: 'DRP',
        name: 'Dripcoin',
        marketSymbol: 'drp',
        identifier: 'eth-erc20-drp',
        contractAddress: '0x2799D90C6d44Cb9Aa5fBC377177F16C33E056b82',
        decimals: 0
    },
    {
        symbol: 'DRPU',
        name: 'DCORP Utility',
        marketSymbol: 'drpu',
        identifier: 'eth-erc20-drpu',
        contractAddress: '0xe30e02f049957e2A5907589e06Ba646fB2c321bA',
        decimals: 8
    },
    {
        symbol: 'DRT',
        name: 'DomRaider',
        marketSymbol: 'drt',
        identifier: 'eth-erc20-drt',
        contractAddress: '0x9AF4f26941677C706cfEcf6D3379FF01bB85D5Ab',
        decimals: 8
    },
    {
        symbol: 'DRVH',
        name: 'Driveholic Token',
        marketSymbol: 'drvh',
        identifier: 'eth-erc20-drvh',
        contractAddress: '0x62D4c04644314F35868Ba4c65cc27a77681dE7a9',
        decimals: 18
    },
    {
        symbol: 'DSC',
        name: 'Digital Safe Coin',
        marketSymbol: 'dsc',
        identifier: 'eth-erc20-dsc',
        contractAddress: '0x1e09BD8Cadb441632e441Db3e1D79909EE0A2256',
        decimals: 1
    },
    {
        symbol: 'DSCP',
        name: 'Disciplina Token',
        marketSymbol: 'dscp',
        identifier: 'eth-erc20-dscp',
        contractAddress: '0x03e3f0c25965f13DbbC58246738C183E27b26a56',
        decimals: 18
    },
    {
        symbol: 'DST',
        name: 'Dimensions Strike Token',
        marketSymbol: 'dst',
        identifier: 'eth-erc20-dst',
        contractAddress: '0x68d53441c0e253f76c500e551bdeA3D102206C9a',
        decimals: 18
    },
    {
        symbol: 'DTH',
        name: 'dether',
        marketSymbol: 'dth',
        identifier: 'eth-erc20-dth',
        contractAddress: '0x5adc961D6AC3f7062D2eA45FEFB8D8167d44b190',
        decimals: 18
    },
    {
        symbol: 'DTR',
        name: 'Dynamic Trading Rights',
        marketSymbol: 'dtr',
        identifier: 'eth-erc20-dtr',
        contractAddress: '0xd234BF2410a0009dF9c3C63b610c09738f18ccD7',
        decimals: 8
    },
    {
        symbol: 'DTRC',
        name: 'Datarius Credit',
        marketSymbol: 'dtrc',
        identifier: 'eth-erc20-dtrc',
        contractAddress: '0xc20464e0C373486d2B3335576e83a218b1618A5E',
        decimals: 18
    },
    {
        symbol: 'DTT',
        name: 'Delphi Tech Token',
        marketSymbol: 'dtt',
        identifier: 'eth-erc20-dtt',
        contractAddress: '0xf9F7c29CFdf19FCf1f2AA6B84aA367Bcf1bD1676',
        decimals: 18
    },
    {
        symbol: 'DTx',
        name: 'DigitalTicks',
        marketSymbol: 'dtx',
        identifier: 'eth-erc20-dtx',
        contractAddress: '0x82fdedfB7635441aA5A92791D001fA7388da8025',
        decimals: 18
    },
    {
        symbol: 'DTX',
        name: 'DaTa eXchange Token',
        marketSymbol: 'dtx',
        identifier: 'eth-erc20-dtx',
        contractAddress: '0x765f0C16D1Ddc279295c1a7C24B0883F62d33F75',
        decimals: 18
    },
    {
        symbol: 'DUBI',
        name: 'DUBI',
        marketSymbol: 'dubi',
        identifier: 'eth-erc20-dubi',
        contractAddress: '0xEd7fEA78C393cF7B17B152A8c2D0CD97aC31790B',
        decimals: 18
    },
    {
        symbol: 'DUBI',
        name: 'Decentralized Universal Basic Income',
        marketSymbol: 'dubi',
        identifier: 'eth-erc20-dubi',
        contractAddress: '0xD4CffeeF10F60eCA581b5E1146B5Aca4194a4C3b',
        decimals: 18
    },
    {
        symbol: 'DUBI',
        name: 'Decentralized Universal Basic Income',
        marketSymbol: 'dubi',
        identifier: 'eth-erc20-dubi',
        contractAddress: '0x9c6Fa42209169bCeA032e401188a6fc3e9C9f59c',
        decimals: 18
    },
    {
        symbol: 'DXT',
        name: 'Datawallet',
        marketSymbol: 'dxt',
        identifier: 'eth-erc20-dxt',
        contractAddress: '0x8dB54ca569D3019A2ba126D03C37c44b5eF81EF6',
        decimals: 8
    },
    {
        symbol: 'E₹',
        name: 'eRupee',
        marketSymbol: 'e₹',
        identifier: 'eth-erc20-e₹',
        contractAddress: '0xb67734521eAbBE9C773729dB73E16CC2dfb20A58',
        decimals: 2
    },
    {
        symbol: 'E4ROW',
        name: 'E4ROW',
        marketSymbol: 'e4row',
        identifier: 'eth-erc20-e4row',
        contractAddress: '0xCe5c603C78d047Ef43032E96b5B785324f753a4F',
        decimals: 2
    },
    {
        symbol: 'EAGLE',
        name: 'EagleCoin',
        marketSymbol: 'eagle',
        identifier: 'eth-erc20-eagle',
        contractAddress: '0x994f0DffdbaE0BbF09b652D6f11A493fd33F42B9',
        decimals: 18
    },
    {
        symbol: 'EARTH',
        name: 'Earth Token',
        marketSymbol: 'earth',
        identifier: 'eth-erc20-earth',
        contractAddress: '0x900b4449236a7bb26b286601dD14d2bDe7a6aC6c',
        decimals: 8
    },
    {
        symbol: 'EBC',
        name: 'EBCoin',
        marketSymbol: 'ebc',
        identifier: 'eth-erc20-ebc',
        contractAddress: '0x31f3D9D1BeCE0c033fF78fA6DA60a6048F3E13c5',
        decimals: 18
    },
    {
        symbol: 'eBCH',
        name: 'eBCH',
        marketSymbol: 'ebch',
        identifier: 'eth-erc20-ebch',
        contractAddress: '0xaFC39788c51f0c1Ff7B55317f3e70299e521Fff6',
        decimals: 8
    },
    {
        symbol: 'EBTC',
        name: 'eBitcoin',
        marketSymbol: 'ebtc',
        identifier: 'eth-erc20-ebtc',
        contractAddress: '0xeB7C20027172E5d143fB030d50f91Cece2D1485D',
        decimals: 8
    },
    {
        symbol: 'ECN',
        name: 'ECN',
        marketSymbol: 'ecn',
        identifier: 'eth-erc20-ecn',
        contractAddress: '0xa578aCc0cB7875781b7880903F4594D13cFa8B98',
        decimals: 2
    },
    {
        symbol: 'ECO2',
        name: 'EtherCO2',
        marketSymbol: 'eco2',
        identifier: 'eth-erc20-eco2',
        contractAddress: '0x17F93475d2A978f527c3f7c44aBf44AdfBa60D5C',
        decimals: 2
    },
    {
        symbol: 'ECOM',
        name: 'Omnitude',
        marketSymbol: 'ecom',
        identifier: 'eth-erc20-ecom',
        contractAddress: '0x171D750d42d661B62C277a6B486ADb82348c3Eca',
        decimals: 18
    },
    {
        symbol: 'ECP',
        name: 'ECRYPTO COIN',
        marketSymbol: 'ecp',
        identifier: 'eth-erc20-ecp',
        contractAddress: '0xAEA1C18A992984831002D0cf90E291FB52d72649',
        decimals: 18
    },
    {
        symbol: 'ECP',
        name: 'ECrypto Coin',
        marketSymbol: 'ecp',
        identifier: 'eth-erc20-ecp',
        contractAddress: '0x8869b1F9bC8B246a4D7220F834E56ddfdd8255E7',
        decimals: 18
    },
    {
        symbol: 'EDC',
        name: 'Education Credits',
        marketSymbol: 'edc',
        identifier: 'eth-erc20-edc',
        contractAddress: '0xFA1DE2Ee97e4c10C94C91Cb2b5062b89Fb140b82',
        decimals: 6
    },
    {
        symbol: 'EDG',
        name: 'Edgeless',
        marketSymbol: 'edg',
        identifier: 'eth-erc20-edg',
        contractAddress: '0x08711D3B02C8758F2FB3ab4e80228418a7F8e39c',
        decimals: 0
    },
    {
        symbol: 'EDO',
        name: 'Eidoo',
        marketSymbol: 'edo',
        identifier: 'eth-erc20-edo',
        contractAddress: '0xCeD4E93198734dDaFf8492d525Bd258D49eb388E',
        decimals: 18
    },
    {
        symbol: 'EDR',
        name: 'Endor Protocol Token',
        marketSymbol: 'edr',
        identifier: 'eth-erc20-edr',
        contractAddress: '0xc528c28FEC0A90C083328BC45f587eE215760A0F',
        decimals: 18
    },
    {
        symbol: 'EDU',
        name: 'EDU Token',
        marketSymbol: 'edu',
        identifier: 'eth-erc20-edu',
        contractAddress: '0x2A22e5cCA00a3D63308fa39f29202eB1b39eEf52',
        decimals: 18
    },
    {
        symbol: 'eGAS',
        name: 'ETH GAS',
        marketSymbol: 'egas',
        identifier: 'eth-erc20-egas',
        contractAddress: '0xb53A96bcBdD9CF78dfF20BAB6C2be7bAec8f00f8',
        decimals: 8
    },
    {
        symbol: 'EGT',
        name: 'Egretia Token',
        marketSymbol: 'egt',
        identifier: 'eth-erc20-egt',
        contractAddress: '0x8e1b448EC7aDFc7Fa35FC2e885678bD323176E34',
        decimals: 18
    },
    {
        symbol: 'EHT',
        name: 'EasyHomes',
        marketSymbol: 'eht',
        identifier: 'eth-erc20-eht',
        contractAddress: '0xf9F0FC7167c311Dd2F1e21E9204F87EBA9012fB2',
        decimals: 8
    },
    {
        symbol: 'EKO',
        name: 'EchoLink',
        marketSymbol: 'eko',
        identifier: 'eth-erc20-eko',
        contractAddress: '0xa6a840E50bCaa50dA017b91A0D86B8b2d41156EE',
        decimals: 18
    },
    {
        symbol: 'EKT',
        name: 'EDUCare',
        marketSymbol: 'ekt',
        identifier: 'eth-erc20-ekt',
        contractAddress: '0xBAb165dF9455AA0F2AeD1f2565520B91DDadB4c8',
        decimals: 8
    },
    {
        symbol: 'ELEC',
        name: 'Electrify.Asia',
        marketSymbol: 'elec',
        identifier: 'eth-erc20-elec',
        contractAddress: '0xD49ff13661451313cA1553fd6954BD1d9b6E02b9',
        decimals: 18
    },
    {
        symbol: 'ELF',
        name: 'ELF Token',
        marketSymbol: 'elf',
        identifier: 'eth-erc20-elf',
        contractAddress: '0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e',
        decimals: 18
    },
    {
        symbol: 'ELIX',
        name: 'Elixir Token',
        marketSymbol: 'elix',
        identifier: 'eth-erc20-elix',
        contractAddress: '0xc8C6A31A4A806d3710A7B38b7B296D2fABCCDBA8',
        decimals: 18
    },
    {
        symbol: 'ELTCOIN',
        name: 'ELTCOIN',
        marketSymbol: 'eltcoin',
        identifier: 'eth-erc20-eltcoin',
        contractAddress: '0x44197A4c44D6A059297cAf6be4F7e172BD56Caaf',
        decimals: 8
    },
    {
        symbol: 'ELY',
        name: 'ELYCOIN',
        marketSymbol: 'ely',
        identifier: 'eth-erc20-ely',
        contractAddress: '0xa95592DCFfA3C080B4B40E459c5f5692F67DB7F8',
        decimals: 18
    },
    {
        symbol: 'EMB',
        name: 'Emblem',
        marketSymbol: 'emb',
        identifier: 'eth-erc20-emb',
        contractAddress: '0x28B94F58B11aC945341329dBf2e5EF7F8Bd44225',
        decimals: 8
    },
    {
        symbol: 'EMON',
        name: 'Etheremon',
        marketSymbol: 'emon',
        identifier: 'eth-erc20-emon',
        contractAddress: '0xb67b88a25708a35AE7c2d736D398D268CE4f7F83',
        decimals: 8
    },
    {
        symbol: 'EMONT',
        name: 'Etheremon Token',
        marketSymbol: 'emont',
        identifier: 'eth-erc20-emont',
        contractAddress: '0x95dAaaB98046846bF4B2853e23cba236fa394A31',
        decimals: 8
    },
    {
        symbol: 'EMT',
        name: 'easyMINE Token',
        marketSymbol: 'emt',
        identifier: 'eth-erc20-emt',
        contractAddress: '0x9501BFc48897DCEEadf73113EF635d2fF7ee4B97',
        decimals: 18
    },
    {
        symbol: 'EMV',
        name: 'EMovieVenture',
        marketSymbol: 'emv',
        identifier: 'eth-erc20-emv',
        contractAddress: '0xB802b24E0637c2B87D2E8b7784C055BBE921011a',
        decimals: 2
    },
    {
        symbol: 'ENC',
        name: 'Ethernet.Cash',
        marketSymbol: 'enc',
        identifier: 'eth-erc20-enc',
        contractAddress: '0x039F5050dE4908f9b5ddF40A4F3Aa3f329086387',
        decimals: 18
    },
    {
        symbol: 'ENG',
        name: 'Enigma',
        marketSymbol: 'eng',
        identifier: 'eth-erc20-eng',
        contractAddress: '0xf0Ee6b27b759C9893Ce4f094b49ad28fd15A23e4',
        decimals: 8
    },
    {
        symbol: 'ENGT',
        name: 'Engagement Token',
        marketSymbol: 'engt',
        identifier: 'eth-erc20-engt',
        contractAddress: '0x5DBAC24e98E2a4f43ADC0DC82Af403fca063Ce2c',
        decimals: 18
    },
    {
        symbol: 'ENJ',
        name: 'ENJIN',
        marketSymbol: 'enj',
        identifier: 'eth-erc20-enj',
        contractAddress: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c',
        decimals: 18
    },
    {
        symbol: 'ENTRP',
        name: 'Hut34 Entropy Token',
        marketSymbol: 'entrp',
        identifier: 'eth-erc20-entrp',
        contractAddress: '0x5BC7e5f0Ab8b2E10D2D0a3F21739FCe62459aeF3',
        decimals: 18
    },
    {
        symbol: 'EOS',
        name: 'EOS',
        marketSymbol: 'eos',
        identifier: 'eth-erc20-eos',
        contractAddress: '0x86Fa049857E0209aa7D9e616F7eb3b3B78ECfdb0',
        decimals: 18
    },
    {
        symbol: 'eosDAC',
        name: 'eosDAC',
        marketSymbol: 'eosdac',
        identifier: 'eth-erc20-eosdac',
        contractAddress: '0x7e9e431a0B8c4D532C745B1043c7FA29a48D4fBa',
        decimals: 18
    },
    {
        symbol: 'EPX',
        name: 'ethPoker.io EPX',
        marketSymbol: 'epx',
        identifier: 'eth-erc20-epx',
        contractAddress: '0x35BAA72038F127f9f8C8f9B491049f64f377914d',
        decimals: 4
    },
    {
        symbol: 'EPY',
        name: 'Emphy',
        marketSymbol: 'epy',
        identifier: 'eth-erc20-epy',
        contractAddress: '0x50Ee674689d75C0f88E8f83cfE8c4B69E8fd590D',
        decimals: 8
    },
    {
        symbol: 'EQL',
        name: 'Equal',
        marketSymbol: 'eql',
        identifier: 'eth-erc20-eql',
        contractAddress: '0x47dD62D4D075DeAd71d0e00299fc56a2d747beBb',
        decimals: 18
    },
    {
        symbol: 'ERO',
        name: 'Eroscoin',
        marketSymbol: 'ero',
        identifier: 'eth-erc20-ero',
        contractAddress: '0x74CEDa77281b339142A36817Fa5F9E29412bAb85',
        decimals: 8
    },
    {
        symbol: 'ERT',
        name: 'Eristica',
        marketSymbol: 'ert',
        identifier: 'eth-erc20-ert',
        contractAddress: '0x92A5B04D0ED5D94D7a193d1d334D3D16996f4E13',
        decimals: 18
    },
    {
        symbol: 'ESZ',
        name: 'ESZCoin',
        marketSymbol: 'esz',
        identifier: 'eth-erc20-esz',
        contractAddress: '0xe8A1Df958bE379045E2B46a31A98B93A2eCDfDeD',
        decimals: 18
    },
    {
        symbol: 'ETBS',
        name: 'Ethbits',
        marketSymbol: 'etbs',
        identifier: 'eth-erc20-etbs',
        contractAddress: '0x1B9743f556D65e757c4c650B4555bAF354cB8bd3',
        decimals: 12
    },
    {
        symbol: 'ETCH',
        name: 'ETCH',
        marketSymbol: 'etch',
        identifier: 'eth-erc20-etch',
        contractAddress: '0xDd74a7A3769fA72561B3A69e65968F49748c690c',
        decimals: 18
    },
    {
        symbol: 'ETG',
        name: 'Ethereum Gold',
        marketSymbol: 'etg',
        identifier: 'eth-erc20-etg',
        contractAddress: '0x28c8d01FF633eA9Cd8fc6a451D7457889E698de6',
        decimals: 0
    },
    {
        symbol: 'ETHB',
        name: 'EtherBTC',
        marketSymbol: 'ethb',
        identifier: 'eth-erc20-ethb',
        contractAddress: '0x3a26746Ddb79B1B8e4450e3F4FFE3285A307387E',
        decimals: 8
    },
    {
        symbol: 'ETHD',
        name: 'Ethereum Dark',
        marketSymbol: 'ethd',
        identifier: 'eth-erc20-ethd',
        contractAddress: '0xdbFb423E9bBF16294388e07696A5120E4CeBA0C5',
        decimals: 18
    },
    {
        symbol: 'ETK',
        name: 'EnergiToken',
        marketSymbol: 'etk',
        identifier: 'eth-erc20-etk',
        contractAddress: '0x3c4a3ffd813a107febd57B2f01BC344264D90FdE',
        decimals: 2
    },
    {
        symbol: 'ETR',
        name: 'Etheruem Risen',
        marketSymbol: 'etr',
        identifier: 'eth-erc20-etr',
        contractAddress: '0x6927C69fb4daf2043fbB1Cb7b86c5661416bea29',
        decimals: 18
    },
    {
        symbol: 'EURS',
        name: 'STASIS EURS',
        marketSymbol: 'eurs',
        identifier: 'eth-erc20-eurs',
        contractAddress: '0xdB25f211AB05b1c97D595516F45794528a807ad8',
        decimals: 2
    },
    {
        symbol: 'EURT',
        name: 'EUR Tether (erc20)',
        marketSymbol: 'eurt',
        identifier: 'eth-erc20-eurt',
        contractAddress: '0xAbdf147870235FcFC34153828c769A70B3FAe01F',
        decimals: 6
    },
    {
        symbol: 'eUSD',
        name: 'Ether-Backed USD Nomins (erc20)',
        marketSymbol: 'eusd',
        identifier: 'eth-erc20-eusd',
        contractAddress: '0x523630976eB6147621B5c31c781eBe2Ec2a806E0',
        decimals: 18
    },
    {
        symbol: 'EVC',
        name: 'EventChain',
        marketSymbol: 'evc',
        identifier: 'eth-erc20-evc',
        contractAddress: '0xb62d18DeA74045E822352CE4B3EE77319DC5ff2F',
        decimals: 18
    },
    {
        symbol: 'EVE',
        name: 'Devery',
        marketSymbol: 'eve',
        identifier: 'eth-erc20-eve',
        contractAddress: '0x923108a439C4e8C2315c4f6521E5cE95B44e9B4c',
        decimals: 18
    },
    {
        symbol: 'EVN',
        name: 'EvenCoin',
        marketSymbol: 'evn',
        identifier: 'eth-erc20-evn',
        contractAddress: '0x68909e586eeAC8F47315e84B4c9788DD54Ef65Bb',
        decimals: 18
    },
    {
        symbol: 'EVN',
        name: 'Envion AG',
        marketSymbol: 'evn',
        identifier: 'eth-erc20-evn',
        contractAddress: '0xd780Ae2Bf04cD96E577D3D014762f831d97129d0',
        decimals: 18
    },
    {
        symbol: 'EVX',
        name: 'EVX Token',
        marketSymbol: 'evx',
        identifier: 'eth-erc20-evx',
        contractAddress: '0xf3Db5Fa2C66B7aF3Eb0C0b782510816cbe4813b8',
        decimals: 4
    },
    {
        symbol: 'EWO',
        name: 'EWO Token',
        marketSymbol: 'ewo',
        identifier: 'eth-erc20-ewo',
        contractAddress: '0x444997b7e7fC830E20089afea3078cd518fCF2A2',
        decimals: 18
    },
    {
        symbol: 'EXC',
        name: 'Eximchain Token',
        marketSymbol: 'exc',
        identifier: 'eth-erc20-exc',
        contractAddress: '0x00c4B398500645eb5dA00a1a379a88B11683ba01',
        decimals: 18
    },
    {
        symbol: 'EXMR',
        name: 'eXMRcoin',
        marketSymbol: 'exmr',
        identifier: 'eth-erc20-exmr',
        contractAddress: '0xc98e0639c6d2EC037A615341c369666B110e80E5',
        decimals: 8
    },
    {
        symbol: 'EXRN',
        name: 'EXRNchain',
        marketSymbol: 'exrn',
        identifier: 'eth-erc20-exrn',
        contractAddress: '0xe469c4473af82217B30CF17b10BcDb6C8c796e75',
        decimals: 0
    },
    {
        symbol: 'EXY',
        name: 'Experty',
        marketSymbol: 'exy',
        identifier: 'eth-erc20-exy',
        contractAddress: '0x5c743a35E903F6c584514ec617ACEe0611Cf44f3',
        decimals: 18
    },
    {
        symbol: 'EZT',
        name: 'EZToken',
        marketSymbol: 'ezt',
        identifier: 'eth-erc20-ezt',
        contractAddress: '0x5e6016Ae7d7C49d347dcF834860B9f3Ee282812b',
        decimals: 8
    },
    {
        symbol: 'FABA',
        name: 'FABA',
        marketSymbol: 'faba',
        identifier: 'eth-erc20-faba',
        contractAddress: '0x0a1D2fF7156a48131553CF381F220bbedB4eFa37',
        decimals: 18
    },
    {
        symbol: 'FACE',
        name: 'Faceter',
        marketSymbol: 'face',
        identifier: 'eth-erc20-face',
        contractAddress: '0x1CCAA0F2a7210d76E1fDec740d5F323E2E1b1672',
        decimals: 18
    },
    {
        symbol: 'FAM',
        name: 'FAM',
        marketSymbol: 'fam',
        identifier: 'eth-erc20-fam',
        contractAddress: '0x190e569bE071F40c704e15825F285481CB74B6cC',
        decimals: 12
    },
    {
        symbol: 'FAN',
        name: 'Fan Token',
        marketSymbol: 'fan',
        identifier: 'eth-erc20-fan',
        contractAddress: '0x90162f41886c0946D09999736f1C15c8a105A421',
        decimals: 18
    },
    {
        symbol: 'FANX',
        name: 'FANX Token',
        marketSymbol: 'fanx',
        identifier: 'eth-erc20-fanx',
        contractAddress: '0x7dCB3B2356C822d3577D4d060D0D5D78C860488C',
        decimals: 18
    },
    {
        symbol: 'FANX',
        name: 'FANX Token',
        marketSymbol: 'fanx',
        identifier: 'eth-erc20-fanx',
        contractAddress: '0x7f6715c3FC4740A02F70De85B9FD50ac6001fEd9',
        decimals: 18
    },
    {
        symbol: 'FDZ',
        name: 'Friendz',
        marketSymbol: 'fdz',
        identifier: 'eth-erc20-fdz',
        contractAddress: '0x23352036E911A22Cfc692B5E2E196692658ADED9',
        decimals: 18
    },
    {
        symbol: 'FGP',
        name: 'FingerPrint',
        marketSymbol: 'fgp',
        identifier: 'eth-erc20-fgp',
        contractAddress: '0xd9A8cfe21C232D485065cb62a96866799d4645f7',
        decimals: 18
    },
    {
        symbol: 'FID',
        name: 'Fidelium',
        marketSymbol: 'fid',
        identifier: 'eth-erc20-fid',
        contractAddress: '0x52fb36C83ad33C1824912FC81071cA5eEB8AB390',
        decimals: 18
    },
    {
        symbol: 'FIH',
        name: 'FidelityHouse Token',
        marketSymbol: 'fih',
        identifier: 'eth-erc20-fih',
        contractAddress: '0xdfC3e857c8cCEA7657E0ed98AB92e048e38deE0f',
        decimals: 18
    },
    {
        symbol: 'FKX',
        name: 'Knoxstertoken',
        marketSymbol: 'fkx',
        identifier: 'eth-erc20-fkx',
        contractAddress: '0x009e864923b49263c7F10D19B7f8Ab7a9A5AAd33',
        decimals: 18
    },
    {
        symbol: 'FLIXX',
        name: 'Flixxo',
        marketSymbol: 'flixx',
        identifier: 'eth-erc20-flixx',
        contractAddress: '0xf04a8ac553FceDB5BA99A64799155826C136b0Be',
        decimals: 18
    },
    {
        symbol: 'FLMC',
        name: 'Filmscoin',
        marketSymbol: 'flmc',
        identifier: 'eth-erc20-flmc',
        contractAddress: '0x04cC783b450b8D11F3C7d00DD03fDF7FB51fE9F2',
        decimals: 18
    },
    {
        symbol: 'FLMC',
        name: 'Filmscoin',
        marketSymbol: 'flmc',
        identifier: 'eth-erc20-flmc',
        contractAddress: '0x5976F7dac1525eF3277836043bA474a35E6B4272',
        decimals: 0
    },
    {
        symbol: 'FLOT',
        name: 'Fire Lotto',
        marketSymbol: 'flot',
        identifier: 'eth-erc20-flot',
        contractAddress: '0x049399a6B048D52971F7D122aE21A1532722285F',
        decimals: 18
    },
    {
        symbol: 'FLP',
        name: 'FLIP Token',
        marketSymbol: 'flp',
        identifier: 'eth-erc20-flp',
        contractAddress: '0x3a1Bda28AdB5B0a812a7CF10A1950c920F79BcD3',
        decimals: 18
    },
    {
        symbol: 'FLR',
        name: 'Flair Coin',
        marketSymbol: 'flr',
        identifier: 'eth-erc20-flr',
        contractAddress: '0x9aeFBE0b3C3ba9Eab262CB9856E8157AB7648e09',
        decimals: 18
    },
    {
        symbol: 'FLUZ',
        name: 'Fluz Fluz Global',
        marketSymbol: 'fluz',
        identifier: 'eth-erc20-fluz',
        contractAddress: '0x954b5De09A55e59755aCBda29e1Eb74A45D30175',
        decimals: 18
    },
    {
        symbol: 'FLX',
        name: 'BitFlux',
        marketSymbol: 'flx',
        identifier: 'eth-erc20-flx',
        contractAddress: '0x70b147E01E9285E7cE68B9BA437Fe3a9190E756a',
        decimals: 18
    },
    {
        symbol: 'FMF',
        name: 'Formosa Financial Token',
        marketSymbol: 'fmf',
        identifier: 'eth-erc20-fmf',
        contractAddress: '0xb4d0FDFC8497AEF97d3c2892AE682eE06064A2BC',
        decimals: 18
    },
    {
        symbol: 'FND',
        name: 'FundRequest',
        marketSymbol: 'fnd',
        identifier: 'eth-erc20-fnd',
        contractAddress: '0x4DF47B4969B2911C966506E3592c41389493953b',
        decimals: 18
    },
    {
        symbol: 'FNKOS',
        name: 'FNKOS',
        marketSymbol: 'fnkos',
        identifier: 'eth-erc20-fnkos',
        contractAddress: '0x0707681F344dEB24184037fC0228856F2137B02E',
        decimals: 18
    },
    {
        symbol: 'FNTB',
        name: 'Fintab',
        marketSymbol: 'fntb',
        identifier: 'eth-erc20-fntb',
        contractAddress: '0xbD4B60a138b3fce3584EA01f50c0908c18f9677A',
        decimals: 8
    },
    {
        symbol: 'FOOD',
        name: 'FoodCoin',
        marketSymbol: 'food',
        identifier: 'eth-erc20-food',
        contractAddress: '0x2a093BcF0C98Ef744Bb6F69D74f2F85605324290',
        decimals: 8
    },
    {
        symbol: 'FORK',
        name: 'GastroAdvisorToken',
        marketSymbol: 'fork',
        identifier: 'eth-erc20-fork',
        contractAddress: '0x5bB1632fA0023e1AA76a1AE92B4635C8DBa49Fa2',
        decimals: 18
    },
    {
        symbol: 'FOTA',
        name: 'Fortuna',
        marketSymbol: 'fota',
        identifier: 'eth-erc20-fota',
        contractAddress: '0x4270bb238f6DD8B1c3ca01f96CA65b2647c06D3C',
        decimals: 18
    },
    {
        symbol: 'FR8',
        name: 'Fr8 Network',
        marketSymbol: 'fr8',
        identifier: 'eth-erc20-fr8',
        contractAddress: '0x8c39afDf7B17F12c553208555E51ab86E69C35aA',
        decimals: 8
    },
    {
        symbol: 'FRD',
        name: 'FARAD Cryptoken',
        marketSymbol: 'frd',
        identifier: 'eth-erc20-frd',
        contractAddress: '0x0ABeFb7611Cb3A01EA3FaD85f33C3C934F8e2cF4',
        decimals: 18
    },
    {
        symbol: 'FREC',
        name: 'Freyrchain',
        marketSymbol: 'frec',
        identifier: 'eth-erc20-frec',
        contractAddress: '0x17e67d1CB4e349B9CA4Bc3e17C7DF2a397A7BB64',
        decimals: 18
    },
    {
        symbol: 'FRV',
        name: 'Fitrova',
        marketSymbol: 'frv',
        identifier: 'eth-erc20-frv',
        contractAddress: '0x48DF4E0296f908CEAb0428A5182D19B31fC037d6',
        decimals: 8
    },
    {
        symbol: 'FSN',
        name: 'Fusion',
        marketSymbol: 'fsn',
        identifier: 'eth-erc20-fsn',
        contractAddress: '0xD0352a019e9AB9d757776F532377aAEbd36Fd541',
        decimals: 18
    },
    {
        symbol: 'FT',
        name: 'Fabric Token',
        marketSymbol: 'ft',
        identifier: 'eth-erc20-ft',
        contractAddress: '0x78a73B6CBc5D183CE56e786f6e905CaDEC63547B',
        decimals: 18
    },
    {
        symbol: 'FTC',
        name: 'FTC',
        marketSymbol: 'ftc',
        identifier: 'eth-erc20-ftc',
        contractAddress: '0xe6f74dcfa0E20883008d8C16b6d9a329189D0C30',
        decimals: 2
    },
    {
        symbol: 'FTI',
        name: 'FansTime',
        marketSymbol: 'fti',
        identifier: 'eth-erc20-fti',
        contractAddress: '0x943ED852DadB5C3938ECdC6883718df8142DE4C8',
        decimals: 18
    },
    {
        symbol: 'FTR',
        name: 'Futourist Token',
        marketSymbol: 'ftr',
        identifier: 'eth-erc20-ftr',
        contractAddress: '0x2023DCf7c438c8C8C0B0F28dBaE15520B4f3Ee20',
        decimals: 18
    },
    {
        symbol: 'FTT',
        name: 'FarmaTrust Token',
        marketSymbol: 'ftt',
        identifier: 'eth-erc20-ftt',
        contractAddress: '0x2AEC18c5500f21359CE1BEA5Dc1777344dF4C0Dc',
        decimals: 18
    },
    {
        symbol: 'FTX',
        name: 'FintruX Network',
        marketSymbol: 'ftx',
        identifier: 'eth-erc20-ftx',
        contractAddress: '0xd559f20296FF4895da39b5bd9ADd54b442596a61',
        decimals: 18
    },
    {
        symbol: 'FTXT',
        name: 'FUTURAX',
        marketSymbol: 'ftxt',
        identifier: 'eth-erc20-ftxt',
        contractAddress: '0x41875C2332B0877cDFAA699B641402b7D4642c32',
        decimals: 8
    },
    {
        symbol: 'FUCK',
        name: 'Finally Usable Crypto Karma',
        marketSymbol: 'fuck',
        identifier: 'eth-erc20-fuck',
        contractAddress: '0x65Be44C747988fBF606207698c944Df4442efE19',
        decimals: 4
    },
    {
        symbol: 'FUCK',
        name: 'FinallyUsableCryptoKarma',
        marketSymbol: 'fuck',
        identifier: 'eth-erc20-fuck',
        contractAddress: '0xAb16E0d25c06CB376259cc18C1de4ACA57605589',
        decimals: 4
    },
    {
        symbol: 'FUEL',
        name: 'Etherparty FUEL',
        marketSymbol: 'fuel',
        identifier: 'eth-erc20-fuel',
        contractAddress: '0xEA38eAa3C86c8F9B751533Ba2E562deb9acDED40',
        decimals: 18
    },
    {
        symbol: 'FUN',
        name: 'Funfair',
        marketSymbol: 'fun',
        identifier: 'eth-erc20-fun',
        contractAddress: '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b',
        decimals: 8
    },
    {
        symbol: 'FXC',
        name: 'FUTURAX',
        marketSymbol: 'fxc',
        identifier: 'eth-erc20-fxc',
        contractAddress: '0xc92D6E3E64302C59d734f3292E2A13A13D7E1817',
        decimals: 8
    },
    {
        symbol: 'FXT',
        name: 'FuzeX',
        marketSymbol: 'fxt',
        identifier: 'eth-erc20-fxt',
        contractAddress: '0x1829aA045E21E0D59580024A951DB48096e01782',
        decimals: 18
    },
    {
        symbol: 'FYN',
        name: 'Fund Yourself Now',
        marketSymbol: 'fyn',
        identifier: 'eth-erc20-fyn',
        contractAddress: '0x88FCFBc22C6d3dBaa25aF478C578978339BDe77a',
        decimals: 18
    },
    {
        symbol: 'FYP',
        name: 'FlypMe',
        marketSymbol: 'fyp',
        identifier: 'eth-erc20-fyp',
        contractAddress: '0x8F0921f30555624143d427b340b1156914882C10',
        decimals: 18
    },
    {
        symbol: 'Fzcoin',
        name: 'Frozencoin Network',
        marketSymbol: 'fzcoin',
        identifier: 'eth-erc20-fzcoin',
        contractAddress: '0xE5aeE163513119F4F750376C718766B40fA37A5F',
        decimals: 18
    },
    {
        symbol: 'GAM',
        name: 'Gambit',
        marketSymbol: 'gam',
        identifier: 'eth-erc20-gam',
        contractAddress: '0xF67451Dc8421F0e0afEB52faa8101034ed081Ed9',
        decimals: 8
    },
    {
        symbol: 'GANA',
        name: 'GANA',
        marketSymbol: 'gana',
        identifier: 'eth-erc20-gana',
        contractAddress: '0xc0EA6306F6360FE7dCAB65D16Bf1a3AF92C79Aa2',
        decimals: 18
    },
    {
        symbol: 'GANA',
        name: 'GANA',
        marketSymbol: 'gana',
        identifier: 'eth-erc20-gana',
        contractAddress: '0x6754e21b9EAa053c62d7854dD6561ae451B0cBCf',
        decimals: 18
    },
    {
        symbol: 'GAT',
        name: 'Global Awards Token',
        marketSymbol: 'gat',
        identifier: 'eth-erc20-gat',
        contractAddress: '0x687174f8C49ceb7729D925C3A961507ea4Ac7b28',
        decimals: 18
    },
    {
        symbol: 'GAVEL',
        name: 'GAVEL',
        marketSymbol: 'gavel',
        identifier: 'eth-erc20-gavel',
        contractAddress: '0x708876f486e448Ee89eB332bFbC8E593553058b9',
        decimals: 18
    },
    {
        symbol: 'GBT',
        name: 'GBT',
        marketSymbol: 'gbt',
        identifier: 'eth-erc20-gbt',
        contractAddress: '0x7585F835ae2d522722d2684323a0ba83401f32f5',
        decimals: 18
    },
    {
        symbol: 'GBX',
        name: 'Globitex',
        marketSymbol: 'gbx',
        identifier: 'eth-erc20-gbx',
        contractAddress: '0x12fCd6463E66974cF7bBC24FFC4d40d6bE458283',
        decimals: 18
    },
    {
        symbol: 'GCP',
        name: 'Globcoin Crypto Platform',
        marketSymbol: 'gcp',
        identifier: 'eth-erc20-gcp',
        contractAddress: '0xdb0F69306FF8F949f258E83f6b87ee5D052d0b23',
        decimals: 18
    },
    {
        symbol: 'GEE',
        name: 'Geens NPO',
        marketSymbol: 'gee',
        identifier: 'eth-erc20-gee',
        contractAddress: '0x4F4f0Db4de903B88f2B1a2847971E231D54F8fd3',
        decimals: 8
    },
    {
        symbol: 'GELD',
        name: 'GELD',
        marketSymbol: 'geld',
        identifier: 'eth-erc20-geld',
        contractAddress: '0x24083Bb30072643C3bB90B44B7285860a755e687',
        decimals: 18
    },
    {
        symbol: 'GEM',
        name: 'Gems',
        marketSymbol: 'gem',
        identifier: 'eth-erc20-gem',
        contractAddress: '0xc7BbA5b765581eFb2Cdd2679DB5Bea9eE79b201f',
        decimals: 18
    },
    {
        symbol: 'GEN',
        name: 'DAOstack',
        marketSymbol: 'gen',
        identifier: 'eth-erc20-gen',
        contractAddress: '0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf',
        decimals: 18
    },
    {
        symbol: 'GENE',
        name: 'Parkgene',
        marketSymbol: 'gene',
        identifier: 'eth-erc20-gene',
        contractAddress: '0x6DD4e4Aad29A40eDd6A409b9c1625186C9855b4D',
        decimals: 8
    },
    {
        symbol: 'GET',
        name: 'GET Protocol',
        marketSymbol: 'get',
        identifier: 'eth-erc20-get',
        contractAddress: '0x8a854288a5976036A725879164Ca3e91d30c6A1B',
        decimals: 18
    },
    {
        symbol: 'GIF',
        name: 'GIFcoin Token',
        marketSymbol: 'gif',
        identifier: 'eth-erc20-gif',
        contractAddress: '0xFcD862985628b254061F7A918035B80340D045d3',
        decimals: 18
    },
    {
        symbol: 'GIM',
        name: 'Gimli',
        marketSymbol: 'gim',
        identifier: 'eth-erc20-gim',
        contractAddress: '0xaE4f56F072c34C0a65B3ae3E4DB797D831439D93',
        decimals: 8
    },
    {
        symbol: 'GLA',
        name: 'Gladius',
        marketSymbol: 'gla',
        identifier: 'eth-erc20-gla',
        contractAddress: '0x71D01dB8d6a2fBEa7f8d434599C237980C234e4C',
        decimals: 8
    },
    {
        symbol: 'GMT',
        name: 'GMT',
        marketSymbol: 'gmt',
        identifier: 'eth-erc20-gmt',
        contractAddress: '0xb3Bd49E28f8F832b8d1E246106991e546c323502',
        decimals: 18
    },
    {
        symbol: 'GNO',
        name: 'Gnosis',
        marketSymbol: 'gno',
        identifier: 'eth-erc20-gno',
        contractAddress: '0x6810e776880C02933D47DB1b9fc05908e5386b96',
        decimals: 18
    },
    {
        symbol: 'GNT',
        name: 'Golem',
        marketSymbol: 'gnt',
        identifier: 'eth-erc20-gnt',
        contractAddress: '0xa74476443119A942dE498590Fe1f2454d7D4aC0d',
        decimals: 18
    },
    {
        symbol: 'GNX',
        name: 'Genaro Network',
        marketSymbol: 'gnx',
        identifier: 'eth-erc20-gnx',
        contractAddress: '0x6EC8a24CaBdc339A06a172F8223ea557055aDAa5',
        decimals: 9
    },
    {
        symbol: 'GNY',
        name: 'GNY',
        marketSymbol: 'gny',
        identifier: 'eth-erc20-gny',
        contractAddress: '0x247551F2EB3362E222c742E9c788B8957D9BC87e',
        decimals: 18
    },
    {
        symbol: 'GOLDX',
        name: 'GOLDX',
        marketSymbol: 'goldx',
        identifier: 'eth-erc20-goldx',
        contractAddress: '0xeAb43193CF0623073Ca89DB9B712796356FA7414',
        decimals: 18
    },
    {
        symbol: 'GOT',
        name: 'GoNetwork',
        marketSymbol: 'got',
        identifier: 'eth-erc20-got',
        contractAddress: '0x423b5F62b328D0D6D44870F4Eee316befA0b2dF5',
        decimals: 18
    },
    {
        symbol: 'GRID',
        name: 'Grid+',
        marketSymbol: 'grid',
        identifier: 'eth-erc20-grid',
        contractAddress: '0x12B19D3e2ccc14Da04FAe33e63652ce469b3F2FD',
        decimals: 12
    },
    {
        symbol: 'GRMD',
        name: 'GreenMed',
        marketSymbol: 'grmd',
        identifier: 'eth-erc20-grmd',
        contractAddress: '0xb444208cB0516C150178fCf9a52604BC04A1aCEa',
        decimals: 18
    },
    {
        symbol: 'GROO',
        name: 'Groocoin',
        marketSymbol: 'groo',
        identifier: 'eth-erc20-groo',
        contractAddress: '0xC17195bde49D70CefCF8A9F2ee1759FFC27BF0B1',
        decimals: 18
    },
    {
        symbol: 'GROW',
        name: 'Growchain',
        marketSymbol: 'grow',
        identifier: 'eth-erc20-grow',
        contractAddress: '0x0a9A9ce600D08BF9b76F49FA4e7b38A67EBEB1E6',
        decimals: 8
    },
    {
        symbol: 'GSC',
        name: 'Global Social Chain',
        marketSymbol: 'gsc',
        identifier: 'eth-erc20-gsc',
        contractAddress: '0x228ba514309FFDF03A81a205a6D040E429d6E80C',
        decimals: 18
    },
    {
        symbol: 'GSE',
        name: 'GSENetwork',
        marketSymbol: 'gse',
        identifier: 'eth-erc20-gse',
        contractAddress: '0xe530441f4f73bDB6DC2fA5aF7c3fC5fD551Ec838',
        decimals: 4
    },
    {
        symbol: 'GTC',
        name: 'GTC Token',
        marketSymbol: 'gtc',
        identifier: 'eth-erc20-gtc',
        contractAddress: '0xB70835D7822eBB9426B56543E391846C107bd32C',
        decimals: 18
    },
    {
        symbol: 'GTKT',
        name: 'GTKT',
        marketSymbol: 'gtkt',
        identifier: 'eth-erc20-gtkt',
        contractAddress: '0x025abAD9e518516fdaAFBDcdB9701b37fb7eF0FA',
        decimals: 0
    },
    {
        symbol: 'GTO',
        name: 'Gifto',
        marketSymbol: 'gto',
        identifier: 'eth-erc20-gto',
        contractAddress: '0xC5bBaE50781Be1669306b9e001EFF57a2957b09d',
        decimals: 5
    },
    {
        symbol: 'GUESS',
        name: 'Peerguess',
        marketSymbol: 'guess',
        identifier: 'eth-erc20-guess',
        contractAddress: '0xBDCFbf5C4D91Abc0bC9709C7286d00063c0e6F22',
        decimals: 2
    },
    {
        symbol: 'GULD',
        name: 'GULD ERC20',
        marketSymbol: 'guld',
        identifier: 'eth-erc20-guld',
        contractAddress: '0x9847345de8b614c956146bbea549336d9C8d26b6',
        decimals: 8
    },
    {
        symbol: 'GUP',
        name: 'Matchpool',
        marketSymbol: 'gup',
        identifier: 'eth-erc20-gup',
        contractAddress: '0xf7B098298f7C69Fc14610bf71d5e02c60792894C',
        decimals: 3
    },
    {
        symbol: 'GUSD',
        name: 'Gemini dollar',
        marketSymbol: 'gusd',
        identifier: 'eth-erc20-gusd',
        contractAddress: '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd',
        decimals: 2
    },
    {
        symbol: 'GVT',
        name: 'Genesis Vision',
        marketSymbol: 'gvt',
        identifier: 'eth-erc20-gvt',
        contractAddress: '0x103c3A209da59d3E7C4A89307e66521e081CFDF0',
        decimals: 18
    },
    {
        symbol: 'GXC',
        name: 'GXC',
        marketSymbol: 'gxc',
        identifier: 'eth-erc20-gxc',
        contractAddress: '0x58ca3065C0F24C7c96Aee8d6056b5B5deCf9c2f8',
        decimals: 10
    },
    {
        symbol: 'GXVC',
        name: 'Genevieve VC',
        marketSymbol: 'gxvc',
        identifier: 'eth-erc20-gxvc',
        contractAddress: '0x22F0AF8D78851b72EE799e05F54A77001586B18A',
        decimals: 10
    },
    {
        symbol: 'GZB',
        name: 'GigziBlack',
        marketSymbol: 'gzb',
        identifier: 'eth-erc20-gzb',
        contractAddress: '0x9DAe8b7F6D37ea8e5d32C6c3E856a6d8a1d3B363',
        decimals: 18
    },
    {
        symbol: 'GZE',
        name: 'GazeCoin',
        marketSymbol: 'gze',
        identifier: 'eth-erc20-gze',
        contractAddress: '0x8C65e992297d5f092A756dEf24F4781a280198Ff',
        decimals: 18
    },
    {
        symbol: 'GZR',
        name: 'Gizer',
        marketSymbol: 'gzr',
        identifier: 'eth-erc20-gzr',
        contractAddress: '0xE638dc39b6aDBEE8526b5C22380b4b45dAf46d8e',
        decimals: 6
    },
    {
        symbol: 'HAK',
        name: 'Shaka',
        marketSymbol: 'hak',
        identifier: 'eth-erc20-hak',
        contractAddress: '0x93a7174dafd31d13400cD9fa01f4e5B5BAa00D39',
        decimals: 18
    },
    {
        symbol: 'HAND',
        name: 'ShowHand',
        marketSymbol: 'hand',
        identifier: 'eth-erc20-hand',
        contractAddress: '0x48C1B2f3eFA85fbafb2ab951bF4Ba860a08cdBB7',
        decimals: 0
    },
    {
        symbol: 'HAPPY',
        name: 'Happiness',
        marketSymbol: 'happy',
        identifier: 'eth-erc20-happy',
        contractAddress: '0x5A567e28dbFa2bBD3ef13C0a01be114745349657',
        decimals: 2
    },
    {
        symbol: 'HAT',
        name: 'Hawala Today',
        marketSymbol: 'hat',
        identifier: 'eth-erc20-hat',
        contractAddress: '0x9002D4485b7594e3E850F0a206713B305113f69e',
        decimals: 18
    },
    {
        symbol: 'HB',
        name: 'HeartBout',
        marketSymbol: 'hb',
        identifier: 'eth-erc20-hb',
        contractAddress: '0xE2492F8D2A2618d8709Ca99b1d8d75713Bd84089',
        decimals: 18
    },
    {
        symbol: 'HBT',
        name: 'Hubii Network',
        marketSymbol: 'hbt',
        identifier: 'eth-erc20-hbt',
        contractAddress: '0xDd6C68bb32462e01705011a4e2Ad1a60740f217F',
        decimals: 15
    },
    {
        symbol: 'HBZ',
        name: 'HBZ coin',
        marketSymbol: 'hbz',
        identifier: 'eth-erc20-hbz',
        contractAddress: '0xE34e1944E776f39B9252790a0527eBDa647aE668',
        decimals: 18
    },
    {
        symbol: 'HDG',
        name: 'Hedge Crypto',
        marketSymbol: 'hdg',
        identifier: 'eth-erc20-hdg',
        contractAddress: '0xfFe8196bc259E8dEDc544d935786Aa4709eC3E64',
        decimals: 18
    },
    {
        symbol: 'HDL',
        name: 'HOLDER.TECH',
        marketSymbol: 'hdl',
        identifier: 'eth-erc20-hdl',
        contractAddress: '0x95C4be8534d69C248C0623c4C9a7A2a001c17337',
        decimals: 18
    },
    {
        symbol: 'Hdp',
        name: 'HEdpAY',
        marketSymbol: 'hdp',
        identifier: 'eth-erc20-hdp',
        contractAddress: '0xE9fF07809CCff05daE74990e25831d0Bc5cbe575',
        decimals: 18
    },
    {
        symbol: 'Hdp.ф',
        name: 'HEdpAY',
        marketSymbol: 'hdp.ф',
        identifier: 'eth-erc20-hdp.ф',
        contractAddress: '0x84543F868eC1b1FAC510d49d13C069f64cD2d5f9',
        decimals: 18
    },
    {
        symbol: 'HER',
        name: 'HeroNode',
        marketSymbol: 'her',
        identifier: 'eth-erc20-her',
        contractAddress: '0x491C9A23DB85623EEd455a8EfDd6AbA9b911C5dF',
        decimals: 18
    },
    {
        symbol: 'HGT',
        name: 'HelloGold',
        marketSymbol: 'hgt',
        identifier: 'eth-erc20-hgt',
        contractAddress: '0xba2184520A1cC49a6159c57e61E1844E085615B6',
        decimals: 8
    },
    {
        symbol: 'HIBT',
        name: 'HiBTC Token',
        marketSymbol: 'hibt',
        identifier: 'eth-erc20-hibt',
        contractAddress: '0x9bb1Db1445b83213a56d90d331894b3f26218e4e',
        decimals: 18
    },
    {
        symbol: 'HIG',
        name: 'ethereumhigh',
        marketSymbol: 'hig',
        identifier: 'eth-erc20-hig',
        contractAddress: '0xa9240fBCAC1F0b9A6aDfB04a53c8E3B0cC1D1444',
        decimals: 18
    },
    {
        symbol: 'HKG',
        name: 'HKG',
        marketSymbol: 'hkg',
        identifier: 'eth-erc20-hkg',
        contractAddress: '0x14F37B574242D366558dB61f3335289a5035c506',
        decimals: 3
    },
    {
        symbol: 'HKN',
        name: 'Hacken',
        marketSymbol: 'hkn',
        identifier: 'eth-erc20-hkn',
        contractAddress: '0x9e6B2B11542f2BC52f3029077acE37E8fD838D7F',
        decimals: 8
    },
    {
        symbol: 'HKY',
        name: 'Hicky',
        marketSymbol: 'hky',
        identifier: 'eth-erc20-hky',
        contractAddress: '0x88aC94D5d175130347Fc95E109d77AC09dbF5ab7',
        decimals: 18
    },
    {
        symbol: 'HLX',
        name: 'Helex',
        marketSymbol: 'hlx',
        identifier: 'eth-erc20-hlx',
        contractAddress: '0x66eb65D7Ab8e9567ba0fa6E37c305956c5341574',
        decimals: 5
    },
    {
        symbol: 'HMC',
        name: 'Hms Token',
        marketSymbol: 'hmc',
        identifier: 'eth-erc20-hmc',
        contractAddress: '0xAa0bb10CEc1fa372eb3Abc17C933FC6ba863DD9E',
        decimals: 18
    },
    {
        symbol: 'HMQ',
        name: 'Humaniq',
        marketSymbol: 'hmq',
        identifier: 'eth-erc20-hmq',
        contractAddress: '0xcbCC0F036ED4788F63FC0fEE32873d6A7487b908',
        decimals: 8
    },
    {
        symbol: 'HODL',
        name: 'HODLCoin',
        marketSymbol: 'hodl',
        identifier: 'eth-erc20-hodl',
        contractAddress: '0xb45d7Bc4cEBcAB98aD09BABDF8C818B2292B672c',
        decimals: 18
    },
    {
        symbol: 'HORSE',
        name: 'Ethorse',
        marketSymbol: 'horse',
        identifier: 'eth-erc20-horse',
        contractAddress: '0x5B0751713b2527d7f002c0c4e2a37e1219610A6B',
        decimals: 18
    },
    {
        symbol: 'HOT (Holo)',
        name: 'Holo Token',
        marketSymbol: 'hot (holo)',
        identifier: 'eth-erc20-hot (holo)',
        contractAddress: '0x6c6EE5e31d828De241282B9606C8e98Ea48526E2',
        decimals: 18
    },
    {
        symbol: 'HOT (Hydro)',
        name: 'Hydro Protocol',
        marketSymbol: 'hot (hydro)',
        identifier: 'eth-erc20-hot (hydro)',
        contractAddress: '0x9AF839687F6C94542ac5ece2e317dAAE355493A1',
        decimals: 18
    },
    {
        symbol: 'HPB',
        name: 'HPBCoin',
        marketSymbol: 'hpb',
        identifier: 'eth-erc20-hpb',
        contractAddress: '0x38c6A68304cdEfb9BEc48BbFaABA5C5B47818bb2',
        decimals: 18
    },
    {
        symbol: 'HST',
        name: 'Decision Token',
        marketSymbol: 'hst',
        identifier: 'eth-erc20-hst',
        contractAddress: '0x554C20B7c486beeE439277b4540A434566dC4C02',
        decimals: 18
    },
    {
        symbol: 'HT',
        name: 'Huobi Token',
        marketSymbol: 'ht',
        identifier: 'eth-erc20-ht',
        contractAddress: '0x6f259637dcD74C767781E37Bc6133cd6A68aa161',
        decimals: 18
    },
    {
        symbol: 'HVN',
        name: 'Hiveterminal Token',
        marketSymbol: 'hvn',
        identifier: 'eth-erc20-hvn',
        contractAddress: '0xC0Eb85285d83217CD7c891702bcbC0FC401E2D9D',
        decimals: 8
    },
    {
        symbol: 'HYDRO',
        name: 'Hydro',
        marketSymbol: 'hydro',
        identifier: 'eth-erc20-hydro',
        contractAddress: '0xEBBdf302c940c6bfd49C6b165f457fdb324649bc',
        decimals: 18
    },
    {
        symbol: 'IAD',
        name: 'IADOWR Coin',
        marketSymbol: 'iad',
        identifier: 'eth-erc20-iad',
        contractAddress: '0xC1E2097d788d33701BA3Cc2773BF67155ec93FC4',
        decimals: 18
    },
    {
        symbol: 'ICE',
        name: 'ICE',
        marketSymbol: 'ice',
        identifier: 'eth-erc20-ice',
        contractAddress: '0x5a84969bb663fb64F6d015DcF9F622Aedc796750',
        decimals: 18
    },
    {
        symbol: 'ICN',
        name: 'ICONOMI',
        marketSymbol: 'icn',
        identifier: 'eth-erc20-icn',
        contractAddress: '0x888666CA69E0f178DED6D75b5726Cee99A87D698',
        decimals: 18
    },
    {
        symbol: 'ICO',
        name: 'ICO',
        marketSymbol: 'ico',
        identifier: 'eth-erc20-ico',
        contractAddress: '0xa33e729bf4fdeb868B534e1f20523463D9C46bEe',
        decimals: 10
    },
    {
        symbol: 'ICOS',
        name: 'ICOS',
        marketSymbol: 'icos',
        identifier: 'eth-erc20-icos',
        contractAddress: '0x014B50466590340D41307Cc54DCee990c8D58aa8',
        decimals: 6
    },
    {
        symbol: 'ICX',
        name: 'ICON',
        marketSymbol: 'icx',
        identifier: 'eth-erc20-icx',
        contractAddress: '0xb5A5F22694352C15B00323844aD545ABb2B11028',
        decimals: 18
    },
    {
        symbol: 'IDEA',
        name: 'IDEA Token',
        marketSymbol: 'idea',
        identifier: 'eth-erc20-idea',
        contractAddress: '0x814CAfd4782d2e728170FDA68257983F03321c58',
        decimals: 0
    },
    {
        symbol: 'IDH',
        name: 'indaHash',
        marketSymbol: 'idh',
        identifier: 'eth-erc20-idh',
        contractAddress: '0x5136C98A80811C3f46bDda8B5c4555CFd9f812F0',
        decimals: 6
    },
    {
        symbol: 'IDXM',
        name: 'IDEX Membership',
        marketSymbol: 'idxm',
        identifier: 'eth-erc20-idxm',
        contractAddress: '0xCc13Fc627EFfd6E35D2D2706Ea3C4D7396c610ea',
        decimals: 8
    },
    {
        symbol: 'IETH',
        name: 'iEthereum',
        marketSymbol: 'ieth',
        identifier: 'eth-erc20-ieth',
        contractAddress: '0x859a9C0b44cb7066D956a958B0b82e54C9e44b4B',
        decimals: 8
    },
    {
        symbol: 'IFT',
        name: 'InvestFeed',
        marketSymbol: 'ift',
        identifier: 'eth-erc20-ift',
        contractAddress: '0x7654915A1b82D6D2D0AFc37c52Af556eA8983c7E',
        decimals: 18
    },
    {
        symbol: 'IG',
        name: 'IGToken',
        marketSymbol: 'ig',
        identifier: 'eth-erc20-ig',
        contractAddress: '0x8a88f04e0c905054D2F33b26BB3A46D7091A039A',
        decimals: 18
    },
    {
        symbol: 'IHT',
        name: 'I HOUSE TOKEN',
        marketSymbol: 'iht',
        identifier: 'eth-erc20-iht',
        contractAddress: '0xEda8B016efA8b1161208Cf041cD86972eeE0F31E',
        decimals: 18
    },
    {
        symbol: 'IIC',
        name: 'IIC',
        marketSymbol: 'iic',
        identifier: 'eth-erc20-iic',
        contractAddress: '0x16662F73dF3e79e54c6c5938b4313f92C524C120',
        decimals: 18
    },
    {
        symbol: 'IKB',
        name: 'IKB',
        marketSymbol: 'ikb',
        identifier: 'eth-erc20-ikb',
        contractAddress: '0x88AE96845e157558ef59e9Ff90E766E22E480390',
        decimals: 0
    },
    {
        symbol: 'IMC',
        name: 'Immune Coin',
        marketSymbol: 'imc',
        identifier: 'eth-erc20-imc',
        contractAddress: '0xe3831c5A982B279A198456D577cfb90424cb6340',
        decimals: 6
    },
    {
        symbol: 'IMT',
        name: 'IMT',
        marketSymbol: 'imt',
        identifier: 'eth-erc20-imt',
        contractAddress: '0x22E5F62D0FA19974749faa194e3d3eF6d89c08d7',
        decimals: 0
    },
    {
        symbol: 'IMT',
        name: 'Moneytoken',
        marketSymbol: 'imt',
        identifier: 'eth-erc20-imt',
        contractAddress: '0x13119E34E140097a507B07a5564bDe1bC375D9e6',
        decimals: 18
    },
    {
        symbol: 'IND',
        name: 'Indorse',
        marketSymbol: 'ind',
        identifier: 'eth-erc20-ind',
        contractAddress: '0xf8e386EDa857484f5a12e4B5DAa9984E06E73705',
        decimals: 18
    },
    {
        symbol: 'ING',
        name: 'Iungo',
        marketSymbol: 'ing',
        identifier: 'eth-erc20-ing',
        contractAddress: '0x24dDFf6D8B8a42d835af3b440De91f3386554Aa4',
        decimals: 18
    },
    {
        symbol: 'INRM',
        name: 'Integrated Money',
        marketSymbol: 'inrm',
        identifier: 'eth-erc20-inrm',
        contractAddress: '0x48e5413b73add2434e47504E2a22d14940dBFe78',
        decimals: 3
    },
    {
        symbol: 'INS',
        name: 'Insolar',
        marketSymbol: 'ins',
        identifier: 'eth-erc20-ins',
        contractAddress: '0x5B2e4a700dfBc560061e957edec8F6EeEb74a320',
        decimals: 10
    },
    {
        symbol: 'INSTAR',
        name: 'Insights Network',
        marketSymbol: 'instar',
        identifier: 'eth-erc20-instar',
        contractAddress: '0xc72fe8e3Dd5BeF0F9f31f259399F301272eF2a2D',
        decimals: 18
    },
    {
        symbol: 'INT',
        name: 'Internet Node Token',
        marketSymbol: 'int',
        identifier: 'eth-erc20-int',
        contractAddress: '0x0b76544F6C413a555F309Bf76260d1E02377c02A',
        decimals: 6
    },
    {
        symbol: 'INV',
        name: 'Invacio',
        marketSymbol: 'inv',
        identifier: 'eth-erc20-inv',
        contractAddress: '0xEcE83617Db208Ad255Ad4f45Daf81E25137535bb',
        decimals: 8
    },
    {
        symbol: 'INXT',
        name: 'Internxt',
        marketSymbol: 'inxt',
        identifier: 'eth-erc20-inxt',
        contractAddress: '0xa8006C4ca56F24d6836727D106349320dB7fEF82',
        decimals: 8
    },
    {
        symbol: 'IOST',
        name: 'IOSToken',
        marketSymbol: 'iost',
        identifier: 'eth-erc20-iost',
        contractAddress: '0xFA1a856Cfa3409CFa145Fa4e20Eb270dF3EB21ab',
        decimals: 18
    },
    {
        symbol: 'IoT',
        name: 'IoTコイン',
        marketSymbol: 'iot',
        identifier: 'eth-erc20-iot',
        contractAddress: '0xC34B21f6F8e51cC965c2393B3ccFa3b82BEb2403',
        decimals: 6
    },
    {
        symbol: 'IOTX',
        name: 'IoTeX Network',
        marketSymbol: 'iotx',
        identifier: 'eth-erc20-iotx',
        contractAddress: '0x6fB3e0A217407EFFf7Ca062D46c26E5d60a14d69',
        decimals: 18
    },
    {
        symbol: 'IPL',
        name: 'InsurePal token',
        marketSymbol: 'ipl',
        identifier: 'eth-erc20-ipl',
        contractAddress: '0x64CdF819d3E75Ac8eC217B3496d7cE167Be42e80',
        decimals: 18
    },
    {
        symbol: 'IPSX',
        name: 'IP Exchange',
        marketSymbol: 'ipsx',
        identifier: 'eth-erc20-ipsx',
        contractAddress: '0x001F0aA5dA15585e5b2305DbaB2bac425ea71007',
        decimals: 18
    },
    {
        symbol: 'IQN',
        name: 'IQeon',
        marketSymbol: 'iqn',
        identifier: 'eth-erc20-iqn',
        contractAddress: '0x0DB8D8b76BC361bAcbB72E2C491E06085A97Ab31',
        decimals: 18
    },
    {
        symbol: 'IST34',
        name: 'IST34 Token',
        marketSymbol: 'ist34',
        identifier: 'eth-erc20-ist34',
        contractAddress: '0x0cF713b11C9b986EC40D65bD4F7fbd50F6ff2d64',
        decimals: 18
    },
    {
        symbol: 'ITC',
        name: 'IoT Chain',
        marketSymbol: 'itc',
        identifier: 'eth-erc20-itc',
        contractAddress: '0x5E6b6d9aBAd9093fdc861Ea1600eBa1b355Cd940',
        decimals: 18
    },
    {
        symbol: 'ITT',
        name: 'ITT Token',
        marketSymbol: 'itt',
        identifier: 'eth-erc20-itt',
        contractAddress: '0x0aeF06DcCCC531e581f0440059E6FfCC206039EE',
        decimals: 8
    },
    {
        symbol: 'IVY',
        name: 'IvyKoin Public Network Tokens',
        marketSymbol: 'ivy',
        identifier: 'eth-erc20-ivy',
        contractAddress: '0xA4eA687A2A7F29cF2dc66B39c68e4411C0D00C49',
        decimals: 18
    },
    {
        symbol: 'IXT',
        name: 'InsureX',
        marketSymbol: 'ixt',
        identifier: 'eth-erc20-ixt',
        contractAddress: '0xfcA47962D45ADFdfd1Ab2D972315dB4ce7CCf094',
        decimals: 8
    },
    {
        symbol: 'J8T',
        name: 'J8T Token',
        marketSymbol: 'j8t',
        identifier: 'eth-erc20-j8t',
        contractAddress: '0x0D262e5dC4A06a0F1c90cE79C7a60C09DfC884E4',
        decimals: 8
    },
    {
        symbol: 'JBX',
        name: 'JBX',
        marketSymbol: 'jbx',
        identifier: 'eth-erc20-jbx',
        contractAddress: '0x0Aaf561eFF5BD9c8F911616933F84166A17cfE0C',
        decimals: 0
    },
    {
        symbol: 'JBX',
        name: 'JBOX',
        marketSymbol: 'jbx',
        identifier: 'eth-erc20-jbx',
        contractAddress: '0x884e3902C4d5cFA86de4aCE7A96AA91EbC25C0Ff',
        decimals: 18
    },
    {
        symbol: 'JC',
        name: 'Jesus Coin',
        marketSymbol: 'jc',
        identifier: 'eth-erc20-jc',
        contractAddress: '0xE2D82Dc7dA0E6f882E96846451F4faBcc8f90528',
        decimals: 18
    },
    {
        symbol: 'JET',
        name: 'JET',
        marketSymbol: 'jet',
        identifier: 'eth-erc20-jet',
        contractAddress: '0x8727c112C712c4a03371AC87a74dD6aB104Af768',
        decimals: 18
    },
    {
        symbol: 'JetCoins',
        name: 'JetCoins',
        marketSymbol: 'jetcoins',
        identifier: 'eth-erc20-jetcoins',
        contractAddress: '0x773450335eD4ec3DB45aF74f34F2c85348645D39',
        decimals: 18
    },
    {
        symbol: 'JNT',
        name: 'Jibrel Network',
        marketSymbol: 'jnt',
        identifier: 'eth-erc20-jnt',
        contractAddress: '0xa5Fd1A791C4dfcaacC963D4F73c6Ae5824149eA7',
        decimals: 18
    },
    {
        symbol: 'JOT',
        name: 'Jury.Online Token',
        marketSymbol: 'jot',
        identifier: 'eth-erc20-jot',
        contractAddress: '0xdb455c71C1bC2de4e80cA451184041Ef32054001',
        decimals: 18
    },
    {
        symbol: 'JOY',
        name: 'JOYSO',
        marketSymbol: 'joy',
        identifier: 'eth-erc20-joy',
        contractAddress: '0xDDe12a12A6f67156e0DA672be05c374e1B0a3e57',
        decimals: 6
    },
    {
        symbol: 'KAN',
        name: 'BitKan',
        marketSymbol: 'kan',
        identifier: 'eth-erc20-kan',
        contractAddress: '0x1410434b0346f5bE678d0FB554E5c7ab620f8f4a',
        decimals: 18
    },
    {
        symbol: 'KC',
        name: 'KMCC',
        marketSymbol: 'kc',
        identifier: 'eth-erc20-kc',
        contractAddress: '0x0D6DD9f68d24EC1d5fE2174f3EC8DAB52B52BaF5',
        decimals: 18
    },
    {
        symbol: 'KEE',
        name: 'CryptoKEE',
        marketSymbol: 'kee',
        identifier: 'eth-erc20-kee',
        contractAddress: '0x72D32ac1c5E66BfC5b08806271f8eEF915545164',
        decimals: 0
    },
    {
        symbol: 'KEY',
        name: 'SelfKey',
        marketSymbol: 'key',
        identifier: 'eth-erc20-key',
        contractAddress: '0x4CC19356f2D37338b9802aa8E8fc58B0373296E7',
        decimals: 18
    },
    {
        symbol: 'KEY',
        name: 'BihuKey',
        marketSymbol: 'key',
        identifier: 'eth-erc20-key',
        contractAddress: '0x4Cd988AfBad37289BAAf53C13e98E2BD46aAEa8c',
        decimals: 18
    },
    {
        symbol: 'KICK',
        name: 'KICK',
        marketSymbol: 'kick',
        identifier: 'eth-erc20-kick',
        contractAddress: '0x27695E09149AdC738A978e9A678F99E4c39e9eb9',
        decimals: 8
    },
    {
        symbol: 'KIN',
        name: 'Kin Foundation',
        marketSymbol: 'kin',
        identifier: 'eth-erc20-kin',
        contractAddress: '0x818Fc6C2Ec5986bc6E2CBf00939d90556aB12ce5',
        decimals: 18
    },
    {
        symbol: 'KIND',
        name: 'Kind Ads Token',
        marketSymbol: 'kind',
        identifier: 'eth-erc20-kind',
        contractAddress: '0x4618519de4C304F3444ffa7f812dddC2971cc688',
        decimals: 8
    },
    {
        symbol: 'KNC',
        name: 'Kyber Network',
        marketSymbol: 'knc',
        identifier: 'eth-erc20-knc',
        contractAddress: '0xdd974D5C2e2928deA5F71b9825b8b646686BD200',
        decimals: 18
    },
    {
        symbol: 'KNDC',
        name: 'KanadeCoin',
        marketSymbol: 'kndc',
        identifier: 'eth-erc20-kndc',
        contractAddress: '0x8E5610ab5E39d26828167640EA29823fe1dD5843',
        decimals: 8
    },
    {
        symbol: 'KNT',
        name: 'Kora Network Token',
        marketSymbol: 'knt',
        identifier: 'eth-erc20-knt',
        contractAddress: '0xfF5c25D2F40B47C4a37f989DE933E26562Ef0Ac0',
        decimals: 16
    },
    {
        symbol: 'KPR',
        name: 'KPRCoin',
        marketSymbol: 'kpr',
        identifier: 'eth-erc20-kpr',
        contractAddress: '0xb5C33F965C8899D255c34CDD2A3efA8AbCbB3DeA',
        decimals: 18
    },
    {
        symbol: 'KRL',
        name: 'Kryll',
        marketSymbol: 'krl',
        identifier: 'eth-erc20-krl',
        contractAddress: '0x464eBE77c293E473B48cFe96dDCf88fcF7bFDAC0',
        decimals: 18
    },
    {
        symbol: 'KRTY',
        name: 'KARTIY',
        marketSymbol: 'krty',
        identifier: 'eth-erc20-krty',
        contractAddress: '0xbD4AB8b9C26c4888e2792cAC6d5793Efea9eBb20',
        decimals: 18
    },
    {
        symbol: 'KUE',
        name: 'Kuende Token',
        marketSymbol: 'kue',
        identifier: 'eth-erc20-kue',
        contractAddress: '0xdf1338FbAfe7aF1789151627B886781ba556eF9a',
        decimals: 18
    },
    {
        symbol: 'KWATT',
        name: '4NEW',
        marketSymbol: 'kwatt',
        identifier: 'eth-erc20-kwatt',
        contractAddress: '0x241bA672574A78a3A604CDd0a94429A73a84a324',
        decimals: 18
    },
    {
        symbol: 'KZN',
        name: 'KaizenCoin',
        marketSymbol: 'kzn',
        identifier: 'eth-erc20-kzn',
        contractAddress: '0x9541FD8B9b5FA97381783783CeBF2F5fA793C262',
        decimals: 8
    },
    {
        symbol: 'LA',
        name: 'LATOKEN',
        marketSymbol: 'la',
        identifier: 'eth-erc20-la',
        contractAddress: '0xE50365f5D679CB98a1dd62D6F6e58e59321BcdDf',
        decimals: 18
    },
    {
        symbol: 'LALA',
        name: 'LALA World Token',
        marketSymbol: 'lala',
        identifier: 'eth-erc20-lala',
        contractAddress: '0xfD107B473AB90e8Fbd89872144a3DC92C40Fa8C9',
        decimals: 18
    },
    {
        symbol: 'LATX',
        name: 'LatiumX',
        marketSymbol: 'latx',
        identifier: 'eth-erc20-latx',
        contractAddress: '0x2f85E502a988AF76f7ee6D83b7db8d6c0A823bf9',
        decimals: 8
    },
    {
        symbol: 'LBA',
        name: 'Cred',
        marketSymbol: 'lba',
        identifier: 'eth-erc20-lba',
        contractAddress: '0xfe5F141Bf94fE84bC28deD0AB966c16B17490657',
        decimals: 18
    },
    {
        symbol: 'LCS',
        name: 'LocalCoinSwap',
        marketSymbol: 'lcs',
        identifier: 'eth-erc20-lcs',
        contractAddress: '0xAA19961b6B858D9F18a115f25aa1D98ABc1fdBA8',
        decimals: 18
    },
    {
        symbol: 'LCT',
        name: 'LendConnect',
        marketSymbol: 'lct',
        identifier: 'eth-erc20-lct',
        contractAddress: '0x05C7065d644096a4E4C3FE24AF86e36dE021074b',
        decimals: 18
    },
    {
        symbol: 'LCT',
        name: 'LiquorChain Token',
        marketSymbol: 'lct',
        identifier: 'eth-erc20-lct',
        contractAddress: '0x4A37A91eec4C97F9090CE66d21D3B3Aadf1aE5aD',
        decimals: 18
    },
    {
        symbol: 'LDC',
        name: 'LEADCOIN',
        marketSymbol: 'ldc',
        identifier: 'eth-erc20-ldc',
        contractAddress: '0x5102791cA02FC3595398400BFE0e33d7B6C82267',
        decimals: 18
    },
    {
        symbol: 'LDX',
        name: 'LondonCoin',
        marketSymbol: 'ldx',
        identifier: 'eth-erc20-ldx',
        contractAddress: '0x9eFa0e2387E4CBA02a6E4E6594b8f4Dd209a0b93',
        decimals: 0
    },
    {
        symbol: 'LEDU',
        name: 'Education Ecosystem',
        marketSymbol: 'ledu',
        identifier: 'eth-erc20-ledu',
        contractAddress: '0x5b26C5D0772E5bbaC8b3182AE9a13f9BB2D03765',
        decimals: 8
    },
    {
        symbol: 'LEMO',
        name: 'Lemo',
        marketSymbol: 'lemo',
        identifier: 'eth-erc20-lemo',
        contractAddress: '0xd6e354F07319e2474491D8c7c712137bEe6862a2',
        decimals: 0
    },
    {
        symbol: 'LEMO',
        name: 'Lemo',
        marketSymbol: 'lemo',
        identifier: 'eth-erc20-lemo',
        contractAddress: '0xB5AE848EdB296C21259b7467331467d2647eEcDf',
        decimals: 18
    },
    {
        symbol: 'LEMO',
        name: 'Lemo',
        marketSymbol: 'lemo',
        identifier: 'eth-erc20-lemo',
        contractAddress: '0x60C24407d01782C2175D32fe7C8921ed732371D1',
        decimals: 18
    },
    {
        symbol: 'LEND',
        name: 'EHTLend',
        marketSymbol: 'lend',
        identifier: 'eth-erc20-lend',
        contractAddress: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
        decimals: 18
    },
    {
        symbol: 'LEV',
        name: 'Leverj',
        marketSymbol: 'lev',
        identifier: 'eth-erc20-lev',
        contractAddress: '0x0F4CA92660Efad97a9a70CB0fe969c755439772C',
        decimals: 9
    },
    {
        symbol: 'LFR',
        name: 'LifeRun Coin',
        marketSymbol: 'lfr',
        identifier: 'eth-erc20-lfr',
        contractAddress: '0xc798cd1c49db0E297312E4c682752668CE1dB2AD',
        decimals: 5
    },
    {
        symbol: 'LG',
        name: 'LG',
        marketSymbol: 'lg',
        identifier: 'eth-erc20-lg',
        contractAddress: '0xc520F3Ac303a107D8F4B08b326B6ea66A4f961cd',
        decimals: 18
    },
    {
        symbol: 'LGO',
        name: 'LGO Exchange',
        marketSymbol: 'lgo',
        identifier: 'eth-erc20-lgo',
        contractAddress: '0x123aB195DD38B1b40510d467a6a359b201af056f',
        decimals: 8
    },
    {
        symbol: 'LGR',
        name: 'Logarithm',
        marketSymbol: 'lgr',
        identifier: 'eth-erc20-lgr',
        contractAddress: '0x2eb86e8fC520E0F6Bb5D9Af08F924fe70558Ab89',
        decimals: 8
    },
    {
        symbol: 'LIBER',
        name: 'Libereum',
        marketSymbol: 'liber',
        identifier: 'eth-erc20-liber',
        contractAddress: '0xE6DfBF1FAcA95036B8E76e1Fb28933D025B76Cc0',
        decimals: 18
    },
    {
        symbol: 'LIF',
        name: 'Winding Tree',
        marketSymbol: 'lif',
        identifier: 'eth-erc20-lif',
        contractAddress: '0xEB9951021698B42e4399f9cBb6267Aa35F82D59D',
        decimals: 18
    },
    {
        symbol: 'LIFE',
        name: 'LIFE',
        marketSymbol: 'life',
        identifier: 'eth-erc20-life',
        contractAddress: '0xfF18DBc487b4c2E3222d115952bABfDa8BA52F5F',
        decimals: 18
    },
    {
        symbol: 'LIKE',
        name: 'LikeCoin',
        marketSymbol: 'like',
        identifier: 'eth-erc20-like',
        contractAddress: '0x02F61Fd266DA6E8B102D4121f5CE7b992640CF98',
        decimals: 18
    },
    {
        symbol: 'LINK (Chainlink)',
        name: 'LINK Chainlink',
        marketSymbol: 'link (chainlink)',
        identifier: 'eth-erc20-link (chainlink)',
        contractAddress: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
        decimals: 18
    },
    {
        symbol: 'LINK Platform',
        name: 'Link Platform',
        marketSymbol: 'link platform',
        identifier: 'eth-erc20-link platform',
        contractAddress: '0xE2E6D4BE086c6938B53B22144855eef674281639',
        decimals: 18
    },
    {
        symbol: 'LIVE',
        name: 'LIVE Token',
        marketSymbol: 'live',
        identifier: 'eth-erc20-live',
        contractAddress: '0x24A77c1F17C547105E14813e517be06b0040aa76',
        decimals: 18
    },
    {
        symbol: 'LKY',
        name: 'Linkey',
        marketSymbol: 'lky',
        identifier: 'eth-erc20-lky',
        contractAddress: '0x49bD2DA75b1F7AF1E4dFd6b1125FEcDe59dBec58',
        decimals: 18
    },
    {
        symbol: 'LML',
        name: 'Lisk Machine Learning',
        marketSymbol: 'lml',
        identifier: 'eth-erc20-lml',
        contractAddress: '0x25B6325f5BB1c1E03cfbC3e53F470E1F1ca022E3',
        decimals: 18
    },
    {
        symbol: 'LNC',
        name: 'Lancer Token',
        marketSymbol: 'lnc',
        identifier: 'eth-erc20-lnc',
        contractAddress: '0x63e634330A20150DbB61B15648bC73855d6CCF07',
        decimals: 18
    },
    {
        symbol: 'LNC (Linker Coin)',
        name: 'Linker Coin',
        marketSymbol: 'lnc (linker coin)',
        identifier: 'eth-erc20-lnc (linker coin)',
        contractAddress: '0x6BEB418Fc6E1958204aC8baddCf109B8E9694966',
        decimals: 18
    },
    {
        symbol: 'LND',
        name: 'Lendingblock',
        marketSymbol: 'lnd',
        identifier: 'eth-erc20-lnd',
        contractAddress: '0x0947b0e6D821378805c9598291385CE7c791A6B2',
        decimals: 18
    },
    {
        symbol: 'LOC',
        name: 'LockChain',
        marketSymbol: 'loc',
        identifier: 'eth-erc20-loc',
        contractAddress: '0x5e3346444010135322268a4630d2ED5F8D09446c',
        decimals: 18
    },
    {
        symbol: 'LOCI',
        name: 'LOCIcoin',
        marketSymbol: 'loci',
        identifier: 'eth-erc20-loci',
        contractAddress: '0x9c23D67AEA7B95D80942e3836BCDF7E708A747C2',
        decimals: 18
    },
    {
        symbol: 'LOCUS',
        name: 'Locus Chain',
        marketSymbol: 'locus',
        identifier: 'eth-erc20-locus',
        contractAddress: '0xC64500DD7B0f1794807e67802F8Abbf5F8Ffb054',
        decimals: 18
    },
    {
        symbol: 'LOK',
        name: 'LOK',
        marketSymbol: 'lok',
        identifier: 'eth-erc20-lok',
        contractAddress: '0x21aE23B882A340A22282162086bC98D3E2B73018',
        decimals: 18
    },
    {
        symbol: 'LOOK',
        name: 'LookRev',
        marketSymbol: 'look',
        identifier: 'eth-erc20-look',
        contractAddress: '0x253C7dd074f4BaCb305387F922225A4f737C08bd',
        decimals: 18
    },
    {
        symbol: 'LOOM',
        name: 'Loom Network',
        marketSymbol: 'loom',
        identifier: 'eth-erc20-loom',
        contractAddress: '0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0',
        decimals: 18
    },
    {
        symbol: 'LOVE',
        name: 'Love',
        marketSymbol: 'love',
        identifier: 'eth-erc20-love',
        contractAddress: '0x5a276Aeb77bCfDAc8Ac6f31BBC7416AE1A85eEF2',
        decimals: 0
    },
    {
        symbol: 'LPT',
        name: 'Livepeer Token',
        marketSymbol: 'lpt',
        identifier: 'eth-erc20-lpt',
        contractAddress: '0x58b6A8A3302369DAEc383334672404Ee733aB239',
        decimals: 18
    },
    {
        symbol: 'LRC',
        name: 'Loopring',
        marketSymbol: 'lrc',
        identifier: 'eth-erc20-lrc',
        contractAddress: '0xEF68e7C694F40c8202821eDF525dE3782458639f',
        decimals: 18
    },
    {
        symbol: 'LUC',
        name: 'LUCToken',
        marketSymbol: 'luc',
        identifier: 'eth-erc20-luc',
        contractAddress: '0x5dbe296F97B23C4A6AA6183D73e574D02bA5c719',
        decimals: 18
    },
    {
        symbol: 'LUCK',
        name: 'LUCK',
        marketSymbol: 'luck',
        identifier: 'eth-erc20-luck',
        contractAddress: '0xFB12e3CcA983B9f59D90912Fd17F8D745A8B2953',
        decimals: 0
    },
    {
        symbol: 'LUM',
        name: 'Lumino Coin',
        marketSymbol: 'lum',
        identifier: 'eth-erc20-lum',
        contractAddress: '0xA89b5934863447f6E4Fc53B315a93e873bdA69a3',
        decimals: 18
    },
    {
        symbol: 'LUN',
        name: 'Lunyr',
        marketSymbol: 'lun',
        identifier: 'eth-erc20-lun',
        contractAddress: '0xfa05A73FfE78ef8f1a739473e462c54bae6567D9',
        decimals: 18
    },
    {
        symbol: 'LYM',
        name: 'Lympo',
        marketSymbol: 'lym',
        identifier: 'eth-erc20-lym',
        contractAddress: '0x57aD67aCf9bF015E4820Fbd66EA1A21BED8852eC',
        decimals: 18
    },
    {
        symbol: 'LYS',
        name: 'Lightyears',
        marketSymbol: 'lys',
        identifier: 'eth-erc20-lys',
        contractAddress: '0xdD41fBd1Ae95C5D9B198174A28e04Be6b3d1aa27',
        decimals: 8
    },
    {
        symbol: 'M-ETH',
        name: 'M-ETH',
        marketSymbol: 'm-eth',
        identifier: 'eth-erc20-m-eth',
        contractAddress: '0x3f4B726668da46f5e0E75aA5D478ACEc9f38210F',
        decimals: 18
    },
    {
        symbol: 'MAD',
        name: 'MAD',
        marketSymbol: 'mad',
        identifier: 'eth-erc20-mad',
        contractAddress: '0x5B09A0371C1DA44A8E24D36Bf5DEb1141a84d875',
        decimals: 18
    },
    {
        symbol: 'MAN',
        name: 'Matrix AI Network',
        marketSymbol: 'man',
        identifier: 'eth-erc20-man',
        contractAddress: '0xe25bCec5D3801cE3a794079BF94adF1B8cCD802D',
        decimals: 18
    },
    {
        symbol: 'MANA',
        name: 'Decentraland MANA',
        marketSymbol: 'mana',
        identifier: 'eth-erc20-mana',
        contractAddress: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
        decimals: 18
    },
    {
        symbol: 'MART',
        name: 'Martcoin',
        marketSymbol: 'mart',
        identifier: 'eth-erc20-mart',
        contractAddress: '0xfdcc07Ab60660de533b5Ad26e1457b565a9D59Bd',
        decimals: 18
    },
    {
        symbol: 'MAS',
        name: 'MIDAS PROTOCOL',
        marketSymbol: 'mas',
        identifier: 'eth-erc20-mas',
        contractAddress: '0x23Ccc43365D9dD3882eab88F43d515208f832430',
        decimals: 18
    },
    {
        symbol: 'MBRS',
        name: 'Embers',
        marketSymbol: 'mbrs',
        identifier: 'eth-erc20-mbrs',
        contractAddress: '0x386467F1f3ddbE832448650418311a479EECFC57',
        decimals: 0
    },
    {
        symbol: 'MCAP',
        name: 'MCAP',
        marketSymbol: 'mcap',
        identifier: 'eth-erc20-mcap',
        contractAddress: '0x93E682107d1E9defB0b5ee701C71707a4B2E46Bc',
        decimals: 8
    },
    {
        symbol: 'MCI',
        name: 'Musiconomi',
        marketSymbol: 'mci',
        identifier: 'eth-erc20-mci',
        contractAddress: '0x138A8752093F4f9a79AaeDF48d4B9248fab93c9C',
        decimals: 18
    },
    {
        symbol: 'MCO',
        name: 'Crypto.com',
        marketSymbol: 'mco',
        identifier: 'eth-erc20-mco',
        contractAddress: '0xB63B606Ac810a52cCa15e44bB630fd42D8d1d83d',
        decimals: 8
    },
    {
        symbol: 'MDA',
        name: 'Moeda Loyalty Points',
        marketSymbol: 'mda',
        identifier: 'eth-erc20-mda',
        contractAddress: '0x51DB5Ad35C671a87207d88fC11d593AC0C8415bd',
        decimals: 18
    },
    {
        symbol: 'MDS',
        name: 'MediShares',
        marketSymbol: 'mds',
        identifier: 'eth-erc20-mds',
        contractAddress: '0x66186008C1050627F979d464eABb258860563dbE',
        decimals: 18
    },
    {
        symbol: 'MDT',
        name: 'Measurable Data Token',
        marketSymbol: 'mdt',
        identifier: 'eth-erc20-mdt',
        contractAddress: '0x814e0908b12A99FeCf5BC101bB5d0b8B5cDf7d26',
        decimals: 18
    },
    {
        symbol: 'MEDX',
        name: 'MediBloc [ERC20]',
        marketSymbol: 'medx',
        identifier: 'eth-erc20-medx',
        contractAddress: '0xfd1e80508F243E64CE234eA88A5Fd2827c71D4b7',
        decimals: 8
    },
    {
        symbol: 'MESH',
        name: 'Meshbox',
        marketSymbol: 'mesh',
        identifier: 'eth-erc20-mesh',
        contractAddress: '0x01F2AcF2914860331C1Cb1a9AcecDa7475e06Af8',
        decimals: 18
    },
    {
        symbol: 'MESH',
        name: 'BlockMesh',
        marketSymbol: 'mesh',
        identifier: 'eth-erc20-mesh',
        contractAddress: '0xF03045a4C8077e38f3B8e2Ed33b8aEE69edF869F',
        decimals: 18
    },
    {
        symbol: 'MEST',
        name: 'Monaco Estate',
        marketSymbol: 'mest',
        identifier: 'eth-erc20-mest',
        contractAddress: '0x5B8D43FfdE4a2982B9A5387cDF21D54Ead64Ac8d',
        decimals: 18
    },
    {
        symbol: 'MET',
        name: 'Metronome',
        marketSymbol: 'met',
        identifier: 'eth-erc20-met',
        contractAddress: '0xa3d58c4E56fedCae3a7c43A725aeE9A71F0ece4e',
        decimals: 18
    },
    {
        symbol: 'METM',
        name: 'MetaMorph',
        marketSymbol: 'metm',
        identifier: 'eth-erc20-metm',
        contractAddress: '0xFEF3884b603C33EF8eD4183346E093A173C94da6',
        decimals: 18
    },
    {
        symbol: 'MFG',
        name: 'SyncFab Smart Manufacturing Blockchain',
        marketSymbol: 'mfg',
        identifier: 'eth-erc20-mfg',
        contractAddress: '0x6710c63432A2De02954fc0f851db07146a6c0312',
        decimals: 18
    },
    {
        symbol: 'MFT',
        name: 'Mainframe Token',
        marketSymbol: 'mft',
        identifier: 'eth-erc20-mft',
        contractAddress: '0xDF2C7238198Ad8B389666574f2d8bc411A4b7428',
        decimals: 18
    },
    {
        symbol: 'MFTU',
        name: 'Mainstream For The Underground',
        marketSymbol: 'mftu',
        identifier: 'eth-erc20-mftu',
        contractAddress: '0x05D412CE18F24040bB3Fa45CF2C69e506586D8e8',
        decimals: 18
    },
    {
        symbol: 'MGO',
        name: 'MobileGo',
        marketSymbol: 'mgo',
        identifier: 'eth-erc20-mgo',
        contractAddress: '0x40395044Ac3c0C57051906dA938B54BD6557F212',
        decimals: 8
    },
    {
        symbol: 'MIC',
        name: 'Mindexcoin',
        marketSymbol: 'mic',
        identifier: 'eth-erc20-mic',
        contractAddress: '0x3A1237D38D0Fb94513f85D61679cAd7F38507242',
        decimals: 18
    },
    {
        symbol: 'MIT',
        name: 'MIT',
        marketSymbol: 'mit',
        identifier: 'eth-erc20-mit',
        contractAddress: '0xe23cd160761f63FC3a1cF78Aa034b6cdF97d3E0C',
        decimals: 18
    },
    {
        symbol: 'MIT (Mychatcoin)',
        name: 'Mychatcoin',
        marketSymbol: 'mit (mychatcoin)',
        identifier: 'eth-erc20-mit (mychatcoin)',
        contractAddress: '0xAd8DD4c725dE1D31b9E8F8D146089e9DC6882093',
        decimals: 6
    },
    {
        symbol: 'MITX',
        name: 'Morpheus Infrastructure Token',
        marketSymbol: 'mitx',
        identifier: 'eth-erc20-mitx',
        contractAddress: '0x4a527d8fc13C5203AB24BA0944F4Cb14658D1Db6',
        decimals: 18
    },
    {
        symbol: 'MKR',
        name: 'MakerDAO',
        marketSymbol: 'mkr',
        identifier: 'eth-erc20-mkr',
        contractAddress: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
        decimals: 18
    },
    {
        symbol: 'MKT',
        name: 'Mikado',
        marketSymbol: 'mkt',
        identifier: 'eth-erc20-mkt',
        contractAddress: '0x7939882b54fcf0bCAe6b53dEc39Ad6e806176442',
        decimals: 8
    },
    {
        symbol: 'MLN (new)',
        name: 'Melonport',
        marketSymbol: 'mln (new)',
        identifier: 'eth-erc20-mln (new)',
        contractAddress: '0xec67005c4E498Ec7f55E092bd1d35cbC47C91892',
        decimals: 18
    },
    {
        symbol: 'MLN (old)',
        name: 'Melonport',
        marketSymbol: 'mln (old)',
        identifier: 'eth-erc20-mln (old)',
        contractAddress: '0xBEB9eF514a379B997e0798FDcC901Ee474B6D9A1',
        decimals: 18
    },
    {
        symbol: 'MNE',
        name: 'Minereum',
        marketSymbol: 'mne',
        identifier: 'eth-erc20-mne',
        contractAddress: '0x1a95B271B0535D15fa49932Daba31BA612b52946',
        decimals: 8
    },
    {
        symbol: 'MNT',
        name: 'Media Network Token',
        marketSymbol: 'mnt',
        identifier: 'eth-erc20-mnt',
        contractAddress: '0xA9877b1e05D035899131DBd1e403825166D09f92',
        decimals: 18
    },
    {
        symbol: 'MNTP',
        name: 'Goldmint MNT Prelaunch Token',
        marketSymbol: 'mntp',
        identifier: 'eth-erc20-mntp',
        contractAddress: '0x83cee9e086A77e492eE0bB93C2B0437aD6fdECCc',
        decimals: 18
    },
    {
        symbol: 'MOC',
        name: 'Moss Coin',
        marketSymbol: 'moc',
        identifier: 'eth-erc20-moc',
        contractAddress: '0x865ec58b06bF6305B886793AA20A2da31D034E68',
        decimals: 18
    },
    {
        symbol: 'MOD',
        name: 'Modum',
        marketSymbol: 'mod',
        identifier: 'eth-erc20-mod',
        contractAddress: '0x957c30aB0426e0C93CD8241E2c60392d08c6aC8e',
        decimals: 0
    },
    {
        symbol: 'MORE',
        name: 'More Coin',
        marketSymbol: 'more',
        identifier: 'eth-erc20-more',
        contractAddress: '0x59061b6f26BB4A9cE5828A19d35CFD5A4B80F056',
        decimals: 8
    },
    {
        symbol: 'MORE',
        name: 'Mithril Ore',
        marketSymbol: 'more',
        identifier: 'eth-erc20-more',
        contractAddress: '0x501262281B2Ba043e2fbf14904980689CDDB0C78',
        decimals: 2
    },
    {
        symbol: 'MOT',
        name: 'Olympus Labs',
        marketSymbol: 'mot',
        identifier: 'eth-erc20-mot',
        contractAddress: '0x263c618480DBe35C300D8d5EcDA19bbB986AcaeD',
        decimals: 18
    },
    {
        symbol: 'MOZO',
        name: 'Mozo Token',
        marketSymbol: 'mozo',
        identifier: 'eth-erc20-mozo',
        contractAddress: '0x44bf22949F9cc84b61B9328a9d885d1b5C806b41',
        decimals: 2
    },
    {
        symbol: 'MRK',
        name: 'MARK.SPACE',
        marketSymbol: 'mrk',
        identifier: 'eth-erc20-mrk',
        contractAddress: '0xf453B5B9d4E0B5c62ffB256BB2378cc2BC8e8a89',
        decimals: 8
    },
    {
        symbol: 'MRL',
        name: 'Marcelo',
        marketSymbol: 'mrl',
        identifier: 'eth-erc20-mrl',
        contractAddress: '0x82125AFe01819Dff1535D0D6276d57045291B6c0',
        decimals: 18
    },
    {
        symbol: 'MRP',
        name: 'MoneyRebel Token',
        marketSymbol: 'mrp',
        identifier: 'eth-erc20-mrp',
        contractAddress: '0x21f0F0fD3141Ee9E11B3d7f13a1028CD515f459c',
        decimals: 18
    },
    {
        symbol: 'MRV',
        name: 'MRV',
        marketSymbol: 'mrv',
        identifier: 'eth-erc20-mrv',
        contractAddress: '0xAB6CF87a50F17d7F5E1FEaf81B6fE9FfBe8EBF84',
        decimals: 18
    },
    {
        symbol: 'MSP',
        name: 'Mothership',
        marketSymbol: 'msp',
        identifier: 'eth-erc20-msp',
        contractAddress: '0x68AA3F232dA9bdC2343465545794ef3eEa5209BD',
        decimals: 18
    },
    {
        symbol: 'MTC',
        name: 'MTC Mesh Network',
        marketSymbol: 'mtc',
        identifier: 'eth-erc20-mtc',
        contractAddress: '0xdfdc0D82d96F8fd40ca0CFB4A288955bECEc2088',
        decimals: 18
    },
    {
        symbol: 'MTC',
        name: 'Medical Token Currency',
        marketSymbol: 'mtc',
        identifier: 'eth-erc20-mtc',
        contractAddress: '0x905E337c6c8645263D3521205Aa37bf4d034e745',
        decimals: 18
    },
    {
        symbol: 'MTH',
        name: 'Monetha',
        marketSymbol: 'mth',
        identifier: 'eth-erc20-mth',
        contractAddress: '0xaF4DcE16Da2877f8c9e00544c93B62Ac40631F16',
        decimals: 5
    },
    {
        symbol: 'MTL',
        name: 'Metal',
        marketSymbol: 'mtl',
        identifier: 'eth-erc20-mtl',
        contractAddress: '0xF433089366899D83a9f26A773D59ec7eCF30355e',
        decimals: 8
    },
    {
        symbol: 'MTN',
        name: 'MedToken',
        marketSymbol: 'mtn',
        identifier: 'eth-erc20-mtn',
        contractAddress: '0x41dBECc1cdC5517C6f76f6a6E836aDbEe2754DE3',
        decimals: 18
    },
    {
        symbol: 'MTR',
        name: 'Mitrav',
        marketSymbol: 'mtr',
        identifier: 'eth-erc20-mtr',
        contractAddress: '0x7FC408011165760eE31bE2BF20dAf450356692Af',
        decimals: 8
    },
    {
        symbol: 'MTRc',
        name: 'MTRCToken',
        marketSymbol: 'mtrc',
        identifier: 'eth-erc20-mtrc',
        contractAddress: '0x1e49fF77c355A3e38D6651ce8404AF0E48c5395f',
        decimals: 18
    },
    {
        symbol: 'MTX',
        name: 'Matryx',
        marketSymbol: 'mtx',
        identifier: 'eth-erc20-mtx',
        contractAddress: '0x0AF44e2784637218dD1D32A322D44e603A8f0c6A',
        decimals: 18
    },
    {
        symbol: 'MUXE',
        name: 'MUXE',
        marketSymbol: 'muxe',
        identifier: 'eth-erc20-muxe',
        contractAddress: '0x515669d308f887Fd83a471C7764F5d084886D34D',
        decimals: 18
    },
    {
        symbol: 'MVL',
        name: 'Mass Vehicle Ledger Token',
        marketSymbol: 'mvl',
        identifier: 'eth-erc20-mvl',
        contractAddress: '0xA849EaaE994fb86Afa73382e9Bd88c2B6b18Dc71',
        decimals: 18
    },
    {
        symbol: 'MVP',
        name: 'Merculet',
        marketSymbol: 'mvp',
        identifier: 'eth-erc20-mvp',
        contractAddress: '0x8a77e40936BbC27e80E9a3F526368C967869c86D',
        decimals: 18
    },
    {
        symbol: 'MWAT',
        name: 'RED MWAT',
        marketSymbol: 'mwat',
        identifier: 'eth-erc20-mwat',
        contractAddress: '0x6425c6BE902d692AE2db752B3c268AFAdb099D3b',
        decimals: 18
    },
    {
        symbol: 'MYD',
        name: 'MYD',
        marketSymbol: 'myd',
        identifier: 'eth-erc20-myd',
        contractAddress: '0xf7e983781609012307f2514f63D526D83D24F466',
        decimals: 16
    },
    {
        symbol: 'MYST',
        name: 'Mysterium',
        marketSymbol: 'myst',
        identifier: 'eth-erc20-myst',
        contractAddress: '0xa645264C5603E96c3b0B078cdab68733794B0A71',
        decimals: 8
    },
    {
        symbol: 'NAC',
        name: 'Nami ICO',
        marketSymbol: 'nac',
        identifier: 'eth-erc20-nac',
        contractAddress: '0x8d80de8A78198396329dfA769aD54d24bF90E7aa',
        decimals: 18
    },
    {
        symbol: 'NANJ',
        name: 'NANJCOIN',
        marketSymbol: 'nanj',
        identifier: 'eth-erc20-nanj',
        contractAddress: '0xFFE02ee4C69eDf1b340fCaD64fbd6b37a7b9e265',
        decimals: 8
    },
    {
        symbol: 'NAS',
        name: 'Nebula',
        marketSymbol: 'nas',
        identifier: 'eth-erc20-nas',
        contractAddress: '0x5d65D971895Edc438f465c17DB6992698a52318D',
        decimals: 18
    },
    {
        symbol: 'NAVI',
        name: 'NaviToken',
        marketSymbol: 'navi',
        identifier: 'eth-erc20-navi',
        contractAddress: '0x588047365dF5BA589F923604AAC23d673555c623',
        decimals: 18
    },
    {
        symbol: 'NBAI',
        name: 'NebulaAiToken',
        marketSymbol: 'nbai',
        identifier: 'eth-erc20-nbai',
        contractAddress: '0x17f8aFB63DfcDcC90ebE6e84F060Cc306A98257D',
        decimals: 18
    },
    {
        symbol: 'NBC',
        name: 'Niobium Coin',
        marketSymbol: 'nbc',
        identifier: 'eth-erc20-nbc',
        contractAddress: '0x9F195617fA8fbAD9540C5D113A99A0a0172aaEDC',
        decimals: 18
    },
    {
        symbol: 'NCASH',
        name: 'Nucleus Vision',
        marketSymbol: 'ncash',
        identifier: 'eth-erc20-ncash',
        contractAddress: '0x809826cceAb68c387726af962713b64Cb5Cb3CCA',
        decimals: 18
    },
    {
        symbol: 'NCC',
        name: 'NeedsCoin',
        marketSymbol: 'ncc',
        identifier: 'eth-erc20-ncc',
        contractAddress: '0x9344b383b1D59b5ce3468B234DAB43C7190ba735',
        decimals: 18
    },
    {
        symbol: 'NCC',
        name: 'NeuroChain',
        marketSymbol: 'ncc',
        identifier: 'eth-erc20-ncc',
        contractAddress: '0x5d48F293BaED247A2D0189058bA37aa238bD4725',
        decimals: 18
    },
    {
        symbol: 'NCT',
        name: 'Nectar',
        marketSymbol: 'nct',
        identifier: 'eth-erc20-nct',
        contractAddress: '0x9E46A38F5DaaBe8683E10793b06749EEF7D733d1',
        decimals: 18
    },
    {
        symbol: 'NDC',
        name: 'Neverdie',
        marketSymbol: 'ndc',
        identifier: 'eth-erc20-ndc',
        contractAddress: '0xA54ddC7B3CcE7FC8b1E3Fa0256D0DB80D2c10970',
        decimals: 18
    },
    {
        symbol: 'NDX',
        name: 'nDEX',
        marketSymbol: 'ndx',
        identifier: 'eth-erc20-ndx',
        contractAddress: '0x1966d718A565566e8E202792658D7b5Ff4ECe469',
        decimals: 18
    },
    {
        symbol: 'NEC',
        name: 'Ethfinex Nectar Token',
        marketSymbol: 'nec',
        identifier: 'eth-erc20-nec',
        contractAddress: '0xCc80C051057B774cD75067Dc48f8987C4Eb97A5e',
        decimals: 18
    },
    {
        symbol: 'NEEO',
        name: 'NEEO',
        marketSymbol: 'neeo',
        identifier: 'eth-erc20-neeo',
        contractAddress: '0xd8446236FA95b9b5f9fd0f8E7Df1a944823c683d',
        decimals: 18
    },
    {
        symbol: 'NET',
        name: 'NIMIQ',
        marketSymbol: 'net',
        identifier: 'eth-erc20-net',
        contractAddress: '0xcfb98637bcae43C13323EAa1731cED2B716962fD',
        decimals: 18
    },
    {
        symbol: 'NEU',
        name: 'NEU Fund',
        marketSymbol: 'neu',
        identifier: 'eth-erc20-neu',
        contractAddress: '0xA823E6722006afe99E91c30FF5295052fe6b8E32',
        decimals: 18
    },
    {
        symbol: 'NEWB',
        name: 'Newbium',
        marketSymbol: 'newb',
        identifier: 'eth-erc20-newb',
        contractAddress: '0x814964b1bceAf24e26296D031EaDf134a2Ca4105',
        decimals: 0
    },
    {
        symbol: 'NEXO',
        name: 'Nexo',
        marketSymbol: 'nexo',
        identifier: 'eth-erc20-nexo',
        contractAddress: '0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206',
        decimals: 18
    },
    {
        symbol: 'NGC',
        name: 'NAGA Coin',
        marketSymbol: 'ngc',
        identifier: 'eth-erc20-ngc',
        contractAddress: '0x72dD4b6bd852A3AA172Be4d6C5a6dbEc588cf131',
        decimals: 18
    },
    {
        symbol: 'NIMFA',
        name: 'Ninfa Money',
        marketSymbol: 'nimfa',
        identifier: 'eth-erc20-nimfa',
        contractAddress: '0xe26517A9967299453d3F1B48Aa005E6127e67210',
        decimals: 18
    },
    {
        symbol: 'NIO',
        name: 'Autonio',
        marketSymbol: 'nio',
        identifier: 'eth-erc20-nio',
        contractAddress: '0x5554e04e76533E1d14c52f05beEF6c9d329E1E30',
        decimals: 0
    },
    {
        symbol: 'NMR',
        name: 'Numerai',
        marketSymbol: 'nmr',
        identifier: 'eth-erc20-nmr',
        contractAddress: '0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671',
        decimals: 18
    },
    {
        symbol: 'NOAH',
        name: 'Noah Coin',
        marketSymbol: 'noah',
        identifier: 'eth-erc20-noah',
        contractAddress: '0x58a4884182d9E835597f405e5F258290E46ae7C2',
        decimals: 18
    },
    {
        symbol: 'NOBS',
        name: 'No BS Crypto',
        marketSymbol: 'nobs',
        identifier: 'eth-erc20-nobs',
        contractAddress: '0xF4FaEa455575354d2699BC209B0a65CA99F69982',
        decimals: 18
    },
    {
        symbol: 'NONE',
        name: 'None',
        marketSymbol: 'none',
        identifier: 'eth-erc20-none',
        contractAddress: '0x643B6870beabee941B9260a0A878bcF4A61Fb0f1',
        decimals: 0
    },
    {
        symbol: 'NOX',
        name: 'Nitro',
        marketSymbol: 'nox',
        identifier: 'eth-erc20-nox',
        contractAddress: '0xeC46f8207D766012454c408De210BCBc2243E71c',
        decimals: 18
    },
    {
        symbol: 'NPER',
        name: 'NPER',
        marketSymbol: 'nper',
        identifier: 'eth-erc20-nper',
        contractAddress: '0x4cE6B362Bc77A24966Dda9078f9cEF81b3B886a7',
        decimals: 18
    },
    {
        symbol: 'NPX',
        name: 'NaPoleonX',
        marketSymbol: 'npx',
        identifier: 'eth-erc20-npx',
        contractAddress: '0x28b5E12CcE51f15594B0b91d5b5AdaA70F684a02',
        decimals: 2
    },
    {
        symbol: 'NPXS',
        name: 'Pundi X Token',
        marketSymbol: 'npxs',
        identifier: 'eth-erc20-npxs',
        contractAddress: '0xA15C7Ebe1f07CaF6bFF097D8a589fb8AC49Ae5B3',
        decimals: 18
    },
    {
        symbol: 'NTK',
        name: 'Neurotoken',
        marketSymbol: 'ntk',
        identifier: 'eth-erc20-ntk',
        contractAddress: '0x69BEaB403438253f13b6e92Db91F7FB849258263',
        decimals: 18
    },
    {
        symbol: 'NTK',
        name: 'NetKoin',
        marketSymbol: 'ntk',
        identifier: 'eth-erc20-ntk',
        contractAddress: '0x5D4d57cd06Fa7fe99e26fdc481b468f77f05073C',
        decimals: 18
    },
    {
        symbol: 'NTO',
        name: 'Fujinto',
        marketSymbol: 'nto',
        identifier: 'eth-erc20-nto',
        contractAddress: '0x8A99ED8a1b204903Ee46e733f2c1286F6d20b177',
        decimals: 18
    },
    {
        symbol: 'NTWK',
        name: 'Network',
        marketSymbol: 'ntwk',
        identifier: 'eth-erc20-ntwk',
        contractAddress: '0x2233799Ee2683d75dfefAcbCd2A26c78D34b470d',
        decimals: 18
    },
    {
        symbol: 'NUG',
        name: 'Nuggets Token',
        marketSymbol: 'nug',
        identifier: 'eth-erc20-nug',
        contractAddress: '0x245ef47D4d0505ECF3Ac463F4d81f41ADE8f1fd1',
        decimals: 18
    },
    {
        symbol: 'NULS',
        name: 'NULS',
        marketSymbol: 'nuls',
        identifier: 'eth-erc20-nuls',
        contractAddress: '0xB91318F35Bdb262E9423Bc7c7c2A3A93DD93C92C',
        decimals: 18
    },
    {
        symbol: 'NxC',
        name: 'Nexium',
        marketSymbol: 'nxc',
        identifier: 'eth-erc20-nxc',
        contractAddress: '0x45e42D659D9f9466cD5DF622506033145a9b89Bc',
        decimals: 3
    },
    {
        symbol: 'NXX',
        name: 'NXX',
        marketSymbol: 'nxx',
        identifier: 'eth-erc20-nxx',
        contractAddress: '0x7627de4B93263a6a7570b8dAfa64bae812e5c394',
        decimals: 8
    },
    {
        symbol: 'NXX OLD',
        name: 'NXX OLD',
        marketSymbol: 'nxx old',
        identifier: 'eth-erc20-nxx old',
        contractAddress: '0x5c6183d10A00CD747a6Dbb5F658aD514383e9419',
        decimals: 8
    },
    {
        symbol: 'OAK',
        name: 'OAK',
        marketSymbol: 'oak',
        identifier: 'eth-erc20-oak',
        contractAddress: '0x5e888B83B7287EED4fB7DA7b7d0A0D4c735d94b3',
        decimals: 18
    },
    {
        symbol: 'OAX',
        name: 'OAX',
        marketSymbol: 'oax',
        identifier: 'eth-erc20-oax',
        contractAddress: '0x701C244b988a513c945973dEFA05de933b23Fe1D',
        decimals: 18
    },
    {
        symbol: 'OCC',
        name: 'Original Crypto Coin',
        marketSymbol: 'occ',
        identifier: 'eth-erc20-occ',
        contractAddress: '0x0235fE624e044A05eeD7A43E16E3083bc8A4287A',
        decimals: 18
    },
    {
        symbol: 'OCN',
        name: 'Odyssey',
        marketSymbol: 'ocn',
        identifier: 'eth-erc20-ocn',
        contractAddress: '0x4092678e4E78230F46A1534C0fbc8fA39780892B',
        decimals: 18
    },
    {
        symbol: 'ODE',
        name: 'ODEM Token',
        marketSymbol: 'ode',
        identifier: 'eth-erc20-ode',
        contractAddress: '0xbf52F2ab39e26E0951d2a02b49B7702aBe30406a',
        decimals: 18
    },
    {
        symbol: 'OHNI',
        name: 'OHNI',
        marketSymbol: 'ohni',
        identifier: 'eth-erc20-ohni',
        contractAddress: '0x7F2176cEB16dcb648dc924eff617c3dC2BEfd30d',
        decimals: 0
    },
    {
        symbol: 'OHNI',
        name: 'Ohni',
        marketSymbol: 'ohni',
        identifier: 'eth-erc20-ohni',
        contractAddress: '0x6f539a9456A5BCb6334A1A41207c3788f5825207',
        decimals: 18
    },
    {
        symbol: 'OJX',
        name: 'Ojooo Coin',
        marketSymbol: 'ojx',
        identifier: 'eth-erc20-ojx',
        contractAddress: '0xBeef546ac8a4e0a80DC1E2d696968Ef54138f1d4',
        decimals: 18
    },
    {
        symbol: 'OLD_MKR',
        name: 'MakerDAO',
        marketSymbol: 'old_mkr',
        identifier: 'eth-erc20-old_mkr',
        contractAddress: '0xC66eA802717bFb9833400264Dd12c2bCeAa34a6d',
        decimals: 18
    },
    {
        symbol: 'OLE',
        name: 'Olive',
        marketSymbol: 'ole',
        identifier: 'eth-erc20-ole',
        contractAddress: '0x9d9223436dDD466FC247e9dbbD20207e640fEf58',
        decimals: 18
    },
    {
        symbol: 'OLT',
        name: 'OneLedger Token',
        marketSymbol: 'olt',
        identifier: 'eth-erc20-olt',
        contractAddress: '0x64A60493D888728Cf42616e034a0dfEAe38EFCF0',
        decimals: 18
    },
    {
        symbol: 'OMG',
        name: 'OmiseGO',
        marketSymbol: 'omg',
        identifier: 'eth-erc20-omg',
        contractAddress: '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07',
        decimals: 18
    },
    {
        symbol: 'OMT',
        name: 'OTCMAKER Token',
        marketSymbol: 'omt',
        identifier: 'eth-erc20-omt',
        contractAddress: '0x047187e53477be70DBe8Ea5B799318f2e165052F',
        decimals: 18
    },
    {
        symbol: 'OMX',
        name: 'Shivom',
        marketSymbol: 'omx',
        identifier: 'eth-erc20-omx',
        contractAddress: '0xB5DBC6D3cf380079dF3b27135664b6BCF45D1869',
        decimals: 8
    },
    {
        symbol: 'ONE',
        name: 'Menlo One',
        marketSymbol: 'one',
        identifier: 'eth-erc20-one',
        contractAddress: '0x4D807509aECe24C0fa5A102b6a3B059Ec6E14392',
        decimals: 18
    },
    {
        symbol: 'ONEK',
        name: 'One K Token',
        marketSymbol: 'onek',
        identifier: 'eth-erc20-onek',
        contractAddress: '0xB23be73573bC7E03DB6e5dfc62405368716d28a8',
        decimals: 18
    },
    {
        symbol: 'ONG',
        name: 'SoMee.Social',
        marketSymbol: 'ong',
        identifier: 'eth-erc20-ong',
        contractAddress: '0xd341d1680Eeee3255b8C4c75bCCE7EB57f144dAe',
        decimals: 18
    },
    {
        symbol: 'ONL',
        name: 'On.Live',
        marketSymbol: 'onl',
        identifier: 'eth-erc20-onl',
        contractAddress: '0x6863bE0e7CF7ce860A574760e9020D519a8bDC47',
        decimals: 18
    },
    {
        symbol: 'OPEN',
        name: 'OPEN Platform',
        marketSymbol: 'open',
        identifier: 'eth-erc20-open',
        contractAddress: '0x69c4BB240cF05D51eeab6985Bab35527d04a8C64',
        decimals: 8
    },
    {
        symbol: 'OPEN',
        name: 'OPEN',
        marketSymbol: 'open',
        identifier: 'eth-erc20-open',
        contractAddress: '0xe9dE1C630753A15d7021Cc563429c21d4887506F',
        decimals: 8
    },
    {
        symbol: 'OPT',
        name: 'Opus Foundation',
        marketSymbol: 'opt',
        identifier: 'eth-erc20-opt',
        contractAddress: '0x4355fC160f74328f9b383dF2EC589bB3dFd82Ba0',
        decimals: 18
    },
    {
        symbol: 'OPTI',
        name: 'OptiToken',
        marketSymbol: 'opti',
        identifier: 'eth-erc20-opti',
        contractAddress: '0x832904863978b94802123106e6eB491BDF0Df928',
        decimals: 18
    },
    {
        symbol: 'ORBS',
        name: 'Orbs',
        marketSymbol: 'orbs',
        identifier: 'eth-erc20-orbs',
        contractAddress: '0xff56Cc6b1E6dEd347aA0B7676C85AB0B3D08B0FA',
        decimals: 18
    },
    {
        symbol: 'ORCA',
        name: 'ORCA Token',
        marketSymbol: 'orca',
        identifier: 'eth-erc20-orca',
        contractAddress: '0x6F59e0461Ae5E2799F1fB3847f05a63B16d0DbF8',
        decimals: 18
    },
    {
        symbol: 'ORI',
        name: 'Origami',
        marketSymbol: 'ori',
        identifier: 'eth-erc20-ori',
        contractAddress: '0xd2Fa8f92Ea72AbB35dBD6DECa57173d22db2BA49',
        decimals: 18
    },
    {
        symbol: 'ORME',
        name: 'Ormeus Coin',
        marketSymbol: 'orme',
        identifier: 'eth-erc20-orme',
        contractAddress: '0xc96DF921009B790dfFcA412375251ed1A2b75c60',
        decimals: 8
    },
    {
        symbol: 'ORME',
        name: 'Ormeus Coin',
        marketSymbol: 'orme',
        identifier: 'eth-erc20-orme',
        contractAddress: '0x516E5436bAfdc11083654DE7Bb9b95382d08d5DE',
        decimals: 8
    },
    {
        symbol: 'ORS',
        name: 'Origin Sport',
        marketSymbol: 'ors',
        identifier: 'eth-erc20-ors',
        contractAddress: '0xEB9A4B185816C354dB92DB09cC3B50bE60b901b6',
        decimals: 18
    },
    {
        symbol: 'OST',
        name: "Simple Token 'OST'",
        marketSymbol: 'ost',
        identifier: 'eth-erc20-ost',
        contractAddress: '0x2C4e8f2D746113d0696cE89B35F0d8bF88E0AEcA',
        decimals: 18
    },
    {
        symbol: 'OTN',
        name: 'Open Trading Network',
        marketSymbol: 'otn',
        identifier: 'eth-erc20-otn',
        contractAddress: '0x881Ef48211982D01E2CB7092C915E647Cd40D85C',
        decimals: 18
    },
    {
        symbol: 'OWN',
        name: 'OWNDATA',
        marketSymbol: 'own',
        identifier: 'eth-erc20-own',
        contractAddress: '0x170b275CEd089FffAEBFe927F445a350ED9160DC',
        decimals: 8
    },
    {
        symbol: 'Ox Fina',
        name: 'Ox Fina',
        marketSymbol: 'ox fina',
        identifier: 'eth-erc20-ox fina',
        contractAddress: '0x65A15014964F2102Ff58647e16a16a6B9E14bCF6',
        decimals: 3
    },
    {
        symbol: 'PAI',
        name: 'PCHAIN',
        marketSymbol: 'pai',
        identifier: 'eth-erc20-pai',
        contractAddress: '0xB9bb08AB7E9Fa0A1356bd4A39eC0ca267E03b0b3',
        decimals: 18
    },
    {
        symbol: 'PAL',
        name: 'PolicyPal Network',
        marketSymbol: 'pal',
        identifier: 'eth-erc20-pal',
        contractAddress: '0xfeDAE5642668f8636A11987Ff386bfd215F942EE',
        decimals: 18
    },
    {
        symbol: 'PARETO',
        name: 'PARETO',
        marketSymbol: 'pareto',
        identifier: 'eth-erc20-pareto',
        contractAddress: '0xea5f88E54d982Cbb0c441cde4E79bC305e5b43Bc',
        decimals: 18
    },
    {
        symbol: 'PASS',
        name: 'Blockpass',
        marketSymbol: 'pass',
        identifier: 'eth-erc20-pass',
        contractAddress: '0xeE4458e052B533b1aABD493B5f8c4d85D7B263Dc',
        decimals: 6
    },
    {
        symbol: 'PASS',
        name: 'PASS Token',
        marketSymbol: 'pass',
        identifier: 'eth-erc20-pass',
        contractAddress: '0x77761e63C05aeE6648FDaeaa9B94248351AF9bCd',
        decimals: 18
    },
    {
        symbol: 'PAT',
        name: 'Patron',
        marketSymbol: 'pat',
        identifier: 'eth-erc20-pat',
        contractAddress: '0xF3b3Cad094B89392fcE5faFD40bC03b80F2Bc624',
        decimals: 18
    },
    {
        symbol: 'PATENTS',
        name: 'PATENTS',
        marketSymbol: 'patents',
        identifier: 'eth-erc20-patents',
        contractAddress: '0x694404595e3075A942397F466AAcD462FF1a7BD0',
        decimals: 18
    },
    {
        symbol: 'PATH',
        name: 'PATH',
        marketSymbol: 'path',
        identifier: 'eth-erc20-path',
        contractAddress: '0xF813F3902bBc00A6DCe378634d3B79D84F9803d7',
        decimals: 18
    },
    {
        symbol: 'PAX',
        name: 'Paxos Standard (PAX)',
        marketSymbol: 'pax',
        identifier: 'eth-erc20-pax',
        contractAddress: '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
        decimals: 18
    },
    {
        symbol: 'PAY',
        name: 'TenX',
        marketSymbol: 'pay',
        identifier: 'eth-erc20-pay',
        contractAddress: '0xB97048628DB6B661D4C2aA833e95Dbe1A905B280',
        decimals: 18
    },
    {
        symbol: 'PBL',
        name: 'PBL',
        marketSymbol: 'pbl',
        identifier: 'eth-erc20-pbl',
        contractAddress: '0x55648De19836338549130B1af587F16beA46F66B',
        decimals: 18
    },
    {
        symbol: 'PBT',
        name: 'Primalbase Token (PBT)',
        marketSymbol: 'pbt',
        identifier: 'eth-erc20-pbt',
        contractAddress: '0xF4c07b1865bC326A3c01339492Ca7538FD038Cc0',
        decimals: 4
    },
    {
        symbol: 'PCH',
        name: 'PITCH',
        marketSymbol: 'pch',
        identifier: 'eth-erc20-pch',
        contractAddress: '0xfcAC7A7515e9A9d7619fA77A1fa738111f66727e',
        decimals: 18
    },
    {
        symbol: 'PCH',
        name: 'POPCHAIN',
        marketSymbol: 'pch',
        identifier: 'eth-erc20-pch',
        contractAddress: '0xE3F4b4A5d91e5cB9435B947F090A319737036312',
        decimals: 18
    },
    {
        symbol: 'PCL',
        name: 'Peculium',
        marketSymbol: 'pcl',
        identifier: 'eth-erc20-pcl',
        contractAddress: '0x3618516F45CD3c913F81F9987AF41077932Bc40d',
        decimals: 8
    },
    {
        symbol: 'PCLOLD',
        name: 'PeculiumOLD',
        marketSymbol: 'pclold',
        identifier: 'eth-erc20-pclold',
        contractAddress: '0x53148Bb4551707edF51a1e8d7A93698d18931225',
        decimals: 8
    },
    {
        symbol: 'PDATA',
        name: 'PDATA',
        marketSymbol: 'pdata',
        identifier: 'eth-erc20-pdata',
        contractAddress: '0x0db03B6CDe0B2d427C64a04FeAfd825938368f1F',
        decimals: 18
    },
    {
        symbol: 'PEG',
        name: 'PEG Network Token',
        marketSymbol: 'peg',
        identifier: 'eth-erc20-peg',
        contractAddress: '0x8Ae56a6850a7cbeaC3c3Ab2cB311e7620167eAC8',
        decimals: 18
    },
    {
        symbol: 'PET',
        name: 'PETHEREUM',
        marketSymbol: 'pet',
        identifier: 'eth-erc20-pet',
        contractAddress: '0x5884969Ec0480556E11d119980136a4C17eDDEd1',
        decimals: 18
    },
    {
        symbol: 'PETRO',
        name: 'PETRO',
        marketSymbol: 'petro',
        identifier: 'eth-erc20-petro',
        contractAddress: '0xeC18f898B4076A3E18f1089D33376CC380BDe61D',
        decimals: 18
    },
    {
        symbol: 'PEXT',
        name: 'PEX-Token',
        marketSymbol: 'pext',
        identifier: 'eth-erc20-pext',
        contractAddress: '0x55c2A0C171D920843560594dE3d6EEcC09eFc098',
        decimals: 4
    },
    {
        symbol: 'PFR',
        name: 'Payfair',
        marketSymbol: 'pfr',
        identifier: 'eth-erc20-pfr',
        contractAddress: '0x2FA32a39fc1c399E0Cc7B2935868f5165De7cE97',
        decimals: 8
    },
    {
        symbol: 'PHI',
        name: 'PHI Token',
        marketSymbol: 'phi',
        identifier: 'eth-erc20-phi',
        contractAddress: '0x13C2fab6354d3790D8ece4f0f1a3280b4A25aD96',
        decimals: 18
    },
    {
        symbol: 'PIPL',
        name: 'PIPL Coin',
        marketSymbol: 'pipl',
        identifier: 'eth-erc20-pipl',
        contractAddress: '0xE64509F0bf07ce2d29A7eF19A8A9bc065477C1B4',
        decimals: 8
    },
    {
        symbol: 'PIT',
        name: 'Paypite v2',
        marketSymbol: 'pit',
        identifier: 'eth-erc20-pit',
        contractAddress: '0x0fF161071e627A0E6de138105C73970F86ca7922',
        decimals: 18
    },
    {
        symbol: 'PIX',
        name: 'Lampix',
        marketSymbol: 'pix',
        identifier: 'eth-erc20-pix',
        contractAddress: '0x8eFFd494eB698cc399AF6231fCcd39E08fd20B15',
        decimals: 0
    },
    {
        symbol: 'PKG',
        name: 'PKG Token',
        marketSymbol: 'pkg',
        identifier: 'eth-erc20-pkg',
        contractAddress: '0x02F2D4a04E6E01aCE88bD2Cd632875543b2eF577',
        decimals: 18
    },
    {
        symbol: 'PKT',
        name: 'Playkey',
        marketSymbol: 'pkt',
        identifier: 'eth-erc20-pkt',
        contractAddress: '0x2604FA406Be957E542BEb89E6754fCdE6815e83f',
        decimals: 18
    },
    {
        symbol: 'PLASMA',
        name: 'PLASMA',
        marketSymbol: 'plasma',
        identifier: 'eth-erc20-plasma',
        contractAddress: '0x59416A25628A76b4730eC51486114c32E0B582A1',
        decimals: 6
    },
    {
        symbol: 'PLAY',
        name: 'HeroCoin',
        marketSymbol: 'play',
        identifier: 'eth-erc20-play',
        contractAddress: '0xE477292f1B3268687A29376116B0ED27A9c76170',
        decimals: 18
    },
    {
        symbol: 'PLBT',
        name: 'Polybius',
        marketSymbol: 'plbt',
        identifier: 'eth-erc20-plbt',
        contractAddress: '0x0AfFa06e7Fbe5bC9a764C979aA66E8256A631f02',
        decimals: 6
    },
    {
        symbol: 'PLR',
        name: 'Pillar Project',
        marketSymbol: 'plr',
        identifier: 'eth-erc20-plr',
        contractAddress: '0xe3818504c1B32bF1557b16C238B2E01Fd3149C17',
        decimals: 18
    },
    {
        symbol: 'PLS',
        name: 'DACPLAY Token',
        marketSymbol: 'pls',
        identifier: 'eth-erc20-pls',
        contractAddress: '0xe43ac1714F7394173b15E7CfF31A63d523Ce4fB9',
        decimals: 18
    },
    {
        symbol: 'PLU',
        name: 'Pluton',
        marketSymbol: 'plu',
        identifier: 'eth-erc20-plu',
        contractAddress: '0xD8912C10681D8B21Fd3742244f44658dBA12264E',
        decimals: 18
    },
    {
        symbol: 'PMA',
        name: 'PumaPay',
        marketSymbol: 'pma',
        identifier: 'eth-erc20-pma',
        contractAddress: '0x846C66cf71C43f80403B51fE3906B3599D63336f',
        decimals: 18
    },
    {
        symbol: 'PMNT',
        name: 'Paymon',
        marketSymbol: 'pmnt',
        identifier: 'eth-erc20-pmnt',
        contractAddress: '0x81b4D08645DA11374a03749AB170836E4e539767',
        decimals: 9
    },
    {
        symbol: 'PNK',
        name: 'Pinakion',
        marketSymbol: 'pnk',
        identifier: 'eth-erc20-pnk',
        contractAddress: '0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d',
        decimals: 18
    },
    {
        symbol: 'POA20',
        name: 'POA ERC20 on Foundation',
        marketSymbol: 'poa20',
        identifier: 'eth-erc20-poa20',
        contractAddress: '0x6758B7d441a9739b98552B373703d8d3d14f9e62',
        decimals: 18
    },
    {
        symbol: 'POE',
        name: 'Po.et Tokens',
        marketSymbol: 'poe',
        identifier: 'eth-erc20-poe',
        contractAddress: '0x0e0989b1f9B8A38983c2BA8053269Ca62Ec9B195',
        decimals: 8
    },
    {
        symbol: 'POIN',
        name: 'Potatoin',
        marketSymbol: 'poin',
        identifier: 'eth-erc20-poin',
        contractAddress: '0x43F6a1BE992deE408721748490772B15143CE0a7',
        decimals: 0
    },
    {
        symbol: 'POLL',
        name: 'ClearPoll',
        marketSymbol: 'poll',
        identifier: 'eth-erc20-poll',
        contractAddress: '0x705EE96c1c160842C92c1aeCfCFfccc9C412e3D9',
        decimals: 18
    },
    {
        symbol: 'POLY',
        name: 'Polymath Network',
        marketSymbol: 'poly',
        identifier: 'eth-erc20-poly',
        contractAddress: '0x9992eC3cF6A55b00978cdDF2b27BC6882d88D1eC',
        decimals: 18
    },
    {
        symbol: 'POOL',
        name: 'Stake Pool',
        marketSymbol: 'pool',
        identifier: 'eth-erc20-pool',
        contractAddress: '0x779B7b713C86e3E6774f5040D9cCC2D43ad375F8',
        decimals: 8
    },
    {
        symbol: 'POP',
        name: 'POP Network Token',
        marketSymbol: 'pop',
        identifier: 'eth-erc20-pop',
        contractAddress: '0x5D858bcd53E085920620549214a8b27CE2f04670',
        decimals: 18
    },
    {
        symbol: 'POS',
        name: 'PoSToken',
        marketSymbol: 'pos',
        identifier: 'eth-erc20-pos',
        contractAddress: '0xEe609fE292128Cad03b786DBb9Bc2634Ccdbe7fC',
        decimals: 18
    },
    {
        symbol: 'POWR',
        name: 'PowerLedger',
        marketSymbol: 'powr',
        identifier: 'eth-erc20-powr',
        contractAddress: '0x595832F8FC6BF59c85C527fEC3740A1b7a361269',
        decimals: 6
    },
    {
        symbol: 'PPP',
        name: 'PayPie',
        marketSymbol: 'ppp',
        identifier: 'eth-erc20-ppp',
        contractAddress: '0xc42209aCcC14029c1012fB5680D95fBd6036E2a0',
        decimals: 18
    },
    {
        symbol: 'PPT',
        name: 'Populous',
        marketSymbol: 'ppt',
        identifier: 'eth-erc20-ppt',
        contractAddress: '0xd4fa1460F537bb9085d22C7bcCB5DD450Ef28e3a',
        decimals: 8
    },
    {
        symbol: 'PRE',
        name: 'Presearch',
        marketSymbol: 'pre',
        identifier: 'eth-erc20-pre',
        contractAddress: '0x88A3E4F35D64aAD41A6d4030ac9AFE4356cB84fA',
        decimals: 18
    },
    {
        symbol: 'PRG',
        name: 'Paragon',
        marketSymbol: 'prg',
        identifier: 'eth-erc20-prg',
        contractAddress: '0x7728dFEF5aBd468669EB7f9b48A7f70a501eD29D',
        decimals: 6
    },
    {
        symbol: 'PRIX',
        name: 'Privatix',
        marketSymbol: 'prix',
        identifier: 'eth-erc20-prix',
        contractAddress: '0x3ADfc4999F77D04c8341BAC5F3A76f58DfF5B37A',
        decimals: 8
    },
    {
        symbol: 'PRL',
        name: 'Oyster Pearl',
        marketSymbol: 'prl',
        identifier: 'eth-erc20-prl',
        contractAddress: '0x1844b21593262668B7248d0f57a220CaaBA46ab9',
        decimals: 18
    },
    {
        symbol: 'PRO',
        name: 'Propy',
        marketSymbol: 'pro',
        identifier: 'eth-erc20-pro',
        contractAddress: '0x226bb599a12C826476e3A771454697EA52E9E220',
        decimals: 8
    },
    {
        symbol: 'PRO',
        name: 'Pro',
        marketSymbol: 'pro',
        identifier: 'eth-erc20-pro',
        contractAddress: '0x9041Fe5B3FDEA0f5e4afDC17e75180738D877A01',
        decimals: 18
    },
    {
        symbol: 'PRON',
        name: 'PronCoin',
        marketSymbol: 'pron',
        identifier: 'eth-erc20-pron',
        contractAddress: '0xA3149E0fA0061A9007fAf307074cdCd290f0e2Fd',
        decimals: 8
    },
    {
        symbol: 'PRPS',
        name: 'Purpose',
        marketSymbol: 'prps',
        identifier: 'eth-erc20-prps',
        contractAddress: '0x7641b2Ca9DDD58adDf6e3381c1F994Aac5f1A32f',
        decimals: 18
    },
    {
        symbol: 'PRPS',
        name: 'Purpose',
        marketSymbol: 'prps',
        identifier: 'eth-erc20-prps',
        contractAddress: '0xd94F2778e2B3913C53637Ae60647598bE588c570',
        decimals: 18
    },
    {
        symbol: 'PRPS',
        name: 'Purpose',
        marketSymbol: 'prps',
        identifier: 'eth-erc20-prps',
        contractAddress: '0xE40C374d8805b1dD58CDcEFf998A2F6920Cb52FD',
        decimals: 18
    },
    {
        symbol: 'PRS',
        name: 'Persians',
        marketSymbol: 'prs',
        identifier: 'eth-erc20-prs',
        contractAddress: '0x163733bcc28dbf26B41a8CfA83e369b5B3af741b',
        decimals: 18
    },
    {
        symbol: 'PRSP',
        name: 'PRSP',
        marketSymbol: 'prsp',
        identifier: 'eth-erc20-prsp',
        contractAddress: '0x0C04d4f331DA8dF75f9E2e271E3f3F1494C66C36',
        decimals: 9
    },
    {
        symbol: 'PST',
        name: 'Primas',
        marketSymbol: 'pst',
        identifier: 'eth-erc20-pst',
        contractAddress: '0x5d4ABC77B8405aD177d8ac6682D584ecbFd46CEc',
        decimals: 18
    },
    {
        symbol: 'PT',
        name: 'PornToken',
        marketSymbol: 'pt',
        identifier: 'eth-erc20-pt',
        contractAddress: '0x66497A283E0a007bA3974e837784C6AE323447de',
        decimals: 18
    },
    {
        symbol: 'PTC',
        name: 'ParrotCoin',
        marketSymbol: 'ptc',
        identifier: 'eth-erc20-ptc',
        contractAddress: '0x2a8E98e256f32259b5E5Cb55Dd63C8e891950666',
        decimals: 18
    },
    {
        symbol: 'PTON',
        name: 'PTON',
        marketSymbol: 'pton',
        identifier: 'eth-erc20-pton',
        contractAddress: '0x4946583c5b86E01cCD30c71a05617D06E3E73060',
        decimals: 18
    },
    {
        symbol: 'PTOY',
        name: 'Patientory',
        marketSymbol: 'ptoy',
        identifier: 'eth-erc20-ptoy',
        contractAddress: '0x8Ae4BF2C33a8e667de34B54938B0ccD03Eb8CC06',
        decimals: 8
    },
    {
        symbol: 'PTT',
        name: 'Proton Token',
        marketSymbol: 'ptt',
        identifier: 'eth-erc20-ptt',
        contractAddress: '0x4689a4e169eB39cC9078C0940e21ff1Aa8A39B9C',
        decimals: 18
    },
    {
        symbol: 'PTWO',
        name: 'PornTokenV2',
        marketSymbol: 'ptwo',
        identifier: 'eth-erc20-ptwo',
        contractAddress: '0x5512e1D6A7BE424b4323126B4f9E86D023F95764',
        decimals: 18
    },
    {
        symbol: 'PUC',
        name: 'Pour Coin',
        marketSymbol: 'puc',
        identifier: 'eth-erc20-puc',
        contractAddress: '0xEf6B4cE8C9Bc83744fbcdE2657b32eC18790458A',
        decimals: 0
    },
    {
        symbol: 'PURC',
        name: 'PureCarbon',
        marketSymbol: 'purc',
        identifier: 'eth-erc20-purc',
        contractAddress: '0xe25ff6Eb959BCE67975778e46A47750C243B6B99',
        decimals: 18
    },
    {
        symbol: 'PXG',
        name: 'PlayGame',
        marketSymbol: 'pxg',
        identifier: 'eth-erc20-pxg',
        contractAddress: '0x47e67BA66b0699500f18A53F94E2b9dB3D47437e',
        decimals: 18
    },
    {
        symbol: 'PXT',
        name: 'Populous XBRL Token (PXT)',
        marketSymbol: 'pxt',
        identifier: 'eth-erc20-pxt',
        contractAddress: '0xc14830E53aA344E8c14603A91229A0b925b0B262',
        decimals: 8
    },
    {
        symbol: 'PYLNT',
        name: 'Pylon Network',
        marketSymbol: 'pylnt',
        identifier: 'eth-erc20-pylnt',
        contractAddress: '0x7703C35CfFdC5CDa8D27aa3df2F9ba6964544b6e',
        decimals: 18
    },
    {
        symbol: 'QASH',
        name: 'QASH',
        marketSymbol: 'qash',
        identifier: 'eth-erc20-qash',
        contractAddress: '0x618E75Ac90b12c6049Ba3b27f5d5F8651b0037F6',
        decimals: 6
    },
    {
        symbol: 'QAU',
        name: 'QAU',
        marketSymbol: 'qau',
        identifier: 'eth-erc20-qau',
        contractAddress: '0x671AbBe5CE652491985342e85428EB1b07bC6c64',
        decimals: 8
    },
    {
        symbol: 'QBIT',
        name: 'Qubitica',
        marketSymbol: 'qbit',
        identifier: 'eth-erc20-qbit',
        contractAddress: '0xCb5ea3c190d8f82DEADF7ce5Af855dDbf33e3962',
        decimals: 6
    },
    {
        symbol: 'QBX',
        name: 'qiibeeToken',
        marketSymbol: 'qbx',
        identifier: 'eth-erc20-qbx',
        contractAddress: '0x2467AA6B5A2351416fD4C3DeF8462d841feeecEC',
        decimals: 18
    },
    {
        symbol: 'QKC',
        name: 'QuarkChain',
        marketSymbol: 'qkc',
        identifier: 'eth-erc20-qkc',
        contractAddress: '0xEA26c4aC16D4a5A106820BC8AEE85fd0b7b2b664',
        decimals: 18
    },
    {
        symbol: 'QNT',
        name: 'Quant',
        marketSymbol: 'qnt',
        identifier: 'eth-erc20-qnt',
        contractAddress: '0x4a220E6096B25EADb88358cb44068A3248254675',
        decimals: 18
    },
    {
        symbol: 'QRG',
        name: 'QRG',
        marketSymbol: 'qrg',
        identifier: 'eth-erc20-qrg',
        contractAddress: '0xFFAA5ffc455d9131f8A2713A741fD1960330508B',
        decimals: 18
    },
    {
        symbol: 'QRL',
        name: 'QRL',
        marketSymbol: 'qrl',
        identifier: 'eth-erc20-qrl',
        contractAddress: '0x697beac28B09E122C4332D163985e8a73121b97F',
        decimals: 8
    },
    {
        symbol: 'QSP',
        name: 'Quantstamp Token',
        marketSymbol: 'qsp',
        identifier: 'eth-erc20-qsp',
        contractAddress: '0x99ea4dB9EE77ACD40B119BD1dC4E33e1C070b80d',
        decimals: 18
    },
    {
        symbol: 'QTQ',
        name: "TiiQu's Q Token",
        marketSymbol: 'qtq',
        identifier: 'eth-erc20-qtq',
        contractAddress: '0x2C3C1F05187dBa7A5f2Dd47Dca57281C4d4F183F',
        decimals: 18
    },
    {
        symbol: 'QTUM',
        name: 'Qtum',
        marketSymbol: 'qtum',
        identifier: 'eth-erc20-qtum',
        contractAddress: '0x9a642d6b3368ddc662CA244bAdf32cDA716005BC',
        decimals: 18
    },
    {
        symbol: 'QUN',
        name: 'QunQun',
        marketSymbol: 'qun',
        identifier: 'eth-erc20-qun',
        contractAddress: '0x264Dc2DedCdcbb897561A57CBa5085CA416fb7b4',
        decimals: 18
    },
    {
        symbol: 'QVT',
        name: 'QVT',
        marketSymbol: 'qvt',
        identifier: 'eth-erc20-qvt',
        contractAddress: '0x1183F92A5624D68e85FFB9170F16BF0443B4c242',
        decimals: 18
    },
    {
        symbol: 'R',
        name: 'Revain',
        marketSymbol: 'r',
        identifier: 'eth-erc20-r',
        contractAddress: '0x48f775EFBE4F5EcE6e0DF2f7b5932dF56823B990',
        decimals: 0
    },
    {
        symbol: 'RAO',
        name: 'RadioYo',
        marketSymbol: 'rao',
        identifier: 'eth-erc20-rao',
        contractAddress: '0x45eDb535942a8C84D9f4b5D37e1b25F91Ea4804c',
        decimals: 18
    },
    {
        symbol: 'RATING',
        name: 'DPRating',
        marketSymbol: 'rating',
        identifier: 'eth-erc20-rating',
        contractAddress: '0xE8663A64A96169ff4d95b4299E7ae9a76b905B31',
        decimals: 8
    },
    {
        symbol: 'RBLX',
        name: 'Rublix',
        marketSymbol: 'rblx',
        identifier: 'eth-erc20-rblx',
        contractAddress: '0xFc2C4D8f95002C14eD0a7aA65102Cac9e5953b5E',
        decimals: 18
    },
    {
        symbol: 'RCN',
        name: 'Ripio Credit Network',
        marketSymbol: 'rcn',
        identifier: 'eth-erc20-rcn',
        contractAddress: '0xF970b8E36e23F7fC3FD752EeA86f8Be8D83375A6',
        decimals: 18
    },
    {
        symbol: 'RCT',
        name: 'RealChain',
        marketSymbol: 'rct',
        identifier: 'eth-erc20-rct',
        contractAddress: '0x13f25cd52b21650caa8225C9942337d914C9B030',
        decimals: 18
    },
    {
        symbol: 'RCT',
        name: 'RCT',
        marketSymbol: 'rct',
        identifier: 'eth-erc20-rct',
        contractAddress: '0x2a3Aa9ECA41E720Ed46B5A70D6C37EfA47f768Ac',
        decimals: 18
    },
    {
        symbol: 'RDN',
        name: 'Raiden Network',
        marketSymbol: 'rdn',
        identifier: 'eth-erc20-rdn',
        contractAddress: '0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6',
        decimals: 18
    },
    {
        symbol: 'REA',
        name: 'Realisto',
        marketSymbol: 'rea',
        identifier: 'eth-erc20-rea',
        contractAddress: '0x767bA2915EC344015a7938E3eEDfeC2785195D05',
        decimals: 18
    },
    {
        symbol: 'REAL',
        name: 'Real Estate Asset Ledger',
        marketSymbol: 'real',
        identifier: 'eth-erc20-real',
        contractAddress: '0x9214eC02CB71CbA0ADA6896b8dA260736a67ab10',
        decimals: 18
    },
    {
        symbol: 'REBL',
        name: 'Rebellious',
        marketSymbol: 'rebl',
        identifier: 'eth-erc20-rebl',
        contractAddress: '0x5F53f7A8075614b699Baad0bC2c899f4bAd8FBBF',
        decimals: 18
    },
    {
        symbol: 'RED',
        name: 'Red Community Token',
        marketSymbol: 'red',
        identifier: 'eth-erc20-red',
        contractAddress: '0x76960Dccd5a1fe799F7c29bE9F19ceB4627aEb2f',
        decimals: 18
    },
    {
        symbol: 'REDC',
        name: 'RedCab',
        marketSymbol: 'redc',
        identifier: 'eth-erc20-redc',
        contractAddress: '0xB563300A3BAc79FC09B93b6F84CE0d4465A2AC27',
        decimals: 18
    },
    {
        symbol: 'REF',
        name: 'RefToken',
        marketSymbol: 'ref',
        identifier: 'eth-erc20-ref',
        contractAddress: '0x89303500a7Abfb178B274FD89F2469C264951e1f',
        decimals: 8
    },
    {
        symbol: 'REM',
        name: 'Remme',
        marketSymbol: 'rem',
        identifier: 'eth-erc20-rem',
        contractAddress: '0x83984d6142934bb535793A82ADB0a46EF0F66B6d',
        decimals: 4
    },
    {
        symbol: 'REMI',
        name: 'REMI',
        marketSymbol: 'remi',
        identifier: 'eth-erc20-remi',
        contractAddress: '0x13cb85823f78Cff38f0B0E90D3e975b8CB3AAd64',
        decimals: 18
    },
    {
        symbol: 'REN',
        name: 'Republic Token',
        marketSymbol: 'ren',
        identifier: 'eth-erc20-ren',
        contractAddress: '0x408e41876cCCDC0F92210600ef50372656052a38',
        decimals: 18
    },
    {
        symbol: 'REP',
        name: 'Augur',
        marketSymbol: 'rep',
        identifier: 'eth-erc20-rep',
        contractAddress: '0x1985365e9f78359a9B6AD760e32412f4a445E862',
        decimals: 18
    },
    {
        symbol: 'REP',
        name: 'Augur',
        marketSymbol: 'rep',
        identifier: 'eth-erc20-rep',
        contractAddress: '0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6',
        decimals: 18
    },
    {
        symbol: 'REQ',
        name: 'Request Network',
        marketSymbol: 'req',
        identifier: 'eth-erc20-req',
        contractAddress: '0x8f8221aFbB33998d8584A2B05749bA73c37a938a',
        decimals: 18
    },
    {
        symbol: 'REX',
        name: 'imbrex',
        marketSymbol: 'rex',
        identifier: 'eth-erc20-rex',
        contractAddress: '0xf05a9382A4C3F29E2784502754293D88b835109C',
        decimals: 18
    },
    {
        symbol: 'RFR',
        name: 'Refereum',
        marketSymbol: 'rfr',
        identifier: 'eth-erc20-rfr',
        contractAddress: '0xd0929d411954c47438dc1d871dd6081F5C5e149c',
        decimals: 4
    },
    {
        symbol: 'RGS',
        name: 'Rusgas',
        marketSymbol: 'rgs',
        identifier: 'eth-erc20-rgs',
        contractAddress: '0x4c383bDCae52a6e1cb810C76C70d6f31A249eC9B',
        decimals: 8
    },
    {
        symbol: 'RHOC',
        name: 'RChain',
        marketSymbol: 'rhoc',
        identifier: 'eth-erc20-rhoc',
        contractAddress: '0x168296bb09e24A88805CB9c33356536B980D3fC5',
        decimals: 8
    },
    {
        symbol: 'RING',
        name: 'Evolution Land Global Token',
        marketSymbol: 'ring',
        identifier: 'eth-erc20-ring',
        contractAddress: '0x9469D013805bFfB7D3DEBe5E7839237e535ec483',
        decimals: 18
    },
    {
        symbol: 'RING',
        name: 'Evolution Land Global Token',
        marketSymbol: 'ring',
        identifier: 'eth-erc20-ring',
        contractAddress: '0x86E56f3c89a14528858e58B3De48c074538BAf2c',
        decimals: 18
    },
    {
        symbol: 'RIPT',
        name: 'RiptideCoin',
        marketSymbol: 'ript',
        identifier: 'eth-erc20-ript',
        contractAddress: '0xdd007278B667F6bef52fD0a4c23604aA1f96039a',
        decimals: 8
    },
    {
        symbol: 'RIYA',
        name: 'Etheriya',
        marketSymbol: 'riya',
        identifier: 'eth-erc20-riya',
        contractAddress: '0x0b1724cc9FDA0186911EF6a75949e9c0d3F0f2F3',
        decimals: 8
    },
    {
        symbol: 'RKT',
        name: 'Rock',
        marketSymbol: 'rkt',
        identifier: 'eth-erc20-rkt',
        contractAddress: '0x106Aa49295B525fcf959aA75eC3f7dCbF5352f1C',
        decimals: 18
    },
    {
        symbol: 'RLC',
        name: 'IEx.ec',
        marketSymbol: 'rlc',
        identifier: 'eth-erc20-rlc',
        contractAddress: '0x607F4C5BB672230e8672085532f7e901544a7375',
        decimals: 9
    },
    {
        symbol: 'RLT',
        name: 'RouletteToken',
        marketSymbol: 'rlt',
        identifier: 'eth-erc20-rlt',
        contractAddress: '0xcCeD5B8288086BE8c38E23567e684C3740be4D48',
        decimals: 10
    },
    {
        symbol: 'RLTY',
        name: 'SMARTRealty',
        marketSymbol: 'rlty',
        identifier: 'eth-erc20-rlty',
        contractAddress: '0xbe99B09709fc753b09BCf557A992F6605D5997B0',
        decimals: 8
    },
    {
        symbol: 'RLX',
        name: 'Relex',
        marketSymbol: 'rlx',
        identifier: 'eth-erc20-rlx',
        contractAddress: '0x4A42d2c580f83dcE404aCad18dab26Db11a1750E',
        decimals: 18
    },
    {
        symbol: 'RMC',
        name: 'RemiCoin',
        marketSymbol: 'rmc',
        identifier: 'eth-erc20-rmc',
        contractAddress: '0x7Dc4f41294697a7903C4027f6Ac528C5d14cd7eB',
        decimals: 8
    },
    {
        symbol: 'RMESH',
        name: 'RightMesh Token',
        marketSymbol: 'rmesh',
        identifier: 'eth-erc20-rmesh',
        contractAddress: '0x8D5682941cE456900b12d47ac06a88b47C764CE1',
        decimals: 18
    },
    {
        symbol: 'RNDR',
        name: 'Render Token',
        marketSymbol: 'rndr',
        identifier: 'eth-erc20-rndr',
        contractAddress: '0x0996bFb5D057faa237640E2506BE7B4f9C46de0B',
        decimals: 18
    },
    {
        symbol: 'RNT',
        name: 'OneRoot Network',
        marketSymbol: 'rnt',
        identifier: 'eth-erc20-rnt',
        contractAddress: '0xFF603F43946A3A28DF5E6A73172555D8C8b02386',
        decimals: 18
    },
    {
        symbol: 'RNTB',
        name: 'BitRent',
        marketSymbol: 'rntb',
        identifier: 'eth-erc20-rntb',
        contractAddress: '0x1FE70bE734e473e5721ea57C8B5B01e6Caa52686',
        decimals: 18
    },
    {
        symbol: 'ROC',
        name: 'ROC',
        marketSymbol: 'roc',
        identifier: 'eth-erc20-roc',
        contractAddress: '0x1BcBc54166F6bA149934870b60506199b6C9dB6D',
        decimals: 10
    },
    {
        symbol: 'ROCK',
        name: 'Rocket Token',
        marketSymbol: 'rock',
        identifier: 'eth-erc20-rock',
        contractAddress: '0xA40106134c5bF4c41411554e6db99B95A15ed9d8',
        decimals: 18
    },
    {
        symbol: 'ROCK2',
        name: 'ICE ROCK MINING',
        marketSymbol: 'rock2',
        identifier: 'eth-erc20-rock2',
        contractAddress: '0xC16b542ff490e01fcc0DC58a60e1EFdc3e357cA6',
        decimals: 0
    },
    {
        symbol: 'ROCK2PAY',
        name: 'ICE ROCK MINING',
        marketSymbol: 'rock2pay',
        identifier: 'eth-erc20-rock2pay',
        contractAddress: '0x0E3de3B0E3D617FD8D1D8088639bA877feb4d742',
        decimals: 18
    },
    {
        symbol: 'ROK',
        name: 'Rocketchain',
        marketSymbol: 'rok',
        identifier: 'eth-erc20-rok',
        contractAddress: '0xc9De4B7F0C3d991e967158E4D4bFA4b51Ec0b114',
        decimals: 18
    },
    {
        symbol: 'ROUND',
        name: 'ROUND',
        marketSymbol: 'round',
        identifier: 'eth-erc20-round',
        contractAddress: '0x4993CB95c7443bdC06155c5f5688Be9D8f6999a5',
        decimals: 18
    },
    {
        symbol: 'RPL',
        name: 'Rocket Pool',
        marketSymbol: 'rpl',
        identifier: 'eth-erc20-rpl',
        contractAddress: '0xB4EFd85c19999D84251304bDA99E90B92300Bd93',
        decimals: 18
    },
    {
        symbol: 'RTB',
        name: 'AB-Chain RTB',
        marketSymbol: 'rtb',
        identifier: 'eth-erc20-rtb',
        contractAddress: '0xEC491c1088Eae992B7A214efB0a266AD0927A72A',
        decimals: 18
    },
    {
        symbol: 'RTH',
        name: 'Rotharium',
        marketSymbol: 'rth',
        identifier: 'eth-erc20-rth',
        contractAddress: '0x3FD8f39A962eFDA04956981C31AB89FAB5FB8bC8',
        decimals: 18
    },
    {
        symbol: 'RTN',
        name: 'RiderToken',
        marketSymbol: 'rtn',
        identifier: 'eth-erc20-rtn',
        contractAddress: '0x54b293226000ccBFC04DF902eEC567CB4C35a903',
        decimals: 18
    },
    {
        symbol: 'RUFF',
        name: 'Ruff',
        marketSymbol: 'ruff',
        identifier: 'eth-erc20-ruff',
        contractAddress: '0xf278c1CA969095ffddDED020290cf8B5C424AcE2',
        decimals: 18
    },
    {
        symbol: 'RUNE',
        name: 'Rune',
        marketSymbol: 'rune',
        identifier: 'eth-erc20-rune',
        contractAddress: '0xdEE02D94be4929d26f67B64Ada7aCf1914007F10',
        decimals: 18
    },
    {
        symbol: 'RVL',
        name: 'RVL',
        marketSymbol: 'rvl',
        identifier: 'eth-erc20-rvl',
        contractAddress: '0x41f615E24fAbd2b097a320E9E6c1f448cb40521c',
        decimals: 18
    },
    {
        symbol: 'RVT',
        name: 'Rivetz',
        marketSymbol: 'rvt',
        identifier: 'eth-erc20-rvt',
        contractAddress: '0x3d1BA9be9f66B8ee101911bC36D3fB562eaC2244',
        decimals: 18
    },
    {
        symbol: 'S-A-PAT',
        name: 'S-A-PAT',
        marketSymbol: 's-a-pat',
        identifier: 'eth-erc20-s-a-pat',
        contractAddress: '0x1EC8fE51a9B6A3a6C427D17d9ECC3060fbc4a45c',
        decimals: 18
    },
    {
        symbol: 'S-ETH',
        name: 'S-ETH',
        marketSymbol: 's-eth',
        identifier: 'eth-erc20-s-eth',
        contractAddress: '0x3eb91D237e491E0DEE8582c402D85CB440fb6b54',
        decimals: 18
    },
    {
        symbol: 'SAC',
        name: 'Smart Application Chain',
        marketSymbol: 'sac',
        identifier: 'eth-erc20-sac',
        contractAddress: '0xabC1280A0187a2020cC675437aed400185F86Db6',
        decimals: 18
    },
    {
        symbol: 'SALT',
        name: 'Salt Lending Token',
        marketSymbol: 'salt',
        identifier: 'eth-erc20-salt',
        contractAddress: '0x4156D3342D5c385a87D264F90653733592000581',
        decimals: 8
    },
    {
        symbol: 'SAN',
        name: 'Santiment',
        marketSymbol: 'san',
        identifier: 'eth-erc20-san',
        contractAddress: '0x7C5A0CE9267ED19B22F8cae653F198e3E8daf098',
        decimals: 18
    },
    {
        symbol: 'SCANDI',
        name: 'Scandiweb Coin',
        marketSymbol: 'scandi',
        identifier: 'eth-erc20-scandi',
        contractAddress: '0x78fE18e41f436e1981a3a60D1557c8a7a9370461',
        decimals: 2
    },
    {
        symbol: 'SCL',
        name: 'SocialCoin',
        marketSymbol: 'scl',
        identifier: 'eth-erc20-scl',
        contractAddress: '0xd7631787B4dCc87b1254cfd1e5cE48e96823dEe8',
        decimals: 8
    },
    {
        symbol: 'SCRL',
        name: 'SCRL',
        marketSymbol: 'scrl',
        identifier: 'eth-erc20-scrl',
        contractAddress: '0x24DCc881E7Dd730546834452F21872D5cb4b5293',
        decimals: 18
    },
    {
        symbol: 'SEELE',
        name: 'Seele',
        marketSymbol: 'seele',
        identifier: 'eth-erc20-seele',
        contractAddress: '0xB1eeF147028E9f480DbC5ccaA3277D417D1b85F0',
        decimals: 18
    },
    {
        symbol: 'SENC',
        name: 'Sentinel Chain',
        marketSymbol: 'senc',
        identifier: 'eth-erc20-senc',
        contractAddress: '0xA13f0743951B4f6E3e3AA039f682E17279f52bc3',
        decimals: 18
    },
    {
        symbol: 'SenSatorI',
        name: 'SenSatorI Token',
        marketSymbol: 'sensatori',
        identifier: 'eth-erc20-sensatori',
        contractAddress: '0x4cA74185532DC1789527194e5B9c866dD33F4E82',
        decimals: 18
    },
    {
        symbol: 'SENSE',
        name: 'Sensay',
        marketSymbol: 'sense',
        identifier: 'eth-erc20-sense',
        contractAddress: '0x6745fAB6801e376cD24F03572B9C9B0D4EdDDCcf',
        decimals: 8
    },
    {
        symbol: 'SENT',
        name: 'SENTinel',
        marketSymbol: 'sent',
        identifier: 'eth-erc20-sent',
        contractAddress: '0xa44E5137293E855B1b7bC7E2C6f8cD796fFCB037',
        decimals: 8
    },
    {
        symbol: 'SET',
        name: 'SET',
        marketSymbol: 'set',
        identifier: 'eth-erc20-set',
        contractAddress: '0xe06eda7435bA749b047380CEd49121ddE93334Ae',
        decimals: 0
    },
    {
        symbol: 'SEXY',
        name: 'Sexy Token',
        marketSymbol: 'sexy',
        identifier: 'eth-erc20-sexy',
        contractAddress: '0x98F5e9b7F0e33956C0443E81bF7deB8B5b1ed545',
        decimals: 18
    },
    {
        symbol: 'SGEL',
        name: 'SGELDER',
        marketSymbol: 'sgel',
        identifier: 'eth-erc20-sgel',
        contractAddress: '0xa1ccc166faf0E998b3E33225A1A0301B1C86119D',
        decimals: 18
    },
    {
        symbol: 'SGN',
        name: 'Signals Network',
        marketSymbol: 'sgn',
        identifier: 'eth-erc20-sgn',
        contractAddress: '0xB2135AB9695a7678Dd590B1A996CB0f37BCB0718',
        decimals: 9
    },
    {
        symbol: 'SGP',
        name: 'SGPay',
        marketSymbol: 'sgp',
        identifier: 'eth-erc20-sgp',
        contractAddress: '0x33C623a2BAAfEb8D15DfaF3cE44095efec83D72C',
        decimals: 18
    },
    {
        symbol: 'SGR',
        name: 'Sugar Exchange',
        marketSymbol: 'sgr',
        identifier: 'eth-erc20-sgr',
        contractAddress: '0xCB5A05beF3257613E984C17DbcF039952B6d883F',
        decimals: 8
    },
    {
        symbol: 'SGT',
        name: 'SGT',
        marketSymbol: 'sgt',
        identifier: 'eth-erc20-sgt',
        contractAddress: '0xd248B0D48E44aaF9c49aea0312be7E13a6dc1468',
        decimals: 1
    },
    {
        symbol: 'SGT',
        name: 'SelfieYo Gold Token',
        marketSymbol: 'sgt',
        identifier: 'eth-erc20-sgt',
        contractAddress: '0x37427576324fE1f3625c9102674772d7CF71377d',
        decimals: 18
    },
    {
        symbol: 'SHIP',
        name: 'ShipChain',
        marketSymbol: 'ship',
        identifier: 'eth-erc20-ship',
        contractAddress: '0xe25b0BBA01Dc5630312B6A21927E578061A13f55',
        decimals: 18
    },
    {
        symbol: 'SHIT',
        name: 'SHIT',
        marketSymbol: 'shit',
        identifier: 'eth-erc20-shit',
        contractAddress: '0xEF2E9966eb61BB494E5375d5Df8d67B7dB8A780D',
        decimals: 0
    },
    {
        symbol: 'SHL',
        name: 'Oyster Shell',
        marketSymbol: 'shl',
        identifier: 'eth-erc20-shl',
        contractAddress: '0x8542325B72C6D9fC0aD2Ca965A78435413a915A0',
        decimals: 18
    },
    {
        symbol: 'SHP',
        name: 'Sharpe Platform Token',
        marketSymbol: 'shp',
        identifier: 'eth-erc20-shp',
        contractAddress: '0xEF2463099360a085f1f10b076Ed72Ef625497a06',
        decimals: 18
    },
    {
        symbol: 'SIFT',
        name: 'SIFT',
        marketSymbol: 'sift',
        identifier: 'eth-erc20-sift',
        contractAddress: '0x8a187D5285d316bcBC9ADafc08b51d70a0d8e000',
        decimals: 0
    },
    {
        symbol: 'SIG',
        name: 'Signal',
        marketSymbol: 'sig',
        identifier: 'eth-erc20-sig',
        contractAddress: '0x6888a16eA9792c15A4DCF2f6C623D055c8eDe792',
        decimals: 18
    },
    {
        symbol: 'SKB',
        name: 'Sakura Bloom',
        marketSymbol: 'skb',
        identifier: 'eth-erc20-skb',
        contractAddress: '0x4aF328C52921706dCB739F25786210499169AFe6',
        decimals: 8
    },
    {
        symbol: 'SKE',
        name: 'Super Keep Token',
        marketSymbol: 'ske',
        identifier: 'eth-erc20-ske',
        contractAddress: '0x13DB74B3cf512F65C4b91683940B4f3955E05085',
        decimals: 8
    },
    {
        symbol: 'SKIN',
        name: 'SKIN',
        marketSymbol: 'skin',
        identifier: 'eth-erc20-skin',
        contractAddress: '0x2bDC0D42996017fCe214b21607a515DA41A9E0C5',
        decimals: 6
    },
    {
        symbol: 'SKM',
        name: 'Skrumble Network',
        marketSymbol: 'skm',
        identifier: 'eth-erc20-skm',
        contractAddress: '0xd99b8A7fA48E25Cce83B81812220A3E03Bf64e5f',
        decimals: 18
    },
    {
        symbol: 'SKO1',
        name: 'Sikoba',
        marketSymbol: 'sko1',
        identifier: 'eth-erc20-sko1',
        contractAddress: '0x4994e81897a920c0FEA235eb8CEdEEd3c6fFF697',
        decimals: 18
    },
    {
        symbol: 'SKR',
        name: 'SKR Token',
        marketSymbol: 'skr',
        identifier: 'eth-erc20-skr',
        contractAddress: '0x4c382F8E09615AC86E08CE58266CC227e7d4D913',
        decimals: 6
    },
    {
        symbol: 'SKRP',
        name: 'Skraps',
        marketSymbol: 'skrp',
        identifier: 'eth-erc20-skrp',
        contractAddress: '0x324A48eBCbB46e61993931eF9D35F6697CD2901b',
        decimals: 18
    },
    {
        symbol: 'SKRP',
        name: 'Skraps',
        marketSymbol: 'skrp',
        identifier: 'eth-erc20-skrp',
        contractAddress: '0xfdFE8b7aB6CF1bD1E3d14538Ef40686296C42052',
        decimals: 18
    },
    {
        symbol: 'SKRP',
        name: 'Skraps',
        marketSymbol: 'skrp',
        identifier: 'eth-erc20-skrp',
        contractAddress: '0x6E34d8d84764D40f6D7b39cd569Fd017bF53177D',
        decimals: 18
    },
    {
        symbol: 'SKYM',
        name: 'Skymap Token',
        marketSymbol: 'skym',
        identifier: 'eth-erc20-skym',
        contractAddress: '0x7297862B9670fF015192799cc849726c88bf1d77',
        decimals: 18
    },
    {
        symbol: 'SLT',
        name: 'Smartlands',
        marketSymbol: 'slt',
        identifier: 'eth-erc20-slt',
        contractAddress: '0x7A5fF295Dc8239d5C2374E4D894202aAF029Cab6',
        decimals: 3
    },
    {
        symbol: 'SLY',
        name: 'Selfllery',
        marketSymbol: 'sly',
        identifier: 'eth-erc20-sly',
        contractAddress: '0x7928c8aBF1F74eF9F96D4D0a44e3b4209d360785',
        decimals: 18
    },
    {
        symbol: 'SMART',
        name: 'Smart Billions',
        marketSymbol: 'smart',
        identifier: 'eth-erc20-smart',
        contractAddress: '0x6F6DEb5db0C4994A8283A01D6CFeEB27Fc3bBe9C',
        decimals: 0
    },
    {
        symbol: 'SMS',
        name: 'Speed Mining Service',
        marketSymbol: 'sms',
        identifier: 'eth-erc20-sms',
        contractAddress: '0x39013F961c378f02C2b82A6E1d31E9812786FD9D',
        decimals: 3
    },
    {
        symbol: 'SMT',
        name: 'Smart Node',
        marketSymbol: 'smt',
        identifier: 'eth-erc20-smt',
        contractAddress: '0x2dCFAAc11c9EebD8C6C42103Fe9e2a6AD237aF27',
        decimals: 18
    },
    {
        symbol: 'SMT',
        name: 'Social Media Market',
        marketSymbol: 'smt',
        identifier: 'eth-erc20-smt',
        contractAddress: '0x78Eb8DC641077F049f910659b6d580E80dC4d237',
        decimals: 8
    },
    {
        symbol: 'SMT',
        name: 'SmartMesh',
        marketSymbol: 'smt',
        identifier: 'eth-erc20-smt',
        contractAddress: '0x55F93985431Fc9304077687a35A1BA103dC1e081',
        decimals: 18
    },
    {
        symbol: 'SNBL',
        name: 'Snowball',
        marketSymbol: 'snbl',
        identifier: 'eth-erc20-snbl',
        contractAddress: '0x198A87b3114143913d4229Fb0f6D4BCb44aa8AFF',
        decimals: 8
    },
    {
        symbol: 'SNC',
        name: 'SunContract',
        marketSymbol: 'snc',
        identifier: 'eth-erc20-snc',
        contractAddress: '0xF4134146AF2d511Dd5EA8cDB1C4AC88C57D60404',
        decimals: 18
    },
    {
        symbol: 'SND',
        name: 'Sandcoin',
        marketSymbol: 'snd',
        identifier: 'eth-erc20-snd',
        contractAddress: '0xf333b2Ace992ac2bBD8798bF57Bc65a06184afBa',
        decimals: 0
    },
    {
        symbol: 'SNG',
        name: 'SINERGIA',
        marketSymbol: 'sng',
        identifier: 'eth-erc20-sng',
        contractAddress: '0xcFD6Ae8BF13f42DE14867351eAff7A8A3b9FbBe7',
        decimals: 8
    },
    {
        symbol: 'SNGLS',
        name: 'SingularDTV',
        marketSymbol: 'sngls',
        identifier: 'eth-erc20-sngls',
        contractAddress: '0xaeC2E87E0A235266D9C5ADc9DEb4b2E29b54D009',
        decimals: 0
    },
    {
        symbol: 'SNIP',
        name: 'SNIP',
        marketSymbol: 'snip',
        identifier: 'eth-erc20-snip',
        contractAddress: '0x44F588aEeB8C44471439D1270B3603c66a9262F1',
        decimals: 18
    },
    {
        symbol: 'SNM',
        name: 'SONM',
        marketSymbol: 'snm',
        identifier: 'eth-erc20-snm',
        contractAddress: '0x983F6d60db79ea8cA4eB9968C6aFf8cfA04B3c63',
        decimals: 18
    },
    {
        symbol: 'SNOV',
        name: 'Snovian.Space',
        marketSymbol: 'snov',
        identifier: 'eth-erc20-snov',
        contractAddress: '0xBDC5bAC39Dbe132B1E030e898aE3830017D7d969',
        decimals: 18
    },
    {
        symbol: 'SNT',
        name: 'Status Network Token',
        marketSymbol: 'snt',
        identifier: 'eth-erc20-snt',
        contractAddress: '0x744d70FDBE2Ba4CF95131626614a1763DF805B9E',
        decimals: 18
    },
    {
        symbol: 'SNTR',
        name: 'Silent Notary',
        marketSymbol: 'sntr',
        identifier: 'eth-erc20-sntr',
        contractAddress: '0x2859021eE7F2Cb10162E67F33Af2D22764B31aFf',
        decimals: 4
    },
    {
        symbol: 'SNX',
        name: 'Synthetix Network Token',
        marketSymbol: 'snx',
        identifier: 'eth-erc20-snx',
        contractAddress: '0xC011A72400E58ecD99Ee497CF89E3775d4bd732F',
        decimals: 18
    },
    {
        symbol: 'SOAR',
        name: 'Soarcoin',
        marketSymbol: 'soar',
        identifier: 'eth-erc20-soar',
        contractAddress: '0xD65960FAcb8E4a2dFcb2C2212cb2e44a02e2a57E',
        decimals: 6
    },
    {
        symbol: 'SOC',
        name: 'All Sports',
        marketSymbol: 'soc',
        identifier: 'eth-erc20-soc',
        contractAddress: '0x2d0E95bd4795D7aCe0da3C0Ff7b706a5970eb9D3',
        decimals: 18
    },
    {
        symbol: 'SOL',
        name: 'Sola Token',
        marketSymbol: 'sol',
        identifier: 'eth-erc20-sol',
        contractAddress: '0x1F54638b7737193FFd86c19Ec51907A7c41755D8',
        decimals: 6
    },
    {
        symbol: 'SONIQ',
        name: 'Soniq',
        marketSymbol: 'soniq',
        identifier: 'eth-erc20-soniq',
        contractAddress: '0x1C62aCa2b7605Db3606eAcdA7Bc67A1857DDb8FF',
        decimals: 18
    },
    {
        symbol: 'SOUL',
        name: 'CryptoSoul',
        marketSymbol: 'soul',
        identifier: 'eth-erc20-soul',
        contractAddress: '0xBb1f24C0c1554b9990222f036b0AaD6Ee4CAec29',
        decimals: 18
    },
    {
        symbol: 'SPANK',
        name: 'SpankChain',
        marketSymbol: 'spank',
        identifier: 'eth-erc20-spank',
        contractAddress: '0x42d6622deCe394b54999Fbd73D108123806f6a18',
        decimals: 18
    },
    {
        symbol: 'SPARC',
        name: 'SPARC',
        marketSymbol: 'sparc',
        identifier: 'eth-erc20-sparc',
        contractAddress: '0x58bf7df57d9DA7113c4cCb49d8463D4908C735cb',
        decimals: 18
    },
    {
        symbol: 'SPARTA',
        name: 'SPARTA',
        marketSymbol: 'sparta',
        identifier: 'eth-erc20-sparta',
        contractAddress: '0x24AEF3BF1A47561500f9430D74Ed4097C47F51F2',
        decimals: 4
    },
    {
        symbol: 'SPD',
        name: 'SPINDLE',
        marketSymbol: 'spd',
        identifier: 'eth-erc20-spd',
        contractAddress: '0x1dEa979ae76f26071870F824088dA78979eb91C8',
        decimals: 18
    },
    {
        symbol: 'SPF',
        name: 'Sportify',
        marketSymbol: 'spf',
        identifier: 'eth-erc20-spf',
        contractAddress: '0x85089389C14Bd9c77FC2b8F0c3d1dC3363Bf06Ef',
        decimals: 18
    },
    {
        symbol: 'SPHTX',
        name: 'SPHTX',
        marketSymbol: 'sphtx',
        identifier: 'eth-erc20-sphtx',
        contractAddress: '0x3833ddA0AEB6947b98cE454d89366cBA8Cc55528',
        decimals: 18
    },
    {
        symbol: 'SPICE',
        name: 'SPiCE VC Token',
        marketSymbol: 'spice',
        identifier: 'eth-erc20-spice',
        contractAddress: '0x0324dd195D0Cd53F9F07bEe6a48eE7a20bad738f',
        decimals: 8
    },
    {
        symbol: 'SPN',
        name: 'Sapien',
        marketSymbol: 'spn',
        identifier: 'eth-erc20-spn',
        contractAddress: '0x20F7A3DdF244dc9299975b4Da1C39F8D5D75f05A',
        decimals: 6
    },
    {
        symbol: 'SPX',
        name: 'Sp8de',
        marketSymbol: 'spx',
        identifier: 'eth-erc20-spx',
        contractAddress: '0x05aAaA829Afa407D83315cDED1d45EB16025910c',
        decimals: 18
    },
    {
        symbol: 'SRN',
        name: 'Sirin Labs',
        marketSymbol: 'srn',
        identifier: 'eth-erc20-srn',
        contractAddress: '0x68d57c9a1C35f63E2c83eE8e49A64e9d70528D25',
        decimals: 18
    },
    {
        symbol: 'SS',
        name: 'Sharder',
        marketSymbol: 'ss',
        identifier: 'eth-erc20-ss',
        contractAddress: '0xbbFF862d906E348E9946Bfb2132ecB157Da3D4b4',
        decimals: 18
    },
    {
        symbol: 'SS',
        name: 'Sharder',
        marketSymbol: 'ss',
        identifier: 'eth-erc20-ss',
        contractAddress: '0xB15fE5a123e647ba594CEa7A1E648646f95EB4AA',
        decimals: 18
    },
    {
        symbol: 'SSH',
        name: 'StreamShares',
        marketSymbol: 'ssh',
        identifier: 'eth-erc20-ssh',
        contractAddress: '0x6e2050CBFB3eD8A4d39b64cC9f47E711a03a5a89',
        decimals: 18
    },
    {
        symbol: 'SSP',
        name: 'Smartshare',
        marketSymbol: 'ssp',
        identifier: 'eth-erc20-ssp',
        contractAddress: '0x624d520BAB2E4aD83935Fa503fB130614374E850',
        decimals: 4
    },
    {
        symbol: 'STABIT',
        name: 'StabitCoin',
        marketSymbol: 'stabit',
        identifier: 'eth-erc20-stabit',
        contractAddress: '0x4A89cD486fA996ad50c0a63C35c78702f5422a50',
        decimals: 3
    },
    {
        symbol: 'STAC',
        name: 'Starter Coin',
        marketSymbol: 'stac',
        identifier: 'eth-erc20-stac',
        contractAddress: '0x9a005c9a89BD72a4Bd27721E7a09A3c11D2b03C4',
        decimals: 18
    },
    {
        symbol: 'STACS',
        name: 'STACS',
        marketSymbol: 'stacs',
        identifier: 'eth-erc20-stacs',
        contractAddress: '0x286708f069225905194673755F12359e6afF6FE1',
        decimals: 18
    },
    {
        symbol: 'STAR',
        name: 'Star Token',
        marketSymbol: 'star',
        identifier: 'eth-erc20-star',
        contractAddress: '0xF70a642bD387F94380fFb90451C2c81d4Eb82CBc',
        decimals: 18
    },
    {
        symbol: 'STB',
        name: 'STABLE Token',
        marketSymbol: 'stb',
        identifier: 'eth-erc20-stb',
        contractAddress: '0x09BcA6eBAb05Ee2ae945BE4edA51393d94Bf7b99',
        decimals: 4
    },
    {
        symbol: 'STC',
        name: 'StrikeCoin Token',
        marketSymbol: 'stc',
        identifier: 'eth-erc20-stc',
        contractAddress: '0x629aEe55ed49581C33ab27f9403F7992A289ffd5',
        decimals: 18
    },
    {
        symbol: 'STK',
        name: 'STK Token',
        marketSymbol: 'stk',
        identifier: 'eth-erc20-stk',
        contractAddress: '0xaE73B38d1c9A8b274127ec30160a4927C4d71824',
        decimals: 18
    },
    {
        symbol: 'STN',
        name: 'Saturn Network',
        marketSymbol: 'stn',
        identifier: 'eth-erc20-stn',
        contractAddress: '0x599346779e90fc3F5F997b5ea715349820F91571',
        decimals: 4
    },
    {
        symbol: 'STORJ',
        name: 'STORJ',
        marketSymbol: 'storj',
        identifier: 'eth-erc20-storj',
        contractAddress: '0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC',
        decimals: 8
    },
    {
        symbol: 'STORM',
        name: 'Storm Token',
        marketSymbol: 'storm',
        identifier: 'eth-erc20-storm',
        contractAddress: '0xD0a4b8946Cb52f0661273bfbC6fD0E0C75Fc6433',
        decimals: 18
    },
    {
        symbol: 'STP',
        name: 'StashPay',
        marketSymbol: 'stp',
        identifier: 'eth-erc20-stp',
        contractAddress: '0xecd570bBf74761b960Fa04Cc10fe2c4e86FfDA36',
        decimals: 8
    },
    {
        symbol: 'STQ',
        name: 'Storiqa',
        marketSymbol: 'stq',
        identifier: 'eth-erc20-stq',
        contractAddress: '0x5c3a228510D246b78a3765C20221Cbf3082b44a4',
        decimals: 18
    },
    {
        symbol: 'STR',
        name: 'Staker',
        marketSymbol: 'str',
        identifier: 'eth-erc20-str',
        contractAddress: '0xBAE235823D7255D9D48635cEd4735227244Cd583',
        decimals: 18
    },
    {
        symbol: 'STRC',
        name: 'STRC',
        marketSymbol: 'strc',
        identifier: 'eth-erc20-strc',
        contractAddress: '0x46492473755e8dF960F8034877F61732D718CE96',
        decimals: 8
    },
    {
        symbol: 'STU',
        name: 'bitJob',
        marketSymbol: 'stu',
        identifier: 'eth-erc20-stu',
        contractAddress: '0x0371A82e4A9d0A4312f3ee2Ac9c6958512891372',
        decimals: 18
    },
    {
        symbol: 'STX',
        name: 'StoxToken',
        marketSymbol: 'stx',
        identifier: 'eth-erc20-stx',
        contractAddress: '0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45',
        decimals: 18
    },
    {
        symbol: 'SUB',
        name: 'Substratum',
        marketSymbol: 'sub',
        identifier: 'eth-erc20-sub',
        contractAddress: '0x8D75959f1E61EC2571aa72798237101F084DE63a',
        decimals: 18
    },
    {
        symbol: 'SUB (old)',
        name: 'Substratum (old contract)',
        marketSymbol: 'sub (old)',
        identifier: 'eth-erc20-sub (old)',
        contractAddress: '0x12480E24eb5bec1a9D4369CaB6a80caD3c0A377A',
        decimals: 2
    },
    {
        symbol: 'SUR',
        name: 'Suretly',
        marketSymbol: 'sur',
        identifier: 'eth-erc20-sur',
        contractAddress: '0xe120c1ECBfdFeA7F0A8f0Ee30063491E8c26fedf',
        decimals: 8
    },
    {
        symbol: 'sUSD',
        name: 'USD Synth (sUSD)',
        marketSymbol: 'susd',
        identifier: 'eth-erc20-susd',
        contractAddress: '0x57Ab1E02fEE23774580C119740129eAC7081e9D3',
        decimals: 18
    },
    {
        symbol: 'SVD',
        name: 'savedroid',
        marketSymbol: 'svd',
        identifier: 'eth-erc20-svd',
        contractAddress: '0xbdEB4b83251Fb146687fa19D1C660F99411eefe3',
        decimals: 18
    },
    {
        symbol: 'SWFTC',
        name: 'SwftCoin',
        marketSymbol: 'swftc',
        identifier: 'eth-erc20-swftc',
        contractAddress: '0x0bb217E40F8a5Cb79Adf04E1aAb60E5abd0dfC1e',
        decimals: 8
    },
    {
        symbol: 'SWM',
        name: 'Swarm Fund Token',
        marketSymbol: 'swm',
        identifier: 'eth-erc20-swm',
        contractAddress: '0x9e88613418cF03dCa54D6a2cf6Ad934A78C7A17A',
        decimals: 18
    },
    {
        symbol: 'SWT',
        name: 'Swarm City Token',
        marketSymbol: 'swt',
        identifier: 'eth-erc20-swt',
        contractAddress: '0xB9e7F8568e08d5659f5D29C4997173d84CdF2607',
        decimals: 18
    },
    {
        symbol: 'SXDT',
        name: 'Spectre.ai D-Token',
        marketSymbol: 'sxdt',
        identifier: 'eth-erc20-sxdt',
        contractAddress: '0x12B306fA98F4CbB8d4457FdFf3a0A0a56f07cCdf',
        decimals: 18
    },
    {
        symbol: 'SXUT',
        name: 'Spectre.ai U-Token',
        marketSymbol: 'sxut',
        identifier: 'eth-erc20-sxut',
        contractAddress: '0x2C82c73d5B34AA015989462b2948cd616a37641F',
        decimals: 18
    },
    {
        symbol: 'SYN',
        name: 'Synapse',
        marketSymbol: 'syn',
        identifier: 'eth-erc20-syn',
        contractAddress: '0x10B123FdDde003243199aaD03522065dC05827A0',
        decimals: 18
    },
    {
        symbol: 'TaaS',
        name: 'Token-as-a-Service',
        marketSymbol: 'taas',
        identifier: 'eth-erc20-taas',
        contractAddress: '0xE7775A6e9Bcf904eb39DA2b68c5efb4F9360e08C',
        decimals: 6
    },
    {
        symbol: 'TALAO',
        name: 'Talao',
        marketSymbol: 'talao',
        identifier: 'eth-erc20-talao',
        contractAddress: '0x1D4cCC31dAB6EA20f461d329a0562C1c58412515',
        decimals: 18
    },
    {
        symbol: 'TAN',
        name: 'Taklimakan Network',
        marketSymbol: 'tan',
        identifier: 'eth-erc20-tan',
        contractAddress: '0x2C36204a0712A2a50E54A62F7c4F01867e78cB53',
        decimals: 18
    },
    {
        symbol: 'TAU',
        name: 'Lamden Tau',
        marketSymbol: 'tau',
        identifier: 'eth-erc20-tau',
        contractAddress: '0xc27A2F05fa577a83BA0fDb4c38443c0718356501',
        decimals: 18
    },
    {
        symbol: 'TBC2',
        name: 'TBC2',
        marketSymbol: 'tbc2',
        identifier: 'eth-erc20-tbc2',
        contractAddress: '0xFACCD5Fc83c3E4C3c1AC1EF35D15adf06bCF209C',
        decimals: 8
    },
    {
        symbol: 'TBT',
        name: 'TBitBot',
        marketSymbol: 'tbt',
        identifier: 'eth-erc20-tbt',
        contractAddress: '0xAFe60511341a37488de25Bef351952562E31fCc1',
        decimals: 8
    },
    {
        symbol: 'TBX',
        name: 'Tokenbox',
        marketSymbol: 'tbx',
        identifier: 'eth-erc20-tbx',
        contractAddress: '0x3A92bD396aEf82af98EbC0Aa9030D25a23B11C6b',
        decimals: 18
    },
    {
        symbol: 'TCA',
        name: 'TangguoTao Token',
        marketSymbol: 'tca',
        identifier: 'eth-erc20-tca',
        contractAddress: '0xfA0eF5E034CaE1AE752d59bdb8aDcDe37Ed7aB97',
        decimals: 18
    },
    {
        symbol: 'TCH',
        name: 'Thore Cash',
        marketSymbol: 'tch',
        identifier: 'eth-erc20-tch',
        contractAddress: '0x9972A0F24194447E73a7e8b6CD26a52e02DDfAD5',
        decimals: 0
    },
    {
        symbol: 'TDH',
        name: 'TrustedHealth',
        marketSymbol: 'tdh',
        identifier: 'eth-erc20-tdh',
        contractAddress: '0x2a1dbabe65c595B0022e75208C34014139d5d357',
        decimals: 18
    },
    {
        symbol: 'TEAM',
        name: 'TEAM (TokenStars)',
        marketSymbol: 'team',
        identifier: 'eth-erc20-team',
        contractAddress: '0x1c79ab32C66aCAa1e9E81952B8AAa581B43e54E7',
        decimals: 4
    },
    {
        symbol: 'TEL',
        name: 'Telcoin',
        marketSymbol: 'tel',
        identifier: 'eth-erc20-tel',
        contractAddress: '0x85e076361cc813A908Ff672F9BAd1541474402b2',
        decimals: 2
    },
    {
        symbol: 'TEL',
        name: 'Meditel',
        marketSymbol: 'tel',
        identifier: 'eth-erc20-tel',
        contractAddress: '0xEc32A9725C59855d841ba7d8D9c99c84ff754688',
        decimals: 18
    },
    {
        symbol: 'TEN',
        name: 'Tokenomy',
        marketSymbol: 'ten',
        identifier: 'eth-erc20-ten',
        contractAddress: '0xDD16eC0F66E54d453e6756713E533355989040E4',
        decimals: 18
    },
    {
        symbol: 'TFD',
        name: 'TE-FOOD',
        marketSymbol: 'tfd',
        identifier: 'eth-erc20-tfd',
        contractAddress: '0xE5F166c0D8872B68790061317BB6CcA04582C912',
        decimals: 18
    },
    {
        symbol: 'TFL',
        name: 'TrueFlip',
        marketSymbol: 'tfl',
        identifier: 'eth-erc20-tfl',
        contractAddress: '0xa7f976C360ebBeD4465c2855684D1AAE5271eFa9',
        decimals: 8
    },
    {
        symbol: 'TGAME',
        name: 'Truegame',
        marketSymbol: 'tgame',
        identifier: 'eth-erc20-tgame',
        contractAddress: '0xF8e06E4e4A80287FDCa5b02dcCecAa9D0954840F',
        decimals: 18
    },
    {
        symbol: 'TGT',
        name: 'Target Coin',
        marketSymbol: 'tgt',
        identifier: 'eth-erc20-tgt',
        contractAddress: '0xAc3Da587eac229C9896D919aBC235CA4Fd7f72c1',
        decimals: 1
    },
    {
        symbol: 'THETA',
        name: 'Theta Token',
        marketSymbol: 'theta',
        identifier: 'eth-erc20-theta',
        contractAddress: '0x3883f5e181fccaF8410FA61e12b59BAd963fb645',
        decimals: 18
    },
    {
        symbol: 'THR',
        name: 'ThoreCoin',
        marketSymbol: 'thr',
        identifier: 'eth-erc20-thr',
        contractAddress: '0x1Cb3209D45B2a60B7fBCA1cCDBF87f674237A4aa',
        decimals: 4
    },
    {
        symbol: 'THRT',
        name: 'Thrive Token',
        marketSymbol: 'thrt',
        identifier: 'eth-erc20-thrt',
        contractAddress: '0x4f27053F32edA8Af84956437Bc00e5fFa7003287',
        decimals: 18
    },
    {
        symbol: 'THUG',
        name: 'THUG',
        marketSymbol: 'thug',
        identifier: 'eth-erc20-thug',
        contractAddress: '0xfe7B915A0bAA0E79f85c5553266513F7C1c03Ed0',
        decimals: 18
    },
    {
        symbol: 'TIC',
        name: 'Trust Invest',
        marketSymbol: 'tic',
        identifier: 'eth-erc20-tic',
        contractAddress: '0x614b9802D45Aa1bC2282651dC1408632F9027A6e',
        decimals: 18
    },
    {
        symbol: 'TIC',
        name: 'Thingschain',
        marketSymbol: 'tic',
        identifier: 'eth-erc20-tic',
        contractAddress: '0x72430A612Adc007c50e3b6946dBb1Bb0fd3101D1',
        decimals: 8
    },
    {
        symbol: 'TICO',
        name: 'Topinvestmentcoin',
        marketSymbol: 'tico',
        identifier: 'eth-erc20-tico',
        contractAddress: '0xa5dB1d6F7A0D5Bccc17d0bFD39D7AF32d5E5EDc6',
        decimals: 5
    },
    {
        symbol: 'TICO',
        name: 'Topinvestmentcoin',
        marketSymbol: 'tico',
        identifier: 'eth-erc20-tico',
        contractAddress: '0x7F4B2A690605A7cbb66F7AA6885EbD906a5e2E9E',
        decimals: 8
    },
    {
        symbol: 'TIE',
        name: 'Ties.DB',
        marketSymbol: 'tie',
        identifier: 'eth-erc20-tie',
        contractAddress: '0x999967E2Ec8A74B7c8E9dB19E039d920B31d39D0',
        decimals: 18
    },
    {
        symbol: 'TIG',
        name: 'Tigereum',
        marketSymbol: 'tig',
        identifier: 'eth-erc20-tig',
        contractAddress: '0xEee2d00Eb7DEB8Dd6924187f5AA3496B7d06E62A',
        decimals: 18
    },
    {
        symbol: 'TIME',
        name: 'Chronobank',
        marketSymbol: 'time',
        identifier: 'eth-erc20-time',
        contractAddress: '0x6531f133e6DeeBe7F2dcE5A0441aA7ef330B4e53',
        decimals: 8
    },
    {
        symbol: 'TIO',
        name: 'TIO',
        marketSymbol: 'tio',
        identifier: 'eth-erc20-tio',
        contractAddress: '0x80BC5512561c7f85A3A9508c7df7901b370Fa1DF',
        decimals: 18
    },
    {
        symbol: 'TIX',
        name: 'Blocktix',
        marketSymbol: 'tix',
        identifier: 'eth-erc20-tix',
        contractAddress: '0xEa1f346faF023F974Eb5adaf088BbCdf02d761F4',
        decimals: 18
    },
    {
        symbol: 'TKA',
        name: 'Tokia',
        marketSymbol: 'tka',
        identifier: 'eth-erc20-tka',
        contractAddress: '0xdaE1Baf249964bc4b6aC98c3122f0e3E785fd279',
        decimals: 18
    },
    {
        symbol: 'TKLN',
        name: 'Taklimakan Network',
        marketSymbol: 'tkln',
        identifier: 'eth-erc20-tkln',
        contractAddress: '0x0675DAa94725A528b05A3A88635C03EA964BFA7E',
        decimals: 18
    },
    {
        symbol: 'TKN',
        name: 'TokenCard',
        marketSymbol: 'tkn',
        identifier: 'eth-erc20-tkn',
        contractAddress: '0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a',
        decimals: 8
    },
    {
        symbol: 'TKR',
        name: 'TKRToken',
        marketSymbol: 'tkr',
        identifier: 'eth-erc20-tkr',
        contractAddress: '0xB45a50545bEEAB73F38F31E5973768C421805E5E',
        decimals: 18
    },
    {
        symbol: 'TLX',
        name: 'Telex',
        marketSymbol: 'tlx',
        identifier: 'eth-erc20-tlx',
        contractAddress: '0xb3616550aBc8AF79c7A5902DEF9Efa3bC9A95200',
        decimals: 8
    },
    {
        symbol: 'TMT',
        name: 'TRAXIA',
        marketSymbol: 'tmt',
        identifier: 'eth-erc20-tmt',
        contractAddress: '0x3209f98BeBF0149B769ce26D71F7aEA8E435EfEa',
        decimals: 18
    },
    {
        symbol: 'TMTG',
        name: 'TMTG',
        marketSymbol: 'tmtg',
        identifier: 'eth-erc20-tmtg',
        contractAddress: '0x10086399DD8c1e3De736724AF52587a2044c9fA2',
        decimals: 18
    },
    {
        symbol: 'TNS',
        name: 'Transcodium',
        marketSymbol: 'tns',
        identifier: 'eth-erc20-tns',
        contractAddress: '0xb0280743b44bF7db4B6bE482b2Ba7b75E5dA096C',
        decimals: 18
    },
    {
        symbol: 'TNT',
        name: 'Tierion Network Token',
        marketSymbol: 'tnt',
        identifier: 'eth-erc20-tnt',
        contractAddress: '0x08f5a9235B08173b7569F83645d2c7fB55e8cCD8',
        decimals: 8
    },
    {
        symbol: 'TOK',
        name: 'TOKOK',
        marketSymbol: 'tok',
        identifier: 'eth-erc20-tok',
        contractAddress: '0x9a49f02e128a8E989b443a8f94843C0918BF45E7',
        decimals: 8
    },
    {
        symbol: 'TOMO',
        name: 'Tomocoin',
        marketSymbol: 'tomo',
        identifier: 'eth-erc20-tomo',
        contractAddress: '0x8b353021189375591723E7384262F45709A3C3dC',
        decimals: 18
    },
    {
        symbol: 'TOOR',
        name: 'ToorCoin',
        marketSymbol: 'toor',
        identifier: 'eth-erc20-toor',
        contractAddress: '0x8eb965ee9cCFBCE76c0a06264492c0afEfc2826d',
        decimals: 18
    },
    {
        symbol: 'TRAC',
        name: 'OriginTrail',
        marketSymbol: 'trac',
        identifier: 'eth-erc20-trac',
        contractAddress: '0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F',
        decimals: 18
    },
    {
        symbol: 'TRAK',
        name: 'TrakInvest',
        marketSymbol: 'trak',
        identifier: 'eth-erc20-trak',
        contractAddress: '0x12759512D326303B45f1ceC8F7B6fd96F387778E',
        decimals: 18
    },
    {
        symbol: 'TRC',
        name: 'The Real Coin',
        marketSymbol: 'trc',
        identifier: 'eth-erc20-trc',
        contractAddress: '0xcB3F902bf97626391bF8bA87264bbC3DC13469be',
        decimals: 18
    },
    {
        symbol: 'TRCN',
        name: 'The Real Coin',
        marketSymbol: 'trcn',
        identifier: 'eth-erc20-trcn',
        contractAddress: '0x566Fd7999B1Fc3988022bD38507A48F0bCf22c77',
        decimals: 18
    },
    {
        symbol: 'TRCT',
        name: 'Tracto',
        marketSymbol: 'trct',
        identifier: 'eth-erc20-trct',
        contractAddress: '0x30ceCB5461A449A90081F5a5F55db4e048397BAB',
        decimals: 8
    },
    {
        symbol: 'TRDT',
        name: 'Trident Group',
        marketSymbol: 'trdt',
        identifier: 'eth-erc20-trdt',
        contractAddress: '0x33f90Dee07c6E8B9682dD20F73E6C358B2ED0f03',
        decimals: 0
    },
    {
        symbol: 'TRST',
        name: 'WeTrust',
        marketSymbol: 'trst',
        identifier: 'eth-erc20-trst',
        contractAddress: '0xCb94be6f13A1182E4A4B6140cb7bf2025d28e41B',
        decimals: 6
    },
    {
        symbol: 'TRX',
        name: 'Tron Lab Token',
        marketSymbol: 'trx',
        identifier: 'eth-erc20-trx',
        contractAddress: '0xf230b790E05390FC8295F4d3F60332c93BEd42e2',
        decimals: 6
    },
    {
        symbol: 'TSW',
        name: 'TeslaWatt',
        marketSymbol: 'tsw',
        identifier: 'eth-erc20-tsw',
        contractAddress: '0x6B87999bE87358065bBdE41e8a0fe0B7b1cd2514',
        decimals: 18
    },
    {
        symbol: 'TTA',
        name: 'Tend Token',
        marketSymbol: 'tta',
        identifier: 'eth-erc20-tta',
        contractAddress: '0xaaB606817809841E8b1168be8779Eeaf6744Ef64',
        decimals: 18
    },
    {
        symbol: 'TTC',
        name: 'TTC Protocol',
        marketSymbol: 'ttc',
        identifier: 'eth-erc20-ttc',
        contractAddress: '0x9389434852b94bbaD4c8AfEd5B7BDBc5Ff0c2275',
        decimals: 18
    },
    {
        symbol: 'TTU',
        name: 'TaTaTu',
        marketSymbol: 'ttu',
        identifier: 'eth-erc20-ttu',
        contractAddress: '0x9CDa8A60dd5AfA156c95Bd974428d91a0812e054',
        decimals: 18
    },
    {
        symbol: 'TUSD',
        name: 'TrueUSD',
        marketSymbol: 'tusd',
        identifier: 'eth-erc20-tusd',
        contractAddress: '0x0000000000085d4780B73119b644AE5ecd22b376',
        decimals: 18
    },
    {
        symbol: 'TUSD (OLD)',
        name: 'TrueUSD',
        marketSymbol: 'tusd (old)',
        identifier: 'eth-erc20-tusd (old)',
        contractAddress: '0x8dd5fbCe2F6a956C3022bA3663759011Dd51e73E',
        decimals: 18
    },
    {
        symbol: 'TWN',
        name: 'The World News',
        marketSymbol: 'twn',
        identifier: 'eth-erc20-twn',
        contractAddress: '0x2eF1aB8a26187C58BB8aAeB11B2fC6D25C5c0716',
        decimals: 18
    },
    {
        symbol: 'TWNKL',
        name: 'Twinkle',
        marketSymbol: 'twnkl',
        identifier: 'eth-erc20-twnkl',
        contractAddress: '0xfbd0d1c77B501796A35D86cF91d65D9778EeE695',
        decimals: 3
    },
    {
        symbol: 'UBT',
        name: 'Unibright',
        marketSymbol: 'ubt',
        identifier: 'eth-erc20-ubt',
        contractAddress: '0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e',
        decimals: 8
    },
    {
        symbol: 'UCASH',
        name: 'U.CASH',
        marketSymbol: 'ucash',
        identifier: 'eth-erc20-ucash',
        contractAddress: '0x92e52a1A235d9A103D970901066CE910AAceFD37',
        decimals: 8
    },
    {
        symbol: 'UCN',
        name: 'UChain',
        marketSymbol: 'ucn',
        identifier: 'eth-erc20-ucn',
        contractAddress: '0xAAf37055188Feee4869dE63464937e683d61b2a1',
        decimals: 18
    },
    {
        symbol: 'UFR',
        name: 'Upfiring',
        marketSymbol: 'ufr',
        identifier: 'eth-erc20-ufr',
        contractAddress: '0xEA097A2b1dB00627B2Fa17460Ad260c016016977',
        decimals: 18
    },
    {
        symbol: 'UKG',
        name: 'UnikoinGold',
        marketSymbol: 'ukg',
        identifier: 'eth-erc20-ukg',
        contractAddress: '0x24692791Bc444c5Cd0b81e3CBCaba4b04Acd1F3B',
        decimals: 18
    },
    {
        symbol: 'UMKA',
        name: 'UMKA',
        marketSymbol: 'umka',
        identifier: 'eth-erc20-umka',
        contractAddress: '0x105d97ef2E723f1cfb24519Bc6fF15a6D091a3F1',
        decimals: 4
    },
    {
        symbol: 'UMKA',
        name: 'UMKA',
        marketSymbol: 'umka',
        identifier: 'eth-erc20-umka',
        contractAddress: '0x8e5afc69f6227A3ad75eD346c8723Bc62ce97123',
        decimals: 4
    },
    {
        symbol: 'Unicorn',
        name: 'Unicorn',
        marketSymbol: 'unicorn',
        identifier: 'eth-erc20-unicorn',
        contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
        decimals: 0
    },
    {
        symbol: 'UP',
        name: 'UpToken',
        marketSymbol: 'up',
        identifier: 'eth-erc20-up',
        contractAddress: '0x6Ba460AB75Cd2c56343b3517ffeBA60748654D26',
        decimals: 8
    },
    {
        symbol: 'UPP',
        name: 'Sentinel Protocol',
        marketSymbol: 'upp',
        identifier: 'eth-erc20-upp',
        contractAddress: '0xC86D054809623432210c107af2e3F619DcFbf652',
        decimals: 18
    },
    {
        symbol: 'UQC',
        name: 'Uquid Coin',
        marketSymbol: 'uqc',
        identifier: 'eth-erc20-uqc',
        contractAddress: '0xD01DB73E047855Efb414e6202098C4Be4Cd2423B',
        decimals: 18
    },
    {
        symbol: 'URB',
        name: 'Urbit Data',
        marketSymbol: 'urb',
        identifier: 'eth-erc20-urb',
        contractAddress: '0x931684139f756C24eC0731E9F74FE50e5548dDeF',
        decimals: 18
    },
    {
        symbol: 'USDC',
        name: 'USD//Coin',
        marketSymbol: 'usdc',
        identifier: 'eth-erc20-usdc',
        contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        decimals: 6
    },
    {
        symbol: 'USDM',
        name: 'Mether (USDM)',
        marketSymbol: 'usdm',
        identifier: 'eth-erc20-usdm',
        contractAddress: '0xD760ADdFb24D9C01Fe4Bfea7475C5e3636684058',
        decimals: 2
    },
    {
        symbol: 'USDS',
        name: 'StableUSD',
        marketSymbol: 'usds',
        identifier: 'eth-erc20-usds',
        contractAddress: '0xA4Bdb11dc0a2bEC88d24A3aa1E6Bb17201112eBe',
        decimals: 6
    },
    {
        symbol: 'USDT',
        name: 'USD Tether (erc20)',
        marketSymbol: 'usdt',
        identifier: 'eth-erc20-usdt',
        contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        decimals: 6
    },
    {
        symbol: 'UTK',
        name: 'UTRUST',
        marketSymbol: 'utk',
        identifier: 'eth-erc20-utk',
        contractAddress: '0x70a72833d6bF7F508C8224CE59ea1Ef3d0Ea3A38',
        decimals: 18
    },
    {
        symbol: 'UTNP',
        name: 'Universa',
        marketSymbol: 'utnp',
        identifier: 'eth-erc20-utnp',
        contractAddress: '0x9e3319636e2126e3c0bc9e3134AEC5e1508A46c7',
        decimals: 18
    },
    {
        symbol: 'UTT',
        name: 'United Traders Token',
        marketSymbol: 'utt',
        identifier: 'eth-erc20-utt',
        contractAddress: '0x16f812Be7FfF02cAF662B85d5d58a5da6572D4Df',
        decimals: 8
    },
    {
        symbol: 'UUU',
        name: 'U Networks',
        marketSymbol: 'uuu',
        identifier: 'eth-erc20-uuu',
        contractAddress: '0x3543638eD4a9006E4840B105944271Bcea15605D',
        decimals: 18
    },
    {
        symbol: 'VDG',
        name: 'VeriDocGlobal',
        marketSymbol: 'vdg',
        identifier: 'eth-erc20-vdg',
        contractAddress: '0x57C75ECCc8557136D32619a191fBCDc88560d711',
        decimals: 0
    },
    {
        symbol: 'VDOC',
        name: 'Duty of Care Token',
        marketSymbol: 'vdoc',
        identifier: 'eth-erc20-vdoc',
        contractAddress: '0x82BD526bDB718C6d4DD2291Ed013A5186cAE2DCa',
        decimals: 18
    },
    {
        symbol: 'VEE',
        name: 'BLOCKv',
        marketSymbol: 'vee',
        identifier: 'eth-erc20-vee',
        contractAddress: '0x340D2bdE5Eb28c1eed91B2f790723E3B160613B7',
        decimals: 18
    },
    {
        symbol: 'VEN',
        name: 'VeChain',
        marketSymbol: 'ven',
        identifier: 'eth-erc20-ven',
        contractAddress: '0xD850942eF8811f2A866692A623011bDE52a462C1',
        decimals: 18
    },
    {
        symbol: 'VENUS',
        name: 'VENUS',
        marketSymbol: 'venus',
        identifier: 'eth-erc20-venus',
        contractAddress: '0xEbeD4fF9fe34413db8fC8294556BBD1528a4DAca',
        decimals: 3
    },
    {
        symbol: 'VERI',
        name: 'Veritaseum',
        marketSymbol: 'veri',
        identifier: 'eth-erc20-veri',
        contractAddress: '0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374',
        decimals: 18
    },
    {
        symbol: 'VIB',
        name: 'Viberate',
        marketSymbol: 'vib',
        identifier: 'eth-erc20-vib',
        contractAddress: '0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724',
        decimals: 18
    },
    {
        symbol: 'VIBE',
        name: 'VIBE Coin',
        marketSymbol: 'vibe',
        identifier: 'eth-erc20-vibe',
        contractAddress: '0xe8Ff5C9c75dEb346acAc493C463C8950Be03Dfba',
        decimals: 18
    },
    {
        symbol: 'VIBEX',
        name: 'VIBEX Exchange Token',
        marketSymbol: 'vibex',
        identifier: 'eth-erc20-vibex',
        contractAddress: '0x882448f83d90B2bf477Af2eA79327fDEA1335D93',
        decimals: 18
    },
    {
        symbol: 'VIDT',
        name: 'V-ID Token',
        marketSymbol: 'vidt',
        identifier: 'eth-erc20-vidt',
        contractAddress: '0x445f51299Ef3307dBD75036dd896565F5B4BF7A5',
        decimals: 18
    },
    {
        symbol: 'VIEW',
        name: 'Viewly',
        marketSymbol: 'view',
        identifier: 'eth-erc20-view',
        contractAddress: '0xF03f8D65BaFA598611C3495124093c56e8F638f0',
        decimals: 18
    },
    {
        symbol: 'VIKKY',
        name: 'VikkyToken',
        marketSymbol: 'vikky',
        identifier: 'eth-erc20-vikky',
        contractAddress: '0xd2946be786F35c3Cc402C29b323647aBda799071',
        decimals: 8
    },
    {
        symbol: 'VIN',
        name: 'VIN',
        marketSymbol: 'vin',
        identifier: 'eth-erc20-vin',
        contractAddress: '0xF3e014fE81267870624132ef3A646B8E83853a96',
        decimals: 18
    },
    {
        symbol: 'VIT',
        name: 'Vice Industry Token',
        marketSymbol: 'vit',
        identifier: 'eth-erc20-vit',
        contractAddress: '0x23b75Bc7AaF28e2d6628C3f424B3882F8f072a3c',
        decimals: 18
    },
    {
        symbol: 'VITE',
        name: 'Vite',
        marketSymbol: 'vite',
        identifier: 'eth-erc20-vite',
        contractAddress: '0x1b793E49237758dBD8b752AFC9Eb4b329d5Da016',
        decimals: 18
    },
    {
        symbol: 'VIU',
        name: 'Viuly',
        marketSymbol: 'viu',
        identifier: 'eth-erc20-viu',
        contractAddress: '0x519475b31653E46D20cD09F9FdcF3B12BDAcB4f5',
        decimals: 18
    },
    {
        symbol: 'VLD',
        name: 'VETRI',
        marketSymbol: 'vld',
        identifier: 'eth-erc20-vld',
        contractAddress: '0x922aC473A3cC241fD3a0049Ed14536452D58D73c',
        decimals: 18
    },
    {
        symbol: 'VOC',
        name: 'VORMACOIN',
        marketSymbol: 'voc',
        identifier: 'eth-erc20-voc',
        contractAddress: '0xc3bC9Eb71f75Ec439A6b6C8E8b746fCF5b62F703',
        decimals: 18
    },
    {
        symbol: 'VOISE',
        name: 'Voise',
        marketSymbol: 'voise',
        identifier: 'eth-erc20-voise',
        contractAddress: '0x83eEA00D838f92dEC4D1475697B9f4D3537b56E3',
        decimals: 8
    },
    {
        symbol: 'VRS',
        name: 'Veros',
        marketSymbol: 'vrs',
        identifier: 'eth-erc20-vrs',
        contractAddress: '0x92E78dAe1315067a8819EFD6dCA432de9DCdE2e9',
        decimals: 6
    },
    {
        symbol: 'VRS',
        name: 'Veros',
        marketSymbol: 'vrs',
        identifier: 'eth-erc20-vrs',
        contractAddress: '0xeDBaF3c5100302dCddA53269322f3730b1F0416d',
        decimals: 5
    },
    {
        symbol: 'VSL',
        name: 'Vdice',
        marketSymbol: 'vsl',
        identifier: 'eth-erc20-vsl',
        contractAddress: '0x5c543e7AE0A1104f78406C340E9C64FD9fCE5170',
        decimals: 18
    },
    {
        symbol: 'VUU',
        name: 'Vuulr Token',
        marketSymbol: 'vuu',
        identifier: 'eth-erc20-vuu',
        contractAddress: '0x4b96bf1feF93A216914fc843D81207A027ce52b3',
        decimals: 18
    },
    {
        symbol: 'VZT',
        name: 'Vezt',
        marketSymbol: 'vzt',
        identifier: 'eth-erc20-vzt',
        contractAddress: '0x9720b467a710382A232a32F540bDCed7d662a10B',
        decimals: 18
    },
    {
        symbol: 'WAB',
        name: 'WABnetwork',
        marketSymbol: 'wab',
        identifier: 'eth-erc20-wab',
        contractAddress: '0x4BBbC57aF270138Ef2FF2C50DbfAD684e9E0e604',
        decimals: 18
    },
    {
        symbol: 'WABI',
        name: 'Tael',
        marketSymbol: 'wabi',
        identifier: 'eth-erc20-wabi',
        contractAddress: '0x286BDA1413a2Df81731D4930ce2F862a35A609fE',
        decimals: 18
    },
    {
        symbol: 'WATT',
        name: 'WorkChain App Token',
        marketSymbol: 'watt',
        identifier: 'eth-erc20-watt',
        contractAddress: '0x829A4cA1303383F1082B6B1fB937116e4b3b5605',
        decimals: 18
    },
    {
        symbol: 'WAX',
        name: 'WAX',
        marketSymbol: 'wax',
        identifier: 'eth-erc20-wax',
        contractAddress: '0x39Bb259F66E1C59d5ABEF88375979b4D20D98022',
        decimals: 8
    },
    {
        symbol: 'WBA',
        name: 'WeBetCrypto',
        marketSymbol: 'wba',
        identifier: 'eth-erc20-wba',
        contractAddress: '0x74951B677de32D596EE851A233336926e6A2cd09',
        decimals: 7
    },
    {
        symbol: 'WBTC',
        name: 'Wrapped Bitcoin',
        marketSymbol: 'wbtc',
        identifier: 'eth-erc20-wbtc',
        contractAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        decimals: 8
    },
    {
        symbol: 'WCN',
        name: 'WorldCoinNetwork',
        marketSymbol: 'wcn',
        identifier: 'eth-erc20-wcn',
        contractAddress: '0x8F936fE0faF0604c9C0Ef2406bde0A65365515d6',
        decimals: 18
    },
    {
        symbol: 'WCT',
        name: 'WePower',
        marketSymbol: 'wct',
        identifier: 'eth-erc20-wct',
        contractAddress: '0x6a0A97E47d15aAd1D132a1Ac79a480E3F2079063',
        decimals: 18
    },
    {
        symbol: 'WEB',
        name: 'Webcoin',
        marketSymbol: 'web',
        identifier: 'eth-erc20-web',
        contractAddress: '0x840fe75ABfaDc0F2d54037829571B2782e919ce4',
        decimals: 18
    },
    {
        symbol: 'WETH',
        name: 'WETH',
        marketSymbol: 'weth',
        identifier: 'eth-erc20-weth',
        contractAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        decimals: 18
    },
    {
        symbol: 'WHEN',
        name: 'WHEN Token',
        marketSymbol: 'when',
        identifier: 'eth-erc20-when',
        contractAddress: '0xF4FE95603881D0e07954fD7605E0e9a916e42C44',
        decimals: 18
    },
    {
        symbol: 'WHO',
        name: 'WhoHas',
        marketSymbol: 'who',
        identifier: 'eth-erc20-who',
        contractAddress: '0xe933c0Cd9784414d5F278C114904F5A84b396919',
        decimals: 18
    },
    {
        symbol: 'WHO',
        name: 'WhoHas',
        marketSymbol: 'who',
        identifier: 'eth-erc20-who',
        contractAddress: '0xe200641890772FCe8eE6EDc5354cCEa30ac92F49',
        decimals: 18
    },
    {
        symbol: 'WIB',
        name: 'Wibson Token',
        marketSymbol: 'wib',
        identifier: 'eth-erc20-wib',
        contractAddress: '0x3F17Dd476faF0a4855572F0B6ed5115D9bBA22AD',
        decimals: 18
    },
    {
        symbol: 'WiC',
        name: 'Wi Coin',
        marketSymbol: 'wic',
        identifier: 'eth-erc20-wic',
        contractAddress: '0x5e4ABE6419650CA839Ce5BB7Db422b881a6064bB',
        decimals: 18
    },
    {
        symbol: 'WIC',
        name: 'WickNote',
        marketSymbol: 'wic',
        identifier: 'eth-erc20-wic',
        contractAddress: '0x62CD07D414Ec50B68C7EcAa863a23d344f2d062f',
        decimals: 0
    },
    {
        symbol: 'WILD',
        name: 'WILD Token',
        marketSymbol: 'wild',
        identifier: 'eth-erc20-wild',
        contractAddress: '0xD3C00772B24D997A812249ca637a921e81357701',
        decimals: 18
    },
    {
        symbol: 'WIN',
        name: 'WCOIN',
        marketSymbol: 'win',
        identifier: 'eth-erc20-win',
        contractAddress: '0x899338b84D25aC505a332aDCE7402d697D947494',
        decimals: 8
    },
    {
        symbol: 'WINGS',
        name: 'WINGS',
        marketSymbol: 'wings',
        identifier: 'eth-erc20-wings',
        contractAddress: '0x667088b212ce3d06a1b553a7221E1fD19000d9aF',
        decimals: 18
    },
    {
        symbol: 'WISH',
        name: 'MyWish',
        marketSymbol: 'wish',
        identifier: 'eth-erc20-wish',
        contractAddress: '0x1b22C32cD936cB97C28C5690a0695a82Abf688e6',
        decimals: 18
    },
    {
        symbol: 'WMK',
        name: 'WemarkToken',
        marketSymbol: 'wmk',
        identifier: 'eth-erc20-wmk',
        contractAddress: '0xBFbe5332f172d77811bC6c272844f3e54A7B23bB',
        decimals: 18
    },
    {
        symbol: 'WNK',
        name: 'Woonk',
        marketSymbol: 'wnk',
        identifier: 'eth-erc20-wnk',
        contractAddress: '0xd73A66B8FB26Be8B0AcD7c52Bd325054Ac7d468b',
        decimals: 18
    },
    {
        symbol: 'WOC',
        name: 'WallOfChain',
        marketSymbol: 'woc',
        identifier: 'eth-erc20-woc',
        contractAddress: '0xF9D9702D031407F425a4412682fDc56b07d05262',
        decimals: 0
    },
    {
        symbol: 'WOLK',
        name: 'Wolk Token',
        marketSymbol: 'wolk',
        identifier: 'eth-erc20-wolk',
        contractAddress: '0xF6B55acBBC49f4524Aa48D19281A9A77c54DE10f',
        decimals: 18
    },
    {
        symbol: 'WOLK',
        name: 'WOLK',
        marketSymbol: 'wolk',
        identifier: 'eth-erc20-wolk',
        contractAddress: '0x728781E75735dc0962Df3a51d7Ef47E798A7107E',
        decimals: 18
    },
    {
        symbol: 'WORK',
        name: 'workTOKEN',
        marketSymbol: 'work',
        identifier: 'eth-erc20-work',
        contractAddress: '0xD18e454D844eb0009D32E07A0Cde89E18d64CFb4',
        decimals: 18
    },
    {
        symbol: 'WORK',
        name: 'Aworker',
        marketSymbol: 'work',
        identifier: 'eth-erc20-work',
        contractAddress: '0xA686514FAF7d54289266F483D1e4852C99E13EC7',
        decimals: 8
    },
    {
        symbol: 'WPC',
        name: 'WorldPeaceCoin',
        marketSymbol: 'wpc',
        identifier: 'eth-erc20-wpc',
        contractAddress: '0x62087245087125d3DB5B9A3D713d78E7BBc31e54',
        decimals: 18
    },
    {
        symbol: 'WPR',
        name: 'WePower Token',
        marketSymbol: 'wpr',
        identifier: 'eth-erc20-wpr',
        contractAddress: '0x4CF488387F035FF08c371515562CBa712f9015d4',
        decimals: 18
    },
    {
        symbol: 'WRC',
        name: 'Worldcore',
        marketSymbol: 'wrc',
        identifier: 'eth-erc20-wrc',
        contractAddress: '0x72aDadb447784dd7AB1F472467750fC485e4cb2d',
        decimals: 6
    },
    {
        symbol: 'WRK',
        name: 'WorkCoin',
        marketSymbol: 'wrk',
        identifier: 'eth-erc20-wrk',
        contractAddress: '0x71e8d74fF1C923E369D0e70DFb09866629C4DD35',
        decimals: 18
    },
    {
        symbol: 'WTC',
        name: 'Waltonchain',
        marketSymbol: 'wtc',
        identifier: 'eth-erc20-wtc',
        contractAddress: '0xb7cB1C96dB6B22b0D3d9536E0108d062BD488F74',
        decimals: 18
    },
    {
        symbol: 'WTT',
        name: 'WTT',
        marketSymbol: 'wtt',
        identifier: 'eth-erc20-wtt',
        contractAddress: '0x84119cb33E8F590D75c2D6Ea4e6B0741a7494EDA',
        decimals: 0
    },
    {
        symbol: 'WYS',
        name: 'wystoken',
        marketSymbol: 'wys',
        identifier: 'eth-erc20-wys',
        contractAddress: '0xd8950fDeaa10304B7A7Fd03a2FC66BC39f3c711a',
        decimals: 18
    },
    {
        symbol: 'WYV',
        name: 'WyvernToken',
        marketSymbol: 'wyv',
        identifier: 'eth-erc20-wyv',
        contractAddress: '0x056017c55aE7AE32d12AeF7C679dF83A85ca75Ff',
        decimals: 18
    },
    {
        symbol: 'X8X',
        name: 'X8X',
        marketSymbol: 'x8x',
        identifier: 'eth-erc20-x8x',
        contractAddress: '0x910Dfc18D6EA3D6a7124A6F8B5458F281060fa4c',
        decimals: 18
    },
    {
        symbol: 'XAUR',
        name: 'Xaurum',
        marketSymbol: 'xaur',
        identifier: 'eth-erc20-xaur',
        contractAddress: '0x4DF812F6064def1e5e029f1ca858777CC98D2D81',
        decimals: 8
    },
    {
        symbol: 'XBL',
        name: 'Billionaire Token',
        marketSymbol: 'xbl',
        identifier: 'eth-erc20-xbl',
        contractAddress: '0x49AeC0752E68D0282Db544C677f6BA407BA17ED7',
        decimals: 18
    },
    {
        symbol: 'XBP',
        name: 'BlitzPredict',
        marketSymbol: 'xbp',
        identifier: 'eth-erc20-xbp',
        contractAddress: '0x28dee01D53FED0Edf5f6E310BF8Ef9311513Ae40',
        decimals: 18
    },
    {
        symbol: 'XCC',
        name: 'CoinCrowd',
        marketSymbol: 'xcc',
        identifier: 'eth-erc20-xcc',
        contractAddress: '0x4d829f8C92a6691c56300D020c9e0dB984Cfe2BA',
        decimals: 18
    },
    {
        symbol: 'XCHF',
        name: 'CryptoFranc',
        marketSymbol: 'xchf',
        identifier: 'eth-erc20-xchf',
        contractAddress: '0xB4272071eCAdd69d933AdcD19cA99fe80664fc08',
        decimals: 18
    },
    {
        symbol: 'XCLR',
        name: 'ClearCoin',
        marketSymbol: 'xclr',
        identifier: 'eth-erc20-xclr',
        contractAddress: '0x1E26b3D07E57F453caE30F7DDd2f945f5bF3EF33',
        decimals: 8
    },
    {
        symbol: 'XDCE',
        name: 'XinFin Network',
        marketSymbol: 'xdce',
        identifier: 'eth-erc20-xdce',
        contractAddress: '0x41AB1b6fcbB2fA9DCEd81aCbdeC13Ea6315F2Bf2',
        decimals: 18
    },
    {
        symbol: 'XES',
        name: 'Proxeus',
        marketSymbol: 'xes',
        identifier: 'eth-erc20-xes',
        contractAddress: '0xA017ac5faC5941f95010b12570B812C974469c2C',
        decimals: 18
    },
    {
        symbol: 'XET',
        name: 'ETERNAL TOKEN',
        marketSymbol: 'xet',
        identifier: 'eth-erc20-xet',
        contractAddress: '0x054C64741dBafDC19784505494029823D89c3b13',
        decimals: 8
    },
    {
        symbol: 'XFS',
        name: 'Fanship',
        marketSymbol: 'xfs',
        identifier: 'eth-erc20-xfs',
        contractAddress: '0x16aF5bfb4Ae7E475b9aDC3Bf5Cb2f1E6a50d7940',
        decimals: 8
    },
    {
        symbol: 'XGG',
        name: 'Going Gems',
        marketSymbol: 'xgg',
        identifier: 'eth-erc20-xgg',
        contractAddress: '0xf6b6AA0Ef0f5Edc2C1c5d925477F97eAF66303e7',
        decimals: 8
    },
    {
        symbol: 'XGM',
        name: 'XGM',
        marketSymbol: 'xgm',
        identifier: 'eth-erc20-xgm',
        contractAddress: '0x533ef0984b2FAA227AcC620C67cce12aA39CD8CD',
        decimals: 8
    },
    {
        symbol: 'XGT',
        name: 'XGT',
        marketSymbol: 'xgt',
        identifier: 'eth-erc20-xgt',
        contractAddress: '0x30f4A3e0aB7a76733D8b60b89DD93c3D0b4c9E2f',
        decimals: 18
    },
    {
        symbol: 'XID',
        name: 'Sphere Identity',
        marketSymbol: 'xid',
        identifier: 'eth-erc20-xid',
        contractAddress: '0xB110eC7B1dcb8FAB8dEDbf28f53Bc63eA5BEdd84',
        decimals: 8
    },
    {
        symbol: 'XMCT',
        name: 'XMED Chain',
        marketSymbol: 'xmct',
        identifier: 'eth-erc20-xmct',
        contractAddress: '0x44449Fa4d607F807d1eD4a69ad942971728391C8',
        decimals: 18
    },
    {
        symbol: 'XMX',
        name: 'XMax',
        marketSymbol: 'xmx',
        identifier: 'eth-erc20-xmx',
        contractAddress: '0x0f8c45B896784A1E408526B9300519ef8660209c',
        decimals: 8
    },
    {
        symbol: 'XNK',
        name: 'Ink Protocol',
        marketSymbol: 'xnk',
        identifier: 'eth-erc20-xnk',
        contractAddress: '0xBC86727E770de68B1060C91f6BB6945c73e10388',
        decimals: 18
    },
    {
        symbol: 'XNN',
        name: 'XENON',
        marketSymbol: 'xnn',
        identifier: 'eth-erc20-xnn',
        contractAddress: '0xab95E915c123fdEd5BDfB6325e35ef5515F1EA69',
        decimals: 18
    },
    {
        symbol: 'XNT',
        name: 'XNT',
        marketSymbol: 'xnt',
        identifier: 'eth-erc20-xnt',
        contractAddress: '0x572E6f318056ba0C5d47A422653113843D250691',
        decimals: 0
    },
    {
        symbol: 'XOV',
        name: 'XOVBank',
        marketSymbol: 'xov',
        identifier: 'eth-erc20-xov',
        contractAddress: '0x153eD9CC1b792979d2Bde0BBF45CC2A7e436a5F9',
        decimals: 18
    },
    {
        symbol: 'XPA',
        name: 'XPA',
        marketSymbol: 'xpa',
        identifier: 'eth-erc20-xpa',
        contractAddress: '0x90528aeb3a2B736B780fD1B6C478bB7E1d643170',
        decimals: 18
    },
    {
        symbol: 'XPAT',
        name: 'Pangea Arbitration Token',
        marketSymbol: 'xpat',
        identifier: 'eth-erc20-xpat',
        contractAddress: '0xBB1fA4FdEB3459733bF67EbC6f893003fA976a82',
        decimals: 18
    },
    {
        symbol: 'XRL',
        name: 'XRL',
        marketSymbol: 'xrl',
        identifier: 'eth-erc20-xrl',
        contractAddress: '0xB24754bE79281553dc1adC160ddF5Cd9b74361a4',
        decimals: 9
    },
    {
        symbol: 'XSC',
        name: 'XSC',
        marketSymbol: 'xsc',
        identifier: 'eth-erc20-xsc',
        contractAddress: '0x0F513fFb4926ff82D7F60A05069047AcA295C413',
        decimals: 18
    },
    {
        symbol: 'XYO',
        name: 'XYO',
        marketSymbol: 'xyo',
        identifier: 'eth-erc20-xyo',
        contractAddress: '0x55296f69f40Ea6d20E478533C15A6B08B654E758',
        decimals: 18
    },
    {
        symbol: 'YEE',
        name: 'Yee Token',
        marketSymbol: 'yee',
        identifier: 'eth-erc20-yee',
        contractAddress: '0x922105fAd8153F516bCfB829f56DC097a0E1D705',
        decimals: 18
    },
    {
        symbol: 'YEED',
        name: 'YGGDRASH',
        marketSymbol: 'yeed',
        identifier: 'eth-erc20-yeed',
        contractAddress: '0xcA2796F9F61dc7b238Aab043971e49c6164DF375',
        decimals: 18
    },
    {
        symbol: 'YEED',
        name: 'YEED',
        marketSymbol: 'yeed',
        identifier: 'eth-erc20-yeed',
        contractAddress: '0x6F7A4bac3315B5082F793161a22e26666d22717f',
        decimals: 18
    },
    {
        symbol: 'YOYOW',
        name: 'YOYOW',
        marketSymbol: 'yoyow',
        identifier: 'eth-erc20-yoyow',
        contractAddress: '0xcbeAEc699431857FDB4d37aDDBBdc20E132D4903',
        decimals: 18
    },
    {
        symbol: 'YUP',
        name: 'Crowdholding',
        marketSymbol: 'yup',
        identifier: 'eth-erc20-yup',
        contractAddress: '0xD9A12Cde03a86E800496469858De8581D3A5353d',
        decimals: 18
    },
    {
        symbol: 'YUPIE',
        name: 'YUPIE',
        marketSymbol: 'yupie',
        identifier: 'eth-erc20-yupie',
        contractAddress: '0x0F33bb20a282A7649C7B3AFf644F084a9348e933',
        decimals: 18
    },
    {
        symbol: 'ZAP',
        name: 'ZAP',
        marketSymbol: 'zap',
        identifier: 'eth-erc20-zap',
        contractAddress: '0x6781a0F84c7E9e846DCb84A9a5bd49333067b104',
        decimals: 18
    },
    {
        symbol: 'ZCN',
        name: '0chain',
        marketSymbol: 'zcn',
        identifier: 'eth-erc20-zcn',
        contractAddress: '0xb9EF770B6A5e12E45983C5D80545258aA38F3B78',
        decimals: 10
    },
    {
        symbol: 'ZCO',
        name: 'Zebi',
        marketSymbol: 'zco',
        identifier: 'eth-erc20-zco',
        contractAddress: '0x2008e3057BD734e10AD13c9EAe45Ff132aBc1722',
        decimals: 8
    },
    {
        symbol: 'ZCS',
        name: 'Zeusshield',
        marketSymbol: 'zcs',
        identifier: 'eth-erc20-zcs',
        contractAddress: '0x7A41e0517a5ecA4FdbC7FbebA4D4c47B9fF6DC63',
        decimals: 18
    },
    {
        symbol: 'ZEUS',
        name: 'ZeusNetwork',
        marketSymbol: 'zeus',
        identifier: 'eth-erc20-zeus',
        contractAddress: '0xe7E4279b80D319EDe2889855135A22021baf0907',
        decimals: 18
    },
    {
        symbol: 'ZIL',
        name: 'Zilliqa',
        marketSymbol: 'zil',
        identifier: 'eth-erc20-zil',
        contractAddress: '0x05f4a42e251f2d52b8ed15E9FEdAacFcEF1FAD27',
        decimals: 12
    },
    {
        symbol: 'ZINC',
        name: 'ZINC',
        marketSymbol: 'zinc',
        identifier: 'eth-erc20-zinc',
        contractAddress: '0x4AaC461C86aBfA71e9d00d9a2cde8d74E4E1aeEa',
        decimals: 18
    },
    {
        symbol: 'ZIP',
        name: 'Zipper',
        marketSymbol: 'zip',
        identifier: 'eth-erc20-zip',
        contractAddress: '0xA9d2927d3a04309E008B6af6E2e282AE2952e7fD',
        decimals: 18
    },
    {
        symbol: 'ZIPT',
        name: 'Zippie',
        marketSymbol: 'zipt',
        identifier: 'eth-erc20-zipt',
        contractAddress: '0xEDD7c94FD7B4971b916d15067Bc454b9E1bAD980',
        decimals: 18
    },
    {
        symbol: 'ZIX',
        name: 'ZIX',
        marketSymbol: 'zix',
        identifier: 'eth-erc20-zix',
        contractAddress: '0xf3C092cA8CD6D3d4ca004Dc1d0f1fe8CcAB53599',
        decimals: 18
    },
    {
        symbol: 'ZLA',
        name: 'Zilla',
        marketSymbol: 'zla',
        identifier: 'eth-erc20-zla',
        contractAddress: '0xfd8971d5E8E1740cE2d0A84095fCA4De729d0c16',
        decimals: 18
    },
    {
        symbol: 'ZMN',
        name: 'ZMINE',
        marketSymbol: 'zmn',
        identifier: 'eth-erc20-zmn',
        contractAddress: '0x554FFc77F4251a9fB3c0E3590a6a205f8d4e067D',
        decimals: 18
    },
    {
        symbol: 'ZPR',
        name: 'ZPER',
        marketSymbol: 'zpr',
        identifier: 'eth-erc20-zpr',
        contractAddress: '0xb5b8F5616Fe42d5ceCA3e87F3FddbDd8F496d760',
        decimals: 18
    },
    {
        symbol: 'ZRX',
        name: '0x Project',
        marketSymbol: 'zrx',
        identifier: 'eth-erc20-zrx',
        contractAddress: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
        decimals: 18
    },
    {
        symbol: 'ZST',
        name: 'Zeus Exchange',
        marketSymbol: 'zst',
        identifier: 'eth-erc20-zst',
        contractAddress: '0xe386B139Ed3715Ca4B18Fd52671bDcea1cdFE4b1',
        decimals: 8
    },
    {
        symbol: 'ZTX',
        name: 'ZTX',
        marketSymbol: 'ztx',
        identifier: 'eth-erc20-ztx',
        contractAddress: '0xE8F9fa977ea585591d9F394681318C16552577fB',
        decimals: 18
    },
    {
        symbol: 'ZXC',
        name: '0xcert Protocol Token',
        marketSymbol: 'zxc',
        identifier: 'eth-erc20-zxc',
        contractAddress: '0x83e2BE8d114F9661221384B3a50d24B96a5653F5',
        decimals: 18
    }
];
//# sourceMappingURL=tokens.js.map

/***/ }),

/***/ 1450:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de.json": 1451,
	"./en.json": 1452,
	"./zh-cn.json": 1453
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1450;

/***/ }),

/***/ 1451:
/***/ (function(module, exports) {

module.exports = {"next":"Weiter","add-wallet.alert_deriving.text":"Konto wird erstellt...","add-wallet.account-exists_alert.heading":"Konto existiert bereits","add-wallet.account-exists_alert.text":"Dieses Konto wurde bereits hinzugefügt. Bitte ändern Sie den Ableitungspfad um ein neues Konto hinzuzufügen (Fortgeschrittener Modus).","add-wallet.okay_label":"Verstanden","about.label":"Über","about.version":"Version:","about.code":"Code:","distribution-onboarding.ask-permission.heading":"AirGap ist <span class=\"style__strong color__primary\"> nicht persistent</span>, Geheimschlüssel werden nicht abgespeichert und müssen nach einem Neustart <span class=\"style__strong color__primary\">wieder importiert</span> werden","distribution-onboarding.ask-permission.text":"Diese Distribution ist angedacht um sicher Geheimschlüssel zu generieren und um offline Transaktionen zu signieren, jedoch nicht um Geheimschlüssel aufzubewahren.","distribution-onboarding.no-vm.heading":"AirGap Vault Distribution sollte <span class=\"style__strong color__primary\">nicht</span> auf einer <span class=\"style__strong color__primary\">virtuellen Maschine</span> ausgeführt werden, wenn der Host eine Netzwerkverbindung hat, sogar wenn die Netzwerkverbindung vorübergehen deaktiviert wurde. ","distribution-onboarding.no-vm.text":"Stellen Sie sichher, dass Client von jedem Netzwerk getrennt wurde, before Sie einen Geheimschlüssel generieren oder importieren.","distribution-onboarding.understood_label":"Verstanden","local-authentication-onboarding.heading":"Auf den Geheimschlüssel wird mit der von Ihnen definierten Authentifizierungsmethode wie <span class=\"style__strong color__primary\">Fingerabdruck</span>,<span class=\"style__strong color__primary\"> Face-ID</span> oder <span class=\"style__strong color__primary\">Geheimzahl</span> zugegriffen.","local-authentication-onboarding.text":"Der Geheimschlüssel wird für die Kontoerstellungen sowie zum signieren von Transaktionen benötigt.","local-authentication-onboarding.authenticate_label":"Authentifizierung","secret-generate-onboarding.heading":"AirGap wird Sie nach der Berechtigung für die <span class=\"style__strong color__primary\">Kamera</span> und dem <span class=\"style__strong color__primary\">Mikrofon</span> fragen.","secret-generate-onboarding.text":"Beide Berechtigungen werden für die zusätzliche Sicherheit bei der Geheimschlüssel Generierung benötigt.","secret-generate-onboarding.grant-permission_label":"Berechtigung erteilen","current-secret.label":"Aktives Konto:","from-to.amount_label":"BETRAG","from-to.fee_label":"GEBÜHR","from-to.from_label":"Von","from-to.to_label":"Zu","signed-transaction.transaction-unreadable":"Wir konnten die Daten in dieser Transaktion nicht lesen. Dies bedeutet nicht, dass sie nicht gültig ist - Allerdings solltest du diese Transaktion nur bestätigen falls du dir über die Risiken und deren Inhalt im klaren bist.","introduction.title":"Der Neue Krypto-Wallet Standard","introduction.highest.label":"Höchste Sicherheit","introduction.highest.text":"Mit dem AirGap <b>zwei-Geräte Ansatz</b> wird der sicher Umgang mit Geheimschlüssel zugänglicher.","introduction.medium.label":"Mittlere Sicherheit","introduction.medium.text":"Mit dem AirGap <b>zwei-App Ansatz</b> wird der sicher Umgang mit Geheimschlüssel zugänglicher.","introduction.vault.heading":"AirGap Vault","introduction.vault.text":"Der Geheimschlüssel wird generiert und sicher aufbewahrt in der AirGap Vault App. <b>AirGap Vault muss instaliert und mit AirGap Wallet verwendet werden.</b>","introduction.wallet.heading":"AirGap Wallet","introduction.wallet.text":"Die Wallet App kommt nur in Kontakt mit öffentlichen Informationen und ist für die Übermittlung von Transaktionen an die Blockchain zuständig.","introduction.communication.highest_text":"Einweg-Kommunikation mit QR Codes.","introduction.communication.medium_text":"Sichere Kommunikation mit App-Wechsel.","introduction.wallet_install_label":"AirGap Wallet installieren","introduction.continue_label":"Loslegen","secret-create.heading":"AirGap Aufsetzen!","secret-create.text":"Möchten Sie einen neuen Geheimschlüssel generieren oder bestehen importieren?","secret-create.generate.label":"Generieren","secret-create.generate.text":"Geheimschlüssel erstellen mit unserem sicheren Prozess, gehen Sie auf Nummer sicher für Ihre Geldmittel.","secret-create.import.label":"Importieren","secret-create.import.text":"Importieren Sie einen bestehenden Geheimschlüssel in AirGap um sichere Transaktionen durchzuführen.","secret-create.social-recovery.label":"Soziale Wiederherstellung","secret-create.social-recovery.text":"Stellen Sie einen verlorenen Geheimschlüssel aus Anteilen von Ihren sozialen Kontakten wieder her.","secret-edit.title":" Ihren Geheimschlüssel","secret-edit.text":"Geheimschlüssel benennen und Sicherheistgrad auswählen.","secret-edit.secret_input_label":"Geheimschlüsselname","secret-edit.security-level.heading":"Sicherheitsgrad","secret-edit.security-level.text":"Geheimschlüssel zusätzlich mit einem Passwort verschlüsseln.","secret-edit.passcode.label":"Passwort","secret-edit.passcode.text":"Passwort für Ihre Kontos setzen.","secret-edit.secret-recovery.heading":"Geheimschlüssel Wiederherstellung","secret-edit.secret-recovery.text":"Sie können die Soziale Wiederherstellung nach der initialen Erstellung einrichten.","secret-edit.social-recovery.label":"Soziale Wiederherstellung","secret-edit.social-recovery.text":"Generieren Sie eine Anzahl an Anteile um auf Ihre soziale Kontakte aufzuteilen.","secret-edit.interaction.label":"Vault und Wallet Interaktion","secret-edit.interaction.text":"Wähle aus ob Vault und Wallet auf dem gleichen oder ob Vault auf einem offline Gerät installiert ist.","secret-edit.confirm_label":"Bestätigen","secret-edit-delete-popover.title":"Geheimschlüssel Entfernung bestätigen","secret-edit-delete-popover.text":"Möchten Sie wirklich diesen Geheimschlüssel entfernen? Ohne ein Sicherungskopie kann diesr nicht wiederhergestellt werden!","secret-edit-delete-popover.cancel_label":"Abbrechen","secret-edit-delete-popover.delete_label":"Entfernen","secret-generate.heading":"Wir erstellen Ihren Geheimschlüssel.","secret-generate.text":"Dafür verwenden wir Video, Audio, Berührung und das Kreiselgerät um zusätzliche Entropie zu gewinne.","secret-generate.description":"Bewegen Sie Ihr Gerät um Bewegung, Ton und Video aufzunehmen bis die Prozentanzeige gefüllt sind.","secret-generate.continue_label":"Weiter","secret-import.title":"Geheimschlüssel importieren","secret-import.text":"Ein bestehender Geheimschlüssel kann in AirGap importiert werden. Tragen Sie die Worte von Ihrem Wiederherstellungs-Satz ein.","secret-import.placeholder":"wife pulp island ...","secret-import.warning":"Bitte überprüfen Sie die Schreibweise des Wiederherstellungs-Satzes.","secret-import.import_label":"Importieren","secret-rules.title":"Aufmerksam durchlesen","secret-rules.heading":"Befolgen Sie diese Regeln.","secret-rules.text":"Wir haben Ihnen Ihr Geheimschlüssel generiert, er besteht aus eine Wortabfolge.","secret-rules.description":"Gehen Sie sicher, das Sie die nachfolgenden Regeln verstanden haben und einhalten werden, diese ermöglichen einen sicheren Zugriff auf Ihre Konten.","secret-rules.rules-list.item-1_text":"Schreiben Sie die Wortabfolge auf ein Stück Papier.","secret-rules.rules-list.item-2_text":"Halten Sie die Wortabfolge strikt ein.","secret-rules.rules-list.item-3_text":"Überprüfen Sie die Schreibweise jedes Wortes.","secret-rules.rules-list.item-4_text":"Bewahren Sie das Stück Papier an einem sicheren Ort auf!","secret-rules.rules-list.item-5_text":"Machen Sie unter keinen Umständen ein Bildschirmfoto, Foto oder eine Fotokopie.","secret-rules.rules-list.item-6_text":"Laden Sie Ihren Geheimschlüssel niemals in die Cloud.","secret-rules.understood_label":"Verstanden","secret-show.title":"Wiederherstellungs-Satz","secret-show.text":"Schreiben Sie jedes Wort auf ein Stück Papier, bedenken Sie dabei das alle erwähnten Regeln beachtet werden müssen.","secret-show.next-step_label":"Nächster Schritt","secret-show.too-fast_alert.title":"Das war schnell!","secret-show.too-fast_alert.heading":"Besitzen Sie übermenschliche Kräfte?","secret-show.too-fast_alert.text":"Gehen Sie sicher, das Sie alle Regeln befolgt und nichts anderes gemacht haben, als den Geheimschlüssel auf ein Stück Papier zu schreiben.","secret-show.too-fast_alert.wait_label_p1":"Bitte warten Sie mindestens bis ","secret-show.too-fast_alert.wait_label_p2":"Sekunden vorbei sind.","secret-validate.title":"Verifizierung Wiederherstellungs-Satz","secret-validate.text":"Ordnen Sie die Wörter in der richtigen Reihenfolge, indem Sie das betreffende Wort jeweils anwählen.","secret-wallet-interaction.title":"Wallet Interaktion","secret-wallet-interaction.same-device_heading":"Sieht so aus, als würden Sie  <span class=\"style__strong color__primary\">AirGap Vault</span> und auf dem <span class=\"style__strong color__primary\">gleichen Gerät</span> verwenden.","secret-wallet-interaction.offline-device_heading":"Sieht so aus, als würden Sie <span class=\"style__strong color__primary\">AirGap Vault</span> auf einem <span class=\"style__strong color__primary\">Offline-Gerät</span> verwenden.","secret-wallet-interaction.text":"Sie können definieren, wo Sie AirGap Wallet installiert haben, um die Interaktion mit dem Vault etwas zu vereinfachen.","secret-wallet-interaction.selector.always":"Immer nachfragen","secret-wallet-interaction.selector.same-device":"Vault und Wallet auf dem gleichen Gerät","secret-wallet-interaction.selector.offline-device":"Vault ist ein Offline-Gerät","secret-wallet-interaction.continue_label":"Weiter","secret-wallet-interaction.description":"Sie können ihre Präferenz jederzeit in den Einstellungen ändern.","verify-key.incorrect_text":"Der Geheimschlüssel stimmt nicht mit dem erstellten überein. Gehen Sie sicher, das sie alle Wörter richtig ausgewählt haben. <br /> Wenn Sie einen Fehler gemcaht haben, wählen Sie das falsche Wort aus um danach auf das richtige Wort zu ändern.","verify-key.success_text":"Sie haben diesen Geheimschlüssel erfoglreich verifiziert.","verify-key.continue_label":"Weiter","social-recovery-import.title":"Soziale Wiederherstellung","social-recovery-import.text":"Legen Sie fest, wie viele Anteile benötigt werden um den Geheimschlüssel wiederhersstellen zu können. Bedenken Sie dabei, das der Geheimschlüssel über die soziale Wiederherstellung nur dann möglich ist, wenn mindestens die festgelete Anzahl Anteile vorhanden ist.","social-recovery-import.share-recovery.heading":"Anzahl Anteile für die Wiederherstellung","social-recovery-import.share-recovery.label":"Anteilnummer","social-recovery-import.recover_label":"Wiederherstellen","social-recovery-setup.title":"Soziale Wiederherstellung","social-recovery-setup.text":"Mit der sozialen Wiederherstellung, können Sie Anteile definieren, welche an vertrauliche soziale Kontakte verteile werden können. Ein verlorener Geheimschlüssel kann wiederhergestellt werden, wenn mindestens die festgelete Anzahl Anteile vorhanden ist.","social-recovery-setup.secret-shares.label":"Wiederherstellungsanteile","social-recovery-setup.secret-shares.text":"Sie können die Anzahl Anteile welche generiert werden festlegen, sowie die Anzahl welche für eine erfolgreiche Wiederherstellung nötig sind.","social-recovery-setup.shares-number_label":"Anzahl Anteile","social-recovery-setup.shares-recovery_label":"Anzahl Anteile für Wiederherstellung","social-recovery-setup.start":"Start","social-recovery-setup.back_label":"Zurück","social-recovery-setup.next_label":"Weiter","social-recovery-show-share.title":"Soziale Wiederherstellung","social-recovery-show-share.secret-shares.label_p1":"Wiederherstellungsanteil","social-recovery-show-share.secret-shares.label_p2":"von","social-recovery-show-share.text":"Schreiben Sie jedes Wort auf Papier, bedenken Sie dabei alle Regeln zu befolgen.","social-recovery-validate-share.title":"Soziale Wiederherstellung","social-recovery-validate-share.text":"Ordnen Sie die Wörter in der richtigen Reihenfolge, indem Sie das betreffende Wort jeweils anwählen.","tab-scan.title":"QR Code Scanner","tab-scan.text":"QR Code von AirGap Wallet einlesen.","tab-scan.empty-state_heading":"Un QR Codes einlesen zu können, benötigt AirGap Vault die <span class=\"style__strong color__primary\">Kamera Berechtigung</span>.","tab-scan.grant-permission_label":"Berechtigung erteilen","tab-settings.title":"Geheimschlüssel","tab-settings.add-secret_label":"Geheimschlüssel hinzufügen","tab-wallets.title":"Konten","tab-wallets.search_placeholder":"Währung suchen","tab-wallets.empty-state_text":"Wählen Sie eine Währung um ein neues Konto zu erstellen und mit AirGap Wallet zu synchronisieren.","tab-wallets.add-wallet_label":"Konto hinzufügen","tab-wallets.incompatible-qr_alert.title":"ungültiger QR Code","tab-wallets.incompatible-qr_alert.text":"Dieser QR Code ist keine rohe Transaktion.","tab-wallets.incompatible-qr_alert.okay_label":"Verstanden","tab-wallets.no-secret_alert.title":"Kein Konto gefunden","tab-wallets.no-secret_alert.text":"Es existiert kein kompatibles Konto in AirGap. Bitte importieren Sie den dazugehörigen Geheimschlüssel um diese Transaktion zu signieren.","tab-wallets.no-secret_alert.okay_label":"Verstanden","tab-wallets.raw-tx_alert.title":"Konto auswählen","tab-wallets.raw-tx_alert.okay_label":"Verstanden","tabs.wallets":"Konten","tabs.scanner":"Scanner","tabs.settings":"Einstellungen","transaction-detail.title":"Transaktion signieren","transaction-detail.text":"Sie versenden:","transaction-detail.sign-tx_label":"Transaktion signieren","transaction-onboarding.title":"Signierte Transaktion","transaction-onboarding.heading":"Signierte Transaktion einlesen","transaction-onboarding.description":"Lesen Sie den signierten Transaktions QR Code ein im nächsten Schritt mit der AirGap Wallet app.","transaction-onboarding.dont-show_label":"Nicht mehr anzeigen","transaction-onboarding.next_label":"Nächster Schritt","transaction-unlock.title":"Geheimschlüssel entsperren","transaction-unlock.unlock_label":"Entsperren","transaction-signed.title":"Signierte Transaktion","transaction-signed.raw-tx_label":"Rohe Transaktionsdaten anzeigen","transaction-signed.same-device-broadcast_label":"gleiches-Gerät Übermittlung","transaction-signed.done_label":"Fertig","touch-entropy.text":"Bewegen Sie Ihren Finger auf dem Bildschirm.","wallet-address.title":"Konto Addresse","wallet-address.address_label":"Addresse:","wallet-address.path_label":"Ableitungspfad:","wallet-address.sync_label":"Konto Synchronisieren","wallet-address.done_label":"Fertig","wallet-address.copy-address_modal.text":"Adresse wurde in die Zwischenablage kopiert.","wallet-edit-delete-popover.settings_label":"Kontoeinstellungen","wallet-edit-delete-popover.copy_label":"Adresse kopieren","wallet-edit-delete-popover.copy_sync_code":"Sync Code kopieren","wallet-edit-delete-popover.confirm_address_copy":"Adresse wurde in die Zwischenablage kopiert.","wallet-edit-delete-popover.confirm_sync_code_copy":"Sync Code wurde in die Zwischenablage kopiert.","wallet-edit-delete-popover.account-removal_alert.title":"Kontoentfernung bestätigen","wallet-edit-delete-popover.account-removal_alert.text":"Möchten Sie dieses Konto entfernen? Es kann im Nachhinein wieder mit demselben Ableitungspfad erstellt werden.","wallet-edit-delete-popover.account-removal_alert.cancel_label":"Abbrechen","wallet-edit-delete-popover.account-removal_alert.delete_label":"Entfernen","wallet-select-coins.title":"Konto hinzufügen","wallet-select-coins.text":"Wählen Sie die gewünschte Währung aus.","wallet-select-coins.select-type.label":"Kontotyp auswählen","wallet-select-coins.select-type.single-address_label":"Einzeladresse Konto","wallet-select-coins.select-type.hd-wallet_label":"HD Wallet","wallet-select-coins.advanced_label":"Fortgeschrittener Modus","wallet-select-coins.custom-path.label":"Selbsterstellter Ableitungspfad","wallet-select-coins.custom-path.placeholder":"Selbsterstellter Ableitungspfad","wallet-select-coins.create_label":"Erstellen","wallet-share.title":"Konto Synchronisieren","wallet-share.text":"Dieser QR Code beinhaltet den <b>erweiterten</b> öffentlichen Schlüssel, öffentliche Adress und den Währungstyp. Teilen Sie diesen nicht öffentlich.","wallet-share.same-device_label":"Gleiches Gerät Sync","wallet-share.done_label":"Fertig","warnings-modal.disclaimer.title":"AirGap Disclaimer","warnings-modal.disclaimer.text":"Sie akzeptieren und bestätigen hiermit diese Bestimmungen sowie all enthaltenen Informationen im vollumfänglichen Ausmass. Sie als der Benutzer bestätigen, das Sie den Inhalt dieses Disclaimers gelesen und verstanden haben.","warnings-modal.disclaimer.disclaimer-list.text":"Zum gesetzlichen vollumfänglichen Ausmasses:","warnings-modal.disclaimer.disclaimer-list.item-1_text":"Alle Dienstleistungen, welche durch Papers GmbH, dessen Angestellten, Freischaffenden oder Unterlieferanten, werden ohne Vertretung und Garantie jegliche Art zur Verfügung gestellt.","warnings-modal.disclaimer.disclaimer-list.item-2_text":"Papers GmbH lehnt jegliche und alle direkten oder indirekten Haftungen ab, welche durch Schaden mit oder in Verbindung mit diesem Protokoll, besonders aber nicht limitiert auf Verlust oder Schaden zu Daten, Verlust von Gewinn, kompromittiertem oder gehacktem Produkt oder System, gestohlenen oder verloreren Geldmittel, ab.","warnings-modal.disclaimer.description":"Sie verstehen alle involvierten Risiken verbunden mit dieser Software, dies beinhaltet ist aber nicht limitiert auf den Verlust des Geheimschlüssels, dem Private Key und somit den Zugang zu Ihren Geldmittel.","warnings-modal.disclaimer.understood_label":"Ich verstehe & akzeptiere","interaction-selection-settings.title":"Wallet Interaktion","interaction-selection-settings.same-device_heading":"Es sieht so aus als ob Sie <span class=\"style__strong color__primary\">AirGap Vault</span> und AirGap Wallet auf dem <span class=\"style__strong color__primary\">gleichen Gerät</span> brauchen.","interaction-selection-settings.offline-device_heading":"Es sieht so aus als ob Sie <span class=\"style__strong color__primary\">AirGap Vault</span> auf einem <span class=\"style__strong color__primary\">offline Gerät</span> brauchen.","interaction-selection-settings.text":"Sie können festlegen wo Sie AirGap Wallet installiert haben, um die Interaktion mit dem Vault zu vereinfachen.","interaction-selection-settings.selector.always":"Immer nachfragen","interaction-selection-settings.selector.same-device":"Vault und Wallet auf dem gleichen Gerät","interaction-selection-settings.selector.offline-device":"Vault auf einem offline Gerät","interaction-selection-settings.continue_label":"Weiter","interaction-selection-settings.description":"In den Einstellungen, kann diese Einstellung im Nachhinein wieder verändert werden","tab-settings.about":"Über AirGap Vault","tab-settings.information_label":"Information","tab-settings.secrets_label":"Geheimschlüssel","tab-settings.add-settings_label":"Geheimschlüssel hinzufügen","tab-wallets.sync-operation-not-supported_alert.title":"Synchronisierung wird nicht unterstützt","tab-wallets.sync-operation-not-supported_alert.text":"Bitte verwenden Sie AirGap Wallet um diesen QR einzulesen.","tab-wallets.sync-operation-not-supported_alert.okay_label":"Verstanden","tab-wallets.invalid-sync-operation_alert.title":"Inkompatibler Synchronisierungscode","tab-wallets.invalid-sync-operation_alert.text":"Der Synchronisierungscode konnte nicht eingelesen werden, bitte vergewissern Sie sich das dies ein valider AirGap Synchronisierungscode ist.","tab-wallets.invalid-sync-operation_alert.okay_label":"Verstanden","transaction-signed.heading":"Das ist ihre signierte Transaktion, lesen Sie diese mit <span class=\"style__strong color__primary\">AirGap Wallet</span> ein.","interaction-selection.title":"Wallet Interaktion","interaction-selection.heading":"Wie möchten Sie mit <span class=\"style__strong color__primary\">AirGap Wallet</span> interagieren?","interaction-selection.same-device_label":"Gleiches Gerät","interaction-selection.same-device_info":"AirGap Vault und AirGap Wallet sind auf dem gleichen Gerät installiert.","interaction-selection.offline-device_label":"Offline Gerät","interaction-selection.offline-device_info":"AirGap Vault ist auf einem offline Gerät installiert, Lesen Sie den QR Code mit AirGap Wallet ein.","wallet-share.heading":"Dies ist Ihr Synchronisierungscode, lesen Sie diesen mit <span class=\"style__strong color__primary\">AirGap Wallet</span> ein.","deep-link.not-supported-alert.title":"Hoppla","deep-link.not-supported-alert.message":"Deeplinking ist nur unterstützt auf mobilen Geräten.","deep-link.not-supported-alert.ok":"Verstanden","deep-link.app-not-found.title":"Hoppla","deep-link.app-not-found.message":"Es sieht so aus als ob Sie {{otherAppName}} nicht auf diesem Gerät installiert haben.","deep-link.app-not-found.ok":"Verstanden"}

/***/ }),

/***/ 1452:
/***/ (function(module, exports) {

module.exports = {"next":"Next","add-wallet":{"alert_deriving":{"text":"Deriving your account..."},"account-exists_alert":{"heading":"Account already exists","text":"You already have added this specific account. Please change its derivation path to add another address (advanced mode)."},"okay_label":"Okay"},"about":{"label":"About","version":"Version:","code":"Code:"},"distribution-onboarding":{"ask-permission":{"heading":"AirGap is <span class=\"style__strong color__primary\"> not persistent</span>, secrets generated will not be stored and need to be <span class=\"style__strong color__primary\">imported again</span> after a restart","text":"This Distribution is intended to securely generate secrets as well as to sign transactions offline, but not for secret storage."},"no-vm":{"heading":"AirGap Vault Distribution should <span class=\"style__strong color__primary\">not</span> be run on a <span class=\"style__strong color__primary\">virtual machine</span>, if the host has network connectivity even if the connectivity has been turned off temporarily. ","text":"Make sure that the client is disconnected from any network before you generate a new secret or import an existing one."},"understood_label":"Understood"},"local-authentication-onboarding":{"heading":"Your secret is accessed with your defined authentication method like <span class=\"style__strong color__primary\">fingerprint</span>,<span class=\"style__strong color__primary\"> face id</span> or <span class=\"style__strong color__primary\">pin code</span>.","text":"Your secret needs to be accessed for account creation and transaction signing.","authenticate_label":"Authenticate"},"secret-generate-onboarding":{"heading":"AirGap is going to ask you for <span class=\"style__strong color__primary\">camera</span> and <span class=\"style__strong color__primary\">microphone</span> permission, to allow a secure secret generation.","text":"Both permissions are used in order to generate a more secure secret for you.","grant-permission_label":"Grant Permission"},"current-secret":{"label":"Active Secret:"},"from-to":{"amount_label":"AMOUNT","fee_label":"FEE","from_label":"From","to_label":"To"},"signed-transaction":{"transaction-unreadable":"We were not able to extract information from this transaction. This does not mean that the transaction is invalid - Please make sure that you know what you are doing, and you can verify that you know that this transaction contains the correct data."},"introduction":{"title":"The New Crypto Wallet Standard","highest":{"label":"Highest Security","text":"With the AirGap <b>two device approach</b> secure key handling becomes more accessible."},"medium":{"label":"Medium Security","text":"With the AirGap <b>two app approach</b> secure key handling becomes more accessible."},"vault":{"heading":"AirGap Vault","text":"The private key is generated and securely stored in the AirGap Vault app.<b>You have to install AirGap Vault to use AirGap Wallet</b>"},"wallet":{"heading":"AirGap Wallet","text":"The wallet application deals only with public information and is responsible for broadcasting transactions to the blockchain."},"communication":{"highest_text":"One-way communication with QR codes.","medium_text":"Secure communication through app switching."},"wallet_install_label":"Install AirGap Wallet","continue_label":"Let's Go"},"secret-create":{"heading":"Let's setup AirGap!","text":"Do you want to create a new secret or import an existing one?","generate":{"label":"Generate","text":"Create a new secret with our secure process to make sure your funds are really safe."},"import":{"label":"Import","text":"Import your existing secret to AirGap and create safe transactions."},"social-recovery":{"label":"Social Recovery","text":"Recover a lost private key from your social contact's secret shares."}},"secret-edit":{"title":" Your Secret","text":"Give your secret a name and select the security level.","secret_input_label":"Secret Name","security-level":{"heading":"Security Level","text":"You can encrypt your key additionally using a passcode."},"passcode":{"label":"Passcode","text":"Set a passcode for your accounts."},"secret-recovery":{"heading":"Secret Recovery","text":"You can set up your secret recovery mechanisms after the initial setup."},"social-recovery":{"label":"Social Recovery","text":"Generate a number of secret shares <br /> to distribute to social contacts."},"interaction":{"label":"Vault and Wallet interaction","text":"Select whether Vault and Wallet are installed on the same device or on separate devices."},"confirm_label":"confirm"},"secret-edit-delete-popover":{"title":"Confirm Secret Removal","text":"Do you want to remove this secret? You won't be able to restore it without backup!","cancel_label":"Cancel","delete_label":"Delete"},"secret-generate":{"heading":"We're generating your secret.","text":"For this we use your video, audio, touch and device acceleration to add additional entropy to your secret.","description":"Move your device around to record audio, video & acceleration until all shields are full.","continue_label":"Continue"},"secret-import":{"title":"Import secret","text":"You can import an existing secret to AirGap. Fill in the words from your secret.","placeholder":"wife pulp island ...","warning":"Please double-check the spelling of your mnemonic.","import_label":"Import"},"secret-rules":{"title":"Read carefully","heading":"Make sure you follow these rules","text":"We've generated your secret, it's a sequence of words.","description":"Make sure you understand these rules that ensure you will always have safe access to your accounts.","rules-list":{"item-1_text":"Make sure you write these words down on a piece of paper.","item-2_text":"You have to strictly follow the sequence.","item-3_text":"Check the spelling of each word.","item-4_text":"Keep the piece of paper in a safe place.","item-5_text":"Under no circumstance take a screenshot or photo and do not photoscan it.","item-6_text":"Never upload your key anywhere to the cloud."},"understood_label":"Understood"},"secret-show":{"title":"This is your recovery phrase","text":"Write down each word on a piece of paper, remember to follow the rules.","next-step_label":"Next Step","too-fast_alert":{"title":"That was fast!","heading":"Are you sure you are not a super human?","text":"Make sure that you followed all the rules and didn't do anything other than writing your secret on paper.","wait_label_p1":"Please wait until at least ","wait_label_p2":"s are over."}},"secret-validate":{"title":"Verify your recovery phrase","text":"Match the order of your recovery phrase by selecting the correct words."},"interaction-selection-settings":{"title":"Wallet Interaction","same-device_heading":"Looks like you're using <span class=\"style__strong color__primary\">AirGap Vault</span> and AirGap Wallet on the <span class=\"style__strong color__primary\">same device</span>.","offline-device_heading":"Looks like you’re using <span class=\"style__strong color__primary\">AirGap Vault</span> on an <span class=\"style__strong color__primary\">offline device</span>.","text":"You can define where you have AirGap Wallet installed to make the interaction with the Vault a bit simpler.","selector":{"always":"Always ask","same-device":"Vault and Wallet on the same device","offline-device":"Vault is an offline device"},"continue_label":"continue","description":"You can always change your preference in the Settings Tab"},"verify-key":{"incorrect_text":"Your secret does not match the generated one. Make sure you've chosen the correct words. <br /> To correct mistakes, simply select a wrong word and choose the correct one.","success_text":"You have successfully verified this secret.","continue_label":"Continue"},"social-recovery-import":{"title":"Social Recovery","text":"In order to recover your secret from your shares, indicate with how many shares you wish to recover your secret. Keep in mind that you will only be able to successfully recover your secret if you have as many shares for recovery as you have defined in the set up of social recovery.","share-recovery":{"heading":"Number of Shares for Recovery","label":"Share Number"},"recover_label":"Recover"},"social-recovery-setup":{"title":"Social Recovery","text":"With Social Recovery you can create secret shares and distribute them to social contacts you trust. You can recover a lost secret if you have a set number of these secret shares.","secret-shares":{"label":"Secret Shares","text":"You can define the amount of shares you wish to generate and the number of shares necessary for a successful recovery of your secret."},"shares-number_label":"Number of secret shares","shares-recovery_label":"Number of shares needed for recovery","start":"Start","back_label":"Back","next_label":"Next"},"social-recovery-show-share":{"title":"Social Recovery","secret-shares":{"label_p1":"Secret Share","label_p2":"of"},"text":"Write down each word on a piece of paper, remember to follow all the rules."},"social-recovery-validate-share":{"title":"Social Recovery","text":"Tap each word to match the correct order:"},"tab-scan":{"title":"QR Code Scanner","text":"Scan a QR Code from AirGap Wallet","empty-state_heading":"In order to scan QR codes, AirGap Vault needs the <span class=\"style__strong color__primary\">camera permission</span>.","grant-permission_label":"Grant permission"},"tab-settings":{"about":"About","title":"Settings","information_label":"Information","secrets_label":"Secrets","add-settings_label":"Add Secret","paste-from-clipboard_label":"Paste code from clipboard"},"tab-wallets":{"title":"Accounts","search_placeholder":"Search Currency","empty-state_text":"Create a new account by selecting a currency and sync it to AirGap Wallet.","add-wallet_label":"Add Account","incompatible-qr_alert":{"title":"Incompatible QR","text":"This QR is not a raw transaction.","okay_label":"Okay"},"no-secret_alert":{"title":"No account found","text":"You do not have any compatible account for this public key in AirGap. Please import your secret and create the corresponding account to sign this transaction.","okay_label":"Okay"},"sync-operation-not-supported_alert":{"title":"Sync operation not supported","text":"Please use AirGap Wallet to scan this QR.","okay_label":"Okay"},"invalid-sync-operation_alert":{"title":"Incompatible Sync code","text":"Could not parse sync code. Please make sure this is a valid AirGap sync code.","okay_label":"Okay"},"raw-tx_alert":{"title":"Select Account","okay_label":"Okay"}},"tabs":{"wallets":"Accounts","scanner":"Scanner","settings":"Settings"},"transaction-detail":{"title":"Sign Transaction","text":"You're about to send:","sign-tx_label":"Sign Transaction"},"transaction-signed":{"title":"Signed Transaction","heading":"This is your signed transaction, scan it with <span class=\"style__strong color__primary\">AirGap Wallet</span>.","raw-tx_label":"Display Raw Transaction","done_label":"Done"},"touch-entropy":{"text":"Draw around with your finger."},"wallet-address":{"title":"Account Address","address_label":"Address:","path_label":"Derivation Path:","sync_label":"Sync Account","done_label":"Done","copy-address_modal":{"text":"Address was copied to your clipboard"}},"interaction-selection":{"title":"Wallet Interaction","heading":"How would you like to interact with <span class=\"style__strong color__primary\">AirGap Wallet</span>?","same-device_label":"Same Device","same-device_info":"AirGap Vault and AirGap Wallet are installed on the same device.","offline-device_label":"Offline Device","offline-device_info":"AirGap Vault is installed on an offline device, scan the QR code with AirGap Wallet."},"wallet-edit-delete-popover":{"settings_label":"Account Settings","copy_label":"Copy Address","copy_sync_code":"Copy Sync Code","confirm_address_copy":"Address was copied to your clipboard","confirm_sync_code_copy":"Sync code was copied to your clipboard","account-removal_alert":{"title":"Confirm Account Removal","text":"Do you want to remove this account? You can always add it back later, if you know its correct derivation path/coin!","cancel_label":"Cancel","delete_label":"Delete"}},"wallet-select-coins":{"title":"Add Account","text":"Select Coin To Use","select-type":{"label":"Select Account Type","single-address_label":"Single Address Wallet","hd-wallet_label":"HD Wallet"},"advanced_label":"Advanced Mode","custom-path":{"label":"Custom Derivation Path","placeholder":"Custom Derivation Path"},"create_label":"Create"},"wallet-share":{"title":"Sync Account","heading":"This is your Sync QR code, scan it with <span class=\"style__strong color__primary\">AirGap Wallet</span>.","text":"This QR includes your <b>extended</b> public key, public address and your type of coin. Do not share it publicly!","same-device_label":"Same-Device-Sync","done_label":"Done"},"warnings-modal":{"disclaimer":{"title":"AirGap Disclaimer","text":"You as the user hereby accept and acknowledge this protocol and all the information provided within to the fullest extent. You as the user confirm that the content this document has been reviewed, tested and understood on their own behalf.","disclaimer-list":{"text":"To the fullest extent permitted by applicable law:","item-1_text":"All services provided by Papers GmbH, its employees, freelancers or other subcontractors are provided without representation and warranty of any kind","item-2_text":"Papers GmbH disclaims any and all direct and indirect liability for damage occurring under, or in connection with, this Protocol, especially, but not limited to loss of, or damage to, data, lost profit, compromised / hacked product or system, and or stolen / missing monetary funds."},"description":"You understand the risks involved in this software, including but no limited to losing your secret, thus private keys and access to your funds.","understood_label":"I understand and accept"}},"deep-link":{"not-supported-alert":{"title":"Oops","message":"Deeplinking is only supported on mobile devices.","ok":"Ok"},"app-not-found":{"title":"Oops","message":"It looks like you don't have {{otherAppName}} installed on this device.","ok":"Ok"}}}

/***/ }),

/***/ 1453:
/***/ (function(module, exports) {

module.exports = {"next":"下一步","add-wallet.alert_deriving.text":"导出您的账户...","add-wallet.account-exists_alert.heading":"账户已存在","add-wallet.account-exists_alert.text":"您已添加此特定帐户。 请更改派生路径，以添加其他地址（高级模式）。","add-wallet.okay_label":"确定","distribution-onboarding.ask-permission.heading":"AirGap是<span class = \"style__strong color__primary \">非持久性的</ span>，生成的助记词将不会被存储，并且需要在重新启动后再次<span class = \"style__strong color__primary \">重新导入</ span>","distribution-onboarding.ask-permission.text":"此版本旨在安全地生成助记词以及离线转账签名，但不会存储助记词","distribution-onboarding.no-vm.heading":"如果宿主机有网络连接，即使该连接处于暂时关闭状态， AirGap Vault发行版也<span class=\"style__strong color__primary\">不应</span>在<span class=\"style__strong color__primary\">虚拟机</span>上运行。 ","distribution-onboarding.no-vm.text":"在生成新助记词或导入现有助记词之前，请确保客户端已断开所有网络连接","distribution-onboarding.understood_label":"确认了解","local-authentication-onboarding.heading":"您的密钥是通过您定义的身份验证方法访问的，如<span class=\"style__strong color__primary\">指纹</span>、<span class=\"style__strong color__primary\">脸部识别</span>或<span class=\"style__strong color__primary\">密码</span>","local-authentication-onboarding.text":"您需要访问您的密钥以进行帐户创建和交易签名。","local-authentication-onboarding.authenticate_label":"认证","secret-generate-onboarding.heading":"AirGap将要求您开放<span class = \"style__strong color__primary \"> 摄像头 </ span>和<span class = \"style__strong color__primary \">麦克风</ span>权限，来确保助记词安全、随机。","secret-generate-onboarding.text":"这两个权限都用于为您生成更安全的助记词。","secret-generate-onboarding.grant-permission_label":"授予权限","current-secret.label":"有效助记词","from-to.amount_label":"数量","from-to.fee_label":"手续费","from-to.from_label":"从","from-to.to_label":"到","introduction.title":"新加密钱包标准","introduction.highest.label":"最高安全级别","introduction.highest.text":"AirGap的<b>两套设备结合使用</b>的方法，使得安全密钥操作更便捷。","introduction.medium.label":"中等安全级别","introduction.medium.text":"AirGap的<b>两种应用程序结合</b>的方式，使得安全密钥操作更便捷。","introduction.vault.heading":"AirGap Vault","introduction.vault.text":"助记词生成并安全存储在Air Gap Vault应用程序中。<b>您必须安装Air Gap Vault才能使用AirGap Wallet</b>","introduction.wallet.heading":"AirGap Wallet","introduction.wallet.text":"钱包应用程序仅处理公共信息，并负责向区块链广播交易。","introduction.communication.highest_text":"通过二维码的单向通信","introduction.communication.medium_text":"通过应用切换实现安全通信","introduction.wallet_install_label":"安装AirGap Wallet","introduction.continue_label":"开始吧","secret-create.heading":"安装AirGap","secret-create.text":"?您想创建新助记词还是导入现有助记词？","secret-create.generate.label":"生成新助记词","secret-create.generate.text":"通过我们的安全流程创建一个新助记词，以确保您的资金真正安全","secret-create.import.label":"导入现有助记词","secret-create.import.text":"将您现有的助记词导入AirGap并创建安全转账","secret-create.social-recovery.label":"社交助记词恢复","secret-create.social-recovery.text":"从社交联系人的助记词共享中恢复丢失的私钥","secret-edit.title":" 您的机密","secret-edit.text":"为您的机密命名并选择安全级别","secret-edit.secret_input_label":"机密名字","secret-edit.security-level.heading":"安全等级","secret-edit.security-level.text":"您可以使用一个密码来给您的密钥再次加密。","secret-edit.passcode.label":"密码","secret-edit.passcode.text":"为您的帐户设置密码","secret-edit.secret-recovery.heading":"助记词恢复","secret-edit.secret-recovery.text":"您可以在初始设置后设置您的助记词恢复机制。","secret-edit.social-recovery.label":"社交助记词恢复","secret-edit.social-recovery.text":"生成许多秘钥共享<br/>以分发给社交联系人。","secret-edit.confirm_label":"确认","secret-edit-delete-popover.title":"确认删除机密","secret-edit-delete-popover.text":"你想删除这个机密吗？ 如果没有备份，您将无法恢复它！","secret-edit-delete-popover.cancel_label":"取消","secret-edit-delete-popover.delete_label":"删除","secret-generate.heading":"我们正在生成你的助记词","secret-generate.text":"为此，我们需要使用您的视频、音频、触摸和设备移动来确保您的助记词的随机性","secret-generate.description":"移动您的设备来记录音频、视频和加速，直到所有数值显示100%。","secret-generate.continue_label":"下一步","secret-import.title":"导入现有助记词","secret-import.text":"您可以将现有助记词导入AirGap。 请填写你的助记词","secret-import.placeholder":"wife pulp island ...","secret-import.warning":"请再次检查您的助记词拼写","secret-import.import_label":"确认导入","secret-rules.title":"请完整阅读","secret-rules.heading":"请确认您遵守这些规则","secret-rules.text":"助记词已产生，他是一系列单词组合。","secret-rules.description":"请确保您了解这些规则，以保证您可以始终安全访问您的帐户","secret-rules.rules-list.item-1_text":"确保你把这些助记词写在一张纸上。","secret-rules.rules-list.item-2_text":"你必须严格按照助记词顺序","secret-rules.rules-list.item-3_text":"检查每个单词的拼写","secret-rules.rules-list.item-4_text":"请将纸张放在安全的地方。","secret-rules.rules-list.item-5_text":"在任何情况下都不要截屏或拍照，也不要对照片进行扫描","secret-rules.rules-list.item-6_text":"切勿将助记词上传到云端","secret-rules.understood_label":"确认了解","secret-show.title":"这是你的助记词","secret-show.text":"在一张纸上写下每个单词，并按照单词顺序。","secret-show.next-step_label":"下一步","secret-show.too-fast_alert.title":"这太快了！","secret-show.too-fast_alert.heading":"你确定你不是一个超人？","secret-show.too-fast_alert.text":"确保您遵守所有规则，除了在纸上写下您的助记词以外没有做任何其他事情","secret-show.too-fast_alert.wait_label_p1":"请稍等片刻 ","secret-show.too-fast_alert.wait_label_p2":"一切搞定","secret-validate.title":"验证您的助记词","secret-validate.text":"选择正确的单词，并匹配助记词的顺序。","verify-key.incorrect_text":"您的助记词与生成的助记词不匹配。 确保您选择了正确的单词。 <br />要纠正错误，只需选择错误的单词然后选择正确的单词即可。","verify-key.success_text":"您已成功验证此助记词","verify-key.continue_label":"下一步","social-recovery-import.title":"社交助记词恢复","social-recovery-import.text":"为了从您的分享中恢复您的助记词，请指明您希望收回您的助记词的分享数量。 请记住，如果您拥有与社交助记词恢复设置中定义的一样多的恢复数量，您才能成功恢复您的助记词","social-recovery-import.share-recovery.heading":"恢复助记词的分享数量","social-recovery-import.share-recovery.label":"分享数量","social-recovery-import.recover_label":"恢复助记词","social-recovery-setup.title":"社交助记词恢复","social-recovery-setup.text":"使用社交助记词恢复，您可以创建助记词共享并将其交给您信任的社交联系人。如果您有一定数量的助记词共享联系人，您可以恢复丢失的助记词。","social-recovery-setup.secret-shares.label":"助记词分享","social-recovery-setup.secret-shares.text":"您可以定义要生成的共享数量以及成功恢复助记词所需的共享数量","social-recovery-setup.shares-number_label":"助记词共享数","social-recovery-setup.shares-recovery_label":"助记词恢复所需共享联系人数量","social-recovery-setup.start":"开始","social-recovery-setup.back_label":"返回","social-recovery-setup.next_label":"下一步","social-recovery-show-share.title":"社交助记词恢复","social-recovery-show-share.secret-shares.label_p1":"助记词分享","social-recovery-show-share.secret-shares.label_p2":"of","social-recovery-show-share.text":".在一张纸上写下每个助记词，并匹配助记词的顺序。","social-recovery-validate-share.title":"社交助记词恢复","social-recovery-validate-share.text":"点击每个单词，并按照正确的顺序","tab-scan.title":"二维码扫描","tab-scan.text":"扫描二维码","tab-scan.empty-state_heading":"为了能够扫描二维码，AirGap Vault需要<span class = \"style__strong color__primary \">摄像头权限</ span>。","tab-scan.grant-permission_label":"授予权限","tab-secrets.title":"私钥","tab-secrets.add-secret_label":"增加新的私钥","tab-wallets.title":"账户","tab-wallets.search_placeholder":"搜索数字货币","tab-wallets.empty-state_text":"通过选择数字货币创建一个新帐户并将其同步到AirGap Wallet。","tab-wallets.add-wallet_label":"增加新账户","tab-wallets.incompatible-qr_alert.title":"二维码不匹配","tab-wallets.incompatible-qr_alert.text":"此二维码不匹配","tab-wallets.incompatible-qr_alert.okay_label":"确定","tab-wallets.no-secret_alert.title":"找不到帐号","tab-wallets.no-secret_alert.text":"您在AirGap中没有此公钥的任何匹配帐户。 请导入您的助记词并创建相应的帐户以签署此交易","tab-wallets.no-secret_alert.okay_label":"确定","tab-wallets.raw-tx_alert.title":"选择账户","tab-wallets.raw-tx_alert.okay_label":"确定","tabs.wallets":"账户","tabs.scanner":"扫描","tabs.secrets":"私钥","transaction-detail.title":"签署交易","transaction-detail.text":"您即将转账的数量：","transaction-detail.sign-tx_label":"转账签名","transaction-onboarding.title":"已签名转账","transaction-onboarding.heading":"扫描已签名转账","transaction-onboarding.description":"使用AirGap钱包应用程序扫描下一步已签名的交易二维码","transaction-onboarding.dont-show_label":"不再重复显示","transaction-onboarding.next_label":"下一步","transaction-unlock.title":"解锁私钥","transaction-unlock.unlock_label":"已解锁","transaction-signed.title":"已签名转账","transaction-signed.raw-tx_label":"显示原始转账","transaction-signed.same-device-broadcast_label":"同设备内广播。","transaction-signed.done_label":"完成","touch-entropy.text":"用手指画画","wallet-address.title":"账户地址","wallet-address.address_label":"地址：","wallet-address.path_label":"派生路径：","wallet-address.sync_label":"同步帐户","wallet-address.done_label":"完成","wallet-address.copy-address_modal.text":"地址已复制到剪贴板","wallet-edit-delete-popover.settings_label":"账户设定","wallet-edit-delete-popover.copy_label":"复制地址","wallet-edit-delete-popover.account-removal_alert.title":"确认删除帐户","wallet-edit-delete-popover.account-removal_alert.text":"确认要删除此帐户吗？ 如果您知道其正确的派生路径/数字货币种类，您可以随时将其添加回来","wallet-edit-delete-popover.account-removal_alert.cancel_label":"取消","wallet-edit-delete-popover.account-removal_alert.delete_label":"确认删除","wallet-select-coins.title":"增加账户","wallet-select-coins.text":"选择要使用的数字货币种类","wallet-select-coins.select-type.label":"选择账户种类","wallet-select-coins.select-type.single-address_label":"单一地址钱包","wallet-select-coins.select-type.hd-wallet_label":"HD钱包","wallet-select-coins.advanced_label":"高级模式","wallet-select-coins.custom-path.label":"自定义派生路径","wallet-select-coins.custom-path.placeholder":"自定义派生路径","wallet-select-coins.create_label":"创建","wallet-share.title":"同步帐户","wallet-share.text":"此二维码包含您的<b>扩展</b>公钥、公共地址和您的代币类型。不要公开分享！","wallet-share.same-device_label":"同设备内部同步。","wallet-share.done_label":"完成","warnings-modal.disclaimer.title":"AirGap免责声明","warnings-modal.disclaimer.text":"您作为用户在此确认并接受本协议所提供的所有信息。 您作为用户确认本文档的内容已经过自己的审核、测试和理解。","warnings-modal.disclaimer.disclaimer-list.text":"在适用法律允许的最大范围内：","warnings-modal.disclaimer.disclaimer-list.item-1_text":"及其员工，自由职业者或其他分包商提供的所有服务均不提供任何形式的陈述和保证","warnings-modal.disclaimer.disclaimer-list.item-2_text":"Papers GmbH对本协议项下或与本协议有关的损害不承担任何直接和间接责任，尤其是但不限于：数据丢失或损坏、利润损失、受损/被黑/攻击的产品或系统、和/或 被盗/缺少货币资金","warnings-modal.disclaimer.description":"您了解此软件涉及的风险，包括但不限于：丢失您的账户，私钥和资金访问权","warnings-modal.disclaimer.understood_label":"我理解并接受","about.label":"关于","about.version":"版本：","about.code":"代码：","signed-transaction.transaction-unreadable":"我们无法从这个交易中提取信息。但是这不意味交易无效，请确定您的操作，并确保所包含交易数据正常。","secret-edit.interaction.label":"保险箱与钱包互动","secret-edit.interaction.text":"选择保险箱和钱包装在同一台设备还是不同设备。","interaction-selection-settings.title":"钱包互动","interaction-selection-settings.same-device_heading":"看起来您的<span class=\"style__strong color__primary\">AirGap保险箱</span>和AirGap钱包<span class=\"style__strong color__primary\">在同一台设备</span>上运行。","interaction-selection-settings.offline-device_heading":"看起来您的<span class=\"style__strong color__primary\">AirGap保险箱</span>运行在<span class=\"style__strong color__primary\">离线设备</span>上。","interaction-selection-settings.text":"您可以定义您的AirGap钱包的安装位置，以确保与保险箱互动更方便。","interaction-selection-settings.selector.always":"总是询问","interaction-selection-settings.selector.same-device":"保险箱和钱包在同一设备","interaction-selection-settings.selector.offline-device":"保险箱在离线设备上","interaction-selection-settings.continue_label":"继续","interaction-selection-settings.description":"您可以随时通过设置标签来更改您的设置","tab-settings.about":"关于","tab-settings.title":"设置","tab-settings.information_label":"信息","tab-settings.secrets_label":"密钥","tab-settings.add-settings_label":"添加密钥","tab-wallets.sync-operation-not-supported_alert.title":"不支持同步操作","tab-wallets.sync-operation-not-supported_alert.text":"请用AirGap钱包扫描二维码","tab-wallets.sync-operation-not-supported_alert.okay_label":"好的","tab-wallets.invalid-sync-operation_alert.title":"同步码不兼容","tab-wallets.invalid-sync-operation_alert.text":"不能解析同步码。请确认您扫描的是AirGap同步码。","tab-wallets.invalid-sync-operation_alert.okay_label":"好的","tabs.settings":"设置","transaction-signed.heading":"已签名的交易信息，请用<span class=\"style__strong color__primary\">AirGap钱包</span>扫描。","interaction-selection.title":"钱包互动","interaction-selection.heading":"您希望如何与<span class=\"style__strong color__primary\">AirGap钱包</span>互动？","interaction-selection.same-device_label":"同一台设备","interaction-selection.same-device_info":"AirGap保险线与AirGap钱包安装在同一设备。","interaction-selection.offline-device_label":"离线设备","interaction-selection.offline-device_info":"AirGap保险箱安装在离线设备上，用AirGap钱包扫描二维码","wallet-edit-delete-popover.copy_sync_code":"复制同步码","wallet-edit-delete-popover.confirm_address_copy":"地址已经复制到您的剪贴板","wallet-edit-delete-popover.confirm_sync_code_copy":"同步码已经复制到剪贴板","wallet-share.heading":"请用您的<span class=\"style__strong color__primary\">AirGap钱包</span>扫描同步二维码。","deep-link.not-supported-alert.title":"啊哦","deep-link.not-supported-alert.message":"只有移动设备支持Deeplinking。","deep-link.not-supported-alert.ok":"好","deep-link.app-not-found.title":"啊哦","deep-link.app-not-found.message":"看起来您在本设备上没有安装 {{otherAppName}}。","deep-link.app-not-found.ok":"好"}

/***/ }),

/***/ 1454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraBrowserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_workers_entropyCalculatorWorker__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var blobURL = window.URL.createObjectURL(new Blob([__WEBPACK_IMPORTED_MODULE_2__assets_workers_entropyCalculatorWorker__["a" /* default */]]));
var entropyCalculatorWorker = new Worker(blobURL);
var CameraBrowserService = (function () {
    function CameraBrowserService() {
        var _this = this;
        this.VIDEO_FREQUENCY = 2000;
        this.collectedEntropyPercentage = 0;
        this.entropyObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            entropyCalculatorWorker.onmessage = function (event) {
                _this.collectedEntropyPercentage += event.data.entropyMeasure;
                observer.next({ entropyHex: event.data.entropyHex });
            };
            _this.handler = function (buffer1) {
                var uintArray = _this.arrayBufferFromUint8Array(buffer1);
                entropyCalculatorWorker.postMessage({
                    entropyBuffer: uintArray
                }, [uintArray]);
            };
        });
    }
    CameraBrowserService.prototype.viewDidLeave = function () {
        // empty
    };
    CameraBrowserService.prototype.viewWillEnter = function () {
        // empty
    };
    CameraBrowserService.prototype.start = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var constraints = {
                video: true,
                audio: true
            };
            _this.collectedEntropyPercentage = 0;
            var video = _this.videoElement.nativeElement;
            navigator.mediaDevices
                .getUserMedia(constraints)
                .then(function (stream) {
                _this.videoStream = stream;
                video.srcObject = stream;
                video.play();
                resolve();
            })
                .catch(function (err) {
                console.log('error in camera.brower.service', err);
                resolve();
            });
            _this.cameraInterval = window.setInterval(function () {
                if (video.videoWidth === 0) {
                    return;
                }
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                context.drawImage(video, 0, 0);
                var buffer = context.getImageData(0, 0, video.videoWidth, video.videoHeight).data;
                _this.handler(buffer);
            }, _this.VIDEO_FREQUENCY / 5);
        });
    };
    CameraBrowserService.prototype.stop = function () {
        if (this.cameraInterval) {
            clearInterval(this.cameraInterval);
        }
        try {
            this.videoStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
        catch (e) {
            console.log(e);
        }
        return Promise.resolve();
    };
    CameraBrowserService.prototype.getEntropyUpdateObservable = function () {
        return this.entropyObservable;
    };
    CameraBrowserService.prototype.getCollectedEntropyPercentage = function () {
        return this.collectedEntropyPercentage;
    };
    CameraBrowserService.prototype.arrayBufferFromUint8Array = function (uintArray) {
        var buffer = new ArrayBuffer(uintArray.length);
        var bufView = new Uint8Array(buffer);
        for (var i = 0; i < uintArray.length; i++) {
            bufView[i] = uintArray[i];
        }
        return buffer;
    };
    CameraBrowserService.prototype.setVideoElement = function (element) {
        this.videoElement = element;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('cameraCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CameraBrowserService.prototype, "cameraCanvas", void 0);
    CameraBrowserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CameraBrowserService);
    return CameraBrowserService;
}());

//# sourceMappingURL=camera.browser.service.js.map

/***/ }),

/***/ 1455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioBrowserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_workers_entropyCalculatorWorker__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var blobURL = window.URL.createObjectURL(new Blob([__WEBPACK_IMPORTED_MODULE_2__assets_workers_entropyCalculatorWorker__["a" /* default */]]));
var entropyCalculatorWorker = new Worker(blobURL);
var AudioBrowserService = (function () {
    function AudioBrowserService() {
        var _this = this;
        this.ENTROPY_SIZE = 4096;
        this.collectedEntropyPercentage = 0;
        this.entropyObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            entropyCalculatorWorker.onmessage = function (event) {
                _this.collectedEntropyPercentage += event.data.entropyMeasure;
                observer.next({
                    entropyHex: event.data.entropyHex
                });
            };
            _this.handler = function (event) {
                var data = event.inputBuffer.getChannelData(0);
                var buffer1 = _this.arrayBufferFromIntArray(data);
                entropyCalculatorWorker.postMessage({ entropyBuffer: buffer1 }, [buffer1]);
            };
        });
        // polyfill getUserMedia
        navigator.getUserMedia =
            navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia;
    }
    AudioBrowserService.prototype.start = function () {
        var _this = this;
        this.collectedEntropyPercentage = 0;
        return new Promise(function (resolve) {
            navigator.getUserMedia({ video: false, audio: true }, function (stream) {
                var audioContext = new AudioContext();
                var microphoneStreamSource = audioContext.createMediaStreamSource(stream);
                var scriptProcessor = audioContext.createScriptProcessor(_this.ENTROPY_SIZE, 1, 1);
                scriptProcessor.onaudioprocess = function (event) {
                    _this.handler(event);
                };
                microphoneStreamSource.connect(scriptProcessor);
                scriptProcessor.connect(audioContext.destination);
                resolve();
            }, function (err) {
                console.log('error in audio.browser.service:', err);
                resolve();
            });
        });
    };
    AudioBrowserService.prototype.stop = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.microphoneStreamSource) {
                _this.microphoneStreamSource.stop();
                _this.microphoneStreamSource.disconnect();
            }
            if (_this.scriptProcessor) {
                _this.scriptProcessor.stop();
                _this.scriptProcessor.disconnect();
            }
            resolve();
        });
    };
    AudioBrowserService.prototype.getEntropyUpdateObservable = function () {
        return this.entropyObservable;
    };
    AudioBrowserService.prototype.arrayBufferFromIntArray = function (array) {
        var buffer = new ArrayBuffer(array.length);
        var bufView = new Float32Array(buffer);
        for (var i = 0; i < array.length; i++) {
            bufView[i] = array[i];
        }
        return buffer;
    };
    AudioBrowserService.prototype.getCollectedEntropyPercentage = function () {
        return this.collectedEntropyPercentage / 200;
    };
    AudioBrowserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AudioBrowserService);
    return AudioBrowserService;
}());

//# sourceMappingURL=audio.browser.service.js.map

/***/ }),

/***/ 1456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DummyEntropyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DummyEntropyService = (function () {
    function DummyEntropyService() {
    }
    DummyEntropyService.prototype.start = function () {
        return Promise.resolve();
    };
    DummyEntropyService.prototype.stop = function () {
        return Promise.resolve();
    };
    DummyEntropyService.prototype.getEntropyUpdateObservable = function () {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            observer.next({
                entropyHex: ''
            });
        });
    };
    DummyEntropyService.prototype.getCollectedEntropyPercentage = function () {
        return 0;
    };
    DummyEntropyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], DummyEntropyService);
    return DummyEntropyService;
}());

//# sourceMappingURL=dummy.entropy.service.js.map

/***/ }),

/***/ 1457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_material_icons__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_module__ = __webpack_require__(1458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__secret_generate_secret_generate_module__ = __webpack_require__(1459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__secret_validate_secret_validate_module__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__secret_create_secret_create_module__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__secret_edit_secret_edit_module__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__secret_rules_secret_rules_module__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__secret_show_secret_show_module__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wallet_address_wallet_address_module__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tabs_tabs_module__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tab_settings_tab_settings_module__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__transaction_detail_transaction_detail_module__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__transaction_signed_transaction_signed_module__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tab_wallets_tab_wallets_module__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__secret_import_secret_import_module__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__warnings_modal_warnings_modal_module__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__social_recovery_setup_social_recovery_setup_module__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tab_scan_tab_scan_module__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__wallet_select_coins_wallet_select_coins_module__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__social_recovery_show_share_social_recovery_show_share_module__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__social_recovery_validate_share_social_recovery_validate_share_module__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__wallet_share_wallet_share_module__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__social_recovery_import_social_recovery_import_module__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_introduction_introduction_module__ = __webpack_require__(1461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__local_authentication_onboarding_local_authentication_onboarding_module__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__secret_generate_onboarding_secret_generate_onboarding_module__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__distribution_onboarding_distribution_onboarding_module__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__interaction_selection_interaction_selection_module__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__interaction_selection_settings_interaction_selection_settings_module__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic2_material_icons__["a" /* MaterialIconsModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__about_about_module__["a" /* AboutPageModule */],
                __WEBPACK_IMPORTED_MODULE_6__secret_generate_secret_generate_module__["a" /* SecretGeneratePageModule */],
                __WEBPACK_IMPORTED_MODULE_29__secret_generate_onboarding_secret_generate_onboarding_module__["SecretGenerateOnboardingPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__secret_validate_secret_validate_module__["SecretValidatePageModule"],
                __WEBPACK_IMPORTED_MODULE_8__secret_create_secret_create_module__["SecretCreatePageModule"],
                __WEBPACK_IMPORTED_MODULE_9__secret_edit_secret_edit_module__["SecretEditPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__secret_rules_secret_rules_module__["SecretRulesPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__secret_show_secret_show_module__["SecretShowPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__wallet_address_wallet_address_module__["WalletAddressPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__wallet_share_wallet_share_module__["WalletSharePageModule"],
                __WEBPACK_IMPORTED_MODULE_13__tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__tab_settings_tab_settings_module__["TabSettingsPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__tab_scan_tab_scan_module__["TabScanPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__transaction_detail_transaction_detail_module__["TransactionDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__transaction_signed_transaction_signed_module__["TransactionSignedPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__tab_wallets_tab_wallets_module__["TabWalletsPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__secret_import_secret_import_module__["SecretImportPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__warnings_modal_warnings_modal_module__["WarningsModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__social_recovery_setup_social_recovery_setup_module__["SocialRecoverySetupPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__social_recovery_show_share_social_recovery_show_share_module__["SocialRecoveryShowSharePageModule"],
                __WEBPACK_IMPORTED_MODULE_24__social_recovery_validate_share_social_recovery_validate_share_module__["SocialRecoveryValidateSharePageModule"],
                __WEBPACK_IMPORTED_MODULE_26__social_recovery_import_social_recovery_import_module__["SocialRecoveryImportPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__wallet_select_coins_wallet_select_coins_module__["WalletSelectCoinsPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__local_authentication_onboarding_local_authentication_onboarding_module__["LocalAuthenticationOnboardingPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__distribution_onboarding_distribution_onboarding_module__["DistributionOnboardingPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_introduction_introduction_module__["a" /* IntroductionPageModule */],
                __WEBPACK_IMPORTED_MODULE_31__interaction_selection_interaction_selection_module__["InteractionSelectionPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__interaction_selection_settings_interaction_selection_settings_module__["InteractionSelectionSettingsPageModule"]
            ],
            exports: []
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 1458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about__ = __webpack_require__(688);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__about__["a" /* AboutPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__about__["a" /* AboutPage */]), __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["a" /* TranslateModule */]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 1459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretGeneratePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secret_generate__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_gyroscope_gyroscope_native_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_camera_camera_native_service__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_camera_factory__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_audio_audio_native_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_audio_audio_factory__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_gyroscope_gyroscope_factory__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_gyroscope__ = __webpack_require__(1460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_storage_secure_storage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_storage_secure_storage_factory__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic2_material_icons__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_scanner_scanner__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SecretGeneratePageModule = (function () {
    function SecretGeneratePageModule() {
    }
    SecretGeneratePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__secret_generate__["a" /* SecretGeneratePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_12__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_13_ionic2_material_icons__["a" /* MaterialIconsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__secret_generate__["a" /* SecretGeneratePage */]), __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["a" /* TranslateModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_gyroscope__["a" /* Gyroscope */],
                __WEBPACK_IMPORTED_MODULE_14__providers_scanner_scanner__["a" /* ScannerProvider */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10__providers_storage_secure_storage__["a" /* SecureStorageService */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_11__providers_storage_secure_storage_factory__["a" /* SecureStorageFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__providers_camera_camera_native_service__["a" /* CameraNativeService */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_5__providers_camera_camera_factory__["a" /* CameraFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* RendererFactory2 */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__providers_audio_audio_native_service__["a" /* AudioNativeService */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_7__providers_audio_audio_factory__["a" /* AudioServiceFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__providers_gyroscope_gyroscope_native_service__["a" /* GyroscopeNativeService */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_8__providers_gyroscope_gyroscope_factory__["a" /* GyroscopeServiceFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_gyroscope__["a" /* Gyroscope */]]
                }
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__secret_generate__["a" /* SecretGeneratePage */]]
        })
    ], SecretGeneratePageModule);
    return SecretGeneratePageModule;
}());

//# sourceMappingURL=secret-generate.module.js.map

/***/ }),

/***/ 1461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introduction__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IntroductionPageModule = (function () {
    function IntroductionPageModule() {
    }
    IntroductionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__introduction__["a" /* IntroductionPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__introduction__["a" /* IntroductionPage */]), __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__introduction__["a" /* IntroductionPage */]]
        })
    ], IntroductionPageModule);
    return IntroductionPageModule;
}());

//# sourceMappingURL=introduction.module.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_interaction_interaction__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__social_recovery_setup_social_recovery_setup__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__secret_edit_popover_secret_edit_popover_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wallet_select_coins_wallet_select_coins__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interaction_selection_settings_interaction_selection_settings__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var SecretEditPage = (function () {
    function SecretEditPage(navController, popoverCtrl, navParams, secretsProvider) {
        this.navController = navController;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.secretsProvider = secretsProvider;
        this.isGenerating = false;
        this.interactionSetting = false;
        this.secret = this.navParams.get('secret');
        this.isGenerating = this.navParams.get('isGenerating');
        this.interactionSetting = this.secret.interactionSetting !== __WEBPACK_IMPORTED_MODULE_2__providers_interaction_interaction__["d" /* InteractionSetting */].UNDETERMINED;
    }
    SecretEditPage.prototype.confirm = function () {
        var _this = this;
        this.secretsProvider
            .addOrUpdateSecret(this.secret)
            .then(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dismiss()];
                    case 1:
                        _a.sent();
                        if (this.isGenerating) {
                            this.navController.push(__WEBPACK_IMPORTED_MODULE_6__wallet_select_coins_wallet_select_coins__["a" /* WalletSelectCoinsPage */]).catch(Object(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
                        }
                        return [2 /*return*/];
                }
            });
        }); })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
    };
    SecretEditPage.prototype.dismiss = function () {
        return this.navController.popToRoot();
    };
    SecretEditPage.prototype.goToSocialRecoverySetup = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_4__social_recovery_setup_social_recovery_setup__["a" /* SocialRecoverySetupPage */], { secret: this.secret }).catch(Object(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    SecretEditPage.prototype.goToWalletInteraction = function () {
        this.navController
            .push(__WEBPACK_IMPORTED_MODULE_8__interaction_selection_settings_interaction_selection_settings__["a" /* InteractionSelectionSettingsPage */], { secret: this.secret, isEdit: true })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    SecretEditPage.prototype.presentEditPopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__secret_edit_popover_secret_edit_popover_component__["a" /* SecretEditPopoverComponent */], {
            secret: this.secret,
            onDelete: function () {
                _this.dismiss().catch(Object(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_MODAL));
            }
        });
        popover
            .present({
            ev: event
        })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_MODAL));
    };
    SecretEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-secret-edit',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-edit/secret-edit.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent hideBackButton="isGenerating">\n    <ion-title ion-text color="white">{{ isGenerating ? \'Save\' : \'Edit\' }} {{ \'secret-edit.title\' | translate }}</ion-title>\n\n    <ion-buttons end *ngIf="!isGenerating">\n      <button ion-button icon-only color="dark" (click)="presentEditPopover($event)"><ion-icon name="more"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="colored-background" padding>\n  <p>{{ \'secret-edit.text\' | translate }}</p>\n\n  <ion-item no-padding padding-bottom>\n    <ion-label color="white" floating>{{ \'secret-edit.secret_input_label\' | translate }}</ion-label>\n    <ion-input id="secret-label-input" [(ngModel)]="secret.label"></ion-input>\n  </ion-item>\n\n  <p class="font--weight__med">{{ \'secret-edit.security-level.heading\' | translate }}</p>\n\n  <p>{{ \'secret-edit.security-level.text\' | translate }}</p>\n\n  <ion-list>\n    <ion-item no-lines no-padding>\n      <ion-avatar item-start>\n        <ion-text-avatar [color]="secret.isParanoia ? \'primary\' : \'secondary-light\'">\n          <ion-icon md-name="fiber_pin"></ion-icon>\n        </ion-text-avatar>\n      </ion-avatar>\n      <ion-label color="white">\n        {{ \'secret-edit.passcode.label\' | translate }}\n        <p class="small">{{ \'secret-edit.passcode.text\' | translate }}</p>\n      </ion-label>\n      <ion-checkbox [(ngModel)]="secret.isParanoia" no-margin item-right [disabled]="!secret.secretHex"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <p class="font--weight__med">{{ \'secret-edit.secret-recovery.heading\' | translate }}</p>\n\n  <p *ngIf="isGenerating">{{ \'secret-edit.secret-recovery.text\' | translate }}</p>\n\n  <button ion-item (click)="goToSocialRecoverySetup()" no-lines detail-push [disabled]="isGenerating" no-padding>\n    <ion-avatar item-start>\n      <ion-text-avatar [color]="secret.hasSocialRecovery ? \'primary\' : \'secondary-light\'">\n        <ion-icon md-name="group_work"></ion-icon>\n      </ion-text-avatar>\n    </ion-avatar>\n    <h2>{{ \'secret-edit.social-recovery.label\' | translate }}</h2>\n    <p [innerHTML]="\'secret-edit.social-recovery.text\' | translate"></p>\n  </button>\n\n  <p class="font--weight__med">{{ \'secret-edit.interaction.label\' | translate }}</p>\n\n  <button ion-item (click)="goToWalletInteraction()" no-lines detail-push text-wrap no-padding>\n    <ion-avatar item-start>\n      <ion-text-avatar [color]="interactionSetting ? \'primary\' : \'secondary-light\'"><ion-icon name="swap"></ion-icon></ion-text-avatar>\n    </ion-avatar>\n    <p [innerHTML]="\'secret-edit.interaction.text\' | translate"></p>\n  </button>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button\n        default\n        ion-button\n        id="btn-save-secret"\n        color="primary"\n        *ngIf="secret.label"\n        [disabled]="secret.label.length < 1"\n        (click)="confirm()"\n        round\n        item-right\n      >\n        {{ \'secret-edit.confirm_label\' | translate }}\n      </button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-edit/secret-edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_secrets_secrets_provider__["a" /* SecretsProvider */]])
    ], SecretEditPage);
    return SecretEditPage;
}());

//# sourceMappingURL=secret-edit.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PermissionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PermissionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PermissionStatus;
(function (PermissionStatus) {
    PermissionStatus["GRANTED"] = "GRANTED";
    PermissionStatus["NOT_REQUESTED"] = "NOT_REQUESTED";
    PermissionStatus["DENIED_ALWAYS"] = "DENIED_ALWAYS";
    PermissionStatus["DENIED"] = "DENIED";
    PermissionStatus["UNKNOWN"] = "UNKNOWN";
})(PermissionStatus || (PermissionStatus = {}));
var PermissionTypes;
(function (PermissionTypes) {
    PermissionTypes["CAMERA"] = "CAMERA";
    PermissionTypes["MICROPHONE"] = "MICROPHONE";
})(PermissionTypes || (PermissionTypes = {}));
var PermissionsProvider = (function () {
    function PermissionsProvider(platform, diagnostic, alertCtrl) {
        this.platform = platform;
        this.diagnostic = diagnostic;
        this.alertCtrl = alertCtrl;
    }
    PermissionsProvider.prototype.hasCameraPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagnostic.getCameraAuthorizationStatus(false)];
                    case 1:
                        permission = _a.sent();
                        return [2 /*return*/, this.getPermissionStatus(permission)];
                }
            });
        });
    };
    PermissionsProvider.prototype.hasMicrophonePermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagnostic.getMicrophoneAuthorizationStatus()];
                    case 1:
                        permission = _a.sent();
                        return [2 /*return*/, this.getPermissionStatus(permission)];
                }
            });
        });
    };
    PermissionsProvider.prototype.requestPermissions = function (permissions) {
        return __awaiter(this, void 0, void 0, function () {
            var permissionsToRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        permissionsToRequest = [];
                        if (permissions.indexOf(PermissionTypes.CAMERA) >= 0) {
                            permissionsToRequest.push(this.diagnostic.permission.CAMERA);
                        }
                        if (permissions.indexOf(PermissionTypes.MICROPHONE) >= 0) {
                            permissionsToRequest.push(this.diagnostic.permission.RECORD_AUDIO);
                        }
                        return [4 /*yield*/, this.diagnostic.requestRuntimePermissions(permissionsToRequest)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 7];
                        if (!(permissions.indexOf(PermissionTypes.CAMERA) >= 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.diagnostic.requestCameraAuthorization(false)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!(permissions.indexOf(PermissionTypes.MICROPHONE) >= 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.diagnostic.requestMicrophoneAuthorization()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The user actively wants to give permissions. This means we first check if we
     * can ask him for the permissions natively, otherwise we show an alert with a
     * link to the settings.
     */
    PermissionsProvider.prototype.userRequestsPermissions = function (permissions) {
        return __awaiter(this, void 0, void 0, function () {
            var canRequestPermission, _i, permissions_1, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        canRequestPermission = false;
                        _i = 0, permissions_1 = permissions;
                        _a.label = 1;
                    case 1:
                        if (!(_i < permissions_1.length)) return [3 /*break*/, 4];
                        p = permissions_1[_i];
                        return [4 /*yield*/, this.canAskForPermission(p)];
                    case 2:
                        canRequestPermission = (_a.sent()) || canRequestPermission;
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        if (!canRequestPermission) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.requestPermissions(permissions)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        this.showSettingsAlert();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    PermissionsProvider.prototype.showSettingsAlert = function () {
        this.showAlert('Settings', 'You can enable the missing permissions in the device settings.');
    };
    PermissionsProvider.prototype.canAskForPermission = function (permission) {
        return __awaiter(this, void 0, void 0, function () {
            var canAskForPermission, permissionStatus, permissionStatus, permissionStatus, permissionStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        canAskForPermission = true;
                        if (!this.platform.is('android')) return [3 /*break*/, 5];
                        if (!(permission === PermissionTypes.CAMERA)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.hasCameraPermission()];
                    case 1:
                        permissionStatus = _a.sent();
                        canAskForPermission = !(permissionStatus === PermissionStatus.DENIED_ALWAYS);
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(permission === PermissionTypes.MICROPHONE)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.hasMicrophonePermission()];
                    case 3:
                        permissionStatus = _a.sent();
                        canAskForPermission = !(permissionStatus === PermissionStatus.DENIED_ALWAYS);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 9];
                    case 5:
                        if (!this.platform.is('ios')) return [3 /*break*/, 9];
                        if (!(permission === PermissionTypes.CAMERA)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.hasCameraPermission()];
                    case 6:
                        permissionStatus = _a.sent();
                        canAskForPermission = !(permissionStatus === PermissionStatus.DENIED);
                        return [3 /*break*/, 9];
                    case 7:
                        if (!(permission === PermissionTypes.MICROPHONE)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.hasMicrophonePermission()];
                    case 8:
                        permissionStatus = _a.sent();
                        canAskForPermission = !(permissionStatus === PermissionStatus.DENIED);
                        _a.label = 9;
                    case 9: return [2 /*return*/, canAskForPermission];
                }
            });
        });
    };
    PermissionsProvider.prototype.getPermissionStatus = function (permission) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.isGranted(permission)) {
                    return [2 /*return*/, PermissionStatus.GRANTED];
                }
                else if (this.isNotRequested(permission)) {
                    return [2 /*return*/, PermissionStatus.NOT_REQUESTED];
                }
                else if (this.isDeniedAlways(permission)) {
                    return [2 /*return*/, PermissionStatus.DENIED_ALWAYS];
                }
                else if (this.isDenied(permission)) {
                    return [2 /*return*/, PermissionStatus.DENIED];
                }
                else {
                    return [2 /*return*/, PermissionStatus.UNKNOWN];
                }
                return [2 /*return*/];
            });
        });
    };
    PermissionsProvider.prototype.showAlert = function (title, message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Open settings',
                    handler: function () {
                        _this.diagnostic.switchToSettings().catch(Object(__WEBPACK_IMPORTED_MODULE_3__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_3__error_handler_error_handler__["a" /* ErrorCategory */].CORDOVA_PLUGIN));
                    }
                }
            ]
        });
        alert.present().catch(Object(__WEBPACK_IMPORTED_MODULE_3__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_3__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
    };
    PermissionsProvider.prototype.isGranted = function (permission) {
        return permission === this.diagnostic.permissionStatus.GRANTED || permission === this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE;
    };
    PermissionsProvider.prototype.isNotRequested = function (permission) {
        return permission === this.diagnostic.permissionStatus.NOT_REQUESTED;
    };
    PermissionsProvider.prototype.isDeniedAlways = function (permission) {
        return permission === this.diagnostic.permissionStatus.DENIED_ALWAYS || permission === this.diagnostic.permissionStatus.RESTRICTED;
    };
    PermissionsProvider.prototype.isDenied = function (permission) {
        return !(this.isGranted(permission) || this.isNotRequested(permission));
    };
    PermissionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], PermissionsProvider);
    return PermissionsProvider;
}());

//# sourceMappingURL=permissions.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletSelectCoinsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_authentication_onboarding_local_authentication_onboarding__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_airgap_coin_lib__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_airgap_coin_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var WalletSelectCoinsPage = (function () {
    function WalletSelectCoinsPage(loadingCtrl, navCtrl, navParams, secretsProvider, storage, app) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.secretsProvider = secretsProvider;
        this.storage = storage;
        this.app = app;
        this.isHDWallet = false;
        this.isAdvancedMode = false;
        this.coinProtocols = Object(__WEBPACK_IMPORTED_MODULE_5_airgap_coin_lib__["supportedProtocols"])();
        try {
            this.selectedProtocol = Object(__WEBPACK_IMPORTED_MODULE_5_airgap_coin_lib__["getProtocolByIdentifier"])(this.navParams.get('protocol'));
        }
        catch (error) { }
    }
    WalletSelectCoinsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletSelectCoinsPage');
    };
    WalletSelectCoinsPage.prototype.onSelectedProtocolChange = function (selectedProtocol) {
        this.selectedProtocol = selectedProtocol;
        this.isHDWallet = this.selectedProtocol.supportsHD;
        this.customDerivationPath = this.selectedProtocol.standardDerivationPath;
    };
    WalletSelectCoinsPage.prototype.onIsHDWalletChange = function (isHDWallet) {
        this.isHDWallet = isHDWallet;
        if (isHDWallet) {
            this.customDerivationPath = this.selectedProtocol.standardDerivationPath;
        }
        else {
            this.customDerivationPath = this.selectedProtocol.standardDerivationPath + "/0/1";
        }
    };
    WalletSelectCoinsPage.prototype.addWallet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('DISCLAIMER_HIDE_LOCAL_AUTH_ONBOARDING')];
                    case 1:
                        value = _a.sent();
                        if (!value) {
                            this.navCtrl
                                .push(__WEBPACK_IMPORTED_MODULE_4__local_authentication_onboarding_local_authentication_onboarding__["a" /* LocalAuthenticationOnboardingPage */], {
                                protocolIdentifier: this.selectedProtocol.identifier,
                                isHDWallet: this.isHDWallet,
                                customDerivationPath: this.customDerivationPath
                            })
                                .catch(Object(__WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.secretsProvider.addWallet(this.selectedProtocol.identifier, this.isHDWallet, this.customDerivationPath)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.popToRoot()
                            // navigate to wallets tab after initial derivation
                        ];
                    case 3:
                        _a.sent();
                        // navigate to wallets tab after initial derivation
                        if (this.app.getActiveNavs().length > 0) {
                            ;
                            this.app.getActiveNavs()[0].parent.select(0);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletSelectCoinsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet-select-coins',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/wallet-select-coins/wallet-select-coins.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'wallet-select-coins.title\' | translate }}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="colored-background">\n  <!-- Current Secret -->\n  <current-secret></current-secret>\n\n  <ion-list radio-group [ngModel]="selectedProtocol" (ngModelChange)="onSelectedProtocolChange($event)" no-lines>\n    <ion-list-header no-padding no-margin no-lines>\n      <ion-label color="white" class="font--weight__med">{{ \'wallet-select-coins.text\' | translate }}</ion-label>\n    </ion-list-header>\n    <ion-item no-padding *ngFor="let protocol of coinProtocols" no-padding>\n      <ion-avatar item-start><currency-symbol [symbol]="protocol.symbol"></currency-symbol></ion-avatar>\n      <ion-label color="white">{{ protocol.name }}</ion-label>\n      <ion-radio [id]="protocol.identifier" [value]="protocol" no-margin item-right></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-list no-lines padding-top>\n    <ion-item id="wallet-type-selector" no-padding *ngIf="selectedProtocol && selectedProtocol.supportsHD">\n      <ion-label class="font--weight__med" color="white">{{ \'wallet-select-coins.select-type.label\' | translate }}</ion-label>\n      <ion-select [(ngModel)]="isHDWallet" (ngModelChange)="onIsHDWalletChange($event)" color="white">\n        <ion-option [value]="false">{{ \'wallet-select-coins.select-type.single-address_label\' | translate }}</ion-option>\n        <ion-option [value]="true" selected>{{ \'wallet-select-coins.select-type.hd-wallet_label\' | translate }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!-- TODO: trigger advanced setting > custom derivation input -->\n    <ion-item no-padding>\n      <ion-label class="font--weight__med" color="white">{{ \'wallet-select-coins.advanced_label\' | translate }}</ion-label>\n      <ion-toggle [(ngModel)]="isAdvancedMode"></ion-toggle>\n    </ion-item>\n\n    <ion-item no-padding padding-bottom *ngIf="isAdvancedMode">\n      <ion-label stacked color="primary">{{ \'wallet-select-coins.custom-path.label\' | translate }}</ion-label>\n      <ion-input\n        [(ngModel)]="customDerivationPath"\n        placeholder="{{\'wallet-select-coins.custom-path.placeholder\'|translate}}"\n        color="white"\n      ></ion-input>\n    </ion-item>\n\n    <!--\n      TODO: all supported wallet types with corresponding derivation path\n      <ion-item no-padding >\n        <ion-label class="font--weight__med" color="white">Imported Wallet from ...</ion-label>\n        <ion-select color="white">\n          <ion-option value="f">Trezor</ion-option>\n          <ion-option value="m">Jaxx</ion-option>\n        </ion-select>\n      </ion-item>\n    -->\n  </ion-list>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button id="btn-add-coins" [disabled]="!selectedProtocol" default ion-button color="primary" round item-right (click)="addWallet()">\n        {{ \'wallet-select-coins.create_label\' | translate }}\n      </button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/wallet-select-coins/wallet-select-coins.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_secrets_secrets_provider__["a" /* SecretsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], WalletSelectCoinsPage);
    return WalletSelectCoinsPage;
}());

//# sourceMappingURL=wallet-select-coins.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraNativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera_preview__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_workers_entropyCalculatorWorker__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permissions_permissions__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var blobURL = window.URL.createObjectURL(new Blob([__WEBPACK_IMPORTED_MODULE_4__assets_workers_entropyCalculatorWorker__["a" /* default */]]));
var entropyCalculatorWorker = new Worker(blobURL);
var CameraNativeService = (function () {
    function CameraNativeService(platform, cameraPreview, rendererFactory, permissionsProvider) {
        var _this = this;
        this.platform = platform;
        this.cameraPreview = cameraPreview;
        this.rendererFactory = rendererFactory;
        this.permissionsProvider = permissionsProvider;
        this.disabled = false;
        this.cameraIsRunning = false; // Prevent multiple start/stops of camera
        this.cameraIsTakingPhoto = false; // Prevent stopping camera while picture is being taken
        // entropy settings
        this.VIDEO_SIZE = 50;
        this.VIDEO_QUALITY = 100;
        this.VIDEO_FREQUENCY = 2000;
        this.collectedEntropyPercentage = 0;
        this.renderer = this.rendererFactory.createRenderer(null, null);
        this.entropyObservable = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            entropyCalculatorWorker.onmessage = function (event) {
                _this.collectedEntropyPercentage += event.data.entropyMeasure;
                observer.next({ entropyHex: event.data.entropyHex });
            };
            _this.handler = function (base64ImagePayload) {
                var buffer1 = _this.arrayBufferFromBase64(base64ImagePayload);
                entropyCalculatorWorker.postMessage({
                    entropyBuffer: buffer1
                }, [buffer1]);
            };
        });
    }
    CameraNativeService.prototype.setCameraOptions = function (opts) {
        this.cameraOptions = opts;
    };
    CameraNativeService.prototype.viewDidLeave = function () {
        this.disabled = true;
        this.uninjectCSS();
    };
    CameraNativeService.prototype.viewWillEnter = function () {
        this.disabled = false;
    };
    CameraNativeService.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permissionStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disabled = false;
                        this.collectedEntropyPercentage = 0;
                        return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.permissionsProvider.hasCameraPermission()];
                    case 2:
                        permissionStatus = _a.sent();
                        if (permissionStatus !== __WEBPACK_IMPORTED_MODULE_5__permissions_permissions__["a" /* PermissionStatus */].GRANTED) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, this.initCamera()];
                }
            });
        });
    };
    CameraNativeService.prototype.initCamera = function () {
        var _this = this;
        console.log('initCamera');
        return new Promise(function (resolve) {
            _this.cameraPreview
                .startCamera(Object.assign({
                x: 0,
                y: 0,
                width: window.screen.width,
                height: window.screen.height,
                toBack: true,
                tapPhoto: false,
                previewDrag: false,
                disableExifHeaderStripping: true
            }, _this.cameraOptions))
                .then(function () {
                _this.cameraIsRunning = true;
                if (_this.platform.is('ios')) {
                    return _this.cameraPreview.setFlashMode('off');
                }
                return Promise.resolve();
            })
                .then(function () {
                if (_this.disabled) {
                    console.log('not starting, disabled');
                    if (_this.cameraIsRunning) {
                        _this.stop().catch(Object(__WEBPACK_IMPORTED_MODULE_6__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_6__error_handler_error_handler__["a" /* ErrorCategory */].CORDOVA_PLUGIN));
                    }
                    return;
                }
                console.log('camera started.');
                // inject css now
                _this.injectCSS();
                // start camera interval
                _this.cameraInterval = window.setInterval(function () {
                    _this.cameraIsTakingPhoto = true;
                    _this.cameraPreview
                        .takePicture({
                        width: _this.VIDEO_SIZE,
                        height: _this.VIDEO_SIZE,
                        quality: _this.VIDEO_QUALITY
                    })
                        .then(function (result) {
                        _this.cameraIsTakingPhoto = false;
                        if (_this.handler) {
                            _this.handler(result);
                        }
                    })
                        .catch(function (err) {
                        if (err === 'Camera not started') {
                            if (_this.cameraInterval) {
                                clearInterval(_this.cameraInterval);
                            }
                        }
                    });
                }, _this.VIDEO_FREQUENCY);
                resolve();
            }, function (error) {
                console.warn('startCamera error: ', error);
                if (error === 'Camera already started!') {
                    _this.stop()
                        .then(function () {
                        return _this.initCamera();
                    })
                        .catch(Object(__WEBPACK_IMPORTED_MODULE_6__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_6__error_handler_error_handler__["a" /* ErrorCategory */].CORDOVA_PLUGIN));
                }
            });
        });
    };
    CameraNativeService.prototype.stop = function () {
        var _this = this;
        if (!this.cameraIsRunning) {
            console.log('CAMERA ALREADY STOPPED, ABORTING');
            this.uninjectCSS();
            return Promise.reject(null);
        }
        // We need to delay the stopCamera call because it crashes on iOS
        // if it is called while taking a photo
        if (this.cameraIsTakingPhoto) {
            this.uninjectCSS();
            return new Promise(function (resolve) {
                setTimeout(function () {
                    console.log('CAMERA IS TAKING PHOTO, DELAYING');
                    resolve(_this.stop());
                }, 200);
            });
        }
        this.uninjectCSS();
        if (this.cameraInterval) {
            clearInterval(this.cameraInterval);
        }
        return new Promise(function (_resolve, reject) {
            _this.cameraPreview.stopCamera().then(function () {
                _this.cameraIsRunning = false;
                console.log('camera stopped.');
            }, function (error) {
                console.log('camera could not be stopped.');
                reject(error);
            });
        });
    };
    CameraNativeService.prototype.getEntropyUpdateObservable = function () {
        return this.entropyObservable;
    };
    CameraNativeService.prototype.arrayBufferFromBase64 = function (base64) {
        var raw = window.atob(base64);
        var buffer = new ArrayBuffer(raw.length * 2);
        var bufView = new Uint8Array(buffer);
        for (var i = 0; i < raw.length; i++) {
            bufView[i] = raw.charCodeAt(i);
        }
        return buffer;
    };
    CameraNativeService.prototype.injectCSS = function () {
        // inject css to html, body, .ion-app, ion-content
        this.renderer.addClass(document.body, 'transparent-bg');
    };
    CameraNativeService.prototype.uninjectCSS = function () {
        // removes injected css
        this.renderer.removeClass(document.body, 'transparent-bg');
    };
    CameraNativeService.prototype.getCollectedEntropyPercentage = function () {
        return this.collectedEntropyPercentage / 10;
    };
    CameraNativeService.prototype.setVideoElement = function (element) {
        console.log('only used in browser', element);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('cameraCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CameraNativeService.prototype, "cameraCanvas", void 0);
    CameraNativeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera_preview__["a" /* CameraPreview */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* RendererFactory2 */],
            __WEBPACK_IMPORTED_MODULE_5__permissions_permissions__["c" /* PermissionsProvider */]])
    ], CameraNativeService);
    return CameraNativeService;
}());

//# sourceMappingURL=camera.native.service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioNativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_workers_entropyCalculatorWorker__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__permissions_permissions__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var blobURL = window.URL.createObjectURL(new Blob([__WEBPACK_IMPORTED_MODULE_3__assets_workers_entropyCalculatorWorker__["a" /* default */]]));
var entropyCalculatorWorker = new Worker(blobURL);
var AudioNativeService = (function () {
    function AudioNativeService(platform, permissionsProvider) {
        var _this = this;
        this.platform = platform;
        this.permissionsProvider = permissionsProvider;
        this.ENTROPY_SIZE = 4096;
        this.collectedEntropyPercentage = 0;
        this.entropyObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            entropyCalculatorWorker.onmessage = function (event) {
                _this.collectedEntropyPercentage += event.data.entropyMeasure;
                observer.next({
                    entropyHex: event.data.entropyHex
                });
            };
            _this.handler = function (audioStream) {
                var buffer1 = _this.arrayBufferFromIntArray(audioStream.data);
                entropyCalculatorWorker.postMessage({
                    entropyBuffer: buffer1
                }, [buffer1]);
            };
        });
    }
    AudioNativeService.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var permissionStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.collectedEntropyPercentage = 0;
                        return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.permissionsProvider.hasMicrophonePermission()];
                    case 2:
                        permissionStatus = _a.sent();
                        if (permissionStatus !== __WEBPACK_IMPORTED_MODULE_4__permissions_permissions__["a" /* PermissionStatus */].GRANTED) {
                            return [2 /*return*/];
                        }
                        window.audioinput.start({
                            bufferSize: this.ENTROPY_SIZE
                        });
                        setTimeout(function () {
                            window.addEventListener('audioinput', _this.handler);
                        }, 1000);
                        console.log('audioinput created.');
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioNativeService.prototype.stop = function () {
        var _this = this;
        return new Promise(function (resolve) {
            console.log('removed audioinput listener');
            window.audioinput.stop();
            window.removeEventListener('audioinput', _this.handler);
            resolve();
        });
    };
    AudioNativeService.prototype.getEntropyUpdateObservable = function () {
        return this.entropyObservable;
    };
    AudioNativeService.prototype.arrayBufferFromIntArray = function (array) {
        var buffer = new ArrayBuffer(array.length * 2);
        var bufView = new Uint8Array(buffer);
        for (var i = 0; i < array.length; i++) {
            bufView[i] = Math.abs(array[i] * 10000);
        }
        return buffer;
    };
    AudioNativeService.prototype.getCollectedEntropyPercentage = function () {
        return this.collectedEntropyPercentage / 200;
    };
    AudioNativeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__permissions_permissions__["c" /* PermissionsProvider */]])
    ], AudioNativeService);
    return AudioNativeService;
}());

//# sourceMappingURL=audio.native.service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GyroscopeNativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device_motion__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_workers_entropyCalculatorWorker__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var blobURL = window.URL.createObjectURL(new Blob([__WEBPACK_IMPORTED_MODULE_4__assets_workers_entropyCalculatorWorker__["a" /* default */]]));
var entropyCalculatorWorker = new Worker(blobURL);
var GyroscopeNativeService = (function () {
    function GyroscopeNativeService(platform, deviceMotion) {
        this.platform = platform;
        this.deviceMotion = deviceMotion;
        this.collectedEntropyPercentage = 0;
    }
    GyroscopeNativeService.prototype.start = function () {
        var _this = this;
        this.collectedEntropyPercentage = 0;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        this.entropyObservable = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observer) {
                            entropyCalculatorWorker.onmessage = function (event) {
                                _this.collectedEntropyPercentage += event.data.entropyMeasure;
                                observer.next({
                                    entropyHex: event.data.entropyHex
                                });
                            };
                            _this.gyroSubscription = _this.deviceMotion
                                .watchAcceleration({ frequency: 500 })
                                .subscribe(function (acceleration) {
                                var entropyBuffer = _this.arrayBufferFromIntArray([acceleration.x, acceleration.y, acceleration.z]);
                                entropyCalculatorWorker.postMessage({ entropyBuffer: entropyBuffer }, [entropyBuffer]);
                            });
                        });
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    GyroscopeNativeService.prototype.stop = function () {
        this.gyroSubscription.unsubscribe();
        return Promise.resolve();
    };
    GyroscopeNativeService.prototype.getEntropyUpdateObservable = function () {
        return this.entropyObservable;
    };
    GyroscopeNativeService.prototype.arrayBufferFromIntArray = function (array) {
        var buffer = new ArrayBuffer(array.length * 2);
        var bufView = new Uint8Array(buffer);
        for (var i = 0; i < array.length; i++) {
            bufView[i] = Math.abs(array[i] * 10000);
        }
        return buffer;
    };
    GyroscopeNativeService.prototype.getCollectedEntropyPercentage = function () {
        return this.collectedEntropyPercentage / 30;
    };
    GyroscopeNativeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device_motion__["a" /* DeviceMotion */]])
    ], GyroscopeNativeService);
    return GyroscopeNativeService;
}());

//# sourceMappingURL=gyroscope.native.service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScannerProvider = (function () {
    function ScannerProvider(platform) {
        this.platform = platform;
        this.isShowing = false;
    }
    ScannerProvider.prototype.askForPermission = function () {
        if (this.platform.is('cordova')) {
            QRScanner.openSettings();
        }
    };
    ScannerProvider.prototype.hasPermission = function () {
        if (this.platform.is('cordova')) {
            return new Promise(function (resolve, reject) {
                var onDone = function (err, status) {
                    if (err) {
                        // here we can handle errors and clean up any loose ends.
                        console.error('Scanner permission ', err);
                        reject([false, false]);
                    }
                    if (status.authorized) {
                        console.log('Scanner permission granted');
                        resolve([true, true]);
                    }
                    else if (status.denied) {
                        console.warn('Scanner permission denied');
                        reject([false, true]);
                        // The video preview will remain black, and scanning is disabled. We can
                        // try to ask the user to change their mind, but we'll have to send them
                        // to their device settings with `QRScanner.openSettings()`.
                    }
                    else {
                        console.warn('Scanner permission denied');
                        reject([false, false]);
                        // we didn't get permission, but we didn't get permanently denied. (On
                        // Android, a denial isn't permanent unless the user checks the "Don't
                        // ask again" box.) We can ask again at the next relevant opportunity.
                    }
                };
                QRScanner.prepare(onDone);
            });
        }
    };
    ScannerProvider.prototype.scan = function (successCallback, errorCallback) {
        if (successCallback === void 0) { successCallback = null; }
        if (errorCallback === void 0) { errorCallback = null; }
        var scanCallback = function (err, text) {
            if (err) {
                console.error('Scanner scan error', err);
                if (errorCallback) {
                    errorCallback(err);
                }
            }
            console.log('Scanner scan success', text);
            successCallback(text);
        };
        QRScanner.scan(scanCallback);
    };
    ScannerProvider.prototype.show = function () {
        if (this.platform.is('cordova')) {
            if (this.isShowing) {
                return;
            }
            this.isShowing = true;
            QRScanner.show();
        }
    };
    ScannerProvider.prototype.stopScan = function () {
        if (this.platform.is('cordova')) {
            QRScanner.cancelScan(null);
        }
    };
    ScannerProvider.prototype.destroy = function () {
        if (this.platform.is('cordova')) {
            this.isShowing = false;
            QRScanner.destroy();
        }
    };
    ScannerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], ScannerProvider);
    return ScannerProvider;
}());

//# sourceMappingURL=scanner.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemeRoutingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_transaction_detail_transaction_detail__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_handler_error_handler__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SchemeRoutingProvider = (function () {
    function SchemeRoutingProvider(app, secretsProvider, alertCtrl, translateService) {
        this.app = app;
        this.secretsProvider = secretsProvider;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        /* TS 2.7 feature
        private syncSchemeHandlers: {
          [key in EncodedType]: (deserializedSync: DeserializedSyncProtocol, scanAgainCallback: Function) => Promise<boolean>
        }
        */
        this.syncSchemeHandlers = [];
        this.syncSchemeHandlers[__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["EncodedType"].WALLET_SYNC] = this.syncTypeNotSupportedAlert.bind(this);
        this.syncSchemeHandlers[__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["EncodedType"].UNSIGNED_TRANSACTION] = this.handleUnsignedTransaction.bind(this);
        this.syncSchemeHandlers[__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["EncodedType"].SIGNED_TRANSACTION] = this.syncTypeNotSupportedAlert.bind(this);
        /* TS 2.7 feature
        this.syncSchemeHandlers = {
          [EncodedType.WALLET_SYNC]: this.syncTypeNotSupportedAlert.bind(this),
          [EncodedType.UNSIGNED_TRANSACTION]: this.handleUnsignedTransaction.bind(this),
          [EncodedType.SIGNED_TRANSACTION]: this.syncTypeNotSupportedAlert.bind(this)
        }
        */
    }
    SchemeRoutingProvider.prototype.handleNewSyncRequest = function (navCtrl, rawString, scanAgainCallback) {
        if (scanAgainCallback === void 0) { scanAgainCallback = function () {
            /* */
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var syncProtocol, data, url, deserializedSync, e_1, cancelButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // wait for secrets to be loaded for sure
                    return [4 /*yield*/, this.secretsProvider.isReady()];
                    case 1:
                        // wait for secrets to be loaded for sure
                        _a.sent();
                        this.navController = navCtrl;
                        syncProtocol = new __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["SyncProtocolUtils"]();
                        try {
                            url = new URL(rawString);
                            data = url.searchParams.get('d');
                        }
                        catch (e) {
                            data = rawString; // Fallback to support raw data QRs
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, syncProtocol.deserialize(data)];
                    case 3:
                        deserializedSync = _a.sent();
                        if (deserializedSync.type in __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["EncodedType"]) {
                            // Only handle types that we know
                            return [2 /*return*/, this.syncSchemeHandlers[deserializedSync.type](deserializedSync, scanAgainCallback)];
                        }
                        else {
                            return [2 /*return*/, this.syncTypeNotSupportedAlert(deserializedSync, scanAgainCallback)];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.warn('Deserialization of sync failed', e_1);
                        cancelButton = {
                            text: 'tab-wallets.invalid-sync-operation_alert.okay_label',
                            role: 'cancel',
                            handler: function () {
                                scanAgainCallback();
                            }
                        };
                        this.showTranslatedAlert('tab-wallets.invalid-sync-operation_alert.title', 'tab-wallets.invalid-sync-operation_alert.text', [
                            cancelButton
                        ]);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SchemeRoutingProvider.prototype.handleUnsignedTransaction = function (deserializedSyncProtocol, scanAgainCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var unsignedTransaction, correctWallet, baseWallet, cancelButton;
            return __generator(this, function (_a) {
                unsignedTransaction = deserializedSyncProtocol.payload;
                correctWallet = this.secretsProvider.findWalletByPublicKeyAndProtocolIdentifier(unsignedTransaction.publicKey, deserializedSyncProtocol.protocol);
                // If we can't find a wallet for a protocol, we will try to find the "base" wallet and then create a new
                // wallet with the right protocol. This way we can sign all ERC20 transactions, but show the right amount
                // and fee for all tokens we support.
                if (!correctWallet) {
                    baseWallet = this.secretsProvider.findBaseWalletByPublicKeyAndProtocolIdentifier(unsignedTransaction.publicKey, deserializedSyncProtocol.protocol);
                    // If the protocol is not supported, use the base protocol for signing
                    try {
                        correctWallet = new __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["AirGapWallet"](deserializedSyncProtocol.protocol, baseWallet.publicKey, baseWallet.isExtendedPublicKey, baseWallet.derivationPath);
                        correctWallet.addresses = baseWallet.addresses;
                    }
                    catch (e) {
                        if (e.message === 'PROTOCOL_NOT_SUPPORTED') {
                            correctWallet = baseWallet;
                        }
                    }
                }
                if (correctWallet) {
                    if (this.navController) {
                        this.navController
                            .push(__WEBPACK_IMPORTED_MODULE_4__pages_transaction_detail_transaction_detail__["a" /* TransactionDetailPage */], {
                            transaction: unsignedTransaction,
                            wallet: correctWallet,
                            deserializedSync: deserializedSyncProtocol
                        })
                            .catch(Object(__WEBPACK_IMPORTED_MODULE_5__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
                    }
                }
                else {
                    cancelButton = {
                        text: 'tab-wallets.no-secret_alert.okay_label',
                        role: 'cancel',
                        handler: function () {
                            scanAgainCallback();
                        }
                    };
                    this.showTranslatedAlert('tab-wallets.no-secret_alert.title', 'tab-wallets.no-secret_alert.text', [cancelButton]);
                }
                return [2 /*return*/];
            });
        });
    };
    SchemeRoutingProvider.prototype.syncTypeNotSupportedAlert = function (_deserializedSyncProtocol, scanAgainCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var cancelButton;
            return __generator(this, function (_a) {
                cancelButton = {
                    text: 'tab-wallets.sync-operation-not-supported_alert.okay_label',
                    role: 'cancel',
                    handler: function () {
                        scanAgainCallback();
                    }
                };
                this.showTranslatedAlert('tab-wallets.sync-operation-not-supported_alert.title', 'tab-wallets.sync-operation-not-supported_alert.text', [cancelButton]);
                return [2 /*return*/];
            });
        });
    };
    SchemeRoutingProvider.prototype.showTranslatedAlert = function (title, message, buttons) {
        var _this = this;
        var translationKeys = [title, message].concat(buttons.map(function (button) { return button.text; }));
        this.translateService.get(translationKeys).subscribe(function (values) {
            var alert = _this.alertCtrl.create({
                title: values[title],
                message: values[message],
                enableBackdropDismiss: true,
                buttons: buttons.map(function (button) { return (button.text = values[button.text]); })
            });
            alert.present().catch(Object(__WEBPACK_IMPORTED_MODULE_5__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
        });
    };
    SchemeRoutingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__secrets_secrets_provider__["a" /* SecretsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateService */]])
    ], SchemeRoutingProvider);
    return SchemeRoutingProvider;
}());

//# sourceMappingURL=scheme-routing.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionSelectionSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_error_handler_error_handler__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_interaction_interaction__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var InteractionSelectionSettingsPage = (function () {
    function InteractionSelectionSettingsPage(navCtrl, navParams, secretProvider, platform, interactionProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.secretProvider = secretProvider;
        this.platform = platform;
        this.interactionProvider = interactionProvider;
        this.interactionSetting = __WEBPACK_IMPORTED_MODULE_4__providers_interaction_interaction__["d" /* InteractionSetting */];
        this.isEdit = false;
    }
    InteractionSelectionSettingsPage.prototype.ionViewWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.navParams.get('isEdit')];
                    case 1:
                        _a.isEdit = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.navParams.get('interactionOptions')];
                    case 2:
                        _b.interactionOptions = _c.sent();
                        if (this.isEdit) {
                            this.secret = this.navParams.get('secret');
                            this.selectedSetting = this.secret.interactionSetting;
                        }
                        else {
                            this.secret = this.secretProvider.getActiveSecret();
                            this.selectedSetting =
                                this.interactionOptions.communicationType === __WEBPACK_IMPORTED_MODULE_4__providers_interaction_interaction__["a" /* InteractionCommunicationType */].QR
                                    ? __WEBPACK_IMPORTED_MODULE_4__providers_interaction_interaction__["d" /* InteractionSetting */].OFFLINE_DEVICE
                                    : this.interactionOptions.communicationType === __WEBPACK_IMPORTED_MODULE_4__providers_interaction_interaction__["a" /* InteractionCommunicationType */].DEEPLINK
                                        ? __WEBPACK_IMPORTED_MODULE_4__providers_interaction_interaction__["d" /* InteractionSetting */].SAME_DEVICE
                                        : undefined;
                            this.secret.interactionSetting = this.selectedSetting || __WEBPACK_IMPORTED_MODULE_4__providers_interaction_interaction__["d" /* InteractionSetting */].UNDETERMINED; // Default to store is undetermined
                            this.selectedSetting = this.selectedSetting || __WEBPACK_IMPORTED_MODULE_4__providers_interaction_interaction__["d" /* InteractionSetting */].ALWAYS_ASK; // Default to display is always ask
                            this.secretProvider.addOrUpdateSecret(this.secret);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InteractionSelectionSettingsPage.prototype.onSelectedSettingChange = function (selectedSetting) {
        this.secret.interactionSetting = selectedSetting;
        this.secretProvider.addOrUpdateSecret(this.secret);
    };
    InteractionSelectionSettingsPage.prototype.goToNextPage = function () {
        this.interactionProvider.startInteraction(this.navCtrl, this.interactionOptions, this.secret);
    };
    InteractionSelectionSettingsPage.prototype.popToRoot = function () {
        this.navCtrl.popToRoot().catch(Object(__WEBPACK_IMPORTED_MODULE_2__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_2__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    InteractionSelectionSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-interaction-selection-settings',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/interaction-selection-settings/interaction-selection-settings.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'interaction-selection-settings.title\' | translate }}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="colored-background" padding>\n  <h3\n    *ngIf="selectedSetting === interactionSetting.SAME_DEVICE"\n    [innerHTML]="\'interaction-selection-settings.same-device_heading\' | translate"\n  ></h3>\n  <h3\n    *ngIf="selectedSetting === interactionSetting.OFFLINE_DEVICE"\n    [innerHTML]="\'interaction-selection-settings.offline-device_heading\' | translate"\n  ></h3>\n\n  <p>{{ \'interaction-selection-settings.text\' | translate }}</p>\n\n  <ion-list radio-group [ngModel]="interactionSetting" (ngModelChange)="onSelectedSettingChange($event)" no-lines padding-vertical>\n    <ion-item no-padding>\n      <ion-label color="white">{{ \'interaction-selection-settings.selector.always\' | translate }}</ion-label>\n      <ion-radio\n        [checked]="selectedSetting === interactionSetting.ALWAYS_ASK"\n        [value]="interactionSetting.ALWAYS_ASK"\n        no-margin\n        item-right\n      ></ion-radio>\n    </ion-item>\n    <ion-item no-padding>\n      <ion-label color="white">{{ \'interaction-selection-settings.selector.same-device\' | translate }}</ion-label>\n      <ion-radio\n        [checked]="selectedSetting === interactionSetting.SAME_DEVICE"\n        [value]="interactionSetting.SAME_DEVICE"\n        no-margin\n        item-right\n      ></ion-radio>\n    </ion-item>\n    <ion-item no-padding>\n      <ion-label color="white">{{ \'interaction-selection-settings.selector.offline-device\' | translate }}</ion-label>\n      <ion-radio\n        [checked]="selectedSetting === interactionSetting.OFFLINE_DEVICE"\n        [value]="interactionSetting.OFFLINE_DEVICE"\n        no-margin\n        item-right\n      ></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <p *ngIf="!isEdit">{{ \'interaction-selection-settings.description\' | translate }}</p>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button default ion-button id="btn-save-secret" color="primary" round (click)="goToNextPage()" item-right *ngIf="!isEdit">\n        {{ \'interaction-selection-settings.continue_label\' | translate }}\n      </button>\n    </ion-row>\n    <ion-row justify-content-end>\n      <button default ion-button id="-save-secret" color="primary" round (click)="popToRoot()" item-right *ngIf="isEdit">\n        {{ \'interaction-selection-settings.continue_label\' | translate }}\n      </button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/interaction-selection-settings/interaction-selection-settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_secrets_secrets_provider__["a" /* SecretsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_interaction_interaction__["c" /* InteractionProvider */]])
    ], InteractionSelectionSettingsPage);
    return InteractionSelectionSettingsPage;
}());

//# sourceMappingURL=interaction-selection-settings.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BIP39Signer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_sha3__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_sha3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_sha3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bip39__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bip39___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bip39__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_secrets_js_grempe__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_secrets_js_grempe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_secrets_js_grempe__);



var BIP39Signer = (function () {
    function BIP39Signer() {
        this.checkSumLength = 10;
    }
    BIP39Signer.prototype.getOffsetMapping = function (share) {
        var shareWordCount = share.split(' ').length;
        if (shareWordCount === 48) {
            return { offset: 99, seedOffset: 64 };
        }
        else if (shareWordCount === 36) {
            return { offset: 67, seedOffset: 42 };
        }
        else if (shareWordCount === 24) {
            return { offset: 67, seedOffset: 32 };
        }
        throw new Error('Currently only recovery of secrets with 24, 18 or 12 words are supported');
    };
    BIP39Signer.prototype.getRandomIntInclusive = function (min, max) {
        var randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        var randomNumber = randomBuffer[0] / (0xffffffff + 1);
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(randomNumber * (max - min + 1)) + min;
    };
    BIP39Signer.prototype.entropyToMnemonic = function (entropy) {
        return __WEBPACK_IMPORTED_MODULE_1_bip39___default.a.entropyToMnemonic(entropy);
    };
    BIP39Signer.prototype.mnemonicToEntropy = function (mnemonic) {
        var usedList = BIP39Signer.determineWordList(mnemonic);
        if (!usedList) {
            throw Error('non-compatible mnemonic');
        }
        return __WEBPACK_IMPORTED_MODULE_1_bip39___default.a.mnemonicToEntropy(mnemonic, usedList);
    };
    BIP39Signer.prepareMnemonic = function (mnemonic) {
        return mnemonic.trim().toLowerCase();
    };
    BIP39Signer.validateMnemonic = function (mnemonic) {
        var preparedMnemonic = BIP39Signer.prepareMnemonic(mnemonic);
        var wordList = BIP39Signer.determineWordList(preparedMnemonic);
        return __WEBPACK_IMPORTED_MODULE_1_bip39___default.a.validateMnemonic(preparedMnemonic, wordList);
    };
    BIP39Signer.determineWordList = function (mnemonic) {
        for (var _i = 0, _a = BIP39Signer.wordLists(); _i < _a.length; _i++) {
            var list = _a[_i];
            if (__WEBPACK_IMPORTED_MODULE_1_bip39___default.a.validateMnemonic(BIP39Signer.prepareMnemonic(mnemonic), list)) {
                return list;
            }
        }
    };
    BIP39Signer.wordLists = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_1_bip39___default.a.wordlists.english
            /*
            bip39.wordlists.chinese_simplified,
            bip39.wordlists.chinese_traditional,
            bip39.wordlists.french,
            bip39.wordlists.italian,
            bip39.wordlists.japanese,
            bip39.wordlists.korean,
            bip39.wordlists.spanish
            */
        ];
    };
    BIP39Signer.prototype.generateSocialRecover = function (secret, numberOfShares, threshold) {
        var _this = this;
        if (threshold > numberOfShares) {
            throw new Error('The threshold needs to be smaller or equal to the number or shares');
        }
        else if (numberOfShares < 2) {
            throw new Error('At least two shares are needed');
        }
        var secretDigester = __WEBPACK_IMPORTED_MODULE_0_js_sha3__["sha3_256"].create();
        // TODO check if mnemoinc or secret
        var seed = __WEBPACK_IMPORTED_MODULE_1_bip39___default.a.mnemonicToEntropy(secret);
        secretDigester.update(seed);
        var shares = __WEBPACK_IMPORTED_MODULE_2_secrets_js_grempe___default.a.share(seed + secretDigester.hex().slice(0, this.checkSumLength), numberOfShares, threshold);
        var calculatedShares = [];
        for (var i = 0; i < shares.length; i++) {
            var paddedShare = shares[i].concat(Array(29)
                .fill(0)
                .map(function () { return _this.getRandomIntInclusive(0, 9); })
                .join(''));
            calculatedShares[i] = __WEBPACK_IMPORTED_MODULE_1_bip39___default.a.entropyToMnemonic(paddedShare.slice(0, 64)) + " " + __WEBPACK_IMPORTED_MODULE_1_bip39___default.a.entropyToMnemonic(paddedShare.slice(64, 128));
        }
        return calculatedShares;
    };
    BIP39Signer.prototype.recoverKey = function (shares) {
        var offset = this.getOffsetMapping(shares[0]);
        var translatedShares = [];
        for (var i = 0; i < shares.length; i++) {
            var words = shares[i].split(' ');
            var firstHalf = words.slice(0, 24);
            var secondHalf = words.slice(24, words.length);
            translatedShares[i] = ("" + __WEBPACK_IMPORTED_MODULE_1_bip39___default.a.mnemonicToEntropy(firstHalf.join(' ')) + __WEBPACK_IMPORTED_MODULE_1_bip39___default.a.mnemonicToEntropy(secondHalf.join(' '))).substr(0, offset.offset);
        }
        var secretDigester = __WEBPACK_IMPORTED_MODULE_0_js_sha3__["sha3_256"].create();
        var combine = __WEBPACK_IMPORTED_MODULE_2_secrets_js_grempe___default.a.combine(translatedShares);
        var seed = combine.slice(0, -this.checkSumLength);
        secretDigester.update(seed);
        var checksum = secretDigester.hex().slice(0, this.checkSumLength);
        var checksum2 = combine.substr(-this.checkSumLength);
        if (checksum !== checksum2) {
            throw new Error('Checksum error, either the passed shares were generated for different secrets or the amount of shares is below the threshold');
        }
        return __WEBPACK_IMPORTED_MODULE_1_bip39___default.a.entropyToMnemonic(seed);
    };
    return BIP39Signer;
}());

//# sourceMappingURL=BIP39Signer.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_secret__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_secure_storage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_airgap_coin_lib__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_airgap_coin_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bip39__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bip39___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bip39__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var SecretsProvider = (function () {
    function SecretsProvider(secureStorageService, storage, ngZone, loadingCtrl, alertCtrl) {
        this.secureStorageService = secureStorageService;
        this.storage = storage;
        this.ngZone = ngZone;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.secretsList = [];
        this.currentSecretsList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](this.secretsList);
        this.ready = this.init();
    }
    SecretsProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var secrets, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.read()];
                    case 1:
                        secrets = _b.sent();
                        (_a = this.secretsList).push.apply(_a, secrets.map(function (obj) { return __WEBPACK_IMPORTED_MODULE_3__models_secret__["a" /* Secret */].init(obj); }));
                        this.activeSecret = this.secretsList[0];
                        this.currentSecretsList.next(this.secretsList); // we need to force this update, as [] will not be broadcasted again
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretsProvider.prototype.isReady = function () {
        return this.ready;
    };
    SecretsProvider.prototype.read = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage
                .get('airgap-secret-list')
                .then(function (rawSecretsPayload) {
                // necessary due to double serialization bug we had
                var secrets;
                if (typeof rawSecretsPayload === 'string') {
                    secrets = JSON.parse(rawSecretsPayload);
                }
                else {
                    secrets = rawSecretsPayload;
                }
                if (!secrets) {
                    secrets = [];
                }
                for (var k = 0; k < secrets.length; k++) {
                    var secret = secrets[k];
                    if (secret.wallets) {
                        for (var i = 0; i < secret.wallets.length; i++) {
                            var wallet = secret.wallets[i];
                            var airGapWallet = new __WEBPACK_IMPORTED_MODULE_5_airgap_coin_lib__["AirGapWallet"](wallet.protocolIdentifier, wallet.publicKey, wallet.isExtendedPublicKey, wallet.derivationPath);
                            airGapWallet.addresses = wallet.addresses;
                            secret.wallets[i] = airGapWallet;
                        }
                    }
                    else {
                        secrets[k].wallets = [];
                    }
                }
                resolve(secrets);
            })
                .catch(reject);
        });
    };
    SecretsProvider.prototype.addOrUpdateSecret = function (secret) {
        var _this = this;
        if (!secret.wallets) {
            secret.wallets = [];
        }
        return new Promise(function (resolve, reject) {
            if (!secret.secretHex) {
                _this.secretsList[_this.secretsList.findIndex(function (obj) { return obj.id === secret.id; })] = secret;
                _this.persist()
                    .then(resolve)
                    .catch(Object(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
            }
            else {
                _this.secureStorageService
                    .get(secret.id, secret.isParanoia)
                    .then(function (secureStorage) {
                    return secureStorage.setItem(secret.id, secret.secretHex);
                })
                    .then(function (_value) {
                    secret.flushSecret();
                    if (_this.secretsList.findIndex(function (obj) { return obj.id === secret.id; }) === -1) {
                        _this.ngZone.run(function () {
                            _this.secretsList.push(secret);
                            _this.activeSecret = secret;
                            _this.persist()
                                .then(resolve)
                                .catch(Object(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
                        });
                    }
                    else {
                        _this.activeSecret = secret;
                        _this.persist()
                            .then(resolve)
                            .catch(Object(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
                    }
                }, function (error) {
                    console.warn(error);
                    reject(error);
                });
            }
        });
    };
    SecretsProvider.prototype.remove = function (secret) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.secureStorageService.get(secret.id, secret.isParanoia).then(function (secureStorage) {
                secureStorage
                    .removeItem(secret.id)
                    .then(function () {
                    _this.secretsList.splice(_this.secretsList.indexOf(secret), 1);
                    _this.persist()
                        .then(resolve)
                        .catch(Object(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
                })
                    .catch(Object(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
            });
        });
    };
    SecretsProvider.prototype.retrieveEntropyForSecret = function (secret) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.secureStorageService.get(secret.id, secret.isParanoia).then(function (secureStorage) {
                resolve(secureStorage.getItem(secret.id));
            });
        });
    };
    SecretsProvider.prototype.findByPublicKey = function (pubKey) {
        for (var _i = 0, _a = this.secretsList; _i < _a.length; _i++) {
            var secret = _a[_i];
            var foundWallet = secret.wallets.find(function (wallet) { return wallet.publicKey === pubKey; });
            if (foundWallet !== undefined) {
                return secret;
            }
        }
    };
    SecretsProvider.prototype.getWallets = function () {
        var walletList = [];
        for (var _i = 0, _a = this.secretsList; _i < _a.length; _i++) {
            var secret = _a[_i];
            walletList.push.apply(walletList, secret.wallets);
        }
        return walletList;
    };
    SecretsProvider.prototype.removeWallet = function (wallet) {
        var secret = this.findByPublicKey(wallet.publicKey);
        if (!secret) {
            return undefined;
        }
        secret.wallets.splice(secret.wallets.findIndex(function (findWallet) { return findWallet.publicKey === wallet.publicKey && findWallet.protocolIdentifier === wallet.protocolIdentifier; }), 1);
        return this.addOrUpdateSecret(secret);
    };
    SecretsProvider.prototype.findWalletByPublicKeyAndProtocolIdentifier = function (pubKey, protocolIdentifier) {
        var secret = this.findByPublicKey(pubKey);
        if (!secret) {
            return undefined;
        }
        var foundWallet = secret.wallets.find(function (wallet) { return wallet.publicKey === pubKey && wallet.protocolIdentifier === protocolIdentifier; });
        if (foundWallet !== undefined) {
            return foundWallet;
        }
    };
    SecretsProvider.prototype.findBaseWalletByPublicKeyAndProtocolIdentifier = function (pubKey, protocolIdentifier) {
        var secret = this.findByPublicKey(pubKey);
        if (!secret) {
            return undefined;
        }
        return secret.wallets.find(function (wallet) { return wallet.publicKey === pubKey && protocolIdentifier.startsWith(wallet.protocolIdentifier); });
    };
    SecretsProvider.prototype.getActiveSecret = function () {
        return this.activeSecret || this.secretsList[0];
    };
    SecretsProvider.prototype.setActiveSecret = function (secret) {
        this.activeSecret = secret;
    };
    SecretsProvider.prototype.persist = function () {
        this.secretsList.forEach(function (obj) { return obj.flushSecret(); }); // make sure there are no secrets in there
        return this.storage.set('airgap-secret-list', this.secretsList);
    };
    SecretsProvider.prototype.addWallet = function (protocolIdentifier, isHDWallet, customDerivationPath) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var loading = _this.loadingCtrl.create({
                content: 'Deriving your wallet...'
            });
            loading.present().catch(Object(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_LOADER));
            var protocol = Object(__WEBPACK_IMPORTED_MODULE_5_airgap_coin_lib__["getProtocolByIdentifier"])(protocolIdentifier);
            var secret = _this.getActiveSecret();
            _this.retrieveEntropyForSecret(secret)
                .then(function (entropy) {
                var seed = __WEBPACK_IMPORTED_MODULE_7_bip39___default.a.mnemonicToSeedHex(__WEBPACK_IMPORTED_MODULE_7_bip39___default.a.entropyToMnemonic(entropy));
                var wallet = new __WEBPACK_IMPORTED_MODULE_5_airgap_coin_lib__["AirGapWallet"](protocol.identifier, protocol.getPublicKeyFromHexSecret(seed, customDerivationPath), isHDWallet, customDerivationPath);
                wallet
                    .deriveAddresses(1)
                    .then(function (addresses) {
                    wallet.addresses = addresses;
                    if (secret.wallets.find(function (obj) { return obj.publicKey === wallet.publicKey && obj.protocolIdentifier === wallet.protocolIdentifier; }) ===
                        undefined) {
                        secret.wallets.push(wallet);
                        resolve(_this.addOrUpdateSecret(secret));
                    }
                    else {
                        _this.showAlert('Wallet already exists', 'You already have added this specific wallet. Please change its derivation path to add another address (advanced mode).');
                        reject();
                    }
                    loading.dismiss().catch(Object(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_LOADER));
                })
                    .catch(Object(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["a" /* ErrorCategory */].WALLET_PROVIDER));
            })
                .catch(function (err) {
                _this.showAlert('Error', err);
                loading.dismiss().catch(Object(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_LOADER));
                reject();
            });
        });
    };
    SecretsProvider.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Okay!',
                    role: 'cancel'
                }
            ]
        });
        alert.present().catch(Object(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
    };
    SecretsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__storage_secure_storage__["a" /* SecureStorageService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */]])
    ], SecretsProvider);
    return SecretsProvider;
}());

//# sourceMappingURL=secrets.provider.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secret_generate_secret_generate__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__secret_import_secret_import__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__social_recovery_import_social_recovery_import__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__secret_generate_onboarding_secret_generate_onboarding__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var SecretCreatePage = (function () {
    function SecretCreatePage(navController, secretsProvider, storage) {
        this.navController = navController;
        this.secretsProvider = secretsProvider;
        this.storage = storage;
    }
    SecretCreatePage.prototype.isRoot = function () {
        return this.secretsProvider.currentSecretsList.getValue().length === 0;
    };
    SecretCreatePage.prototype.goToGenerate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hasShownDisclaimer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('DISCLAIMER_GENERATE_INITIAL')];
                    case 1:
                        hasShownDisclaimer = _a.sent();
                        if (hasShownDisclaimer) {
                            this.navController.push(__WEBPACK_IMPORTED_MODULE_2__secret_generate_secret_generate__["a" /* SecretGeneratePage */]).catch(Object(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
                        }
                        else {
                            this.navController.push(__WEBPACK_IMPORTED_MODULE_6__secret_generate_onboarding_secret_generate_onboarding__["a" /* SecretGenerateOnboardingPage */]).catch(Object(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretCreatePage.prototype.goToImport = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__secret_import_secret_import__["a" /* SecretImportPage */]).catch(Object(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    SecretCreatePage.prototype.goToSocialRecoveryImport = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_4__social_recovery_import_social_recovery_import__["a" /* SocialRecoveryImportPage */]).catch(Object(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    SecretCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-secret-create',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-create/secret-create.html"*/'<ion-header transparent no-border><ion-navbar [hideBackButton]="isRoot()" transparent></ion-navbar></ion-header>\n\n<ion-content padding class="colored-background">\n  <h1>{{ \'secret-create.heading\' | translate }}</h1>\n\n  <p padding-bottom>{{ \'secret-create.text\' | translate }}</p>\n\n  <button id="btn-generate-secret" ion-button color="primary" (click)="goToGenerate()" round icon-left margin-top>\n    <ion-icon md-name="edit"></ion-icon>\n    {{ \'secret-create.generate.label\' | translate }}\n  </button>\n\n  <p padding-bottom>{{ \'secret-create.generate.text\' | translate }}</p>\n\n  <button id="btn-import-secret" ion-button color="secondary-light" (click)="goToImport()" round icon-left>\n    <ion-icon md-name="file_download"></ion-icon>\n    {{ \'secret-create.import.label\' | translate }}\n  </button>\n\n  <p padding-bottom>{{ \'secret-create.import.text\' | translate }}</p>\n\n  <button id="btn-recover-secret" ion-button color="secondary-light" (click)="goToSocialRecoveryImport()" round icon-left>\n    <ion-icon md-name="people"></ion-icon>\n    {{ \'secret-create.social-recovery.label\' | translate }}\n  </button>\n\n  <p>{{ \'secret-create.social-recovery.text\' | translate }}</p>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-create/secret-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_secrets_secrets_provider__["a" /* SecretsProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], SecretCreatePage);
    return SecretCreatePage;
}());

//# sourceMappingURL=secret-create.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretGeneratePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secret_rules_secret_rules__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_secret__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_camera_camera_native_service__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_audio_audio_native_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_entropy_entropy_service__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_gyroscope_gyroscope_native_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_touch_entropy_touch_entropy__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_permissions_permissions__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var SecretGeneratePage = (function () {
    function SecretGeneratePage(navController, gyroService, entropyService, cameraService, audioService, platform, changeDetectorRef, permissionsProvider, rendererFactory) {
        var _this = this;
        this.navController = navController;
        this.gyroService = gyroService;
        this.entropyService = entropyService;
        this.cameraService = cameraService;
        this.audioService = audioService;
        this.platform = platform;
        this.changeDetectorRef = changeDetectorRef;
        this.permissionsProvider = permissionsProvider;
        this.rendererFactory = rendererFactory;
        this.isBrowser = false;
        this.cameraEnabled = true;
        this.audioEnabled = true;
        this.gyroEnabled = true;
        this.touchEnabled = true;
        this.ENTROPY_STARTUP_TIME = 5;
        this.startupTimeWaited = false;
        this.entropy = {
            isFull: false
        };
        this.isBrowser = !this.platform.is('cordova');
        this.renderer = this.rendererFactory.createRenderer(null, null);
        setTimeout(function () {
            _this.startupTimeWaited = true;
            _this.checkEntropySourceStatus();
        }, this.ENTROPY_STARTUP_TIME * 1000);
    }
    SecretGeneratePage.prototype.checkEntropySourceStatus = function () {
        if (this.startupTimeWaited) {
            this.audioEnabled = this.audioService.getCollectedEntropyPercentage() !== 0;
            this.cameraEnabled = this.cameraService.getCollectedEntropyPercentage() !== 0;
            this.gyroEnabled = this.gyroService.getCollectedEntropyPercentage() !== 0;
            // Touch will not be disabled
        }
    };
    SecretGeneratePage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        if (this.isBrowser) {
                            this.cameraService.setVideoElement(this.videoElement);
                        }
                        this.cameraService.viewWillEnter();
                        this.injectCSS();
                        return [4 /*yield*/, this.permissionsProvider.requestPermissions([__WEBPACK_IMPORTED_MODULE_9__providers_permissions_permissions__["b" /* PermissionTypes */].CAMERA, __WEBPACK_IMPORTED_MODULE_9__providers_permissions_permissions__["b" /* PermissionTypes */].MICROPHONE])];
                    case 2:
                        _a.sent();
                        this.initEntropy();
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretGeneratePage.prototype.injectCSS = function () {
        // inject css to html, body, .ion-app, ion-content
        this.renderer.addClass(document.body, 'hide-tabbar');
    };
    SecretGeneratePage.prototype.uninjectCSS = function () {
        // removes injected css
        this.renderer.removeClass(document.body, 'hide-tabbar');
    };
    SecretGeneratePage.prototype.initEntropy = function () {
        var _this = this;
        this.entropyService.addEntropySource(this.cameraService);
        this.entropyService.addEntropySource(this.audioService);
        this.entropyService.addEntropySource(this.gyroService);
        this.entropyService.addEntropySource(this.touchEntropy);
        this.entropyService
            .startEntropyCollection()
            .then(function () {
            _this.entropyService
                .getEntropyUpdateObservable()
                .auditTime(200)
                .subscribe(function () {
                _this.checkEntropy();
            });
        })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__["a" /* ErrorCategory */].ENTROPY_COLLECTION));
    };
    SecretGeneratePage.prototype.checkEntropy = function () {
        this.changeDetectorRef.detectChanges();
        this.checkEntropySourceStatus();
        var enabledSources = [this.audioEnabled, this.cameraEnabled, this.gyroEnabled, this.touchEnabled];
        var percentageNeeded = enabledSources.reduce(function (a, b) { return a + (b ? 100 : 0); }, 0);
        if (Math.min(100, this.audioService.getCollectedEntropyPercentage()) +
            Math.min(100, this.cameraService.getCollectedEntropyPercentage()) +
            Math.min(100, this.gyroService.getCollectedEntropyPercentage()) +
            Math.min(100, this.touchEntropy.getCollectedEntropyPercentage()) >=
            percentageNeeded) {
            this.entropy.isFull = true;
        }
    };
    SecretGeneratePage.prototype.ionViewDidLeave = function () {
        this.cameraService.viewDidLeave();
        this.uninjectCSS();
        this.entropyService.stopEntropyCollection().catch(Object(__WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__["a" /* ErrorCategory */].ENTROPY_COLLECTION));
    };
    SecretGeneratePage.prototype.goToSecretRulesPage = function () {
        var _this = this;
        this.entropyService
            .getEntropyAsHex()
            .then(function (hashHex) {
            var secret = new __WEBPACK_IMPORTED_MODULE_3__models_secret__["a" /* Secret */](hashHex);
            _this.navController.push(__WEBPACK_IMPORTED_MODULE_2__secret_rules_secret_rules__["a" /* SecretRulesPage */], { secret: secret }).catch(Object(__WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
        })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__["a" /* ErrorCategory */].ENTROPY_COLLECTION));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('videoElement'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SecretGeneratePage.prototype, "videoElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('touchEntropy'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__components_touch_entropy_touch_entropy__["a" /* TouchEntropyComponent */])
    ], SecretGeneratePage.prototype, "touchEntropy", void 0);
    SecretGeneratePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'secret-generate',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-generate/secret-generate.html"*/'<ion-header transparent no-border><ion-navbar transparent></ion-navbar></ion-header>\n\n<ion-content class="colored-background" padding no-bounce>\n  <h1>{{ \'secret-generate.heading\' | translate }}</h1>\n\n  <p>{{ \'secret-generate.text\' | translate }}</p>\n\n  <touch-entropy #touchEntropy></touch-entropy>\n  <div id="entropy-description"></div>\n\n  <br />\n\n  <p>{{ \'secret-generate.description\' | translate }}</p>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center [style.opacity]="cameraEnabled ? \'1\' : \'0.2\'">\n        <ion-icon color="white" md-name="videocam"></ion-icon>\n        <entropy-progress id="entropy-video" [maxValue]="100" [value]="cameraService.getCollectedEntropyPercentage()"></entropy-progress>\n      </ion-col>\n      <ion-col text-center [style.opacity]="audioEnabled ? \'1\' : \'0.2\'">\n        <ion-icon color="white" md-name="mic"></ion-icon>\n        <entropy-progress id="entropy-audio" [maxValue]="100" [value]="audioService.getCollectedEntropyPercentage()"></entropy-progress>\n      </ion-col>\n      <ion-col text-center [style.opacity]="gyroEnabled ? \'1\' : \'0.2\'">\n        <ion-icon color="white" md-name="screen_rotation"></ion-icon>\n        <entropy-progress id="entropy-gyro" [maxValue]="100" [value]="gyroService.getCollectedEntropyPercentage()"></entropy-progress>\n      </ion-col>\n      <ion-col text-center>\n        <ion-icon color="white" md-name="touch_app"></ion-icon>\n        <entropy-progress id="entropy-touch" [maxValue]="100" [value]="touchEntropy.getCollectedEntropyPercentage()"></entropy-progress>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <video *ngIf="isBrowser" #videoElement style="width: 100%"></video>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button\n        id="btn-entropy-continue"\n        (click)="goToSecretRulesPage()"\n        default\n        ion-button\n        color="primary"\n        round\n        [disabled]="!entropy.isFull"\n      >\n        {{ \'secret-generate.continue_label\' | translate }}\n      </button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-generate/secret-generate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_gyroscope_gyroscope_native_service__["a" /* GyroscopeNativeService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_entropy_entropy_service__["a" /* EntropyService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_camera_camera_native_service__["a" /* CameraNativeService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_audio_audio_native_service__["a" /* AudioNativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_9__providers_permissions_permissions__["c" /* PermissionsProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* RendererFactory2 */]])
    ], SecretGeneratePage);
    return SecretGeneratePage;
}());

//# sourceMappingURL=secret-generate.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyKeyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bip39__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bip39___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bip39__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_sha3__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_sha3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_sha3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ADDITIONAL_WORDS = 2;
var VerifyKeyComponent = (function () {
    function VerifyKeyComponent() {
        this.onContinue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isCompleted = false;
        this.splittedSecret = [];
        this.currentWords = [];
        this.promptedWords = [];
        this.selectedWord = null;
    }
    VerifyKeyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.splittedSecret = this.secret
            .toLowerCase()
            .split(' ')
            .map(function (word) {
            return {
                word: word
            };
        });
        this.reset();
        this.onComplete.subscribe(function (result) {
            _this.isCompleted = result;
        });
    };
    VerifyKeyComponent.prototype.ngOnDestroy = function () {
        this.onComplete.unsubscribe();
    };
    VerifyKeyComponent.prototype.continue = function () {
        this.onContinue.emit();
    };
    VerifyKeyComponent.prototype.promptNextWord = function () {
        var _this = this;
        this.promptedWords.length = 0;
        var correctWord = this.splittedSecret[this.emptySpot(this.currentWords)];
        this.promptedWords.push(correctWord);
        var wordList = __WEBPACK_IMPORTED_MODULE_1_bip39__["wordlists"].EN.slice();
        for (var i = 0; i < ADDITIONAL_WORDS; i++) {
            var filteredList = wordList.filter(function (word) { return !_this.splittedSecret.find(function (w) { return w.word === word; }); });
            var hashedWord = Object(__WEBPACK_IMPORTED_MODULE_2_js_sha3__["sha3_256"])(correctWord.word);
            for (var hashRuns = 0; hashRuns <= i; hashRuns++) {
                hashedWord = Object(__WEBPACK_IMPORTED_MODULE_2_js_sha3__["sha3_256"])(hashedWord);
            }
            var word = {
                word: filteredList[this.stringToIntHash(hashedWord, 0, filteredList.length)]
            };
            this.promptedWords.push(word);
        }
        this.promptedWords = this.shuffle(this.promptedWords);
    };
    VerifyKeyComponent.prototype.shuffle = function (a) {
        var counter = a.length;
        while (counter > 0) {
            var index = Math.floor(Math.random() * counter);
            counter--;
            var temp = a[counter];
            a[counter] = a[index];
            a[index] = temp;
        }
        return a;
    };
    VerifyKeyComponent.prototype.stringToIntHash = function (str, lowerbound, upperbound) {
        var result = 0;
        for (var i = 0; i < str.length; i++) {
            result = result + str.charCodeAt(i);
        }
        return (result % (upperbound - lowerbound)) + lowerbound;
    };
    VerifyKeyComponent.prototype.isSelectedWord = function (word) {
        if (this.selectedWord !== null) {
            return this.currentWords[this.selectedWord].word === word.word;
        }
        return false;
    };
    VerifyKeyComponent.prototype.selectEmptySpot = function () {
        this.selectedWord = null;
        this.promptNextWord();
    };
    VerifyKeyComponent.prototype.useWord = function (word) {
        var index = this.emptySpot(this.currentWords);
        // unselect any selected words
        this.selectedWord = null;
        this.currentWords[index] = word;
        // prompt next word
        if (!this.isFull() && index < this.splittedSecret.length - 1) {
            return this.promptNextWord();
        }
        if (this.isFull()) {
            // if all words are placed, check for correctness, else next
            this.promptedWords = [];
            this.onComplete.emit(this.isCorrect());
        }
    };
    VerifyKeyComponent.prototype.emptySpot = function (array) {
        if (this.selectedWord !== null) {
            return this.selectedWord;
        }
        return array.findIndex(function (obj) { return obj === null; });
    };
    VerifyKeyComponent.prototype.selectWord = function (index) {
        this.selectedWord = index;
        this.promptNextWord();
    };
    VerifyKeyComponent.prototype.reset = function () {
        this.selectedWord = null;
        this.currentWords = Array(this.splittedSecret.length).fill(null);
        this.promptNextWord();
    };
    VerifyKeyComponent.prototype.isFull = function () {
        return this.currentWords.filter(function (w) { return w !== null; }).length === this.splittedSecret.length;
    };
    VerifyKeyComponent.prototype.isCorrect = function () {
        return (this.currentWords
            .map(function (w) { return (w ? w.word : '-'); })
            .join(' ')
            .trim() === this.secret.trim());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], VerifyKeyComponent.prototype, "secret", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], VerifyKeyComponent.prototype, "onContinue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], VerifyKeyComponent.prototype, "onComplete", void 0);
    VerifyKeyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'verify-key',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/verify-key/verify-key.html"*/'<ion-row class="secret--container-60" align-items-center>\n  <ion-row justify-content-center class="secret--container__inner">\n    <span *ngFor="let word of splittedSecret; index as i" [class.xtra-small]="splittedSecret.length > 10">\n      <button\n        *ngIf="currentWords[i]"\n        (click)="selectWord(i)"\n        [color]="selectedWord === i ? \'primary\' : \'secondary-light\'"\n        ion-button\n        round\n        small\n      >\n        {{ currentWords[i].word }}\n      </button>\n      <button\n        *ngIf="!currentWords[i]"\n        (click)="selectEmptySpot()"\n        class="word-placeholder"\n        ion-button\n        round\n        [color]="i === emptySpot(currentWords) ? \'primary\' : \'secondary-light\'"\n        outline\n        small\n      >\n        {{ i + 1 }}\n      </button>\n    </span>\n  </ion-row>\n</ion-row>\n<hr />\n<ion-row class="secret--container-40" align-items-center>\n  <ion-col *ngIf="!isCompleted && !isCorrect() && promptedWords.length === 0" id="error" padding-top padding-horizontal>\n    <p [innerHTML]="\'verify-key.incorrect_text\' | translate"></p>\n  </ion-col>\n\n  <ion-col *ngIf="isCompleted && isCorrect() && promptedWords.length === 0" id="message" padding-top padding-horizontal>\n    <p padding-bottom>{{ \'verify-key.success_text\' | translate }}</p>\n    <button (click)="continue()" color="primary" ion-button block round>{{ \'verify-key.continue_label\' | translate }}</button>\n  </ion-col>\n\n  <ion-col *ngIf="promptedWords.length > 0" id="wordSelector" padding-top>\n    <ion-row *ngFor="let word of promptedWords" padding-horizontal>\n      <ion-col>\n        <button\n          (click)="useWord(word)"\n          class="button-secret"\n          [color]="isSelectedWord(word) ? \'primary\' : \'secondary-light\'"\n          ion-button\n          block\n          round\n        >\n          {{ word.word }}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-col>\n</ion-row>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/verify-key/verify-key.html"*/
        })
    ], VerifyKeyComponent);
    return VerifyKeyComponent;
}());

//# sourceMappingURL=verify-key.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialRecoveryShowSharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_recovery_validate_share_social_recovery_validate_share__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocialRecoveryShowSharePage = (function () {
    function SocialRecoveryShowSharePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.shares = navParams.get('shares');
        this.secret = navParams.get('secret');
        this.currentShare = navParams.get('currentShare');
    }
    SocialRecoveryShowSharePage.prototype.back = function () {
        this.navCtrl.pop().catch(Object(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    SocialRecoveryShowSharePage.prototype.next = function () {
        this.navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_2__social_recovery_validate_share_social_recovery_validate_share__["a" /* SocialRecoveryValidateSharePage */], { shares: this.shares, currentShare: this.currentShare, secret: this.secret })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    SocialRecoveryShowSharePage.prototype.finish = function () {
        this.navCtrl.popToRoot().catch(Object(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    SocialRecoveryShowSharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-social-recovery-show-share',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/social-recovery-show-share/social-recovery-show-share.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'social-recovery-show-share.title\' | translate }}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="colored-background" padding>\n  <p class="font--weight__med" padding-bottom>\n    {{ \'social-recovery-show-share.secret-shares.label_p1\' | translate }} {{ currentShare + 1 }}\n    {{ \'social-recovery-show-share.label_p2\' | translate }} {{ shares?.length }}\n  </p>\n  <p padding-bottom>{{ \'social-recovery-show-share.text\' | translate }}</p>\n  <h3 class="secret--typography" *ngIf="shares">{{ shares[currentShare] }}</h3>\n</ion-content>\n\n<ion-footer no-border color="primary">\n  <progress-footer [progress]="currentShare * 2" [maxProgress]="shares.length * 2" [rightAction]="next.bind(this)"></progress-footer>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/social-recovery-show-share/social-recovery-show-share.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SocialRecoveryShowSharePage);
    return SocialRecoveryShowSharePage;
}());

//# sourceMappingURL=social-recovery-show-share.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretValidatePageModule", function() { return SecretValidatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secret_validate__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SecretValidatePageModule = (function () {
    function SecretValidatePageModule() {
    }
    SecretValidatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__secret_validate__["a" /* SecretValidatePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__secret_validate__["a" /* SecretValidatePage */]), __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__secret_validate__["a" /* SecretValidatePage */]]
        })
    ], SecretValidatePageModule);
    return SecretValidatePageModule;
}());

//# sourceMappingURL=secret-validate.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareUrlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ShareUrlProvider = (function () {
    function ShareUrlProvider(http) {
        this.http = http;
        //
    }
    ShareUrlProvider.prototype.generateShareURL = function (wallet) {
        return __awaiter(this, void 0, void 0, function () {
            var syncProtocol, syncWalletRequest, deserializedTxSigningRequest, serializedTx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        syncProtocol = new __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["SyncProtocolUtils"]();
                        syncWalletRequest = {
                            publicKey: wallet.publicKey,
                            isExtendedPublicKey: wallet.isExtendedPublicKey,
                            derivationPath: wallet.derivationPath
                        };
                        deserializedTxSigningRequest = {
                            version: 1,
                            protocol: wallet.protocolIdentifier,
                            type: __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["EncodedType"].WALLET_SYNC,
                            payload: syncWalletRequest
                        };
                        return [4 /*yield*/, syncProtocol.serialize(deserializedTxSigningRequest)];
                    case 1:
                        serializedTx = _a.sent();
                        return [2 /*return*/, "airgap-wallet://?d=" + serializedTx];
                }
            });
        });
    };
    ShareUrlProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ShareUrlProvider);
    return ShareUrlProvider;
}());

//# sourceMappingURL=share-url.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SecureStorageFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__secure_storage_mock__ = __webpack_require__(1413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__secure_storage__ = __webpack_require__(98);


function SecureStorageFactory(platform) {
    if (platform.is('cordova')) {
        return new __WEBPACK_IMPORTED_MODULE_1__secure_storage__["a" /* SecureStorageService */]();
    }
    else {
        return new __WEBPACK_IMPORTED_MODULE_0__secure_storage_mock__["a" /* SecureStorageServiceMock */]();
    }
}
//# sourceMappingURL=secure-storage.factory.js.map

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 357;

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 370;

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/distribution-onboarding/distribution-onboarding.module": [
		415
	],
	"../pages/interaction-selection-settings/interaction-selection-settings.module": [
		434
	],
	"../pages/interaction-selection/interaction-selection.module": [
		539
	],
	"../pages/local-authentication-onboarding/local-authentication-onboarding.module": [
		540
	],
	"../pages/secret-create/secret-create.module": [
		542
	],
	"../pages/secret-edit/secret-edit.module": [
		644
	],
	"../pages/secret-generate-onboarding/secret-generate-onboarding.module": [
		646
	],
	"../pages/secret-import/secret-import.module": [
		647
	],
	"../pages/secret-rules/secret-rules.module": [
		648
	],
	"../pages/secret-show/secret-show.module": [
		649
	],
	"../pages/secret-validate/secret-validate.module": [
		316
	],
	"../pages/social-recovery-import/social-recovery-import.module": [
		650
	],
	"../pages/social-recovery-setup/social-recovery-setup.module": [
		651
	],
	"../pages/social-recovery-show-share/social-recovery-show-share.module": [
		652
	],
	"../pages/social-recovery-validate-share/social-recovery-validate-share.module": [
		653
	],
	"../pages/tab-scan/tab-scan.module": [
		654
	],
	"../pages/tab-settings/tab-settings.module": [
		686
	],
	"../pages/tab-wallets/tab-wallets.module": [
		689
	],
	"../pages/tabs/tabs.module": [
		694
	],
	"../pages/transaction-detail/transaction-detail.module": [
		696
	],
	"../pages/transaction-signed/transaction-signed.module": [
		697
	],
	"../pages/wallet-address/wallet-address.module": [
		698
	],
	"../pages/wallet-select-coins/wallet-select-coins.module": [
		699
	],
	"../pages/wallet-share/wallet-share.module": [
		700
	],
	"../pages/warnings-modal/warnings-modal.module": [
		701
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 414;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionOnboardingPageModule", function() { return DistributionOnboardingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__distribution_onboarding__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DistributionOnboardingPageModule = (function () {
    function DistributionOnboardingPageModule() {
    }
    DistributionOnboardingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__distribution_onboarding__["a" /* DistributionOnboardingPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__distribution_onboarding__["a" /* DistributionOnboardingPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]]
        })
    ], DistributionOnboardingPageModule);
    return DistributionOnboardingPageModule;
}());

//# sourceMappingURL=distribution-onboarding.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionOnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DistributionOnboardingPage = (function () {
    function DistributionOnboardingPage(viewController, storage) {
        this.viewController = viewController;
        this.storage = storage;
    }
    DistributionOnboardingPage.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.slides.slideNext();
                return [2 /*return*/];
            });
        });
    };
    DistributionOnboardingPage.prototype.accept = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set('DISCLAIMER_ELECTRON', true)];
                    case 1:
                        _a.sent();
                        this.viewController.dismiss().catch(Object(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_MODAL));
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], DistributionOnboardingPage.prototype, "slides", void 0);
    DistributionOnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-distribution-onboarding',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/distribution-onboarding/distribution-onboarding.html"*/'<ion-content class="colored-background" padding>\n  <ion-slides>\n    <ion-slide>\n      <ion-row padding-vertical text-left>\n        <h1 [innerHTML]="\'distribution-onboarding.ask-permission.heading\' | translate"></h1>\n\n        <p>{{ \'distribution-onboarding.ask-permission.text\' | translate }}</p>\n      </ion-row>\n\n      <ion-footer no-border>\n        <ion-toolbar padding transparent>\n          <ion-row justify-content-end>\n            <button default ion-button color="primary" (click)="next()" round item-right>{{ \'next\' | translate }}</button>\n          </ion-row>\n        </ion-toolbar>\n      </ion-footer>\n    </ion-slide>\n    <ion-slide>\n      <ion-row padding-vertical text-left>\n        <h1 [innerHTML]="\'distribution-onboarding.no-vm.heading\' | translate"></h1>\n\n        <p>{{ \'distribution-onboarding.no-vm.text\' | translate }}</p>\n      </ion-row>\n\n      <ion-footer no-border>\n        <ion-toolbar padding transparent>\n          <ion-row justify-content-end>\n            <button default ion-button color="primary" (click)="accept()" round item-right>\n              {{ \'distribution-onboarding.understood_label\' | translate }}\n            </button>\n          </ion-row>\n        </ion-toolbar>\n      </ion-footer>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/distribution-onboarding/distribution-onboarding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], DistributionOnboardingPage);
    return DistributionOnboardingPage;
}());

//# sourceMappingURL=distribution-onboarding.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionSelectionSettingsPageModule", function() { return InteractionSelectionSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interaction_selection_settings__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InteractionSelectionSettingsPageModule = (function () {
    function InteractionSelectionSettingsPageModule() {
    }
    InteractionSelectionSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__interaction_selection_settings__["a" /* InteractionSelectionSettingsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__interaction_selection_settings__["a" /* InteractionSelectionSettingsPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__interaction_selection_settings__["a" /* InteractionSelectionSettingsPage */]]
        })
    ], InteractionSelectionSettingsPageModule);
    return InteractionSelectionSettingsPageModule;
}());

//# sourceMappingURL=interaction-selection-settings.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeepLinkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_handler_error_handler__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeepLinkProvider = (function () {
    function DeepLinkProvider(platform, alertCtrl, translateService) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
    }
    DeepLinkProvider.prototype.sameDeviceDeeplink = function (url) {
        var _this = this;
        if (url === void 0) { url = 'airgap-wallet://'; }
        return new Promise(function (resolve, reject) {
            var sApp;
            if (_this.platform.is('android')) {
                sApp = window.startApp.set({
                    action: 'ACTION_VIEW',
                    uri: url,
                    flags: ['FLAG_ACTIVITY_NEW_TASK']
                });
            }
            else if (_this.platform.is('ios')) {
                sApp = window.startApp.set(url);
            }
            else {
                _this.showDeeplinkOnlyOnDevicesAlert();
                return reject();
            }
            sApp.start(function () {
                console.log('Deeplink called');
                resolve();
            }, function (error) {
                console.error('deeplink used', url);
                console.error(error);
                _this.showAppNotFoundAlert();
                return reject();
            });
        });
    };
    DeepLinkProvider.prototype.showDeeplinkOnlyOnDevicesAlert = function () {
        var _this = this;
        this.translateService
            .get(['deep-link.not-supported-alert.title', 'deep-link.not-supported-alert.message', 'deep-link.not-supported-alert.ok'])
            .subscribe(function (translated) {
            var alert = _this.alertCtrl.create({
                title: translated['deep-link.not-supported-alert.title'],
                message: translated['deep-link.not-supported-alert.message'],
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: translated['deep-link.not-supported-alert.ok'],
                        role: 'cancel'
                    }
                ]
            });
            alert.present().catch(Object(__WEBPACK_IMPORTED_MODULE_2__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_2__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
        });
    };
    DeepLinkProvider.prototype.showAppNotFoundAlert = function () {
        var _this = this;
        this.translateService
            .get(['deep-link.app-not-found.title', 'deep-link.app-not-found.message', 'deep-link.app-not-found.ok'], {
            otherAppName: 'AirGap Wallet'
        })
            .subscribe(function (translated) {
            var alert = _this.alertCtrl.create({
                title: translated['deep-link.app-not-found.title'],
                message: translated['deep-link.app-not-found.message'],
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: translated['deep-link.app-not-found.ok'],
                        role: 'cancel'
                    }
                ]
            });
            alert.present().catch(Object(__WEBPACK_IMPORTED_MODULE_2__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_2__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
        });
    };
    DeepLinkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateService */]])
    ], DeepLinkProvider);
    return DeepLinkProvider;
}());

//# sourceMappingURL=deep-link.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletSharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WalletSharePage = (function () {
    function WalletSharePage(navController, navParams) {
        this.navController = navController;
        this.navParams = navParams;
        this.interactionUrl = this.navParams.get('interactionUrl');
    }
    WalletSharePage.prototype.done = function () {
        this.navController.popToRoot().catch(Object(__WEBPACK_IMPORTED_MODULE_2__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_2__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    WalletSharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet-share',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/wallet-share/wallet-share.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'wallet-share.title\' | translate }}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="colored-background">\n  <h3 padding-bottom [innerHTML]="\'wallet-share.heading\' | translate"></h3>\n\n  <ion-row justify-content-center padding-bottom>\n    <qr-clipboard *ngIf="interactionUrl" [qrdata]="interactionUrl" [level]="\'L\'" [size]="300"></qr-clipboard>\n  </ion-row>\n\n  <ion-row><p [innerHTML]="\'wallet-share.text\' | translate"></p></ion-row>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button default ion-button color="primary" (click)="done()" round item-right>{{ \'wallet-share.done_label\' | translate }}</button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/wallet-share/wallet-share.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], WalletSharePage);
    return WalletSharePage;
}());

//# sourceMappingURL=wallet-share.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSignedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_error_handler_error_handler__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clipboard_clipboard__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var TransactionQRType;
(function (TransactionQRType) {
    TransactionQRType[TransactionQRType["SignedAirGap"] = 0] = "SignedAirGap";
    TransactionQRType[TransactionQRType["SignedRaw"] = 1] = "SignedRaw";
})(TransactionQRType || (TransactionQRType = {}));
var TransactionSignedPage = (function () {
    function TransactionSignedPage(navCtrl, navParams, clipboardProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clipboardProvider = clipboardProvider;
        this.qrType = 0;
    }
    TransactionSignedPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.interactionUrl = this.navParams.get('interactionUrl');
                this.wallet = this.navParams.get('wallet');
                this.signedTx = this.navParams.get('signedTx');
                return [2 /*return*/];
            });
        });
    };
    TransactionSignedPage.prototype.switchQR = function () {
        this.qrType = this.qrType === TransactionQRType.SignedAirGap ? TransactionQRType.SignedRaw : TransactionQRType.SignedAirGap;
    };
    TransactionSignedPage.prototype.done = function () {
        this.navCtrl.popToRoot().catch(Object(__WEBPACK_IMPORTED_MODULE_2__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_2__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    TransactionSignedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-signed',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/transaction-signed/transaction-signed.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'transaction-signed.title\' | translate }}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="colored-background">\n  <h3 [innerHTML]="\'transaction-signed.heading\' | translate"></h3>\n\n  <ion-row justify-content-center padding-top>\n    <qr-clipboard *ngIf="interactionUrl && qrType === 0" [level]="\'L\'" [qrdata]="interactionUrl" [size]="300"></qr-clipboard>\n    <qr-clipboard *ngIf="signedTx && qrType === 1" [level]="\'L\'" [qrdata]="signedTx" [size]="300"></qr-clipboard>\n  </ion-row>\n\n  <ion-row padding>\n    <ion-label>{{ \'transaction-signed.raw-tx_label\' | translate }}</ion-label>\n    <ion-toggle (ionChange)="switchQR($event)"></ion-toggle>\n  </ion-row>\n  <ion-row padding-bottom margin-bottom>\n    <signed-transaction [syncProtocolString]="interactionUrl"></signed-transaction>\n  </ion-row>\n  <ion-fab bottom right>\n    <button default ion-button color="primary" (click)="done()" round>{{ \'transaction-signed.done_label\' | translate }}</button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/transaction-signed/transaction-signed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_clipboard_clipboard__["a" /* ClipboardProvider */]])
    ], TransactionSignedPage);
    return TransactionSignedPage;
}());

//# sourceMappingURL=transaction-signed.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_popover_about_popover_component__ = __webpack_require__(1352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entropy_progress_entropy_progress__ = __webpack_require__(1353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__touch_entropy_touch_entropy__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verify_key_verify_key__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hexagon_icon_hexagon_icon__ = __webpack_require__(1354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__identicon_identicon__ = __webpack_require__(1355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__address_row_address_row__ = __webpack_require__(1358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__from_to_from_to__ = __webpack_require__(1359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__current_secret_current_secret__ = __webpack_require__(1361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ion_text_avatar_ion_text_avatar__ = __webpack_require__(1362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic2_material_icons__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__trace_input_trace_input_directive__ = __webpack_require__(1363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__progress_footer_progress_footer__ = __webpack_require__(1364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__wallet_item_wallet_item__ = __webpack_require__(1365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_fee_converter_fee_converter_pipe__ = __webpack_require__(1366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_amount_converter_amount_converter_pipe__ = __webpack_require__(1367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__secret_item_secret_item__ = __webpack_require__(1368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__signed_transaction_signed_transaction__ = __webpack_require__(1369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__qr_clipboard_qr_clipboard__ = __webpack_require__(1370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularx_qrcode__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__currency_symbol_currency_symbol__ = __webpack_require__(1375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__entropy_progress_entropy_progress__["a" /* EntropyProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_3__touch_entropy_touch_entropy__["a" /* TouchEntropyComponent */],
                __WEBPACK_IMPORTED_MODULE_4__verify_key_verify_key__["a" /* VerifyKeyComponent */],
                __WEBPACK_IMPORTED_MODULE_5__hexagon_icon_hexagon_icon__["a" /* HexagonIconComponent */],
                __WEBPACK_IMPORTED_MODULE_6__identicon_identicon__["a" /* IdenticonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__address_row_address_row__["a" /* AddressRowComponent */],
                __WEBPACK_IMPORTED_MODULE_8__from_to_from_to__["a" /* FromToComponent */],
                __WEBPACK_IMPORTED_MODULE_16__wallet_item_wallet_item__["a" /* WalletItemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__current_secret_current_secret__["a" /* CurrentSecretComponent */],
                __WEBPACK_IMPORTED_MODULE_15__progress_footer_progress_footer__["a" /* ProgressFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ion_text_avatar_ion_text_avatar__["a" /* IonTextAvatar */],
                __WEBPACK_IMPORTED_MODULE_14__trace_input_trace_input_directive__["a" /* TraceInputDirective */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_fee_converter_fee_converter_pipe__["a" /* FeeConverterPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_amount_converter_amount_converter_pipe__["a" /* AmountConverterPipe */],
                __WEBPACK_IMPORTED_MODULE_20__secret_item_secret_item__["a" /* SecretItemComponent */],
                __WEBPACK_IMPORTED_MODULE_0__about_popover_about_popover_component__["a" /* AboutPopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_21__signed_transaction_signed_transaction__["a" /* SignedTransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_22__qr_clipboard_qr_clipboard__["a" /* QrClipboardComponent */],
                __WEBPACK_IMPORTED_MODULE_24__currency_symbol_currency_symbol__["a" /* CurrencySymbolComponent */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["g" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["a" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_13_ionic2_material_icons__["a" /* MaterialIconsModule */], __WEBPACK_IMPORTED_MODULE_23_angularx_qrcode__["a" /* QRCodeModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__entropy_progress_entropy_progress__["a" /* EntropyProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_3__touch_entropy_touch_entropy__["a" /* TouchEntropyComponent */],
                __WEBPACK_IMPORTED_MODULE_4__verify_key_verify_key__["a" /* VerifyKeyComponent */],
                __WEBPACK_IMPORTED_MODULE_5__hexagon_icon_hexagon_icon__["a" /* HexagonIconComponent */],
                __WEBPACK_IMPORTED_MODULE_6__identicon_identicon__["a" /* IdenticonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__address_row_address_row__["a" /* AddressRowComponent */],
                __WEBPACK_IMPORTED_MODULE_8__from_to_from_to__["a" /* FromToComponent */],
                __WEBPACK_IMPORTED_MODULE_16__wallet_item_wallet_item__["a" /* WalletItemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__current_secret_current_secret__["a" /* CurrentSecretComponent */],
                __WEBPACK_IMPORTED_MODULE_15__progress_footer_progress_footer__["a" /* ProgressFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ion_text_avatar_ion_text_avatar__["a" /* IonTextAvatar */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_fee_converter_fee_converter_pipe__["a" /* FeeConverterPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_amount_converter_amount_converter_pipe__["a" /* AmountConverterPipe */],
                __WEBPACK_IMPORTED_MODULE_20__secret_item_secret_item__["a" /* SecretItemComponent */],
                __WEBPACK_IMPORTED_MODULE_0__about_popover_about_popover_component__["a" /* AboutPopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_22__qr_clipboard_qr_clipboard__["a" /* QrClipboardComponent */],
                __WEBPACK_IMPORTED_MODULE_24__currency_symbol_currency_symbol__["a" /* CurrencySymbolComponent */],
                __WEBPACK_IMPORTED_MODULE_21__signed_transaction_signed_transaction__["a" /* SignedTransactionComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionSelectionPageModule", function() { return InteractionSelectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interaction_selection__ = __webpack_require__(1086);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InteractionSelectionPageModule = (function () {
    function InteractionSelectionPageModule() {
    }
    InteractionSelectionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__interaction_selection__["a" /* InteractionSelectionPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__interaction_selection__["a" /* InteractionSelectionPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__interaction_selection__["a" /* InteractionSelectionPage */]]
        })
    ], InteractionSelectionPageModule);
    return InteractionSelectionPageModule;
}());

//# sourceMappingURL=interaction-selection.module.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalAuthenticationOnboardingPageModule", function() { return LocalAuthenticationOnboardingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_authentication_onboarding__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LocalAuthenticationOnboardingPageModule = (function () {
    function LocalAuthenticationOnboardingPageModule() {
    }
    LocalAuthenticationOnboardingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__local_authentication_onboarding__["a" /* LocalAuthenticationOnboardingPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__local_authentication_onboarding__["a" /* LocalAuthenticationOnboardingPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]]
        })
    ], LocalAuthenticationOnboardingPageModule);
    return LocalAuthenticationOnboardingPageModule;
}());

//# sourceMappingURL=local-authentication-onboarding.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalAuthenticationOnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_secrets_secrets_provider__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LocalAuthenticationOnboardingPage = (function () {
    function LocalAuthenticationOnboardingPage(navCtrl, navParams, storage, secretsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.secretsProvider = secretsProvider;
        this.protocolIdentifier = this.navParams.get('protocolIdentifier');
        this.isHDWallet = this.navParams.get('isHDWallet');
        this.customDerivationPath = this.navParams.get('customDerivationPath');
    }
    LocalAuthenticationOnboardingPage.prototype.authenticate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set('DISCLAIMER_HIDE_LOCAL_AUTH_ONBOARDING', true)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 6]);
                        return [4 /*yield*/, this.secretsProvider.addWallet(this.protocolIdentifier, this.isHDWallet, this.customDerivationPath)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.navCtrl.pop()];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [4 /*yield*/, this.navCtrl.popToRoot()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LocalAuthenticationOnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-local-authentication-onboarding',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/local-authentication-onboarding/local-authentication-onboarding.html"*/'<ion-header transparent no-border><ion-navbar transparent></ion-navbar></ion-header>\n\n<ion-content class="colored-background" padding>\n  <h1 [innerHTML]="\'local-authentication-onboarding.heading\' | translate"></h1>\n\n  <ion-row justify-content-center padding-vertical><img src="assets/img/local_authentication_onboarding.svg" padding-vertical /></ion-row>\n\n  <p>{{ \'local-authentication-onboarding.text\' | translate }}</p>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button default ion-button color="primary" round item-right (click)="authenticate()">\n        {{ \'local-authentication-onboarding.authenticate_label\' | translate }}\n      </button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/local-authentication-onboarding/local-authentication-onboarding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_secrets_secrets_provider__["a" /* SecretsProvider */]])
    ], LocalAuthenticationOnboardingPage);
    return LocalAuthenticationOnboardingPage;
}());

//# sourceMappingURL=local-authentication-onboarding.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretCreatePageModule", function() { return SecretCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secret_create__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_material_icons__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SecretCreatePageModule = (function () {
    function SecretCreatePageModule() {
    }
    SecretCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__secret_create__["a" /* SecretCreatePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic2_material_icons__["a" /* MaterialIconsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__secret_create__["a" /* SecretCreatePage */]), __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__secret_create__["a" /* SecretCreatePage */]]
        })
    ], SecretCreatePageModule);
    return SecretCreatePageModule;
}());

//# sourceMappingURL=secret-create.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretRulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secret_show_secret_show__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SecretRulesPage = (function () {
    function SecretRulesPage(navController, navParams) {
        this.navController = navController;
        this.navParams = navParams;
        this.secret = this.navParams.get('secret');
    }
    SecretRulesPage.prototype.goToShowSecret = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_2__secret_show_secret_show__["a" /* SecretShowPage */], { secret: this.secret }).catch(Object(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    SecretRulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-secret-rules',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-rules/secret-rules.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'secret-rules.title\' | translate }}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="colored-background">\n  <h1>{{ \'secret-rules.heading\' | translate }}</h1>\n\n  <p>{{ \'secret-rules.text\' | translate }}</p>\n\n  <p padding-bottom>{{ \'secret-rules.description\' | translate }}</p>\n\n  <ul no-padding>\n    <li>{{ \'secret-rules.rules-list.item-1_text\' | translate }}</li>\n    <br />\n    <li>{{ \'secret-rules.rules-list.item-2_text\' | translate }}</li>\n    <br />\n    <li>{{ \'secret-rules.rules-list.item-3_text\' | translate }}</li>\n    <br />\n    <li>{{ \'secret-rules.rules-list.item-4_text\' | translate }}</li>\n    <br />\n    <li>{{ \'secret-rules.rules-list.item-5_text\' | translate }}</li>\n    <br />\n    <li>{{ \'secret-rules.rules-list.item-6_text\' | translate }}</li>\n  </ul>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button default ion-button color="primary" (click)="goToShowSecret()" round item-right>\n        {{ \'secret-rules.understood_label\' | translate }}\n      </button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-rules/secret-rules.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SecretRulesPage);
    return SecretRulesPage;
}());

//# sourceMappingURL=secret-rules.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secret_validate_secret_validate__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constants__ = __webpack_require__(1087);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SecretShowPage = (function () {
    function SecretShowPage(navController, alertController, navParams, translateService) {
        this.navController = navController;
        this.alertController = alertController;
        this.navParams = navParams;
        this.translateService = translateService;
        this.startTime = new Date();
        this.secret = this.navParams.get('secret');
    }
    SecretShowPage.prototype.goToValidateSecret = function () {
        var _this = this;
        if (this.startTime.getTime() + __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* SHOW_SECRET_MIN_TIME_IN_SECONDS */] * 1000 > new Date().getTime()) {
            this.translateService
                .get([
                'secret-show.too-fast_alert.title',
                'secret-show.too-fast_alert.heading',
                'secret-show.too-fast_alert.text',
                'secret-show.too-fast_alert.wait_label_p1',
                'secret-show.too-fast_alert.wait_label_p2'
            ])
                .subscribe(function (values) {
                var title = values['secret-show.too-fast_alert.title'];
                var heading = values['secret-show.too-fast_alert.heading'];
                var text = values['secret-show.too-fast_alert.text'];
                var wait_label_p1 = values['secret-show.too-fast_alert.wait_label_p1'];
                var wait_label_p2 = values['secret-show.too-fast_alert.wait_label_p2'];
                _this.alertController
                    .create({
                    title: title,
                    message: heading +
                        '<br/>' +
                        text +
                        '<br/>' +
                        wait_label_p1 +
                        '<strong>' +
                        __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* SHOW_SECRET_MIN_TIME_IN_SECONDS */].toString() +
                        wait_label_p2 +
                        '</strong>',
                    buttons: ['Okay']
                })
                    .present()
                    .catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
            });
        }
        else {
            this.navController.push(__WEBPACK_IMPORTED_MODULE_2__secret_validate_secret_validate__["a" /* SecretValidatePage */], { secret: this.secret }).catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
        }
    };
    SecretShowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-secret-show',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-show/secret-show.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'secret-show.title\' | translate }}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="colored-background">\n  <p padding-bottom>{{ \'secret-show.text\' | translate }}</p>\n\n  <h3 class="secret--typography">{{ secret.recoverMnemonicFromHex(secret.secretHex) }}</h3>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button default ion-button color="primary" (click)="goToValidateSecret()" round item-right>\n        {{ \'secret-show.next-step_label\' | translate }}\n      </button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-show/secret-show.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateService */]])
    ], SecretShowPage);
    return SecretShowPage;
}());

//# sourceMappingURL=secret-show.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretValidatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_verify_key_verify_key__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__secret_edit_secret_edit__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SecretValidatePage = (function () {
    function SecretValidatePage(navController, navParams) {
        this.navController = navController;
        this.navParams = navParams;
        this.validated = false;
        this.secret = this.navParams.get('secret');
    }
    SecretValidatePage.prototype.onComplete = function (isCorrect) {
        this.validated = isCorrect;
    };
    SecretValidatePage.prototype.onContinue = function () {
        this.goToSecretEditPage();
    };
    SecretValidatePage.prototype.goToSecretEditPage = function () {
        this.navController
            .push(__WEBPACK_IMPORTED_MODULE_3__secret_edit_secret_edit__["a" /* SecretEditPage */], { secret: this.secret, isGenerating: true })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('verify'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_verify_key_verify_key__["a" /* VerifyKeyComponent */])
    ], SecretValidatePage.prototype, "verify", void 0);
    SecretValidatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-secret-validate',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-validate/secret-validate.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>{{ \'secret-validate.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="colored-background">\n  <p padding-horizontal>{{ \'secret-validate.text\' | translate }}</p>\n  <verify-key\n    #verify\n    [secret]="secret.recoverMnemonicFromHex(secret.secretHex)"\n    (onComplete)="onComplete($event)"\n    (onContinue)="onContinue($event)"\n  ></verify-key>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-validate/secret-validate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SecretValidatePage);
    return SecretValidatePage;
}());

//# sourceMappingURL=secret-validate.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialRecoverySetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_secret__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__social_recovery_show_share_social_recovery_show_share__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bip39__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bip39___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bip39__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SocialRecoverySetupPage = (function () {
    function SocialRecoverySetupPage(navCtrl, navParams, secretProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.secretProvider = secretProvider;
        this.numberOfShares = 3;
        this.numberOfRequiredShares = 2;
        this.secret = this.navParams.get('secret');
    }
    SocialRecoverySetupPage.prototype.setNumberOfShares = function (i) {
        this.numberOfShares = i;
        if (this.numberOfRequiredShares > this.numberOfShares) {
            this.numberOfRequiredShares = this.numberOfShares;
        }
    };
    SocialRecoverySetupPage.prototype.setNumberOfRequiredShares = function (i) {
        this.numberOfRequiredShares = i;
    };
    SocialRecoverySetupPage.prototype.back = function () {
        this.navCtrl.pop().catch(Object(__WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    SocialRecoverySetupPage.prototype.next = function () {
        var _this = this;
        this.secretProvider
            .retrieveEntropyForSecret(this.secret)
            .then(function (entropy) {
            var shares = __WEBPACK_IMPORTED_MODULE_2__models_secret__["a" /* Secret */].generateSocialRecover(__WEBPACK_IMPORTED_MODULE_5_bip39__["entropyToMnemonic"](entropy), _this.numberOfShares, _this.numberOfRequiredShares);
            _this.navCtrl
                .push(__WEBPACK_IMPORTED_MODULE_3__social_recovery_show_share_social_recovery_show_share__["a" /* SocialRecoveryShowSharePage */], { shares: shares, currentShare: 0, secret: _this.secret })
                .catch(Object(__WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    SocialRecoverySetupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-social-recovery-setup',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/social-recovery-setup/social-recovery-setup.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'social-recovery-setup.title\' | translate }}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="colored-background" padding>\n  <p class="font--weight__med" padding-bottom>{{ \'social-recovery-setup.text\' | translate }}</p>\n  <p class="font--weight__med">{{ \'social-recovery-setup.secret-shares.label\' | translate }}</p>\n  <p padding-bottom>{{ \'social-recovery-setup.secret-shares.text\' | translate }}</p>\n  <p class="font--weight__med">{{ \'social-recovery-setup.shares-number_label\' | translate }}</p>\n  <ion-row padding-bottom>\n    <button\n      *ngFor="let i of [2, 3, 4, 5, 6]"\n      class="button--rounded"\n      ion-button\n      round\n      color="secondary-light"\n      (click)="setNumberOfShares(i)"\n      [color]="i === numberOfShares ? \'primary\' : \'secondary-light\'"\n    >\n      {{ i }}\n    </button>\n  </ion-row>\n  <p class="font--weight__med">{{ \'social-recovery-setup.shares-recovery_label\' | translate }}</p>\n  <ion-row>\n    <button\n      *ngFor="let i of [2, 3, 4, 5, 6]"\n      class="button--rounded"\n      ion-button\n      round\n      color="secondary-light"\n      (click)="setNumberOfRequiredShares(i)"\n      [color]="i === numberOfRequiredShares ? \'primary\' : \'secondary-light\'"\n      [disabled]="i > numberOfShares"\n    >\n      {{ i }}\n    </button>\n  </ion-row>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-item no-lines transparent>\n    <button default ion-button color="primary" (click)="done()" round item-right>\n      {{ \'social-recovery-setup.start_label\' | translate }}\n    </button>\n  </ion-item>\n</ion-footer>\n\n<ion-footer no-border color="primary">\n  <ion-navbar color="primary" no-padding>\n    <ion-row>\n      <ion-col col-3 no-padding>\n        <!-- TODO: navigate back -->\n        <button ion-button icon-left clear color="white">\n          <ion-icon md-name="chevron_left" (click)="back()"></ion-icon>\n          {{ \'social-recovery-setup.back_label\' | translate }}\n        </button>\n      </ion-col>\n      <ion-col col-6 no-padding>\n        <ion-row justify-content-center align-items-center class="full--height">\n          <!-- TODO: Set active color for current page/view ! -->\n          <ion-icon md-name="fiber_manual_record" color="white"></ion-icon>\n          <ion-icon md-name="fiber_manual_record" color="white"></ion-icon>\n          <ion-icon md-name="fiber_manual_record" color="white"></ion-icon>\n          <ion-icon md-name="fiber_manual_record" color="white"></ion-icon>\n          <ion-icon md-name="fiber_manual_record" color="white"></ion-icon>\n        </ion-row>\n      </ion-col>\n      <ion-col col-3 no-padding>\n        <!-- TODO: navigate forward -->\n        <button ion-button icon-right clear color="white" (click)="next()">\n          {{ \'social-recovery-setup.next_label\' | translate }}\n          <ion-icon md-name="chevron_right"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/social-recovery-setup/social-recovery-setup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_secrets_secrets_provider__["a" /* SecretsProvider */]])
    ], SocialRecoverySetupPage);
    return SocialRecoverySetupPage;
}());

//# sourceMappingURL=social-recovery-setup.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialRecoveryValidateSharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_verify_key_verify_key__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__social_recovery_show_share_social_recovery_show_share__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SocialRecoveryValidateSharePage = (function () {
    function SocialRecoveryValidateSharePage(navCtrl, navParams, secretsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.secretsProvider = secretsProvider;
        this.validated = false;
        this.secret = navParams.get('secret');
        this.shares = navParams.get('shares');
        this.currentShare = navParams.get('currentShare');
    }
    SocialRecoveryValidateSharePage.prototype.onComplete = function (isCorrect) {
        this.validated = isCorrect;
    };
    SocialRecoveryValidateSharePage.prototype.onContinue = function () {
        this.next.bind(this)();
    };
    SocialRecoveryValidateSharePage.prototype.back = function () {
        this.navCtrl.pop().catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    SocialRecoveryValidateSharePage.prototype.next = function () {
        var _this = this;
        if (this.shares.length === this.currentShare + 1) {
            this.secret.hasSocialRecovery = true;
            this.secretsProvider
                .addOrUpdateSecret(this.secret)
                .then(function () {
                _this.navCtrl.popToRoot().catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
            })
                .catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
        }
        else {
            this.navCtrl
                .push(__WEBPACK_IMPORTED_MODULE_3__social_recovery_show_share_social_recovery_show_share__["a" /* SocialRecoveryShowSharePage */], {
                shares: this.shares,
                currentShare: this.currentShare + 1,
                secret: this.secret
            })
                .catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('verify'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_verify_key_verify_key__["a" /* VerifyKeyComponent */])
    ], SocialRecoveryValidateSharePage.prototype, "verify", void 0);
    SocialRecoveryValidateSharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-social-recovery-validate-share',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/social-recovery-validate-share/social-recovery-validate-share.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'social-recovery-validate-share.title\' | translate }}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="colored-background">\n  <p padding-horizontal>{{ \'social-recovery-validate-share.text\' | translate }}</p>\n  <verify-key\n    *ngIf="shares"\n    #verify\n    [secret]="shares[currentShare]"\n    (onComplete)="onComplete($event)"\n    (onContinue)="onContinue($event)"\n  ></verify-key>\n</ion-content>\n\n<ion-footer no-border color="primary">\n  <progress-footer\n    [rightEnabled]="validated"\n    [progress]="currentShare * 2 + 1"\n    [maxProgress]="shares.length * 2"\n    [rightAction]="next.bind(this)"\n    [rightLabel]="shares.length - 1 === this.currentShare ? \'Finish\' : \'Next\'"\n  ></progress-footer>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/social-recovery-validate-share/social-recovery-validate-share.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_secrets_secrets_provider__["a" /* SecretsProvider */]])
    ], SocialRecoveryValidateSharePage);
    return SocialRecoveryValidateSharePage;
}());

//# sourceMappingURL=social-recovery-validate-share.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretEditPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SecretEditPopoverComponent = (function () {
    function SecretEditPopoverComponent(alertCtrl, navParams, secretsProvider, viewCtrl, translateService) {
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.secretsProvider = secretsProvider;
        this.viewCtrl = viewCtrl;
        this.translateService = translateService;
        this.secret = this.navParams.get('secret');
        this.onDelete = this.navParams.get('onDelete');
    }
    SecretEditPopoverComponent.prototype.delete = function () {
        var _this = this;
        this.translateService
            .get([
            'secret-edit-delete-popover.title',
            'secret-edit-delete-popover.text',
            'secret-edit-delete-popover.cancel_label',
            'secret-edit-delete-popover.delete_label'
        ])
            .subscribe(function (values) {
            var title = values['secret-edit-delete-popover.title'];
            var message = values['secret-edit-delete-popover.text'];
            var cancelButton = values['secret-edit-delete-popover.cancel_label'];
            var deleteButton = values['secret-edit-delete-popover.delete_label'];
            var alert = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [
                    {
                        text: cancelButton,
                        role: 'cancel',
                        handler: function () {
                            _this.viewCtrl.dismiss().catch(Object(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_MODAL));
                        }
                    },
                    {
                        text: deleteButton,
                        handler: function () {
                            _this.secretsProvider.remove(_this.secret).catch(Object(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
                            _this.viewCtrl.dismiss().catch(Object(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_MODAL));
                            if (_this.onDelete) {
                                _this.onDelete();
                            }
                        }
                    }
                ]
            });
            alert.present().catch(Object(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
        });
    };
    SecretEditPopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list no-lines no-detail>\n      <ion-list-header>Settings</ion-list-header>\n      <button ion-item detail-none (click)=\"delete()\">\n        <ion-icon name=\"trash\" color=\"dark\" item-end></ion-icon>\n        Delete\n      </button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_secrets_secrets_provider__["a" /* SecretsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateService */]])
    ], SecretEditPopoverComponent);
    return SecretEditPopoverComponent;
}());

//# sourceMappingURL=secret-edit-popover.component.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntropyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_sha3__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_sha3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_sha3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_workers_hashWorker__ = __webpack_require__(1350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var blobURL = window.URL.createObjectURL(new Blob([__WEBPACK_IMPORTED_MODULE_3__assets_workers_hashWorker__["a" /* default */]]));
var hashWorker = new Worker(blobURL);
var EntropyService = (function () {
    function EntropyService() {
        var _this = this;
        this.ENTROPY_SIZE = 4096;
        this.entropyGenerators = [];
        this.entropySubscriptions = [];
        this.entropyUpdateObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _this.entropyUpdateObserver = observer;
        });
    }
    EntropyService.prototype.addEntropySource = function (entropyGenerator) {
        this.entropyGenerators.push(entropyGenerator);
    };
    EntropyService.prototype.getEntropyUpdateObservable = function () {
        return this.entropyUpdateObservable;
    };
    EntropyService.prototype.startEntropyCollection = function () {
        var _this = this;
        var promises = [];
        var secureRandomArray = new Uint8Array(this.ENTROPY_SIZE);
        window.crypto.getRandomValues(secureRandomArray);
        hashWorker.postMessage({ call: 'init', secureRandom: Array.from(secureRandomArray) });
        var _loop_1 = function (generator) {
            promises.push(generator
                .start()
                .then(function () {
                var entropySubscription = generator.getEntropyUpdateObservable().subscribe(function (result) {
                    try {
                        hashWorker.postMessage({ entropyHex: result.entropyHex, call: 'update' });
                    }
                    catch (error) {
                        console.warn(error);
                    }
                    if (_this.entropyUpdateObserver) {
                        _this.entropyUpdateObserver.next(void 0);
                    }
                    else {
                        console.warn('entropyUpdateObserver is undefined!');
                    }
                });
                _this.entropySubscriptions.push(entropySubscription);
                return;
            })
                .catch(function (error) {
                console.warn('generator start error', error);
            }));
        };
        for (var _i = 0, _a = this.entropyGenerators; _i < _a.length; _i++) {
            var generator = _a[_i];
            _loop_1(generator);
        }
        return Promise.all(promises);
    };
    EntropyService.prototype.stopEntropyCollection = function () {
        var _this = this;
        var promises = [];
        return new Promise(function (resolve) {
            // clear collection interval
            for (var i = 0; i < _this.entropySubscriptions.length; i++) {
                _this.entropySubscriptions[i].unsubscribe();
            }
            _this.entropySubscriptions = [];
            // stop entropy sources
            for (var i = 0; i < _this.entropyGenerators.length; i++) {
                console.log('stopping entropy source...');
                promises.push(_this.entropyGenerators[i].stop());
            }
            _this.entropyGenerators = [];
            Promise.all(promises)
                .then(function () {
                resolve();
            })
                .catch(Object(__WEBPACK_IMPORTED_MODULE_4__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_4__error_handler_error_handler__["a" /* ErrorCategory */].ENTROPY_COLLECTION));
        });
    };
    EntropyService.prototype.getEntropyAsHex = function () {
        var _this = this;
        return new Promise(function (resolve) {
            hashWorker.onmessage = function (event) {
                var secureRandomArray = new Uint8Array(_this.ENTROPY_SIZE);
                window.crypto.getRandomValues(secureRandomArray);
                var hash = __WEBPACK_IMPORTED_MODULE_1_js_sha3__["sha3_256"].create();
                hash.update(event.data.hash);
                hash.update(secureRandomArray);
                resolve(hash.hex());
            };
            hashWorker.postMessage({ call: 'digest' });
        });
    };
    EntropyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EntropyService);
    return EntropyService;
}());

//# sourceMappingURL=entropy.service.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchEntropyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_workers_entropyCalculatorWorker__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var blobURL = window.URL.createObjectURL(new Blob([__WEBPACK_IMPORTED_MODULE_2__assets_workers_entropyCalculatorWorker__["a" /* default */]]));
var entropyCalculatorWorker = new Worker(blobURL);
var TouchEntropyComponent = (function () {
    function TouchEntropyComponent(renderer) {
        var _this = this;
        this.renderer = renderer;
        this.cursorSize = 2;
        this.randomFactorInPercent = 10;
        this.cursorColor = 'white';
        this.collectedEntropyPercentage = 0;
        this.isDrawing = false;
        this.entropyObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            entropyCalculatorWorker.onmessage = function (event) {
                _this.collectedEntropyPercentage += event.data.entropyMeasure;
                observer.next({ entropyHex: event.data.entropyHex });
            };
            _this.handler = function (entropy) {
                var buffer1 = _this.arrayBufferFromIntArray(entropy);
                entropyCalculatorWorker.postMessage({ entropyBuffer: buffer1 }, [buffer1]);
            };
        });
    }
    TouchEntropyComponent.prototype.ngOnInit = function () {
        this.canvas = this.canvasRef.nativeElement;
        this.canvas.setAttribute('height', this.canvas.parentElement.getBoundingClientRect().height + "px");
        this.canvas.setAttribute('width', this.canvas.parentElement.getBoundingClientRect().width + "px");
        this.context = this.canvas.getContext('2d');
        this.context.fillStyle = this.cursorColor;
        this.rectangle = this.canvas.getBoundingClientRect();
        this.showStrokes = true;
    };
    TouchEntropyComponent.prototype.ngOnDestroy = function () {
        this.showStrokes = false;
    };
    TouchEntropyComponent.prototype.start = function () {
        var _this = this;
        this.collectedEntropyPercentage = 0;
        return new Promise(function (resolve) {
            _this.renderer.listen(_this.canvas, 'mousedown', function (_e) {
                _this.isDrawing = true;
            });
            _this.renderer.listen(_this.canvas, 'touchstart', function (_e) {
                _this.isDrawing = true;
            });
            _this.renderer.listen(_this.canvas, 'mouseup', function (_e) {
                _this.isDrawing = false;
            });
            _this.renderer.listen(_this.canvas, 'touchend', function (_e) {
                _this.isDrawing = false;
            });
            _this.renderer.listen(_this.canvas, 'mousemove', function (e) {
                if (_this.isDrawing)
                    _this.collectEntropy(e);
            });
            _this.renderer.listen(_this.canvas, 'touchmove', function (e) {
                if (_this.isDrawing)
                    _this.collectEntropy(e);
            });
            resolve();
        });
    };
    TouchEntropyComponent.prototype.stop = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.isDrawing = false;
            resolve();
        });
    };
    TouchEntropyComponent.prototype.collectEntropy = function (e) {
        var x = e.clientX || e.touches[0].clientX;
        var y = e.clientY || e.touches[0].clientY;
        var currX = Math.ceil(((x - this.rectangle.left) / (this.rectangle.right - this.rectangle.left)) * this.canvas.width);
        var currY = Math.ceil(((y - this.rectangle.top) / (this.rectangle.bottom - this.rectangle.top)) * this.canvas.height) - 56;
        if (this.getRandomIntInclusive(0, 100) <= this.randomFactorInPercent) {
            var timeStampInMs = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart
                ? window.performance.now() + window.performance.timing.navigationStart
                : Date.now();
            if (this.handler) {
                this.handler([currX, currY, timeStampInMs]);
            }
        }
    };
    TouchEntropyComponent.prototype.getEntropyUpdateObservable = function () {
        return this.entropyObservable;
    };
    TouchEntropyComponent.prototype.getRandomIntInclusive = function (min, max) {
        var randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        var randomNumber = randomBuffer[0] / (0xffffffff + 1);
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(randomNumber * (max - min + 1)) + min;
    };
    TouchEntropyComponent.prototype.arrayBufferFromIntArray = function (array) {
        var buffer = new ArrayBuffer(array.length * 2);
        var bufView = new Uint8Array(buffer);
        for (var i = 0; i < array.length; i++) {
            bufView[i] = Math.abs(array[i] * 10000);
        }
        return buffer;
    };
    TouchEntropyComponent.prototype.getCollectedEntropyPercentage = function () {
        return this.collectedEntropyPercentage / 10;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TouchEntropyComponent.prototype, "cursorSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TouchEntropyComponent.prototype, "randomFactorInPercent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TouchEntropyComponent.prototype, "cursorColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('canvas'),
        __metadata("design:type", Object)
    ], TouchEntropyComponent.prototype, "canvasRef", void 0);
    TouchEntropyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'touch-entropy',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/components/touch-entropy/touch-entropy.html"*/'<div id="container">\n  <p>{{ \'touch-entropy.text\' | translate }}</p>\n  <canvas #canvas trace-input [traceEnabled]="showStrokes"></canvas>\n</div>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/components/touch-entropy/touch-entropy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], TouchEntropyComponent);
    return TouchEntropyComponent;
}());

//# sourceMappingURL=touch-entropy.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretImportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_BIP39Signer__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__secret_edit_secret_edit__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_secret__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_mnemonic_validator__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var signer = new __WEBPACK_IMPORTED_MODULE_2__models_BIP39Signer__["a" /* BIP39Signer */]();
var SecretImportPage = (function () {
    function SecretImportPage(navController, formBuilder) {
        this.navController = navController;
        this.formBuilder = formBuilder;
        var formGroup = {
            mnemonic: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__validators_mnemonic_validator__["a" /* MnemonicValidator */].isValid])]
        };
        this.secretImportForm = this.formBuilder.group(formGroup);
    }
    SecretImportPage.prototype.goToSecretCreatePage = function () {
        var secret = new __WEBPACK_IMPORTED_MODULE_4__models_secret__["a" /* Secret */](signer.mnemonicToEntropy(__WEBPACK_IMPORTED_MODULE_2__models_BIP39Signer__["a" /* BIP39Signer */].prepareMnemonic(this.mnemonic)));
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__secret_edit_secret_edit__["a" /* SecretEditPage */], { secret: secret, isGenerating: true }).catch(Object(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    SecretImportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-secret-import',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-import/secret-import.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'secret-import.title\' | translate }}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="colored-background">\n  <p>{{ \'secret-import.text\' | translate }}</p>\n  <ion-item no-padding padding-bottom [formGroup]="secretImportForm">\n    <ion-textarea\n      formControlName="mnemonic"\n      id="secret-import"\n      color="white"\n      placeholder="{{ \'secret-import.placeholder\' | translate }}"\n      [(ngModel)]="mnemonic"\n    ></ion-textarea>\n  </ion-item>\n\n  <p *ngIf="secretImportForm.touched && !secretImportForm.valid" color="primary" margin-top text-wrap>\n    {{ \'secret-import.warning\' | translate }}\n  </p>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button\n        id="btn-import"\n        default\n        ion-button\n        color="primary"\n        (click)="goToSecretCreatePage()"\n        round\n        item-right\n        [disabled]="!secretImportForm.valid"\n      >\n        {{ \'secret-import.import_label\' | translate }}\n      </button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-import/secret-import.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], SecretImportPage);
    return SecretImportPage;
}());

//# sourceMappingURL=secret-import.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MnemonicValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bip39__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bip39___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bip39__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_BIP39Signer__ = __webpack_require__(251);


var MnemonicValidator = (function () {
    function MnemonicValidator() {
    }
    MnemonicValidator.checkMnemonic = function (mnemonic, wordlist) {
        var words = __WEBPACK_IMPORTED_MODULE_1__models_BIP39Signer__["a" /* BIP39Signer */].prepareMnemonic(mnemonic).split(' ');
        if (words.length % 3 !== 0)
            throw new Error('invalid mnemonic');
        words.forEach(function (word) {
            var index = wordlist.indexOf(word);
            if (index === -1)
                throw new Error('invalid mnemonic');
        });
    };
    MnemonicValidator.isValidShare = function (control) {
        try {
            MnemonicValidator.checkMnemonic(control.value, __WEBPACK_IMPORTED_MODULE_0_bip39__["wordlists"].EN);
        }
        catch (e) {
            return {
                'not a social mnemonic share': true
            };
        }
        return null;
    };
    MnemonicValidator.isValid = function (control) {
        if (control.value && __WEBPACK_IMPORTED_MODULE_1__models_BIP39Signer__["a" /* BIP39Signer */].validateMnemonic(control.value)) {
            return null;
        }
        return {
            'not a mnemonic': true
        };
    };
    return MnemonicValidator;
}());

//# sourceMappingURL=mnemonic.validator.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialRecoveryImportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_secret__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__secret_edit_secret_edit__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_mnemonic_validator__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SocialRecoveryImportPage = (function () {
    function SocialRecoveryImportPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
    }
    SocialRecoveryImportPage.prototype.setNumberOfShares = function (i) {
        var _this = this;
        this.numberOfShares = i;
        this.shares = Array(i);
        var formGroup = {};
        this.getNumberArray(i).forEach(function (i) {
            formGroup['share_' + i.toString()] = ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__validators_mnemonic_validator__["a" /* MnemonicValidator */].isValidShare])];
            if (_this.socialRecoveryForm && _this.socialRecoveryForm.value['share_' + i.toString()]) {
                formGroup['share_' + i.toString()][0] = _this.socialRecoveryForm.value['share_' + i.toString()];
            }
        });
        this.socialRecoveryForm = this.formBuilder.group(formGroup);
    };
    SocialRecoveryImportPage.prototype.recover = function () {
        try {
            var secret = __WEBPACK_IMPORTED_MODULE_2__models_secret__["a" /* Secret */].recoverSecretFromShares(this.shares);
            this.navCtrl
                .push(__WEBPACK_IMPORTED_MODULE_3__secret_edit_secret_edit__["a" /* SecretEditPage */], { secret: new __WEBPACK_IMPORTED_MODULE_2__models_secret__["a" /* Secret */](secret, 'Recovery by Social Recovery') })
                .catch(Object(__WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
        }
        catch (error) {
            console.log('oops');
        }
    };
    SocialRecoveryImportPage.prototype.back = function () {
        this.navCtrl.pop().catch(Object(__WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    SocialRecoveryImportPage.prototype.getNumberArray = function (i) {
        return Array(i)
            .fill(0)
            .map(function (_x, i) { return i; });
    };
    SocialRecoveryImportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-social-recovery-import',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/social-recovery-import/social-recovery-import.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'social-recovery-import.title\' | translate }}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="colored-background" padding>\n  <p class="font--weight__med" padding-bottom>{{ \'social-recovery-import.text\' | translate }}</p>\n\n  <p class="font--weight__med">{{ \'social-recovery-import.share-recovery.heading\' | translate }}</p>\n\n  <ion-row>\n    <button\n      *ngFor="let i of [2, 3, 4, 5, 6]"\n      class="button--rounded"\n      ion-button\n      round\n      color="secondary-light"\n      (click)="setNumberOfShares(i)"\n      [color]="i === numberOfShares ? \'primary\' : \'secondary-light\'"\n    >\n      {{ i }}\n    </button>\n  </ion-row>\n\n  <ion-list *ngIf="shares">\n    <form [formGroup]="socialRecoveryForm">\n      <ion-item no-lines *ngFor="let i of getNumberArray(numberOfShares)">\n        <ion-label color="primary" stacked>{{ \'social-recovery-import.share-recovery.label\' | translate }} {{ i }}</ion-label>\n        <ion-textarea\n          [formControlName]="\'share_\' + i"\n          padding-bottom\n          color="white"\n          placeholder="duck goose dinosaur ..."\n          [(ngModel)]="shares[i]"\n        ></ion-textarea>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>\n\n<ion-footer no-border *ngIf="socialRecoveryForm">\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button default ion-button color="primary" (click)="recover()" round item-right [disabled]="!socialRecoveryForm.valid">\n        {{ \'social-recovery-import.recover_label\' | translate }}\n      </button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/social-recovery-import/social-recovery-import.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], SocialRecoveryImportPage);
    return SocialRecoveryImportPage;
}());

//# sourceMappingURL=social-recovery-import.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretGenerateOnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__secret_generate_secret_generate__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SecretGenerateOnboardingPage = (function () {
    function SecretGenerateOnboardingPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    SecretGenerateOnboardingPage.prototype.continue = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set('DISCLAIMER_GENERATE_INITIAL', true)];
                    case 1:
                        _a.sent();
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__secret_generate_secret_generate__["a" /* SecretGeneratePage */]).catch(Object(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
                        return [2 /*return*/];
                }
            });
        });
    };
    SecretGenerateOnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-secret-generate-onboarding',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-generate-onboarding/secret-generate-onboarding.html"*/'<ion-header transparent no-border><ion-navbar transparent></ion-navbar></ion-header>\n\n<ion-content class="colored-background" padding no-bounce>\n  <h1 [innerHTML]="\'secret-generate-onboarding.heading\' | translate"></h1>\n\n  <ion-row justify-content-center padding-vertical><img src="./assets/img/permission_onboarding.svg" /></ion-row>\n\n  <p>{{ \'secret-generate-onboarding.text\' | translate }}</p>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button default ion-button color="primary" round item-right (click)="continue()">\n        {{ \'secret-generate-onboarding.grant-permission_label\' | translate }}\n      </button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/secret-generate-onboarding/secret-generate-onboarding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SecretGenerateOnboardingPage);
    return SecretGenerateOnboardingPage;
}());

//# sourceMappingURL=secret-generate-onboarding.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretEditPageModule", function() { return SecretEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secret_edit__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_material_icons__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__secret_edit_popover_secret_edit_popover_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SecretEditPageModule = (function () {
    function SecretEditPageModule() {
    }
    SecretEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__secret_edit__["a" /* SecretEditPage */], __WEBPACK_IMPORTED_MODULE_5__secret_edit_popover_secret_edit_popover_component__["a" /* SecretEditPopoverComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_4_ionic2_material_icons__["a" /* MaterialIconsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__secret_edit__["a" /* SecretEditPage */]), __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__secret_edit__["a" /* SecretEditPage */], __WEBPACK_IMPORTED_MODULE_5__secret_edit_popover_secret_edit_popover_component__["a" /* SecretEditPopoverComponent */]]
        })
    ], SecretEditPageModule);
    return SecretEditPageModule;
}());

//# sourceMappingURL=secret-edit.module.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretGenerateOnboardingPageModule", function() { return SecretGenerateOnboardingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secret_generate_onboarding__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SecretGenerateOnboardingPageModule = (function () {
    function SecretGenerateOnboardingPageModule() {
    }
    SecretGenerateOnboardingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__secret_generate_onboarding__["a" /* SecretGenerateOnboardingPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__secret_generate_onboarding__["a" /* SecretGenerateOnboardingPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]]
        })
    ], SecretGenerateOnboardingPageModule);
    return SecretGenerateOnboardingPageModule;
}());

//# sourceMappingURL=secret-generate-onboarding.module.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretImportPageModule", function() { return SecretImportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secret_import__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SecretImportPageModule = (function () {
    function SecretImportPageModule() {
    }
    SecretImportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__secret_import__["a" /* SecretImportPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__secret_import__["a" /* SecretImportPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__secret_import__["a" /* SecretImportPage */]]
        })
    ], SecretImportPageModule);
    return SecretImportPageModule;
}());

//# sourceMappingURL=secret-import.module.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretRulesPageModule", function() { return SecretRulesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secret_rules__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SecretRulesPageModule = (function () {
    function SecretRulesPageModule() {
    }
    SecretRulesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__secret_rules__["a" /* SecretRulesPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__secret_rules__["a" /* SecretRulesPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__secret_rules__["a" /* SecretRulesPage */]]
        })
    ], SecretRulesPageModule);
    return SecretRulesPageModule;
}());

//# sourceMappingURL=secret-rules.module.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretShowPageModule", function() { return SecretShowPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secret_show__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__secret_validate_secret_validate_module__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SecretShowPageModule = (function () {
    function SecretShowPageModule() {
    }
    SecretShowPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__secret_show__["a" /* SecretShowPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__secret_validate_secret_validate_module__["SecretValidatePageModule"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__secret_show__["a" /* SecretShowPage */]), __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__secret_show__["a" /* SecretShowPage */]]
        })
    ], SecretShowPageModule);
    return SecretShowPageModule;
}());

//# sourceMappingURL=secret-show.module.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoveryImportPageModule", function() { return SocialRecoveryImportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_recovery_import__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SocialRecoveryImportPageModule = (function () {
    function SocialRecoveryImportPageModule() {
    }
    SocialRecoveryImportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__social_recovery_import__["a" /* SocialRecoveryImportPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__social_recovery_import__["a" /* SocialRecoveryImportPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__social_recovery_import__["a" /* SocialRecoveryImportPage */]]
        })
    ], SocialRecoveryImportPageModule);
    return SocialRecoveryImportPageModule;
}());

//# sourceMappingURL=social-recovery-import.module.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoverySetupPageModule", function() { return SocialRecoverySetupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_recovery_setup__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SocialRecoverySetupPageModule = (function () {
    function SocialRecoverySetupPageModule() {
    }
    SocialRecoverySetupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__social_recovery_setup__["a" /* SocialRecoverySetupPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__social_recovery_setup__["a" /* SocialRecoverySetupPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__social_recovery_setup__["a" /* SocialRecoverySetupPage */]]
        })
    ], SocialRecoverySetupPageModule);
    return SocialRecoverySetupPageModule;
}());

//# sourceMappingURL=social-recovery-setup.module.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoveryShowSharePageModule", function() { return SocialRecoveryShowSharePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_recovery_show_share__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SocialRecoveryShowSharePageModule = (function () {
    function SocialRecoveryShowSharePageModule() {
    }
    SocialRecoveryShowSharePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__social_recovery_show_share__["a" /* SocialRecoveryShowSharePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__social_recovery_show_share__["a" /* SocialRecoveryShowSharePage */]), __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__social_recovery_show_share__["a" /* SocialRecoveryShowSharePage */]]
        })
    ], SocialRecoveryShowSharePageModule);
    return SocialRecoveryShowSharePageModule;
}());

//# sourceMappingURL=social-recovery-show-share.module.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRecoveryValidateSharePageModule", function() { return SocialRecoveryValidateSharePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_recovery_validate_share__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SocialRecoveryValidateSharePageModule = (function () {
    function SocialRecoveryValidateSharePageModule() {
    }
    SocialRecoveryValidateSharePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__social_recovery_validate_share__["a" /* SocialRecoveryValidateSharePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__social_recovery_validate_share__["a" /* SocialRecoveryValidateSharePage */]), __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__social_recovery_validate_share__["a" /* SocialRecoveryValidateSharePage */]]
        })
    ], SocialRecoveryValidateSharePageModule);
    return SocialRecoveryValidateSharePageModule;
}());

//# sourceMappingURL=social-recovery-validate-share.module.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabScanPageModule", function() { return TabScanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_scan__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_scanner_scanner__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zxing_ngx_scanner__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TabScanPageModule = (function () {
    function TabScanPageModule() {
    }
    TabScanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tab_scan__["a" /* TabScanPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_5__zxing_ngx_scanner__["b" /* ZXingScannerModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_scan__["a" /* TabScanPage */]), __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_scanner_scanner__["a" /* ScannerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__tab_scan__["a" /* TabScanPage */]]
        })
    ], TabScanPageModule);
    return TabScanPageModule;
}());

//# sourceMappingURL=tab-scan.module.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_scanner_scanner__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_scheme_routing_scheme_routing__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zxing_ngx_scanner__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var TabScanPage = (function () {
    function TabScanPage(schemeRouting, alertCtrl, navController, platform, secretsProvider, scanner, permissionsProvider) {
        this.schemeRouting = schemeRouting;
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this.platform = platform;
        this.secretsProvider = secretsProvider;
        this.scanner = scanner;
        this.permissionsProvider = permissionsProvider;
        this.scannerEnabled = true;
        this.isBrowser = false;
        this.hasCameras = false;
        this.hasCameraPermission = false;
        this.isBrowser = !this.platform.is('cordova');
    }
    TabScanPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('cordova')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.checkCameraPermissionsAndActivate()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TabScanPage.prototype.requestPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.permissionsProvider.userRequestsPermissions([__WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__["b" /* PermissionTypes */].CAMERA])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.checkCameraPermissionsAndActivate()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabScanPage.prototype.checkCameraPermissionsAndActivate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.permissionsProvider.hasCameraPermission()];
                    case 1:
                        permission = _a.sent();
                        if (permission === __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__["a" /* PermissionStatus */].GRANTED) {
                            this.hasCameraPermission = true;
                            this.startScan();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TabScanPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            this.hasCameraPermission = true;
            this.zxingScanner.camerasNotFound.subscribe(function (_devices) {
                console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
            });
            if (this.selectedDevice) {
                // Not the first time that we open scanner
                this.zxingScanner.startScan(this.selectedDevice);
            }
            this.zxingScanner.camerasFound.subscribe(function (devices) {
                _this.hasCameras = true;
                _this.availableDevices = devices;
                _this.selectedDevice = devices[0];
            });
        }
    };
    TabScanPage.prototype.ionViewWillLeave = function () {
        if (this.platform.is('cordova')) {
            this.scanner.destroy();
        }
        else {
            this.zxingScanner.resetCodeReader();
        }
    };
    TabScanPage.prototype.startScan = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.scanner.show();
            this.scanner.scan(function (text) {
                _this.checkScan(text).catch(Object(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorCategory */].SCHEME_ROUTING));
            }, function (error) {
                console.warn(error);
                _this.startScan();
            });
        }
        else {
            // We don't need to do anything in the browser because it keeps scanning
        }
    };
    TabScanPage.prototype.checkScan = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.schemeRouting.handleNewSyncRequest(this.navController, data, function () {
                        _this.startScan();
                    })];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scanner'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__zxing_ngx_scanner__["a" /* ZXingScannerComponent */])
    ], TabScanPage.prototype, "zxingScanner", void 0);
    TabScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-scan',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/tab-scan/tab-scan.html"*/'<ion-header no-border>\n  <ion-navbar color="secondary">\n    <ion-title>{{ \'tab-scan.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce [class.transparent]="hasCameraPermission">\n  <p ion-text color="white" padding no-margin text-center>{{ \'tab-scan.text\' | translate }}</p>\n\n  <ion-row [hidden]="!hasCameraPermission" justify-content-center align-items-center class="row--height__100">\n    <ion-col class="guides--container content--align__center-center">\n      <img class="guides--container__img" src="assets/img/qr_code_guides.svg" />\n    </ion-col>\n    <zxing-scanner\n      [hidden]="!isBrowser"\n      #scanner\n      [device]="selectedDevice"\n      [scannerEnabled]="scannerEnabled"\n      (scanSuccess)="checkScan($event)"\n    ></zxing-scanner>\n  </ion-row>\n\n  <ion-row [hidden]="hasCameraPermission" (click)="requestPermission()" justify-content-center align-items-center class="row--height__100">\n    <ion-col text-center>\n      <img src="./assets/img/permission_onboarding_camera.svg" />\n      <h3 padding-horizontal [innerHTML]="\'tab-scan.empty-state_heading\' | translate"></h3>\n      <button round ion-button color="primary">{{ \'tab-scan.grant-permission_label\' | translate }}</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/tab-scan/tab-scan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_scheme_routing_scheme_routing__["a" /* SchemeRoutingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_secrets_secrets_provider__["a" /* SecretsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_scanner_scanner__["a" /* ScannerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_permissions_permissions__["c" /* PermissionsProvider */]])
    ], TabScanPage);
    return TabScanPage;
}());

//# sourceMappingURL=tab-scan.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bip39__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bip39___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bip39__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_interaction_interaction__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var TransactionDetailPage = (function () {
    function TransactionDetailPage(navController, navParams, secretsProvider, interactionProvider) {
        this.navController = navController;
        this.navParams = navParams;
        this.secretsProvider = secretsProvider;
        this.interactionProvider = interactionProvider;
    }
    TransactionDetailPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.transaction = this.navParams.get('transaction');
                        this.wallet = this.navParams.get('wallet');
                        this.deserializedSync = this.navParams.get('deserializedSync');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.wallet.coinProtocol.getTransactionDetails(this.transaction)];
                    case 2:
                        _a.airGapTx = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        console.log('cannot read tx details', e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TransactionDetailPage.prototype.signAndGoToNextPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var signedTx, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.signTransaction(this.transaction, this.wallet)];
                    case 1:
                        signedTx = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.generateBroadcastUrl(this.wallet, signedTx, this.transaction)];
                    case 2:
                        _a.broadcastUrl = _b.sent();
                        this.interactionProvider.startInteraction(this.navController, {
                            operationType: __WEBPACK_IMPORTED_MODULE_5__providers_interaction_interaction__["b" /* InteractionOperationType */].TRANSACTION_BROADCAST,
                            url: this.broadcastUrl,
                            wallet: this.wallet,
                            signedTx: signedTx,
                            transaction: this.transaction
                        }, this.secretsProvider.getActiveSecret());
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionDetailPage.prototype.generateBroadcastUrl = function (wallet, signedTx, unsignedTransaction) {
        return __awaiter(this, void 0, void 0, function () {
            var txDetails, e_2, syncProtocol, deserializedTxSigningRequest, serializedTx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        txDetails = {
                            from: undefined,
                            amount: undefined,
                            fee: undefined,
                            to: undefined
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, wallet.coinProtocol.getTransactionDetails(unsignedTransaction)];
                    case 2:
                        txDetails = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        Object(__WEBPACK_IMPORTED_MODULE_6__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(e_2);
                        return [3 /*break*/, 4];
                    case 4:
                        syncProtocol = new __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["SyncProtocolUtils"]();
                        deserializedTxSigningRequest = {
                            version: 1,
                            protocol: this.wallet.protocolIdentifier,
                            type: __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib__["EncodedType"].SIGNED_TRANSACTION,
                            payload: {
                                accountIdentifier: wallet.publicKey.substr(-6),
                                transaction: signedTx,
                                from: txDetails.from,
                                amount: txDetails.amount,
                                fee: txDetails.fee,
                                to: txDetails.to
                            }
                        };
                        return [4 /*yield*/, syncProtocol.serialize(deserializedTxSigningRequest)];
                    case 5:
                        serializedTx = _a.sent();
                        return [2 /*return*/, "" + (unsignedTransaction.callback || 'airgap-wallet://?d=') + serializedTx];
                }
            });
        });
    };
    TransactionDetailPage.prototype.signTransaction = function (transaction, wallet) {
        var secret = this.secretsProvider.findByPublicKey(wallet.publicKey);
        // we should handle this case here as well
        if (!secret) {
            console.warn('no secret found to this public key');
        }
        return this.secretsProvider.retrieveEntropyForSecret(secret).then(function (entropy) {
            var seed = __WEBPACK_IMPORTED_MODULE_4_bip39___default.a.mnemonicToSeedHex(__WEBPACK_IMPORTED_MODULE_4_bip39___default.a.entropyToMnemonic(entropy));
            if (wallet.isExtendedPublicKey) {
                var extendedPrivateKey = wallet.coinProtocol.getExtendedPrivateKeyFromHexSecret(seed, wallet.derivationPath);
                return wallet.coinProtocol.signWithExtendedPrivateKey(extendedPrivateKey, transaction.transaction);
            }
            else {
                var privateKey = wallet.coinProtocol.getPrivateKeyFromHexSecret(seed, wallet.derivationPath);
                return wallet.coinProtocol.signWithPrivateKey(privateKey, transaction.transaction);
            }
        });
    };
    TransactionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-detail',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/transaction-detail/transaction-detail.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'transaction-detail.title\' | translate }}</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="colored-background">\n  <div *ngIf="airGapTx">\n    <p>{{ \'transaction-detail.text\' | translate }}</p>\n  </div>\n  <signed-transaction [unsignedTx]="deserializedSync"></signed-transaction>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button default ion-button color="primary" (click)="signAndGoToNextPage()" round item-right icon-left>\n        <ion-icon md-name="check"></ion-icon>\n        {{ \'transaction-detail.sign-tx_label\' | translate }}\n      </button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/transaction-detail/transaction-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_secrets_secrets_provider__["a" /* SecretsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_interaction_interaction__["c" /* InteractionProvider */]])
    ], TransactionDetailPage);
    return TransactionDetailPage;
}());

//# sourceMappingURL=transaction-detail.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSettingsPageModule", function() { return TabSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_material_icons__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tab_settings__ = __webpack_require__(687);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TabSettingsPageModule = (function () {
    function TabSettingsPageModule() {
    }
    TabSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__tab_settings__["a" /* TabSettingsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_3_ionic2_material_icons__["a" /* MaterialIconsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__tab_settings__["a" /* TabSettingsPage */]), __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__tab_settings__["a" /* TabSettingsPage */]]
        })
    ], TabSettingsPageModule);
    return TabSettingsPageModule;
}());

//# sourceMappingURL=tab-settings.module.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clipboard_clipboard__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_scheme_routing_scheme_routing__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__secret_create_secret_create__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__secret_edit_secret_edit__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var TabSettingsPage = (function () {
    function TabSettingsPage(modalController, navController, secretsProvider, alertController, toastController, schemeRoutingProvider, clipboardProvider) {
        this.modalController = modalController;
        this.navController = navController;
        this.secretsProvider = secretsProvider;
        this.alertController = alertController;
        this.toastController = toastController;
        this.schemeRoutingProvider = schemeRoutingProvider;
        this.clipboardProvider = clipboardProvider;
        this.secrets = this.secretsProvider.currentSecretsList.asObservable();
    }
    TabSettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.secrets.subscribe(function (list) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secretsProvider.isReady()];
                    case 1:
                        _a.sent();
                        if (list.length === 0) {
                            this.navController.push(__WEBPACK_IMPORTED_MODULE_5__secret_create_secret_create__["a" /* SecretCreatePage */]).catch(Object(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    TabSettingsPage.prototype.goToNewSecret = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_5__secret_create_secret_create__["a" /* SecretCreatePage */]).catch(Object(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    TabSettingsPage.prototype.goToEditSecret = function (secret) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_6__secret_edit_secret_edit__["a" /* SecretEditPage */], { secret: secret }).catch(Object(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    TabSettingsPage.prototype.deleteSecret = function (secret) {
        var _this = this;
        this.alertController
            .create({
            title: 'Delete ' + secret.label,
            subTitle: 'Are you sure you want to delete ' + secret.label + '?',
            buttons: [
                {
                    text: 'Delete',
                    handler: function () {
                        _this.secretsProvider.remove(secret).catch(Object(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
                        var toast = _this.toastController.create({
                            message: 'Secret deleted',
                            duration: 5000,
                            showCloseButton: true,
                            closeButtonText: 'Undo'
                        });
                        toast.onDidDismiss(function (_data, role) {
                            if (role === 'close') {
                                _this.secretsProvider.addOrUpdateSecret(secret).catch(Object(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
                            }
                        });
                        toast.present().catch(Object(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        })
            .present()
            .catch(Object(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
    };
    TabSettingsPage.prototype.about = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_7__about_about__["a" /* AboutPage */]).catch(Object(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    TabSettingsPage.prototype.pasteClipboard = function () {
        var _this = this;
        this.clipboardProvider.paste().then(function (text) {
            _this.schemeRoutingProvider.handleNewSyncRequest(_this.navController, text).catch(Object(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorCategory */].SCHEME_ROUTING));
        }, function (err) {
            console.error('Error: ' + err);
        });
    };
    TabSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-settings',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/tab-settings/tab-settings.html"*/'<ion-header no-border>\n  <ion-navbar color="secondary">\n    <ion-title>{{ \'tab-settings.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-label>{{ \'tab-settings.information_label\' | translate }}</ion-label>\n\n    <ion-item no-lines detail-push (click)="about()">\n      <ion-icon md-name="info" item-start color="dark"></ion-icon>\n      {{ \'tab-settings.about\' | translate }}\n    </ion-item>\n    <ion-item no-lines detail-push (click)="pasteClipboard()">\n      <ion-icon name="return-right" item-start color="dark"></ion-icon>\n      {{ \'tab-settings.paste-from-clipboard_label\' | translate }}\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-label>{{ \'tab-settings.secrets_label\' | translate }}</ion-label>\n    <ng-container *ngFor="let secret of (secrets | async)">\n      <secret-item [secret]="secret" (click)="goToEditSecret(secret)"></secret-item>\n    </ng-container>\n    <ion-row padding-top justify-content-end>\n      <button default ion-button color="secondary" (click)="goToNewSecret()" round icon-left>\n        <ion-icon name="add"></ion-icon>\n        {{ \'tab-settings.add-settings_label\' | translate }}\n      </button>\n    </ion-row>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/tab-settings/tab-settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_secrets_secrets_provider__["a" /* SecretsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_scheme_routing_scheme_routing__["a" /* SchemeRoutingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_clipboard_clipboard__["a" /* ClipboardProvider */]])
    ], TabSettingsPage);
    return TabSettingsPage;
}());

//# sourceMappingURL=tab-settings.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.appName = '';
        this.packageName = '';
        this.versionNumber = '';
        this.versionCode = '';
        this.updateVersions().catch(Object(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["a" /* ErrorCategory */].CORDOVA_PLUGIN));
    }
    AboutPage.prototype.updateVersions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.app.getAppName()];
                    case 1:
                        _a.appName = _f.sent();
                        _b = this;
                        return [4 /*yield*/, this.app.getPackageName()];
                    case 2:
                        _b.packageName = _f.sent();
                        _c = this;
                        return [4 /*yield*/, this.app.getVersionNumber()];
                    case 3:
                        _c.versionNumber = _f.sent();
                        _d = this;
                        _e = String;
                        return [4 /*yield*/, this.app.getVersionCode()];
                    case 4:
                        _d.versionCode = _e.apply(void 0, [_f.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color="secondary"><ion-title>{{ \'about.label\' | translate }}</ion-title></ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>{{ appName }}</ion-item>\n  <ion-item>{{ packageName }}</ion-item>\n  <ion-item>{{ versionCode }}</ion-item>\n  <ion-item>{{ versionNumber }}</ion-item>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__["a" /* AppVersion */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabWalletsPageModule", function() { return TabWalletsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_wallets__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_material_icons__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fillter_wallets_filter__ = __webpack_require__(1412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TabWalletsPageModule = (function () {
    function TabWalletsPageModule() {
    }
    TabWalletsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tab_wallets__["a" /* TabWalletsPage */], __WEBPACK_IMPORTED_MODULE_5__fillter_wallets_filter__["a" /* FilterWalletsPipe */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_4_ionic2_material_icons__["a" /* MaterialIconsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_wallets__["a" /* TabWalletsPage */]), __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__tab_wallets__["a" /* TabWalletsPage */]]
        })
    ], TabWalletsPageModule);
    return TabWalletsPageModule;
}());

//# sourceMappingURL=tab-wallets.module.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabWalletsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_address_wallet_address__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallet_select_coins_wallet_select_coins__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__secret_create_secret_create__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var TabWalletsPage = (function () {
    function TabWalletsPage(navController, navParams, secretsProvider) {
        this.navController = navController;
        this.navParams = navParams;
        this.secretsProvider = secretsProvider;
        this.wallets = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    TabWalletsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var secrets = this.secretsProvider.currentSecretsList.asObservable();
        secrets.subscribe(function (list) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secretsProvider.isReady()];
                    case 1:
                        _a.sent();
                        if (list.length === 0) {
                            this.navController.push(__WEBPACK_IMPORTED_MODULE_6__secret_create_secret_create__["a" /* SecretCreatePage */]).catch(Object(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    TabWalletsPage.prototype.ionViewDidEnter = function () {
        if (this.secretsProvider.getActiveSecret()) {
            this.activeSecret = this.secretsProvider.getActiveSecret();
            this.wallets.next(this.activeSecret.wallets);
        }
    };
    TabWalletsPage.prototype.onSecretChanged = function (secret) {
        this.activeSecret = secret;
        this.wallets.next(this.activeSecret.wallets);
    };
    TabWalletsPage.prototype.goToReceiveAddress = function (wallet) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_2__wallet_address_wallet_address__["a" /* WalletAddressPage */], { wallet: wallet }).catch(Object(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    TabWalletsPage.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        if (val && val !== '') {
            val = val.trim().toLowerCase();
            this.symbolFilter = val;
        }
        else {
            this.symbolFilter = null;
        }
    };
    TabWalletsPage.prototype.addWallet = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_4__wallet_select_coins_wallet_select_coins__["a" /* WalletSelectCoinsPage */]).catch(Object(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    TabWalletsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-wallets',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/tab-wallets/tab-wallets.html"*/'<ion-header no-border class="colored-background">\n  <ion-navbar color="secondary">\n    <ion-title>{{ \'tab-wallets.title\' | translate }}</ion-title>\n  </ion-navbar>\n\n  <div padding-horizontal><current-secret [chosenSecret]="activeSecret" (secretChanged)="onSecretChanged($event)"></current-secret></div>\n\n  <ion-searchbar\n    class="colored-background"\n    placeholder="{{ \'tab-wallets.search_placeholder\' | translate }}"\n    (ionInput)="filterItems($event)"\n  ></ion-searchbar>\n</ion-header>\n\n<ion-content *ngIf="wallets" padding>\n  <ion-list *ngFor="let wallet of (wallets | async | filterWallets: { symbol: symbolFilter })">\n    <wallet-item [wallet]="wallet" (click)="goToReceiveAddress(wallet)"></wallet-item>\n  </ion-list>\n\n  <div class="empty-list" *ngIf="wallets && (wallets | async | filterWallets: { symbol: symbolFilter }).length === 0">\n    <img src="./assets/img/no-wallet-added-onboarding.svg" />\n    <p>\n      <strong>{{ \'tab-wallets.empty-state_text\' | translate }}</strong>\n    </p>\n  </div>\n\n  <ion-fab bottom right>\n    <button id="btn-add-wallet" default ion-button color="secondary" (click)="addWallet()" round icon-left>\n      <ion-icon name="add"></ion-icon>\n      {{ \'tab-wallets.add-wallet_label\' | translate }}\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/tab-wallets/tab-wallets.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_secrets_secrets_provider__["a" /* SecretsProvider */]])
    ], TabWalletsPage);
    return TabWalletsPage;
}());

//# sourceMappingURL=tab-wallets.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_edit_popover_wallet_edit_popover_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clipboard_clipboard__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_share_url_share_url__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_interaction_interaction__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var WalletAddressPage = (function () {
    function WalletAddressPage(popoverCtrl, toastController, clipboardProvider, navController, navParams, secretsProvider, platform, shareUrlProvider, interactionProvider) {
        this.popoverCtrl = popoverCtrl;
        this.toastController = toastController;
        this.clipboardProvider = clipboardProvider;
        this.navController = navController;
        this.navParams = navParams;
        this.secretsProvider = secretsProvider;
        this.platform = platform;
        this.shareUrlProvider = shareUrlProvider;
        this.interactionProvider = interactionProvider;
        this.wallet = this.navParams.get('wallet');
    }
    WalletAddressPage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shareUrlProvider.generateShareURL(this.wallet)];
                    case 1:
                        _a.walletShareUrl = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletAddressPage.prototype.done = function () {
        this.navController.pop().catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    WalletAddressPage.prototype.share = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.interactionProvider.startInteraction(this.navController, {
                    operationType: __WEBPACK_IMPORTED_MODULE_7__providers_interaction_interaction__["b" /* InteractionOperationType */].WALLET_SYNC,
                    url: this.walletShareUrl
                }, this.secretsProvider.getActiveSecret());
                return [2 /*return*/];
            });
        });
    };
    WalletAddressPage.prototype.presentEditPopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__wallet_edit_popover_wallet_edit_popover_component__["a" /* WalletEditPopoverComponent */], {
            wallet: this.wallet,
            walletShareUrl: this.walletShareUrl,
            onDelete: function () {
                _this.done();
            }
        });
        popover
            .present({
            ev: event
        })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
    };
    WalletAddressPage.prototype.copyAddressToClipboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clipboardProvider.copyAndShowToast(this.wallet.receivingPublicAddress)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet-address',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/wallet-address/wallet-address.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      <p ion-text color="white">{{ \'wallet-address.title\' | translate }}</p>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only color="dark" (click)="presentEditPopover($event)"><ion-icon name="more"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="colored-background">\n  <ion-row padding>\n    <ion-col>\n      <ion-avatar><identicon [address]="wallet.receivingPublicAddress"></identicon></ion-avatar>\n      <currency-symbol class="symbol--icon" [symbol]="wallet.coinProtocol.symbol"></currency-symbol>\n    </ion-col>\n    <ion-col>\n      <h2>{{ wallet.coinProtocol.name }} {{ wallet.coinProtocol.symbol }}</h2>\n      <p>\n        {{ \'wallet-address.address_label\' | translate }}\n        <br />\n        <span class="selectable typography--mono" (click)="copyAddressToClipboard()">{{ wallet.receivingPublicAddress }}</span>\n      </p>\n      <p>\n        {{ \'wallet-address.path_label\' | translate }}\n        <br />\n        <span class="selectable typography--mono">{{ wallet.derivationPath }}</span>\n      </p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row justify-content-center padding-bottom>\n    <qr-clipboard [qrdata]="wallet.receivingPublicAddress" [level]="\'L\'" [size]="300"></qr-clipboard>\n  </ion-row>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button default ion-button color="light" (click)="share()" round item-right>{{ \'wallet-address.sync_label\' | translate }}</button>\n      <button default ion-button color="primary" (click)="done()" round item-right>{{ \'wallet-address.done_label\' | translate }}</button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/wallet-address/wallet-address.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_clipboard_clipboard__["a" /* ClipboardProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_secrets_secrets_provider__["a" /* SecretsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_share_url_share_url__["a" /* ShareUrlProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_interaction_interaction__["c" /* InteractionProvider */]])
    ], WalletAddressPage);
    return WalletAddressPage;
}());

//# sourceMappingURL=wallet-address.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletEditPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clipboard_clipboard__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var WalletEditPopoverComponent = (function () {
    function WalletEditPopoverComponent(alertCtrl, clipboardProvider, toastController, navParams, secretsProvider, viewCtrl, translateService) {
        this.alertCtrl = alertCtrl;
        this.clipboardProvider = clipboardProvider;
        this.toastController = toastController;
        this.navParams = navParams;
        this.secretsProvider = secretsProvider;
        this.viewCtrl = viewCtrl;
        this.translateService = translateService;
        this.wallet = this.navParams.get('wallet');
        this.onDelete = this.navParams.get('onDelete');
        this.walletShareUrl = this.navParams.get('walletShareUrl');
    }
    WalletEditPopoverComponent.prototype.copyAddressToClipboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clipboardProvider.copyAndShowToast(this.wallet.receivingPublicAddress, this.translateService.instant('wallet-edit-delete-popover.confirm_address_copy'))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.viewCtrl.dismiss()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletEditPopoverComponent.prototype.copyShareUrlToClipboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clipboardProvider.copyAndShowToast(this.walletShareUrl, this.translateService.instant('wallet-edit-delete-popover.confirm_sync_code_copy'))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.viewCtrl.dismiss()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletEditPopoverComponent.prototype.delete = function () {
        var _this = this;
        this.translateService
            .get([
            'wallet-edit-delete-popover.account-removal_alert.title',
            'wallet-edit-delete-popover.account-removal_alert.text',
            'wallet-edit-delete-popover.account-removal_alert.cancel_label',
            'wallet-edit-delete-popover.account-removal_alert.delete_label'
        ])
            .subscribe(function (values) {
            var title = values['wallet-edit-delete-popover.account-removal_alert.title'];
            var message = values['wallet-edit-delete-popover.account-removal_alert.text'];
            var text1 = values['wallet-edit-delete-popover.account-removal_alert.cancel_label'];
            var text2 = values['wallet-edit-delete-popover.account-removal_alert.delete_label'];
            var alert = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [
                    {
                        text: text1,
                        role: 'cancel',
                        handler: function () {
                            _this.viewCtrl.dismiss().catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
                        }
                    },
                    {
                        text: text2,
                        handler: function () {
                            alert.present().catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
                            _this.secretsProvider
                                .removeWallet(_this.wallet)
                                .then(function () {
                                _this.viewCtrl.dismiss().catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
                                if (_this.onDelete) {
                                    _this.onDelete();
                                }
                            })
                                .catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
                        }
                    }
                ]
            });
            alert.present().catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_ALERT));
        });
    };
    WalletEditPopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list no-lines no-detail>\n      <ion-list-header>{{ 'wallet-edit-delete-popover.settings_label' | translate }}</ion-list-header>\n      <button ion-item detail-none (click)=\"copyAddressToClipboard()\">\n        <ion-icon name=\"clipboard\" color=\"dark\" item-end></ion-icon>\n        {{ 'wallet-edit-delete-popover.copy_label' | translate }}\n      </button>\n      <button ion-item detail-none (click)=\"copyShareUrlToClipboard()\">\n        <ion-icon name=\"clipboard\" color=\"dark\" item-end></ion-icon>\n        {{ 'wallet-edit-delete-popover.copy_sync_code' | translate }}\n      </button>\n      <button ion-item detail-none (click)=\"delete()\">\n        <ion-icon name=\"trash\" color=\"dark\" item-end></ion-icon>\n        {{ 'wallet-edit-delete-popover.account-removal_alert.delete_label' | translate }}\n      </button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_clipboard_clipboard__["a" /* ClipboardProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_secrets_secrets_provider__["a" /* SecretsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateService */]])
    ], WalletEditPopoverComponent);
    return WalletEditPopoverComponent;
}());

//# sourceMappingURL=wallet-edit-popover.component.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_scan_tab_scan__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_wallets_tab_wallets__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_settings_tab_settings__ = __webpack_require__(687);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPage = (function () {
    function TabsPage() {
        this.tabWallets = __WEBPACK_IMPORTED_MODULE_2__tab_wallets_tab_wallets__["a" /* TabWalletsPage */];
        this.tabScan = __WEBPACK_IMPORTED_MODULE_1__tab_scan_tab_scan__["a" /* TabScanPage */];
        this.tabSettings = __WEBPACK_IMPORTED_MODULE_3__tab_settings_tab_settings__["a" /* TabSettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/tabs/tabs.html"*/'<!-- For translations to work, the "tabTitle" needs to start with a space. -->\n<!-- https://forum.ionicframework.com/t/tabs-tabtitle-not-translate/65923/6 -->\n<ion-tabs>\n  <ion-tab tabIcon="list" [root]="tabWallets" tabTitle=" {{\'tabs.wallets\'|translate}}"></ion-tab>\n  <ion-tab tabIcon="barcode" [root]="tabScan" tabTitle=" {{\'tabs.scanner\'|translate}}"></ion-tab>\n  <ion-tab tabIcon="settings" [root]="tabSettings" tabTitle=" {{\'tabs.settings\'|translate}}"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/tabs/tabs.html"*/
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailPageModule", function() { return TransactionDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_detail__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TransactionDetailPageModule = (function () {
    function TransactionDetailPageModule() {
    }
    TransactionDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__transaction_detail__["a" /* TransactionDetailPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_detail__["a" /* TransactionDetailPage */]), __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__transaction_detail__["a" /* TransactionDetailPage */]]
        })
    ], TransactionDetailPageModule);
    return TransactionDetailPageModule;
}());

//# sourceMappingURL=transaction-detail.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionSignedPageModule", function() { return TransactionSignedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_signed__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularx_qrcode__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TransactionSignedPageModule = (function () {
    function TransactionSignedPageModule() {
    }
    TransactionSignedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__transaction_signed__["a" /* TransactionSignedPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_4_angularx_qrcode__["a" /* QRCodeModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_signed__["a" /* TransactionSignedPage */]), __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__transaction_signed__["a" /* TransactionSignedPage */]]
        })
    ], TransactionSignedPageModule);
    return TransactionSignedPageModule;
}());

//# sourceMappingURL=transaction-signed.module.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletAddressPageModule", function() { return WalletAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_address__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularx_qrcode__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_material_icons__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wallet_edit_popover_wallet_edit_popover_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var WalletAddressPageModule = (function () {
    function WalletAddressPageModule() {
    }
    WalletAddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__wallet_address__["a" /* WalletAddressPage */], __WEBPACK_IMPORTED_MODULE_6__wallet_edit_popover_wallet_edit_popover_component__["a" /* WalletEditPopoverComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_4_angularx_qrcode__["a" /* QRCodeModule */], __WEBPACK_IMPORTED_MODULE_5_ionic2_material_icons__["a" /* MaterialIconsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wallet_address__["a" /* WalletAddressPage */]), __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__wallet_address__["a" /* WalletAddressPage */], __WEBPACK_IMPORTED_MODULE_6__wallet_edit_popover_wallet_edit_popover_component__["a" /* WalletEditPopoverComponent */]]
        })
    ], WalletAddressPageModule);
    return WalletAddressPageModule;
}());

//# sourceMappingURL=wallet-address.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletSelectCoinsPageModule", function() { return WalletSelectCoinsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_select_coins__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WalletSelectCoinsPageModule = (function () {
    function WalletSelectCoinsPageModule() {
    }
    WalletSelectCoinsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__wallet_select_coins__["a" /* WalletSelectCoinsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wallet_select_coins__["a" /* WalletSelectCoinsPage */]), __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */]]
        })
    ], WalletSelectCoinsPageModule);
    return WalletSelectCoinsPageModule;
}());

//# sourceMappingURL=wallet-select-coins.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletSharePageModule", function() { return WalletSharePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_share__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularx_qrcode__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_material_icons__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_share_url_share_url__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var WalletSharePageModule = (function () {
    function WalletSharePageModule() {
    }
    WalletSharePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__wallet_share__["a" /* WalletSharePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_4_angularx_qrcode__["a" /* QRCodeModule */], __WEBPACK_IMPORTED_MODULE_5_ionic2_material_icons__["a" /* MaterialIconsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wallet_share__["a" /* WalletSharePage */]), __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__wallet_share__["a" /* WalletSharePage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__providers_share_url_share_url__["a" /* ShareUrlProvider */]]
        })
    ], WalletSharePageModule);
    return WalletSharePageModule;
}());

//# sourceMappingURL=wallet-share.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningsModalPageModule", function() { return WarningsModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__warnings_modal__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_secure_storage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_secure_storage_factory__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var WarningsModalPageModule = (function () {
    function WarningsModalPageModule() {
    }
    WarningsModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__warnings_modal__["b" /* WarningsModalPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__warnings_modal__["b" /* WarningsModalPage */]), __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__warnings_modal__["b" /* WarningsModalPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__providers_storage_secure_storage__["a" /* SecureStorageService */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_4__providers_storage_secure_storage_factory__["a" /* SecureStorageFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]]
                }
            ]
        })
    ], WarningsModalPageModule);
    return WarningsModalPageModule;
}());

//# sourceMappingURL=warnings-modal.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WarningsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_secure_storage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Warning;
(function (Warning) {
    Warning[Warning["SECURE_STORAGE"] = 0] = "SECURE_STORAGE";
    Warning[Warning["ROOT"] = 1] = "ROOT";
    Warning[Warning["SCREENSHOT"] = 2] = "SCREENSHOT";
    Warning[Warning["NETWORK"] = 3] = "NETWORK";
    Warning[Warning["INITIAL_DISCLAIMER"] = 4] = "INITIAL_DISCLAIMER";
})(Warning || (Warning = {}));
var WarningsModalPage = (function () {
    function WarningsModalPage(navParams, secureStorage, platform, viewCtrl, storage, translateService) {
        this.navParams = navParams;
        this.secureStorage = secureStorage;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.translateService = translateService;
        this.buttonText = 'Ok';
        this.errorType = navParams.get('errorType');
    }
    WarningsModalPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.errorType === Warning.ROOT) {
            this.title = 'Your device is rooted';
            this.description =
                'It seems like you have rooted your device. While we think this is neat, it weakens the security of your device significantly and we multiple mechanisms of AirGap can be circumvented by other apps. Therefore, AirGap is not able to run on this device.';
            this.imageUrl = './assets/img/root_detection.svg';
            this.handler = function () {
                _this.platform.exitApp();
            };
        }
        if (this.errorType === Warning.SCREENSHOT) {
            this.title = 'Screenshot detected';
            this.description =
                'Looks like you just took a screenshot. Make sure that you never take a screenshot you might expose your secret key.';
            this.imageUrl = './assets/img/screenshot_detected.svg';
            this.handler = function () {
                _this.platform.exitApp();
            };
        }
        if (this.errorType === Warning.SECURE_STORAGE) {
            this.title = 'Device Unsecure';
            this.description =
                'Your lockscreen needs to be setup in order to properly encrypt and protect your secrets. After securing your device, please close and restart AirGap.';
            this.imageUrl = './assets/img/screenshot_detected.svg';
            this.buttonText = 'Secure Device';
            this.handler = function () {
                _this.secureStorage.secureDevice().catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
            };
        }
        if (this.errorType === Warning.NETWORK) {
            this.title = 'Network Connection detected';
            this.description =
                'Looks like you have connected this device to a network. The AirGap App has no network priviledges but it is best to disconnect the device entierly from any network.';
            this.imageUrl = './assets/img/network_connection.svg';
            this.handler = function () {
                _this.platform.exitApp();
            };
        }
        if (this.errorType === Warning.INITIAL_DISCLAIMER) {
            this.translateService
                .get([
                'warnings-modal.disclaimer.title',
                'warnings-modal.disclaimer.text',
                'warnings-modal.disclaimer.disclaimer-list.text',
                'warnings-modal.disclaimer.disclaimer-list.item-1_text',
                'warnings-modal.disclaimer.disclaimer-list.item-2_text',
                'warnings-modal.disclaimer.description',
                'warnings-modal.disclaimer.understood_label'
            ])
                .subscribe(function (values) {
                var title = values['warnings-modal.disclaimer.title'];
                var text = values['warnings-modal.disclaimer.text'];
                var list_text = values['warnings-modal.disclaimer.disclaimer-list.text'];
                var list_item1_text = values['warnings-modal.disclaimer.disclaimer-list.item-1_text'];
                var list_item2_text = values['warnings-modal.disclaimer.disclaimer-list.item-2_text'];
                var description_text = values['warnings-modal.disclaimer.description'];
                var label = values['warnings-modal.disclaimer.understood_label'];
                _this.title = title;
                _this.description =
                    '<p><strong>' +
                        text +
                        '</strong></p><p>' +
                        list_text +
                        '<ul><li>' +
                        list_item1_text +
                        '</li><li>' +
                        list_item2_text +
                        '</li></ul></p><p>' +
                        description_text +
                        '</p>';
                _this.imageUrl = null;
                _this.buttonText = label;
                _this.handler = function () {
                    _this.storage
                        .set('DISCLAIMER_INITIAL', true)
                        .then(function () {
                        _this.viewCtrl.dismiss().catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_MODAL));
                    })
                        .catch(Object(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_5__providers_error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
                };
            });
        }
    };
    WarningsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-warnings-modal',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/warnings-modal/warnings-modal.html"*/'<ion-header transparent no-border>\n  <ion-navbar transparent>\n    <ion-title><p ion-text color="white">{{ title }}</p></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="colored-background">\n  <ion-row padding-horizontal [innerHtml]="description"></ion-row>\n\n  <ion-row *ngIf="imageUrl" justify-content-center><img class="warning-img" [src]="imageUrl" /></ion-row>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button default (click)="handler()" ion-button color="primary" round item-right>{{ buttonText }}</button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/warnings-modal/warnings-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_secure_storage__["a" /* SecureStorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateService */]])
    ], WarningsModalPage);
    return WarningsModalPage;
}());

//# sourceMappingURL=warnings-modal.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartupChecksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jasmine__ = __webpack_require__(1432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jasmine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jasmine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_introduction_introduction__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_warnings_modal_warnings_modal__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_device__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__storage_secure_storage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_distribution_onboarding_distribution_onboarding__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var StartupChecksProvider = (function () {
    function StartupChecksProvider(secureStorage, deviceProvider, modalController, storage) {
        var _this = this;
        this.modalController = modalController;
        this.storage = storage;
        this.checks = [
            {
                name: 'rootCheck',
                check: function () { return deviceProvider.checkForRoot(); },
                outcome: false,
                consequence: function (cb) {
                    _this.presentModal(__WEBPACK_IMPORTED_MODULE_3__pages_warnings_modal_warnings_modal__["b" /* WarningsModalPage */], { errorType: __WEBPACK_IMPORTED_MODULE_3__pages_warnings_modal_warnings_modal__["a" /* Warning */].ROOT }, cb);
                }
            },
            {
                name: 'deviceSecureCheck',
                check: function () { return secureStorage.isDeviceSecure(); },
                outcome: true,
                consequence: function (cb) {
                    _this.presentModal(__WEBPACK_IMPORTED_MODULE_3__pages_warnings_modal_warnings_modal__["b" /* WarningsModalPage */], { errorType: __WEBPACK_IMPORTED_MODULE_3__pages_warnings_modal_warnings_modal__["a" /* Warning */].SECURE_STORAGE }, cb);
                }
            },
            {
                name: 'disclaimerAcceptedCheck',
                check: function () { return _this.storage.get('DISCLAIMER_INITIAL'); },
                outcome: true,
                consequence: function (cb) {
                    _this.presentModal(__WEBPACK_IMPORTED_MODULE_3__pages_warnings_modal_warnings_modal__["b" /* WarningsModalPage */], { errorType: __WEBPACK_IMPORTED_MODULE_3__pages_warnings_modal_warnings_modal__["a" /* Warning */].INITIAL_DISCLAIMER }, cb);
                }
            },
            {
                name: 'introductionAcceptedCheck',
                check: function () { return _this.storage.get('INTRODUCTION_INITIAL'); },
                outcome: true,
                consequence: function (cb) {
                    _this.presentModal(__WEBPACK_IMPORTED_MODULE_2__pages_introduction_introduction__["a" /* IntroductionPage */], {}, cb);
                }
            },
            {
                name: 'electronCheck',
                check: function () {
                    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var isElectron, hasShownDisclaimer;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, deviceProvider.checkForElectron()];
                                case 1:
                                    isElectron = _a.sent();
                                    return [4 /*yield*/, this.storage.get('DISCLAIMER_ELECTRON')];
                                case 2:
                                    hasShownDisclaimer = _a.sent();
                                    resolve(!isElectron || hasShownDisclaimer);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                },
                outcome: true,
                consequence: function (cb) {
                    _this.presentModal(__WEBPACK_IMPORTED_MODULE_8__pages_distribution_onboarding_distribution_onboarding__["a" /* DistributionOnboardingPage */], {}, cb);
                }
            }
        ];
    }
    StartupChecksProvider.prototype.presentModal = function (page, modalConfig, callback) {
        var modal = this.modalController.create(page, modalConfig, { enableBackdropDismiss: false });
        modal.onDidDismiss(function (_data) { return callback(); });
        modal
            .present()
            .then(function () {
            console.log('check modal presented');
        })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_9__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_9__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_MODAL));
    };
    StartupChecksProvider.prototype.initChecks = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.checks
                .reduce(function (promiseChain, currentTask) {
                return promiseChain.then(function (chainResults) { return currentTask.check().then(function (currentResult) { return chainResults.concat([currentResult]); }); });
            }, Promise.resolve([]))
                .then(function (arrayOfResults) {
                var failedIndex = arrayOfResults.findIndex(function (val, index) {
                    if (typeof val === 'number') {
                        val = Boolean(val).valueOf();
                    }
                    return val !== _this.checks[index].outcome;
                });
                if (failedIndex === -1) {
                    resolve();
                    return;
                }
                reject(_this.checks[failedIndex]);
            })
                .catch(Object(__WEBPACK_IMPORTED_MODULE_9__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_9__error_handler_error_handler__["a" /* ErrorCategory */].INIT_CHECK));
        });
    };
    StartupChecksProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__storage_secure_storage__["a" /* SecureStorageService */],
            __WEBPACK_IMPORTED_MODULE_4__device_device__["a" /* DeviceProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], StartupChecksProvider);
    return StartupChecksProvider;
}());

//# sourceMappingURL=startup-checks.provider.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IntroductionPage = (function () {
    function IntroductionPage(viewController, platform, storage) {
        this.viewController = viewController;
        this.platform = platform;
        this.storage = storage;
        this.security = 'highest';
    }
    IntroductionPage.prototype.accept = function () {
        var _this = this;
        this.storage
            .set('INTRODUCTION_INITIAL', true)
            .then(function () {
            _this.viewController.dismiss().catch(Object(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["a" /* ErrorCategory */].IONIC_MODAL));
        })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["a" /* ErrorCategory */].SECURE_STORAGE));
    };
    IntroductionPage.prototype.downloadClient = function () {
        this.openUrl('https://github.com/airgap-it');
    };
    IntroductionPage.prototype.downloadApp = function () {
        // This should open App Store and not InAppBrowser
        if (this.platform.is('android')) {
            window.open('https://play.google.com/store/apps/details?id=it.airgap.wallet');
        }
        else if (this.platform.is('ios')) {
            window.open('itms-apps://itunes.apple.com/app/id1420996542'); // AirGap Wallet
        }
    };
    IntroductionPage.prototype.openUrl = function (url) {
        if (this.platform.is('ios') || this.platform.is('android')) {
            cordova.InAppBrowser.open(url, '_system', 'location=true');
        }
        else {
            window.open(url, '_blank');
        }
    };
    IntroductionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-introduction',template:/*ion-inline-start:"/Volumes/Work/airgap-it/airgap-vault/src/pages/introduction/introduction.html"*/'<ion-header transparent no-border>\n  <ion-navbar hideBackButton transparent>\n    <ion-title>{{ \'introduction.title\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding no-bounce fullscreen class="colored-background">\n  <ion-segment [(ngModel)]="security">\n    <ion-segment-button value="highest">{{ \'introduction.highest.label\' | translate }}</ion-segment-button>\n    <ion-segment-button value="medium">{{ \'introduction.medium.label\' | translate }}</ion-segment-button>\n  </ion-segment>\n\n  <ng-container *ngIf="security === \'highest\'">\n    <ion-row><p [innerHTML]="\'introduction.highest.text\' | translate"></p></ion-row>\n\n    <ion-row align-items-center>\n      <ion-col col-5><img src="assets/img/AirGap_Onboarding_Vault.svg" /></ion-col>\n      <ion-col col-7>\n        <h5>{{ \'introduction.vault.heading\' | translate }}</h5>\n        <p [innerHTML]="\'introduction.vault.text\' | translate"></p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-vertical align-items-center>\n      <ion-col col-5 text-center><img class="connector--img" src="assets/img/qrcode.svg" /></ion-col>\n      <ion-col col-7>\n        <strong>{{ \'introduction.communication.highest_text\' | translate }}</strong>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-top align-items-center>\n      <ion-col col-5><img src="assets/img/AirGap_Onboarding_Wallet.svg" /></ion-col>\n      <ion-col col-7>\n        <h5>{{ \'introduction.wallet.heading\' | translate }}</h5>\n        <p>{{ \'introduction.wallet.text\' | translate }}</p>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n\n  <ng-container *ngIf="security === \'medium\'">\n    <ion-row><p [innerHTML]="\'introduction.medium.text\' | translate"></p></ion-row>\n\n    <ion-row align-items-center>\n      <ion-col col-5><img src="assets/img/AirGap_Onboarding_Vault.svg" /></ion-col>\n      <ion-col col-7>\n        <h5>{{ \'introduction.vault.heading\' | translate }}</h5>\n        <p [innerHTML]="\'introduction.vault.text\' | translate"></p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-vertical align-items-center>\n      <ion-col col-5 text-center><img class="connector--img" src="assets/img/clone.svg" /></ion-col>\n      <ion-col col-7>\n        <strong>{{ \'introduction.communication.medium_text\' | translate }}</strong>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-top align-items-center>\n      <ion-col col-5><img src="assets/img/AirGap_Onboarding_Wallet.svg" /></ion-col>\n      <ion-col col-7>\n        <h5>{{ \'introduction.wallet.heading\' | translate }}</h5>\n        <p>{{ \'introduction.wallet.text\' | translate }}</p>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar padding transparent>\n    <ion-row justify-content-end>\n      <button ion-button round color="light" (click)="downloadApp()">{{ \'introduction.wallet_install_label\' | translate }}</button>\n      <button ion-button round color="primary" (click)="accept()">{{ \'introduction.continue_label\' | translate }}</button>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Work/airgap-it/airgap-vault/src/pages/introduction/introduction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], IntroductionPage);
    return IntroductionPage;
}());

//# sourceMappingURL=introduction.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var DeviceProvider = (function () {
    function DeviceProvider(platform) {
        this.platform = platform;
    }
    DeviceProvider.prototype.checkForRoot = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.platform.is('android') && _this.platform.is('cordova')) {
                // TODO build own android root detection with https://github.com/scottyab/rootbeer
                rootdetection.isDeviceRooted(resolve, reject);
            }
            else if (_this.platform.is('ios') && _this.platform.is('cordova')) {
                jailbreakdetection.isJailbroken(resolve, reject);
            }
            else {
                console.warn('root detection skipped - no supported platform');
                resolve(false);
            }
        });
    };
    DeviceProvider.prototype.checkForElectron = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0];
            });
        });
    };
    DeviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], DeviceProvider);
    return DeviceProvider;
}());

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib_dist_utils_supportedProtocols__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib_dist_utils_supportedProtocols___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib_dist_utils_supportedProtocols__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_airgap_coin_lib_dist_protocols_ethereum_erc20_AeToken__ = __webpack_require__(1448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_airgap_coin_lib_dist_protocols_ethereum_erc20_AeToken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_airgap_coin_lib_dist_protocols_ethereum_erc20_AeToken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tokens__ = __webpack_require__(1449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProtocolsProvider = (function () {
    function ProtocolsProvider() {
        this.subProtocols = [
            {
                protocol: 'eth',
                subProtocols: [
                    {
                        symbol: 'AE-ERC20',
                        name: 'æternity Ethereum Token',
                        marketSymbol: 'ae',
                        identifier: 'eth-erc20-ae',
                        contractAddress: '0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d',
                        decimals: 18
                    }
                ]
            }
        ];
        /* */
    }
    ProtocolsProvider.prototype.addProtocols = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2_airgap_coin_lib_dist_utils_supportedProtocols__["addSupportedProtocol"])(__WEBPACK_IMPORTED_MODULE_3_airgap_coin_lib_dist_protocols_ethereum_erc20_AeToken__["AeternityERC20Token"]);
        Object(__WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__["addSubProtocol"])('xtz', new __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__["TezosKtProtocol"]());
        this.subProtocols.forEach(function (supportedSubAccount) {
            supportedSubAccount.subProtocols.forEach(function (subProtocol) {
                Object(__WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__["addSubProtocol"])(supportedSubAccount.protocol, new __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__["GenericERC20"]({
                    symbol: subProtocol.symbol,
                    name: subProtocol.name,
                    marketSymbol: subProtocol.marketSymbol,
                    identifier: subProtocol.identifier,
                    contractAddress: subProtocol.contractAddress,
                    decimals: subProtocol.decimals
                }));
            });
        });
        __WEBPACK_IMPORTED_MODULE_4__tokens__["a" /* tokens */].forEach(function (token) {
            Object(__WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__["addSubProtocol"])('eth', new __WEBPACK_IMPORTED_MODULE_1_airgap_coin_lib__["GenericERC20"]({
                symbol: token.symbol,
                name: token.name,
                marketSymbol: token.marketSymbol,
                identifier: token.identifier,
                contractAddress: token.contractAddress,
                decimals: token.decimals
            }));
        });
    };
    ProtocolsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProtocolsProvider);
    return ProtocolsProvider;
}());

//# sourceMappingURL=protocols.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CameraFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camera_browser_service__ = __webpack_require__(1454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__camera_native_service__ = __webpack_require__(189);


function CameraFactory(platform, cameraPreview, rendererFactory, permissionsProvider) {
    if (platform.is('cordova')) {
        return new __WEBPACK_IMPORTED_MODULE_1__camera_native_service__["a" /* CameraNativeService */](platform, cameraPreview, rendererFactory, permissionsProvider);
    }
    else {
        return new __WEBPACK_IMPORTED_MODULE_0__camera_browser_service__["a" /* CameraBrowserService */]();
    }
}
//# sourceMappingURL=camera.factory.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AudioServiceFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_browser_service__ = __webpack_require__(1455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_native_service__ = __webpack_require__(197);


function AudioServiceFactory(platform, permissionsProvider) {
    if (platform.is('cordova')) {
        return new __WEBPACK_IMPORTED_MODULE_1__audio_native_service__["a" /* AudioNativeService */](platform, permissionsProvider);
    }
    else {
        return new __WEBPACK_IMPORTED_MODULE_0__audio_browser_service__["a" /* AudioBrowserService */]();
    }
}
//# sourceMappingURL=audio.factory.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = GyroscopeServiceFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gyroscope_native_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entropy_dummy_entropy_service__ = __webpack_require__(1456);


function GyroscopeServiceFactory(platform, deviceMotion) {
    if (platform.is('cordova')) {
        return new __WEBPACK_IMPORTED_MODULE_0__gyroscope_native_service__["a" /* GyroscopeNativeService */](platform, deviceMotion);
    }
    else {
        return new __WEBPACK_IMPORTED_MODULE_1__entropy_dummy_entropy_service__["a" /* DummyEntropyService */]();
    }
}
//# sourceMappingURL=gyroscope.factory.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(763);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return InteractionSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionCommunicationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InteractionOperationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return InteractionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deep_link_deep_link__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_wallet_share_wallet_share__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_transaction_signed_transaction_signed__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InteractionSetting;
(function (InteractionSetting) {
    InteractionSetting["UNDETERMINED"] = "undetermined";
    InteractionSetting["ALWAYS_ASK"] = "always";
    InteractionSetting["SAME_DEVICE"] = "same_device";
    InteractionSetting["OFFLINE_DEVICE"] = "offline_device";
})(InteractionSetting || (InteractionSetting = {}));
var InteractionCommunicationType;
(function (InteractionCommunicationType) {
    InteractionCommunicationType["QR"] = "qr";
    InteractionCommunicationType["DEEPLINK"] = "deeplink";
})(InteractionCommunicationType || (InteractionCommunicationType = {}));
var InteractionOperationType;
(function (InteractionOperationType) {
    InteractionOperationType["WALLET_SYNC"] = "walletSync";
    InteractionOperationType["TRANSACTION_BROADCAST"] = "transactionBroadcast";
})(InteractionOperationType || (InteractionOperationType = {}));
var InteractionProvider = (function () {
    function InteractionProvider(deepLinkProvider) {
        this.deepLinkProvider = deepLinkProvider;
    }
    InteractionProvider.prototype.startInteraction = function (navCtrl, interactionOptions, secret) {
        var interactionSetting = secret.interactionSetting;
        if (interactionOptions.communicationType) {
            if (interactionSetting === InteractionSetting.UNDETERMINED) {
                this.goToInteractionSelectionSettingsPage(navCtrl, interactionOptions);
            }
            if (interactionOptions.communicationType === InteractionCommunicationType.DEEPLINK) {
                this.startDeeplink(interactionOptions.url, navCtrl);
            }
            else if (interactionOptions.communicationType === InteractionCommunicationType.QR) {
                this.navigateToPageByOperationType(navCtrl, interactionOptions);
            }
        }
        else {
            switch (interactionSetting) {
                case InteractionSetting.UNDETERMINED:
                    this.goToInteractionSelectionPage(navCtrl, interactionOptions);
                    break;
                case InteractionSetting.ALWAYS_ASK:
                    this.goToInteractionSelectionPage(navCtrl, interactionOptions);
                    break;
                case InteractionSetting.SAME_DEVICE:
                    this.startDeeplink(interactionOptions.url, navCtrl);
                    break;
                case InteractionSetting.OFFLINE_DEVICE:
                    this.navigateToPageByOperationType(navCtrl, interactionOptions);
                    break;
            }
        }
    };
    InteractionProvider.prototype.goToInteractionSelectionPage = function (navCtrl, interactionOptions) {
        navCtrl
            .push('InteractionSelectionPage', {
            interactionOptions: interactionOptions
        })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    InteractionProvider.prototype.goToInteractionSelectionSettingsPage = function (navCtrl, interactionOptions) {
        navCtrl
            .push('InteractionSelectionSettingsPage', {
            interactionOptions: interactionOptions
        })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
    };
    InteractionProvider.prototype.navigateToPageByOperationType = function (navCtrl, interactionOptions) {
        // To ensure exhausting enum
        var assertNever = function (arg) {
            throw 'INVALID_OPERATION_TYPE';
        };
        if (interactionOptions.operationType === InteractionOperationType.WALLET_SYNC) {
            navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_wallet_share_wallet_share__["a" /* WalletSharePage */], { interactionUrl: interactionOptions.url }).catch(Object(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
        }
        else if (interactionOptions.operationType === InteractionOperationType.TRANSACTION_BROADCAST) {
            navCtrl
                .push(__WEBPACK_IMPORTED_MODULE_4__pages_transaction_signed_transaction_signed__["a" /* TransactionSignedPage */], {
                interactionUrl: interactionOptions.url,
                wallet: interactionOptions.wallet,
                signedTx: interactionOptions.signedTx,
                transaction: interactionOptions.transaction
            })
                .catch(Object(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
        }
        else {
            return assertNever(interactionOptions.operationType);
        }
    };
    InteractionProvider.prototype.startDeeplink = function (url, navController) {
        this.deepLinkProvider
            .sameDeviceDeeplink(url)
            .then(function () {
            navController.popToRoot().catch(Object(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["a" /* ErrorCategory */].IONIC_NAVIGATION));
        })
            .catch(Object(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["c" /* handleErrorLocal */])(__WEBPACK_IMPORTED_MODULE_1__error_handler_error_handler__["a" /* ErrorCategory */].DEEPLINK_PROVIDER));
    };
    InteractionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__deep_link_deep_link__["a" /* DeepLinkProvider */]])
    ], InteractionProvider);
    return InteractionProvider;
}());

//# sourceMappingURL=interaction.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(1431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera_preview__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_diagnostic__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_version__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic2_material_icons__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_secrets_secrets_provider__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_storage_secure_storage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_storage_secure_storage_factory__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_device_device__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_camera_camera_native_service__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_camera_camera_factory__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_audio_audio_native_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_audio_audio_factory__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_entropy_entropy_service__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_gyroscope_gyroscope_native_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_gyroscope_gyroscope_factory__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_components_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_pages_module__ = __webpack_require__(1457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_scanner_scanner__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_device_motion__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_startup_checks_startup_checks_provider__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_scheme_routing_scheme_routing__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_clipboard_clipboard__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_permissions_permissions__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_share_url_share_url__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_error_handler_error_handler__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_interaction_interaction__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_deep_link_deep_link__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_protocols_protocols__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13_ionic2_material_icons__["a" /* MaterialIconsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/distribution-onboarding/distribution-onboarding.module#DistributionOnboardingPageModule', name: 'DistributionOnboardingPage', segment: 'distribution-onboarding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interaction-selection-settings/interaction-selection-settings.module#InteractionSelectionSettingsPageModule', name: 'InteractionSelectionSettingsPage', segment: 'interaction-selection-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interaction-selection/interaction-selection.module#InteractionSelectionPageModule', name: 'InteractionSelectionPage', segment: 'interaction-selection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/local-authentication-onboarding/local-authentication-onboarding.module#LocalAuthenticationOnboardingPageModule', name: 'LocalAuthenticationOnboardingPage', segment: 'local-authentication-onboarding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/secret-create/secret-create.module#SecretCreatePageModule', name: 'SecretCreatePage', segment: 'secret-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/secret-edit/secret-edit.module#SecretEditPageModule', name: 'SecretEditPage', segment: 'secret-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/secret-generate-onboarding/secret-generate-onboarding.module#SecretGenerateOnboardingPageModule', name: 'SecretGenerateOnboardingPage', segment: 'secret-generate-onboarding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/secret-import/secret-import.module#SecretImportPageModule', name: 'SecretImportPage', segment: 'secret-import', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/secret-rules/secret-rules.module#SecretRulesPageModule', name: 'SecretRulesPage', segment: 'secret-rules', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/secret-show/secret-show.module#SecretShowPageModule', name: 'SecretShowPage', segment: 'secret-show', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-recovery-import/social-recovery-import.module#SocialRecoveryImportPageModule', name: 'SocialRecoveryImportPage', segment: 'social-recovery-import', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/secret-validate/secret-validate.module#SecretValidatePageModule', name: 'SecretValidatePage', segment: 'secret-validate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-recovery-setup/social-recovery-setup.module#SocialRecoverySetupPageModule', name: 'SocialRecoverySetupPage', segment: 'social-recovery-setup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-recovery-show-share/social-recovery-show-share.module#SocialRecoveryShowSharePageModule', name: 'SocialRecoveryShowSharePage', segment: 'social-recovery-show-share', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-recovery-validate-share/social-recovery-validate-share.module#SocialRecoveryValidateSharePageModule', name: 'SocialRecoveryValidateSharePage', segment: 'social-recovery-validate-share', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-scan/tab-scan.module#TabScanPageModule', name: 'TabScanPage', segment: 'tab-scan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-settings/tab-settings.module#TabSettingsPageModule', name: 'TabSettingsPage', segment: 'tab-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-wallets/tab-wallets.module#TabWalletsPageModule', name: 'TabWalletsPage', segment: 'tab-wallets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-detail/transaction-detail.module#TransactionDetailPageModule', name: 'TransactionDetailPage', segment: 'transaction-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-signed/transaction-signed.module#TransactionSignedPageModule', name: 'TransactionSignedPage', segment: 'transaction-signed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-address/wallet-address.module#WalletAddressPageModule', name: 'WalletAddressPage', segment: 'wallet-address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-select-coins/wallet-select-coins.module#WalletSelectCoinsPageModule', name: 'WalletSelectCoinsPage', segment: 'wallet-select-coins', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet-share/wallet-share.module#WalletSharePageModule', name: 'WalletSharePage', segment: 'wallet-share', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/warnings-modal/warnings-modal.module#WarningsModalPageModule', name: 'WarningsModalPage', segment: 'warnings-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_26__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__airgap_storage',
                    driverOrder: ['sqlite', 'localstorage']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera_preview__["a" /* CameraPreview */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_device_motion__["a" /* DeviceMotion */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_14__providers_secrets_secrets_provider__["a" /* SecretsProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_entropy_entropy_service__["a" /* EntropyService */],
                __WEBPACK_IMPORTED_MODULE_30__providers_startup_checks_startup_checks_provider__["a" /* StartupChecksProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_scanner_scanner__["a" /* ScannerProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__["a" /* Clipboard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_15__providers_storage_secure_storage__["a" /* SecureStorageService */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_16__providers_storage_secure_storage_factory__["a" /* SecureStorageFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_18__providers_camera_camera_native_service__["a" /* CameraNativeService */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_19__providers_camera_camera_factory__["a" /* CameraFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera_preview__["a" /* CameraPreview */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["X" /* RendererFactory2 */], __WEBPACK_IMPORTED_MODULE_33__providers_permissions_permissions__["c" /* PermissionsProvider */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_20__providers_audio_audio_native_service__["a" /* AudioNativeService */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_21__providers_audio_audio_factory__["a" /* AudioServiceFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_33__providers_permissions_permissions__["c" /* PermissionsProvider */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_23__providers_gyroscope_gyroscope_native_service__["a" /* GyroscopeNativeService */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_24__providers_gyroscope_gyroscope_factory__["a" /* GyroscopeServiceFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_29__ionic_native_device_motion__["a" /* DeviceMotion */]]
                },
                __WEBPACK_IMPORTED_MODULE_32__providers_clipboard_clipboard__["a" /* ClipboardProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_device_device__["a" /* DeviceProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_scheme_routing_scheme_routing__["a" /* SchemeRoutingProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_permissions_permissions__["c" /* PermissionsProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_interaction_interaction__["c" /* InteractionProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_share_url_share_url__["a" /* ShareUrlProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_error_handler_error_handler__["b" /* ErrorHandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_deep_link_deep_link__["a" /* DeepLinkProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_protocols_protocols__["a" /* ProtocolsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 909:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 910:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Secret; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_uuid__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BIP39Signer__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_interaction_interaction__ = __webpack_require__(76);



var signer = new __WEBPACK_IMPORTED_MODULE_1__BIP39Signer__["a" /* BIP39Signer */]();
var Secret = (function () {
    function Secret(seed, label, isParanoia, interactionSetting) {
        if (label === void 0) { label = ''; }
        if (isParanoia === void 0) { isParanoia = false; }
        if (interactionSetting === void 0) { interactionSetting = __WEBPACK_IMPORTED_MODULE_2__providers_interaction_interaction__["d" /* InteractionSetting */].UNDETERMINED; }
        this.id = __WEBPACK_IMPORTED_MODULE_0_angular2_uuid__["UUID"].UUID();
        this.label = label;
        this.isParanoia = isParanoia;
        this.interactionSetting = interactionSetting;
        // TODO: better check whether this is a mnemonic (validate)
        if (seed && seed.indexOf(' ') > -1) {
            seed = signer.mnemonicToEntropy(seed);
        }
        this.secretHex = seed;
    }
    Secret.prototype.flushSecret = function () {
        delete this.secretHex;
    };
    Secret.prototype.recoverMnemonicFromHex = function (hex) {
        return signer.entropyToMnemonic(hex);
    };
    Secret.prototype.hasTwofactor = function () {
        return this.twofactor && this.twofactor.length > 0;
    };
    Secret.generateSocialRecover = function (secret, numberOfShares, threshold) {
        return signer.generateSocialRecover(secret, numberOfShares, threshold);
    };
    Secret.recoverSecretFromShares = function (shares) {
        return signer.recoverKey(shares);
    };
    Secret.init = function (obj) {
        return Object.assign(new Secret(null, obj.label), obj);
    };
    return Secret;
}());

//# sourceMappingURL=secret.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecureStorageService = (function () {
    function SecureStorageService() {
    }
    SecureStorageService.prototype.create = function (alias, isParanoia) {
        return new window.SecureStorage(alias, isParanoia);
    };
    SecureStorageService.prototype.isDeviceSecure = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.create('airgap-secure-storage', false).isDeviceSecure(resolve, reject);
        });
    };
    SecureStorageService.prototype.secureDevice = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.create('airgap-secure-storage', false).secureDevice(resolve, reject);
        });
    };
    SecureStorageService.prototype.get = function (alias, isParanoia) {
        var secureStorage = this.create(alias, isParanoia);
        return new Promise(function (resolve, reject) {
            secureStorage.init(function () {
                resolve({
                    init: function () {
                        return new Promise(function (resolve, reject) {
                            secureStorage.init(resolve, reject);
                        });
                    },
                    setItem: function (key, value) {
                        return new Promise(function (resolve, reject) {
                            secureStorage.setItem(key, value, resolve, reject);
                        });
                    },
                    getItem: function (key) {
                        return new Promise(function (resolve, reject) {
                            secureStorage.getItem(key, resolve, reject);
                        });
                    },
                    removeItem: function (key) {
                        return new Promise(function (resolve, reject) {
                            secureStorage.removeItem(key, resolve, reject);
                        });
                    }
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    SecureStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SecureStorageService);
    return SecureStorageService;
}());

//# sourceMappingURL=secure-storage.js.map

/***/ })

},[758]);
//# sourceMappingURL=main.js.map