import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { JFComponent }  from './JFComponent.component';
import {SignInComponent} from './signin.component';
import { TextBannerService } from './textBanner.services';
import { routing } from './routing/app.routing';

@NgModule({
  imports:      [ BrowserModule ,
                  FormsModule,
                  HttpModule,
                  JsonpModule,
                  routing],              
  declarations: [ JFComponent ,
                  SignInComponent],
  bootstrap:    [ JFComponent ],
  providers: [TextBannerService]
})
export class AppModule {}