import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasaRoutingModule } from './casa-routing.module';
import { CasaComponent } from './casa.component';


@NgModule({
  declarations: [CasaComponent],
  imports: [
    CommonModule,
    CasaRoutingModule
  ]
})
export class CasaModule { }
