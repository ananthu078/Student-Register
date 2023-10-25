package com.student.web.service;

import java.util.List;

import org.springframework.data.domain.Sort;

import com.student.web.model.Student;

public interface StudentService{

    List<Student> findAll(Sort ascending);

    String insert( Student student);


}