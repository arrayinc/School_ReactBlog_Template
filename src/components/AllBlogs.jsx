import Comments from './Comments'
import { Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectContent } from "../state/contentSlice";
import {useParams} from 'react-router-dom'

const AllBlogs = () => {
    const {index} = useParams()
    const blogInfo = useSelector(selectContent)
   
   
    return (
        <Container className="blog-section-container">
            <h1 className="blog-description">{blogInfo[index].blogDescription}</h1>
            <h3>
                Written by: {blogInfo[index].author.name}
            </h3>
            <Image
                className="blog-circle-avatar"
                src={blogInfo[index].author.avatar}
            />
            <h5 className="blog-author-info">{blogInfo[index].author.username}</h5>
            <h5 className="blog-author-info date-published-text">
                Published {blogInfo[index].datePublished}
            </h5>
             
            <Image className="blog-image" src={blogInfo[index].blogPostImg} fluid />
            <h3 className="blog-text">{blogInfo[index].content}</h3>
            {/* //don't need to pass index to comments, the url doesn't change so useParams can get it */}
            <Comments/>    
        </Container>
    );
};

export default AllBlogs;
