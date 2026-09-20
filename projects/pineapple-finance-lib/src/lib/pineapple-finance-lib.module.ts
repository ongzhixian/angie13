import { NgModule } from '@angular/core';
import { PineappleFinanceLibComponent } from './pineapple-finance-lib.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [
    PineappleFinanceLibComponent,
    DashboardComponent
  ],
  imports: [
  ],
  exports: [
    PineappleFinanceLibComponent
  ]
})
export class PineappleFinanceLibModule { }
