import { UserRoutingModule } from './user.routing';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [UserRoutingModule],
})
export class UserModule {}
