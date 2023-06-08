import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-driver-edit',
  imports: [CommonModule, RouterLink],
  templateUrl: `./driverEdit.component.html`,
  styleUrls: [`./driverEdit.component.css`],
  standalone: true
})
export class AppDriverEditComponent{
  driver:any;
  private routeSub: any;
  id:any;
  constructor (private http:HttpClient,private route:ActivatedRoute){}
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => { 
      this.id = params['id'];
    });
    this.getDriver(this.id);
  }

  
  getDriver(id:string){
    this.http.get('https://localhost:7144/api/drivers/'+this.id)
    .subscribe((result:any)=>{
      this.driver = result;
    })
  }
}
