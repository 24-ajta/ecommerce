import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import SuccessComponent from './SuccessComponent';
import ErrorComponent from './ErrorComponent';
import LoadingComponent from './LoadingComponent';
import signup from '../images/signup1.jpg'
import './Signup.css';


const SignupComponent=()=>{
  const [success, setSuccess] = useState(false);
  const [error,setError] = useState(false);
  const [showform,setShowform] = useState(true);
  const [validationMessage,setValidationMessage]=useState();
  const [backendErrors,setBackendErrors] = useState({});
  const [loading,setLoading] = useState();

  const handleSuccess = () => {
    setSuccess(false); 
    setShowform(true);
  };
  
  const handleError=()=>{
    setError(false);
  }
 const initialValues={
  name:'',
  email:'',
  place:'',
  contact:''
 };


 const handleSubmit=async(values,{setErrors,resetForm})=>{
  try {
    setLoading(true)
    console.log("Before Axios")
    const token = localStorage.getItem('adminToken');
    console.log("token",token);
    const response= await axios.post(`http://localhost:3000/register`,values,
    {
      headers:{
        Authorization:`Bearer ${token}`,
      },
    }
    );
    console.log("After Axios");
    console.log("Form Submitted",response.data);

      if (response.data.errors) {
        setBackendErrors(response.data.errors);
        setErrors(response.data.errors); 
        setValidationMessage(response.data.message);
        setError(true);
        setSuccess(false);
      } else if (response.data.success) {
        setSuccess(true);
        setShowform(false);

      }
      resetForm();
    } catch (error) {
      setError(true);
    }finally{
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }

 };

 const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

    email: Yup.string()
    .email('Invalid email')
    .required('Required'),

    place:Yup.string()
    .min(2,"Invalid Address")
    .required("Required"),

  
  contact: Yup.string()
  .matches(/^[6-9]\d{9}$/, "Please enter valid phone number.")

});
return (
  <>
 
  {showform && (
    <div>
      <h1 className='mainheading' style={{ textAlign: "center", color: "orange" }}>Register</h1>
      <div className="maincontainer mt-5">
      <div className="formcontainer"  >
        <img src={signup} alt="image" />
        </div>
      <div className="shadow-lg formikcontainer">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={SignupSchema} 
      >
          <Form className='forms'>
            <div >
                <div className="heading">
                    <h3 style={{"color":"crimson"}}>Register your details here......</h3>
                </div>
            <div className="form-group text-center mt-5" >
            <label htmlFor='name' style={{ color: "orangered" }}>
                Name
                <Field type="text" id="name"  name = "name" className="form-control" style={{padding:"15px"}} />
                {/* {errors.name && touched.name ? (
                <div>{errors.name }  </div>
                ) : null} */}
                <ErrorMessage name="name" style={{color:"red"}} component="div"/>
                {backendErrors.name_empty && <div>{backendErrors.name_empty}</div>}
                {backendErrors.name && <div>{backendErrors.name}</div>}
                </label>
            </div>
            <div className="form-group text-center mt-5" >
            <label htmlFor='email' style={{ color: "orangered" }}>
                Email
                <Field type="email" id="email" className="form-control" name = "email"  style={{padding:"15px"}} />
                {/* {errors.email && touched.email ? (
                <div>{errors.email }  </div>
                ) : null} */}
                <ErrorMessage name="email" style={{color:"red"}} component="div"/>
                {backendErrors.email_empty && <div>{backendErrors.email_empty}</div>}
                {backendErrors.email && <div>{backendErrors.email}</div>}
                {backendErrors.email_invalid && <div>{backendErrors.email_invalid}</div>}
                {backendErrors.email_exist && <div>{backendErrors.email_exist}</div>}
                </label>
            </div>
            <div className="form-group text-center mt-5">
              <label htmlFor='place' style={{ color: "orangered" }}>
                Place
                <Field type="text" id="place" className="form-control" name = "place"  style={{padding:"15px"}}/>
                <ErrorMessage name="place" style={{color:"red"}} component="div"/>
                {backendErrors.place_empty && <div>{backendErrors.place_empty}</div>}
                {backendErrors.place && <div>{backendErrors.place}</div>}
              </label>
            </div>
            <div className="form-group text-center mt-5">
              <label htmlFor='contact' style={{ color: "orangered" }}>
                Contact Number
                <Field type="text" id="contact" className="form-control" name = "contact"  style={{padding:"15px"}}/>
                <ErrorMessage name="contact" style={{color:"red"}} component="div"/>
                {backendErrors.contact_empty && <div>{backendErrors.contact_empty}</div>}
                {backendErrors.contact && <div>{backendErrors.contact}</div>}
              </label>
            </div>
            {/* <div className="form-group text-center" >
            <label htmlFor='password' style={{ color: "blue" }}>
                Password
                <Field type="password" id="password" className="form-control" name = "password"   style={{padding:"15px"}}/>
                <ErrorMessage name="password" style={{color:"red"}} component="div"/>
  
                </label>
            </div> */}
  
            {/* <ErrorMessage name="name" style={{color:"red"}} component="div" /> */}
  
            <div className="form-group text-center " style={{padding:"20px"}}>
            <button type="submit" className="btn " style={{"backgroundColor":"orange"}} >Register</button>
            <ErrorMessage name="submitError" style={{color:"red"}} component="div" />
            </div>
            </div>
            
               
          </Form>       
         
      </Formik>
      </div>
      </div>
    
</div>
    )}
  <div>
    {loading?(<LoadingComponent/>):(<div>{
      <div>
         {success && <SuccessComponent onClose={handleSuccess}/>}
         {error && <ErrorComponent message={validationMessage} onClose={handleError}/>}
         </div>
      }
      </div>)}
  </div>

 
      

  </>
);

}


export default SignupComponent;