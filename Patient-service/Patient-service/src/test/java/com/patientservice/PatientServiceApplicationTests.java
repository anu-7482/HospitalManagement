package com.patientservice;



import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.patientservice.entity.Patient;
import com.patientservice.repository.PatientRepository;


@SpringBootTest
class PatientServiceApplicationTests {

	
	@Autowired
	private PatientRepository repo;
	  
	/* TestCase for Retrieve Data*/
	
	@Test
	public void fetchAllPatients() {
	     repo.findAll();
	    assertNotNull(repo.findAll());
	}

	/* TestCase for Single Doctor */
	@Test
	public void fetchPatientById() {
		Patient p=repo.findById((long) 4).get();
		assertEquals(1,p.getDoctId());
		
	}
	
}
