import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'app-shell',
    templateUrl: './app-shell.component.html',
    styleUrls: ['./app-shell.component.scss'],
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    standalone: true
  })
  export class AppShellComponent {
    
  }