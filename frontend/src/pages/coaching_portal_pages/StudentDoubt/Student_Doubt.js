import React from 'react';
import {Container , Row } from 'react-bootstrap';
import DateAndTime from '../../../components/Date-And-Time';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormComponents/FormikControl";
import { Link } from "react-router-dom";
import { studentDoubtDemoData } from "./studentDoubtDemoData";
import DoubtCard from "../../../components/DoubtCard";
import MenuButton from '../../../components/MenuButton';
function Student_Doubt() {

return(
    <>
    
      
      

        <h1 style ={{color:"red",textAlign:"center"}}> Questions</h1>
        {studentDoubtDemoData.map((item, index) => {

              return ( 
                <div className="container">
              <DoubtCard names = {item.names} question = {item.question} answer={item.answer} /> 
              <Link to={`./studentDoubt/${item.id}`}>
              <div style={{marginLeft: "1021px"}}><MenuButton title={"Answer"} /></div>
                </Link> 
              </div>

              
            )
            } 
        )
        } 
    </>
);
}
export default Student_Doubt;