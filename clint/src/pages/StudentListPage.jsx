import React from 'react';
import StudentList from '../components/StudentList'

import Navber from './../components/Navber';

const StudentListPage = () => {
    return (
        <>
           <Navber/>
           <StudentList/> 
        </>
    );
};

export default StudentListPage;