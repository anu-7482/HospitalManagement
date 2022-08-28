
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientRegisistrationServiceService } from '../patient-regisistration-service.service';


@Component({
  selector: 'app-showpatient',
  templateUrl: './showpatient.component.html',
  styleUrls: ['./showpatient.component.css']
})
export class ShowpatientComponent implements OnInit {

  patients:any;
  message:any;
  patientId:any;
  tablehide:boolean=false;

  constructor(private service:PatientRegisistrationServiceService) { }

  public getPatientDetails(patientId:number){
    let response= this.service.getPatientById(patientId);
    response.subscribe((data)=>this.patients=data);
    

   // this.patients=data.patients;

    console.log("data--",this.patients)
   
   }

  ngOnInit(): void {

    // let response = this.service.getAllPatient();
    // response.subscribe((data)=>this.patients=data);
  }



  // patients:any;
  // message:any;
  // patientId:number;
  // tablehide:boolean=false;
  // constructor(private service:PatientRegisistrationServiceService) { }


  // public getPatientDetails(){
  //   let response= this.service.getPatientById(this.patientId);
  //   response.subscribe((data)=>this.patients=data);
  // }


 
  // ngOnInit(): void {

  // //  let response = this.service.getAllPatient();
  //   // response.subscribe((data)=>this.patients=data);
  // }
  }
