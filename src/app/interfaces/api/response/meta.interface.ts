export interface IMeta {
  pages: IPages;
  perPage: number;
  total: number;
}

export interface IPages {
  active: number;
  first: number;
  last: number;
  next: number | null;
  prev: number | null;
}
