import axios from 'axios'

// Create Request
export async function createStudent(postBody) {
    const res = await axios.post("http://localhost:5080/api/v1/createStudent",postBody)
    try{
        return res
    }catch(e) {
        console.log(e)
    }
}





export async function readStudent() {
    const res = await axios.get("http://localhost:5080/api/v1/readStudent")
    try{
        return res.data.data
    }catch(e) {
        console.log(e)
    }
}





export async function readStudentById(id) {
    const res = await axios.get("http://localhost:5080/api/v1/readStudentById/"+id)
    try{
        // alert(JSON.stringify(res.data.data.firstName))
        return res.data.data
    }catch(e) {
        console.log(e)
    }
}





export async function updateStudent(id,postBody) {
    const res = await axios.post("http://localhost:5080/api/v1/updateStudent/"+id,postBody)
    try{
        
        return res
    }catch(e) {
        console.log(e)
    }
}




export async function deleteStudent(id) {
    const res = await axios.delete("http://localhost:5080/api/v1/deleteStudent/"+id)
    try{
        return res
    }catch(e) {
        console.log(e)
    }
}