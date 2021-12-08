import React, { useState } from "react";
import { Button, Form, Accordion } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { addComments, selectComments } from '../state/commentSlice';
import { useParams } from 'react-router-dom'

const Comments = () => {
  const { index } = useParams()
  const dispatch = useDispatch();
  const commentList = useSelector(selectComments);
  const storeCommentList = () => dispatch(addComments([...commentList, comment]));

  const [comment, setComment] = useState({});
  const [threadNum, setThreadNum] = useState(1)
  //const [commentIndex, setCommentIndex] = useState(index)

  //if (comment.name && comment.comment) {console.log(comment)}
  //console.log(comment)
  const onSubmit = (e) => {
    e.preventDefault();

    //prevent empty or duplicate comments
    if (comment.name && comment.comment) {
      if (comment !== commentList[commentList.length - 1]) {

        // send comment list to redux 
        storeCommentList();
        setThreadNum(threadNum + 1)

      }
    }

    //reset form and memory
    setComment({})
    e.target.reset()


  }

  const updateField = (e) => {
    setComment({
      ...comment,
      index: index,
      thread: threadNum,
      [e.target.name]: e.target.value
    })

  }

  //   const Reply = (e) => {
  //     setComment({
  //         ...comment,
  //         index: index,
  //         thread: threadNum,
  //          [e.target.name]: e.target.value
  //     })  

  // }

  const Replies = (entry) => {
    return (

      //if (entry.reply.thread = entry.thread) {
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Reply</Accordion.Header>
          <Accordion.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control name="name" placeholder="name" onChange={updateField} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="comment" name="comment" rows={3} onChange={updateField} />
              </Form.Group>
              <Button type='Submit'>Submit</Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      //}
    )
  }

  return (
    <div>

      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Leave a Comment</Accordion.Header>
          <Accordion.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control name="name" placeholder="name" onChange={updateField} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="comment" name="comment" rows={3} onChange={updateField} />
              </Form.Group>
              <Button type='Submit'>Submit</Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>




      {commentList.map((entry, i) => {
        if (entry.index === index) {
          return (
            <div key={i}>
              <h2> {entry.name} says:</h2>
              <h3> {entry.comment} </h3>
              <Replies />
            </div>
          )
        }
      })}
    </div>
  );
};



export default Comments;
