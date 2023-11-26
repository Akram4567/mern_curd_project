import axios from 'axios'



// CreateStudent Request
export async function createStudent(postBody) {
    try{
        const res = await axios.post("http://localhost:5080/api/v1/createStudent",postBody)
        return res.status
        
    }catch(e) {

        return e

    }
}



// ReadStudent Request
export async function readStudent() {
    try{
        const res = await axios.get("http://localhost:5080/api/v1/readStudent")
        
        
        
       
       return res.data.data
        
        
    }catch(e) {

        return e

    }
}



// ReadStudentById Request
// export async function readStudentById(id) {
//     try{
//         const res = await axios.get("http://localhost:5080/api/v1/readStudentById"+id)
//         // console.log(res)
//         const jdata = await res.json()
//         return jdata['data'][0]
        
//     }catch(e) {

//         return e

//     }
// }




export async function readStudentById(id){
    try {
        let res=await fetch("http://localhost:5080/api/v1/readStudentById"+id);
        let JSONData=await res.json();
        return JSONData['data'][0];
        console.log(JSONData)
    }catch (e) {
        return []
    }
}




// UpdateStudent Request
export async function updateStudent(postBody,id) {
    try{
        const res = await axios.post("http://localhost:5080/api/v1/updateStudent/"+id,postBody)
        return res
        
    }catch(e) {

        return  false

    }
}



// DeleteStudent Request
export async function deleteStudent(id) {
    try{
        const res = await axios.delete("http://localhost:5080/api/v1/deleteStudent/"+id,)
        return res
        
    }catch(e) {

        return e

    }
}



