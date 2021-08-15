import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [HomeRoutingModule],
})
export class HomeModule {}
