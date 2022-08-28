package com.patientservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.patientservice.VO.Doctor;
import com.patientservice.VO.ResponseTemplateVO;
import com.patientservice.entity.Patient;
import com.patientservice.repository.PatientRepository;

@Service
public class PatientService {
	
	@Autowired
	private PatientRepository patientRepository;
	
	 @Autowired
	    private RestTemplate restTemplate;

	public String savePatient(Patient patient) {
		
		 patientRepository.save(patient);
		 return "Hi " + patient.getPatientName()+ " your Registration process successfully completed";
	}

	public ResponseTemplateVO getPatientWithDoctor(Long patientId) {
		 ResponseTemplateVO vo = new ResponseTemplateVO();
	        Patient patient= patientRepository.findByPatientId(patientId);

	        Doctor doctor = restTemplate.getForObject("http://DOCTOR-SERVICE/doctors/"+patient.getDoctId(), Doctor.class);


	        vo.setPatient(patient);
	        vo.setDoctor(doctor);
	       	return vo ;
	}


	public List<Patient> findAll() {
		// TODO Auto-generated method stub
		return patientRepository.findAll();
	}
	


}
