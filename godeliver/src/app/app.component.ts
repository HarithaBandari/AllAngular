import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'godeliver';
openNav() {
    document.getElementById('myNav').style.width = '25%';
}
closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
}
