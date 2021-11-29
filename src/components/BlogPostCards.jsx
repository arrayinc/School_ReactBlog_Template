import { Card, Button, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectContent, deleteContent } from "../state/contentSlice";


const BlogPostCards = ({ blogInfo }) => {
    const dispatch = useDispatch();
    const blogs = useSelector(selectContent);
    console.log(blogs)

    const deleteHandler = (index) => {
        console.log(index)
        dispatch(deleteContent(index))
    }
    return (
        <CardGroup className="mx-5 cards">
            {blogs.map((blogCardData, index) => {
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
                        <Button variant="warning" onClick={() => deleteHandler(index)}>
                                Delete
                            </Button>
                    </Card.Body>
                </Card>
            })}
        </CardGroup>
    );
};

export default BlogPostCards;
