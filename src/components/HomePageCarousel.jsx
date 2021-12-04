import { Container, Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectContent} from "../state/contentSlice";


const HomepageCarousel = () => {
    const blogInfo = useSelector(selectContent)
      return (
        <Container className="container-fluid p-0" fluid>
            <Carousel>
                {/* this map breaks if items are added via admin page */}
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
