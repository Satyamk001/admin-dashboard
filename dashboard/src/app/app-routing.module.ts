import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'analytics',component:AnalyticsComponent},
  {path:'subscription',component:SubscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
