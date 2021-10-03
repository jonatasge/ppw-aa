import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { getEvinoIconClass, wineColor, wineIcon } from 'src/app/helpers';
import { IImages, IProduct, ISommelier } from 'src/app/interfaces/api';
import { theme } from 'src/app/styles/theme';
import { IImageSlideshow } from 'src/common/components';
import { getBiggerImage } from 'src/common/helpers';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ev-short-data-sheet',
  templateUrl: './short-data-sheet.component.html',
  styleUrls: ['./short-data-sheet.component.scss'],
})
export class ShortDataSheetComponent implements OnChanges {
  @Input() data: IProduct;
  private sizes = ['extralarge', 'large', 'medium', 'small'];
  images: IImageSlideshow[] = [];
  chips: {
    icon?: string;
    img?: string;
    text: string;
    type?: string;
  }[] = [];
  infos: {
    icon: string;
    label: string;
    value: string;
  }[] = [];
  colors = theme;
  iconUrl = environment.assets.image + '/v1/web/assets/';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.infos = this.handleInfos(this.data?.sommelier);
      this.chips = this.handleChips(this.data);
      this.images = [this.data?.images];
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

  handleChips(
    data: IProduct
  ): {
    icon?: string;
    img?: string;
    text: string;
    type?: string;
  }[] {
    const result = [];

    let type: any = { icon: 'glass', text: data?.type, type: data?.type };
    switch (data?.type?.toLowerCase()) {
      case 'gourmet':
        type = { img: this.iconUrl + 'gourmet.svg', text: data?.type };
        break;
      case 'acessórios':
        type = { img: this.iconUrl + 'default-type.svg', text: data?.type };
        break;
    }
    result.push(type);
    result.push({ img: data?.countries[0]?.icon, text: data?.countries[0]?.name });
    if (this.typeIsDrink(data?.type)) {
      result.push({ icon: 'small-pin', text: data?.producer?.region });
      result.push({ icon: 'grape', text: data?.grapes[0]?.name });
    }

    return result;
  }

  getBiggerImage(item: IImages, sizes: string[] = this.sizes): string {
    return getBiggerImage(item, sizes);
  }

  getWineColor(type: string): string {
    return wineColor(type);
  }

  getWineIcon(type: string): string {
    return wineIcon(type);
  }

  handleIcon(name: string): any {
    return { [getEvinoIconClass(name)]: true };
  }

  typeIsDrink(type: string): boolean {
    switch (type.toLowerCase()) {
      case 'gourmet':
      case 'acessórios':
        return false;
      default:
        return true;
    }
  }
}
