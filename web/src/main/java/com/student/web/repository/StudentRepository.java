package com.student.web.repository;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.student.web.model.Student;


public interface StudentRepository extends MongoRepository<Student, String> {
    
}
