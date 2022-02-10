import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: HomeComponent,
  },
  {
    path: 'customers',
    component: HomeComponent,
  },
  {
    path: 'orders',
    component: HomeComponent,
  },
  {
    path: 'bills',
    component: HomeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
