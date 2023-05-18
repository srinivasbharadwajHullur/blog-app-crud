import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BlogList = ({blogs, handleDelete}) => {
  const navigate = useNavigate();
  // Define the handleViewBlog function
  const handleViewBlog = (id) => {
    navigate("/individualblog/"+id)
  }
  //Define the handleUpdateFunction
  const handleUpdateBlog = (id) => {
    navigate("/updateblog/"+id)
  }
 
  return (
    <>
    {
      blogs.length > 0 ? 
      blogs.map((blog) => {
        return (
          <tr key={blog.id}>
            <td>{blog.name}</td>
            <td>{blog.email}</td>
            <td>{blog.title}</td>
            <td>{blog.content}</td>
            <td>
              <Button style={{ marginRight: 5 }} onClick={() => handleViewBlog(blog.id)}>View</Button>
              <Button style={{ marginRight: 5 }} variant='warning' onClick={() => handleUpdateBlog(blog.id)}>Update</Button>
              <Button style={{ marginRight: 5 }} variant='danger' onClick={() => handleDelete(blog.id)}>Delete</Button>
            </td>
          </tr>
        )
      })
      : 
      <h1>No blogs to display</h1>
    } 
    </>
  )
}

export default BlogList