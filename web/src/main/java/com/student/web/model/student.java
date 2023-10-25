package com.student.web.model;


import jakarta.validation.constraints.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Document(collection = "student")
@Data
public class Student {
   @Id
   private String id;
   private String admission_no;
   private String stud_name;
   @NotNull(message="Enter name")
   private String dob;
   @NotNull(message="Enter dob")
    private String classValue;
   @NotNull(message="Enter class")
    private String division;
    @NotNull(message="Enter division")
    private String gender;

   }
