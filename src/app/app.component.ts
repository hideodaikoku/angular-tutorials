import { Component } from '@angular/core';

// component decorator or constructor
@Component({
  selector: 'app-root', //selector
  templateUrl: './app.component.html', //inline html
  styleUrls: ['./app.component.scss'] // css or scss file
})
// logic 
export class AppComponent {
  title = 'half-step'; 
}
