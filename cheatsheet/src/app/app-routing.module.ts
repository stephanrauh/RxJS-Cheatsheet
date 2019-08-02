import { ForkJoinComponent } from './fork-join/fork-join.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { ForkJoinOperatorComponent } from './fork-join-operator/fork-join-operator.component';
import { TakeOneOperatorComponent } from './take-one/take-one-operator.component';
import { MapJsOperatorComponent } from './map-js-operator/map-js-operator.component';
import { TakeUntilOperatorComponent } from './take-until/take-until-operator.component';
import { PipeComponent } from './pipe/pipe.component';
import { TapComponent } from './tap/tap.component';
import { FilterComponent } from './filter/filter.component';
import { FlattenComponent } from './flatten/flatten.component';
import { MergeAllComponent } from './merge-all/merge-all.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { DelayComponent } from './delay/delay.component';
import { DebounceComponent } from './debounce/debounce.component';
import { OfComponent } from './of/of.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

const routes: Routes = [
  { path: 'catch-error', component: CatchErrorComponent },
  { path: 'debounce', component: DebounceComponent },
  { path: 'delay', component: DelayComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'flatten', component: FlattenComponent },
  { path: 'forkjoin', component: ForkJoinComponent },
  { path: 'forkjoinchained', component: ForkJoinOperatorComponent },
  { path: 'forkjoin-chaining', component: ForkJoinOperatorComponent },
  { path: 'of', component: OfComponent },
  { path: 'map-js', component: MapJsOperatorComponent },
  { path: 'map', component: MapOperatorComponent },
  { path: 'merge-all', component: MergeAllComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'switch-map', component: SwitchMapComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'take-one', component: TakeOneOperatorComponent },
  { path: 'take-until', component: TakeUntilOperatorComponent },
  { path: 'tap', component: TapComponent },
  { path: 'to-array', component: ToArrayComponent },
  { path: 'unsubscribe', component: UnsubscribeComponent },
  { path: '', redirectTo: '/map', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
