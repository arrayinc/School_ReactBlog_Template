import { Container, Carousel } from "react-bootstrap";

const HomepageCarousel = ({ blogInfo }) => {
    return (
        <Container className="container-fluid p-0" fluid>
            <Carousel>
                {blogInfo.map((carouselData, index) => {
                    return <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={carouselData.carousel.carouselImg}
                            alt={carouselData.carousel.alt}
                        />
                        <Carousel.Caption>
                            <h3>{carouselData.carousel.carouselTitle}</h3>
                            <p>{carouselData.carousel.carouselDescription}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                })}
            </Carousel>
        </Container>
    );
};

export default HomepageCarousel;
