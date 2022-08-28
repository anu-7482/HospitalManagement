import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Patient } from '../patient';
import { DoctorRegisistrationServiceService } from '../doctor-regisistration-service.service';
import { PatientRegisistrationServiceService } from '../patient-regisistration-service.service';


@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent implements OnInit {
  patient:Patient = new Patient();
 
  message:any;
  doctors:any;
  doctorinfo:any;

constructor(private patService:PatientRegisistrationServiceService, private service:DoctorRegisistrationServiceService){}
ngOnInit(): void {

  let response = this.service.getAllDoctors();
  response.subscribe((data)=>this.doctors=data);
}

public registerPatNow(){
  let response = this.patService.doPatRegistration(this.patient);
  response.subscribe((data)=>this.message=data);

}
selectName(pid :number){
 
  let response= this.service.getDoctorbyId(pid);
  response.subscribe((data)=>this.doctorinfo=data);



  
  console.log("id--->",pid);
  console.log("doctors--->",this.doctorinfo.docName);
  // this.router.navigate(['patient-details',pid]);
 }

// public errorMessage:string | null = null;

//   constructor( private router:Router) { }

//   ngOnInit(): void {
//     this.service.getAllDoctors().subscribe({
//       next:(data) =>{
//         this.doctors = data;
//       }
//     })
//   }
//   savePatient(){
//     this.service.CreatePatient(this.patient).subscribe({
//       next:(data)=>{
//         alert("Patient Added to the database")
//         this.router.navigate(['/']).then();
//       },
//       error:(e)=>{
//         this.errorMessage = e;
//         console.warn(e);
//         alert("Invalid Information")
//         this.router.navigate(['/patients/patient/add']).then();
//       }
//     });
//   }
}
