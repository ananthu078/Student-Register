package com.student.web.repository;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.student.web.model.student;


public interface student_repository extends MongoRepository<student, String> {
    
}
