import { Container, Image } from "react-bootstrap";
import Comments from "./Comments";

const AllBlogs = ({ blogInfo }) => {
    return (
        <Container className="blog-section-container">
            <h1 className="blog-description">{blogInfo.blogDescription}</h1>
            <h3>
                Written by: {blogInfo.author.name}
            </h3>
            <Image
                className="blog-circle-avatar"
                src={blogInfo.author.avatar}
            />
            <h5 className="blog-author-info">{blogInfo.author.username}</h5>
            <h5 className="blog-author-info date-published-text">
                Published {blogInfo.datePublished}
            </h5>
            <Image className="blog-image" src={blogInfo.blogPostImg} fluid />
            <h3 className="blog-text">{blogInfo.content}</h3>
            <Container className="comment-section">
                <Comments/>
            </Container>
        </Container>
    );
};

export default AllBlogs;
