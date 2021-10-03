import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { wineColor, wineIcon } from 'src/app/helpers';
import { IProduct, IResponse } from 'src/app/interfaces/api';
import { ProductService } from 'src/app/services/api';
import { theme } from 'src/app/styles/theme';
import { IImageSlideshow } from 'src/common/components';
import { unsubscribeAll } from 'src/common/helpers';
import { EventEmitterService } from 'src/common/services';

@Component({
  selector: 'ev-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private id: string;
  colors = theme;
  data: IProduct;
  images: IImageSlideshow[];

  constructor(
    protected activatedRoute: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.subscribe();
  }

  ngOnDestroy(): void {
    EventEmitterService.get('error').emit(false);
    unsubscribeAll(this.subscriptions);
  }

  subscribe(): void {
    const subscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.read();
      }
    );
    this.subscriptions.push(subscription);
  }

  read(): void {
    EventEmitterService.get('loading').emit(true);
    this.service.find(this.id).subscribe(
      (response: IResponse<IProduct>) => {
        EventEmitterService.get('loading').emit(false);

        this.data = response.data;
        const images = response.data?.bundleProducts.map(
          (product: IProduct) => product.images
        );
        this.images = [response.data?.images, ...images];
      },
      (error: any) => EventEmitterService.get('error').emit(true)
    );
  }

  getWineColor(type: string): string {
    return wineColor(type);
  }

  getWineIcon(type: string): string {
    return wineIcon(type);
  }
}
