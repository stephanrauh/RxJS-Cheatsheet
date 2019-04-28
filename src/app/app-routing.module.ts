import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapOperatorComponent } from './map-operator/map-operator.component';

const routes: Routes = [
  { path: 'map', component: MapOperatorComponent },
  { path: '', redirectTo: '/map', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
