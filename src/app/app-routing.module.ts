import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent, NotFoundComponent, ProductDetailsComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListProductsComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
      },
    ],
  },
  { path:  '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
