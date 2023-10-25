package com.student.web.controller;
import java.util.List;

import com.student.web.model.Student;
import com.student.web.repository.StudentRepository;
import com.student.web.service.StudentService;

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
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping(value="/all")
    public List<Student> getAllStudents() {
        return studentService.findAll(Sort.by("stud_name").ascending());
    }


    @PostMapping(value="/students")
    public String createStudent(@Valid @RequestBody Student student){
        return studentService.insert(student);
    }


   }


    

