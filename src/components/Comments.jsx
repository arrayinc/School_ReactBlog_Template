import React, { useState } from "react";
import {  Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { addComments, selectComments } from '../state/commentSlice';

const Comments = () => {
  const dispatch = useDispatch();
  const commentList = useSelector(selectComments);
  const storeCommentList = () => dispatch(addComments([...commentList, comment]));
  const saveCommentList = () => localStorage.setItem("storedComments", JSON.stringify(commentList));
const [ comment, setComment ] = useState({});

//if (comment.name && comment.comment) {console.log(comment)}
   
const onSubmit = (e) => {
        e.preventDefault();

        //prevent empty or duplicate comments
        if (comment.name && comment.comment) {
        if (comment !== commentList[commentList.length-1]) {

        // send comment list to redux and local storage  
         storeCommentList();
         //saveCommentList();
         }
        }

        //reset form and memory
         setComment({})
         e.target.reset()
    
         
    }

    const updateField = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })  
    }
  return (
    <div>
      <h1>Leave a comment:</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control name="name" placeholder="name"  onChange={updateField}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" placeholder="comment" name="comment" rows={3} onChange={updateField}/>
        </Form.Group>
        <Button type='Submit'>Submit</Button>
      </Form>
      {console.log(commentList)}
         
          {commentList.map((entry, i) => {
             
                return (
                    <div key={i}>
                   <h1> {entry.name}: {entry.comment}</h1>
                   <Button>Reply</Button>
                   </div>
                    )
              
                
             })
         }
   
       
      
    </div>
  );
};

export default Comments;
