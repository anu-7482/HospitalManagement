package com.example.hospital.doctorpatientserviceregistry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class DoctorpatientServiceregistryApplication {

	public static void main(String[] args) {
		SpringApplication.run(DoctorpatientServiceregistryApplication.class, args);
	}

}
