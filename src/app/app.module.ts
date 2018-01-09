import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { MapstuffComponent } from './mapstuff/mapstuff.component';


@NgModule({
  declarations: [
    AppComponent,
    MapstuffComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAdnWstnGpjYaJZIfWabH0woBiZnZJEHig",
      libraries: ["places"]
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
