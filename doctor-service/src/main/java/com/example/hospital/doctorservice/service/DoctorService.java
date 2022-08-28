package com.example.hospital.doctorservice.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.hospital.doctorservice.entity.Doctor;
import com.example.hospital.doctorservice.repository.DoctorRepository;




@Service
public class DoctorService {

	@Autowired
	private DoctorRepository doctorRepository;

	public String registerDoctor(Doctor doctor) {
		
		doctorRepository.save(doctor);
	
		return "Hi Dr." + doctor.getDocName()+ " your Registration process successfully completed";
	}

	public List<Doctor> findAll() {
	
		return doctorRepository.findAll();
	}

	public Doctor fetchDoctorById(Long doctId) {
		
		return doctorRepository.findById(doctId).get();
	}

	public Doctor fetchDoctorByName(String docName) {
	
		return doctorRepository.findByDocNameIgnoreCase(docName);
	}
   

}
