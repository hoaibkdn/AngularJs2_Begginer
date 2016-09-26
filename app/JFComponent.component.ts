import { Component, OnInit } from '@angular/core';
import { MenuItem } from './multi-class';
import { TextBanner } from './multi-class';
// import {Router} from '@angular/router';
import { TextBannerService } from './textBanner.services';

const MENUITEMS: MenuItem[] = [
  { name: 'Candidates' },
  { name: 'Blog' },
  { name: 'About' },
  { name: 'Contact' },
  { name: 'Job' },
  { name: 'Home' }
];

@Component({
  selector: 'job-finder',
  templateUrl:'html/homepage.html',
  styleUrls:['css/styles.css']
})

export class JFComponent implements OnInit{
  menuItems = MENUITEMS;
  selectedItem: MenuItem;

  textBanners: TextBanner[] = [];

    constructor(
        private textBannerService: TextBannerService
    ){}

    ngOnInit():void{
      this.textBannerService.getTextBanner().then(textBanners => this.textBanners = textBanners);
    }
} 