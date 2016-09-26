"use strict";
var router_1 = require('@angular/router');
var signin_component_1 = require('../signin.component');
var JFComponent_component_1 = require('../JFComponent.component');
var appRoutes = [
    {
        path: '',
        redirectTo: 'JFComponent',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: signin_component_1.SignInComponent
    },
    {
        path: 'JFComponent',
        component: JFComponent_component_1.JFComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routing.js.map