import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { Router } from '@angular/router';
import { DoctorRegisistrationServiceService } from '../doctor-regisistration-service.service';


@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit {
  

  doctor:Doctor = new Doctor();
  
  message:any;
  constructor(private service:DoctorRegisistrationServiceService) { }

  ngOnInit(): void {
  }

  public  saveDoctor(){
    let response = this.service.doDocRegistration(this.doctor);
    response.subscribe((data)=>this.message=data);

  }


  // public doctor:Doctor = {} as IDoctor;
  // constructor(private service:HospitalserviceService,private router:Router) { }

  // ngOnInit(): void {
  // }
  // saveDoctor(){
  //   this.service.createDoctor(this.doctor).subscribe({
  //     next: (data)=>{
  //       alert("DOCTOR ADDED TO THE HOSPITAL DATABASE");
  //       this.router.navigate(['/']).then();
        
  //     },
  //     error: (e)=>{
  //       this.router.navigate(['/doctors/doctor/add']).then();
  //       alert("Error occured ! Try again..");

  //     }
  //   })
  // }



}
