import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import BlogList from './BlogList';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const fetchBlogs = async() => {
    await axios.get('http://localhost:3000/blogs')
    .then((response) => {
      if (response.status === 200) {
        //Update the blog list
        setBlogs(response.data)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    fetchBlogs()
  },[])

  const handleDelete = (id) => {
    setDeleteId(id)
    setShowModal(true);
  }

  const confirmDelete = () => {
    if (deleteId) {
      axios.delete('http://localhost:3000/blogs/'+deleteId)
        .then((response) => {
          const deleteBlogs = blogs.filter(blog => blog.id !== deleteId);
          setBlogs(deleteBlogs);
          setDeleteId(null);
          setShowModal(false)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  
 const handleCloseModal = () => {
  setShowModal(false);
  setDeleteId(null)
 }
  return (
    <><Table striped bordered hover>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email Address</th>
          <th>Title</th>
          <th>Content</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <BlogList blogs={blogs} handleDelete={handleDelete} />
      </tbody>
    </Table>
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this blog?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default Home