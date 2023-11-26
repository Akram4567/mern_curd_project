import React, { useEffect, useState } from 'react';
import { deleteStudent, readStudent } from '../clintServises/apiRequest';
import { Link } from 'react-router-dom';

const StudentList = () => {

    const [data,setData] = useState([])
    const [change,setChange]=useState(0)

    

   useEffect(()=> {

        (async()=> {
            const res = await readStudent()
            setData(res)
            
            
        })()
   },[change])



const deleteData = async(id) => {
     
    const res = await deleteStudent(id)
    setChange(new Date().getTime())
    // console.log(res)
}



   if(data.length===0) {
        <h1>Loading.....</h1>
   }else{
    return (
        <>
            <div className='container mx-auto mt-16'>

            <div className="overflow-x-auto">
                <table className="table">
                    
                    <thead>
                    <tr className="bg-yellow-400">
                        
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Gender</th>
                        <th>DateOfBirth</th>
                        <th>Nationality</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>AdmissionDate</th>
                        <th>Courses</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((item,i)=> {
                                return(
                                    <tr key={i}>
                                        <td>{item['firstName']}</td>
                                        <td>{item['lastName']}</td>
                                        <td>{item['gender']}</td>
                                        <td>{item['dateOfBirth']}</td>
                                        <td>{item['nationality']}</td>
                                        <td>{item['address']}</td>
                                        <td>{item['email']}</td>
                                        <td>{item['phone']}</td>
                                        <td>{item['admissionDate']}</td>
                                        <td>{item['courses']}</td>
                                        <td><button onClick={()=>{deleteData(item['_id'])}} className='bg-orange-600 px-3 rounded-md text-white'>D</button>
                                        <Link to={"/registrationForm?id="+item['_id']} className='bg-yellow-400 px-3 rounded-md text-white'>U</Link></td>

                                    </tr>
                                )
                            })
                        }
                    
                    
                    
                    </tbody>
                </table>
            </div>

         </div>

         
        </>
    );
   }
};

export default StudentList;



// firstName:{type:String},
// lastName:{type:String},
// gender:{type:String},
// dateOfBirth:{type:String},
// nationality:{type:String},
// address:{type:String},
// email:{type:String}, 
// phone:{type:String}, 
// admissionDate:{type:String},
// courses:{type:String}