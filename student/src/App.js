import './App.css';
import axios from 'axios';
import React ,{useState} from 'react';

const App = () => {
const [formData, setFormData]= useState({
    stud_name: '',
    dob: '',
    classValue: '',
    division: '',
    gender: '',
  });
const[errors, setErrors]= useState([]);
const[allData, setAlldata]= useState([]);


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();

  if(validateform(formData)){
    alert("Form is submitted");
 
  console.log('Name:', formData.stud_name);
    console.log('Date of Birth:', formData.dob);
    console.log('Class:', formData.classValue);
    console.log('Division:', formData.division);
    console.log('Gender:', formData.gender);
    
       axios.post("http://localhost:8080/api/students",formData)
    .then(response=>{
      if(response.data!=null){
        alert("saved successfully");
        alert(response.data);
     // Reset the form state to its initial values
     setFormData({
      stud_name: '',
      dob: '',
      classValue: '',
      division: '',
      gender: '',
    });
    axios.get('http://localhost:8080/api/all')
    .then(res=>{
      setAlldata(res.data );
      console.log(res.data);
    })
  }
  });

    axios.get('http://localhost:8080/api/all')
    .then(res => {
      setAlldata(res.data );
      console.log(res.data);
    });
 }
};
  

const validateform = (values)=>{
  let valid= true;
  const errors={}
  if (!["stud_name"]){
    errors.stud_name="Name cannot left empty";
    valid=false;
  }
  if(values.stud_name === "")
   {
    errors.stud_name="Name cannot be left empty";
    valid=false;
    }
    if (typeof formData["stud_name"] !== "undefined")
    {
       if(values.stud_name.match("[^a-zA-Z]+$"))
     {
      errors.stud_name="Name should contain only alphabets and letters";
       valid=false;
      }
   }
  if(!formData["dob"])
  {
    errors.dob="Date of birth is a mandatory field";
    valid=false;
  }
  if(!formData["classValue"])
  {
    errors.classValue ="Class is a mandatory field";
    valid=false;
  }
  if(!formData["division"])
  {
    errors.division="Division is a mandatory field";
    valid=false;
  }
  if(!formData["gender"])
  {
    errors.gender="Choose your gender";
    valid=false;
  }
  
  setErrors(errors);
 return valid; 
};

 
  return(
    
    <div name="Student_register">
     <div>
    <form name="studentform" onSubmit={handleSubmit}>
    <div>
      <h1>STUDENT REGISTRATION FORM</h1>
    </div>
    <div>
      <label align="right">Name:</label>
      <input
        type="text"
        placeholder='Enter your name'
        name="stud_name"
        value={formData.stud_name}
        onChange={handleChange}
      />  
      <p>{errors.stud_name}</p>
    </div>
    
    <div>
      <label>Date of Birth:&nbsp;</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      <p>{errors.dob}</p>
       </div>
      
    <div>
      <label>Class:
      <select name="classValue" value={formData.classValue} onChange={handleChange}>
        <option value="">Select Class</option>
        <option value="I">I</option>
        <option value="II">II</option>
        <option value="III">III</option>
        <option value="IV">IV</option>
        <option value="V">V</option>
        <option value="VI">VI</option>
        <option value="VII">VII</option>
        <option value="VIII">VIII</option>
        <option value="IX">IX</option>
        <option value="X">X</option>
        <option value="XI">XI</option>
        <option value="XII">XII</option>
      </select>
      </label>
      <p>{errors.classValue}</p>
    </div>
   
    <div>
    
      <label>Division:
      <select name="division" value={formData.division} onChange={handleChange}>
        <option value="">Select Division</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      </label>
      <p>{errors.division}</p>
    </div>
    
    <div>
      <label>Gender:</label>
      <label>
        <input
          type="radio"
          value="Male"
          name='gender'
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="Female"
          name='gender'
          onChange={handleChange}
        />
        Female
      </label>
      <p>{errors.gender}</p>
    </div>
    
    <button type="submit" value="student_register">Submit</button>
  </form>
  <div>
  <table>
 <thead>
  <tr>
    <th>Admission No</th>
    <th>Student Name</th>
    <th>Date of birth</th>
    <th>Class</th>
    <th>Division</th>   
    <th>Gender</th>
  </tr>
  </thead>
  <tbody>
     {allData.map((x) => (
        <tr>
          <td>{x?.admission_no}</td> 
          <td>{x?.stud_name}</td>
          <td>{x?.dob}</td>
          <td>{x?.classValue}</td>
          <td>{x?.division}</td>
          <td>{x?.gender}</td>
    </tr>
    ))}
    
</tbody>
</table>
</div>
</div>
</div>
  
  );
};



export default App;
