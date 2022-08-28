import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorRegisistrationServiceService {

  constructor(private http:HttpClient) { }

  public doDocRegistration(doctor:any){
    return this.http.post("http://localhost:8082/doctors/",doctor, {responseType:'text' as 'json'});
  }
  public getAllDoctors(){
    return this.http.get("http://localhost:8082/doctors/getAllDoctors");
  }
  
  public getDoctorbyId(doctId:any){
    return this.http.get("http://localhost:8082/doctors/"+doctId);
  }

  public getDoctorbyName(docName:any){
 
    return this.http.get("http://localhost:8082/doctors/docName/"+docName);
  }

  // public updateADoctor(doctor:any){
  //   return this.http.put("http://localhost:8082/doctors/",doctor, {responseType:'text' as 'json'});
  // }

  // public deleteADoctor(doctId:any){

  //   return this.http.delete("http://localhost:9090/doctors/"+doctId);
  // }
}
