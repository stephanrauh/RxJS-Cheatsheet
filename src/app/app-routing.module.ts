import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { ForkJoinOperatorComponent } from './fork-join-operator/fork-join-operator.component';

const routes: Routes = [
  { path: 'map-js', component: MapOperatorComponent },
  { path: 'map', component: MapOperatorComponent },
  { path: 'forkjoin', component: ForkJoinOperatorComponent },
  { path: 'forkjoin-chaining', component: ForkJoinOperatorComponent },
  { path: '', redirectTo: '/map', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
