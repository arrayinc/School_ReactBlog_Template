import React, { useState, useEffect } from 'react'
import { Container, Button, Form, Accordion, Card} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addComments, selectComments } from '../state/commentSlice'
import { useParams } from 'react-router-dom';

const Comments = () => {
    const { index } = useParams();

    // add getComments and commentsUpload to pull info from database

    const getComments = () => {
        fetch('/comments')
        .then(response => response.json())
        .then(data => {
            console.log(data)
          dispatch(addComments(data))
        })
      }
     
    const commentsUpload = (comments) => {
        console.log(comments)
        fetch('/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(comments) 
        })
      }


    const dispatch = useDispatch();
    const commentList = useSelector(selectComments); 
                                                        //remove storeCommentList

    const [comment, setComment] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        if (comment.name && comment.comment) {
            if (comment !== commentList[commentList.length - 1]) {
                commentsUpload(comment);  //rm storeCommentList and add commentsUpload
                }
        }
        setComment({});
        e.target.reset()
    }

    const updateField = (e) => {
        setComment({
            ...comment, 
            index: index,
            [e.target.name]: e.target.value
        })
    }
                                                            //add useEffect then got to commentSlice if you have not
    useEffect(() => {
        getComments();
      }, [comment]);
    

    return (
        <div>
            <Container>
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="text-light bg-secondary">
                            Leave a comment:
                        </Accordion.Header>
                        <Accordion.Body>
                            <Form onSubmit={onSubmit}>
                                <Form.Group className="mb-3" controlId='exampleForm.ControlInput1'>
                                    <Form.Control name="name" placeholder="name" onChange={updateField} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId='exampleForm.ControlInput1'>
                                    <Form.Control as="textarea" name="comment" placeholder="comment" rows={3} onChange={updateField} />
                                </Form.Group>
                                <Button type="Submit">Submit</Button>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {commentList.map((entry, i) => {
                     if (entry.index === index) { //this is to make sure the comments only load on the correct blog
                        return (
                            <Card key={i} className="mt-2">
                                <Card.Header className="text-light bg-secondary d-flex"> {entry.name} says: </Card.Header>
                                <Card.Text className="p-3 d-flex"> {entry.comment}</Card.Text>
                            </Card>
                        )
                    }
                })}
            </Container>
            
        </div>
    )
}

export default Comments
