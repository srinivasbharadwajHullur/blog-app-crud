import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [show, setShow] = useState(false);

  const handleSubmit = async(event) => {
    event.preventDefault();
    //Post data to server using json server
    await axios.post('http://localhost:3000/blogs', {
        name,
        email,
        title,
        content
    })
    .then((response) => {
        if (response.status === 201) {
            setShow(true);
            setTimeout(() => {
                navigate("/")
            }, 2000);
        }
    })
    .catch((error) => {
        console.log(error);
        setShow(false);
    })
  }
              
  return (
    <Container className='mt-5'>
        {/* Display the alert message */}
        {
            show && 
            <Alert variant='success'>
                <Alert.Heading>Blog posted successfully</Alert.Heading>
            </Alert>
        }
    <Form onSubmit={(e) => handleSubmit(e)}>
    <Row>
        <Col>
            <Form.Group className="mb-3 mt-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}  required/>
            </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        </Col>
    </Row>
    <Row>
    <Col>
        <Form.Group className="mb-3 mt-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col>
        <Form.Group className="mb-3 mt-3" controlId="formBasicContent">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" value={content} onChange={(e) => setContent(e.target.value)} rows={3} required />
        </Form.Group>
        </Col>
    </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
  )
}

export default CreateBlog