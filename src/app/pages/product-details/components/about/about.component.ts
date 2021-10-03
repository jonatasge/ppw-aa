import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { getEvinoIconClass } from 'src/app/helpers';
import { ISommelier } from 'src/app/interfaces/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ev-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnChanges {
  @Input() sommelier: ISommelier;
  imageUrl =
    environment.assets.image +
    '/dpr_auto,w_770,c_scale,f_auto,q_auto/v1/web/assets';
  sommelierUrl = this.imageUrl + '/sommelier/picture_';
  infos: {
    icon: string;
    label: string;
    value: string;
  }[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sommelier) {
      this.infos = this.handleInfos(this.sommelier);
    }
  }

  handleInfos(
    sommelier: ISommelier
  ): {
    icon: string;
    label: string;
    value: string;
  }[] {
    return [
      { icon: 'eye', label: 'Visual', value: sommelier?.color },
      { icon: 'mouth', label: 'Boca', value: sommelier?.mouth },
      { icon: 'nose', label: 'Nariz', value: sommelier?.nose },
    ];
  }

  getHQPicture(url: string): string {
    if (url) {
      const parts = url.split('/');
      return this.sommelierUrl + parts[parts.length - 1];
    }
  }

  handleIcon(name: string): any {
    return { [getEvinoIconClass(name)]: true };
  }
}
