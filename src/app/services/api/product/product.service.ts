import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct, IResponse, IResponseList } from 'src/app/interfaces/api';
import { CrudService } from 'src/app/services/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends CrudService<
  IResponseList<IProduct>,
  IResponse<IProduct>,
  string
> {
  constructor(protected http: HttpClient) {
    super(`${environment.api}/product`, http);
  }
}
