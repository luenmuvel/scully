import { Component, OnInit } from '@angular/core';
import { MyService } from '@services/my-service';
import { ILang } from 'app/interface/lang';

@Component({
  selector: 'app-mycompo',
  templateUrl: './my-component.html',
})
export class MyComponent implements OnInit {
  name;
  lang = 'es';
  langData: ILang = {} as ILang;

  constructor(private _myService: MyService) {
    this.langData = this._myService.esLang;
  }

  ngOnInit() {
    this.getName();
  }

  changeLang() {
    if (this.lang === 'es') {
      this.lang = 'en';
      this.langData = this._myService.enLang;
    } else {
      this.lang = 'es';
      this.langData = this._myService.esLang;
    }
  }

  getName() {
    this.name = localStorage.getItem('nombre');
  }
}
