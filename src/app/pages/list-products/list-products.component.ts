import { Component, OnInit } from '@angular/core';
import { IMeta, IProduct, IResponseList } from 'src/app/interfaces/api';
import { IHttpClientOptions } from 'src/app/interfaces/shared';
import { ProductService } from 'src/app/services/api';
import { EventEmitterService } from 'src/common/services';

@Component({
  selector: 'ev-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  private meta: IMeta;
  list: IProduct[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.read();
  }

  read(options?: IHttpClientOptions): void {
    if (!this.list.length) {
      EventEmitterService.get('loading').emit(true);
    }

    this.service.read(options).subscribe(
      (response: IResponseList<IProduct>) => {
        if (!this.list.length) {
          EventEmitterService.get('loading').emit(false);
        }
        this.list = [...this.list, ...response.data.products];
        this.meta = response.data.meta;
      },
      (error: any) => EventEmitterService.get('error').emit(true)
    );
  }

  onScroll(): void {
    const page = this.meta.pages.next;
    if (page) {
      this.read({ params: { page } });
    }
  }
}
