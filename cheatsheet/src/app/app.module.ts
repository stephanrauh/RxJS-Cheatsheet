import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { MockHttp } from './mock-http/mock-http';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatDividerModule
} from '@angular/material';
import { OperationComponent } from './graphics/operation/operation.component';
import { MarkdownModule } from 'ngx-markdown';
import { TransitionComponent } from './graphics/transition/transition.component';
import { StartComponent } from './graphics/start/start.component';
import { EndComponent } from './graphics/end/end.component';
import { ForkJoinOperatorComponent } from './fork-join-operator/fork-join-operator.component';
import { AlgorithmComponent } from './graphics/algorithm/algorithm.component';
import { DefaultComponent } from './layout/default/default.component';
import { TakeOneOperatorComponent } from './take-one/take-one-operator.component';
import { TakeUntilOperatorComponent } from './take-until/take-until-operator.component';
import { MapJsOperatorComponent } from './map-js-operator/map-js-operator.component';
import { PostitComponent } from './layout/postit/postit.component';
import { PipeComponent } from './pipe/pipe.component';
import { TapComponent } from './tap/tap.component';
import { FilterComponent } from './filter/filter.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { FlattenComponent } from './flatten/flatten.component';
import { MergeAllComponent } from './merge-all/merge-all.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { DelayComponent } from './delay/delay.component';
import { DebounceComponent } from './debounce/debounce.component';
import { OfComponent } from './of/of.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmComponent,
    CatchErrorComponent,
    DebounceComponent,
    DelayComponent,
    DefaultComponent,
    EndComponent,
    FlattenComponent,
    ForkJoinComponent,
    ForkJoinOperatorComponent,
    FilterComponent,
    MapOperatorComponent,
    MapJsOperatorComponent,
    MergeAllComponent,
    NavigationComponent,
    OfComponent,
    OperationComponent,
    PipeComponent,
    PostitComponent,
    StartComponent,
    SubscribeComponent,
    SwitchMapComponent,
    TakeOneOperatorComponent,
    TakeUntilOperatorComponent,
    TapComponent,
    ToArrayComponent,
    TransitionComponent,
    UnsubscribeComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockHttp,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [MapOperatorComponent, TransitionComponent, StartComponent, EndComponent]
})
export class AppModule {}
