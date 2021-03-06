"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var TextBannerService = (function () {
    function TextBannerService(http) {
        this.http = http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.textBannerUrl = 'app/textBanner.json'; // URL to web API
    }
    TextBannerService.prototype.getTextBanner = function () {
        return this.http.get(this.textBannerUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //   getTextBanner(): Observable<TextBanner[]> {
    //     return this.http.get(this.TextBannerUrl)
    //                     .map(this.extractData)
    //                     .catch(this.handleError);
    //   }
    TextBannerService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    TextBannerService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    TextBannerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TextBannerService);
    return TextBannerService;
}());
exports.TextBannerService = TextBannerService;
//# sourceMappingURL=textBanner.services.js.map