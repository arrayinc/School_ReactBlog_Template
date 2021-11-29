//imports from react
import { useEffect, useState } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

//function that passes a use state for author clicked and picture size
const About = ({ blogInfo }) => {
  const [authorClicked, setAuthorClicked] = useState(0);
  const [pictureOpacity, setPictureOpacity] = useState();

  //use effect that changes about-image clicked to 70% opacity when clicked, then resets to default 100% opacity when other images are clicked.
  useEffect(() => {
    document.querySelectorAll(".about-image")[0].style.opacity = "";
    document.querySelectorAll(".about-image")[1].style.opacity = "";
    document.querySelectorAll(".about-image")[2].style.opacity = "";
    try {
      document.querySelectorAll(".about-image")[pictureOpacity].style.opacity =
        "70%";
    } catch (e) { }
  }, [pictureOpacity]);

  //sets an image onClick event on images themselves that when clicked will display defined authorClicked info in defined bio container
  return (
    <Container className="about-container" fluid >
      <Row>
        <Col>
          <Image
            onClick={() => {
              setAuthorClicked(blogInfo[0].author);
              setPictureOpacity(0);
            }}
            className="about-image"
            src={blogInfo[0].author.avatar}
            roundedCircle
          />
        </Col>
        <Col>
          <Image
            onClick={() => {
              setAuthorClicked(blogInfo[1].author);
              setPictureOpacity(1);
            }}
            className="about-image"
            src={blogInfo[1].author.avatar}
            roundedCircle
          />
        </Col>
        <Col>
          <Image
            onClick={() => {
              setAuthorClicked(blogInfo[2].author);
              setPictureOpacity(2);
            }}
            className="about-image"
            src={blogInfo[2].author.avatar}
            roundedCircle
          />
        </Col>
      </Row>
      <Container className="bio-container">
        {authorClicked === 0 ? <h1>Click an Author</h1> : ''}
        <h1>{authorClicked.name}</h1>
        <h5>{authorClicked.age}</h5>
        <h4>{authorClicked.about}</h4>
      </Container>
    </Container>
  );
}
export default About;
