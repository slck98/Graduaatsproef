import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css'],
  standalone: true,
  imports: [
    RouterLink
],
})
export class AppHomeComponent {

}
