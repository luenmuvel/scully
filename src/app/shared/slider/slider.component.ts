import { Component } from '@angular/core';

import SwiperCore, { Pagination, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  onSwiper(event) {}

  onSlideChange() {}
}
