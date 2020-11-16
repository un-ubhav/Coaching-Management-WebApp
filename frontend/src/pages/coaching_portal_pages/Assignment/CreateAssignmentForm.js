import React,{useState,useEffect} from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import FormikControl from "../../../components/FormComponents/FormikControl";
import "../Student-info/AddStudent.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import axios from 'axios';

function CreateAssignmentForm() {
  const [file, setFile] = useState(null);
  const history = useHistory();
 
  const batchDropDownOptions = [
    { key: "Select a batch", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const subjectDropDownOptions = [
    { key: "Select a batch", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  //   const GenderradioOptions = [
  //     { key: "male", value: "male" },
  //     { key: "female", value: "female" },
  //   ];
  const initialValues = {
    title: "",
    instruction: "",
    subject: "",    
    selectBatchOption: "",
    point: "",
    dueDate: null,
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    instruction: Yup.string().optional(),
    subject: Yup.string().required("Required"),
    selectBatchOption: Yup.string().required("Required"),    
   
    point: Yup.string().required('required'),   
    dueDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    let formData = new FormData();
   
    formData.append("file",file[0]);
   
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    formData.append("title",values.title)
    formData.append("instruction",values.instruction)
    formData.append("subject",values.subject)
    formData.append("selectBatchOption",values.selectBatchOption)
    formData.append("point",values.point)
    formData.append("dueDate",values.dueDate)

    axios.post('http://localhost:8000/addAssignment',formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }}
      ).then(res=>{
        console.log(res.data)
      }).catch(err=>{
        console.log(err)
      })
    

    //history.push("/assignment");
  };

  return (
    <div className="AddStudent">
      <h1 style={{ textAlign: "center" }}>Create CreateAssignmentForm</h1>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              {/* <Row>
                <Col> */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title"
                    name="title"
                  />
                  <FormikControl
                    control="textarea"
                    label="Instruction"
                    name="instruction"
                  />
                  {/* <FormikControl
                  control='reactquill'
                  label="Instruction"
                  name="Instruction"
                  
                  /> */}
                  {/* <ReactQuill

                  /> */}

                  
                  <FormikControl
                    control="select"
                    label="Select a Batch"
                    name="selectBatchOption"
                    options={batchDropDownOptions}
                  />
                  <FormikControl
                    control="select"
                    label="Select a Subject"
                    name="subject"
                    options={subjectDropDownOptions}
                  />
                  <FormikControl
                    control="date"
                    label="Pick a due date"
                    name="dueDate"
                  />
                {/* </Col>

                <Col> */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Point"
                    name="point"
                  />
                  <input className="form-group" type='file'  onChange={
                (event)=>setFile(event.target.files)
              }/>

                {/* </Col>
              </Row> */}
              <Row style={{ justifyContent: "right" }}>
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default CreateAssignmentForm;
