export interface IFilter {
  [key: string]: {
    icon?: string;
    name: string | number;
    quantity: number;
  }[];
}
