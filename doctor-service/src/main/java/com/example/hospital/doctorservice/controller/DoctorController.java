package com.example.hospital.doctorservice.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hospital.doctorservice.entity.Doctor;
import com.example.hospital.doctorservice.service.DoctorService;





@RestController
@RequestMapping("/doctors")
@CrossOrigin(origins = "*")
public class DoctorController {
	
	
	@Autowired
    private DoctorService doctorService;
	
   /*
    * Add Doctor *
                  */
	
    @PostMapping("/")
    public String registerDoctor(@RequestBody Doctor doctor) {
    	return doctorService.registerDoctor(doctor);
        
    }
    
    
  /* 
   * Retrieving all doctors *
                             */
    
    @GetMapping("/getAllDoctors")
    public List<Doctor> findAllDoctors() {
        return doctorService.findAll();
    }
  
    
    
    
   /*
      *Retrieve single doctor *
                                 */
    
    @GetMapping("/{id}")
	public Doctor fetchDoctorById(@PathVariable("id")Long doctId){
		
		return doctorService.fetchDoctorById(doctId);
		
	}
    
    
    /*
     * Retreive Doctor using name *
                                    */
    
    
    @GetMapping("/docName/{docName}")
	public Doctor fetchDoctorByName(@PathVariable("docName")String docName){
		
		return doctorService.fetchDoctorByName(docName);
		
	}
  
}
