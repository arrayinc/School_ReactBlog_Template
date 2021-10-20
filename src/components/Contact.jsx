//import from react
import { Container } from "react-bootstrap";
import ModalButton from "./Modal";

//function that generates a contact form with email, name, contact number, message section for text with submit button that generates a modal.
function Contact() {
  return (
      <Container className="contact-page" fluid>
        <div className="contact-card">
          <div className="card-header text-uppercase">
            <h3>input feedback</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>
                  Your name<span className="text-danger">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label>
                  Your email<span className="text-danger">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label className="mb-0">Your contact number (Optional)</label>
                <input
                  name="contact"
                  type="text"
                  className="form-control"
                  placeholder="Contact"
                />
              </div>
              <div className="form-group">
                <label>
                  Message<span className="text-danger">*</span>
                </label>
                <textarea
                  name="message"
                  type="text"
                  className="form-control"
                  placeholder="Message"
                />
              </div>
            </form>
          </div>
          <ModalButton />
        </div>
      </Container>
  );
}

export default Contact;
