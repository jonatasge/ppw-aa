import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IDatasheet, IProduct } from 'src/app/interfaces/api';
import { theme } from 'src/app/styles/theme';
import { IBarNote } from 'src/common/components';

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
    value: string;
  }[] = [];

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
    value: string;
  }[] {
    return [
      { icon: 'glass', label: 'Tipo de vinho', value: data?.type },
      { icon: 'worlds', label: '', value: '' },
      { icon: 'pin', label: '', value: '' },
      { icon: 'percentage', label: '', value: '' },
      { icon: 'corkscrew', label: '', value: '' },
      { icon: 'winery', label: '', value: '' },
      { icon: 'temperature', label: '', value: '' },
      { icon: 'drop', label: '', value: '' },
      { icon: 'grape', label: '', value: '' },
      { icon: 'vintage', label: '', value: '' },
      { icon: 'bottles', label: '', value: '' },
      { icon: 'medal', label: '', value: '' },
    ];
  }

  handleIcon(icon: string): any {
    return { ['ev-' + icon]: true };
  }
}
