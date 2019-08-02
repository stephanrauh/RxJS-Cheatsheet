import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { ForkJoinOperatorComponent } from './fork-join-operator/fork-join-operator.component';
import { TakeOneOperatorComponent } from './take-one/take-one-operator.component';
import { MapJsOperatorComponent } from './map-js-operator/map-js-operator.component';
import { TakeUntilOperatorComponent } from './take-until/take-until-operator.component';

const routes: Routes = [
  { path: 'map-js', component: MapJsOperatorComponent },
  { path: 'map', component: MapOperatorComponent },
  { path: 'forkjoin', component: ForkJoinOperatorComponent },
  { path: 'forkjoin-chaining', component: ForkJoinOperatorComponent },
  { path: 'take-one', component: TakeOneOperatorComponent },
  { path: 'take-until', component: TakeUntilOperatorComponent },
  { path: '', redirectTo: '/map', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
