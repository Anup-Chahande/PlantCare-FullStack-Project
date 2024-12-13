import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addplants',
  templateUrl: './addplants.component.html',
  styleUrls: ['./addplants.component.css']
})
export class AddplantsComponent {
constructor(private serv:MyserviceService,private route:Router){}
  addplant={

    plant_id:0,
    plant_Age:0,
    plant_Name:"",
    requirement:"",
  }
  
  submit(){

  this.serv.addplantsserv(this.addplant).subscribe((data)=>{

    
      this.route.navigate(['/getall'])



  })
       



  }



}
