import { Component } from '@angular/core';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppDriversComponent } from './app-drivers/app-drivers.component';
import { ErrorComponent } from './error/error.component';
import { RouterOutlet } from '@angular/router';
import { AppShellComponent } from "./app-shell/app-shell.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppVehiclesComponent } from './app-vehicles/app-vehicles.component';
@Component({
    selector: 'app-root',
    template: `
      <app-shell/>
      <router-outlet />`,
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
      AppShellComponent,
      RouterOutlet,
      AppHomeComponent,
      AppDriversComponent,
      AppVehiclesComponent,
      CommonModule,
      ErrorComponent,
      HttpClientModule
    ],
})
export class AppComponent{
  title = 'angular';
}


