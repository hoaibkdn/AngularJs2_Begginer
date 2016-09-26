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
// import {Router} from '@angular/router';
var textBanner_services_1 = require('./textBanner.services');
var MENUITEMS = [
    { name: 'Candidates' },
    { name: 'Blog' },
    { name: 'About' },
    { name: 'Contact' },
    { name: 'Job' },
    { name: 'Home' }
];
var JFComponent = (function () {
    function JFComponent(textBannerService) {
        this.textBannerService = textBannerService;
        this.menuItems = MENUITEMS;
        this.textBanners = [];
    }
    JFComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.textBannerService.getTextBanner().then(function (textBanners) { return _this.textBanners = textBanners; });
    };
    JFComponent = __decorate([
        core_1.Component({
            selector: 'job-finder',
            templateUrl: 'html/homepage.html',
            styleUrls: ['css/styles.css']
        }), 
        __metadata('design:paramtypes', [textBanner_services_1.TextBannerService])
    ], JFComponent);
    return JFComponent;
}());
exports.JFComponent = JFComponent;
//# sourceMappingURL=JFComponent.component.js.map