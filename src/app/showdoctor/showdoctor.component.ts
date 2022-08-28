import { Component, OnInit } from '@angular/core';

import { DoctorRegisistrationServiceService }  from '../doctor-regisistration-service.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showdoctor',
  templateUrl: './showdoctor.component.html',
  styleUrls: ['./showdoctor.component.css']
})
export class ShowdoctorComponent implements OnInit {

  doctors:any;
  message:any;
  doctId:any;
  doctorflag:boolean=false;
  doctorinfo:any;


  constructor(private service:DoctorRegisistrationServiceService) { }


  selectName(pid :number){
    this.doctorflag=true;

   // this.doctors="";

    let response= this.service.getDoctorbyId(pid);
    response.subscribe((data)=>this.doctorinfo=data);


  
    
    console.log("id--->",pid);
    console.log("doctors--->",this.doctorinfo.docName);
    // this.router.navigate(['patient-details',pid]);
   }

   
  


  ngOnInit(): void {
    let response = this.service.getAllDoctors();
    response.subscribe((data)=>this.doctors=data);
  }
  // ngOnInit(): void {
  //   this.service.getAllDoctors().subscribe({
  //     next :(data)=>{
  //       this.doctor = data;
  //     }
  //   });
  // }

  // showDoctorDetails(){
  //   if(this.doc.name){
  //     console.warn(this.doc.name);
  //     this.service.getDoctor(this.doc.name).subscribe({
  //       next: (data)=>{
  //         console.warn(data);
  //         this.doc = data;
  //       },
  //       error: (e)=>{
  //         this.errorMessage = e;
  //       }
  //     })
  //   }
  // }
  
}


