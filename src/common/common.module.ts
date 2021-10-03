import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarNoteComponent, ImageSlideshowComponent } from './components';

@NgModule({
  declarations: [ImageSlideshowComponent, BarNoteComponent],
  exports: [ImageSlideshowComponent, BarNoteComponent],
  imports: [CommonModule],
})
export class AppCommonModule {}
