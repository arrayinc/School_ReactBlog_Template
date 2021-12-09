import React, { useState } from "react";
import { Container, Button, Form, Accordion, Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { addComments, selectComments } from '../state/commentSlice';
import { useParams } from 'react-router-dom'




const Comments = () => {
  //grab index from url from parent component link
  const { index } = useParams();

  const dispatch = useDispatch();
  const commentList = useSelector(selectComments);
  const storeCommentList = () => dispatch(addComments([...commentList, comment]));

  const [comment, setComment] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();

    //prevent empty 
    if (comment.name && comment.comment) {
      //or duplicate comments
      if (comment !== commentList[commentList.length - 1]) {

        // send comment list to redux 
        storeCommentList();
      }
    }
    //reset form and  component state
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
    <Container>
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header className="text-light bg-secondary">Leave a Comment</Accordion.Header>
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
            <Card key={i} className="mt-2 ">
              <Card.Header className=" text-light bg-secondary d-flex">{entry.name} says:</Card.Header>
              <Card.Text className="p-3 d-flex"> {entry.comment} </Card.Text>
            </Card>
          )
        }
      })}
    </Container>
  );
};

export default Comments;


