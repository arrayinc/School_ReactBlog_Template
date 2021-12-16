import siteData from '../SiteData';
import { Form, Modal, Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContent, selectContent } from '../state/contentSlice';
import { addComments } from '../state/commentSlice'


const Admin = ({ setShow, show }) => {
    const dispatch = useDispatch();
    const content = useSelector(selectContent);

    const [response, setResponse] = useState({ title: "" })//we use this to keep track of the form input, see handleSubmit

    //this function takes the form responses and makes them into a key value pair, then puts it into 'response'
    const updateField = (e) => {
        setResponse({
            ...response,
            [e.target.name]: e.target.value
        })
    }

    const handleClose = () => setShow(false);

    //reset site to original content
    const resetSite = () => {
        handleClose();
        localStorage.setItem("storedContent", JSON.stringify(siteData));
        window.location.reload(false);
    }

    const resetComments = () => {
        handleClose();
        localStorage.clear("storedComments");
        window.location.reload(false);
    }

    //send updated library to redux store
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
        const updateContentArr = [
            ...content, response];

        if (response.title) {
            dispatch(addContent(updateContentArr))
            setResponse({})
        }
    }

    //test the back end
    const expressTest = () => {
        fetch('/express_backend')
          .then(response => response.text())
          .then(data => {
            alert(data)
          }
          )
      }

      const getSiteData = () => {
         
        fetch('/getcomments')
          .then(response => response.json())
          .then(data => {
            dispatch(addComments(data))
          }
          )
      
        fetch('/getcontent')
          .then(response => response.json())
          .then(data => {
            console.log(data)
         dispatch(addContent(data))
          }
          )
      }
       
      //getSiteData() 
   
    return (
        <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Title>Update Content</Modal.Title>
                <Form className="bg-secondary">
                    <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="author" name="author" onChange={updateField} />
                    <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="title" name="title" onChange={updateField} />
                    <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="description" name="description" onChange={updateField} />
                    <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="blogDescription" name="blogDescription" onChange={updateField} />
                    <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="title" name="title" onChange={updateField} />
                    <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="blogPostImg" name="blogPostImg" onChange={updateField} />
                </Form>
                <Modal.Footer className="bg-dark">
                    <Button size="sm" variant="secondary" onClick={resetSite}>Reset Site</Button>
                    <Button size="sm" variant="secondary" onClick={resetComments}>Reset Comments</Button>
                    <Button size="sm" variant="secondary" onClick={expressTest}>Test Backend</Button>
                    <Button size="sm" variant="secondary" onClick={getSiteData}>Reload Site</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </Container>

    )

}

export default Admin