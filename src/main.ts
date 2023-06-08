import { Routes, provideRouter } from '@angular/router';
import { AppDriversComponent } from './app/app-drivers/app-drivers.component';
import { AppHomeComponent } from './app/app-home/app-home.component';
import { ErrorComponent } from './app/error/error.component';
import { AppComponent } from './app/app.component';
import { AppDriverDetailComponent } from './app/app-driver-detail copy/driverDetail.component';
import { AppDriverEditComponent } from './app/app-driver-edit/driverEdit.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppVehiclesComponent } from './app/app-vehicles/app-vehicles.component';

const routes:Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full',
},
  {
      path:'home',
      component: AppHomeComponent,
  },
  {
    path:'drivers',
    component: AppDriversComponent
  },
  {
    path:'drivers/:id',
    component: AppDriverDetailComponent,
  },
  {
    path:'drivers/:id/edit',
    component: AppDriverEditComponent,
  },
  {
    path:'vehicles',
    component: AppVehiclesComponent
  },
  {
    path:'gascards',
    component: ErrorComponent
  },
  {
    path:'**',
    component: ErrorComponent
  },
  
]

bootstrapApplication(AppComponent, {
  providers: [
      provideRouter(routes)
  ]
})
  .catch(e => console.error(e));
