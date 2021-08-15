import { NgModule } from '@angular/core';
import { MyComponent } from './my-component';
import { DataRoutingModule } from './data.routing';

@NgModule({
  declarations: [MyComponent],
  exports: [MyComponent],
  imports: [DataRoutingModule],
})
export class DataModule {}
