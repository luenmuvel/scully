import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [SliderComponent],
  imports: [SwiperModule],
  exports: [SliderComponent],
})
export class SharedModule {}
