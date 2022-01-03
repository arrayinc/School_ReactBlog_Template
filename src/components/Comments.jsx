import React, { useState, useEffect } from 'react'
import { Container, Button, Form, Accordion, Card} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addComments } from '../state/commentSlice'
import { useParams } from 'react-router-dom';

const Comments = () => {
    //grab index from the url of the parent component - don't need to pass it as it is already there
    const { index } = useParams();

    //datbase

    const GetComments = () => {
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
    //global state 
    const dispatch = useDispatch();
    const commentList = useSelector(selectComments); //get list of comments from redux


    //local state (component and children)
    const [comment, setComment] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();

        //prevent empty comments
        if (comment.name && comment.comment) {
            //or duplicate comment
            if (comment !== commentList[commentList.length - 1]) {
                commentsUpload(comment);
                }
        }
        //reset the form and component state 
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

    useEffect(() => {
        GetComments();
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
