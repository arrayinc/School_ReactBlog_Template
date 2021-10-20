import { Card, Button, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogPostCards = ({ blogInfo }) => {
    return (
        <CardGroup className="mx-5 cards">
            {blogInfo.map((blogCardData, index) => {
                return <Card key={index} className="mx-5 card">
                    <Card.Img variant="top" src={blogCardData.blogPreviewImg} />
                    <Card.Body>
                        <Card.Title className="card-text">{blogCardData.title}</Card.Title>
                        <Card.Text className="card-text">
                            {blogCardData.description}
                        </Card.Text>
                        <Link to={blogCardData.destination}>
                            <Button variant="info">
                                Learn More
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            })}
        </CardGroup>
    );
};

export default BlogPostCards;
