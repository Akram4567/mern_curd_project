import React, { useEffect, useState } from 'react';
import { createStudent, readStudentById, updateStudent } from '../clintServises/apiRequest';
import {useNavigate} from "react-router-dom";


const RegistrationForm = () => {
    let navigate=useNavigate()
    const [UpdateID,SetUpdateID]=useState(null);


    const [formValue,setformValue] = useState(
        {
            firstName:"",
            lastName:"",
            gender:"",
            dateOfBirth:"",
            nationality:"",
            address:"",
            email:"", 
            phone:"", 
            admissionDate:"",
            courses:""
        }
    )


    useEffect(() => {
        (async ()=>{
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            SetUpdateID(id)
            if(id!==null){
               await FillForm(id)
            }
        })()
    }, []);
    
    const FillForm =async (id) => {
       let res= await readStudentById(id)
    //    alert(JSON.stringify(res.firstName))
       setformValue( 
    {
        firstName:res['firstName'],
        lastName:res['lastName'],
        gender:res['gender'],
        dateOfBirth:res['dateOfBirth'],
        nationality:res['nationality'],
        address:res['address'],
        email:res['email'], 
        phone:res['phone'], 
        admissionDate:res['admissionDate'],
        courses:res['courses']
    })
    }


    const setData = (key,value) => {
        setformValue(formValue => ({
            ...formValue,
            [key]:value
            
        }))
        
    }





    const Save = async () => {
        if(formValue===0){
           
            console.log('null')
   
        }
        else{
            if(UpdateID==null){
                let res=await createStudent(formValue);
                if(res){
                    // toast.success("Create Request Completed");
                    navigate("/");
                }
                else{
                    // toast.error("Create Request Fail");
                }
            }
            else{
                let res=await updateStudent(UpdateID,formValue);
                console.log(formValue)
                if(res){
                    // toast.success("Update Request Completed");
                    navigate("/");
                }
                else{
                    // toast.error("Update Request Fail");
                }
            }


        }

    }


    return (
        <div>
            
            <div className='container mx-auto mt-16'>
            <input value={formValue.firstName} onChange={(e)=>setData("firstName",e.target.value)} type="text" placeholder="FirstName" className="m-6 input input-bordered input-primary w-full max-w-xs" />
            <input value={formValue.lastName} onChange={(e)=>setData("lastName",e.target.value)} type="text" placeholder="LastName" className="m-6 input input-bordered input-primary w-full max-w-xs" />
            <input value={formValue.gender} onChange={(e)=>setData("gender",e.target.value)} type="text" placeholder="Gender" className="m-6 input input-bordered input-primary w-full max-w-xs" />
            <input value={formValue.dateOfBirth} onChange={(e)=>setData("dateOfBirth",e.target.value)} type="text" placeholder="DateOfBirth" className="m-6 input input-bordered input-primary w-full max-w-xs" />
            <input value={formValue.nationality} onChange={(e)=>setData("nationality",e.target.value)} type="text" placeholder="Nationality" className="m-6 input input-bordered input-primary w-full max-w-xs" />
            <input value={formValue.address} onChange={(e)=>setData("address",e.target.value)} type="text" placeholder="Address" className="m-6 input input-bordered input-primary w-full max-w-xs" />
            <input value={formValue.email} onChange={(e)=>setData("email",e.target.value)} type="text" placeholder="Email" className="m-6 input input-bordered input-primary w-full max-w-xs" />
            <input value={formValue.phone} onChange={(e)=>setData("phone",e.target.value)} type="text" placeholder="Phone" className="m-6 input input-bordered input-primary w-full max-w-xs" />
            <input value={formValue.admissionDate} onChange={(e)=>setData("admissionDate",e.target.value)} type="text" placeholder="AdmissionDate" className="m-6 input input-bordered input-primary w-full max-w-xs" />
            <input value={formValue.courses} onChange={(e)=>setData("courses",e.target.value)} type="text" placeholder="Courses" className="m-6 input input-bordered input-primary w-full max-w-xs" />
            <button onClick={()=>{Save()}} className="btn btn-active btn-primary m-6 w-full max-w-xs">Submit</button>
                
            </div>

        </div>
    );
};

export default RegistrationForm;