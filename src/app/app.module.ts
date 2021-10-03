import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppCommonModule } from 'src/common/common.module';
import { AppRoutingModule } from './app-routing.module';
import {
  AppComponent,
  BodyComponent,
  FooterComponent,
  HeaderComponent,
} from './components';
import {
  ListProductsComponent,
  NotFoundComponent,
  ProductDetailsComponent,
} from './pages';
import {
  AboutComponent,
  DataSheetComponent,
  ShortDataSheetComponent,
} from './pages/product-details/components';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BodyComponent,
    DataSheetComponent,
    FooterComponent,
    HeaderComponent,
    ListProductsComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ShortDataSheetComponent,
  ],
  imports: [
    AppCommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
