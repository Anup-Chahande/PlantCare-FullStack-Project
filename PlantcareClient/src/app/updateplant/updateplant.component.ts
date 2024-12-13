import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-updateplant',
  templateUrl: './updateplant.component.html',
  styleUrls: ['./updateplant.component.css']
})
export class UpdateplantComponent {
 constructor(public actirou:ActivatedRoute,public serv:MyserviceService ,public route:Router){}

 pathid:any;
 datamain={
  plant_Age:0,
  plant_Name:"",
  plant_id:0,
  requirement:"",
 }

 idm=2
 cdr:any
 
 
 
 ngOnInit(){
         
  this.actirou.paramMap.subscribe((params)=>{

    this.pathid=params.get('id');
       this.serv.getbyid(this.pathid).subscribe((data)=>{
         this.datamain=data;

         console.log(data)

       });

        



})

  
 }

 updateplant(){

  this.serv.Update(this.datamain).subscribe((data)=>{


    this.route.navigate(['/getall'])


  })

 }

}
