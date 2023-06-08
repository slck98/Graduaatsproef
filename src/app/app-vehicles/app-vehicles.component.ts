import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  imports: [CommonModule, RouterLink],
  templateUrl: `./app-vehicles.component.html`,
  styleUrls: [`./app-vehicles.component.css`],
  standalone: true
})
export class AppVehiclesComponent{
  vehicleList:any;
  constructor (private httpClient:HttpClient){
    this.vehicleList=[];
  }
  ngOnInit(): void {
    this.getVehicleList()
  }

  getVehicleList(){
    this.httpClient.get('https://localhost:7144/api/vehicles')
    .subscribe((result:any)=>{
      this.vehicleList = result;
    })
  }
}
