package com.student.web.controller;
import java.util.List;

import com.student.web.model.student;
import com.student.web.repository.student_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.domain.Sort;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;


@RestController
@EnableAutoConfiguration
@RequestMapping("/api")
@CrossOrigin
@Validated



public class student_controller {
    @Autowired
    private student_repository student_repository;

    @GetMapping(value="/all")
    public List<student> getAllStudents() {
        return student_repository.findAll(Sort.by("stud_name").ascending());
    }
    private static final String ADMISSION_NUMBER_PREFIX= "R-";
    private static int admissionNumberCounter=0;

    @PostMapping(value="/students")
    public String createStudent(@Valid @RequestBody student student){
        student.setAdmission_no(generateAdmissionNumber());
        student insertedStudent=student_repository.insert(student);

        return "student created  " +insertedStudent.getStud_name();

    }

    private synchronized String generateAdmissionNumber(){
        String sequenceNumber = String.format("%03d",++admissionNumberCounter);
        return ADMISSION_NUMBER_PREFIX+ sequenceNumber;
    }
   }


    

