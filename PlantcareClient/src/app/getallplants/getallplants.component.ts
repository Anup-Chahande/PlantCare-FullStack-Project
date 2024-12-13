import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getallplants',
  templateUrl: './getallplants.component.html',
  styleUrls: ['./getallplants.component.css']
})
export class GetallplantsComponent {

  constructor(private serv:MyserviceService,private routre:Router){}
 

  Allplants:any;

      ngOnInit(){

        this.serv.getallplants().subscribe((data)=>{

          console.log(data)
          this.Allplants=data;

        })
      }

      delete(id:any){



        this.serv.deleteplants(id).subscribe((data)=>{

       this.ngOnInit();



        })
  
        



      }





      updateplants(pid:any){
    
        this.routre.navigate([`updatees/${pid}`])
    
    
    
      }
     



}
