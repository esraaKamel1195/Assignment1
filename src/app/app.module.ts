import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './server/server.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent,
    ServerComponent,
    ServerElementComponent,
    CourseCardComponent,
    CourseImageComponent,
    BasicHighlightDirective,
    HighlightDirective,
    Comp1Component,
    Comp2Component,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
