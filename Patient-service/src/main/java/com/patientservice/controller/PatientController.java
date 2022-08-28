package com.patientservice.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.patientservice.VO.ResponseTemplateVO;
import com.patientservice.entity.Patient;
import com.patientservice.service.PatientService;

@RestController
@RequestMapping("/patients")
@CrossOrigin(origins = "*")
public class PatientController {

	
	@Autowired
	private PatientService patientService;
	
	/*
	 * Adding a patient*
	                    */
	
	@PostMapping("/")
    public String savePatient(@RequestBody Patient patient) {
  
        return patientService.savePatient(patient);
    }
	
	/*
	 * Retreive  single patient by id *
                                    	 */
	
	
	@GetMapping("/{id}")
    public ResponseTemplateVO getPatientWithDoctor(@PathVariable("id") Long patientId) {
  
        return patientService.getPatientWithDoctor(patientId);
    }
	
	/*
	 * Retrieve all patient information *
                                     	 */
	
	 @GetMapping("/getAllPatients")
	    public List<Patient> findAllPatients() {
	        return patientService.findAll();
	    }
	
	
	
}
