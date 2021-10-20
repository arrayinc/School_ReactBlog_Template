//imports from react
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

//function to generate a modal upon button click that's imported on Contact.jsx
function ModalButton() {
    const [show, setShow] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" onClick={() => handleShow()}>
                Send Message!
            </Button>
            <Modal
                show={show}
                onHide={() => handleClose()}
            >
                <Modal.Header>
                    <Modal.Title>Thank you!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thanks for reaching out to us, we have received your message.
                </Modal.Body>
                <Modal.Footer>
                    <Button href="/contact" variant="secondary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalButton;
