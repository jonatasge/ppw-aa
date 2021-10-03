import { IFilter } from './filter.interface';
import { IMeta } from './meta.interface';

export interface IResponseList<T> {
  data: {
    filter?: IFilter | any;
    meta?: IMeta | any;
    [key: string]: T[];
  };
}
