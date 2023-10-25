package com.student.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.student.web.model.Student;
import com.student.web.repository.StudentRepository;


@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepository student_repository;

    private static final String ADMISSION_NUMBER_PREFIX= "R-";
    private static int admissionNumberCounter=0;

    @Override
    public List<Student> findAll(Sort ascending) {
        return student_repository.findAll(Sort.by("stud_name").ascending());
    }

    @Override
    public String insert( Student student) {
        student.setAdmission_no(generateAdmissionNumber());
        Student insertedStudent=student_repository.insert(student);
        return "student created  " + insertedStudent.getStud_name();
    }

    private synchronized String generateAdmissionNumber(){
        String sequenceNumber = String.format("%03d",++admissionNumberCounter);
        return ADMISSION_NUMBER_PREFIX+ sequenceNumber;
    }

}