import React from 'react'
import { Card, CardBody, CardHeader, Container } from 'reactstrap'
import Base from "../component/base"
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <>
    <Base>
      <Container className='text-center'>
        <Card>
          <CardHeader>
            Login Here
          </CardHeader>
          <CardBody>
            <Form>
            <FormGroup>
              <Label
                for="username"
                hidden
              >
                Username
              </Label>
              <Input
                id="username"
                name="username"
                placeholder="Username"
                type="text"
              />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label
                for="password"
                hidden
              >
                Password
              </Label>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
            </FormGroup>
            {' '}
            <Button>
              Login
            </Button>
            {' '}
            <Button color="link">
            <Link to="/forgot">
              Forgot Password
            </Link>
            </Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    
      
    </Base>
    </>
  )
}

export default Login
