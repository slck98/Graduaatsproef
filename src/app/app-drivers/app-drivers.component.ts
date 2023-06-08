import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drivers',
  imports: [CommonModule, RouterLink],
  templateUrl: `./app-drivers.component.html`,
  styleUrls: [`./app-drivers.component.css`],
  standalone: true
})
export class AppDriversComponent{
  driverList:any;
  constructor (private httpClient:HttpClient){
    this.driverList=[];
  }
  ngOnInit(): void {
    this.getDriverList()
  }

  getDriverList(){
    this.httpClient.get('https://localhost:7144/api/drivers')
    .subscribe((result:any)=>{
      this.driverList = result;
    })
  }
}
