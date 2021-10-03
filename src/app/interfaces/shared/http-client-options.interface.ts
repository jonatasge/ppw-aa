import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface IHttpClientOptions {
  headers?: HttpHeaders | { [header: string]: any };
  observe?: 'body';
  params?: HttpParams | { [param: string]: any };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
