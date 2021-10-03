import { Component, Input } from '@angular/core';
import { getBiggerImage, getSmallerImage, hexToRgb } from 'src/common/helpers';
import { IImageSlideshow } from './image-slideshow.interface';

@Component({
  selector: 'ev-image-slideshow',
  templateUrl: './image-slideshow.component.html',
  styleUrls: ['./image-slideshow.component.scss'],
})
export class ImageSlideshowComponent {
  @Input() height = '200px';
  @Input() imageBackgroundColor = 'white';
  @Input() images: IImageSlideshow[] = [];
  @Input() primaryColor = 'black';
  @Input() showImage = 0;
  @Input() showThumbnails = true;
  private sizes = ['extralarge', 'large', 'medium', 'small'];
  fullScreenMode = false;

  constructor() {}

  getBiggerImage(item: IImageSlideshow, sizes: string[] = this.sizes): string {
    return getBiggerImage(item, sizes);
  }

  getSmallerImage(item: IImageSlideshow, sizes: string[] = this.sizes): string {
    return getSmallerImage(item, sizes);
  }

  handleThumbnailBackgroundColor(color: string): string {
    const rgb = hexToRgb(color);
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.075)`;
  }
}
