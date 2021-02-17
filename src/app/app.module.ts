import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { ComponentsComponent } from './components/components.component';
import { AppRoutingModule } from './app-routing.module';
import { PreloaderComponent } from './components/layout/preloader/preloader.component';
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';
import { SideNavComponent } from './components/layout/side-nav/side-nav.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ColorCustomizerComponent } from './components/layout/color-customizer/color-customizer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    ComponentsComponent,
    PreloaderComponent,
    TopNavComponent,
    SideNavComponent,
    FooterComponent,
    ColorCustomizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
