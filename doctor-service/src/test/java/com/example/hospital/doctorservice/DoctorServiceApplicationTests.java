package com.example.hospital.doctorservice;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.hospital.doctorservice.entity.Doctor;
import com.example.hospital.doctorservice.repository.DoctorRepository;


@SpringBootTest
class DoctorServiceApplicationTests {
    
	
	@Autowired
	private DoctorRepository repo;
	  
	/* TestCase for Retrieve Data*/
	
	@Test
	public void fetchAllDoctors() {
	     repo.findAll();
	    assertNotNull(repo.findAll());
	}

	/* TestCase for Single Doctor */
	@Test
	public void fetchDoctorById() {
		Doctor d=repo.findById((long) 1).get();
		assertEquals(6,d.getNumberOfpatientAttneded());
		
	}
	
	
}
