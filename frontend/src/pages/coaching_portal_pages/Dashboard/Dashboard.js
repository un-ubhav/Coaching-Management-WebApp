import React,{useState,useEffect} from 'react';
import {Container , Row } from 'react-bootstrap';
import OverviewCard from '../../../components/OveriewCard';
import DateAndTime from '../../../components/Date-And-Time';
import GreetingUser from '../../../components/GreetingUser';


function Dashboard() {

  
  const [studentCount,setStudentCount]=useState(0)
  const [subjectCount,setSubjectCount]=useState(0)
  const [teacherCount,setTeacherCount]=useState(0)
  useEffect(()=>{
     fetch("/countStudents").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setStudentCount(jsonRes));
    fetch("/countSubjects").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setSubjectCount(jsonRes));
    fetch("/countTeachers").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setTeacherCount(jsonRes));

  },[])

 
  useEffect(()=>{
     
    fetch("/countSubjects").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setSubjectCount(jsonRes));
  },[])


  

  return (
    <>
    <Container >
      <Row style={{justifyContent:'Space-between',textAlign:'right'}}>
        <GreetingUser/>
        <DateAndTime/>
      </Row>
      <Row style={{margin:'auto'}}>
        <OverviewCard title={'Total Student'} value={studentCount}/>
        <OverviewCard title={'Braches'} value={subjectCount}/>
        
        <OverviewCard title={'Teachers'} value={teacherCount}/>
        <OverviewCard title={'Subjects'} value={subjectCount}/>
        
      </Row>
    </Container>
    </>
  );
}

export default Dashboard;