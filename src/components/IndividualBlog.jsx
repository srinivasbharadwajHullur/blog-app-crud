import axios from 'axios';
import React,{ useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const IndividualBlog = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const fetchIndividualBlogs = async() => {
    await axios.get('http://localhost:3000/blogs/'+params.id)
    .then((response) => {
      if (response.status === 200) {
        setName(response.data.name);
        setEmail(response.data.email);
        setTitle(response.data.title);
        setContent(response.data.content)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchIndividualBlogs()
  },[])

  const goToHome = () => {
      navigate("/")
  }

  return (
    <div>
    <Card style={{ width: '18rem', margin: '0px auto', marginTop: 50 }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>Blog Details</Card.Title>
          <Card.Text>{name}</Card.Text>
          <Card.Text>{email}</Card.Text>
          <Card.Text>{title}</Card.Text>
          <Card.Text>{content}</Card.Text>
        <Button onClick={goToHome} variant="primary">Home</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default IndividualBlog