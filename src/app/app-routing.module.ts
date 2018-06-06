import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent }      from './phones/phones.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PhoneDetailComponent }  from './phone-detail/phone-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: PhoneDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'phones', component: PhonesComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
 exports: [RouterModule]
})
export class AppRoutingModule { }

