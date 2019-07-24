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

@NgModule({
  declarations: [
    AppComponent,
    ForkJoinOperatorComponent,
    MapOperatorComponent,
    NavigationComponent,
    OperationComponent,
    TransitionComponent,
    StartComponent,
    EndComponent,
    AlgorithmComponent,
    DefaultComponent
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
