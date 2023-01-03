import React, { useEffect, useState } from 'react'
import Base from "../component/base"
import {Form, FormGroup, Label, Input} from 'reactstrap'
import { Card, CardBody, CardHeader, Container, Button , Row, Col} from 'reactstrap'
import {signup} from '../services/UserServices'
import { toast } from 'react-toastify'


const Signup = () => {

  

  const [data, setData]=useState({
      firstname: '',
      lastname:'',
      email:'',
      password:'',
      phone:'',
      dob:'',
      createdby:'',
      updatedby:'',
      cdate:'',
      udate:'',
      
  })

  const [error, setError]=useState({
    errors:{},
    isError: false,
  })
  
 
  

  const handleChange=(event,property)=>{
    setData({...data,[property]:event.target.value})  
  }

  const resetData=()=>{
    setData({
      firstname: '',
      lastname:'',
      email:'',
      password:'',
      phone:'',
      dob:'',
      createdby:'',
      updatedby:'',
      cdate:'',
      udate:'',
    })
  }

  const submitForm=(event)=>{
    event.preventDefault()

    if(error.isError){
      alert("Form data is invalid!!")
      return;
    }
    //data validate
    

    //call
    signup(data).then((resp)=>{
      console.log(resp);
      console.log("success log");
      toast("Success"+resp.username)
      //alert("Patient is Register Successfully and Patient Username is "+resp.username);
      setData({
        firstname: '',
        lastname:'',
        email:'',
        password:'',
        phone:'',
        dob:'',
        createdby:'',
        updatedby:'',
        cdate:'',
        udate:''
      });
    }).catch((error)=>{
      console.log(error);
      console.log("Error Log");
      
    });
  }

  return (
    <div>
      <Base>
      <Container style={{padding: "50px"}}>
        <Row>
          

          <Col >
        <Card>
          <CardHeader >
            <h1>Register Here</h1>
          </CardHeader>
          <CardBody>
            <Form onSubmit={submitForm}>
              <FormGroup>
                <Label for="firstname">
                  First Name
                </Label>
                <Input
                  id="firstaname"
                  name="firstname"
                  placeholder="Enter Here"
                  type="text"
                  onChange={(e)=>handleChange(e,'firstname')}
                 
                  value={data.firstname}
                  invalid={error.errors?.response?.data?.firstname ? true :false}
                />
              </FormGroup>

              <FormGroup>
                <Label for="lastname">
                  Last Name
                </Label>
                <Input
                  id="lastname"
                  name="lastname"
                  placeholder="Enter Here"
                  type="text"
                  onChange={(e)=>handleChange(e,'lastname')}
                  value={data.lastname}
                />
              </FormGroup>

              <FormGroup>
                <Label for="email">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter Here"
                  type="email"
                  onChange={(e)=>handleChange(e,'email')}
                  value={data.email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter Here"
                  type="password"
                  onChange={(e)=>handleChange(e,'password')}
                  value={data.password}
                />
              </FormGroup>

              <FormGroup>
                <Label for="phone">
                  Phone No 
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Enter Here"
                  type="number"
                  onChange={(e)=>handleChange(e,'phone')}
                  value={data.phone}
                />
              </FormGroup>

              <FormGroup>
                <Label for="dob">
                  DOB
                </Label>
                <Input
                  id="dob"
                  name="dob"
                  placeholder="Enter Here"
                  type="date"
                  onChange={(e)=>handleChange(e,'dob')}
                  value={data.dob}
                />
              </FormGroup>
              <FormGroup>
                <Label for="createdby">
                  Created By 
                </Label>
                <Input
                  id="createdby"
                  name="createdby"
                  placeholder="Enter Here"
                  type="text"
                  onChange={(e)=>handleChange(e,'createdby')}
                  value={data.createdby}
                />
              </FormGroup>
              <FormGroup>
                <Label for="updatedby">
                    Updated By 
                </Label>
                <Input
                  id="updatedby"
                  name="updatedby"
                  placeholder="Enter Here"
                  type="text"
                  onChange={(e)=>handleChange(e,'updatedby')}
                  value={data.updatedby}
                />
              </FormGroup>
              <FormGroup>
                <Label for="cdate">
                  Created Date
                </Label>
                <Input
                  id="cdate"
                  name="cdate"
                  placeholder="Enter Here"
                  type="date"
                  onChange={(e)=>handleChange(e,'cdate')}
                  value={data.cdate}
                />
              </FormGroup>
              <FormGroup>
                <Label for="udate">
                  Updated Date
                </Label>
                <Input
                  id="udate"
                  name="udate"
                  placeholder="Enter Here"
                  type="date"
                  onChange={(e)=>handleChange(e,'udate')}
                  value={data.udate}
                />
              </FormGroup>
              <div>
                <Button color="primary">
                  Register
                </Button>
                {' '}
                <Button onClick={resetData} color="danger" type='reset'>
                  Clear
                </Button>
                {' '}
              </div>
            </Form>  
          </CardBody>
        </Card>
        </Col>
        </Row>
      </Container>
      </Base>
      
    </div>
  )
}

export default Signup
