import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent }   from '../signin.component';
import { JFComponent }  from '../JFComponent.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'JFComponent',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SignInComponent
  },
   {
    path: 'JFComponent',
    component: JFComponent
  },
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/