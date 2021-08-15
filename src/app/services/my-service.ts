import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import es from '../shared/json/es.json';
import en from '../shared/json/en.json';
import { ILang } from '../interface/lang';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  esLang: ILang = {} as ILang;
  enLang: ILang = {} as ILang;
  constructor(public http: HttpClient) {
    this.esLang = es;
    this.enLang = en;
  }
}
