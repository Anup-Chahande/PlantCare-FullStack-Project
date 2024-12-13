import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(public http:HttpClient) { }
   apiurl="http://localhost:8080/plants"



   getallplants():Observable<any>{

    return this.http.get(this.apiurl);
   }

   addplantsserv(data:any):Observable<any>{

    return this.http.post(this.apiurl,data);
   }


   deleteplants(id:any){

    return this.http.delete(`${this.apiurl}/${id}`)

   }

   getbyid(id:any):Observable<any>{


    return this.http.get(`${this.apiurl}/${id}`)
  
  
  
  }

  Update(data:any):Observable<any>{


    return this.http.put(this.apiurl,data)
  
  
  
  }


}
