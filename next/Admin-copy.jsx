import{ Form, Modal, Container, Button } from 'react-bootstrap'
import { useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addContent, selectContent } from "../state/contentSlice";


const Admin = ({ defaultContent, setShow, show}) => {
  const dispatch = useDispatch(); // redux addition
  const content = useSelector(selectContent);
const [response, setResponse] = useState({title: ""}); //we use this to keep track of the form input, see handleSubmit

  
  //this function takes the form responses and makes them in to a key value pair, then puts it into 'response'
  const updateField = (e) => {
      setResponse({
          ...response,
          [e.target.name]: e.target.value
      })  
  }

  const handleClose = () => setShow(false);

 // reset the site to original content   
  const resetSite = () => {
    handleClose();
    localStorage.setItem("storedContent", JSON.stringify(defaultContent)) 
    window.location.reload(false);
  }

//send updated library content back to app.js
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose()
        let updateContentArr =[ 
            ...content, response];
        
          if (response.title) {   //this is to fix adding an empty {} to updateArr on submit
         dispatch(addContent(updateContentArr))
        setResponse({}) 
          }
    }
    
     return (
      <Container >
      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className="bg-dark text-white p-3" closeButton>
          <Modal.Title >Update Content</Modal.Title>
        </Modal.Header>
          <Form className="bg-secondary" >
            {/* add lines here to match the keys in your objects within the data file */}
            <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="id" name='id' onChange={updateField}/> 
            <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="destination" name='destination' onChange={updateField}/> 
            <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="blogPreviewImg" name='blogPreviewImg' onChange={updateField}/> 
            <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="title" name='title' onChange={updateField}/> 
            <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" as="textarea" placeholder="description" name="description" aria-label="With textarea" onChange={updateField}/>
            <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="blogPostImg" name='blogPostImg' onChange={updateField}/> 
            <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="author" name='author' onChange={updateField}/> 
            <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="datePublished" name='datePublished' onChange={updateField}/> 
            <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" as="textarea" placeholder="content" name="content" aria-label="With textarea" onChange={updateField}/>
          </Form>
        <Modal.Footer className="bg-dark">
          <Button size="sm" variant="secondary" onClick={resetSite}>Reset Site</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
      </Container>
    )
}

export default Admin
