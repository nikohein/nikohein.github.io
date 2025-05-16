import { Component } from '@angular/core';
import { NavbarComponent} from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'nikohein.github.io';
}
