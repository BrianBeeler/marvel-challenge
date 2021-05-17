import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [{
  path: '', component: SplashComponent
}, {
  path: 'character-list', component: CharacterListComponent
}, {
  path: 'character-detail', component: CharacterDetailComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    NavigationComponent,
    CharacterDetailComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
