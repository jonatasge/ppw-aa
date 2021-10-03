import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IDatasheet, IGrape, IProduct } from 'src/app/interfaces/api';
import { theme } from 'src/app/styles/theme';
import { IBarNote } from 'src/common/components';
import { environment } from 'src/environments/environment';
import { getEvinoIconClass } from 'src/app/helpers';

@Component({
  selector: 'ev-data-sheet',
  templateUrl: './data-sheet.component.html',
  styleUrls: ['./data-sheet.component.scss'],
})
export class DataSheetComponent implements OnChanges {
  @Input() data: IProduct;
  colors = theme;
  notes: {
    label: string;
    note: IBarNote;
  }[] = [];
  infos: {
    icon: string;
    label: string;
    value: string | number;
  }[] = [];
  premiationsUrl =
    environment.assets.image +
    '/dpr_1.0,w_64,f_auto,q_auto:best/v1/web/assets/premiations/';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.notes = this.handleNotes(this.data?.datasheet);
      this.infos = this.handleInfos(this.data);
    }
  }

  handleNotes(
    datasheet: IDatasheet
  ): {
    label: string;
    note: IBarNote;
  }[] {
    const formatNote = (value: string = '0'): IBarNote => ({
      value: parseInt(value || '0', 10),
      of: 5,
    });

    return [
      {
        label: 'Doçura',
        note: formatNote(datasheet?.gradation_sweetness),
      },
      {
        label: 'Tanino',
        note: formatNote(datasheet?.gradation_tannin),
      },
      {
        label: 'Acidez',
        note: formatNote(datasheet?.gradation_acidity),
      },
      {
        label: 'Frutado',
        note: formatNote(datasheet?.gradation_fruity),
      },
    ];
  }

  handleInfos(
    data: IProduct
  ): {
    icon: string;
    label: string;
    value: string | number;
  }[] {
    return [
      { icon: 'glass', label: 'Tipo de vinho', value: data?.type },
      { icon: 'world', label: 'País', value: data?.producer?.country },
      { icon: 'pin', label: 'Região', value: data?.producer?.region },
      {
        icon: 'percentage',
        label: 'Teor alcoólico',
        value: data?.alcoholContent,
      },
      {
        icon: 'corkscrew',
        label: 'Tipo de fechamento',
        value: data?.closureType,
      },
      { icon: 'winery', label: 'Produtor', value: data?.producer?.name },
      {
        icon: 'temperature',
        label: 'Serviço',
        value: data?.servingTemperature,
      },
      { icon: 'drop', label: 'Volume', value: data?.volume },
      {
        icon: 'grape',
        label: 'Uvas',
        value: data?.grapes
          ?.reduce((r: string, grape: IGrape) => r + ', ' + grape?.name, '')
          .substr(2),
      },
      { icon: 'vintage', label: 'Safra', value: data?.vintage },
      {
        icon: 'bottles',
        label: 'Potencial de guarda',
        value: data?.sommelier?.keepUntil,
      },
      { icon: 'medal', label: 'Premiações', value: data?.prizesMedals },
    ];
  }

  handleIcon(name: string): any {
    return { [getEvinoIconClass(name)]: true };
  }
}
