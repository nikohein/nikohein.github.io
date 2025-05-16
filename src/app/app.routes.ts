import { Routes } from '@angular/router';
import { NavbarComponent} from './components/navbar/navbar.component';
import { FooterComponent} from './components/footer/footer.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'skills', component: AppComponent}

];
